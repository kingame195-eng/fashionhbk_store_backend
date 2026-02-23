import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../src/models/User.js";

dotenv.config();

const DB_NAME = "fashionstore_db";

const users = [
  {
    firstName: "Admin",
    lastName: "User",
    email: "admin@example.com",
    password: "password123",
    role: "admin",
    isActive: true,
  },
  {
    firstName: "Test",
    lastName: "User",
    email: "test@example.com",
    password: "password123",
    role: "user",
    isActive: true,
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    password: "password123",
    role: "user",
    isActive: true,
  },
];

const seedUsers = async () => {
  try {
    // Connect to MongoDB
    const mongoUri = process.env.MONGODB_URI_LOCAL || process.env.MONGODB_URI;
    console.log("Connecting to MongoDB...");
    await mongoose.connect(mongoUri, { dbName: DB_NAME });
    console.log(`MongoDB Connected to database: ${DB_NAME}`);

    // Clear existing users (optional)
    await User.deleteMany({});
    console.log("Cleared existing users");

    // Create users
    for (const userData of users) {
      const user = await User.create(userData);
      console.log(`Created user: ${user.email}`);
    }

    console.log("\n✅ Users seeded successfully!");
    console.log("\nTest accounts:");
    console.log("  Email: admin@example.com | Password: password123 (Admin)");
    console.log("  Email: test@example.com  | Password: password123 (User)");
    console.log("  Email: john@example.com  | Password: password123 (User)");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding users:", error);
    process.exit(1);
  }
};

seedUsers();
