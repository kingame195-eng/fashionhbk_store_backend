import User from "../models/User.js";
import { generateTokenPair, verifyRefreshToken } from "../services/tokenService.js";
import { asyncHandler } from "../middleware/errorHandler.js";
import crypto from "crypto";
import { sendPasswordResetEmail } from "../utils/emailService.js";

// Cookie options for tokens
// Note: In production with different domains, sameSite must be 'none' with secure=true
// In development, we use 'lax' for better compatibility
const isProduction = process.env.NODE_ENV === "production";
const cookieOptions = {
  httpOnly: true, // Prevents XSS attacks
  secure: isProduction, // HTTPS only in production
  sameSite: isProduction ? "none" : "lax", // 'none' required for cross-site cookies in production
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  path: "/", // Ensure cookie is sent with all requests
};

/**
 * Register a new user
 * POST /api/auth/register
 */

export const register = asyncHandler(async (req, res, next) => {
  console.log("Register route handler called");
  const { firstName, lastName, email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: "This email address is already registered. Please sign in or use a different email.",
      code: "EMAIL_EXISTS",
    });
  }

  // Create new user
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  // Generate tokens
  const { accessToken, refreshToken } = generateTokenPair(user);

  // Save refresh token to user
  user.refreshToken = refreshToken;
  await user.save();

  // Set refresh token in cookie
  res.cookie("refreshToken", refreshToken, cookieOptions);

  res.status(201).json({
    success: true,
    message: "Welcome! Your account has been created successfully.",
    data: {
      user: user.toJSON(),
      accessToken,
    },
  });
});

/**
 * Login user
 * POST /api/auth/login
 */
export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Find user by email (include password for comparison)
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "The email or password you entered is incorrect. Please try again.",
      code: "INVALID_CREDENTIALS",
    });
  }

  // Check if user is active
  if (!user.isActive) {
    return res.status(403).json({
      success: false,
      message: "Your account has been suspended. Please contact our support team for assistance.",
      code: "ACCOUNT_SUSPENDED",
    });
  }

  // Verify password
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    return res.status(401).json({
      success: false,
      message: "The email or password you entered is incorrect. Please try again.",
      code: "INVALID_CREDENTIALS",
    });
  }

  // Generate tokens
  const { accessToken, refreshToken } = generateTokenPair(user);

  // Save refresh token to user
  user.refreshToken = refreshToken;
  await user.save();

  // Set refresh token in cookie
  res.cookie("refreshToken", refreshToken, cookieOptions);

  res.status(200).json({
    success: true,
    message: "Welcome back! You have successfully signed in.",
    data: {
      user: user.toJSON(),
      accessToken,
    },
  });
});

/**
 * Logout user
 * POST /api/auth/logout
 */
export const logout = asyncHandler(async (req, res, next) => {
  const { refreshToken } = req.cookies;

  if (refreshToken) {
    // Clear refresh token from database
    await User.findOneAndUpdate({ refreshToken }, { refreshToken: null });
  }

  // Clear cookie (need to match cookie options except maxAge)
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    path: "/",
  });

  res.status(200).json({
    success: true,
    message: "You have been successfully signed out. See you again soon!",
  });
});

/**
 * Refresh access token
 * POST /api/auth/refresh
 */
export const refreshAccessToken = asyncHandler(async (req, res, next) => {
  // Accept refresh token from cookie or request body
  const refreshToken = req.cookies?.refreshToken || req.body?.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      success: false,
      message: "Your session has expired. Please sign in again to continue.",
      code: "SESSION_EXPIRED",
    });
  }

  // Verify refresh token
  let decoded;
  try {
    decoded = verifyRefreshToken(refreshToken);
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Your session has expired. Please sign in again to continue.",
      code: "TOKEN_EXPIRED",
    });
  }

  // Find user with this refresh token (need to select refreshToken as it's excluded by default)
  const user = await User.findOne({
    _id: decoded.id,
    refreshToken,
  }).select("+refreshToken");

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Your session is no longer valid. Please sign in again.",
      code: "INVALID_SESSION",
    });
  }

  // Generate new tokens
  const tokens = generateTokenPair(user);

  // Update refresh token
  user.refreshToken = tokens.refreshToken;
  await user.save();

  // Set new refresh token in cookie
  res.cookie("refreshToken", tokens.refreshToken, cookieOptions);

  res.status(200).json({
    success: true,
    data: {
      accessToken: tokens.accessToken,
    },
  });
});

/**
 * Get current user profile
 * GET /api/auth/me
 */
export const getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "We couldn't find your account. Please try signing in again.",
      code: "USER_NOT_FOUND",
    });
  }

  res.status(200).json({
    success: true,
    data: { user },
  });
});

/**
 * Forgot Password - Request password reset email
 * POST /api/auth/forgot-password
 */
export const forgotPassword = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Please provide your email address.",
      code: "EMAIL_REQUIRED",
    });
  }

  // Find user by email
  const user = await User.findOne({ email: email.toLowerCase() });

  if (!user) {
    // In development: show clear message for debugging
    // In production: don't reveal if email exists (security)
    if (process.env.NODE_ENV === "development") {
      return res.status(404).json({
        success: false,
        message: "No account found with this email address. Please register first.",
        code: "EMAIL_NOT_FOUND",
      });
    }
    return res.status(200).json({
      success: true,
      message: "If an account with that email exists, we have sent password reset instructions.",
    });
  }

  // Generate reset token
  const resetToken = crypto.randomBytes(32).toString("hex");
  const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");

  // Save hashed token to user with expiry (1 hour)
  user.passwordResetToken = hashedToken;
  user.passwordResetExpires = Date.now() + 60 * 60 * 1000; // 1 hour
  await user.save({ validateBeforeSave: false });

  // Create reset URL
  const clientUrl = process.env.CLIENT_URL || "http://localhost:3000";
  const resetUrl = `${clientUrl}/reset-password/${resetToken}`;

  try {
    // Send email
    await sendPasswordResetEmail(user.email, resetToken, resetUrl);

    res.status(200).json({
      success: true,
      message: "If an account with that email exists, we have sent password reset instructions.",
    });
  } catch (error) {
    // Clear reset token if email fails
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    console.error("Password reset email error:", error);
    return res.status(500).json({
      success: false,
      message: "There was an error sending the email. Please try again later.",
      code: "EMAIL_SEND_FAILED",
    });
  }
});

/**
 * Reset Password - Set new password using token
 * POST /api/auth/reset-password/:token
 */
export const resetPassword = asyncHandler(async (req, res, next) => {
  const { token } = req.params;
  const { password, confirmPassword } = req.body;

  // Validate input
  if (!password || !confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Please provide both password and confirmation.",
      code: "PASSWORD_REQUIRED",
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Passwords do not match.",
      code: "PASSWORD_MISMATCH",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 6 characters long.",
      code: "PASSWORD_TOO_SHORT",
    });
  }

  // Hash the token from URL to compare with stored hash
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  // Find user with valid reset token
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() }, // Token not expired
  });

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Password reset link is invalid or has expired. Please request a new one.",
      code: "INVALID_TOKEN",
    });
  }

  // Update password
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // Optionally: Log user in after password reset
  const { accessToken, refreshToken } = generateTokenPair(user);
  user.refreshToken = refreshToken;
  await user.save();

  res.cookie("refreshToken", refreshToken, cookieOptions);

  res.status(200).json({
    success: true,
    message: "Your password has been reset successfully. You are now logged in.",
    data: {
      user: user.toJSON(),
      accessToken,
    },
  });
});
