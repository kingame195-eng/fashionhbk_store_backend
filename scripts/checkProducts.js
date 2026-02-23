import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_NAME = "fashionstore_db";

async function checkProducts() {
  try {
    const uri = process.env.MONGODB_URI_LOCAL || process.env.MONGODB_URI;
    await mongoose.connect(uri, { dbName: DB_NAME });
    console.log(`Connected to MongoDB - Database: ${DB_NAME}`);

    const products = await mongoose.connection.db
      .collection("products")
      .find({})
      .limit(10)
      .toArray();

    console.log("\n=== Products in Database ===");
    console.log("Total found:", products.length);

    products.forEach((p) => {
      console.log(`- ${p.name}`);
      console.log(`  price: $${p.price}, compareAtPrice: ${p.compareAtPrice || "NOT SET"}`);
      console.log(`  isOnSale: ${p.isOnSale}`);
    });

    // Count products with sale price
    const withSale = await mongoose.connection.db.collection("products").countDocuments({
      compareAtPrice: { $exists: true, $ne: null, $gt: 0 },
    });
    console.log(`\nProducts with compareAtPrice: ${withSale}`);
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await mongoose.disconnect();
  }
}

checkProducts();
