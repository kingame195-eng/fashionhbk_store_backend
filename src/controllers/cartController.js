import mongoose from "mongoose";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import Coupon from "../models/Coupon.js";
import { asyncHandler } from "../middleware/errorHandler.js";

// ============================================
// Helper: Format cart response for frontend
// ============================================
const formatCartResponse = (cart) => {
  if (!cart || !cart.items) {
    return {
      items: [],
      subtotal: 0,
      total: 0,
      discount: 0,
      itemCount: 0,
      coupon: null,
    };
  }

  const items = cart.items.map((item) => ({
    _id: item._id,
    product: item.product,
    quantity: item.quantity,
    size: item.size,
    color: item.color,
    price: item.price,
  }));

  const subtotal = cart.totalPrice || 0;
  const discount = cart.discount || 0;
  const total = Math.max(subtotal - discount, 0);

  return {
    items,
    subtotal,
    total,
    discount,
    itemCount: cart.totalItems || 0,
    coupon: cart.coupon || null,
  };
};

// ============================================
// Helper: Get or create cart for user or guest
// ============================================
const getOrCreateCart = async (req) => {
  // If user is authenticated, use user cart
  if (req.user) {
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      cart = new Cart({ user: req.user.id, items: [] });
    }
    return cart;
  }

  // For guests, use sessionId from header or body
  const sessionId = req.headers["x-cart-session"] || req.body.sessionId;
  if (!sessionId) {
    return null;
  }

  let cart = await Cart.findOne({ sessionId });
  if (!cart) {
    cart = new Cart({ sessionId, items: [] });
  }
  return cart;
};

// ============================================
// Helper: Find cart for user or guest
// ============================================
const findCart = async (req) => {
  if (req.user) {
    return await Cart.findOne({ user: req.user.id });
  }

  const sessionId = req.headers["x-cart-session"];
  if (sessionId) {
    return await Cart.findOne({ sessionId });
  }

  return null;
};

/**
 * Get user's cart
 * GET /api/cart
 */
export const getCart = asyncHandler(async (req, res) => {
  const cart = await findCart(req);

  if (cart) {
    await cart.populate({
      path: "items.product",
      select: "name price images slug stock",
    });
  }

  res.status(200).json({
    success: true,
    data: { cart: formatCartResponse(cart) },
  });
});

/**
 * Add item to cart
 * POST /api/cart/items
 */
export const addToCart = asyncHandler(async (req, res) => {
  const { productId, quantity = 1, size, color } = req.body;

  // Validate productId format
  if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid product ID format",
    });
  }

  // Find product
  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  // Check stock
  if (product.stock < quantity) {
    return res.status(400).json({
      success: false,
      message: "Insufficient stock",
    });
  }

  // Get or create cart (supports both user and guest)
  let cart = await getOrCreateCart(req);
  if (!cart) {
    return res.status(400).json({
      success: false,
      message: "Cart session required. Please provide x-cart-session header.",
    });
  }

  // Check if item already exists in cart
  const existingItemIndex = cart.items.findIndex(
    (item) => item.product.toString() === productId && item.size === size && item.color === color
  );

  if (existingItemIndex > -1) {
    // Update quantity
    cart.items[existingItemIndex].quantity += quantity;
  } else {
    // Add new item
    cart.items.push({
      product: productId,
      quantity,
      size,
      color,
      price: product.price,
    });
  }

  await cart.save();

  // Populate product details
  await cart.populate({
    path: "items.product",
    select: "name price images slug stock",
  });

  res.status(200).json({
    success: true,
    message: "Item added to cart",
    data: { cart: formatCartResponse(cart) },
  });
});

/**
 * Update cart item quantity
 * PUT/PATCH /api/cart/items/:itemId
 */
export const updateCartItem = asyncHandler(async (req, res) => {
  const { itemId } = req.params;
  const { quantity } = req.body;

  const cart = await findCart(req);
  if (!cart) {
    return res.status(404).json({
      success: false,
      message: "Cart not found",
    });
  }

  const itemIndex = cart.items.findIndex((item) => item._id.toString() === itemId);

  if (itemIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Item not found in cart",
    });
  }

  // Check stock before updating
  const product = await Product.findById(cart.items[itemIndex].product);
  if (product && quantity > product.stock) {
    return res.status(400).json({
      success: false,
      message: `Only ${product.stock} items available in stock`,
    });
  }

  if (quantity <= 0) {
    // Remove item
    cart.items.splice(itemIndex, 1);
  } else {
    // Update quantity
    cart.items[itemIndex].quantity = quantity;
  }

  await cart.save();

  await cart.populate({
    path: "items.product",
    select: "name price images slug stock",
  });

  res.status(200).json({
    success: true,
    message: "Cart updated",
    data: { cart: formatCartResponse(cart) },
  });
});

/**
 * Remove item from cart
 * DELETE /api/cart/items/:itemId
 */
export const removeFromCart = asyncHandler(async (req, res) => {
  const { itemId } = req.params;

  const cart = await findCart(req);
  if (!cart) {
    return res.status(404).json({
      success: false,
      message: "Cart not found",
    });
  }

  cart.items = cart.items.filter((item) => item._id.toString() !== itemId);
  await cart.save();

  await cart.populate({
    path: "items.product",
    select: "name price images slug stock",
  });

  res.status(200).json({
    success: true,
    message: "Item removed from cart",
    data: { cart: formatCartResponse(cart) },
  });
});

/**
 * Clear cart
 * DELETE /api/cart
 */
export const clearCart = asyncHandler(async (req, res) => {
  const cart = await findCart(req);
  if (cart) {
    cart.items = [];
    cart.coupon = null;
    cart.discount = 0;
    await cart.save();
  }

  res.status(200).json({
    success: true,
    message: "Cart cleared",
    data: { cart: formatCartResponse(null) },
  });
});

/**
 * Apply coupon to cart
 * POST /api/cart/coupon
 */
export const applyCoupon = asyncHandler(async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({
      success: false,
      message: "Coupon code is required",
    });
  }

  const cart = await findCart(req);
  if (!cart || cart.items.length === 0) {
    return res.status(400).json({
      success: false,
      message: "Cart is empty",
    });
  }

  // Validate coupon from database
  let coupon;
  try {
    coupon = await Coupon.findValidCoupon(code.toUpperCase());
  } catch (e) {
    // findValidCoupon may throw
  }

  if (!coupon) {
    return res.status(400).json({
      success: false,
      message: "Invalid coupon code",
    });
  }

  // Check if user can use this coupon
  if (req.user) {
    const canUse = coupon.canBeUsedBy(req.user._id);
    if (!canUse) {
      return res.status(400).json({
        success: false,
        message: "You have already used this coupon",
      });
    }
  }

  // Check minimum purchase
  if (coupon.minPurchase && cart.totalPrice < coupon.minPurchase) {
    return res.status(400).json({
      success: false,
      message: `Minimum purchase of $${coupon.minPurchase} required`,
    });
  }

  // Calculate discount
  const discountAmount = coupon.calculateDiscount(cart.totalPrice);

  cart.coupon = code.toUpperCase();
  cart.discount = Math.min(discountAmount, cart.totalPrice); // Don't exceed cart total
  await cart.save();

  await cart.populate({
    path: "items.product",
    select: "name price images slug stock",
  });

  res.status(200).json({
    success: true,
    message: `Coupon applied! You saved $${cart.discount.toFixed(2)}`,
    data: { cart: formatCartResponse(cart) },
  });
});

/**
 * Remove coupon from cart
 * DELETE /api/cart/coupon
 */
export const removeCoupon = asyncHandler(async (req, res) => {
  const cart = await findCart(req);
  if (!cart) {
    return res.status(404).json({
      success: false,
      message: "Cart not found",
    });
  }

  cart.coupon = null;
  cart.discount = 0;
  await cart.save();

  await cart.populate({
    path: "items.product",
    select: "name price images slug stock",
  });

  res.status(200).json({
    success: true,
    message: "Coupon removed",
    data: { cart: formatCartResponse(cart) },
  });
});

/**
 * Merge guest cart after login
 * POST /api/cart/merge
 */
export const mergeGuestCart = asyncHandler(async (req, res) => {
  const { guestSessionId, items } = req.body;

  // Get or create user cart
  let cart = await Cart.findOne({ user: req.user.id });
  if (!cart) {
    cart = new Cart({ user: req.user.id, items: [] });
  }

  // Helper function to merge an item into cart
  const mergeItem = async (item) => {
    const product = await Product.findById(item.productId || item.product);
    if (!product) return;

    const productId = (item.productId || item.product).toString();
    const existingIndex = cart.items.findIndex(
      (i) => i.product.toString() === productId && i.size === item.size && i.color === item.color
    );

    if (existingIndex > -1) {
      cart.items[existingIndex].quantity += item.quantity;
    } else {
      cart.items.push({
        product: productId,
        quantity: item.quantity,
        size: item.size,
        color: item.color,
        price: product.price,
      });
    }
  };

  // 1. Merge items from localStorage (if provided)
  if (items && Array.isArray(items) && items.length > 0) {
    for (const item of items) {
      await mergeItem(item);
    }
  }

  // 2. Merge items from guest session cart (if exists in database)
  if (guestSessionId) {
    const guestCart = await Cart.findOne({ sessionId: guestSessionId });
    if (guestCart && guestCart.items.length > 0) {
      for (const item of guestCart.items) {
        await mergeItem({
          product: item.product,
          quantity: item.quantity,
          size: item.size,
          color: item.color,
        });
      }
      // Delete guest cart after merge
      await Cart.deleteOne({ sessionId: guestSessionId });
    }
  }

  await cart.save();

  await cart.populate({
    path: "items.product",
    select: "name price images slug stock",
  });

  res.status(200).json({
    success: true,
    message: "Cart merged successfully",
    data: { cart: formatCartResponse(cart) },
  });
});

/**
 * Validate cart (check stock, prices)
 * POST /api/cart/validate
 */
export const validateCart = asyncHandler(async (req, res) => {
  const cart = await findCart(req);

  if (cart) {
    await cart.populate({
      path: "items.product",
      select: "name price images slug stock",
    });
  }

  if (!cart || cart.items.length === 0) {
    return res.status(200).json({
      success: true,
      data: {
        valid: true,
        cart: formatCartResponse(null),
        issues: [],
      },
    });
  }

  const issues = [];
  let hasChanges = false;

  for (let i = cart.items.length - 1; i >= 0; i--) {
    const item = cart.items[i];
    const product = item.product;

    // Check if product still exists
    if (!product) {
      issues.push({
        type: "removed",
        itemId: item._id,
        message: "Product no longer available",
      });
      cart.items.splice(i, 1);
      hasChanges = true;
      continue;
    }

    // Check stock
    if (product.stock < item.quantity) {
      if (product.stock === 0) {
        issues.push({
          type: "out_of_stock",
          itemId: item._id,
          productName: product.name,
          message: `${product.name} is out of stock`,
        });
        cart.items.splice(i, 1);
        hasChanges = true;
      } else {
        issues.push({
          type: "quantity_reduced",
          itemId: item._id,
          productName: product.name,
          oldQuantity: item.quantity,
          newQuantity: product.stock,
          message: `${product.name} quantity reduced to ${product.stock}`,
        });
        cart.items[i].quantity = product.stock;
        hasChanges = true;
      }
    }

    // Check price changes
    if (item.price !== product.price) {
      issues.push({
        type: "price_changed",
        itemId: item._id,
        productName: product.name,
        oldPrice: item.price,
        newPrice: product.price,
        message: `${product.name} price changed from $${item.price} to $${product.price}`,
      });
      cart.items[i].price = product.price;
      hasChanges = true;
    }
  }

  if (hasChanges) {
    await cart.save();
  }

  res.status(200).json({
    success: true,
    data: {
      valid: issues.length === 0,
      cart: formatCartResponse(cart),
      issues,
    },
  });
});

/**
 * Sync local cart items to server (after login)
 * POST /api/cart/sync
 */
export const syncCart = asyncHandler(async (req, res) => {
  const { items } = req.body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      success: false,
      message: "Items array is required",
    });
  }

  const cart = await getOrCreateCart(req);
  if (!cart) {
    return res.status(400).json({
      success: false,
      message: "Unable to identify cart. Please provide session ID or login.",
    });
  }

  for (const item of items) {
    const { productId, quantity = 1, size, color } = item;

    if (!productId || !mongoose.Types.ObjectId.isValid(productId)) continue;

    const product = await Product.findById(productId);
    if (!product || !product.isActive) continue;

    // Check if item already exists in cart
    const existingIndex = cart.items.findIndex(
      (ci) =>
        ci.product.toString() === productId &&
        (ci.size || "") === (size || "") &&
        (ci.color || "") === (color || "")
    );

    if (existingIndex > -1) {
      // Update quantity (take the larger value)
      cart.items[existingIndex].quantity = Math.max(cart.items[existingIndex].quantity, quantity);
      cart.items[existingIndex].price = product.price;
    } else {
      cart.items.push({
        product: productId,
        quantity: Math.min(quantity, product.stock || 99),
        price: product.price,
        size,
        color,
      });
    }
  }

  await cart.save();

  await cart.populate({
    path: "items.product",
    select: "name price images slug stock",
  });

  res.status(200).json({
    success: true,
    message: "Cart synced successfully",
    data: { cart: formatCartResponse(cart) },
  });
});
