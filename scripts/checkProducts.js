import mongoose from "mongoose";

const uri = "mongodb://admin:123456@localhost:27017/fashion_store?authSource=admin";

async function checkProducts() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

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
