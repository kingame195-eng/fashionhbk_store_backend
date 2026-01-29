import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

/**
 * @desc    Create new order from cart
 * @route   POST /api/orders
 * @access  Private/Public (guest checkout)
 */
export const createOrder = async (req, res, next) => {
  try {
    const {
      shippingAddress,
      billingAddress,
      sameAsShipping = true,
      paymentMethod,
      shippingMethod = "standard",
      customerNote,
      guestEmail,
    } = req.body;

    // Get cart items
    let cartItems = [];
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
      // Guest checkout with items in request
      cartItems = req.body.items;
    } else {
      return res.status(400).json({
        success: false,
        message: "No items to order",
      });
    }

    // Validate stock and prepare order items
    const orderItems = [];
    let subtotal = 0;

    for (const item of cartItems) {
      const product = item.product._id ? item.product : await Product.findById(item.product);

      if (!product) {
        return res.status(400).json({
          success: false,
          message: `Product not found: ${item.product}`,
        });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Insufficient stock for ${product.name}. Available: ${product.stock}`,
        });
      }

      const price = product.salePrice || product.price;
      const itemTotal = price * item.quantity;
      subtotal += itemTotal;

      orderItems.push({
        product: product._id,
        name: product.name,
        image: product.images?.[0]?.url || product.images?.[0] || "",
        price,
        quantity: item.quantity,
        size: item.size,
        color: item.color,
        sku: product.sku,
      });
    }

    // Calculate shipping cost
    const shippingCosts = {
      standard: 5.99,
      express: 14.99,
      overnight: 29.99,
    };
    const shippingCost = subtotal >= 100 ? 0 : shippingCosts[shippingMethod] || 5.99;

    // Calculate tax (10%)
    const taxRate = 0.1;
    const tax = Number((subtotal * taxRate).toFixed(2));

    // Calculate total
    const total = Number((subtotal + shippingCost + tax).toFixed(2));

    // Calculate estimated delivery
    const deliveryDays = {
      standard: 5,
      express: 2,
      overnight: 1,
    };
    const estimatedDelivery = new Date();
    estimatedDelivery.setDate(estimatedDelivery.getDate() + (deliveryDays[shippingMethod] || 5));

    // Generate order number
    const orderNumber = await Order.generateOrderNumber();

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
      total,
      shippingMethod,
      estimatedDelivery,
      paymentMethod,
      customerNote,
      status: "pending",
      paymentStatus: paymentMethod === "cod" ? "pending" : "pending",
    });

    await order.save();

    // Update product stock
    for (const item of orderItems) {
      await Product.findByIdAndUpdate(item.product, {
        $inc: { stock: -item.quantity },
      });
    }

    // Clear user's cart
    if (req.user) {
      await Cart.findOneAndUpdate({ user: req.user._id }, { items: [], subtotal: 0, total: 0 });
    }

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: {
        order: {
          _id: order._id,
          orderNumber: order.orderNumber,
          total: order.total,
          status: order.status,
          estimatedDelivery: order.estimatedDelivery,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get all orders for current user
 * @route   GET /api/orders
 * @access  Private
 */
export const getOrders = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, status } = req.query;

    const query = { user: req.user._id };
    if (status) {
      query.status = status;
    }

    const orders = await Order.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .select("-adminNote");

    const total = await Order.countDocuments(query);

    res.status(200).json({
      success: true,
      data: {
        orders,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(total / limit),
          totalOrders: total,
          hasNextPage: page * limit < total,
          hasPrevPage: page > 1,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get order by ID
 * @route   GET /api/orders/:id
 * @access  Private
 */
export const getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user._id,
    })
      .populate("items.product", "name slug images")
      .select("-adminNote");

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

/**
 * @desc    Track order by order number (guest)
 * @route   GET /api/orders/track/:orderNumber
 * @access  Public
 */
export const trackOrder = async (req, res, next) => {
  try {
    const { orderNumber } = req.params;
    const { email } = req.query;

    const query = { orderNumber };

    // For guests, verify email
    if (email) {
      query.guestEmail = email.toLowerCase();
    }

    const order = await Order.findOne(query).select(
      "orderNumber status statusHistory shippingMethod estimatedDelivery trackingNumber carrier createdAt deliveredAt shippedAt items.name items.quantity total"
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found. Please check your order number and email.",
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

/**
 * @desc    Cancel order
 * @route   POST /api/orders/:id/cancel
 * @access  Private
 */
export const cancelOrder = async (req, res, next) => {
  try {
    const { reason } = req.body;

    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    if (!order.canBeCancelled()) {
      return res.status(400).json({
        success: false,
        message: `Order cannot be cancelled. Current status: ${order.status}`,
      });
    }

    order.status = "cancelled";
    order.cancelReason = reason;
    order.cancelledBy = req.user._id;

    await order.save();

    // Restore product stock
    for (const item of order.items) {
      await Product.findByIdAndUpdate(item.product, {
        $inc: { stock: item.quantity },
      });
    }

    res.status(200).json({
      success: true,
      message: "Order cancelled successfully",
      data: { order },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Request return for order
 * @route   POST /api/orders/:id/return
 * @access  Private
 */
export const requestReturn = async (req, res, next) => {
  try {
    const { reason, items } = req.body;

    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    if (!order.canRequestReturn()) {
      return res.status(400).json({
        success: false,
        message: "Return request cannot be submitted for this order",
      });
    }

    order.returnRequested = true;
    order.returnReason = reason;
    order.returnStatus = "pending";

    await order.save();

    res.status(200).json({
      success: true,
      message: "Return request submitted successfully",
      data: {
        orderId: order._id,
        returnStatus: order.returnStatus,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get order invoice
 * @route   GET /api/orders/:id/invoice
 * @access  Private
 */
export const getOrderInvoice = async (req, res, next) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user._id,
    }).select("-adminNote");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // Generate invoice data
    const invoice = {
      invoiceNumber: `INV-${order.orderNumber}`,
      orderNumber: order.orderNumber,
      orderDate: order.createdAt,
      items: order.items,
      subtotal: order.subtotal,
      shippingCost: order.shippingCost,
      tax: order.tax,
      discount: order.discount,
      total: order.total,
      shippingAddress: order.shippingAddress,
      billingAddress: order.billingAddress,
      paymentMethod: order.paymentMethod,
      paymentStatus: order.paymentStatus,
    };

    res.status(200).json({
      success: true,
      data: { invoice },
    });
  } catch (error) {
    next(error);
  }
};

// ============ ADMIN ROUTES ============

/**
 * @desc    Get all orders (Admin)
 * @route   GET /api/orders/admin/all
 * @access  Admin
 */
export const getAllOrders = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 20,
      status,
      paymentStatus,
      search,
      sortBy = "createdAt",
      sortOrder = "desc",
    } = req.query;

    const query = {};
    if (status) query.status = status;
    if (paymentStatus) query.paymentStatus = paymentStatus;
    if (search) {
      query.$or = [
        { orderNumber: { $regex: search, $options: "i" } },
        { "shippingAddress.firstName": { $regex: search, $options: "i" } },
        { "shippingAddress.lastName": { $regex: search, $options: "i" } },
        { guestEmail: { $regex: search, $options: "i" } },
      ];
    }

    const sort = { [sortBy]: sortOrder === "desc" ? -1 : 1 };

    const orders = await Order.find(query)
      .populate("user", "email firstName lastName")
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Order.countDocuments(query);

    res.status(200).json({
      success: true,
      data: {
        orders,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(total / limit),
          totalOrders: total,
          hasNextPage: page * limit < total,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update order status (Admin)
 * @route   PATCH /api/orders/:id/status
 * @access  Admin
 */
export const updateOrderStatus = async (req, res, next) => {
  try {
    const { status, note, trackingNumber, carrier } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // Update status
    order.status = status;

    // Add note to history
    if (note) {
      order.statusHistory[order.statusHistory.length - 1].note = note;
      order.statusHistory[order.statusHistory.length - 1].updatedBy = req.user._id;
    }

    // Update tracking info if shipping
    if (status === "shipped") {
      order.trackingNumber = trackingNumber;
      order.carrier = carrier;
    }

    // Update payment status if delivered with COD
    if (status === "delivered" && order.paymentMethod === "cod") {
      order.paymentStatus = "paid";
      order.paidAt = new Date();
    }

    await order.save();

    res.status(200).json({
      success: true,
      message: "Order status updated successfully",
      data: { order },
    });
  } catch (error) {
    next(error);
  }
};
