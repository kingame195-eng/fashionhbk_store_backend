import express from "express";
import mongoose from "mongoose";
import { protect } from "../middleware/auth.js";
import User from "../models/User.js";
import Product from "../models/Product.js";
import Cart from "../models/Cart.js";
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

// ============================================
// Account Deletion
// ============================================

/**
 * @route   DELETE /api/profile
 * @desc    Delete user account
 * @access  Private
 */
router.delete("/", protect, async (req, res) => {
  try {
    const { password, confirmation } = req.body;

    if (!password || confirmation !== "DELETE") {
      return res.status(400).json({
        success: false,
        message: "Password and confirmation ('DELETE') are required",
        code: "MISSING_FIELDS",
      });
    }

    const user = await User.findById(req.user._id).select("+password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Password is incorrect",
        code: "INVALID_PASSWORD",
      });
    }

    // Soft delete - deactivate account
    user.isActive = false;
    user.email = `deleted_${user._id}@deleted.com`;
    await user.save({ validateBeforeSave: false });

    res.json({
      success: true,
      message: "Account deleted successfully",
    });
  } catch (error) {
    console.error("Delete account error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete account. Please try again.",
      code: "DELETE_FAILED",
    });
  }
});

// ============================================
// Email Update
// ============================================

/**
 * @route   PATCH /api/profile/email
 * @desc    Update user email
 * @access  Private
 */
router.patch("/email", protect, async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
        code: "MISSING_FIELDS",
      });
    }

    const user = await User.findById(req.user._id).select("+password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Password is incorrect",
        code: "INVALID_PASSWORD",
      });
    }

    // Check if email already taken
    const existing = await User.findOne({ email, _id: { $ne: user._id } });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: "This email is already in use",
        code: "EMAIL_EXISTS",
      });
    }

    user.email = email;
    user.emailVerified = false;
    await user.save({ validateBeforeSave: false });

    res.json({
      success: true,
      message: "Email updated successfully",
      data: { email: user.email },
    });
  } catch (error) {
    console.error("Update email error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update email. Please try again.",
      code: "EMAIL_UPDATE_FAILED",
    });
  }
});

// ============================================
// Preferences
// ============================================

/**
 * @route   PATCH /api/profile/preferences
 * @desc    Update user preferences
 * @access  Private
 */
router.patch("/preferences", protect, async (req, res) => {
  try {
    const { newsletter, notifications, language, currency } = req.body;

    const updateData = {};
    if (newsletter !== undefined) updateData["preferences.newsletter"] = newsletter;
    if (notifications !== undefined) updateData["preferences.notifications"] = notifications;
    if (language !== undefined) updateData["preferences.language"] = language;
    if (currency !== undefined) updateData["preferences.currency"] = currency;

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $set: updateData },
      { new: true, runValidators: true }
    ).select("preferences");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND",
      });
    }

    res.json({
      success: true,
      message: "Preferences updated successfully",
      data: { preferences: user.preferences },
    });
  } catch (error) {
    console.error("Update preferences error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update preferences. Please try again.",
      code: "UPDATE_FAILED",
    });
  }
});

// ============================================
// Avatar
// ============================================

/**
 * @route   POST /api/profile/avatar
 * @desc    Upload user avatar (accepts base64 or URL for now)
 * @access  Private
 */
router.post("/avatar", protect, async (req, res) => {
  try {
    // For a full implementation, use multer for file uploads
    // This simplified version accepts a URL or base64 string
    const { avatar } = req.body;

    if (!avatar) {
      return res.status(400).json({
        success: false,
        message: "Avatar data is required",
        code: "MISSING_FIELD",
      });
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $set: { avatar } },
      { new: true }
    ).select("avatar");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND",
      });
    }

    res.json({
      success: true,
      message: "Avatar uploaded successfully",
      data: { avatar: user.avatar },
    });
  } catch (error) {
    console.error("Upload avatar error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to upload avatar. Please try again.",
      code: "UPLOAD_FAILED",
    });
  }
});

/**
 * @route   DELETE /api/profile/avatar
 * @desc    Delete user avatar
 * @access  Private
 */
router.delete("/avatar", protect, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $unset: { avatar: 1 } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND",
      });
    }

    res.json({
      success: true,
      message: "Avatar deleted successfully",
    });
  } catch (error) {
    console.error("Delete avatar error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete avatar. Please try again.",
      code: "DELETE_FAILED",
    });
  }
});

// ============================================
// Profile Wishlist Routes
// ============================================

/**
 * @route   GET /api/profile/wishlist
 * @desc    Get user wishlist
 * @access  Private
 */
router.get("/wishlist", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .select("wishlist")
      .populate({
        path: "wishlist",
        select: "name slug price compareAtPrice thumbnail ratings category isActive",
        match: { isActive: true },
      });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND",
      });
    }

    // Filter out nulls (products that were deactivated)
    const wishlist = (user.wishlist || []).filter(Boolean);

    res.json({
      success: true,
      data: { wishlist, total: wishlist.length },
    });
  } catch (error) {
    console.error("Get wishlist error:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
      code: "SERVER_ERROR",
    });
  }
});

/**
 * @route   POST /api/profile/wishlist
 * @desc    Add product to wishlist
 * @access  Private
 */
router.post("/wishlist", protect, async (req, res) => {
  try {
    const { productId } = req.body;

    if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        success: false,
        message: "Valid product ID is required",
        code: "INVALID_PRODUCT_ID",
      });
    }

    const product = await Product.findById(productId);
    if (!product || !product.isActive) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
        code: "PRODUCT_NOT_FOUND",
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

    // Check if already in wishlist
    if (user.wishlist.some((id) => id.toString() === productId)) {
      return res.status(400).json({
        success: false,
        message: "Product already in wishlist",
        code: "ALREADY_IN_WISHLIST",
      });
    }

    user.wishlist.push(productId);
    await user.save({ validateBeforeSave: false });

    res.status(201).json({
      success: true,
      message: "Product added to wishlist",
      data: { wishlist: user.wishlist },
    });
  } catch (error) {
    console.error("Add to wishlist error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add to wishlist. Please try again.",
      code: "ADD_FAILED",
    });
  }
});

/**
 * @route   DELETE /api/profile/wishlist/:productId
 * @desc    Remove product from wishlist
 * @access  Private
 */
router.delete("/wishlist/:productId", protect, async (req, res) => {
  try {
    const { productId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID format",
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

    user.wishlist = user.wishlist.filter((id) => id.toString() !== productId);
    await user.save({ validateBeforeSave: false });

    res.json({
      success: true,
      message: "Product removed from wishlist",
      data: { wishlist: user.wishlist },
    });
  } catch (error) {
    console.error("Remove from wishlist error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to remove from wishlist. Please try again.",
      code: "REMOVE_FAILED",
    });
  }
});

/**
 * @route   GET /api/profile/wishlist/check/:productId
 * @desc    Check if product is in wishlist
 * @access  Private
 */
router.get("/wishlist/check/:productId", protect, async (req, res) => {
  try {
    const { productId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID format",
        code: "INVALID_ID",
      });
    }

    const user = await User.findById(req.user._id).select("wishlist");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND",
      });
    }

    const inWishlist = user.wishlist.some((id) => id.toString() === productId);

    res.json({
      success: true,
      data: { inWishlist },
    });
  } catch (error) {
    console.error("Check wishlist error:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
      code: "SERVER_ERROR",
    });
  }
});

/**
 * @route   POST /api/profile/wishlist/:productId/move-to-cart
 * @desc    Move product from wishlist to cart
 * @access  Private
 */
router.post("/wishlist/:productId/move-to-cart", protect, async (req, res) => {
  try {
    const { productId } = req.params;
    const { size, color, quantity = 1 } = req.body;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID format",
        code: "INVALID_ID",
      });
    }

    const product = await Product.findById(productId);
    if (!product || !product.isActive) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
        code: "PRODUCT_NOT_FOUND",
      });
    }

    // Add to cart
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      cart = new Cart({ user: req.user._id, items: [] });
    }

    const existingIndex = cart.items.findIndex(
      (item) =>
        item.product.toString() === productId &&
        (item.size || "") === (size || "") &&
        (item.color || "") === (color || "")
    );

    if (existingIndex > -1) {
      cart.items[existingIndex].quantity += quantity;
    } else {
      cart.items.push({
        product: productId,
        quantity,
        price: product.price,
        size,
        color,
      });
    }

    await cart.save();

    // Remove from wishlist
    const user = await User.findById(req.user._id);
    user.wishlist = user.wishlist.filter((id) => id.toString() !== productId);
    await user.save({ validateBeforeSave: false });

    res.json({
      success: true,
      message: "Product moved to cart",
      data: { wishlist: user.wishlist },
    });
  } catch (error) {
    console.error("Move to cart error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to move to cart. Please try again.",
      code: "MOVE_FAILED",
    });
  }
});

export default router;
