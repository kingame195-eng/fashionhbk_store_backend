import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function addSalePrices() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  const Product = mongoose.model("Product", new mongoose.Schema({}, { strict: false }));

  // Cập nhật compareAtPrice cho các sản phẩm có giá cao
  const updates = [
    { name: /Floral Summer Dress/i, compareAtPrice: 159.99 },
    { name: /Elegant Silk Blouse/i, compareAtPrice: 199.99 },
    { name: /High Waist Yoga Pants/i, compareAtPrice: 89.99 },
    { name: /Wool Blend Blazer/i, compareAtPrice: 299.99 },
    { name: /Classic White Oxford/i, compareAtPrice: 109.99 },
    { name: /Vintage Leather Belt/i, compareAtPrice: 79.99 },
    { name: /Designer Sunglasses/i, compareAtPrice: 189.99 },
    { name: /Slim Fit Denim/i, compareAtPrice: 99.99 },
    { name: /Kids Denim/i, compareAtPrice: 69.99 },
  ];

  for (const u of updates) {
    const result = await Product.updateOne(
      { name: u.name },
      { $set: { compareAtPrice: u.compareAtPrice } }
    );
    console.log("Updated:", u.name.source, "- Modified:", result.modifiedCount);
  }

  // Verify
  const products = await Product.find({}).select("name price compareAtPrice").lean();
  console.log("\nAll products:");
  products.forEach((p) =>
    console.log(p.name, "- Price:", p.price, "- CompareAt:", p.compareAtPrice || "N/A")
  );

  await mongoose.disconnect();
  console.log("\nDone!");
}

addSalePrices().catch(console.error);
