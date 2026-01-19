import User from "../models/User.js";
import { generateTokenPair, verifyRefreshToken } from "../services/tokenService.js";
import { asyncHandler } from "../middleware/errorHandler.js";

// Cookie options for tokens
const cookieOptions = {
  httpOnly: true, // Prevents XSS attacks
  secure: process.env.NODE_ENV === "production", // HTTPS only in production
  sameSite: "strict", // Prevents CSRF attacks
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
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
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
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
