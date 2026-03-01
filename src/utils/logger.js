/**
 * Simple Logger Utility
 * Provides consistent logging with different log levels
 * In production, only warnings and errors are logged
 *
 * Usage:
 *   import logger from './utils/logger.js';
 *   logger.info('Server started');
 *   logger.warn('Deprecated API used');
 *   logger.error('Database connection failed', error);
 *   logger.debug('Debugging info'); // Only in development
 */

const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
};

const currentLevel = process.env.NODE_ENV === "production" ? LOG_LEVELS.WARN : LOG_LEVELS.DEBUG;

const formatMessage = (level, message, meta = null) => {
  const timestamp = new Date().toISOString();
  const prefix = `[${timestamp}] [${level}]`;

  if (meta) {
    return `${prefix} ${message} ${JSON.stringify(meta, null, 2)}`;
  }
  return `${prefix} ${message}`;
};

const logger = {
  /**
   * Debug level - Only in development
   */
  debug: (message, meta = null) => {
    if (currentLevel <= LOG_LEVELS.DEBUG) {
      console.log(formatMessage("DEBUG", message, meta));
    }
  },

  /**
   * Info level - General information
   */
  info: (message, meta = null) => {
    if (currentLevel <= LOG_LEVELS.INFO) {
      console.log(formatMessage("INFO", message, meta));
    }
  },

  /**
   * Warn level - Warnings
   */
  warn: (message, meta = null) => {
    if (currentLevel <= LOG_LEVELS.WARN) {
      console.warn(formatMessage("WARN", message, meta));
    }
  },

  /**
   * Error level - Errors
   */
  error: (message, error = null) => {
    if (currentLevel <= LOG_LEVELS.ERROR) {
      const meta = error
        ? {
            message: error.message,
            stack: process.env.NODE_ENV !== "production" ? error.stack : undefined,
          }
        : null;
      console.error(formatMessage("ERROR", message, meta));
    }
  },

  /**
   * Database log - DB connection info
   */
  db: (message, meta = null) => {
    if (currentLevel <= LOG_LEVELS.INFO) {
      console.log(formatMessage("DB", message, meta));
    }
  },

  /**
   * Security log - Security events
   */
  security: (eventType, details = null) => {
    // Security logs are always logged
    console.log(formatMessage("SECURITY", eventType, details));
  },

  /**
   * Email log - Email sending info (dev only)
   */
  email: (to, subject, body) => {
    if (process.env.NODE_ENV !== "production") {
      console.log("\n📧 ========== EMAIL (Dev Mode) ==========");
      console.log(`To: ${to}`);
      console.log(`Subject: ${subject}`);
      console.log(`Body: ${body?.substring(0, 200)}...`);
      console.log("==========================================\n");
    }
  },
};

export default logger;
