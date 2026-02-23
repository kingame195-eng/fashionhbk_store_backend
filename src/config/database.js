import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_NAME = "fashionstore_db";

const connectDB = async () => {
  try {
    // Always use MongoDB Atlas (MONGODB_URI) for consistency
    // Local MongoDB (MONGODB_URI_LOCAL) is optional fallback
    const uri = process.env.MONGODB_URI;

    // Log URI for debugging (hide password)
    const safeUri = uri?.replace(/:([^:@]+)@/, ":****@");
    console.log(`Connecting to MongoDB: ${safeUri}`);
    console.log(`Target database: ${DB_NAME}`);

    // Force database name to fashionstore_db
    const conn = await mongoose.connect(uri, {
      dbName: DB_NAME, // Explicitly set database name
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`Database: ${conn.connection.name}`);

    // Verify we're connected to the right database
    if (conn.connection.name !== DB_NAME) {
      console.error(
        `WARNING: Connected to wrong database! Expected: ${DB_NAME}, Got: ${conn.connection.name}`
      );
    }
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
