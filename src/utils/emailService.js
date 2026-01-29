// backend/src/utils/emailService.js
import nodemailer from "nodemailer";

/**
 * Email Service
 * Sử dụng Nodemailer để gửi emails
 *
 * Cấu hình trong .env:
 * - SMTP_HOST=smtp.gmail.com
 * - SMTP_PORT=587
 * - SMTP_USER=your-email@gmail.com
 * - SMTP_PASS=your-app-password (không phải password thường!)
 * - FROM_EMAIL=noreply@yoursite.com
 */

// Tạo transporter (kết nối SMTP)
const createTransporter = () => {
  // Nếu không có config SMTP, dùng console log (development)
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
    console.warn("⚠️ SMTP not configured. Emails will be logged to console instead.");
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

/**
 * Gửi email
 * @param {Object} options - { to, subject, text, html }
 */
export const sendEmail = async ({ to, subject, text, html }) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.FROM_EMAIL || "noreply@fashionstore.com",
    to,
    subject,
    text,
    html,
  };

  // Development mode: log ra console
  if (!transporter) {
    console.log("\n📧 ========== EMAIL (Dev Mode) ==========");
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${text || html}`);
    console.log("==========================================\n");
    return { success: true, mode: "console" };
  }

  // Production mode: gửi email thật
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("❌ Email send failed:", error.message);
    throw error;
  }
};

/**
 * Gửi email reset password
 * @param {string} email - Email người nhận
 * @param {string} resetToken - Token để reset password
 * @param {string} resetUrl - URL đầy đủ để reset (optional)
 */
export const sendPasswordResetEmail = async (email, resetToken, resetUrl) => {
  const clientUrl = process.env.CLIENT_URL || "http://localhost:3000";
  const url = resetUrl || `${clientUrl}/reset-password?token=${resetToken}`;

  const subject = "Password Reset Request - Fashion Store";

  const text = `
You requested a password reset for your Fashion Store account.

Click this link to reset your password:
${url}

This link will expire in 1 hour.

If you didn't request this, please ignore this email.
`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a1a; color: #fff; padding: 20px; text-align: center; }
    .content { padding: 30px; background: #f9f9f9; }
    .button { 
      display: inline-block; 
      padding: 12px 30px; 
      background: #c9a962; 
      color: #fff !important; 
      text-decoration: none; 
      border-radius: 4px;
      margin: 20px 0;
    }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Fashion Store</h1>
    </div>
    <div class="content">
      <h2>Password Reset Request</h2>
      <p>You requested a password reset for your account.</p>
      <p>Click the button below to reset your password:</p>
      <a href="${url}" class="button">Reset Password</a>
      <p>Or copy this link: <br><small>${url}</small></p>
      <p><strong>This link will expire in 1 hour.</strong></p>
      <p>If you didn't request this, please ignore this email.</p>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} Fashion Store. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

  return sendEmail({ to: email, subject, text, html });
};

/**
 * Gửi email xác nhận đơn hàng
 * @param {string} email - Email người nhận
 * @param {Object} order - Thông tin đơn hàng
 */
export const sendOrderConfirmationEmail = async (email, order) => {
  const subject = `Order Confirmation #${order.orderNumber} - Fashion Store`;

  const itemsList = order.items
    .map(
      (item) =>
        `- ${item.name} (${item.variant?.size || "N/A"}, ${item.variant?.color || "N/A"}) x${item.quantity}: $${item.price * item.quantity}`
    )
    .join("\n");

  const text = `
Thank you for your order!

Order Number: ${order.orderNumber}
Date: ${new Date(order.createdAt).toLocaleDateString()}

Items:
${itemsList}

Subtotal: $${order.subtotal}
Shipping: $${order.shipping}
Tax: $${order.tax}
Total: $${order.total}

Shipping to:
${order.shippingAddress.fullName}
${order.shippingAddress.street}
${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zipCode}
${order.shippingAddress.country}

Thank you for shopping with us!
`;

  return sendEmail({ to: email, subject, text });
};

/**
 * Gửi email welcome cho user mới
 * @param {string} email - Email người nhận
 * @param {string} name - Tên người dùng
 */
export const sendWelcomeEmail = async (email, name) => {
  const subject = "Welcome to Fashion Store!";

  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a1a; color: #fff; padding: 20px; text-align: center; }
    .content { padding: 30px; background: #f9f9f9; }
    .button { 
      display: inline-block; 
      padding: 12px 30px; 
      background: #c9a962; 
      color: #fff !important; 
      text-decoration: none; 
      border-radius: 4px;
    }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to Fashion Store!</h1>
    </div>
    <div class="content">
      <h2>Hi ${name}!</h2>
      <p>Thank you for creating an account with us.</p>
      <p>You now have access to:</p>
      <ul>
        <li>Exclusive member discounts</li>
        <li>Order tracking</li>
        <li>Wishlist</li>
        <li>Fast checkout</li>
      </ul>
      <a href="${process.env.CLIENT_URL || "http://localhost:3000"}/products" class="button">
        Start Shopping
      </a>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} Fashion Store. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

  return sendEmail({ to: email, subject, html, text: `Hi ${name}! Welcome to Fashion Store.` });
};

/**
 * Gửi email xác nhận thanh toán
 * @param {string} email - Email người nhận
 * @param {Object} data - { orderNumber, amount, paymentMethod }
 */
export const sendPaymentConfirmationEmail = async (email, data) => {
  const { orderNumber, amount, paymentMethod } = data;
  const subject = `Payment Confirmed - Order #${orderNumber}`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a1a; color: #fff; padding: 20px; text-align: center; }
    .content { padding: 30px; background: #f9f9f9; }
    .success { color: #28a745; font-size: 24px; }
    .details { background: #fff; padding: 20px; margin: 20px 0; border-radius: 8px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Fashion Store</h1>
    </div>
    <div class="content">
      <p class="success">✓ Payment Successful!</p>
      <div class="details">
        <p><strong>Order Number:</strong> ${orderNumber}</p>
        <p><strong>Amount Paid:</strong> $${amount}</p>
        <p><strong>Payment Method:</strong> ${paymentMethod}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>
      <p>Your order is now being processed. We'll notify you when it ships.</p>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} Fashion Store. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

  return sendEmail({
    to: email,
    subject,
    html,
    text: `Payment confirmed for order #${orderNumber}. Amount: $${amount}`,
  });
};

/**
 * Gửi email hướng dẫn chuyển khoản
 * @param {string} email - Email người nhận
 * @param {Object} data - { orderNumber, amount, transferReference, bankInfo, expiresAt }
 */
export const sendBankTransferEmail = async (email, data) => {
  const { orderNumber, amount, transferReference, bankInfo, expiresAt } = data;
  const subject = `Bank Transfer Instructions - Order #${orderNumber}`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a1a; color: #fff; padding: 20px; text-align: center; }
    .content { padding: 30px; background: #f9f9f9; }
    .bank-info { background: #fff; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #c9a962; }
    .warning { background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Fashion Store</h1>
    </div>
    <div class="content">
      <h2>Bank Transfer Instructions</h2>
      <p>Please complete your payment using the following details:</p>
      
      <div class="bank-info">
        <p><strong>Bank Name:</strong> ${bankInfo.bankName}</p>
        <p><strong>Account Number:</strong> ${bankInfo.accountNumber}</p>
        <p><strong>Account Name:</strong> ${bankInfo.accountName}</p>
        <p><strong>Branch:</strong> ${bankInfo.branch}</p>
        <p><strong>Amount:</strong> $${amount}</p>
        <p><strong>Transfer Reference:</strong> <code>${transferReference}</code></p>
      </div>
      
      <div class="warning">
        ⚠️ <strong>Important:</strong> Please include the transfer reference in your payment description.
        <br>Payment must be completed before: ${new Date(expiresAt).toLocaleString()}
      </div>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} Fashion Store. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

  return sendEmail({
    to: email,
    subject,
    html,
    text: `Bank Transfer for Order #${orderNumber}. Amount: $${amount}. Reference: ${transferReference}`,
  });
};

/**
 * Gửi email cập nhật trạng thái đơn hàng
 * @param {string} email - Email người nhận
 * @param {Object} data - { orderNumber, status, trackingNumber, estimatedDelivery }
 */
export const sendOrderStatusEmail = async (email, data) => {
  const { orderNumber, status, trackingNumber, estimatedDelivery } = data;

  const statusMessages = {
    processing: "Your order is being processed",
    shipped: "Your order has been shipped!",
    out_for_delivery: "Your order is out for delivery",
    delivered: "Your order has been delivered",
    cancelled: "Your order has been cancelled",
  };

  const subject = `Order Update - #${orderNumber} ${statusMessages[status] || status}`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a1a; color: #fff; padding: 20px; text-align: center; }
    .content { padding: 30px; background: #f9f9f9; }
    .status-box { background: #fff; padding: 20px; margin: 20px 0; border-radius: 8px; text-align: center; }
    .status { font-size: 18px; color: #c9a962; text-transform: uppercase; }
    .tracking { background: #e9ecef; padding: 15px; border-radius: 8px; margin: 20px 0; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Fashion Store</h1>
    </div>
    <div class="content">
      <div class="status-box">
        <p>Order #${orderNumber}</p>
        <p class="status">${statusMessages[status] || status}</p>
      </div>
      
      ${
        trackingNumber
          ? `
      <div class="tracking">
        <p><strong>Tracking Number:</strong> ${trackingNumber}</p>
        ${estimatedDelivery ? `<p><strong>Estimated Delivery:</strong> ${new Date(estimatedDelivery).toLocaleDateString()}</p>` : ""}
      </div>
      `
          : ""
      }
      
      <p>Thank you for shopping with Fashion Store!</p>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} Fashion Store. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

  return sendEmail({
    to: email,
    subject,
    html,
    text: `Order #${orderNumber} update: ${statusMessages[status] || status}`,
  });
};

/**
 * Gửi email thông báo hoàn tiền
 * @param {string} email - Email người nhận
 * @param {Object} data - { orderNumber, amount, approved, adminNotes }
 */
export const sendRefundEmail = async (email, data) => {
  const { orderNumber, amount, approved, adminNotes } = data;
  const subject = `Refund ${approved ? "Approved" : "Rejected"} - Order #${orderNumber}`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a1a; color: #fff; padding: 20px; text-align: center; }
    .content { padding: 30px; background: #f9f9f9; }
    .result { font-size: 24px; text-align: center; padding: 20px; }
    .approved { color: #28a745; }
    .rejected { color: #dc3545; }
    .details { background: #fff; padding: 20px; margin: 20px 0; border-radius: 8px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Fashion Store</h1>
    </div>
    <div class="content">
      <p class="result ${approved ? "approved" : "rejected"}">
        ${approved ? "✓ Refund Approved" : "✗ Refund Rejected"}
      </p>
      
      <div class="details">
        <p><strong>Order Number:</strong> ${orderNumber}</p>
        <p><strong>Amount:</strong> $${amount}</p>
        ${adminNotes ? `<p><strong>Note:</strong> ${adminNotes}</p>` : ""}
      </div>
      
      ${
        approved
          ? "<p>The refund will be processed within 5-7 business days.</p>"
          : "<p>If you have questions about this decision, please contact our support team.</p>"
      }
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} Fashion Store. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

  return sendEmail({
    to: email,
    subject,
    html,
    text: `Refund ${approved ? "approved" : "rejected"} for order #${orderNumber}. Amount: $${amount}`,
  });
};

export default {
  sendEmail,
  sendPasswordResetEmail,
  sendOrderConfirmationEmail,
  sendWelcomeEmail,
  sendPaymentConfirmationEmail,
  sendBankTransferEmail,
  sendOrderStatusEmail,
  sendRefundEmail,
};
