import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/database.js";
import routes from "./routes/index.js";
import { corsOptions } from "./config/cors.js";
import {
  helmetConfig,
  generalLimiter,
  mongoSanitizeConfig,
  xssCleanConfig,
  hppConfig,
} from "./config/security.js";
import { globalErrorHandler } from "./middleware/errorHandler.js";
import { securityAuditMiddleware } from "./utils/securityLogger.js";

// Load environment variables
dotenv.config();

// Handle uncaught exceptions (must be at the top)
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION! Shutting down...");
  console.error(err.name, err.message);
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

// 3. Rate limiting - Prevent brute force attacks
app.use("/api", generalLimiter);

// 4. Body parsers with size limits
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
const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION! Shutting down...");
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
