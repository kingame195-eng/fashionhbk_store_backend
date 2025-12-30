import express from "express";
import {
  getProducts,
  getProduct,
  getFeaturedProducts,
  getNewArrivals,
  getSaleProducts,
  getRelatedProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getCategories,
  updateStock,
} from "../controllers/productController.js";
import { protect, authorize } from "../middleware/auth.js";
import { validateProduct, validateProductQuery } from "../middleware/productValidation.js";
import { validateObjectId } from "../middleware/validate.js";

const router = express.Router();

// Public routes
router.get("/", validateProductQuery, getProducts);
router.get("/featured", getFeaturedProducts);
router.get("/new-arrivals", getNewArrivals);
router.get("/sale", getSaleProducts);
router.get("/categories", getCategories);
router.get("/:identifier", getProduct);
router.get("/:id/related", validateObjectId("id"), getRelatedProducts);

// Admin routes (protected)
router.post("/", protect, authorize("admin"), validateProduct, createProduct);

router.put(
  "/:id",
  protect,
  authorize("admin"),
  validateObjectId("id"),
  validateProduct,
  updateProduct
);

router.delete("/:id", protect, authorize("admin"), validateObjectId("id"), deleteProduct);

router.patch("/:id/stock", protect, authorize("admin"), validateObjectId("id"), updateStock);

export default router;
