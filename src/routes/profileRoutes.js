import express from "express";
import mongoose from "mongoose";
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

    if (newPassword.length < 8) {
      return res.status(400).json({
        success: false,
        message: "New password must be at least 8 characters",
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

// ============================================
// Address Management Routes
// ============================================

/**
 * @route   GET /api/profile/addresses
 * @desc    Get all user addresses
 * @access  Private
 */
router.get("/addresses", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("addresses");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND",
      });
    }

    res.json({
      success: true,
      data: { addresses: user.addresses || [] },
    });
  } catch (error) {
    console.error("Get addresses error:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
      code: "SERVER_ERROR",
    });
  }
});

/**
 * @route   POST /api/profile/addresses
 * @desc    Add new address
 * @access  Private
 */
router.post("/addresses", protect, async (req, res) => {
  try {
    const { fullName, phone, address, ward, district, city, isDefault } = req.body;

    // Validate required fields
    if (!fullName || !phone || !address || !city) {
      return res.status(400).json({
        success: false,
        message: "Full name, phone, address, and city are required",
        code: "MISSING_FIELDS",
      });
    }

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND",
      });
    }

    // If this is set as default, remove default from other addresses
    if (isDefault) {
      user.addresses.forEach((addr) => {
        addr.isDefault = false;
      });
    }

    // If this is the first address, make it default
    const shouldBeDefault = isDefault || user.addresses.length === 0;

    const newAddress = {
      fullName: fullName.trim(),
      phone: phone.trim(),
      address: address.trim(),
      ward: ward?.trim() || "",
      district: district?.trim() || "",
      city: city.trim(),
      isDefault: shouldBeDefault,
    };

    user.addresses.push(newAddress);
    await user.save();

    // Get the newly created address (last one in array)
    const createdAddress = user.addresses[user.addresses.length - 1];

    res.status(201).json({
      success: true,
      message: "Address added successfully",
      data: { address: createdAddress },
    });
  } catch (error) {
    console.error("Add address error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add address. Please try again.",
      code: "ADD_ADDRESS_FAILED",
    });
  }
});

/**
 * @route   PATCH /api/profile/addresses/:id
 * @desc    Update address
 * @access  Private
 */
router.patch("/addresses/:id", protect, async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid address ID format",
        code: "INVALID_ID",
      });
    }

    const { fullName, phone, address, ward, district, city, isDefault } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND",
      });
    }

    const addressIndex = user.addresses.findIndex((addr) => addr._id.toString() === id);

    if (addressIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Address not found",
        code: "ADDRESS_NOT_FOUND",
      });
    }

    // If this is set as default, remove default from other addresses
    if (isDefault) {
      user.addresses.forEach((addr) => {
        addr.isDefault = false;
      });
    }

    // Update address fields
    const addressToUpdate = user.addresses[addressIndex];
    if (fullName !== undefined) addressToUpdate.fullName = fullName.trim();
    if (phone !== undefined) addressToUpdate.phone = phone.trim();
    if (address !== undefined) addressToUpdate.address = address.trim();
    if (ward !== undefined) addressToUpdate.ward = ward.trim();
    if (district !== undefined) addressToUpdate.district = district.trim();
    if (city !== undefined) addressToUpdate.city = city.trim();
    if (isDefault !== undefined) addressToUpdate.isDefault = isDefault;

    await user.save();

    res.json({
      success: true,
      message: "Address updated successfully",
      data: { address: addressToUpdate },
    });
  } catch (error) {
    console.error("Update address error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update address. Please try again.",
      code: "UPDATE_ADDRESS_FAILED",
    });
  }
});

/**
 * @route   DELETE /api/profile/addresses/:id
 * @desc    Delete address
 * @access  Private
 */
router.delete("/addresses/:id", protect, async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid address ID format",
        code: "INVALID_ID",
      });
    }

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND",
      });
    }

    const addressIndex = user.addresses.findIndex((addr) => addr._id.toString() === id);

    if (addressIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Address not found",
        code: "ADDRESS_NOT_FOUND",
      });
    }

    const wasDefault = user.addresses[addressIndex].isDefault;
    user.addresses.splice(addressIndex, 1);

    // If deleted address was default and there are other addresses, make first one default
    if (wasDefault && user.addresses.length > 0) {
      user.addresses[0].isDefault = true;
    }

    await user.save();

    res.json({
      success: true,
      message: "Address deleted successfully",
    });
  } catch (error) {
    console.error("Delete address error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete address. Please try again.",
      code: "DELETE_ADDRESS_FAILED",
    });
  }
});

/**
 * @route   PATCH /api/profile/addresses/:id/default
 * @desc    Set address as default
 * @access  Private
 */
router.patch("/addresses/:id/default", protect, async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid address ID format",
        code: "INVALID_ID",
      });
    }

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND",
      });
    }

    const addressIndex = user.addresses.findIndex((addr) => addr._id.toString() === id);

    if (addressIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Address not found",
        code: "ADDRESS_NOT_FOUND",
      });
    }

    // Remove default from all addresses
    user.addresses.forEach((addr) => {
      addr.isDefault = false;
    });

    // Set the selected address as default
    user.addresses[addressIndex].isDefault = true;

    await user.save();

    res.json({
      success: true,
      message: "Default address updated successfully",
      data: { address: user.addresses[addressIndex] },
    });
  } catch (error) {
    console.error("Set default address error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to set default address. Please try again.",
      code: "SET_DEFAULT_FAILED",
    });
  }
});

export default router;
