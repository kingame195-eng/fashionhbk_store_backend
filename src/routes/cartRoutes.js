import express from "express";
import {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
} from "../controllers/cartController.js";
import { protect, optionalAuth } from "../middleware/auth.js";

const router = express.Router();

// Get cart - works for both authenticated and unauthenticated users
router.get("/", optionalAuth, getCart);

// Protected routes - require authentication
router.post("/items", protect, addToCart);
router.put("/items/:itemId", protect, updateCartItem);
router.delete("/items/:itemId", protect, removeFromCart);
router.delete("/", protect, clearCart);

export default router;
