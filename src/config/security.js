import helmet from "helmet";
import rateLimit from "express-rate-limit";
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
  max: 10000, // Limit each IP to 10000 requests per windowMs
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
  max: 10000, // Limit each IP to 10000 login attempts per hour
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
 * Custom MongoDB Query Sanitization Middleware
 * Prevents NoSQL injection by removing $ and . from user input
 * Compatible with Express 5 (doesn't reassign read-only properties)
 */
const sanitizeObject = (obj, replaceWith = "_") => {
  if (obj === null || typeof obj !== "object") return obj;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // Check if key contains dangerous characters
      if (key.includes("$") || key.includes(".")) {
        const sanitizedKey = key.replace(/\$|\./g, replaceWith);
        obj[sanitizedKey] = obj[key];
        delete obj[key];
        console.warn(`Sanitized key: ${key} -> ${sanitizedKey}`);
      }
      // Recursively sanitize nested objects
      if (typeof obj[key] === "object" && obj[key] !== null) {
        sanitizeObject(obj[key], replaceWith);
      }
      // Sanitize string values that might contain injection
      if (typeof obj[key] === "string" && (obj[key].includes("$") || obj[key].includes("."))) {
        // Only sanitize if it looks like an injection attempt
        if (obj[key].match(/\$[a-zA-Z]/)) {
          obj[key] = obj[key].replace(/\$/g, replaceWith);
        }
      }
    }
  }
  return obj;
};

export const mongoSanitizeConfig = (req, res, next) => {
  // Sanitize body (mutable)
  if (req.body) {
    sanitizeObject(req.body);
  }
  // Sanitize params (mutable)
  if (req.params) {
    sanitizeObject(req.params);
  }
  // Note: req.query is read-only in Express 5, so we sanitize individual values in-place
  // For query strings, the parsing happens before middleware, so we check values only
  if (req.query && typeof req.query === "object") {
    for (const key in req.query) {
      if (typeof req.query[key] === "string" && req.query[key].match(/\$[a-zA-Z]/)) {
        console.warn(`Potential NoSQL injection detected in query param: ${key}`);
      }
    }
  }
  next();
};

/**
 * Custom XSS Sanitization Middleware
 * Sanitizes user input to prevent XSS attacks
 * Compatible with Express 5
 * Note: Skip sanitization for certain fields to avoid breaking functionality
 * Note: Only sanitize strings that look like potential XSS attacks (contain script tags, event handlers)
 */
const sanitizeXSS = (obj, skipFields = ["email", "password", "confirmPassword"]) => {
  if (obj === null || typeof obj !== "object") return obj;

  // Pattern to detect potential XSS attacks
  const xssPattern = /<script|javascript:|on\w+\s*=|<iframe|<embed|<object/i;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // Skip certain fields that shouldn't be sanitized
      if (skipFields.includes(key)) {
        continue;
      }
      if (typeof obj[key] === "string") {
        // Only sanitize if it looks like a potential XSS attack
        if (xssPattern.test(obj[key])) {
          obj[key] = obj[key].replace(/</g, "&lt;").replace(/>/g, "&gt;");
          console.warn(`XSS attempt detected and sanitized in field: ${key}`);
        }
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        sanitizeXSS(obj[key], skipFields);
      }
    }
  }
  return obj;
};

export const xssCleanConfig = (req, res, next) => {
  if (req.body) {
    sanitizeXSS(req.body);
  }
  next();
};

/**
 * HPP Configuration
 * Prevents HTTP Parameter Pollution
 * Whitelist parameters that can have multiple values
 */
export const hppConfig = hpp({
  whitelist: ["price", "size", "color", "category", "sort", "fields", "page", "limit"],
});
