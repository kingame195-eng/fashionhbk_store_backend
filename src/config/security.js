import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";

/**
 * Helmet Configuration
 * Sets various HTTP headers for security
 */
export const helmetConfig = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'"],
      connectSrc: ["'self'"],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"],
    },
  },
  crossOriginEmbedderPolicy: false, // Disable for image loading
  hsts: {
    maxAge: 31536000, // 1 year
    includeSubDomains: true,
    preload: true,
  },
  referrerPolicy: { policy: "strict-origin-when-cross-origin" },
});

/**
 * Rate Limiting Configuration
 * Prevents brute force and DDoS attacks
 */
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: "Too many requests from this IP, please try again after 15 minutes",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * Strict Rate Limiter for Authentication Routes
 */
export const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Limit each IP to 5 login attempts per hour
  message: {
    success: false,
    message: "Too many login attempts, please try again after an hour",
  },
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true, // Don't count successful logins
});

/**
 * Password Reset Rate Limiter
 */
export const passwordResetLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // Limit to 3 password reset requests per hour
  message: {
    success: false,
    message: "Too many password reset attempts, please try again later",
  },
});

/**
 * MongoDB Query Sanitization
 * Prevents NoSQL injection by removing $ and . from user input
 */
export const mongoSanitizeConfig = mongoSanitize({
  replaceWith: "_",
  onSanitize: ({ key, req }) => {
    console.warn(`Sanitized key: ${key} in request from ${req.ip}`);
  },
});

/**
 * XSS Clean Configuration
 * Sanitizes user input to prevent XSS attacks
 */
export const xssCleanConfig = xss();

/**
 * HPP Configuration
 * Prevents HTTP Parameter Pollution
 * Whitelist parameters that can have multiple values
 */
export const hppConfig = hpp({
  whitelist: ["price", "size", "color", "category", "sort", "fields", "page", "limit"],
});
