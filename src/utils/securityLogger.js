import fs from "fs";
import path from "path";
import logger from "./logger.js";

const LOG_DIR = path.join(process.cwd(), "logs");
const SECURITY_LOG = path.join(LOG_DIR, "security.log");

// Ensure log directory exists
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

/**
 * Log security events
 */
export const logSecurityEvent = (eventType, details) => {
  const timestamp = new Date().toISOString();
  const logEntry =
    JSON.stringify({
      timestamp,
      eventType,
      ...details,
    }) + "\n";

  fs.appendFile(SECURITY_LOG, logEntry, (err) => {
    if (err) logger.error("Failed to write security log:", err);
  });

  // Also log to console in development
  if (process.env.NODE_ENV === "development") {
    logger.security(eventType, details);
  }
};

/**
 * Security Event Types
 */
export const SECURITY_EVENTS = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILED: "LOGIN_FAILED",
  LOGOUT: "LOGOUT",
  REGISTRATION: "REGISTRATION",
  PASSWORD_CHANGE: "PASSWORD_CHANGE",
  PASSWORD_RESET_REQUEST: "PASSWORD_RESET_REQUEST",
  INVALID_TOKEN: "INVALID_TOKEN",
  UNAUTHORIZED_ACCESS: "UNAUTHORIZED_ACCESS",
  RATE_LIMIT_EXCEEDED: "RATE_LIMIT_EXCEEDED",
  SUSPICIOUS_ACTIVITY: "SUSPICIOUS_ACTIVITY",
  INPUT_SANITIZATION: "INPUT_SANITIZATION",
  CSRF_ATTEMPT: "CSRF_ATTEMPT",
};

/**
 * Security Audit Middleware
 * Logs all authentication-related requests
 */
export const securityAuditMiddleware = (req, res, next) => {
  const originalSend = res.send;

  res.send = function (body) {
    // Log auth route responses
    if (req.path.includes("/auth/")) {
      const logData = {
        ip: req.ip || req.connection.remoteAddress,
        userAgent: req.headers["user-agent"],
        method: req.method,
        path: req.path,
        statusCode: res.statusCode,
        userId: req.user?.id || "anonymous",
      };

      if (res.statusCode >= 400) {
        logSecurityEvent(SECURITY_EVENTS.SUSPICIOUS_ACTIVITY, logData);
      }
    }

    return originalSend.call(this, body);
  };

  next();
};
