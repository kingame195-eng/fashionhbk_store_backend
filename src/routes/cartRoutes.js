import express from "express";
import {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  applyCoupon,
  removeCoupon,
  mergeGuestCart,
  validateCart,
} from "../controllers/cartController.js";
import { protect, optionalAuth } from "../middleware/auth.js";

const router = express.Router();

// Get cart - works for both authenticated and guest users
router.get("/", optionalAuth, getCart);

// Cart item operations - support both authenticated and guest users
// Guest users must provide x-cart-session header
router.post("/items", optionalAuth, addToCart);
router.put("/items/:itemId", optionalAuth, updateCartItem);
router.patch("/items/:itemId", optionalAuth, updateCartItem);
router.delete("/items/:itemId", optionalAuth, removeFromCart);
router.delete("/", optionalAuth, clearCart);

// Coupon routes - support both authenticated and guest users
router.post("/coupon", optionalAuth, applyCoupon);
router.delete("/coupon", optionalAuth, removeCoupon);

// Merge guest cart after login - requires authentication
router.post("/merge", protect, mergeGuestCart);

// Validate cart - support both authenticated and guest users
router.post("/validate", optionalAuth, validateCart);

export default router;
