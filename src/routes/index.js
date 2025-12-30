import express from "express";
import authRoutes from "./authRoutes.js";
import productRoutes from "./productRoutes.js";

const router = express.Router();

// Mount routes
router.use("/auth", authRoutes);
router.use("/products", productRoutes);

// Health check
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is healthy",
    timestamp: new Date().toISOString(),
  });
});

export default router;
