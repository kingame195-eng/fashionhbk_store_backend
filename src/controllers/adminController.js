import Order from "../models/Order.js";
import Product from "../models/Product.js";
import User from "../models/User.js";
import Review from "../models/Review.js";
import Coupon from "../models/Coupon.js";
import logger from "../utils/logger.js";

/**
 * @desc    Lấy tổng quan dashboard
 * @route   GET /api/admin/dashboard
 * @access  Private/Admin
 */
export const getDashboardOverview = async (req, res) => {
  try {
    const today = new Date();
    const startOfToday = new Date(today.setHours(0, 0, 0, 0));
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const startOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const endOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);

    // Thống kê tổng quan
    const [
      totalOrders,
      todayOrders,
      thisMonthOrders,
      lastMonthOrders,
      totalRevenue,
      thisMonthRevenue,
      lastMonthRevenue,
      totalProducts,
      lowStockProducts,
      outOfStockProducts,
      totalUsers,
      newUsersThisMonth,
      pendingReviews,
      activeCoupons,
    ] = await Promise.all([
      // Orders
      Order.countDocuments(),
      Order.countDocuments({ createdAt: { $gte: startOfToday } }),
      Order.countDocuments({ createdAt: { $gte: startOfMonth } }),
      Order.countDocuments({
        createdAt: { $gte: startOfLastMonth, $lte: endOfLastMonth },
      }),
      // Revenue
      Order.aggregate([
        { $match: { paymentStatus: "paid" } },
        { $group: { _id: null, total: { $sum: "$total" } } },
      ]),
      Order.aggregate([
        { $match: { paymentStatus: "paid", createdAt: { $gte: startOfMonth } } },
        { $group: { _id: null, total: { $sum: "$total" } } },
      ]),
      Order.aggregate([
        {
          $match: {
            paymentStatus: "paid",
            createdAt: { $gte: startOfLastMonth, $lte: endOfLastMonth },
          },
        },
        { $group: { _id: null, total: { $sum: "$total" } } },
      ]),
      // Products
      Product.countDocuments({ isActive: true }),
      Product.countDocuments({ stock: { $gt: 0, $lte: 10 }, isActive: true }),
      Product.countDocuments({ stock: 0, isActive: true }),
      // Users
      User.countDocuments(),
      User.countDocuments({ createdAt: { $gte: startOfMonth } }),
      // Reviews
      Review.countDocuments({ status: "pending" }),
      // Coupons
      Coupon.countDocuments({ isActive: true, validUntil: { $gte: new Date() } }),
    ]);

    // Tính growth rates
    const orderGrowth =
      lastMonthOrders > 0 ? ((thisMonthOrders - lastMonthOrders) / lastMonthOrders) * 100 : 100;

    const lastMonthRev = lastMonthRevenue[0]?.total || 0;
    const thisMonthRev = thisMonthRevenue[0]?.total || 0;
    const revenueGrowth =
      lastMonthRev > 0 ? ((thisMonthRev - lastMonthRev) / lastMonthRev) * 100 : 100;

    res.json({
      success: true,
      data: {
        orders: {
          total: totalOrders,
          today: todayOrders,
          thisMonth: thisMonthOrders,
          lastMonth: lastMonthOrders,
          growth: orderGrowth.toFixed(1),
        },
        revenue: {
          total: totalRevenue[0]?.total || 0,
          thisMonth: thisMonthRev,
          lastMonth: lastMonthRev,
          growth: revenueGrowth.toFixed(1),
        },
        products: {
          total: totalProducts,
          lowStock: lowStockProducts,
          outOfStock: outOfStockProducts,
        },
        users: {
          total: totalUsers,
          newThisMonth: newUsersThisMonth,
        },
        pendingReviews,
        activeCoupons,
      },
    });
  } catch (error) {
    console.error("Dashboard overview error:", error);
    res.status(500).json({
      success: false,
      message: "Không thể lấy dữ liệu dashboard",
    });
  }
};

/**
 * @desc    Lấy thống kê doanh thu theo thời gian
 * @route   GET /api/admin/revenue-stats
 * @access  Private/Admin
 */
export const getRevenueStats = async (req, res) => {
  try {
    const { period = "7days" } = req.query;

    let startDate;
    let groupFormat;

    switch (period) {
      case "30days":
        startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
        groupFormat = { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } };
        break;
      case "12months":
        startDate = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
        groupFormat = { $dateToString: { format: "%Y-%m", date: "$createdAt" } };
        break;
      default: // 7days
        startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        groupFormat = { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } };
    }

    const stats = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: startDate },
          paymentStatus: "paid",
        },
      },
      {
        $group: {
          _id: groupFormat,
          revenue: { $sum: "$total" },
          orders: { $sum: 1 },
          avgOrderValue: { $avg: "$total" },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.json({
      success: true,
      period,
      data: stats.map((item) => ({
        date: item._id,
        revenue: item.revenue,
        orders: item.orders,
        avgOrderValue: Math.round(item.avgOrderValue * 100) / 100,
      })),
    });
  } catch (error) {
    console.error("Revenue stats error:", error);
    res.status(500).json({
      success: false,
      message: "Không thể lấy thống kê doanh thu",
    });
  }
};

/**
 * @desc    Lấy top sản phẩm bán chạy
 * @route   GET /api/admin/top-products
 * @access  Private/Admin
 */
export const getTopProducts = async (req, res) => {
  try {
    const { limit = 10 } = req.query;

    const topProducts = await Order.aggregate([
      { $match: { status: { $ne: "cancelled" } } },
      { $unwind: "$items" },
      {
        $group: {
          _id: "$items.product",
          totalSold: { $sum: "$items.quantity" },
          totalRevenue: { $sum: { $multiply: ["$items.price", "$items.quantity"] } },
        },
      },
      { $sort: { totalSold: -1 } },
      { $limit: parseInt(limit) },
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "_id",
          as: "product",
        },
      },
      { $unwind: "$product" },
      {
        $project: {
          _id: 0,
          productId: "$_id",
          name: "$product.name",
          image: { $arrayElemAt: ["$product.images", 0] },
          category: "$product.category",
          totalSold: 1,
          totalRevenue: 1,
        },
      },
    ]);

    res.json({
      success: true,
      data: topProducts,
    });
  } catch (error) {
    console.error("Top products error:", error);
    res.status(500).json({
      success: false,
      message: "Không thể lấy top sản phẩm",
    });
  }
};

/**
 * @desc    Lấy đơn hàng gần đây
 * @route   GET /api/admin/recent-orders
 * @access  Private/Admin
 */
export const getRecentOrders = async (req, res) => {
  try {
    const { limit = 10 } = req.query;

    const orders = await Order.find()
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .populate("user", "firstName lastName email")
      .select("orderNumber total status paymentStatus createdAt");

    res.json({
      success: true,
      data: orders,
    });
  } catch (error) {
    console.error("Recent orders error:", error);
    res.status(500).json({
      success: false,
      message: "Không thể lấy đơn hàng gần đây",
    });
  }
};

/**
 * @desc    Lấy thống kê theo danh mục
 * @route   GET /api/admin/category-stats
 * @access  Private/Admin
 */
export const getCategoryStats = async (req, res) => {
  try {
    const categoryStats = await Product.aggregate([
      { $match: { isActive: true } },
      {
        $group: {
          _id: "$category",
          totalProducts: { $sum: 1 },
          avgPrice: { $avg: "$price" },
          totalStock: { $sum: "$stock" },
          avgRating: { $avg: "$ratings.average" },
        },
      },
      { $sort: { totalProducts: -1 } },
    ]);

    res.json({
      success: true,
      data: categoryStats.map((cat) => ({
        category: cat._id,
        totalProducts: cat.totalProducts,
        avgPrice: Math.round(cat.avgPrice * 100) / 100,
        totalStock: cat.totalStock,
        avgRating: cat.avgRating ? Math.round(cat.avgRating * 10) / 10 : null,
      })),
    });
  } catch (error) {
    console.error("Category stats error:", error);
    res.status(500).json({
      success: false,
      message: "Không thể lấy thống kê danh mục",
    });
  }
};

/**
 * @desc    Lấy danh sách sản phẩm sắp hết hàng
 * @route   GET /api/admin/low-stock
 * @access  Private/Admin
 */
export const getLowStockProducts = async (req, res) => {
  try {
    const { threshold = 10, page = 1, limit = 20 } = req.query;

    const products = await Product.find({
      stock: { $lte: parseInt(threshold) },
      isActive: true,
    })
      .sort({ stock: 1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .select("name sku stock price images category");

    const total = await Product.countDocuments({
      stock: { $lte: parseInt(threshold) },
      isActive: true,
    });

    res.json({
      success: true,
      data: products,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Low stock products error:", error);
    res.status(500).json({
      success: false,
      message: "Không thể lấy sản phẩm sắp hết hàng",
    });
  }
};

/**
 * @desc    Lấy thống kê người dùng
 * @route   GET /api/admin/user-stats
 * @access  Private/Admin
 */
export const getUserStats = async (req, res) => {
  try {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    // Thống kê đăng ký theo tháng (12 tháng gần nhất)
    const registrationStats = await User.aggregate([
      {
        $match: {
          createdAt: { $gte: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000) },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    // Top customers
    const topCustomers = await Order.aggregate([
      { $match: { paymentStatus: "paid" } },
      {
        $group: {
          _id: "$user",
          totalSpent: { $sum: "$total" },
          orderCount: { $sum: 1 },
        },
      },
      { $sort: { totalSpent: -1 } },
      { $limit: 10 },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$user" },
      {
        $project: {
          _id: 0,
          userId: "$_id",
          name: { $concat: ["$user.firstName", " ", "$user.lastName"] },
          email: "$user.email",
          totalSpent: 1,
          orderCount: 1,
        },
      },
    ]);

    // User role distribution
    const roleStats = await User.aggregate([{ $group: { _id: "$role", count: { $sum: 1 } } }]);

    res.json({
      success: true,
      data: {
        registrationTrend: registrationStats,
        topCustomers,
        roleDistribution: roleStats.reduce((acc, role) => {
          acc[role._id] = role.count;
          return acc;
        }, {}),
      },
    });
  } catch (error) {
    console.error("User stats error:", error);
    res.status(500).json({
      success: false,
      message: "Không thể lấy thống kê người dùng",
    });
  }
};

/**
 * @desc    Cập nhật trạng thái đơn hàng (Admin)
 * @route   PUT /api/admin/orders/:id/status
 * @access  Private/Admin
 */
export const updateOrderStatus = async (req, res) => {
  try {
    const { status, trackingNumber, estimatedDelivery, note } = req.body;

    const order = await Order.findById(req.params.id).populate("user", "email name");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy đơn hàng",
      });
    }

    // Validate status transition
    const validTransitions = {
      pending: ["processing", "cancelled"],
      processing: ["shipped", "cancelled"],
      shipped: ["out_for_delivery", "delivered"],
      out_for_delivery: ["delivered"],
      delivered: [],
      cancelled: [],
    };

    if (!validTransitions[order.status]?.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Không thể chuyển từ trạng thái "${order.status}" sang "${status}"`,
      });
    }

    order.status = status;
    if (trackingNumber) order.trackingNumber = trackingNumber;
    if (estimatedDelivery) order.estimatedDelivery = estimatedDelivery;

    // Add to status history
    order.statusHistory.push({
      status,
      note: note || `Status updated to ${status}`,
      updatedBy: req.user._id,
      updatedAt: new Date(),
    });

    await order.save();

    // Send email notification (if email service is configured)
    try {
      const { sendOrderStatusEmail } = await import("../utils/emailService.js");
      await sendOrderStatusEmail(order.user.email, {
        orderNumber: order.orderNumber,
        status,
        trackingNumber,
        estimatedDelivery,
      });
    } catch (emailError) {
      logger.warn("Email notification skipped", emailError);
    }

    res.json({
      success: true,
      message: "Cập nhật trạng thái đơn hàng thành công",
      data: order,
    });
  } catch (error) {
    logger.error("Update order status error", error);
    res.status(500).json({
      success: false,
      message: "Không thể cập nhật trạng thái đơn hàng",
    });
  }
};

/**
 * @desc    Cập nhật tồn kho sản phẩm
 * @route   PUT /api/admin/products/:id/stock
 * @access  Private/Admin
 */
export const updateProductStock = async (req, res) => {
  try {
    const { stock, reason } = req.body;

    if (stock === undefined || stock < 0) {
      return res.status(400).json({
        success: false,
        message: "Số lượng tồn kho không hợp lệ",
      });
    }

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy sản phẩm",
      });
    }

    const oldStock = product.stock;
    product.stock = stock;

    // Add stock history if the model supports it
    if (!product.stockHistory) {
      product.stockHistory = [];
    }
    product.stockHistory.push({
      oldStock,
      newStock: stock,
      reason: reason || "Manual update",
      updatedBy: req.user._id,
      updatedAt: new Date(),
    });

    await product.save();

    res.json({
      success: true,
      message: "Cập nhật tồn kho thành công",
      data: {
        productId: product._id,
        name: product.name,
        oldStock,
        newStock: stock,
      },
    });
  } catch (error) {
    console.error("Update product stock error:", error);
    res.status(500).json({
      success: false,
      message: "Không thể cập nhật tồn kho",
    });
  }
};

/**
 * @desc    Lấy tất cả đơn hàng (Admin)
 * @route   GET /api/admin/orders
 * @access  Private/Admin
 */
export const getAllOrders = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      status,
      paymentStatus,
      startDate,
      endDate,
      search,
      sortBy = "createdAt",
      sortOrder = "desc",
    } = req.query;

    const query = {};

    if (status) query.status = status;
    if (paymentStatus) query.paymentStatus = paymentStatus;
    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) query.createdAt.$gte = new Date(startDate);
      if (endDate) query.createdAt.$lte = new Date(endDate);
    }
    if (search) {
      query.$or = [
        { orderNumber: { $regex: search, $options: "i" } },
        { "shippingAddress.firstName": { $regex: search, $options: "i" } },
        { "shippingAddress.lastName": { $regex: search, $options: "i" } },
      ];
    }

    const orders = await Order.find(query)
      .sort({ [sortBy]: sortOrder === "desc" ? -1 : 1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .populate("user", "firstName lastName email")
      .select("-items.product"); // Exclude full product details for list view

    const total = await Order.countDocuments(query);

    res.json({
      success: true,
      data: orders,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Get all orders error:", error);
    res.status(500).json({
      success: false,
      message: "Không thể lấy danh sách đơn hàng",
    });
  }
};

/**
 * @desc    Lấy tất cả người dùng (Admin)
 * @route   GET /api/admin/users
 * @access  Private/Admin
 */
export const getAllUsers = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      role,
      search,
      sortBy = "createdAt",
      sortOrder = "desc",
    } = req.query;

    const query = {};

    if (role) query.role = role;
    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: "i" } },
        { lastName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    const users = await User.find(query)
      .sort({ [sortBy]: sortOrder === "desc" ? -1 : 1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .select("-password -refreshToken");

    const total = await User.countDocuments(query);

    res.json({
      success: true,
      data: users,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Get all users error:", error);
    res.status(500).json({
      success: false,
      message: "Không thể lấy danh sách người dùng",
    });
  }
};

/**
 * @desc    Cập nhật role người dùng (Admin)
 * @route   PUT /api/admin/users/:id/role
 * @access  Private/Admin
 */
export const updateUserRole = async (req, res) => {
  try {
    const { role } = req.body;

    if (!["user", "admin"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Role không hợp lệ",
      });
    }

    // Prevent self-demotion
    if (req.params.id === req.user._id.toString() && role !== "admin") {
      return res.status(400).json({
        success: false,
        message: "Không thể tự hạ cấp quyền của mình",
      });
    }

    const user = await User.findByIdAndUpdate(req.params.id, { role }, { new: true }).select(
      "-password -refreshToken"
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy người dùng",
      });
    }

    res.json({
      success: true,
      message: `Đã cập nhật role thành ${role}`,
      data: user,
    });
  } catch (error) {
    console.error("Update user role error:", error);
    res.status(500).json({
      success: false,
      message: "Không thể cập nhật role",
    });
  }
};

export default {
  getDashboardOverview,
  getRevenueStats,
  getTopProducts,
  getRecentOrders,
  getCategoryStats,
  getLowStockProducts,
  getUserStats,
  updateOrderStatus,
  updateProductStock,
  getAllOrders,
  getAllUsers,
  updateUserRole,
};
