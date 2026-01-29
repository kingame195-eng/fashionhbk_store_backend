import express from "express";
import authRoutes from "./authRoutes.js";
import productRoutes from "./productRoutes.js";
import cartRoutes from "./cartRoutes.js";
import profileRoutes from "./profileRoutes.js";
import orderRoutes from "./orderRoutes.js";
import checkoutRoutes from "./checkoutRoutes.js";
import wishlistRoutes from "./wishlistRoutes.js";
import reviewRoutes from "./reviewRoutes.js";
import couponRoutes from "./couponRoutes.js";
import paymentRoutes from "./paymentRoutes.js";
import adminRoutes from "./adminRoutes.js";
import inventoryRoutes from "./inventoryRoutes.js";

const router = express.Router();

// Mount routes
router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/profile", profileRoutes);
router.use("/orders", orderRoutes);
router.use("/checkout", checkoutRoutes);
router.use("/wishlist", wishlistRoutes);
router.use("/reviews", reviewRoutes);
router.use("/coupons", couponRoutes);
router.use("/payments", paymentRoutes);
router.use("/admin", adminRoutes);
router.use("/inventory", inventoryRoutes);

// Health check
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is healthy",
    timestamp: new Date().toISOString(),
  });
});

export default router;
