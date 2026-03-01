import Cart from "../models/Cart.js";
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import Coupon from "../models/Coupon.js";

/**
 * @desc    Initialize checkout
 * @route   POST /api/checkout/initialize
 * @access  Private/Public
 */
export const initializeCheckout = async (req, res, next) => {
  try {
    let cartItems = [];
    let subtotal = 0;

    if (req.user) {
      const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");
      if (!cart || cart.items.length === 0) {
        return res.status(400).json({
          success: false,
          message: "Cart is empty",
        });
      }
      cartItems = cart.items;
      subtotal = cart.totalPrice || 0;
    } else if (req.body.items) {
      // Guest checkout
      for (const item of req.body.items) {
        const product = await Product.findById(item.productId);
        if (product) {
          const price = product.salePrice || product.price;
          subtotal += price * item.quantity;
          cartItems.push({
            product,
            quantity: item.quantity,
            size: item.size,
            color: item.color,
          });
        }
      }
    }

    // Calculate shipping options
    const shippingOptions = [
      {
        id: "standard",
        name: "Standard Shipping",
        price: subtotal >= 100 ? 0 : 5.99,
        estimatedDays: "5-7 business days",
      },
      {
        id: "express",
        name: "Express Shipping",
        price: 14.99,
        estimatedDays: "2-3 business days",
      },
      {
        id: "overnight",
        name: "Overnight Shipping",
        price: 29.99,
        estimatedDays: "1 business day",
      },
    ];

    // Tax rate
    const taxRate = 0.1;
    const tax = Number((subtotal * taxRate).toFixed(2));

    res.status(200).json({
      success: true,
      data: {
        items: cartItems.map((item) => ({
          productId: item.product._id,
          name: item.product.name,
          image: item.product.images?.[0]?.url || item.product.images?.[0],
          price: item.product.salePrice || item.product.price,
          quantity: item.quantity,
          size: item.size,
          color: item.color,
        })),
        subtotal,
        tax,
        shippingOptions,
        freeShippingThreshold: 100,
        qualifiesForFreeShipping: subtotal >= 100,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get shipping rates
 * @route   POST /api/checkout/shipping-rates
 * @access  Public
 */
export const getShippingRates = async (req, res, next) => {
  try {
    const { shippingAddress, subtotal = 0 } = req.body;

    // In a real app, you would calculate based on address
    const rates = [
      {
        id: "standard",
        name: "Standard Shipping",
        price: subtotal >= 100 ? 0 : 5.99,
        estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        estimatedDays: "5-7 business days",
      },
      {
        id: "express",
        name: "Express Shipping",
        price: 14.99,
        estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        estimatedDays: "2-3 business days",
      },
      {
        id: "overnight",
        name: "Overnight Shipping",
        price: 29.99,
        estimatedDelivery: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
        estimatedDays: "1 business day",
      },
    ];

    res.status(200).json({
      success: true,
      data: { rates },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Calculate tax
 * @route   POST /api/checkout/calculate-tax
 * @access  Public
 */
export const calculateTax = async (req, res, next) => {
  try {
    const { subtotal } = req.body;

    // Vietnam: 10% VAT
    const taxRate = 0.1;
    const tax = Number((subtotal * taxRate).toFixed(2));

    res.status(200).json({
      success: true,
      data: {
        taxRate,
        taxAmount: tax,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Validate coupon
 * @route   POST /api/checkout/validate-coupon
 * @access  Public
 */
export const validateCoupon = async (req, res, next) => {
  try {
    const { code, subtotal } = req.body;

    // Demo coupons - use Coupon model from DB
    let coupon = null;
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

    if (subtotal < (coupon.minPurchase || 0)) {
      return res.status(400).json({
        success: false,
        message: `Minimum order of $${coupon.minPurchase} required for this coupon`,
      });
    }

    let discount = 0;
    if (coupon.discountType === "percentage") {
      discount = (subtotal * coupon.discountValue) / 100;
      if (coupon.maxDiscount) discount = Math.min(discount, coupon.maxDiscount);
    } else if (coupon.discountType === "fixed") {
      discount = coupon.discountValue;
    }

    res.status(200).json({
      success: true,
      data: {
        code: coupon.code,
        type: coupon.discountType,
        value: coupon.discountValue,
        discount: Number(discount.toFixed(2)),
        message:
          coupon.discountType === "percentage"
            ? `${coupon.discountValue}% off applied`
            : `$${coupon.discountValue} off applied`,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Complete checkout and create order
 * @route   POST /api/checkout/complete
 * @access  Private/Public
 */
export const completeCheckout = async (req, res, next) => {
  try {
    const {
      shippingAddress,
      billingAddress,
      sameAsShipping = true,
      paymentMethod,
      shippingMethod = "standard",
      customerNote,
      guestEmail,
      couponCode,
    } = req.body;

    // Get cart items
    let cartItems = [];
    let subtotal = 0;

    if (req.user) {
      const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");
      if (!cart || cart.items.length === 0) {
        return res.status(400).json({
          success: false,
          message: "Cart is empty",
        });
      }
      cartItems = cart.items;
    } else if (req.body.items) {
      cartItems = req.body.items;
    } else {
      return res.status(400).json({
        success: false,
        message: "No items to checkout",
      });
    }

    // Calculate totals
    const orderItems = [];

    for (const item of cartItems) {
      const product = item.product._id ? item.product : await Product.findById(item.product);

      if (!product) {
        return res.status(400).json({
          success: false,
          message: `Product not found`,
        });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Insufficient stock for ${product.name}`,
        });
      }

      const price = product.salePrice || product.price;
      subtotal += price * item.quantity;

      orderItems.push({
        product: product._id,
        name: product.name,
        image: product.images?.[0]?.url || product.images?.[0] || "",
        price,
        quantity: item.quantity,
        size: item.size,
        color: item.color,
      });
    }

    // Calculate shipping
    const shippingCosts = { standard: 5.99, express: 14.99, overnight: 29.99 };
    const shippingCost = subtotal >= 100 ? 0 : shippingCosts[shippingMethod] || 5.99;

    // Calculate tax
    const tax = Number((subtotal * 0.1).toFixed(2));

    // Apply coupon
    let discount = 0;
    let couponData = null;
    if (couponCode) {
      try {
        const coupon = await Coupon.findValidCoupon(couponCode.toUpperCase());
        if (coupon) {
          discount = coupon.calculateDiscount(subtotal);
          couponData = {
            code: coupon.code,
            discountType: coupon.discountType,
            discountValue: coupon.discountValue,
          };
          // Record coupon usage
          await coupon.recordUsage(req.user?._id);
        }
      } catch (e) {
        // Coupon invalid or expired, continue without discount
      }
    }

    const total = Number((subtotal + shippingCost + tax - discount).toFixed(2));

    // Generate order number
    const orderNumber = await Order.generateOrderNumber();

    // Estimated delivery
    const deliveryDays = { standard: 7, express: 3, overnight: 1 };
    const estimatedDelivery = new Date();
    estimatedDelivery.setDate(estimatedDelivery.getDate() + (deliveryDays[shippingMethod] || 7));

    // Create order
    const order = new Order({
      orderNumber,
      user: req.user?._id,
      guestEmail: !req.user ? guestEmail : undefined,
      items: orderItems,
      shippingAddress,
      billingAddress: sameAsShipping ? shippingAddress : billingAddress,
      sameAsShipping,
      subtotal,
      shippingCost,
      tax,
      discount,
      total,
      coupon: couponData,
      shippingMethod,
      estimatedDelivery,
      paymentMethod,
      customerNote,
      status: "confirmed",
      paymentStatus: paymentMethod === "cod" ? "pending" : "paid",
      paidAt: paymentMethod !== "cod" ? new Date() : undefined,
    });

    await order.save();

    // Update product stock and sold count
    for (const item of orderItems) {
      await Product.findByIdAndUpdate(item.product, {
        $inc: { stock: -item.quantity, sold: item.quantity },
      });
    }

    // Clear cart
    if (req.user) {
      await Cart.findOneAndUpdate({ user: req.user._id }, { items: [], discount: 0, coupon: null });
    }

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      data: {
        order: {
          _id: order._id,
          orderNumber: order.orderNumber,
          total: order.total,
          status: order.status,
          paymentStatus: order.paymentStatus,
          estimatedDelivery: order.estimatedDelivery,
          itemCount: order.itemCount,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get order confirmation
 * @route   GET /api/checkout/order/:orderNumber
 * @access  Public
 */
export const getOrderConfirmation = async (req, res, next) => {
  try {
    const { orderNumber } = req.params;
    const { email } = req.query;

    const query = { orderNumber };

    // For guests, verify email
    if (!req.user && email) {
      query.guestEmail = email.toLowerCase();
    } else if (req.user) {
      query.user = req.user._id;
    }

    const order = await Order.findOne(query).select("-adminNote");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      data: { order },
    });
  } catch (error) {
    next(error);
  }
};
