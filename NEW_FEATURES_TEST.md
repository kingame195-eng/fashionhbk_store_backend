# 🧪 Test Suite cho Các Tính Năng Mới

## Tổng quan

File này chứa các test case cho các tính năng mới đã được thêm vào hệ thống:

- Reviews & Ratings
- Coupons
- Payments
- Admin Dashboard
- Inventory Management

---

## 1. REVIEW API TESTS

### 1.1 Lấy reviews sản phẩm (Public)

```bash
GET /api/reviews/product/:productId
```

### 1.2 Tạo review mới (User)

```bash
POST /api/reviews/product/:productId
Authorization: Bearer <token>
Content-Type: application/json

{
  "rating": 5,
  "title": "Sản phẩm tuyệt vời",
  "comment": "Chất lượng rất tốt, giao hàng nhanh"
}
```

### 1.3 Vote helpful (User)

```bash
POST /api/reviews/:reviewId/helpful
Authorization: Bearer <token>
```

---

## 2. COUPON API TESTS

### 2.1 Validate coupon (User)

```bash
POST /api/coupons/validate
Authorization: Bearer <token>
Content-Type: application/json

{
  "code": "SUMMER20",
  "cartTotal": 500000
}
```

### 2.2 Tạo coupon mới (Admin)

```bash
POST /api/coupons
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "code": "NEWUSER10",
  "description": "Giảm 10% cho khách hàng mới",
  "discountType": "percentage",
  "discountValue": 10,
  "minOrderValue": 100000,
  "maxDiscount": 50000,
  "startDate": "2024-01-01",
  "endDate": "2024-12-31",
  "usageLimit": 1000,
  "firstOrderOnly": true
}
```

---

## 3. PAYMENT API TESTS

### 3.1 Lấy phương thức thanh toán

```bash
GET /api/payments/methods
```

### 3.2 Thanh toán COD

```bash
POST /api/payments/cod
Authorization: Bearer <token>
Content-Type: application/json

{
  "orderId": "order_id_here"
}
```

### 3.3 Chuyển khoản ngân hàng

```bash
POST /api/payments/bank-transfer
Authorization: Bearer <token>
Content-Type: application/json

{
  "orderId": "order_id_here"
}
```

---

## 4. ADMIN API TESTS

### 4.1 Dashboard Overview

```bash
GET /api/admin/dashboard
Authorization: Bearer <admin_token>
```

### 4.2 Revenue Stats

```bash
GET /api/admin/revenue-stats?period=30days
Authorization: Bearer <admin_token>
```

### 4.3 Top Products

```bash
GET /api/admin/top-products?limit=10
Authorization: Bearer <admin_token>
```

### 4.4 Recent Orders

```bash
GET /api/admin/recent-orders?limit=5
Authorization: Bearer <admin_token>
```

### 4.5 Update Order Status

```bash
PUT /api/admin/orders/:orderId/status
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "status": "shipped",
  "trackingNumber": "VN123456789",
  "note": "Đã giao cho đơn vị vận chuyển"
}
```

### 4.6 Get All Users

```bash
GET /api/admin/users?page=1&limit=20&role=user
Authorization: Bearer <admin_token>
```

### 4.7 Update User Role

```bash
PUT /api/admin/users/:userId/role
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "role": "admin"
}
```

---

## 5. INVENTORY API TESTS

### 5.1 Inventory Alerts

```bash
GET /api/inventory/alerts?lowStockThreshold=10
Authorization: Bearer <admin_token>
```

### 5.2 Inventory Report

```bash
GET /api/inventory/report
Authorization: Bearer <admin_token>
```

### 5.3 Adjust Stock

```bash
PUT /api/inventory/:productId/adjust
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "adjustment": 50,
  "reason": "Nhập hàng từ nhà cung cấp"
}
```

### 5.4 Bulk Update Stock

```bash
PUT /api/inventory/bulk-update
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "updates": [
    { "productId": "id1", "stock": 100, "reason": "Nhập hàng mới" },
    { "productId": "id2", "stock": 50, "reason": "Nhập hàng mới" }
  ]
}
```

### 5.5 Stock History

```bash
GET /api/inventory/:productId/history
Authorization: Bearer <admin_token>
```

### 5.6 Send Low Stock Alerts

```bash
POST /api/inventory/send-alerts
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "threshold": 10,
  "email": "admin@fashionstore.com"
}
```

---

## 6. EXPECTED RESPONSES

### Success Response

```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

### Error Response

```json
{
  "success": false,
  "message": "Error description"
}
```

### Pagination Response

```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "pages": 5
  }
}
```

---

## 7. TEST CHECKLIST

### Reviews

- [ ] Get product reviews (no auth)
- [ ] Get product reviews (with auth - shows user votes)
- [ ] Create review (must have purchased product)
- [ ] Update own review
- [ ] Delete own review
- [ ] Vote helpful
- [ ] Admin approve review
- [ ] Admin reject review
- [ ] Admin reply to review

### Coupons

- [ ] Validate valid coupon
- [ ] Validate expired coupon
- [ ] Validate coupon with min order not met
- [ ] Validate first order only coupon
- [ ] Admin CRUD coupons
- [ ] Coupon usage tracking

### Payments

- [ ] Get payment methods
- [ ] COD payment
- [ ] Bank transfer payment
- [ ] Verify bank transfer (admin)
- [ ] Request refund
- [ ] Process refund (admin)

### Admin Dashboard

- [ ] Dashboard overview loads
- [ ] Revenue stats by period
- [ ] Top products list
- [ ] Recent orders
- [ ] Category stats
- [ ] User stats
- [ ] Order management
- [ ] User management

### Inventory

- [ ] View inventory alerts
- [ ] Generate inventory report
- [ ] Adjust single product stock
- [ ] Bulk update stock
- [ ] View stock history
- [ ] Send email alerts
