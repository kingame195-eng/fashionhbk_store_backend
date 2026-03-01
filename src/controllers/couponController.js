import Coupon from "../models/Coupon.js";
import Order from "../models/Order.js";
import { asyncHandler, AppError } from "../middleware/errorHandler.js";

/**
 * Coupon Controller
 * Quản lý mã giảm giá
 */

// ============================================================
// PUBLIC/USER ROUTES
// ============================================================

/**
 * @desc    Validate and get coupon details
 * @route   POST /api/coupons/validate
 * @access  Public
 */
export const validateCoupon = asyncHandler(async (req, res, next) => {
  const { code, cartTotal, cartItems } = req.body;

  if (!code) {
    return next(new AppError("Coupon code is required", 400));
  }

  const coupon = await Coupon.findValidCoupon(code);

  if (!coupon) {
    return next(new AppError("Invalid or expired coupon code", 404));
  }

  // Check if first order (for firstOrderOnly coupons)
  let isFirstOrder = true;
  if (req.user) {
    const orderCount = await Order.countDocuments({ user: req.user._id });
    isFirstOrder = orderCount === 0;
  }

  // Validate coupon can be used
  const validation = await coupon.canBeUsedBy(
    req.user?._id,
    cartTotal || 0,
    cartItems,
    isFirstOrder
  );

  if (!validation.valid) {
    return res.status(400).json({
      success: false,
      message: validation.errors[0],
      errors: validation.errors,
    });
  }

  // Calculate discount
  const discount = coupon.calculateDiscount(cartTotal || 0);

  res.status(200).json({
    success: true,
    data: {
      coupon: {
        code: coupon.code,
        description: coupon.description,
        discountType: coupon.discountType,
        discountValue: coupon.discountValue,
        maxDiscount: coupon.maxDiscount,
        minOrderValue: coupon.minOrderValue,
        validUntil: coupon.validUntil,
      },
      discount,
      newTotal: Math.max(0, (cartTotal || 0) - discount),
    },
  });
});

/**
 * @desc    Get available coupons for user
 * @route   GET /api/coupons/available
 * @access  Private
 */
export const getAvailableCoupons = asyncHandler(async (req, res) => {
  const now = new Date();

  // Find active coupons
  const coupons = await Coupon.find({
    isActive: true,
    validFrom: { $lte: now },
    validUntil: { $gte: now },
    $or: [{ usageLimit: null }, { $expr: { $lt: ["$usedCount", "$usageLimit"] } }],
  })
    .select("code description discountType discountValue maxDiscount minOrderValue validUntil")
    .lean();

  // Filter out coupons user has already maxed out
  const availableCoupons = [];
  for (const coupon of coupons) {
    const fullCoupon = await Coupon.findById(coupon._id);
    const userUsageCount = fullCoupon.usedBy.filter(
      (usage) => usage.user.toString() === req.user._id.toString()
    ).length;

    if (userUsageCount < fullCoupon.usageLimitPerUser) {
      availableCoupons.push({
        ...coupon,
        remainingUses: fullCoupon.usageLimitPerUser - userUsageCount,
      });
    }
  }

  res.status(200).json({
    success: true,
    data: { coupons: availableCoupons },
  });
});

// ============================================================
// ADMIN ROUTES
// ============================================================

/**
 * @desc    Create a coupon
 * @route   POST /api/coupons
 * @access  Private/Admin
 */
export const createCoupon = asyncHandler(async (req, res, next) => {
  const {
    code,
    description,
    discountType,
    discountValue,
    maxDiscount,
    minOrderValue,
    validFrom,
    validUntil,
    usageLimit,
    usageLimitPerUser,
    applicableProducts,
    applicableCategories,
    excludedProducts,
    firstOrderOnly,
    minItems,
  } = req.body;

  // Check if code already exists
  const existingCoupon = await Coupon.findOne({ code: code.toUpperCase() });
  if (existingCoupon) {
    return next(new AppError("Coupon code already exists", 400));
  }

  const coupon = await Coupon.create({
    code,
    description,
    discountType,
    discountValue,
    maxDiscount,
    minOrderValue,
    validFrom,
    validUntil,
    usageLimit,
    usageLimitPerUser,
    applicableProducts,
    applicableCategories,
    excludedProducts,
    firstOrderOnly,
    minItems,
    createdBy: req.user._id,
  });

  res.status(201).json({
    success: true,
    message: "Coupon created successfully",
    data: { coupon },
  });
});

/**
 * @desc    Get all coupons
 * @route   GET /api/coupons
 * @access  Private/Admin
 */
export const getAllCoupons = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 20;
  const skip = (page - 1) * limit;

  const { status, search } = req.query;
  const query = {};

  if (status === "active") {
    const now = new Date();
    query.isActive = true;
    query.validFrom = { $lte: now };
    query.validUntil = { $gte: now };
  } else if (status === "expired") {
    query.validUntil = { $lt: new Date() };
  } else if (status === "inactive") {
    query.isActive = false;
  }

  if (search) {
    query.$or = [
      { code: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  }

  const [coupons, total] = await Promise.all([
    Coupon.find(query)
      .populate("createdBy", "firstName lastName")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    Coupon.countDocuments(query),
  ]);

  // Add calculated fields
  const enrichedCoupons = coupons.map((coupon) => ({
    ...coupon,
    isExpired: new Date(coupon.validUntil) < new Date(),
    isStarted: new Date(coupon.validFrom) <= new Date(),
    remainingUses: coupon.usageLimit ? coupon.usageLimit - coupon.usedCount : null,
  }));

  res.status(200).json({
    success: true,
    data: {
      coupons: enrichedCoupons,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalCoupons: total,
        limit,
      },
    },
  });
});

/**
 * @desc    Get single coupon
 * @route   GET /api/coupons/:id
 * @access  Private/Admin
 */
export const getCoupon = asyncHandler(async (req, res, next) => {
  const coupon = await Coupon.findById(req.params.id)
    .populate("createdBy", "firstName lastName")
    .populate("usedBy.user", "firstName lastName email")
    .populate("usedBy.orderId", "orderNumber total");

  if (!coupon) {
    return next(new AppError("Coupon not found", 404));
  }

  res.status(200).json({
    success: true,
    data: { coupon },
  });
});

/**
 * @desc    Update a coupon
 * @route   PUT /api/coupons/:id
 * @access  Private/Admin
 */
export const updateCoupon = asyncHandler(async (req, res, next) => {
  const coupon = await Coupon.findById(req.params.id);

  if (!coupon) {
    return next(new AppError("Coupon not found", 404));
  }

  // Prevent changing code if coupon has been used
  if (req.body.code && coupon.usedCount > 0 && req.body.code !== coupon.code) {
    return next(new AppError("Cannot change code of a coupon that has been used", 400));
  }

  // Update allowed fields
  const allowedFields = [
    "description",
    "discountType",
    "discountValue",
    "maxDiscount",
    "minOrderValue",
    "validFrom",
    "validUntil",
    "usageLimit",
    "usageLimitPerUser",
    "applicableProducts",
    "applicableCategories",
    "excludedProducts",
    "firstOrderOnly",
    "minItems",
    "isActive",
  ];

  allowedFields.forEach((field) => {
    if (req.body[field] !== undefined) {
      coupon[field] = req.body[field];
    }
  });

  await coupon.save();

  res.status(200).json({
    success: true,
    message: "Coupon updated successfully",
    data: { coupon },
  });
});

/**
 * @desc    Delete a coupon
 * @route   DELETE /api/coupons/:id
 * @access  Private/Admin
 */
export const deleteCoupon = asyncHandler(async (req, res, next) => {
  const coupon = await Coupon.findById(req.params.id);

  if (!coupon) {
    return next(new AppError("Coupon not found", 404));
  }

  // Soft delete - just deactivate
  if (coupon.usedCount > 0) {
    coupon.isActive = false;
    await coupon.save();

    return res.status(200).json({
      success: true,
      message: "Coupon deactivated (has usage history)",
    });
  }

  // Hard delete if never used
  await Coupon.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "Coupon deleted successfully",
  });
});

/**
 * @desc    Toggle coupon active status
 * @route   PATCH /api/coupons/:id/toggle
 * @access  Private/Admin
 */
export const toggleCouponStatus = asyncHandler(async (req, res, next) => {
  const coupon = await Coupon.findById(req.params.id);

  if (!coupon) {
    return next(new AppError("Coupon not found", 404));
  }

  coupon.isActive = !coupon.isActive;
  await coupon.save();

  res.status(200).json({
    success: true,
    message: `Coupon ${coupon.isActive ? "activated" : "deactivated"} successfully`,
    data: { coupon },
  });
});

/**
 * @desc    Get coupon usage statistics
 * @route   GET /api/coupons/:id/stats
 * @access  Private/Admin
 */
export const getCouponStats = asyncHandler(async (req, res, next) => {
  const coupon = await Coupon.findById(req.params.id);

  if (!coupon) {
    return next(new AppError("Coupon not found", 404));
  }

  // Get orders that used this coupon
  const orders = await Order.find({ couponCode: coupon.code }).select("total discount createdAt");

  const stats = {
    totalUses: coupon.usedCount,
    remainingUses: coupon.usageLimit ? coupon.usageLimit - coupon.usedCount : "Unlimited",
    totalDiscountGiven: orders.reduce((sum, order) => sum + (order.discount || 0), 0),
    totalOrderValue: orders.reduce((sum, order) => sum + order.total, 0),
    averageOrderValue:
      orders.length > 0 ? orders.reduce((sum, order) => sum + order.total, 0) / orders.length : 0,
    usageByDate: coupon.usedBy.reduce((acc, usage) => {
      const date = usage.usedAt.toISOString().split("T")[0];
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {}),
  };

  res.status(200).json({
    success: true,
    data: { stats },
  });
});
