import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import Coupon from "../models/Coupon.js";
import { asyncHandler, AppError } from "../middleware/errorHandler.js";
import { sendEmail } from "../utils/emailService.js";

/**
 * Payment Controller
 * Xử lý thanh toán với nhiều phương thức
 *
 * Hỗ trợ:
 * - COD (Cash on Delivery)
 * - Bank Transfer
 * - Stripe (mock/demo)
 * - VNPay (mock/demo)
 */

// ============================================================
// PAYMENT METHODS
// ============================================================

/**
 * @desc    Get available payment methods
 * @route   GET /api/payments/methods
 * @access  Public
 */
export const getPaymentMethods = asyncHandler(async (req, res) => {
  const paymentMethods = [
    {
      id: "cod",
      name: "Cash on Delivery",
      description: "Pay when you receive your order",
      icon: "cash",
      enabled: true,
      fee: 0,
    },
    {
      id: "bank_transfer",
      name: "Bank Transfer",
      description: "Transfer to our bank account",
      icon: "bank",
      enabled: true,
      fee: 0,
      bankInfo: {
        bankName: "Vietcombank",
        accountNumber: "1234567890",
        accountName: "FASHION STORE",
        branch: "Ho Chi Minh City",
      },
    },
    {
      id: "stripe",
      name: "Credit/Debit Card",
      description: "Pay securely with Stripe",
      icon: "credit-card",
      enabled: true,
      fee: 0,
      supportedCards: ["visa", "mastercard", "amex"],
    },
    {
      id: "vnpay",
      name: "VNPay",
      description: "Pay with VNPay QR or Banking App",
      icon: "qr-code",
      enabled: true,
      fee: 0,
    },
    {
      id: "momo",
      name: "MoMo",
      description: "Pay with MoMo e-wallet",
      icon: "wallet",
      enabled: false, // Coming soon
      fee: 0,
    },
  ];

  res.status(200).json({
    success: true,
    data: { paymentMethods: paymentMethods.filter((m) => m.enabled) },
  });
});

/**
 * @desc    Create payment intent (for Stripe)
 * @route   POST /api/payments/create-intent
 * @access  Private
 */
export const createPaymentIntent = asyncHandler(async (req, res, next) => {
  const { orderId, paymentMethod } = req.body;

  // Find order
  const order = await Order.findById(orderId);
  if (!order) {
    return next(new AppError("Order not found", 404));
  }

  // Check order belongs to user
  if (order.user && order.user.toString() !== req.user._id.toString()) {
    return next(new AppError("Unauthorized", 403));
  }

  // Check order status
  if (order.paymentStatus === "paid") {
    return next(new AppError("Order already paid", 400));
  }

  // For demo purposes, we'll create a mock payment intent
  // In production, you would integrate with Stripe API here
  const paymentIntent = {
    id: `pi_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    amount: order.totalAmount * 100, // Convert to cents
    currency: order.currency?.toLowerCase() || "usd",
    status: "requires_payment_method",
    clientSecret: `${Date.now()}_secret_${Math.random().toString(36).substr(2, 16)}`,
    metadata: {
      orderId: order._id.toString(),
      orderNumber: order.orderNumber,
    },
  };

  // Update order with payment intent
  order.paymentDetails = {
    paymentIntentId: paymentIntent.id,
    paymentMethod,
    createdAt: new Date(),
  };
  await order.save();

  res.status(200).json({
    success: true,
    data: {
      clientSecret: paymentIntent.clientSecret,
      paymentIntentId: paymentIntent.id,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
    },
  });
});

/**
 * @desc    Confirm payment (webhook simulation)
 * @route   POST /api/payments/confirm
 * @access  Private
 */
export const confirmPayment = asyncHandler(async (req, res, next) => {
  const { orderId, paymentIntentId, paymentMethod } = req.body;

  const order = await Order.findById(orderId);
  if (!order) {
    return next(new AppError("Order not found", 404));
  }

  // Simulate payment processing
  // In production, this would be handled by webhook from payment provider

  // Update order payment status
  order.paymentStatus = "paid";
  order.paymentDetails = {
    ...order.paymentDetails,
    paymentIntentId,
    paymentMethod,
    paidAt: new Date(),
  };
  order.status = "processing"; // Move to processing after payment

  await order.save();

  // Record coupon usage if applicable
  if (order.couponCode) {
    const coupon = await Coupon.findOne({ code: order.couponCode });
    if (coupon) {
      await coupon.recordUsage(order.user, order._id);
    }
  }

  // Send confirmation email
  if (order.customerEmail) {
    try {
      await sendEmail({
        to: order.customerEmail,
        subject: `Payment Confirmed - Order #${order.orderNumber}`,
        template: "payment-confirmed",
        data: {
          orderNumber: order.orderNumber,
          amount: order.totalAmount,
          paymentMethod: paymentMethod,
        },
      });
    } catch (emailError) {
      console.error("Failed to send payment confirmation email:", emailError);
    }
  }

  res.status(200).json({
    success: true,
    message: "Payment confirmed successfully",
    data: {
      order: {
        _id: order._id,
        orderNumber: order.orderNumber,
        status: order.status,
        paymentStatus: order.paymentStatus,
      },
    },
  });
});

/**
 * @desc    Process COD order
 * @route   POST /api/payments/cod
 * @access  Private/Public
 */
export const processCOD = asyncHandler(async (req, res, next) => {
  const { orderId } = req.body;

  const order = await Order.findById(orderId);
  if (!order) {
    return next(new AppError("Order not found", 404));
  }

  // Update order for COD
  order.paymentMethod = "cod";
  order.paymentStatus = "pending"; // Will be paid on delivery
  order.paymentDetails = {
    paymentMethod: "cod",
    note: "Payment will be collected on delivery",
  };
  order.status = "processing";

  await order.save();

  res.status(200).json({
    success: true,
    message: "COD order confirmed",
    data: {
      order: {
        _id: order._id,
        orderNumber: order.orderNumber,
        status: order.status,
        paymentMethod: order.paymentMethod,
      },
    },
  });
});

/**
 * @desc    Process Bank Transfer order
 * @route   POST /api/payments/bank-transfer
 * @access  Private/Public
 */
export const processBankTransfer = asyncHandler(async (req, res, next) => {
  const { orderId } = req.body;

  const order = await Order.findById(orderId);
  if (!order) {
    return next(new AppError("Order not found", 404));
  }

  // Generate transfer reference
  const transferReference = `FS${order.orderNumber}`;

  // Update order for bank transfer
  order.paymentMethod = "bank_transfer";
  order.paymentStatus = "awaiting_payment";
  order.paymentDetails = {
    paymentMethod: "bank_transfer",
    transferReference,
    bankInfo: {
      bankName: "Vietcombank",
      accountNumber: "1234567890",
      accountName: "FASHION STORE",
      branch: "Ho Chi Minh City",
    },
    note: `Please include reference: ${transferReference}`,
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
  };

  await order.save();

  // Send bank transfer instructions email
  if (order.customerEmail) {
    try {
      await sendEmail({
        to: order.customerEmail,
        subject: `Bank Transfer Instructions - Order #${order.orderNumber}`,
        template: "bank-transfer",
        data: {
          orderNumber: order.orderNumber,
          amount: order.totalAmount,
          transferReference,
          bankInfo: order.paymentDetails.bankInfo,
          expiresAt: order.paymentDetails.expiresAt,
        },
      });
    } catch (emailError) {
      console.error("Failed to send bank transfer email:", emailError);
    }
  }

  res.status(200).json({
    success: true,
    message: "Please complete the bank transfer within 24 hours",
    data: {
      order: {
        _id: order._id,
        orderNumber: order.orderNumber,
        status: order.status,
        paymentMethod: order.paymentMethod,
      },
      transferDetails: {
        transferReference,
        bankInfo: order.paymentDetails.bankInfo,
        amount: order.totalAmount,
        expiresAt: order.paymentDetails.expiresAt,
      },
    },
  });
});

/**
 * @desc    Verify bank transfer (Admin)
 * @route   POST /api/payments/verify-transfer
 * @access  Private/Admin
 */
export const verifyBankTransfer = asyncHandler(async (req, res, next) => {
  const { orderId, transactionId, notes } = req.body;

  const order = await Order.findById(orderId);
  if (!order) {
    return next(new AppError("Order not found", 404));
  }

  if (order.paymentMethod !== "bank_transfer") {
    return next(new AppError("This order is not a bank transfer order", 400));
  }

  // Update payment status
  order.paymentStatus = "paid";
  order.paymentDetails = {
    ...order.paymentDetails,
    verified: true,
    verifiedAt: new Date(),
    verifiedBy: req.user._id,
    transactionId,
    notes,
  };
  order.status = "processing";

  await order.save();

  // Send confirmation email
  if (order.customerEmail) {
    try {
      await sendEmail({
        to: order.customerEmail,
        subject: `Payment Received - Order #${order.orderNumber}`,
        template: "payment-confirmed",
        data: {
          orderNumber: order.orderNumber,
          amount: order.totalAmount,
          paymentMethod: "Bank Transfer",
        },
      });
    } catch (emailError) {
      console.error("Failed to send payment confirmation email:", emailError);
    }
  }

  res.status(200).json({
    success: true,
    message: "Bank transfer verified successfully",
    data: { order },
  });
});

/**
 * @desc    Create VNPay payment URL
 * @route   POST /api/payments/vnpay/create
 * @access  Private/Public
 */
export const createVNPayPayment = asyncHandler(async (req, res, next) => {
  const { orderId } = req.body;

  const order = await Order.findById(orderId);
  if (!order) {
    return next(new AppError("Order not found", 404));
  }

  // For demo purposes, create a mock VNPay URL
  // In production, you would integrate with VNPay API
  const vnpayUrl = `https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?vnp_Amount=${
    order.totalAmount * 100
  }&vnp_OrderInfo=${order.orderNumber}&vnp_TxnRef=${Date.now()}`;

  // Update order
  order.paymentMethod = "vnpay";
  order.paymentStatus = "awaiting_payment";
  order.paymentDetails = {
    paymentMethod: "vnpay",
    vnpayTxnRef: Date.now().toString(),
    createdAt: new Date(),
  };

  await order.save();

  res.status(200).json({
    success: true,
    data: {
      paymentUrl: vnpayUrl,
      orderId: order._id,
      orderNumber: order.orderNumber,
    },
  });
});

/**
 * @desc    VNPay callback/return handler
 * @route   GET /api/payments/vnpay/callback
 * @access  Public
 */
export const vnpayCallback = asyncHandler(async (req, res, next) => {
  const { vnp_ResponseCode, vnp_TxnRef, vnp_OrderInfo, vnp_Amount, vnp_TransactionNo } = req.query;

  // Find order by VNPay transaction reference
  const order = await Order.findOne({
    "paymentDetails.vnpayTxnRef": vnp_TxnRef,
  });

  if (!order) {
    return next(new AppError("Order not found", 404));
  }

  if (vnp_ResponseCode === "00") {
    // Payment successful
    order.paymentStatus = "paid";
    order.paymentDetails = {
      ...order.paymentDetails,
      vnpayTransactionNo: vnp_TransactionNo,
      vnpayAmount: vnp_Amount,
      paidAt: new Date(),
    };
    order.status = "processing";

    await order.save();

    // Record coupon usage if applicable
    if (order.couponCode) {
      const coupon = await Coupon.findOne({ code: order.couponCode });
      if (coupon) {
        await coupon.recordUsage(order.user, order._id);
      }
    }

    // Send confirmation email
    if (order.customerEmail) {
      try {
        await sendEmail({
          to: order.customerEmail,
          subject: `Payment Confirmed - Order #${order.orderNumber}`,
          template: "payment-confirmed",
          data: {
            orderNumber: order.orderNumber,
            amount: order.totalAmount,
            paymentMethod: "VNPay",
          },
        });
      } catch (emailError) {
        console.error("Failed to send payment confirmation email:", emailError);
      }
    }

    // Redirect to success page
    res.redirect(`/order-confirmation/${order.orderNumber}?payment=success`);
  } else {
    // Payment failed
    order.paymentStatus = "failed";
    order.paymentDetails = {
      ...order.paymentDetails,
      failedAt: new Date(),
      failureReason: `VNPay response code: ${vnp_ResponseCode}`,
    };

    await order.save();

    // Redirect to failure page
    res.redirect(`/order-confirmation/${order.orderNumber}?payment=failed`);
  }
});

/**
 * @desc    Get payment status
 * @route   GET /api/payments/status/:orderId
 * @access  Private
 */
export const getPaymentStatus = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.orderId).select(
    "orderNumber paymentStatus paymentMethod paymentDetails totalAmount"
  );

  if (!order) {
    return next(new AppError("Order not found", 404));
  }

  res.status(200).json({
    success: true,
    data: {
      orderNumber: order.orderNumber,
      paymentStatus: order.paymentStatus,
      paymentMethod: order.paymentMethod,
      amount: order.totalAmount,
      paidAt: order.paymentDetails?.paidAt,
    },
  });
});

/**
 * @desc    Request refund
 * @route   POST /api/payments/refund
 * @access  Private
 */
export const requestRefund = asyncHandler(async (req, res, next) => {
  const { orderId, reason } = req.body;

  const order = await Order.findById(orderId);
  if (!order) {
    return next(new AppError("Order not found", 404));
  }

  // Check order belongs to user
  if (order.user && order.user.toString() !== req.user._id.toString()) {
    return next(new AppError("Unauthorized", 403));
  }

  // Check if refund is possible
  if (order.paymentStatus !== "paid") {
    return next(new AppError("Cannot refund an unpaid order", 400));
  }

  if (order.status === "delivered" || order.status === "completed") {
    return next(new AppError("Cannot refund a delivered order. Please request a return.", 400));
  }

  // Create refund request
  order.refundRequest = {
    requested: true,
    requestedAt: new Date(),
    reason,
    status: "pending",
  };

  await order.save();

  res.status(200).json({
    success: true,
    message: "Refund request submitted successfully",
    data: {
      orderId: order._id,
      orderNumber: order.orderNumber,
      refundStatus: order.refundRequest.status,
    },
  });
});

/**
 * @desc    Process refund (Admin)
 * @route   POST /api/payments/refund/process
 * @access  Private/Admin
 */
export const processRefund = asyncHandler(async (req, res, next) => {
  const { orderId, approved, adminNotes } = req.body;

  const order = await Order.findById(orderId);
  if (!order) {
    return next(new AppError("Order not found", 404));
  }

  if (!order.refundRequest?.requested) {
    return next(new AppError("No refund request found for this order", 400));
  }

  order.refundRequest = {
    ...order.refundRequest,
    status: approved ? "approved" : "rejected",
    processedAt: new Date(),
    processedBy: req.user._id,
    adminNotes,
  };

  if (approved) {
    order.paymentStatus = "refunded";
    order.status = "cancelled";
  }

  await order.save();

  // Send email to customer
  if (order.customerEmail) {
    try {
      await sendEmail({
        to: order.customerEmail,
        subject: `Refund ${approved ? "Approved" : "Rejected"} - Order #${order.orderNumber}`,
        template: approved ? "refund-approved" : "refund-rejected",
        data: {
          orderNumber: order.orderNumber,
          amount: order.totalAmount,
          adminNotes,
        },
      });
    } catch (emailError) {
      console.error("Failed to send refund email:", emailError);
    }
  }

  res.status(200).json({
    success: true,
    message: `Refund ${approved ? "approved" : "rejected"} successfully`,
    data: { order },
  });
});
