import mongoose from "mongoose";

/**
 * Coupon Model
 * Quản lý mã giảm giá
 *
 * Features:
 * - Percentage hoặc Fixed amount discount
 * - Minimum order value
 * - Usage limits (per coupon, per user)
 * - Valid date range
 * - Product/Category restrictions
 * - First order only
 */

const couponSchema = new mongoose.Schema(
  {
    // Coupon code (unique, uppercase)
    code: {
      type: String,
      required: [true, "Coupon code is required"],
      unique: true,
      uppercase: true,
      trim: true,
      maxlength: [20, "Coupon code cannot exceed 20 characters"],
      match: [/^[A-Z0-9]+$/, "Coupon code can only contain letters and numbers"],
    },

    // Description
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: [200, "Description cannot exceed 200 characters"],
    },

    // Discount type
    discountType: {
      type: String,
      required: true,
      enum: ["percentage", "fixed"],
      default: "percentage",
    },

    // Discount value
    discountValue: {
      type: Number,
      required: [true, "Discount value is required"],
      min: [0, "Discount value cannot be negative"],
    },

    // Maximum discount (for percentage type)
    maxDiscount: {
      type: Number,
      min: [0, "Max discount cannot be negative"],
    },

    // Minimum order value
    minOrderValue: {
      type: Number,
      default: 0,
      min: [0, "Minimum order value cannot be negative"],
    },

    // Currency
    currency: {
      type: String,
      default: "USD",
      enum: ["USD", "EUR", "GBP", "VND"],
    },

    // Validity period
    validFrom: {
      type: Date,
      required: [true, "Valid from date is required"],
      default: Date.now,
    },

    validUntil: {
      type: Date,
      required: [true, "Valid until date is required"],
    },

    // Usage limits
    usageLimit: {
      type: Number,
      default: null, // null = unlimited
      min: [1, "Usage limit must be at least 1"],
    },

    usageLimitPerUser: {
      type: Number,
      default: 1,
      min: [1, "Usage limit per user must be at least 1"],
    },

    // Current usage count
    usedCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    // Users who used this coupon
    usedBy: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        usedAt: {
          type: Date,
          default: Date.now,
        },
        orderId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Order",
        },
      },
    ],

    // Restrictions
    applicableProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],

    applicableCategories: [
      {
        type: String,
        enum: ["women", "men", "kids", "accessories", "shoes", "bags"],
      },
    ],

    excludedProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],

    // First order only
    firstOrderOnly: {
      type: Boolean,
      default: false,
    },

    // Minimum items in cart
    minItems: {
      type: Number,
      default: 1,
      min: 1,
    },

    // Active status
    isActive: {
      type: Boolean,
      default: true,
    },

    // Created by (admin)
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
couponSchema.index({ code: 1 });
couponSchema.index({ isActive: 1, validFrom: 1, validUntil: 1 });
couponSchema.index({ validUntil: 1 });

// Virtual: Check if coupon is currently valid
couponSchema.virtual("isValid").get(function () {
  const now = new Date();
  return (
    this.isActive &&
    now >= this.validFrom &&
    now <= this.validUntil &&
    (this.usageLimit === null || this.usedCount < this.usageLimit)
  );
});

// Method: Check if user can use this coupon
couponSchema.methods.canBeUsedBy = async function (userId, cartTotal, cartItems, isFirstOrder) {
  const errors = [];

  // Check if coupon is active
  if (!this.isActive) {
    errors.push("Coupon is not active");
  }

  // Check validity period
  const now = new Date();
  if (now < this.validFrom) {
    errors.push("Coupon is not yet valid");
  }
  if (now > this.validUntil) {
    errors.push("Coupon has expired");
  }

  // Check usage limit
  if (this.usageLimit !== null && this.usedCount >= this.usageLimit) {
    errors.push("Coupon usage limit reached");
  }

  // Check per-user usage limit
  if (userId) {
    const userUsageCount = this.usedBy.filter(
      (usage) => usage.user.toString() === userId.toString()
    ).length;
    if (userUsageCount >= this.usageLimitPerUser) {
      errors.push("You have already used this coupon the maximum number of times");
    }
  }

  // Check minimum order value
  if (cartTotal < this.minOrderValue) {
    errors.push(`Minimum order value is ${this.currency} ${this.minOrderValue}`);
  }

  // Check minimum items
  if (cartItems && cartItems.length < this.minItems) {
    errors.push(`Minimum ${this.minItems} items required`);
  }

  // Check first order only
  if (this.firstOrderOnly && !isFirstOrder) {
    errors.push("This coupon is only valid for first orders");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};

// Method: Calculate discount amount
couponSchema.methods.calculateDiscount = function (cartTotal, applicableItemsTotal = null) {
  const baseAmount = applicableItemsTotal !== null ? applicableItemsTotal : cartTotal;

  let discount = 0;

  if (this.discountType === "percentage") {
    discount = (baseAmount * this.discountValue) / 100;
    // Apply max discount cap
    if (this.maxDiscount && discount > this.maxDiscount) {
      discount = this.maxDiscount;
    }
  } else {
    // Fixed amount
    discount = this.discountValue;
  }

  // Discount cannot exceed cart total
  if (discount > cartTotal) {
    discount = cartTotal;
  }

  return Math.round(discount * 100) / 100; // Round to 2 decimal places
};

// Method: Record usage
couponSchema.methods.recordUsage = async function (userId, orderId) {
  this.usedCount += 1;
  this.usedBy.push({
    user: userId,
    orderId,
    usedAt: new Date(),
  });
  await this.save();
};

// Static: Find valid coupon by code
couponSchema.statics.findValidCoupon = async function (code) {
  const now = new Date();
  return this.findOne({
    code: code.toUpperCase(),
    isActive: true,
    validFrom: { $lte: now },
    validUntil: { $gte: now },
    $or: [{ usageLimit: null }, { $expr: { $lt: ["$usedCount", "$usageLimit"] } }],
  });
};

// Pre-save validation
couponSchema.pre("save", function () {
  // Validate discount value for percentage type
  if (this.discountType === "percentage" && this.discountValue > 100) {
    throw new Error("Percentage discount cannot exceed 100%");
  }

  // Validate date range
  if (this.validUntil <= this.validFrom) {
    throw new Error("Valid until date must be after valid from date");
  }
});

const Coupon = mongoose.model("Coupon", couponSchema);

export default Coupon;
