import Review from "../models/Review.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";
import { asyncHandler, AppError } from "../middleware/errorHandler.js";

/**
 * Review Controller
 * Xử lý CRUD cho đánh giá sản phẩm
 */

// ============================================================
// PUBLIC ROUTES
// ============================================================

/**
 * @desc    Get reviews for a product
 * @route   GET /api/reviews/product/:productId
 * @access  Public
 */
export const getProductReviews = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const skip = (page - 1) * limit;

  // Filter options
  const { rating, sort, verified } = req.query;
  const query = { product: productId, status: "approved" };

  if (rating) {
    query.rating = parseInt(rating, 10);
  }

  if (verified === "true") {
    query.isVerifiedPurchase = true;
  }

  // Sort options
  let sortOption = { createdAt: -1 }; // Default: newest first
  if (sort === "helpful") {
    sortOption = { helpfulVotes: -1, createdAt: -1 };
  } else if (sort === "rating-high") {
    sortOption = { rating: -1, createdAt: -1 };
  } else if (sort === "rating-low") {
    sortOption = { rating: 1, createdAt: -1 };
  }

  const [reviews, total] = await Promise.all([
    Review.find(query)
      .populate("user", "firstName lastName avatar")
      .sort(sortOption)
      .skip(skip)
      .limit(limit)
      .lean(),
    Review.countDocuments(query),
  ]);

  // Get rating summary
  const ratingSummary = await Review.aggregate([
    { $match: { product: productId, status: "approved" } },
    {
      $group: {
        _id: null,
        averageRating: { $avg: "$rating" },
        totalReviews: { $sum: 1 },
        rating5: { $sum: { $cond: [{ $eq: ["$rating", 5] }, 1, 0] } },
        rating4: { $sum: { $cond: [{ $eq: ["$rating", 4] }, 1, 0] } },
        rating3: { $sum: { $cond: [{ $eq: ["$rating", 3] }, 1, 0] } },
        rating2: { $sum: { $cond: [{ $eq: ["$rating", 2] }, 1, 0] } },
        rating1: { $sum: { $cond: [{ $eq: ["$rating", 1] }, 1, 0] } },
      },
    },
  ]);

  res.status(200).json({
    success: true,
    data: {
      reviews,
      summary: ratingSummary[0] || {
        averageRating: 0,
        totalReviews: 0,
        rating5: 0,
        rating4: 0,
        rating3: 0,
        rating2: 0,
        rating1: 0,
      },
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalReviews: total,
        limit,
      },
    },
  });
});

// ============================================================
// PROTECTED ROUTES (Authenticated users)
// ============================================================

/**
 * @desc    Create a review
 * @route   POST /api/reviews
 * @access  Private
 */
export const createReview = asyncHandler(async (req, res, next) => {
  const { productId, rating, title, comment, images, sizePurchased, colorPurchased, fit } =
    req.body;

  // Check if product exists
  const product = await Product.findById(productId);
  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  // Check if user already reviewed this product
  const existingReview = await Review.findOne({
    product: productId,
    user: req.user._id,
  });

  if (existingReview) {
    return next(new AppError("You have already reviewed this product", 400));
  }

  // Check if user purchased this product (for verified badge)
  const purchasedOrder = await Order.findOne({
    user: req.user._id,
    "items.product": productId,
    status: { $in: ["delivered", "completed"] },
  });

  const review = await Review.create({
    product: productId,
    user: req.user._id,
    order: purchasedOrder?._id,
    rating,
    title,
    comment,
    images,
    sizePurchased,
    colorPurchased,
    fit,
    isVerifiedPurchase: !!purchasedOrder,
    status: "pending", // Reviews need approval
  });

  await review.populate("user", "firstName lastName avatar");

  res.status(201).json({
    success: true,
    message: "Review submitted successfully. It will be visible after approval.",
    data: { review },
  });
});

/**
 * @desc    Update a review
 * @route   PUT /api/reviews/:id
 * @access  Private (Owner only)
 */
export const updateReview = asyncHandler(async (req, res, next) => {
  const { rating, title, comment, images, fit } = req.body;

  const review = await Review.findById(req.params.id);

  if (!review) {
    return next(new AppError("Review not found", 404));
  }

  // Check ownership
  if (review.user.toString() !== req.user._id.toString()) {
    return next(new AppError("You can only update your own reviews", 403));
  }

  // Update fields
  if (rating) review.rating = rating;
  if (title !== undefined) review.title = title;
  if (comment) review.comment = comment;
  if (images) review.images = images;
  if (fit) review.fit = fit;

  // Reset to pending for re-approval
  review.status = "pending";

  await review.save();
  await review.populate("user", "firstName lastName avatar");

  res.status(200).json({
    success: true,
    message: "Review updated successfully. It will be visible after re-approval.",
    data: { review },
  });
});

/**
 * @desc    Delete a review
 * @route   DELETE /api/reviews/:id
 * @access  Private (Owner or Admin)
 */
export const deleteReview = asyncHandler(async (req, res, next) => {
  const review = await Review.findById(req.params.id);

  if (!review) {
    return next(new AppError("Review not found", 404));
  }

  // Check ownership or admin
  if (review.user.toString() !== req.user._id.toString() && req.user.role !== "admin") {
    return next(new AppError("You can only delete your own reviews", 403));
  }

  const productId = review.product;
  await Review.findByIdAndDelete(req.params.id);

  // Recalculate product rating
  await Review.calculateAverageRating(productId);

  res.status(200).json({
    success: true,
    message: "Review deleted successfully",
  });
});

/**
 * @desc    Vote review as helpful
 * @route   POST /api/reviews/:id/helpful
 * @access  Private
 */
export const voteHelpful = asyncHandler(async (req, res, next) => {
  const review = await Review.findById(req.params.id);

  if (!review) {
    return next(new AppError("Review not found", 404));
  }

  // Check if user already voted
  const alreadyVoted = review.helpfulVoters.includes(req.user._id);

  if (alreadyVoted) {
    // Remove vote
    review.helpfulVoters = review.helpfulVoters.filter(
      (voter) => voter.toString() !== req.user._id.toString()
    );
    review.helpfulVotes -= 1;
  } else {
    // Add vote
    review.helpfulVoters.push(req.user._id);
    review.helpfulVotes += 1;
  }

  await review.save();

  res.status(200).json({
    success: true,
    message: alreadyVoted ? "Vote removed" : "Marked as helpful",
    data: {
      helpfulVotes: review.helpfulVotes,
      voted: !alreadyVoted,
    },
  });
});

/**
 * @desc    Get user's reviews
 * @route   GET /api/reviews/my-reviews
 * @access  Private
 */
export const getMyReviews = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const skip = (page - 1) * limit;

  const [reviews, total] = await Promise.all([
    Review.find({ user: req.user._id })
      .populate("product", "name slug thumbnail price")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    Review.countDocuments({ user: req.user._id }),
  ]);

  res.status(200).json({
    success: true,
    data: {
      reviews,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalReviews: total,
        limit,
      },
    },
  });
});

/**
 * @desc    Check if user can review a product
 * @route   GET /api/reviews/can-review/:productId
 * @access  Private
 */
export const canReviewProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;

  // Check if already reviewed
  const existingReview = await Review.findOne({
    product: productId,
    user: req.user._id,
  });

  if (existingReview) {
    return res.status(200).json({
      success: true,
      data: {
        canReview: false,
        reason: "already_reviewed",
        existingReview: existingReview._id,
      },
    });
  }

  // Check if purchased
  const purchasedOrder = await Order.findOne({
    user: req.user._id,
    "items.product": productId,
    status: { $in: ["delivered", "completed"] },
  });

  res.status(200).json({
    success: true,
    data: {
      canReview: true,
      isVerifiedPurchase: !!purchasedOrder,
    },
  });
});

// ============================================================
// ADMIN ROUTES
// ============================================================

/**
 * @desc    Get all reviews (Admin)
 * @route   GET /api/reviews/admin/all
 * @access  Private/Admin
 */
export const getAllReviews = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 20;
  const skip = (page - 1) * limit;

  const { status, rating, search } = req.query;
  const query = {};

  if (status) {
    query.status = status;
  }

  if (rating) {
    query.rating = parseInt(rating, 10);
  }

  if (search) {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { comment: { $regex: search, $options: "i" } },
    ];
  }

  const [reviews, total] = await Promise.all([
    Review.find(query)
      .populate("user", "firstName lastName email")
      .populate("product", "name slug thumbnail")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    Review.countDocuments(query),
  ]);

  // Get status counts
  const statusCounts = await Review.aggregate([
    {
      $group: {
        _id: "$status",
        count: { $sum: 1 },
      },
    },
  ]);

  res.status(200).json({
    success: true,
    data: {
      reviews,
      statusCounts: statusCounts.reduce((acc, curr) => {
        acc[curr._id] = curr.count;
        return acc;
      }, {}),
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalReviews: total,
        limit,
      },
    },
  });
});

/**
 * @desc    Approve a review
 * @route   PATCH /api/reviews/:id/approve
 * @access  Private/Admin
 */
export const approveReview = asyncHandler(async (req, res, next) => {
  const review = await Review.findById(req.params.id);

  if (!review) {
    return next(new AppError("Review not found", 404));
  }

  review.status = "approved";
  await review.save();

  // Recalculate product rating
  await Review.calculateAverageRating(review.product);

  res.status(200).json({
    success: true,
    message: "Review approved successfully",
    data: { review },
  });
});

/**
 * @desc    Reject a review
 * @route   PATCH /api/reviews/:id/reject
 * @access  Private/Admin
 */
export const rejectReview = asyncHandler(async (req, res, next) => {
  const { reason } = req.body;

  const review = await Review.findById(req.params.id);

  if (!review) {
    return next(new AppError("Review not found", 404));
  }

  review.status = "rejected";
  review.rejectionReason = reason;
  await review.save();

  res.status(200).json({
    success: true,
    message: "Review rejected",
    data: { review },
  });
});

/**
 * @desc    Reply to a review
 * @route   POST /api/reviews/:id/reply
 * @access  Private/Admin
 */
export const replyToReview = asyncHandler(async (req, res, next) => {
  const { comment } = req.body;

  if (!comment) {
    return next(new AppError("Reply comment is required", 400));
  }

  const review = await Review.findById(req.params.id);

  if (!review) {
    return next(new AppError("Review not found", 404));
  }

  review.adminReply = {
    comment,
    repliedAt: new Date(),
    repliedBy: req.user._id,
  };

  await review.save();

  res.status(200).json({
    success: true,
    message: "Reply added successfully",
    data: { review },
  });
});
