// backend/src/utils/emailService.js
import nodemailer from "nodemailer";
import logger from "./logger.js";

/**
 * Email Service
 * Sá»­ dá»¥ng Nodemailer Ä‘á»ƒ gá»­i emails
 *
 * Cáº¥u hÃ¬nh trong .env:
 * - SMTP_HOST=smtp.gmail.com
 * - SMTP_PORT=587
 * - SMTP_USER=your-email@gmail.com
 * - SMTP_PASS=your-app-password (khÃ´ng pháº£i password thÆ°á»ng!)
 * - FROM_EMAIL=noreply@yoursite.com
 */

// Táº¡o transporter (káº¿t ná»‘i SMTP)
const createTransporter = () => {
  // Náº¿u khÃ´ng cÃ³ config SMTP, dÃ¹ng console log (development)
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
    logger.warn("SMTP not configured. Emails will be logged to console instead.");
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
 * Gá»­i email
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
    logger.email(to, subject, text || html);
    return { success: true, mode: "console" };
  }

  // Production mode: gá»­i email tháº­t
  try {
    const info = await transporter.sendMail(mailOptions);
    logger.info(`Email sent: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    logger.error("Email send failed", error);
    throw error;
  }
};

/**
 * Gá»­i email reset password
 * @param {string} email - Email ngÆ°á»i nháº­n
 * @param {string} resetToken - Token Ä‘á»ƒ reset password
 * @param {string} resetUrl - URL Ä‘áº§y Ä‘á»§ Ä‘á»ƒ reset (optional)
 */
export const sendPasswordResetEmail = async (email, resetToken, resetUrl) => {
  const clientUrl = process.env.CLIENT_URL || "http://localhost:3000";
  const url = resetUrl || `${clientUrl}/reset-password/${resetToken}`;

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
      background: #D0B674; 
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
 * Gá»­i email xÃ¡c nháº­n Ä‘Æ¡n hÃ ng
 * @param {string} email - Email ngÆ°á»i nháº­n
 * @param {Object} order - ThÃ´ng tin Ä‘Æ¡n hÃ ng
 */
export const sendOrderConfirmationEmail = async (email, order) => {
  const subject = `Order Confirmation #${order.orderNumber} - Fashion Store`;

  const itemsList = order.items
    .map(
      (item) =>
        `- ${item.name} (${item.size || "N/A"}, ${item.color || "N/A"}) x${item.quantity}: $${item.price * item.quantity}`
    )
    .join("\n");

  const text = `
Thank you for your order!

Order Number: ${order.orderNumber}
Date: ${new Date(order.createdAt).toLocaleDateString()}

Items:
${itemsList}

Subtotal: $${order.subtotal}
Shipping: $${order.shippingCost}
Tax: $${order.tax}
Total: $${order.total}

Shipping to:
${order.shippingAddress.firstName} ${order.shippingAddress.lastName}
${order.shippingAddress.address}
${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.postalCode}
${order.shippingAddress.country}

Thank you for shopping with us!
`;

  return sendEmail({ to: email, subject, text });
};

/**
 * Gá»­i email welcome cho user má»›i
 * @param {string} email - Email ngÆ°á»i nháº­n
 * @param {string} name - TÃªn ngÆ°á»i dÃ¹ng
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
      background: #D0B674; 
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
 * Gá»­i email xÃ¡c nháº­n thanh toÃ¡n
 * @param {string} email - Email ngÆ°á»i nháº­n
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
      <p class="success">âœ“ Payment Successful!</p>
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
 * Gá»­i email hÆ°á»›ng dáº«n chuyá»ƒn khoáº£n
 * @param {string} email - Email ngÆ°á»i nháº­n
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
    .bank-info { background: #fff; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #D0B674; }
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
        âš ï¸ <strong>Important:</strong> Please include the transfer reference in your payment description.
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
 * Gá»­i email cáº­p nháº­t tráº¡ng thÃ¡i Ä‘Æ¡n hÃ ng
 * @param {string} email - Email ngÆ°á»i nháº­n
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
    .status { font-size: 18px; color: #D0B674; text-transform: uppercase; }
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
 * Gá»­i email thÃ´ng bÃ¡o hoÃ n tiá»n
 * @param {string} email - Email ngÆ°á»i nháº­n
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
        ${approved ? "âœ“ Refund Approved" : "âœ— Refund Rejected"}
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
