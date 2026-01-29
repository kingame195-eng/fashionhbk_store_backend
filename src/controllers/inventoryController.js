import Product from "../models/Product.js";
import { sendEmail } from "../utils/emailService.js";

/**
 * @desc    Kiểm tra và lấy danh sách sản phẩm cần nhập thêm
 * @route   GET /api/inventory/alerts
 * @access  Private/Admin
 */
export const getInventoryAlerts = async (req, res) => {
  try {
    const { lowStockThreshold = 10, outOfStockOnly = false } = req.query;

    const query = { isActive: true };

    if (outOfStockOnly === "true") {
      query.stock = 0;
    } else {
      query.stock = { $lte: parseInt(lowStockThreshold) };
    }

    const products = await Product.find(query)
      .sort({ stock: 1 })
      .select("name sku stock price category images");

    const outOfStock = products.filter((p) => p.stock === 0);
    const lowStock = products.filter((p) => p.stock > 0);

    res.json({
      success: true,
      data: {
        outOfStock: {
          count: outOfStock.length,
          products: outOfStock,
        },
        lowStock: {
          count: lowStock.length,
          products: lowStock,
          threshold: parseInt(lowStockThreshold),
        },
        totalAlerts: products.length,
      },
    });
  } catch (error) {
    console.error("Inventory alerts error:", error);
    res.status(500).json({
      success: false,
      message: "Không thể lấy cảnh báo tồn kho",
    });
  }
};

/**
 * @desc    Cập nhật số lượng tồn kho hàng loạt
 * @route   PUT /api/inventory/bulk-update
 * @access  Private/Admin
 */
export const bulkUpdateStock = async (req, res) => {
  try {
    const { updates } = req.body;

    if (!Array.isArray(updates) || updates.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Danh sách cập nhật không hợp lệ",
      });
    }

    const results = {
      success: [],
      failed: [],
    };

    for (const update of updates) {
      try {
        const { productId, stock, reason } = update;

        if (!productId || stock === undefined || stock < 0) {
          results.failed.push({
            productId,
            error: "Dữ liệu không hợp lệ",
          });
          continue;
        }

        const product = await Product.findById(productId);
        if (!product) {
          results.failed.push({
            productId,
            error: "Không tìm thấy sản phẩm",
          });
          continue;
        }

        const oldStock = product.stock;
        product.stock = stock;

        // Track stock history
        if (!product.stockHistory) {
          product.stockHistory = [];
        }
        product.stockHistory.push({
          oldStock,
          newStock: stock,
          reason: reason || "Bulk update",
          updatedBy: req.user._id,
          updatedAt: new Date(),
        });

        await product.save();

        results.success.push({
          productId,
          name: product.name,
          oldStock,
          newStock: stock,
        });
      } catch (err) {
        results.failed.push({
          productId: update.productId,
          error: err.message,
        });
      }
    }

    res.json({
      success: true,
      message: `Đã cập nhật ${results.success.length}/${updates.length} sản phẩm`,
      data: results,
    });
  } catch (error) {
    console.error("Bulk update stock error:", error);
    res.status(500).json({
      success: false,
      message: "Không thể cập nhật tồn kho hàng loạt",
    });
  }
};

/**
 * @desc    Điều chỉnh tồn kho (tăng/giảm)
 * @route   PUT /api/inventory/:productId/adjust
 * @access  Private/Admin
 */
export const adjustStock = async (req, res) => {
  try {
    const { adjustment, reason } = req.body;

    if (adjustment === undefined || adjustment === 0) {
      return res.status(400).json({
        success: false,
        message: "Số lượng điều chỉnh không hợp lệ",
      });
    }

    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy sản phẩm",
      });
    }

    const oldStock = product.stock;
    const newStock = oldStock + adjustment;

    if (newStock < 0) {
      return res.status(400).json({
        success: false,
        message: `Không thể giảm ${Math.abs(adjustment)} sản phẩm. Tồn kho hiện tại: ${oldStock}`,
      });
    }

    product.stock = newStock;

    // Track stock history
    if (!product.stockHistory) {
      product.stockHistory = [];
    }
    product.stockHistory.push({
      oldStock,
      newStock,
      adjustment,
      reason: reason || (adjustment > 0 ? "Nhập hàng" : "Xuất hàng"),
      updatedBy: req.user._id,
      updatedAt: new Date(),
    });

    await product.save();

    res.json({
      success: true,
      message: adjustment > 0 ? "Đã nhập thêm hàng" : "Đã xuất hàng",
      data: {
        productId: product._id,
        name: product.name,
        oldStock,
        adjustment,
        newStock,
      },
    });
  } catch (error) {
    console.error("Adjust stock error:", error);
    res.status(500).json({
      success: false,
      message: "Không thể điều chỉnh tồn kho",
    });
  }
};

/**
 * @desc    Lấy lịch sử thay đổi tồn kho
 * @route   GET /api/inventory/:productId/history
 * @access  Private/Admin
 */
export const getStockHistory = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId)
      .select("name sku stock stockHistory")
      .populate("stockHistory.updatedBy", "name email");

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy sản phẩm",
      });
    }

    const history = (product.stockHistory || [])
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      .slice(0, 50); // Limit to last 50 records

    res.json({
      success: true,
      data: {
        product: {
          id: product._id,
          name: product.name,
          sku: product.sku,
          currentStock: product.stock,
        },
        history,
      },
    });
  } catch (error) {
    console.error("Get stock history error:", error);
    res.status(500).json({
      success: false,
      message: "Không thể lấy lịch sử tồn kho",
    });
  }
};

/**
 * @desc    Tạo báo cáo tồn kho
 * @route   GET /api/inventory/report
 * @access  Private/Admin
 */
export const getInventoryReport = async (req, res) => {
  try {
    const { category } = req.query;

    const matchQuery = { isActive: true };
    if (category) matchQuery.category = category;

    const report = await Product.aggregate([
      { $match: matchQuery },
      {
        $group: {
          _id: "$category",
          totalProducts: { $sum: 1 },
          totalStock: { $sum: "$stock" },
          totalValue: { $sum: { $multiply: ["$stock", "$price"] } },
          avgPrice: { $avg: "$price" },
          outOfStock: {
            $sum: { $cond: [{ $eq: ["$stock", 0] }, 1, 0] },
          },
          lowStock: {
            $sum: { $cond: [{ $and: [{ $gt: ["$stock", 0] }, { $lte: ["$stock", 10] }] }, 1, 0] },
          },
        },
      },
      { $sort: { totalValue: -1 } },
    ]);

    // Overall summary
    const summary = await Product.aggregate([
      { $match: { isActive: true } },
      {
        $group: {
          _id: null,
          totalProducts: { $sum: 1 },
          totalStock: { $sum: "$stock" },
          totalValue: { $sum: { $multiply: ["$stock", "$price"] } },
          outOfStock: { $sum: { $cond: [{ $eq: ["$stock", 0] }, 1, 0] } },
          lowStock: {
            $sum: { $cond: [{ $and: [{ $gt: ["$stock", 0] }, { $lte: ["$stock", 10] }] }, 1, 0] },
          },
        },
      },
    ]);

    res.json({
      success: true,
      data: {
        summary: summary[0] || {
          totalProducts: 0,
          totalStock: 0,
          totalValue: 0,
          outOfStock: 0,
          lowStock: 0,
        },
        byCategory: report,
        generatedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Inventory report error:", error);
    res.status(500).json({
      success: false,
      message: "Không thể tạo báo cáo tồn kho",
    });
  }
};

/**
 * @desc    Gửi email cảnh báo tồn kho thấp
 * @route   POST /api/inventory/send-alerts
 * @access  Private/Admin
 */
export const sendLowStockAlerts = async (req, res) => {
  try {
    const { threshold = 10, email } = req.body;
    const recipientEmail = email || req.user.email;

    const lowStockProducts = await Product.find({
      stock: { $lte: threshold },
      isActive: true,
    })
      .sort({ stock: 1 })
      .select("name sku stock category");

    if (lowStockProducts.length === 0) {
      return res.json({
        success: true,
        message: "Không có sản phẩm nào sắp hết hàng",
      });
    }

    const outOfStock = lowStockProducts.filter((p) => p.stock === 0);
    const lowStock = lowStockProducts.filter((p) => p.stock > 0);

    const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a1a; color: #fff; padding: 20px; text-align: center; }
    .content { padding: 30px; background: #f9f9f9; }
    .alert { padding: 15px; margin: 10px 0; border-radius: 8px; }
    .alert-danger { background: #f8d7da; border-left: 4px solid #dc3545; }
    .alert-warning { background: #fff3cd; border-left: 4px solid #ffc107; }
    table { width: 100%; border-collapse: collapse; margin: 15px 0; }
    th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
    th { background: #f1f1f1; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>⚠️ Inventory Alert</h1>
    </div>
    <div class="content">
      ${
        outOfStock.length > 0
          ? `
      <div class="alert alert-danger">
        <strong>🔴 Out of Stock: ${outOfStock.length} products</strong>
      </div>
      <table>
        <tr><th>Product</th><th>SKU</th><th>Category</th></tr>
        ${outOfStock.map((p) => `<tr><td>${p.name}</td><td>${p.sku || "N/A"}</td><td>${p.category}</td></tr>`).join("")}
      </table>
      `
          : ""
      }
      
      ${
        lowStock.length > 0
          ? `
      <div class="alert alert-warning">
        <strong>🟡 Low Stock: ${lowStock.length} products (≤ ${threshold} units)</strong>
      </div>
      <table>
        <tr><th>Product</th><th>SKU</th><th>Stock</th><th>Category</th></tr>
        ${lowStock.map((p) => `<tr><td>${p.name}</td><td>${p.sku || "N/A"}</td><td>${p.stock}</td><td>${p.category}</td></tr>`).join("")}
      </table>
      `
          : ""
      }
      
      <p>Please restock these items as soon as possible.</p>
    </div>
    <div class="footer">
      <p>Generated at ${new Date().toLocaleString()}</p>
      <p>&copy; ${new Date().getFullYear()} Fashion Store Admin</p>
    </div>
  </div>
</body>
</html>
`;

    await sendEmail({
      to: recipientEmail,
      subject: `🚨 Inventory Alert: ${lowStockProducts.length} products need attention`,
      html,
      text: `Inventory Alert: ${outOfStock.length} out of stock, ${lowStock.length} low stock products`,
    });

    res.json({
      success: true,
      message: `Đã gửi cảnh báo tồn kho đến ${recipientEmail}`,
      data: {
        outOfStock: outOfStock.length,
        lowStock: lowStock.length,
        threshold,
      },
    });
  } catch (error) {
    console.error("Send low stock alerts error:", error);
    res.status(500).json({
      success: false,
      message: "Không thể gửi cảnh báo tồn kho",
    });
  }
};

export default {
  getInventoryAlerts,
  bulkUpdateStock,
  adjustStock,
  getStockHistory,
  getInventoryReport,
  sendLowStockAlerts,
};
