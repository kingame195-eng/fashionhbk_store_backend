import mongoose from "mongoose";

/**
 * Review Model
 * Cho phép khách hàng đánh giá sản phẩm
 *
 * Features:
 * - Rating 1-5 sao
 * - Comment text
 * - Images đính kèm
 * - Verified purchase badge
 * - Helpful votes
 * - Admin reply
 */

const reviewSchema = new mongoose.Schema(
  {
    // Reference to Product
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "Product is required"],
      index: true,
    },

    // Reference to User
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
      index: true,
    },

    // Order reference (to verify purchase)
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },

    // Rating (1-5 stars)
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot exceed 5"],
    },

    // Review title
    title: {
      type: String,
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },

    // Review comment
    comment: {
      type: String,
      required: [true, "Review comment is required"],
      trim: true,
      maxlength: [2000, "Comment cannot exceed 2000 characters"],
    },

    // Review images
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        alt: String,
      },
    ],

    // Size purchased (for context)
    sizePurchased: {
      type: String,
    },

    // Color purchased (for context)
    colorPurchased: {
      type: String,
    },

    // Fit feedback
    fit: {
      type: String,
      enum: ["runs_small", "true_to_size", "runs_large"],
    },

    // Verified purchase (user bought this product)
    isVerifiedPurchase: {
      type: Boolean,
      default: false,
    },

    // Review status
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    // Helpful votes
    helpfulVotes: {
      type: Number,
      default: 0,
      min: 0,
    },

    // Users who voted helpful
    helpfulVoters: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    // Admin reply
    adminReply: {
      comment: String,
      repliedAt: Date,
      repliedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },

    // Rejection reason (if rejected)
    rejectionReason: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index: Một user chỉ review một product một lần
reviewSchema.index({ product: 1, user: 1 }, { unique: true });

// Index for queries
reviewSchema.index({ status: 1, createdAt: -1 });
reviewSchema.index({ rating: 1 });

// Static method: Tính average rating cho product
reviewSchema.statics.calculateAverageRating = async function (productId) {
  const stats = await this.aggregate([
    { $match: { product: productId, status: "approved" } },
    {
      $group: {
        _id: "$product",
        averageRating: { $avg: "$rating" },
        numReviews: { $sum: 1 },
        ratingDistribution: {
          $push: "$rating",
        },
      },
    },
  ]);

  if (stats.length > 0) {
    // Calculate rating distribution
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    stats[0].ratingDistribution.forEach((rating) => {
      distribution[rating]++;
    });

    // Update product with new ratings
    await mongoose.model("Product").findByIdAndUpdate(productId, {
      "ratings.average": Math.round(stats[0].averageRating * 10) / 10,
      "ratings.count": stats[0].numReviews,
      "ratings.distribution": distribution,
    });
  } else {
    // No reviews, reset ratings
    await mongoose.model("Product").findByIdAndUpdate(productId, {
      "ratings.average": 0,
      "ratings.count": 0,
      "ratings.distribution": { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    });
  }
};

// Post save hook: Update product rating
reviewSchema.post("save", async function () {
  if (this.status === "approved") {
    await this.constructor.calculateAverageRating(this.product);
  }
});

// Post remove hook: Update product rating
reviewSchema.post("remove", async function () {
  await this.constructor.calculateAverageRating(this.product);
});

// Post findOneAndDelete hook
reviewSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await doc.constructor.calculateAverageRating(doc.product);
  }
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
