import express from "express";
import { protect, optionalAuth, adminOnly } from "../middleware/auth.js";
import {
  validateCoupon,
  getAvailableCoupons,
  createCoupon,
  getAllCoupons,
  getCoupon,
  updateCoupon,
  deleteCoupon,
  toggleCouponStatus,
  getCouponStats,
} from "../controllers/couponController.js";

const router = express.Router();

// ============ PUBLIC/USER ROUTES ============

// Validate coupon (works for both guests and authenticated users)
router.post("/validate", optionalAuth, validateCoupon);

// Get available coupons for user
router.get("/available", protect, getAvailableCoupons);

// ============ ADMIN ROUTES ============

// CRUD operations
router.route("/").get(protect, adminOnly, getAllCoupons).post(protect, adminOnly, createCoupon);

router
  .route("/:id")
  .get(protect, adminOnly, getCoupon)
  .put(protect, adminOnly, updateCoupon)
  .delete(protect, adminOnly, deleteCoupon);

// Toggle active status
router.patch("/:id/toggle", protect, adminOnly, toggleCouponStatus);

// Get coupon statistics
router.get("/:id/stats", protect, adminOnly, getCouponStats);

export default router;
