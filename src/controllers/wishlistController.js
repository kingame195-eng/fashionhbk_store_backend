import User from "../models/User.js";
import Product from "../models/Product.js";

/**
 * @desc    Get user's wishlist
 * @route   GET /api/wishlist
 * @access  Private
 */
export const getWishlist = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).populate({
      path: "wishlist.product",
      select: "name slug price salePrice images stock category",
    });

    const wishlistItems = user.wishlist
      .filter((item) => item.product) // Filter out deleted products
      .map((item) => ({
        _id: item._id,
        product: item.product,
        addedAt: item.addedAt,
      }));

    res.status(200).json({
      success: true,
      data: {
        wishlist: wishlistItems,
        count: wishlistItems.length,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Add product to wishlist
 * @route   POST /api/wishlist/:productId
 * @access  Private
 */
export const addToWishlist = async (req, res, next) => {
  try {
    const { productId } = req.params;

    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const user = await User.findById(req.user._id);

    // Check if already in wishlist
    const existingIndex = user.wishlist.findIndex((item) => item.product.toString() === productId);

    if (existingIndex > -1) {
      return res.status(400).json({
        success: false,
        message: "Product already in wishlist",
      });
    }

    // Add to wishlist
    user.wishlist.push({
      product: productId,
      addedAt: new Date(),
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "Product added to wishlist",
      data: {
        productId,
        count: user.wishlist.length,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Remove product from wishlist
 * @route   DELETE /api/wishlist/:productId
 * @access  Private
 */
export const removeFromWishlist = async (req, res, next) => {
  try {
    const { productId } = req.params;

    const user = await User.findById(req.user._id);

    const existingIndex = user.wishlist.findIndex((item) => item.product.toString() === productId);

    if (existingIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Product not in wishlist",
      });
    }

    user.wishlist.splice(existingIndex, 1);
    await user.save();

    res.status(200).json({
      success: true,
      message: "Product removed from wishlist",
      data: {
        productId,
        count: user.wishlist.length,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Toggle product in wishlist
 * @route   POST /api/wishlist/:productId/toggle
 * @access  Private
 */
export const toggleWishlist = async (req, res, next) => {
  try {
    const { productId } = req.params;

    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const user = await User.findById(req.user._id);

    const existingIndex = user.wishlist.findIndex((item) => item.product.toString() === productId);

    let isInWishlist;
    if (existingIndex > -1) {
      // Remove from wishlist
      user.wishlist.splice(existingIndex, 1);
      isInWishlist = false;
    } else {
      // Add to wishlist
      user.wishlist.push({
        product: productId,
        addedAt: new Date(),
      });
      isInWishlist = true;
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: isInWishlist ? "Added to wishlist" : "Removed from wishlist",
      data: {
        productId,
        isInWishlist,
        count: user.wishlist.length,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Check if product is in wishlist
 * @route   GET /api/wishlist/check/:productId
 * @access  Private
 */
export const checkWishlist = async (req, res, next) => {
  try {
    const { productId } = req.params;

    const user = await User.findById(req.user._id);

    const isInWishlist = user.wishlist.some((item) => item.product.toString() === productId);

    res.status(200).json({
      success: true,
      data: {
        productId,
        isInWishlist,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Clear wishlist
 * @route   DELETE /api/wishlist
 * @access  Private
 */
export const clearWishlist = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    user.wishlist = [];
    await user.save();

    res.status(200).json({
      success: true,
      message: "Wishlist cleared",
      data: {
        count: 0,
      },
    });
  } catch (error) {
    next(error);
  }
};
