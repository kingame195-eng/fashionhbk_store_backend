import express from "express";
import { protect } from "../middleware/auth.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();

/**
 * @route   GET /api/profile
 * @desc    Get user profile
 * @access  Private
 */
router.get("/", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND",
      });
    }

    res.json({
      success: true,
      data: { user },
    });
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
      code: "SERVER_ERROR",
    });
  }
});

/**
 * @route   PATCH /api/profile
 * @desc    Update user profile
 * @access  Private
 */
router.patch("/", protect, async (req, res) => {
  try {
    const { firstName, lastName, phone } = req.body;

    const updateData = {};
    if (firstName !== undefined) updateData.firstName = firstName.trim();
    if (lastName !== undefined) updateData.lastName = lastName.trim();
    if (phone !== undefined) updateData.phone = phone.trim();

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $set: updateData },
      { new: true, runValidators: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND",
      });
    }

    res.json({
      success: true,
      message: "Profile updated successfully",
      data: { user },
    });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update profile. Please try again.",
      code: "UPDATE_FAILED",
    });
  }
});

/**
 * @route   PATCH /api/profile/password
 * @desc    Change password
 * @access  Private
 */
router.patch("/password", protect, async (req, res) => {
  try {
    const { currentPassword, newPassword, confirmPassword } = req.body;

    // Validate input
    if (!currentPassword || !newPassword || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "All password fields are required",
        code: "MISSING_FIELDS",
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "New passwords do not match",
        code: "PASSWORD_MISMATCH",
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: "New password must be at least 6 characters",
        code: "PASSWORD_TOO_SHORT",
      });
    }

    // Get user with password
    const user = await User.findById(req.user._id).select("+password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND",
      });
    }

    // Check current password
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Current password is incorrect",
        code: "INVALID_PASSWORD",
      });
    }

    // Update password
    user.password = newPassword;
    await user.save();

    res.json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error("Change password error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to change password. Please try again.",
      code: "PASSWORD_CHANGE_FAILED",
    });
  }
});

export default router;
