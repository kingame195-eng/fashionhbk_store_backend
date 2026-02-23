import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const SOURCE_DB = "fashion-store";
const TARGET_DB = "fashionstore_db";

// Collections to migrate
const COLLECTIONS = ["products", "users", "carts", "coupons", "orders", "reviews"];

async function migrateDatabase() {
  console.log(`\n🚀 Starting migration from "${SOURCE_DB}" to "${TARGET_DB}"\n`);

  try {
    // Connect to MongoDB Atlas
    const uri = process.env.MONGODB_URI.replace(/\/[^/?]+(\?|$)/, "/$1"); // Remove database name from URI
    const conn = await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB Atlas\n");

    const sourceDb = conn.connection.client.db(SOURCE_DB);
    const targetDb = conn.connection.client.db(TARGET_DB);

    for (const collectionName of COLLECTIONS) {
      console.log(`📦 Migrating collection: ${collectionName}`);

      // Get documents from source
      const documents = await sourceDb.collection(collectionName).find({}).toArray();
      console.log(`   Found ${documents.length} documents`);

      if (documents.length > 0) {
        // Check if target collection exists and has data
        const existingCount = await targetDb.collection(collectionName).countDocuments();

        if (existingCount > 0) {
          console.log(`   ⚠️  Target already has ${existingCount} documents - skipping`);
          continue;
        }

        // Insert into target
        await targetDb.collection(collectionName).insertMany(documents);
        console.log(`   ✅ Migrated ${documents.length} documents`);
      } else {
        console.log(`   ⏭️  No documents to migrate`);
      }
    }

    console.log("\n✅ Migration completed successfully!\n");

    // Verify migration
    console.log("📊 Verification:");
    for (const collectionName of COLLECTIONS) {
      const count = await targetDb.collection(collectionName).countDocuments();
      console.log(`   ${collectionName}: ${count} documents`);
    }

    await mongoose.disconnect();
    console.log("\n🔌 Disconnected from MongoDB");
  } catch (error) {
    console.error("❌ Migration failed:", error.message);
    process.exit(1);
  }
}

migrateDatabase();
