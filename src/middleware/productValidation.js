import { body, query } from "express-validator";
import { handleValidationErrors } from "./validate.js";

/**
 * Product Creation/Update Validation
 */
export const validateProduct = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Product name is required")
    .isLength({ min: 3, max: 200 })
    .withMessage("Name must be 3-200 characters"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 10, max: 5000 })
    .withMessage("Description must be 10-5000 characters"),

  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),

  body("compareAtPrice")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Compare at price must be a positive number"),

  body("stock")
    .notEmpty()
    .withMessage("Stock is required")
    .isInt({ min: 0 })
    .withMessage("Stock must be a non-negative integer"),

  body("category")
    .notEmpty()
    .withMessage("Category is required")
    .isIn(["women", "men", "kids", "accessories", "shoes", "bags"])
    .withMessage("Invalid category"),

  body("sizes").optional().isArray().withMessage("Sizes must be an array"),

  body("sizes.*.name")
    .optional()
    .isIn(["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "One Size"])
    .withMessage("Invalid size"),

  body("colors").optional().isArray().withMessage("Colors must be an array"),

  body("colors.*.hexCode")
    .optional()
    .matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
    .withMessage("Invalid hex color code"),

  body("images").optional().isArray({ min: 1 }).withMessage("At least one image is required"),

  body("images.*.url").optional().isURL().withMessage("Invalid image URL"),

  handleValidationErrors,
];

/**
 * Product Query Validation
 */
export const validateProductQuery = [
  query("page").optional().isInt({ min: 1 }).withMessage("Page must be a positive integer"),

  query("limit")
    .optional()
    .isInt({ min: 1, max: 50 })
    .withMessage("Limit must be between 1 and 50"),

  query("minPrice")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Min price must be a positive number"),

  query("maxPrice")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Max price must be a positive number"),

  query("sort")
    .optional()
    .isIn([
      "price-asc",
      "price-desc",
      "newest",
      "oldest",
      "name-asc",
      "name-desc",
      "rating",
      "popular",
    ])
    .withMessage("Invalid sort option"),

  handleValidationErrors,
];
