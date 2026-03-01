import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "../utils/logger.js";

dotenv.config();

const DB_NAME = "fashionstore_db";

const connectDB = async () => {
  try {
    // Always use MongoDB Atlas (MONGODB_URI) for consistency
    // Local MongoDB (MONGODB_URI_LOCAL) is optional fallback
    const uri = process.env.MONGODB_URI;

    // Log URI for debugging (hide password)
    const safeUri = uri?.replace(/:([^:@]+)@/, ":****@");
    logger.db(`Connecting to MongoDB: ${safeUri}`);
    logger.db(`Target database: ${DB_NAME}`);

    // Force database name to fashionstore_db
    const conn = await mongoose.connect(uri, {
      dbName: DB_NAME, // Explicitly set database name
    });

    logger.db(`MongoDB Connected: ${conn.connection.host}`);
    logger.db(`Database: ${conn.connection.name}`);

    // Verify we're connected to the right database
    if (conn.connection.name !== DB_NAME) {
      logger.warn(
        `WARNING: Connected to wrong database! Expected: ${DB_NAME}, Got: ${conn.connection.name}`
      );
    }
  } catch (error) {
    logger.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
