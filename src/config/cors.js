/**
 * CORS Configuration
 * Separated for development and production environments
 */

// Development origins - only used in non-production
const devOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002",
  "http://localhost:5173",
  "http://localhost:5174",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:3001",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
];

// Production origins - always allowed
const prodOrigins = [process.env.CLIENT_URL, process.env.CLIENT_URL_2].filter(Boolean);

// Combine origins based on environment
const allowedOrigins =
  process.env.NODE_ENV === "production" ? prodOrigins : [...prodOrigins, ...devOrigins];

export const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, curl, Postman, etc.)
    if (!origin) return callback(null, true);

    // In development, also allow any localhost origin dynamically
    if (process.env.NODE_ENV !== "production") {
      if (origin.includes("localhost") || origin.includes("127.0.0.1")) {
        return callback(null, true);
      }
    }

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`CORS blocked origin: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },

  credentials: true, // Allow cookies
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
    "Origin",
    "X-CSRF-Token",
    "X-Cart-Session",
  ],
  exposedHeaders: ["X-Total-Count", "X-Page-Count"],
  maxAge: 86400, // Cache preflight for 24 hours
  optionsSuccessStatus: 200,
};
