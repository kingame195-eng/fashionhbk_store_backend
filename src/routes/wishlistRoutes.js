import express from "express";
import { protect } from "../middleware/auth.js";
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
  checkWishlist,
  clearWishlist,
} from "../controllers/wishlistController.js";

const router = express.Router();

// All wishlist routes require authentication
router.use(protect);

// Get wishlist
router.get("/", getWishlist);

// Clear wishlist
router.delete("/", clearWishlist);

// Check if product is in wishlist
router.get("/check/:productId", checkWishlist);

// Add product to wishlist
router.post("/:productId", addToWishlist);

// Remove product from wishlist
router.delete("/:productId", removeFromWishlist);

// Toggle product in wishlist
router.post("/:productId/toggle", toggleWishlist);

export default router;
