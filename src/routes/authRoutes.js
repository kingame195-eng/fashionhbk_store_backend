import express from "express";
import {
  register,
  login,
  logout,
  refreshAccessToken,
  getMe,
  forgotPassword,
  resetPassword,
} from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";
import { validateRegistration, validateLogin } from "../middleware/validate.js";
import { authLimiter, passwordResetLimiter } from "../config/security.js";

const router = express.Router();

// Public routes with validation and rate limiting
router.post("/register", authLimiter, validateRegistration, register);
router.post("/login", authLimiter, validateLogin, login);
router.post("/logout", logout);
router.post("/refresh", refreshAccessToken);
router.post("/forgot-password", passwordResetLimiter, forgotPassword);
router.post("/reset-password/:token", passwordResetLimiter, resetPassword);

// Protected routes
router.get("/me", protect, getMe);

export default router;
