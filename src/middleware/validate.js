import { body, param, query, validationResult } from "express-validator";

/**
 * Validation Error Handler
 * Processes validation results and returns formatted errors
 */
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array()[0];
    return res.status(400).json({
      success: false,
      message: firstError.msg,
      code: "VALIDATION_ERROR",
      errors: errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      })),
    });
  }

  next();
};

/**
 * User Registration Validation Rules
 */
export const validateRegistration = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("Please enter your first name")
    .isLength({ min: 2, max: 50 })
    .withMessage("First name must be between 2 and 50 characters")
    .matches(/^[a-zA-ZÀ-ỹ\s-]+$/)
    .withMessage("First name can only contain letters, spaces, and hyphens"),

  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Please enter your last name")
    .isLength({ min: 2, max: 50 })
    .withMessage("Last name must be between 2 and 50 characters")
    .matches(/^[a-zA-ZÀ-ỹ\s-]+$/)
    .withMessage("Last name can only contain letters, spaces, and hyphens"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Please enter your email address")
    .isEmail()
    .withMessage("Please enter a valid email address (e.g., name@example.com)")
    .normalizeEmail()
    .isLength({ max: 254 })
    .withMessage("Email address is too long"),

  body("password")
    .notEmpty()
    .withMessage("Vui lòng tạo mật khẩu")
    .isLength({ min: 8, max: 128 })
    .withMessage("Mật khẩu phải có từ 8 đến 128 ký tự")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage("Mật khẩu phải bao gồm ít nhất một chữ hoa, một chữ thường và một chữ số"),

  body("confirmPassword")
    .notEmpty()
    .withMessage("Please confirm your password")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match. Please try again.");
      }
      return true;
    }),

  handleValidationErrors,
];

/**
 * User Login Validation Rules
 */
export const validateLogin = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Please enter your email address")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .normalizeEmail(),

  body("password").notEmpty().withMessage("Please enter your password"),

  handleValidationErrors,
];

/**
 * Password Change Validation Rules
 */
export const validatePasswordChange = [
  body("currentPassword").notEmpty().withMessage("Current password is required"),

  body("newPassword")
    .notEmpty()
    .withMessage("New password is required")
    .isLength({ min: 8, max: 128 })
    .withMessage("Password must be 8-128 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .withMessage("Password must contain uppercase, lowercase, number, and special character")
    .custom((value, { req }) => {
      if (value === req.body.currentPassword) {
        throw new Error("New password must be different from current password");
      }
      return true;
    }),

  handleValidationErrors,
];

/**
 * MongoDB ObjectId Validation
 */
export const validateObjectId = (paramName = "id") => [
  param(paramName).isMongoId().withMessage(`Invalid ${paramName} format`),

  handleValidationErrors,
];

/**
 * Pagination Query Validation
 */
export const validatePagination = [
  query("page").optional().isInt({ min: 1 }).withMessage("Page must be a positive integer").toInt(),

  query("limit")
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage("Limit must be between 1 and 100")
    .toInt(),

  handleValidationErrors,
];

/**
 * Checkout Validation Rules
 */
export const validateCheckoutInitialize = [
  body("cartId").optional().isMongoId().withMessage("Invalid cart ID format"),

  handleValidationErrors,
];

export const validateShippingAddress = [
  body("shippingAddress.firstName")
    .trim()
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("First name must be 2-50 characters"),

  body("shippingAddress.lastName")
    .trim()
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Last name must be 2-50 characters"),

  body("shippingAddress.phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .matches(/^[0-9+\-\s()]{8,20}$/)
    .withMessage("Invalid phone number format"),

  body("shippingAddress.address")
    .trim()
    .notEmpty()
    .withMessage("Address is required")
    .isLength({ max: 200 })
    .withMessage("Address too long"),

  body("shippingAddress.city")
    .trim()
    .notEmpty()
    .withMessage("City is required")
    .isLength({ max: 100 })
    .withMessage("City name too long"),

  body("shippingAddress.state").trim().notEmpty().withMessage("State/Province is required"),

  body("shippingAddress.postalCode")
    .trim()
    .notEmpty()
    .withMessage("Postal code is required")
    .isLength({ max: 20 })
    .withMessage("Postal code too long"),

  body("shippingAddress.country").trim().notEmpty().withMessage("Country is required"),

  handleValidationErrors,
];

export const validateCompleteCheckout = [
  body("paymentMethod")
    .trim()
    .notEmpty()
    .withMessage("Payment method is required")
    .isIn(["cod", "bank_transfer", "stripe", "vnpay"])
    .withMessage("Invalid payment method"),

  body("shippingAddress").notEmpty().withMessage("Shipping address is required"),

  body("shippingAddress.firstName").trim().notEmpty().withMessage("First name is required"),

  body("shippingAddress.lastName").trim().notEmpty().withMessage("Last name is required"),

  body("shippingAddress.phone").trim().notEmpty().withMessage("Phone number is required"),

  body("shippingAddress.address").trim().notEmpty().withMessage("Address is required"),

  body("shippingAddress.city").trim().notEmpty().withMessage("City is required"),

  handleValidationErrors,
];

export const validateCouponCode = [
  body("code")
    .trim()
    .notEmpty()
    .withMessage("Coupon code is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("Invalid coupon code length")
    .matches(/^[A-Za-z0-9_-]+$/)
    .withMessage("Coupon code contains invalid characters"),

  handleValidationErrors,
];

/**
 * Order Validation Rules
 */
export const validateCreateOrder = [
  body("items").isArray({ min: 1 }).withMessage("Order must contain at least one item"),

  body("items.*.product")
    .notEmpty()
    .withMessage("Product ID is required")
    .isMongoId()
    .withMessage("Invalid product ID"),

  body("items.*.quantity").isInt({ min: 1 }).withMessage("Quantity must be at least 1"),

  body("shippingAddress").notEmpty().withMessage("Shipping address is required"),

  body("paymentMethod")
    .trim()
    .notEmpty()
    .withMessage("Payment method is required")
    .isIn(["cod", "bank_transfer", "stripe", "vnpay"])
    .withMessage("Invalid payment method"),

  handleValidationErrors,
];

export const validateOrderStatus = [
  body("status")
    .trim()
    .notEmpty()
    .withMessage("Status is required")
    .isIn(["pending", "confirmed", "processing", "shipped", "delivered", "cancelled", "refunded"])
    .withMessage("Invalid order status"),

  handleValidationErrors,
];

export const validateOrderReturn = [
  body("reason")
    .trim()
    .notEmpty()
    .withMessage("Return reason is required")
    .isLength({ min: 10, max: 500 })
    .withMessage("Reason must be 10-500 characters"),

  body("items").optional().isArray().withMessage("Items must be an array"),

  handleValidationErrors,
];
