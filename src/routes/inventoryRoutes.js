import express from "express";
import {
  getInventoryAlerts,
  bulkUpdateStock,
  adjustStock,
  getStockHistory,
  getInventoryReport,
  sendLowStockAlerts,
} from "../controllers/inventoryController.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

// Tất cả routes đều yêu cầu đăng nhập và quyền admin
router.use(protect, adminOnly);

// Alerts & Reports
router.get("/alerts", getInventoryAlerts);
router.get("/report", getInventoryReport);
router.post("/send-alerts", sendLowStockAlerts);

// Stock Management
router.put("/bulk-update", bulkUpdateStock);
router.put("/:productId/adjust", adjustStock);
router.get("/:productId/history", getStockHistory);

export default router;
