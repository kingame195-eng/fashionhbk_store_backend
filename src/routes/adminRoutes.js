import express from "express";
import {
  getDashboardOverview,
  getRevenueStats,
  getTopProducts,
  getRecentOrders,
  getCategoryStats,
  getLowStockProducts,
  getUserStats,
  updateOrderStatus,
  updateProductStock,
  getAllOrders,
  getAllUsers,
  updateUserRole,
} from "../controllers/adminController.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

// Tất cả routes đều yêu cầu đăng nhập và quyền admin
router.use(protect, adminOnly);

// Dashboard Overview
router.get("/dashboard", getDashboardOverview);

// Analytics & Statistics
router.get("/revenue-stats", getRevenueStats);
router.get("/top-products", getTopProducts);
router.get("/category-stats", getCategoryStats);
router.get("/user-stats", getUserStats);
router.get("/low-stock", getLowStockProducts);

// Order Management
router.get("/orders", getAllOrders);
router.get("/recent-orders", getRecentOrders);
router.put("/orders/:id/status", updateOrderStatus);

// User Management
router.get("/users", getAllUsers);
router.put("/users/:id/role", updateUserRole);

// Inventory Management
router.put("/products/:id/stock", updateProductStock);

export default router;
