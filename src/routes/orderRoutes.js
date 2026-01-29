import express from "express";
import { protect, optionalAuth, adminOnly } from "../middleware/auth.js";
import {
  createOrder,
  getOrders,
  getOrderById,
  trackOrder,
  cancelOrder,
  requestReturn,
  getOrderInvoice,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";

const router = express.Router();

// ============ PUBLIC ROUTES ============

// Track order (guest)
router.get("/track/:orderNumber", trackOrder);

// ============ PROTECTED ROUTES ============

// Create order (can be guest with optionalAuth)
router.post("/", optionalAuth, createOrder);

// Get user's orders
router.get("/", protect, getOrders);

// Get order by ID
router.get("/:id", protect, getOrderById);

// Cancel order
router.post("/:id/cancel", protect, cancelOrder);

// Request return
router.post("/:id/return", protect, requestReturn);

// Get order invoice
router.get("/:id/invoice", protect, getOrderInvoice);

// ============ ADMIN ROUTES ============

router.get("/admin/all", protect, adminOnly, getAllOrders);
router.patch("/:id/status", protect, adminOnly, updateOrderStatus);

export default router;
