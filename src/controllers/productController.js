import Product from "../models/Product.js";
import { asyncHandler, AppError } from "../middleware/errorHandler.js";

/**
 * @desc    Get all products with filtering, sorting, pagination
 * @route   GET /api/products
 * @access  Public
 */
export const getProducts = asyncHandler(async (req, res) => {
  // Build query
  const queryObj = { isActive: true };

  // 1. FILTERING
  const {
    category,
    subcategory,
    brand,
    minPrice,
    maxPrice,
    size,
    color,
    tags,
    search,
    inStock,
    onSale,
    featured,
  } = req.query;

  if (category) queryObj.category = category;
  if (subcategory) queryObj.subcategory = subcategory;
  if (brand) queryObj.brand = { $regex: brand, $options: "i" };
  if (tags) queryObj.tags = { $in: tags.split(",") };
  if (inStock === "true") queryObj.stock = { $gt: 0 };
  if (onSale === "true") queryObj.isOnSale = true;
  if (featured === "true") queryObj.isFeatured = true;

  // Price range filter
  if (minPrice || maxPrice) {
    queryObj.price = {};
    if (minPrice) queryObj.price.$gte = Number(minPrice);
    if (maxPrice) queryObj.price.$lte = Number(maxPrice);
  }

  // Size filter
  if (size) {
    queryObj["sizes.name"] = { $in: size.split(",") };
    queryObj["sizes.stock"] = { $gt: 0 };
  }

  // Color filter
  if (color) {
    queryObj["colors.name"] = { $in: color.split(",") };
  }

  // Text search
  if (search) {
    queryObj.$text = { $search: search };
  }

  // 2. SORTING
  let sortBy = "-createdAt"; // Default: newest first
  const { sort } = req.query;

  const sortOptions = {
    "price-asc": "price",
    "price-desc": "-price",
    newest: "-createdAt",
    oldest: "createdAt",
    "name-asc": "name",
    "name-desc": "-name",
    rating: "-ratings.average",
    popular: "-numReviews",
  };

  if (sort && sortOptions[sort]) {
    sortBy = sortOptions[sort];
  }

  // 3. FIELD SELECTION
  let fields = "-costPrice -__v";
  if (req.query.fields) {
    fields = req.query.fields.split(",").join(" ");
  }

  // 4. PAGINATION
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 12;
  const skip = (page - 1) * limit;

  // Execute query
  const [products, total] = await Promise.all([
    Product.find(queryObj).select(fields).sort(sortBy).skip(skip).limit(limit).lean(),
    Product.countDocuments(queryObj),
  ]);

  // Calculate pagination info
  const totalPages = Math.ceil(total / limit);
  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;

  res.status(200).json({
    success: true,
    data: {
      products,
      pagination: {
        currentPage: page,
        totalPages,
        totalProducts: total,
        limit,
        hasNextPage,
        hasPrevPage,
      },
    },
  });
});

/**
 * @desc    Get single product by ID or slug
 * @route   GET /api/products/:identifier
 * @access  Public
 */
export const getProduct = asyncHandler(async (req, res, next) => {
  const { identifier } = req.params;

  // Try to find by ID first, then by slug
  let product;

  if (identifier.match(/^[0-9a-fA-F]{24}$/)) {
    product = await Product.findOne({ _id: identifier, isActive: true });
  }

  if (!product) {
    product = await Product.findOne({ slug: identifier, isActive: true });
  }

  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    data: { product },
  });
});

/**
 * @desc    Get featured products
 * @route   GET /api/products/featured
 * @access  Public
 */
export const getFeaturedProducts = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 8;

  const products = await Product.find({ isActive: true, isFeatured: true })
    .select("name slug price compareAtPrice thumbnail ratings category")
    .sort("-createdAt")
    .limit(limit)
    .lean();

  res.status(200).json({
    success: true,
    data: { products },
  });
});

/**
 * @desc    Get new arrivals
 * @route   GET /api/products/new-arrivals
 * @access  Public
 */
export const getNewArrivals = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 8;

  const products = await Product.find({ isActive: true, isNewArrival: true })
    .select("name slug price compareAtPrice thumbnail ratings category")
    .sort("-createdAt")
    .limit(limit)
    .lean();

  res.status(200).json({
    success: true,
    data: { products },
  });
});

/**
 * @desc    Get products on sale
 * @route   GET /api/products/sale
 * @access  Public
 */
export const getSaleProducts = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 12;

  const products = await Product.find({
    isActive: true,
    compareAtPrice: { $exists: true, $gt: 0 },
    $expr: { $lt: ["$price", "$compareAtPrice"] },
  })
    .select("name slug price compareAtPrice thumbnail ratings category")
    .sort("-createdAt")
    .limit(limit)
    .lean();

  res.status(200).json({
    success: true,
    data: { products },
  });
});

/**
 * @desc    Get related products
 * @route   GET /api/products/:id/related
 * @access  Public
 */
export const getRelatedProducts = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  const limit = parseInt(req.query.limit, 10) || 4;

  const relatedProducts = await Product.find({
    _id: { $ne: product._id },
    isActive: true,
    $or: [{ category: product.category }, { tags: { $in: product.tags } }],
  })
    .select("name slug price compareAtPrice thumbnail ratings category")
    .limit(limit)
    .lean();

  res.status(200).json({
    success: true,
    data: { products: relatedProducts },
  });
});

/**
 * @desc    Create new product
 * @route   POST /api/products
 * @access  Private/Admin
 */
export const createProduct = asyncHandler(async (req, res) => {
  // Add creator info
  req.body.createdBy = req.user._id;

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    message: "Product created successfully",
    data: { product },
  });
});

/**
 * @desc    Update product
 * @route   PUT /api/products/:id
 * @access  Private/Admin
 */
export const updateProduct = asyncHandler(async (req, res, next) => {
  // Add updater info
  req.body.updatedBy = req.user._id;

  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    message: "Product updated successfully",
    data: { product },
  });
});

/**
 * @desc    Delete product (soft delete)
 * @route   DELETE /api/products/:id
 * @access  Private/Admin
 */
export const deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { isActive: false },
    { new: true }
  );

  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});

/**
 * @desc    Get product categories with counts
 * @route   GET /api/products/categories
 * @access  Public
 */
export const getCategories = asyncHandler(async (req, res) => {
  const categories = await Product.aggregate([
    { $match: { isActive: true } },
    {
      $group: {
        _id: "$category",
        count: { $sum: 1 },
        subcategories: { $addToSet: "$subcategory" },
      },
    },
    { $sort: { _id: 1 } },
  ]);

  res.status(200).json({
    success: true,
    data: { categories },
  });
});

/**
 * @desc    Update product stock
 * @route   PATCH /api/products/:id/stock
 * @access  Private/Admin
 */
export const updateStock = asyncHandler(async (req, res, next) => {
  const { stock, sizes, colors } = req.body;

  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  if (stock !== undefined) {
    product.stock = stock;
  }

  if (sizes) {
    sizes.forEach((update) => {
      const sizeIndex = product.sizes.findIndex((s) => s.name === update.name);
      if (sizeIndex > -1) {
        product.sizes[sizeIndex].stock = update.stock;
      }
    });
  }

  if (colors) {
    colors.forEach((update) => {
      const colorIndex = product.colors.findIndex((c) => c.name === update.name);
      if (colorIndex > -1) {
        product.colors[colorIndex].stock = update.stock;
      }
    });
  }

  await product.save();

  res.status(200).json({
    success: true,
    message: "Stock updated successfully",
    data: { product },
  });
});
