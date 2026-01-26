import mongoose from "mongoose";
import slugify from "slugify";

const productSchema = new mongoose.Schema(
  {
    // Basic Information
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      maxlength: [200, "Product name cannot exceed 200 characters"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      maxlength: [5000, "Description cannot exceed 5000 characters"],
    },
    shortDescription: {
      type: String,
      maxlength: [500, "Short description cannot exceed 500 characters"],
    },
    brand: {
      type: String,
      trim: true,
      maxlength: [100, "Brand name cannot exceed 100 characters"],
    },

    // Pricing
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price cannot be negative"],
    },
    compareAtPrice: {
      type: Number,
      min: [0, "Compare at price cannot be negative"],
      validate: {
        validator: function (value) {
          return !value || value > this.price;
        },
        message: "Compare at price must be greater than regular price",
      },
    },
    costPrice: {
      type: Number,
      min: [0, "Cost price cannot be negative"],
      select: false, // Hide from public queries
    },
    currency: {
      type: String,
      default: "USD",
      enum: ["USD", "EUR", "GBP", "VND"],
    },

    // Inventory
    sku: {
      type: String,
      unique: true,
      sparse: true, // Allow multiple null values
      uppercase: true,
      trim: true,
    },
    barcode: {
      type: String,
      sparse: true,
    },
    stock: {
      type: Number,
      required: [true, "Stock quantity is required"],
      min: [0, "Stock cannot be negative"],
      default: 0,
    },
    lowStockThreshold: {
      type: Number,
      default: 10,
      min: [0, "Low stock threshold cannot be negative"],
    },
    trackInventory: {
      type: Boolean,
      default: true,
    },

    // Variants
    sizes: [
      {
        name: {
          type: String,
          required: true,
          enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "One Size"],
        },
        stock: {
          type: Number,
          default: 0,
          min: 0,
        },
        sku: String,
      },
    ],
    colors: [
      {
        name: {
          type: String,
          required: true,
        },
        hexCode: {
          type: String,
          match: [/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Invalid hex color code"],
        },
        stock: {
          type: Number,
          default: 0,
          min: 0,
        },
        images: [String],
      },
    ],
    materials: [
      {
        name: String,
        percentage: {
          type: Number,
          min: 0,
          max: 100,
        },
      },
    ],

    // Media
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        alt: String,
        isPrimary: {
          type: Boolean,
          default: false,
        },
        order: {
          type: Number,
          default: 0,
        },
      },
    ],
    thumbnail: {
      type: String,
    },

    // Categorization
    category: {
      type: String,
      required: [true, "Product category is required"],
      enum: ["women", "men", "kids", "accessories", "shoes", "bags"],
      index: true,
    },
    subcategory: {
      type: String,
      index: true,
    },
    tags: [
      {
        type: String,
        lowercase: true,
        trim: true,
      },
    ],
    collections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection",
      },
    ],

    // Product Details
    weight: {
      value: Number,
      unit: {
        type: String,
        enum: ["kg", "g", "lb", "oz"],
        default: "kg",
      },
    },
    dimensions: {
      length: Number,
      width: Number,
      height: Number,
      unit: {
        type: String,
        enum: ["cm", "in"],
        default: "cm",
      },
    },
    careInstructions: [String],
    features: [String],

    // Status Flags
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
      index: true,
    },
    isNewArrival: {
      type: Boolean,
      default: true,
    },
    isOnSale: {
      type: Boolean,
      default: false,
    },

    // SEO
    metaTitle: {
      type: String,
      maxlength: [70, "Meta title cannot exceed 70 characters"],
    },
    metaDescription: {
      type: String,
      maxlength: [160, "Meta description cannot exceed 160 characters"],
    },

    // Reviews & Ratings
    ratings: {
      average: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },
      count: {
        type: Number,
        default: 0,
      },
      distribution: {
        1: { type: Number, default: 0 },
        2: { type: Number, default: 0 },
        3: { type: Number, default: 0 },
        4: { type: Number, default: 0 },
        5: { type: Number, default: 0 },
      },
    },
    numReviews: {
      type: Number,
      default: 0,
    },

    // Timestamps for business logic
    publishedAt: Date,
    saleStartDate: Date,
    saleEndDate: Date,

    // Admin tracking
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// INDEXES for Performance
// Text index for search (only ONE text index allowed per collection)
productSchema.index({ name: "text", description: "text", tags: "text", brand: "text" });
productSchema.index({ price: 1, category: 1 });
productSchema.index({ createdAt: -1 });
productSchema.index({ "ratings.average": -1 });
productSchema.index({ isActive: 1, isFeatured: 1 });

// VIRTUALS
// Calculate discount percentage
productSchema.virtual("discountPercentage").get(function () {
  if (this.compareAtPrice && this.compareAtPrice > this.price) {
    return Math.round(((this.compareAtPrice - this.price) / this.compareAtPrice) * 100);
  }
  return 0;
});

// Check if product is in stock
productSchema.virtual("inStock").get(function () {
  return this.stock > 0;
});

// Check if low stock
productSchema.virtual("isLowStock").get(function () {
  return this.stock > 0 && this.stock <= this.lowStockThreshold;
});

// Get primary image
productSchema.virtual("primaryImage").get(function () {
  const primary = this.images?.find((img) => img.isPrimary);
  return primary?.url || this.images?.[0]?.url || this.thumbnail;
});

// PRE-SAVE MIDDLEWARE
// Generate slug from name
productSchema.pre("save", function (next) {
  if (this.isModified("name")) {
    this.slug = slugify(this.name, {
      lower: true,
      strict: true,
      remove: /[*+~.()'"!:@]/g,
    });
    // Add unique identifier to prevent duplicates
    this.slug = `${this.slug}-${Date.now().toString(36)}`;
  }
  next();
});

// Set thumbnail from primary image
productSchema.pre("save", function (next) {
  if (!this.thumbnail && this.images?.length > 0) {
    const primary = this.images.find((img) => img.isPrimary);
    this.thumbnail = primary?.url || this.images[0].url;
  }
  next();
});

// Update isOnSale based on dates
productSchema.pre("save", function (next) {
  const now = new Date();
  if (this.saleStartDate && this.saleEndDate) {
    this.isOnSale = now >= this.saleStartDate && now <= this.saleEndDate;
  }
  next();
});

// STATIC METHODS
// Calculate average rating
productSchema.statics.calculateAverageRating = async function (productId) {
  const Review = mongoose.model("Review");

  const stats = await Review.aggregate([
    { $match: { product: productId } },
    {
      $group: {
        _id: "$product",
        avgRating: { $avg: "$rating" },
        numReviews: { $sum: 1 },
        distribution: {
          $push: "$rating",
        },
      },
    },
  ]);

  if (stats.length > 0) {
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    stats[0].distribution.forEach((rating) => {
      distribution[rating]++;
    });

    await this.findByIdAndUpdate(productId, {
      "ratings.average": Math.round(stats[0].avgRating * 10) / 10,
      "ratings.count": stats[0].numReviews,
      "ratings.distribution": distribution,
      numReviews: stats[0].numReviews,
    });
  } else {
    await this.findByIdAndUpdate(productId, {
      "ratings.average": 0,
      "ratings.count": 0,
      "ratings.distribution": { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      numReviews: 0,
    });
  }
};

// INSTANCE METHODS
// Check if specific size is available
productSchema.methods.isSizeAvailable = function (sizeName) {
  const size = this.sizes.find((s) => s.name === sizeName);
  return size ? size.stock > 0 : false;
};

// Check if specific color is available
productSchema.methods.isColorAvailable = function (colorName) {
  const color = this.colors.find((c) => c.name === colorName);
  return color ? color.stock > 0 : false;
};

// Reduce stock
productSchema.methods.reduceStock = async function (quantity, size, color) {
  if (this.trackInventory) {
    this.stock -= quantity;

    if (size) {
      const sizeVariant = this.sizes.find((s) => s.name === size);
      if (sizeVariant) sizeVariant.stock -= quantity;
    }

    if (color) {
      const colorVariant = this.colors.find((c) => c.name === color);
      if (colorVariant) colorVariant.stock -= quantity;
    }

    await this.save();
  }
};

// Add text index for search functionality
// Note: Only ONE text index allowed per collection - merged with indexes above

const Product = mongoose.model("Product", productSchema);

export default Product;
