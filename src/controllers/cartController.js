import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import { asyncHandler } from "../middleware/errorHandler.js";

/**
 * Get user's cart
 * GET /api/cart
 */
export const getCart = asyncHandler(async (req, res) => {
  // Check if user is authenticated
  if (!req.user) {
    return res.status(200).json({
      success: true,
      data: {
        cart: {
          items: [],
          totalItems: 0,
          totalPrice: 0,
        },
      },
    });
  }

  let cart = await Cart.findOne({ user: req.user.id }).populate({
    path: "items.product",
    select: "name price images slug stock",
  });

  if (!cart) {
    cart = {
      items: [],
      totalItems: 0,
      totalPrice: 0,
    };
  }

  res.status(200).json({
    success: true,
    data: { cart },
  });
});

/**
 * Add item to cart
 * POST /api/cart/items
 */
export const addToCart = asyncHandler(async (req, res) => {
  const { productId, quantity = 1, size, color } = req.body;

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

  // Find or create cart
  let cart = await Cart.findOne({ user: req.user.id });
  if (!cart) {
    cart = new Cart({ user: req.user.id, items: [] });
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
    data: { cart },
  });
});

/**
 * Update cart item quantity
 * PUT /api/cart/items/:itemId
 */
export const updateCartItem = asyncHandler(async (req, res) => {
  const { itemId } = req.params;
  const { quantity } = req.body;

  const cart = await Cart.findOne({ user: req.user.id });
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
    data: { cart },
  });
});

/**
 * Remove item from cart
 * DELETE /api/cart/items/:itemId
 */
export const removeFromCart = asyncHandler(async (req, res) => {
  const { itemId } = req.params;

  const cart = await Cart.findOne({ user: req.user.id });
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
    data: { cart },
  });
});

/**
 * Clear cart
 * DELETE /api/cart
 */
export const clearCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id });
  if (cart) {
    cart.items = [];
    await cart.save();
  }

  res.status(200).json({
    success: true,
    message: "Cart cleared",
    data: {
      cart: {
        items: [],
        totalItems: 0,
        totalPrice: 0,
      },
    },
  });
});
