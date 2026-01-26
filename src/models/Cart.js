import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, "Quantity must be at least 1"],
    default: 1,
  },
  size: {
    type: String,
    default: null,
  },
  color: {
    type: String,
    default: null,
  },
  price: {
    type: Number,
    required: true,
  },
});

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    // Session ID for guest carts (when user is not logged in)
    sessionId: {
      type: String,
      default: null,
      index: true,
    },
    items: [cartItemSchema],
    totalItems: {
      type: Number,
      default: 0,
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
    // Coupon support
    coupon: {
      type: String,
      default: null,
    },
    discount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Ensure either user or sessionId is present
cartSchema.pre("validate", function (next) {
  if (!this.user && !this.sessionId) {
    next(new Error("Cart must have either a user or sessionId"));
  } else {
    next();
  }
});

// Calculate totals before saving
cartSchema.pre("save", function (next) {
  this.totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
  this.totalPrice = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  next();
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
