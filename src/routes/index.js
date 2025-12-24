import express from "express";
import authRoutes from "./authRoutes.js";

const router = express.Router();

// Mount routes
router.use("/auth", authRoutes);

// Health check
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is healthy",
    timestamp: new Date().toISOString(),
  });
});

export default router;
