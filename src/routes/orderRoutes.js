import express from "express";
import { protect, optionalAuth, adminOnly } from "../middleware/auth.js";
import {
  validateCreateOrder,
  validateOrderStatus,
  validateOrderReturn,
  validateObjectId,
} from "../middleware/validate.js";
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
router.post("/", optionalAuth, validateCreateOrder, createOrder);

// Get user's orders
router.get("/", protect, getOrders);

// Get order by ID
router.get("/:id", protect, validateObjectId("id"), getOrderById);

// Cancel order
router.post("/:id/cancel", protect, validateObjectId("id"), cancelOrder);

// Request return
router.post("/:id/return", protect, validateObjectId("id"), validateOrderReturn, requestReturn);

// Get order invoice
router.get("/:id/invoice", protect, validateObjectId("id"), getOrderInvoice);

// ============ ADMIN ROUTES ============

router.get("/admin/all", protect, adminOnly, getAllOrders);
router.patch(
  "/:id/status",
  protect,
  adminOnly,
  validateObjectId("id"),
  validateOrderStatus,
  updateOrderStatus
);

export default router;
