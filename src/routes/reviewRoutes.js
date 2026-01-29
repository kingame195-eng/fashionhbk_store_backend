import express from "express";
import { protect, adminOnly } from "../middleware/auth.js";
import {
  getProductReviews,
  createReview,
  updateReview,
  deleteReview,
  voteHelpful,
  getMyReviews,
  canReviewProduct,
  getAllReviews,
  approveReview,
  rejectReview,
  replyToReview,
} from "../controllers/reviewController.js";

const router = express.Router();

// ============ PUBLIC ROUTES ============

// Get reviews for a product
router.get("/product/:productId", getProductReviews);

// ============ PROTECTED ROUTES ============

// Get user's reviews
router.get("/my-reviews", protect, getMyReviews);

// Check if user can review a product
router.get("/can-review/:productId", protect, canReviewProduct);

// Create a review
router.post("/", protect, createReview);

// Update a review
router.put("/:id", protect, updateReview);

// Delete a review
router.delete("/:id", protect, deleteReview);

// Vote review as helpful
router.post("/:id/helpful", protect, voteHelpful);

// ============ ADMIN ROUTES ============

// Get all reviews (Admin)
router.get("/admin/all", protect, adminOnly, getAllReviews);

// Approve a review
router.patch("/:id/approve", protect, adminOnly, approveReview);

// Reject a review
router.patch("/:id/reject", protect, adminOnly, rejectReview);

// Reply to a review
router.post("/:id/reply", protect, adminOnly, replyToReview);

export default router;
