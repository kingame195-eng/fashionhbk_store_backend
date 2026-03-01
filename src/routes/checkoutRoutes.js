import express from "express";
import { optionalAuth } from "../middleware/auth.js";
import {
  validateCheckoutInitialize,
  validateCompleteCheckout,
  validateCouponCode,
  validateObjectId,
} from "../middleware/validate.js";
import {
  initializeCheckout,
  getShippingRates,
  calculateTax,
  validateCoupon,
  completeCheckout,
  getOrderConfirmation,
} from "../controllers/checkoutController.js";

const router = express.Router();

// Initialize checkout
router.post("/initialize", optionalAuth, validateCheckoutInitialize, initializeCheckout);

// Get shipping rates
router.post("/shipping-rates", getShippingRates);

// Calculate tax
router.post("/calculate-tax", calculateTax);

// Validate coupon
router.post("/validate-coupon", validateCouponCode, validateCoupon);

// Complete checkout
router.post("/complete", optionalAuth, validateCompleteCheckout, completeCheckout);

// Get order confirmation
router.get("/order/:orderNumber", optionalAuth, getOrderConfirmation);

export default router;
