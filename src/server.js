import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/database.js";
import routes from "./routes/index.js";
import { corsOptions } from "./config/cors.js";
import {
  helmetConfig,
  mongoSanitizeConfig,
  xssCleanConfig,
  hppConfig,
  generalLimiter,
} from "./config/security.js";
import { globalErrorHandler } from "./middleware/errorHandler.js";
import { securityAuditMiddleware } from "./utils/securityLogger.js";
import logger from "./utils/logger.js";

// Load environment variables
dotenv.config();

// Handle uncaught exceptions (must be at the top)
process.on("uncaughtException", (err) => {
  logger.error("UNCAUGHT EXCEPTION! Shutting down...", err);
  process.exit(1);
});

// Initialize Express app
const app = express();

// Trust proxy (required for rate limiting behind reverse proxy)
app.set("trust proxy", 1);

// SECURITY MIDDLEWARE (Order matters!)
// 1. Helmet - Set security HTTP headers
app.use(helmetConfig);

// 2. CORS - Handle cross-origin requests
app.use(cors(corsOptions));

// 3. Body parsers with size limits
app.use(express.json({ limit: "10kb" })); // Limit body size
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// 5. Cookie parser
app.use(cookieParser());

// 6. Data sanitization against NoSQL injection
app.use(mongoSanitizeConfig);

// 7. Data sanitization against XSS
app.use(xssCleanConfig);

// 8. Prevent HTTP Parameter Pollution
app.use(hppConfig);

// 9. Security audit logging
app.use(securityAuditMiddleware);

// DATABASE CONNECTION
connectDB();

// Root route (health check)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// 10. Rate Limiting - Apply to all API routes
app.use("/api", generalLimiter);

// API ROUTES
app.use("/api", routes);

// ERROR HANDLING
// 404 handler (must be after all routes)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Global error handler (must be last middleware)
app.use(globalErrorHandler);

// SERVER
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "0.0.0.0";
const server = app.listen(PORT, HOST, () => {
  logger.info(
    `Server running in ${process.env.NODE_ENV || "development"} mode on http://${HOST}:${PORT}`
  );
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  logger.error("UNHANDLED REJECTION! Shutting down...", err);
  server.close(() => {
    process.exit(1);
  });
});
