import express from "express";
import {
  register,
  login,
  logout,
  refreshAccessToken,
  getMe,
} from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";
import { authLimiter, passwordResetLimiter } from "../config/security.js";
import { validateRegistration, validateLogin } from "../middleware/validate.js";

const router = express.Router();

// Public routes with rate limiting and validation
router.post("/register", authLimiter, validateRegistration, register);
router.post("/login", authLimiter, validateLogin, login);
router.post("/logout", logout);
router.post("/refresh", refreshAccessToken);

// Protected routes
router.get("/me", protect, getMe);

export default router;
