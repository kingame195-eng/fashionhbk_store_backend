import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: String,
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  size: String,
  color: String,
  sku: String,
});

const addressSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  apartment: String,
  city: {
    type: String,
    required: true,
  },
  state: String,
  postalCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
    default: "Vietnam",
  },
  phone: {
    type: String,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    // Order Number - unique, human-readable
    orderNumber: {
      type: String,
      unique: true,
      required: true,
    },

    // User (optional for guest checkout)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // Guest Email (for guest checkout)
    guestEmail: {
      type: String,
      trim: true,
      lowercase: true,
    },

    // Order Items
    items: [orderItemSchema],

    // Addresses
    shippingAddress: addressSchema,
    billingAddress: addressSchema,
    sameAsShipping: {
      type: Boolean,
      default: true,
    },

    // Pricing
    subtotal: {
      type: Number,
      required: true,
      min: 0,
    },
    shippingCost: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    tax: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    discount: {
      type: Number,
      default: 0,
      min: 0,
    },
    total: {
      type: Number,
      required: true,
      min: 0,
    },

    // Coupon
    coupon: {
      code: String,
      discountType: {
        type: String,
        enum: ["percentage", "fixed"],
      },
      discountValue: Number,
    },

    // Shipping
    shippingMethod: {
      type: String,
      enum: ["standard", "express", "overnight"],
      default: "standard",
    },
    estimatedDelivery: Date,
    trackingNumber: String,
    carrier: String,

    // Payment
    paymentMethod: {
      type: String,
      enum: ["cod", "card", "bank_transfer", "paypal", "momo", "zalopay"],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded", "partial_refund"],
      default: "pending",
    },
    paymentIntentId: String, // For Stripe
    paidAt: Date,

    // Order Status
    status: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "processing",
        "shipped",
        "delivered",
        "cancelled",
        "returned",
        "refunded",
      ],
      default: "pending",
    },
    statusHistory: [
      {
        status: String,
        timestamp: {
          type: Date,
          default: Date.now,
        },
        note: String,
        updatedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],

    // Notes
    customerNote: String,
    adminNote: {
      type: String,
      select: false, // Hide from customer
    },

    // Cancellation
    cancelReason: String,
    cancelledAt: Date,
    cancelledBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // Return
    returnRequested: {
      type: Boolean,
      default: false,
    },
    returnReason: String,
    returnStatus: {
      type: String,
      enum: ["pending", "approved", "rejected", "completed"],
    },

    // Timestamps
    confirmedAt: Date,
    shippedAt: Date,
    deliveredAt: Date,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Indexes for better query performance
orderSchema.index({ orderNumber: 1 });
orderSchema.index({ user: 1, createdAt: -1 });
orderSchema.index({ status: 1, createdAt: -1 });
orderSchema.index({ guestEmail: 1 });
orderSchema.index({ paymentStatus: 1 });
orderSchema.index({ createdAt: -1 });

// Virtual for item count
orderSchema.virtual("itemCount").get(function () {
  return this.items.reduce((total, item) => total + item.quantity, 0);
});

// Generate unique order number
orderSchema.statics.generateOrderNumber = async function () {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  // Find the last order of today to get the sequence
  const startOfDay = new Date(date.setHours(0, 0, 0, 0));
  const endOfDay = new Date(date.setHours(23, 59, 59, 999));

  const lastOrder = await this.findOne({
    createdAt: { $gte: startOfDay, $lte: endOfDay },
  }).sort({ createdAt: -1 });

  let sequence = 1;
  if (lastOrder && lastOrder.orderNumber) {
    const lastSequence = parseInt(lastOrder.orderNumber.slice(-4), 10);
    sequence = lastSequence + 1;
  }

  return `FS${year}${month}${day}${sequence.toString().padStart(4, "0")}`;
};

// Pre-save: Add to status history when status changes
orderSchema.pre("save", function () {
  if (this.isModified("status")) {
    this.statusHistory.push({
      status: this.status,
      timestamp: new Date(),
    });

    // Update timestamp fields based on status
    switch (this.status) {
      case "confirmed":
        this.confirmedAt = new Date();
        break;
      case "shipped":
        this.shippedAt = new Date();
        break;
      case "delivered":
        this.deliveredAt = new Date();
        break;
      case "cancelled":
        this.cancelledAt = new Date();
        break;
    }
  }
});

// Instance method: Can be cancelled
orderSchema.methods.canBeCancelled = function () {
  const nonCancellableStatuses = ["shipped", "delivered", "cancelled", "returned", "refunded"];
  return !nonCancellableStatuses.includes(this.status);
};

// Instance method: Can request return
orderSchema.methods.canRequestReturn = function () {
  if (this.status !== "delivered") return false;

  // Can only return within 30 days of delivery
  const deliveryDate = this.deliveredAt || this.updatedAt;
  const daysSinceDelivery = (Date.now() - deliveryDate) / (1000 * 60 * 60 * 24);
  return daysSinceDelivery <= 30;
};

const Order = mongoose.model("Order", orderSchema);

export default Order;
