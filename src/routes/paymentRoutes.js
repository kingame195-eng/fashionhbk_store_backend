import express from "express";
import { protect, optionalAuth, adminOnly } from "../middleware/auth.js";
import {
  getPaymentMethods,
  createPaymentIntent,
  confirmPayment,
  processCOD,
  processBankTransfer,
  verifyBankTransfer,
  createVNPayPayment,
  vnpayCallback,
  getPaymentStatus,
  requestRefund,
  processRefund,
} from "../controllers/paymentController.js";

const router = express.Router();

// ============ PUBLIC ROUTES ============

// Get available payment methods
router.get("/methods", getPaymentMethods);

// VNPay callback (public - called by VNPay)
router.get("/vnpay/callback", vnpayCallback);

// ============ PROTECTED ROUTES ============

// Create payment intent (for Stripe)
router.post("/create-intent", optionalAuth, createPaymentIntent);

// Confirm payment
router.post("/confirm", optionalAuth, confirmPayment);

// Process COD order
router.post("/cod", optionalAuth, processCOD);

// Process Bank Transfer order
router.post("/bank-transfer", optionalAuth, processBankTransfer);

// Create VNPay payment
router.post("/vnpay/create", optionalAuth, createVNPayPayment);

// Get payment status
router.get("/status/:orderId", optionalAuth, getPaymentStatus);

// Request refund
router.post("/refund", protect, requestRefund);

// ============ ADMIN ROUTES ============

// Verify bank transfer
router.post("/verify-transfer", protect, adminOnly, verifyBankTransfer);

// Process refund
router.post("/refund/process", protect, adminOnly, processRefund);

export default router;
