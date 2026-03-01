# 🛍️ Complete Fullstack Fashion Website Guide

## Using Vite + React, Node.js/Express, Docker, Ubuntu Cloud Server & Termius

> **Giáo án hoàn chỉnh, production-ready** cho xây dựng website thời trang e-commerce chuyên nghiệp.  
> Phù hợp cho **tự học**, **portfolio** và **phỏng vấn**.

---

## 📚 Yêu cầu Kiến thức (Prerequisites)

### Bắt buộc phải biết:

| Kiến thức        | Mức độ     | Tại sao cần?                |
| ---------------- | ---------- | --------------------------- |
| **HTML/CSS**     | Cơ bản     | Xây dựng giao diện, styling |
| **JavaScript**   | Trung bình | Logic, async/await, ES6+    |
| **Git**          | Cơ bản     | Version control, branches   |
| **Terminal/CLI** | Cơ bản     | Chạy commands, navigation   |

### Nên biết (học nhanh hơn nếu có):

- React cơ bản (components, props, state)
- Node.js/npm cơ bản
- REST API concepts
- MongoDB cơ bản

> 💡 **Chưa biết React?** Vẫn học được! Giáo án giải thích từ đầu, nhưng sẽ mất thêm 1-2 tuần.

---

## ⏱️ Thời gian Học (Estimated Time)

| Part          | Nội dung           | Thời gian | Độ khó        |
| ------------- | ------------------ | --------- | ------------- |
| **Part 1**    | Overview & Setup   | 2-3 giờ   | 🟢 Dễ         |
| **Part 2**    | Frontend (React)   | 2-3 ngày  | 🟡 Trung bình |
| **Part 3**    | Backend (Node.js)  | 3-4 ngày  | 🟡 Trung bình |
| **Part 4**    | Integration        | 1 ngày    | 🟡 Trung bình |
| **Part 5**    | Common Issues      | 2-3 giờ   | 🟢 Dễ         |
| **Part 6**    | Testing            | 1 ngày    | 🟡 Trung bình |
| **Part 7**    | Deployment         | 1-2 ngày  | 🔴 Khó        |
| **Part 8**    | Advanced Features  | 2-3 ngày  | 🔴 Khó        |
| **Part 9-14** | Theory & Interview | Tùy ý     | 🟢-🟡         |

> **Tổng:** ~2-3 tuần (học full-time) hoặc ~1-2 tháng (học part-time)

---

## 🗺️ Learning Roadmap

```
Week 1: Foundation
┌─────────────────────────────────────────────────────────────────┐
│  Day 1-2: Part 1 (Setup) → Day 3-5: Part 3 (Backend)            │
│     ↓                            ↓                               │
│  Hiểu architecture          Có API để test                       │
└─────────────────────────────────────────────────────────────────┘

Week 2: Frontend & Integration
┌─────────────────────────────────────────────────────────────────┐
│  Day 1-3: Part 2 (Frontend) → Day 4-5: Part 4 (Integration)     │
│     ↓                            ↓                               │
│  Có UI hoàn chỉnh           Website chạy được!                   │
└─────────────────────────────────────────────────────────────────┘

Week 3: Testing & Deployment
┌─────────────────────────────────────────────────────────────────┐
│  Day 1-2: Part 6 (Testing) → Day 3-5: Part 7 (Deployment)       │
│     ↓                            ↓                               │
│  Code đảm bảo chất lượng    Website live trên internet!          │
└─────────────────────────────────────────────────────────────────┘
```

---

## ✅ Progress Tracker

Đánh dấu ✅ sau khi hoàn thành mỗi phần:

```
[ ] Part 1: Setup môi trường xong
[ ] Part 2: Frontend chạy được ở localhost:5173
[ ] Part 3: Backend API trả về data
[ ] Part 4: Frontend gọi Backend thành công
[ ] Part 5: Fix hết lỗi common
[ ] Part 6: Chạy test suite pass
[ ] Part 7: Deploy lên server
[ ] Part 8: Thêm advanced features
```

---

## 🎯 Mục tiêu của giáo án

### Tại sao cần giáo án này?

1. **Học thực tế** - Không chỉ lý thuyết, bạn sẽ code thực sự một website hoàn chỉnh
2. **Hiểu sâu** - Mỗi bước đều có giải thích _tại sao_ làm như vậy
3. **Production-ready** - Kiến thức áp dụng được ngay vào công việc thực tế
4. **Portfolio** - Có sản phẩm để show trong CV và phỏng vấn

### Bạn sẽ học được gì?

| Kỹ năng                  | Mô tả                                                          |
| ------------------------ | -------------------------------------------------------------- |
| **Backend Development**  | Xây dựng REST API với Node.js/Express, xác thực JWT, bảo mật   |
| **Frontend Development** | React components, state management, routing, API integration   |
| **Database Design**      | MongoDB schema design, queries, indexing                       |
| **Security**             | Authentication, authorization, input validation, rate limiting |
| **DevOps**               | Docker, CI/CD, Nginx, SSL, deployment                          |
| **Best Practices**       | Clean code, error handling, logging, testing                   |

---

## 🌐 Ghi chú về Ngôn ngữ

> **Thông báo:** Giáo án này được viết bằng **tiếng Việt** nhưng source code đã được **dịch sang tiếng Anh** hoàn toàn.
>
> - **Tất cả comments trong code:** Tiếng Anh
> - **Tên biến, hàm, component:** Tiếng Anh
> - **UI text, error messages:** Tiếng Anh
> - **Địa danh:** Ho Chi Minh City, Hanoi, Da Nang...
>
> Một số code sample trong giáo án có thể còn tiếng Việt, nhưng code thực tế đã được dịch.

---

## 🚀 Quick Start Commands

### Khởi động nhanh

```bash
# Clone project
git clone <repo-url> fashion-website-frontend
cd fashion-website-frontend

# Start Backend
cd fashion-website-backend
npm install
npm run dev         # http://localhost:5000

# Start Frontend (terminal mới)
cd ../frontend
npm install
npm run dev         # http://localhost:5173
```

### Environment Variables

```bash
# Backend (.env)
MONGODB_URI=mongodb://localhost:27017/fashionhbk
JWT_SECRET=your-super-secret-key
JWT_REFRESH_SECRET=your-refresh-secret
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# Frontend (.env)
VITE_API_URL=http://localhost:5000/api
```

### 🔧 Quick Troubleshooting

| Vấn đề                        | Giải pháp                                    |
| ----------------------------- | -------------------------------------------- |
| **CORS error**                | Kiểm tra `FRONTEND_URL` trong backend `.env` |
| **MongoDB connection failed** | Chạy `mongod` hoặc kiểm tra `MONGODB_URI`    |
| **JWT invalid**               | Clear cookies, login lại                     |
| **Port 5000 in use**          | `npx kill-port 5000` hoặc đổi PORT           |
| **Vite compile error**        | Xóa `node_modules`, `npm install` lại        |
| **API 404**                   | Kiểm tra backend đang chạy, URL đúng         |

> 📌 **Chi tiết hơn:** Xem [Phụ lục C: Debugging & Troubleshooting](#phụ-lục-c-debugging--troubleshooting-guide)

---

## 📖 Glossary (Thuật ngữ)

> **Dành cho người mới:** Các thuật ngữ thường gặp trong giáo án

<details>
<summary><strong>Click để xem Glossary</strong></summary>

| Thuật ngữ      | Giải thích                                                            |
| -------------- | --------------------------------------------------------------------- |
| **API**        | Application Programming Interface - Giao diện để frontend gọi backend |
| **REST**       | Kiến trúc API: dùng HTTP methods (GET, POST, PUT, DELETE)             |
| **JWT**        | JSON Web Token - Token để xác thực user                               |
| **Cookie**     | Data lưu trong browser, gửi tự động mỗi request                       |
| **CORS**       | Cross-Origin Resource Sharing - Cho phép frontend khác domain gọi API |
| **Middleware** | Function xử lý request trước khi đến controller                       |
| **Schema**     | Cấu trúc data trong database                                          |
| **Model**      | Class đại diện cho 1 collection trong MongoDB                         |
| **Controller** | Function xử lý logic cho 1 route                                      |
| **Component**  | Khối UI tái sử dụng trong React                                       |
| **State**      | Data có thể thay đổi trong component                                  |
| **Props**      | Data truyền từ parent → child component                               |
| **Hook**       | Function đặc biệt trong React (useState, useEffect...)                |
| **Context**    | Cách share state giữa nhiều components                                |
| **Axios**      | Library để gọi HTTP requests                                          |
| **Mongoose**   | Library để làm việc với MongoDB trong Node.js                         |
| **Vite**       | Build tool cho React, nhanh hơn Create React App                      |
| **Docker**     | Container platform để đóng gói ứng dụng                               |
| **Nginx**      | Web server, dùng làm reverse proxy                                    |
| **CI/CD**      | Continuous Integration/Deployment - Tự động test & deploy             |
| **XSS**        | Cross-Site Scripting - Lỗ hổng inject mã độc vào web                  |
| **DOMPurify**  | Library sanitize HTML, chống XSS khi dùng dangerouslySetInnerHTML     |
| **Rate Limit** | Giới hạn số request/thời gian để chống DDoS & brute-force             |
| **Sanitize**   | Làm sạch input/output để loại bỏ code độc hại                         |
| **Helmet**     | Middleware Express thiết lập security headers                         |

</details>

---

# 📋 Mục lục Tổng quan

> 📌 **Lưu ý về thứ tự học:**
>
> - Giáo án được sắp xếp theo **workflow thực tế** của dự án
> - **Backend trước** vì Frontend cần API để test
> - Mỗi Part đều có giải thích "tại sao" làm như vậy

## Phần A: Nền tảng & Khởi tạo

- [Part 1: Overview & Environment Preparation](#part-1-overview--environment-preparation)
  - Giới thiệu dự án, kiến trúc hệ thống
  - Cài đặt môi trường (Node.js, MongoDB, Git)
  - Tại sao cần học phần này?

## Phần B: Backend Development (Làm trước)

> 💡 **Tại sao Backend trước?**
>
> - Frontend cần API endpoints để gọi
> - Test API bằng Postman trước khi viết UI
> - Database schema quyết định data flow

- [Part 3: Backend Development with Node.js + Express](#part-3-backend-development-with-nodejs--express)
  - Khởi tạo project, cấu trúc MVC
  - Database models (User, Product, Cart)
  - API routes & Controllers
  - Authentication (JWT), Security middleware

## Phần C: Frontend Development (Làm sau Backend)

> 💡 **Tại sao Frontend sau?**
>
> - Có API sẵn để integrate
> - Biết data structure từ backend
> - Test real API thay vì mock data

- [Part 2: Frontend Development with Vite + React](#part-2-frontend-development-with-vite--react)
  - Khởi tạo project với Vite
  - Components, Pages, Routing
  - State management với Context API
  - API Integration với Axios

> 📌 **Lưu ý:** Giáo án sắp xếp Part 2 (Frontend) trước Part 3 (Backend) trong file, nhưng **nên làm Backend trước** nếu theo workflow thực tế.

## Phần D: Kết nối & Tích hợp

- [Part 4: Frontend-Backend Integration](#part-4-frontend-backend-integration)
  - Kết nối Frontend với Backend API
  - Xử lý CORS, Cookies, Auth flow
  - Debug connection issues

- [Part 5: Common Issues & Solutions](#part-5-common-issues--solutions)
  - Các lỗi thường gặp và cách fix
  - Debug tips

## Phần E: Testing & Quality Assurance

- [Part 6: Testing](#part-6-testing)
  - 6.1 Manual Testing Checklist
  - 6.2 ⭐ **Automated API Testing (65 test cases)** - MỚI
  - 6.3 Test Report & Results

## Phần F: Deployment

> 💡 **Tại sao Deployment trước Advanced Features?**
>
> - Deploy bản MVP trước, thêm features sau
> - Học DevOps sớm, tích hợp CI/CD
> - Real-world workflow: ship early, iterate

- [Part 7: Deployment](#part-7-deployment)
  - Docker & Docker Compose
  - Nginx configuration
  - SSL/HTTPS setup
  - CI/CD với GitHub Actions

## Phần G: Tính năng Nâng cao ✅ (Đã implement)

- [Part 8: Advanced Features](#part-8-advanced-features) ✅
  - Order System, Checkout Flow
  - Admin Dashboard
  - Reviews, Coupons, Payments
  - Inventory Management

## Phần H: Lý thuyết & Best Practices

> 💡 **Tại sao Lý thuyết ở cuối?**
>
> - Học qua thực hành trước, hiểu lý thuyết sau
> - Có context từ project thực tế
> - Dễ áp dụng vào code đã viết

- [Part 9: Lý thuyết Nền tảng](#part-9-lý-thuyết-nền-tảng-foundational-theory)
- [Part 10: Nguyên tắc Clean Code](#part-10-nguyên-tắc-clean-code--best-practices)
- [Part 11: Kỹ năng Thực tế](#part-11-kỹ-năng-thực-tế-practical-skills)

## Phần I: Thực hành & Phỏng vấn

- [Part 12: Bài tập Thực hành](#part-12-bài-tập-thực-hành--tình-huống-phỏng-vấn)
- [Part 13: Tài liệu Tham khảo](#part-13-tài-liệu-tham-khảo--học-thêm)
- [Part 14: Định hướng Nghề nghiệp](#part-14-định-hướng-nghề-nghiệp)

## Phần J: Phụ lục Quan trọng ⭐

- [Phụ lục A: Security Checklist](#phụ-lục-a-security-checklist--best-practices)
  - Backend & Frontend Security Checklists
  - Automated Security Audit Script
  - ⭐ **A.4 Lỗ hổng Thực tế & Cách Fix** (XSS, Credentials, Rate Limiting)
  - ⭐ **A.4.6 Centralized Logging** (Logger Utility) **MỚI**
  - ⭐ **A.4.7 Input Validation** (express-validator) **MỚI**
  - ⭐ **A.4.8 Memory Leak Prevention** (React cleanup) **MỚI**
- [Phụ lục B: Backup & Recovery Guide](#phụ-lục-b-backup--recovery-guide)
  - Backup Strategy (3-2-1 Rule)
  - MongoDB Backup/Restore Scripts
- [Phụ lục C: Debugging & Troubleshooting](#phụ-lục-c-debugging--troubleshooting-guide)
  - Common Errors & Solutions
  - Debug Checklist & Logging
- [Phụ lục D: Quick Reference Cheatsheet](#phụ-lục-d-quick-reference-cheatsheet)
  - Git, npm, MongoDB, Linux commands
- [Phụ lục E: Code Changes Log](#phụ-lục-e-code-changes-log-bổ-sung-mới-) ⭐ **MỚI**
  - API Design Observations
  - Test Suite Files
  - Danh sách 65 API Endpoints đã test
- [Phụ lục F: Các Tính Năng Nâng Cao Đã Implement](#phụ-lục-f-các-tính-năng-nâng-cao-đã-implement--mới) ⭐ **MỚI**
  - Reviews & Ratings System
  - Coupon System
  - Payment Integration (COD, Bank Transfer, Stripe, VNPay)
  - Admin Dashboard
  - Inventory Management
  - Email Notifications

---

# Part 1: Overview & Environment Preparation

## 🎯 Mục tiêu của Part này

> **Tại sao cần phần này?**  
> Trước khi viết code, bạn cần hiểu rõ:
>
> - Dự án sẽ làm gì? (scope)
> - Dùng công nghệ gì? (tech stack)
> - Cấu trúc như thế nào? (architecture)
> - Cài đặt những gì? (environment)
>
> Nếu bỏ qua phần này, bạn sẽ gặp khó khăn khi mở rộng hoặc debug sau này.

---

## 1.1 Project Overview

### What We're Building

Một **website thời trang e-commerce chuyên nghiệp** với các tính năng:

| Feature                      | Description                                        | Tại sao cần?                         |
| ---------------------------- | -------------------------------------------------- | ------------------------------------ |
| 🏠 **Homepage**              | Hero banner, featured products, categories         | First impression, thu hút khách hàng |
| 👗 **Product Catalog**       | Browse products với filters & pagination           | Giúp user tìm sản phẩm nhanh chóng   |
| 🔍 **Product Details**       | Individual product pages với images, sizes, colors | Thông tin chi tiết trước khi mua     |
| 🛒 **Shopping Cart**         | Add/remove items, quantity management, guest cart  | Core của e-commerce                  |
| 🔐 **Authentication**        | Secure login/register với JWT + httpOnly cookies   | Bảo mật user data                    |
| 🔑 **Forgot/Reset Password** | Password recovery flow                             | UX tốt, giảm support tickets         |
| 👤 **User Profile**          | View/update profile, change password               | Quản lý thông tin cá nhân            |
| 📱 **Responsive Design**     | Mobile-first CSS approach                          | 60%+ traffic từ mobile               |

### Architecture Overview

**Tại sao cần kiến trúc này?**

```
┌──────────────────────┐
│   Ubuntu Cloud       │  ← Cloud server: chạy 24/7, có IP public
│      Server          │
│  ┌────────────────┐  │
│  │     Nginx      │  │  ← Reverse proxy: SSL, load balancing, static files
│  │  (Port 80/443) │  │
│  └───────┬────────┘  │
│          │           │
│    ┌─────┴─────┐     │
│    ▼           ▼     │
│ ┌─────┐    ┌─────┐   │
│ │ FE  │    │ BE  │   │  ← Tách biệt: dễ scale, dễ maintain
│ │React│    │Node │   │
│ │:3000│    │:5000│   │
│ └─────┘    └──┬──┘   │
│               │      │
│          ┌────▼────┐ │
│          │ MongoDB │ │  ← NoSQL: flexible schema cho fashion products
│          │ :27017  │ │
│          └─────────┘ │
│                      │
│   Docker Network     │  ← Container: isolated, reproducible
└──────────────────────┘
```

**Giải thích từng thành phần:**

| Thành phần          | Vai trò                                            | Lý do chọn                                              |
| ------------------- | -------------------------------------------------- | ------------------------------------------------------- |
| **Nginx**           | Reverse proxy, serve static files, SSL termination | Performance cao, config linh hoạt                       |
| **React (Vite)**    | Frontend SPA                                       | Fast HMR, modern tooling, component-based               |
| **Node.js/Express** | Backend API                                        | JavaScript fullstack, async I/O tốt                     |
| **MongoDB**         | Database                                           | Schema linh hoạt cho products (sizes, colors, variants) |
| **Docker**          | Containerization                                   | Đảm bảo "works on my machine" → "works everywhere"      |

---

## 1.2 Technology Stack

### Frontend

| Technology       | Version | Purpose                         | Tại sao chọn?                   |
| ---------------- | ------- | ------------------------------- | ------------------------------- |
| **Vite**         | 7.x     | Build tool - Lightning fast HMR | Nhanh hơn CRA 10-100x           |
| **React**        | 19.x    | UI library                      | Component-based, huge ecosystem |
| **React Router** | 7.x     | Client-side routing             | De-facto standard cho React     |
| **Axios**        | 1.x     | HTTP client with interceptors   | Interceptors cho auth, error    |
| **CSS Modules**  | -       | Scoped styling                  | Tránh CSS conflicts             |

### Backend

| Technology   | Version  | Purpose               | Tại sao chọn?                    |
| ------------ | -------- | --------------------- | -------------------------------- |
| **Node.js**  | 20.x LTS | Runtime environment   | JavaScript fullstack, async I/O  |
| **Express**  | 5.x      | Web framework         | Minimal, flexible, mature        |
| **MongoDB**  | 7.x      | NoSQL database        | Schema linh hoạt cho products    |
| **Mongoose** | 9.x      | MongoDB ODM           | Validation, middleware, populate |
| **JWT**      | 9.x      | Authentication tokens | Stateless, scalable              |
| **bcrypt**   | 6.x      | Password hashing      | Industry standard, salt included |

### Security Packages

| Package                | Purpose                             |
| ---------------------- | ----------------------------------- |
| **helmet**             | Set security HTTP headers           |
| **express-rate-limit** | Prevent brute force attacks         |
| **hpp**                | HTTP Parameter Pollution protection |
| **express-validator**  | Input validation                    |

---

## 1.3 Project Structure Overview

### Cấu trúc thư mục hoàn chỉnh

```
fashion-website-frontend/
│
├── frontend/                    # React + Vite Frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/             # Images, fonts
│   │   │   ├── fonts/
│   │   │   └── images/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── auth/           # Auth components (ProtectedRoute, GuestRoute, etc.)
│   │   │   ├── common/         # Buttons, Inputs, Cards
│   │   │   ├── layout/         # Header, Footer, Layout
│   │   │   └── products/       # Product-specific components
│   │   ├── context/            # React Context (Auth, Cart, Toast)
│   │   │   ├── AuthContext.jsx
│   │   │   ├── CartContext.jsx
│   │   │   ├── ToastContext.jsx
│   │   │   └── constants.js
│   │   ├── hooks/              # Custom hooks
│   │   │   ├── useCategories.js
│   │   │   ├── useDebounce.js
│   │   │   ├── useProduct.js
│   │   │   ├── useProducts.js
│   │   │   └── useWishlist.js
│   │   ├── pages/              # Page components (20+ files)
│   │   │   ├── About.jsx           # About page
│   │   │   ├── Cart.jsx            # Shopping cart
│   │   │   ├── Checkout.jsx        # Checkout process
│   │   │   ├── Contact.jsx         # Contact page
│   │   │   ├── FAQ.jsx             # FAQ page
│   │   │   ├── ForgotPassword.jsx  # Password recovery
│   │   │   ├── Home.jsx            # Homepage
│   │   │   ├── Login.jsx           # Login page
│   │   │   ├── OrderConfirmation.jsx # Order success
│   │   │   ├── Orders.jsx          # Order history
│   │   │   ├── ProductDetail.jsx   # Product detail
│   │   │   ├── Products.jsx        # Product listing
│   │   │   ├── Profile.jsx         # User profile
│   │   │   ├── Register.jsx        # Registration
│   │   │   ├── ResetPassword.jsx   # Reset password
│   │   │   └── Wishlist.jsx        # Wishlist page
│   │   ├── router/             # Router configuration
│   │   ├── services/           # API calls (9 files)
│   │   │   ├── api.js              # Axios instance
│   │   │   ├── authService.js      # Authentication
│   │   │   ├── cartService.js      # Shopping cart
│   │   │   ├── checkoutService.js  # Checkout
│   │   │   ├── orderService.js     # Orders
│   │   │   ├── productService.js   # Products
│   │   │   ├── profileService.js   # User profile
│   │   │   └── wishlistService.js  # Wishlist
│   │   ├── styles/             # CSS files
│   │   │   ├── global.css
│   │   │   └── variables.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── fashion-website-backend/     # Node.js + Express Backend
│   ├── src/
│   │   ├── config/             # Configuration files
│   │   │   ├── cors.js
│   │   │   ├── database.js
│   │   │   └── security.js
│   │   ├── controllers/        # Request handlers (11 files)
│   │   │   ├── adminController.js      # Admin dashboard
│   │   │   ├── authController.js       # Authentication
│   │   │   ├── cartController.js       # Shopping cart
│   │   │   ├── checkoutController.js   # Checkout process
│   │   │   ├── couponController.js     # Discount coupons
│   │   │   ├── inventoryController.js  # Stock management
│   │   │   ├── orderController.js      # Order management
│   │   │   ├── paymentController.js    # Payment processing
│   │   │   ├── productController.js    # Products CRUD
│   │   │   ├── reviewController.js     # Product reviews
│   │   │   └── wishlistController.js   # Wishlist
│   │   ├── middleware/         # Custom middleware
│   │   │   ├── auth.js         # JWT verification
│   │   │   ├── errorHandler.js
│   │   │   ├── productValidation.js
│   │   │   └── validate.js
│   │   ├── models/             # Mongoose models (6 files)
│   │   │   ├── Cart.js         # Shopping cart
│   │   │   ├── Coupon.js       # Discount coupons
│   │   │   ├── Order.js        # Orders
│   │   │   ├── Product.js      # Products
│   │   │   ├── Review.js       # Product reviews
│   │   │   └── User.js         # Users
│   │   ├── routes/             # API routes (12 files)
│   │   │   ├── adminRoutes.js
│   │   │   ├── authRoutes.js
│   │   │   ├── cartRoutes.js
│   │   │   ├── categoryRoutes.js
│   │   │   ├── checkoutRoutes.js
│   │   │   ├── couponRoutes.js
│   │   │   ├── inventoryRoutes.js
│   │   │   ├── orderRoutes.js
│   │   │   ├── paymentRoutes.js
│   │   │   ├── productRoutes.js
│   │   │   ├── profileRoutes.js
│   │   │   ├── reviewRoutes.js
│   │   │   ├── wishlistRoutes.js
│   │   │   └── index.js        # Route aggregator
│   │   ├── services/           # Business logic
│   │   │   └── tokenService.js
│   │   ├── utils/              # Utilities
│   │   │   ├── emailService.js
│   │   │   └── securityLogger.js
│   │   └── server.js           # Entry point
│   ├── tests/                  # Test files
│   │   └── api.test.js
│   ├── .env                    # Environment variables
│   └── package.json
│
├── nginx/                       # Nginx Configuration
│   └── fashionhbk.shop.conf
│
└── scripts/                     # Utility scripts
    └── seedProducts.js
```

### 1.4 Database Models Overview

| Model       | File                | Mô tả                       | Quan hệ                  |
| ----------- | ------------------- | --------------------------- | ------------------------ |
| **User**    | `models/User.js`    | Thông tin user, auth        | Có nhiều Orders, Reviews |
| **Product** | `models/Product.js` | Sản phẩm, variants, giá     | Có nhiều Reviews         |
| **Cart**    | `models/Cart.js`    | Giỏ hàng, items             | Thuộc về User (optional) |
| **Order**   | `models/Order.js`   | Đơn hàng, shipping, payment | Thuộc về User            |
| **Review**  | `models/Review.js`  | Đánh giá sản phẩm, rating   | Thuộc về User & Product  |
| **Coupon**  | `models/Coupon.js`  | Mã giảm giá, conditions     | Independent              |

### 1.5 Tech Stack Summary

**Backend:**

- Node.js 20+ / Express 5.x
- MongoDB + Mongoose 9.x
- JWT (httpOnly cookies)
- bcrypt, helmet, express-rate-limit

**Frontend:**

- React 19 + Vite 7.x
- React Router 7.x
- Axios
- CSS Modules

---

# Part 2: Frontend Development with Vite + React

> ⚠️ **Lưu ý về thứ tự học:**
>
> - Nếu bạn theo workflow thực tế, **hãy làm Part 3 (Backend) trước**
> - Backend cung cấp API endpoints để Frontend gọi
> - Hoặc: Làm Frontend với mock data, sau đó integrate với Backend thực
>
> 📌 **Phần này dạy:** Khởi tạo React project, components, routing, state management

## 2.1 Project Initialization

### Step 1: Create Vite + React Project

```bash
# Navigate to your project root
cd fashion-website-frontend

# Create Vite project with React template
npm create vite@latest frontend -- --template react

cd frontend
npm install
```

### Step 2: Install Required Dependencies

```bash
# Core dependencies
npm install react-router-dom axios

# Development dependencies
npm install -D @types/node
```

### Step 3: Configure Vite (`vite.config.js`)

```javascript
// frontend/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  // Path aliases for cleaner imports
  // 📝 GIẢI THÍCH: Path aliases giúp import gọn gàng hơn
  // Thay vì: import Button from '../../../components/common/Button'
  // Có thể viết: import Button from '@components/common/Button'
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },

  // Development server configuration
  // 📝 GIẢI THÍCH: Cấu hình dev server
  server: {
    port: 3000, // Port chạy frontend
    host: true, // Cho phép truy cập từ bên ngoài (không chỉ localhost)
    // 📝 Proxy: Chuyển tiếp requests từ frontend sang backend
    // Ví dụ: fetch('/api/products') -> http://localhost:5000/api/products
    // Giúp tránh lỗi CORS trong development
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Backend server
        changeOrigin: true, // Thay đổi origin header để backend chấp nhận
        secure: false, // Cho phép self-signed certificates
      },
    },
  },

  // Build configuration
  // 📝 GIẢI THÍCH: Cấu hình build production
  build: {
    outDir: "dist", // Thư mục chứa file build
    sourcemap: false, // Tắt source map để bảo vệ code
    // 📝 Code Splitting: Chia code thành nhiều file nhỏ
    // - Tải song song nhanh hơn
    // - Browser cache hiệu quả hơn (vendor ít thay đổi)
    rollupOptions: {
      output: {
        manualChunks: {
          // Tách thư viện core ra file riêng (ít thay đổi, cache lâu)
          vendor: ["react", "react-dom", "react-router-dom"],
          axios: ["axios"],
        },
      },
    },
  },

  // 📝 Chỉ các biến bắt đầu bằng VITE_ mới expose ra client
  // Ví dụ: VITE_API_URL có thể đọc, còn DATABASE_URL thì không
  envPrefix: "VITE_",
});
```

### Step 4: Create Environment Files

**`.env.development`**:

```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Fashion Store (Dev)
```

**`.env.production`**:

```env
VITE_API_URL=/api
VITE_APP_NAME=Fashion Store
```

### Step 5: Create jsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@pages/*": ["src/pages/*"],
      "@services/*": ["src/services/*"],
      "@hooks/*": ["src/hooks/*"],
      "@context/*": ["src/context/*"],
      "@assets/*": ["src/assets/*"],
      "@styles/*": ["src/styles/*"],
      "@utils/*": ["src/utils/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

## 2.2 CSS Architecture

### CSS Variables (`styles/variables.css`)

```css
/* frontend/src/styles/variables.css */
:root {
  /* Color Palette */
  --color-primary: #1a1a1a;
  --color-primary-light: #2d2d2d;
  --color-primary-dark: #000000;

  --color-accent: #c9a962;
  --color-accent-light: #d4bc7e;
  --color-accent-dark: #b8944d;

  --color-white: #ffffff;
  --color-black: #000000;
  --color-gray-50: #fafafa;
  --color-gray-100: #f5f5f5;
  --color-gray-200: #e5e5e5;
  --color-gray-300: #d4d4d4;
  --color-gray-400: #a3a3a3;
  --color-gray-500: #737373;
  --color-gray-600: #525252;
  --color-gray-700: #404040;
  --color-gray-800: #262626;
  --color-gray-900: #171717;

  /* Semantic Colors */
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;

  /* Typography */
  --font-primary: "Playfair Display", Georgia, serif;
  --font-secondary: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

  /* Font Sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* Layout */
  --container-xl: 1280px;
  --header-height: 80px;

  /* Borders & Radius */
  --radius-sm: 0.125rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;

  /* Z-Index */
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal: 500;
  --z-toast: 800;
}
```

### Global Styles (`styles/global.css`)

```css
/* frontend/src/styles/global.css */
@import "./variables.css";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  font-family: var(--font-secondary);
  font-size: var(--text-base);
  line-height: 1.5;
  color: var(--color-gray-900);
  background-color: var(--color-white);
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-primary);
  font-weight: 600;
  line-height: 1.25;
}

a {
  color: var(--color-accent);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-accent-dark);
}

img {
  display: block;
  max-width: 100%;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  font: inherit;
}

.container {
  width: 100%;
  max-width: var(--container-xl);
  margin-inline: auto;
  padding-inline: var(--space-4);
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  margin-top: var(--header-height);
}
```

---

## 2.3 Core Services Setup

### API Service (`services/api.js`)

```javascript
// frontend/src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  timeout: 30000, // Timeout sau 30 giây nếu server không phản hồi
  headers: {
    "Content-Type": "application/json",
  },
  // 📝 withCredentials: true - QUAN TRỌNG!
  // Cho phép gửi cookies (chứa refreshToken) trong mỗi request
  // Nếu không có, browser sẽ không gửi cookie và auth sẽ fail
  withCredentials: true,
});

// 📝 Token storage trong memory (không phải localStorage)
// Lý do: localStorage dễ bị tấn công XSS (JavaScript có thể đọc)
// Memory biến mất khi refresh trang, nhưng ta sẽ dùng refreshToken để lấy lại
let accessToken = null;
let isRefreshing = false; // Flag để tránh gọi refresh nhiều lần
let refreshSubscribers = []; // Queue chứa các requests đang chờ token mới

// 📝 SUBSCRIBER PATTERN: Xử lý nhiều requests chờ token mới
// Khi token hết hạn, nhiều requests có thể fail cùng lúc
// Thay vì mỗi request gọi refresh riêng -> dùng queue
const subscribeTokenRefresh = (callback) => {
  refreshSubscribers.push(callback);
};

// Gọi tất cả subscribers khi có token mới
const onTokenRefreshed = (token) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = []; // Clear queue
};

// Gọi tất cả subscribers với error nếu refresh fail
const onRefreshFailed = (error) => {
  refreshSubscribers.forEach((callback) => callback(null, error));
  refreshSubscribers = [];
};

export const setAccessToken = (token) => {
  accessToken = token;
};

export const getAccessToken = () => accessToken;

export const clearAccessToken = () => {
  accessToken = null;
};

// 📝 REQUEST INTERCEPTOR: Chạy TRƯỚC mỗi request gửi đi
// Dùng để thêm headers, transform data, logging...
api.interceptors.request.use(
  (config) => {
    // Tự động thêm accessToken vào header Authorization
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    // Thêm cart session ID cho guest users (để track giỏ hàng)
    const cartSession = localStorage.getItem("cartSession");
    if (cartSession) {
      config.headers["X-Cart-Session"] = cartSession;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 📝 RESPONSE INTERCEPTOR: Chạy SAU khi nhận response từ server
// Dùng để xử lý errors chung, transform data, auto-refresh token...
api.interceptors.response.use(
  (response) => response, // Response thành công -> trả về bình thường
  async (error) => {
    const originalRequest = error.config;

    // 📝 Xử lý Rate Limiting: Server chặn quá nhiều requests
    if (error.response?.status === 429) {
      return Promise.reject({
        message: "Too many requests. Please wait a moment.",
        status: 429,
        isRateLimited: true,
      });
    }

    // 📝 Xử lý 401 Unauthorized - Tự động refresh token
    // _retry flag ngăn chặn infinite loop (chỉ retry 1 lần)
    if (error.response?.status === 401 && !originalRequest._retry) {
      // Nếu lỗi xảy ra ở chính endpoint refresh -> đăng xuất
      // Tránh infinite loop: refresh fail -> retry refresh -> fail...
      if (originalRequest.url?.includes("/auth/refresh")) {
        clearAccessToken();
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      // 📝 Nếu đang refresh, thêm request vào queue chờ
      // Tránh gọi refresh nhiều lần cùng lúc
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          subscribeTokenRefresh((token, err) => {
            if (err) return reject(err);
            if (token) {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              resolve(api(originalRequest)); // Gửi lại request ban đầu
            } else {
              reject(error);
            }
          });
        });
      }

      // 📝 Bắt đầu quá trình refresh token
      isRefreshing = true;

      try {
        // Gọi API refresh - sử dụng refreshToken trong httpOnly cookie
        // Browser tự động gửi cookie (do withCredentials: true)
        const response = await axios.post(
          `${api.defaults.baseURL}/auth/refresh`,
          {},
          { withCredentials: true }
        );

        const { accessToken: newToken } = response.data.data;
        setAccessToken(newToken); // Lưu token mới vào memory
        isRefreshing = false;
        onTokenRefreshed(newToken); // Thông báo cho tất cả requests đang chờ

        // Retry request ban đầu với token mới
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh fail -> đăng xuất user
        isRefreshing = false;
        onRefreshFailed(refreshError);
        clearAccessToken();

        // Phát sự kiện để AuthContext biết và cập nhật UI
        if (accessToken) {
          window.dispatchEvent(new CustomEvent("auth:logout"));
        }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject({
      message: error.response?.data?.message || "An error occurred",
      status: error.response?.status,
      errors: error.response?.data?.errors,
    });
  }
);

export default api;
```

### Auth Service (`services/authService.js`)

```javascript
// frontend/src/services/authService.js
import api, { setAccessToken, clearAccessToken } from "./api";

const authService = {
  async register(userData) {
    const response = await api.post("/auth/register", userData);
    const { accessToken, user } = response.data.data;
    setAccessToken(accessToken);
    return { user, accessToken };
  },

  async login(credentials) {
    const response = await api.post("/auth/login", credentials);
    const { accessToken, user } = response.data.data;
    setAccessToken(accessToken);
    return { user, accessToken };
  },

  async logout() {
    try {
      await api.post("/auth/logout");
    } finally {
      clearAccessToken();
    }
  },

  async getCurrentUser() {
    const response = await api.get("/auth/me");
    return response.data.data.user;
  },

  async refreshToken() {
    try {
      const response = await api.post("/auth/refresh");
      const { accessToken } = response.data.data;
      setAccessToken(accessToken);
      return accessToken;
    } catch (error) {
      return null;
    }
  },

  async forgotPassword(email) {
    const response = await api.post("/auth/forgot-password", { email });
    return response.data;
  },

  async resetPassword(token, password, confirmPassword) {
    const response = await api.post(`/auth/reset-password/${token}`, {
      password,
      confirmPassword,
    });
    return response.data;
  },
};

export default authService;
```

### Cart Service (`services/cartService.js`)

```javascript
// frontend/src/services/cartService.js
import api from "./api";

const CART_SESSION_KEY = "cartSession";
const EMPTY_CART = { items: [], subtotal: 0, total: 0, discount: 0 };

const generateSessionId = () => {
  return `guest_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
};

const getOrCreateSessionId = () => {
  let sessionId = localStorage.getItem(CART_SESSION_KEY);
  if (!sessionId) {
    sessionId = generateSessionId();
    localStorage.setItem(CART_SESSION_KEY, sessionId);
  }
  return sessionId;
};

const cartService = {
  async getCart() {
    try {
      const response = await api.get("/cart");
      return response.data.data.cart;
    } catch (error) {
      if (error.status === 404 || error.status === 401) {
        return EMPTY_CART;
      }
      throw error;
    }
  },

  async addItem(productId, quantity = 1, options = {}) {
    getOrCreateSessionId();
    const response = await api.post("/cart/items", {
      productId,
      quantity,
      ...options,
    });
    return response.data.data.cart;
  },

  async updateItem(itemId, quantity) {
    const response = await api.patch(`/cart/items/${itemId}`, { quantity });
    return response.data.data.cart;
  },

  async removeItem(itemId) {
    const response = await api.delete(`/cart/items/${itemId}`);
    return response.data.data.cart;
  },

  async clearCart() {
    const response = await api.delete("/cart");
    return response.data.data.cart;
  },

  async applyCoupon(code) {
    const response = await api.post("/cart/coupon", { code });
    return response.data.data.cart;
  },

  async removeCoupon() {
    const response = await api.delete("/cart/coupon");
    return response.data.data.cart;
  },

  async mergeCarts() {
    const guestSessionId = localStorage.getItem(CART_SESSION_KEY);

    if (!guestSessionId) return null;

    const response = await api.post("/cart/merge", {
      guestSessionId,
    });

    localStorage.removeItem(CART_SESSION_KEY);
    return response.data.data.cart;
  },
};

export default cartService;
```

### Profile Service (`services/profileService.js`)

```javascript
// frontend/src/services/profileService.js
import api from "./api";

const profileService = {
  async getProfile() {
    const response = await api.get("/profile");
    return response.data.data.user;
  },

  async updateProfile(data) {
    const response = await api.patch("/profile", data);
    return response.data.data.user;
  },

  async changePassword(currentPassword, newPassword, confirmPassword) {
    const response = await api.patch("/profile/password", {
      currentPassword,
      newPassword,
      confirmPassword,
    });
    return response.data;
  },
};

export default profileService;
```

### Services Index (`services/index.js`)

```javascript
// frontend/src/services/index.js
export { default as api, setAccessToken, clearAccessToken, getAccessToken } from "./api";
export { default as authService } from "./authService";
export { default as cartService } from "./cartService";
export { default as productService } from "./productService";
export { default as profileService } from "./profileService";
```

---

## 2.4 Context Providers

### Auth Context (`context/AuthContext.jsx`)

```jsx
// frontend/src/context/AuthContext.jsx
import { createContext, useContext, useReducer, useEffect, useCallback, useMemo } from "react";
import { authService, cartService, clearAccessToken } from "../services";
import { AUTH_STATUS } from "./constants";

// 📝 ACTION TYPES: Định nghĩa các hành động có thể thay đổi state
// Tập trung ở 1 nơi giúp tránh typos và dễ maintain
const AUTH_ACTIONS = {
  AUTH_START: "AUTH_START", // Bắt đầu loading (login, register...)
  AUTH_SUCCESS: "AUTH_SUCCESS", // Xác thực thành công
  AUTH_FAILURE: "AUTH_FAILURE", // Xác thực thất bại
  LOGOUT: "LOGOUT", // Đăng xuất
  UPDATE_USER: "UPDATE_USER", // Cập nhật thông tin user
  CLEAR_ERROR: "CLEAR_ERROR", // Xóa lỗi
};

// 📝 INITIAL STATE: Trạng thái ban đầu của auth
const initialState = {
  user: null, // Thông tin user (đăng nhập rồi mới có)
  status: AUTH_STATUS.IDLE, // Trạng thái hiện tại
  error: null, // Lỗi nếu có
  isAuthenticated: false, // Đã đăng nhập chưa?
  isLoading: true, // Đang kiểm tra auth (lần đầu load trang)
};

// 📝 REDUCER: Hàm xử lý state changes
// Nhận state hiện tại + action -> trả về state mới
// PURE FUNCTION: không side effects, cùng input luôn ra cùng output
function authReducer(state, action) {
  switch (action.type) {
    case AUTH_ACTIONS.AUTH_START:
      // Bắt đầu xác thực -> hiển loading
      return { ...state, status: AUTH_STATUS.LOADING, isLoading: true, error: null };
    case AUTH_ACTIONS.AUTH_SUCCESS:
      // Xác thực thành công -> lưu user, tắt loading
      return {
        ...state,
        user: action.payload.user,
        status: AUTH_STATUS.AUTHENTICATED,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case AUTH_ACTIONS.AUTH_FAILURE:
      // Xác thực thất bại -> clear user, lưu error
      return {
        ...state,
        user: null,
        status: AUTH_STATUS.UNAUTHENTICATED,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload.error,
      };
    case AUTH_ACTIONS.LOGOUT:
      // Đăng xuất -> reset về trạng thái ban đầu (nhưng không loading)
      return {
        ...state,
        user: null,
        status: AUTH_STATUS.UNAUTHENTICATED,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };
    case AUTH_ACTIONS.UPDATE_USER:
      // Cập nhật 1 phần thông tin user (vd: đổi tên)
      return { ...state, user: { ...state.user, ...action.payload.user } };
    case AUTH_ACTIONS.CLEAR_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
}

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // 📝 useReducer: Quản lý state phức tạp hơn useState
  // Tốt cho state có nhiều actions và logic phức tạp
  const [state, dispatch] = useReducer(authReducer, initialState);

  // 📝 useEffect: Kiểm tra auth khi component mount LẦN ĐẦU
  // Cố gắng refresh token để khôi phục session nếu có
  useEffect(() => {
    // 📝 isMounted: Ngăn chặn memory leak
    // Nếu component unmount trước khi async kết thúc,
    // không setState trên unmounted component
    let isMounted = true;

    const initializeAuth = async () => {
      dispatch({ type: AUTH_ACTIONS.AUTH_START });

      try {
        // Thử refresh token (dùng cookie tự động gửi)
        const token = await authService.refreshToken();

        // Kiểm tra component còn mounted không
        if (!isMounted) return;

        if (token) {
          // Có token -> lấy thông tin user
          const user = await authService.getCurrentUser();
          if (!isMounted) return;

          // Merge giỏ hàng guest vào account (nếu có)
          // .catch(() => {}) để ignore error nếu merge fail
          await cartService.mergeCarts().catch(() => {});

          dispatch({ type: AUTH_ACTIONS.AUTH_SUCCESS, payload: { user } });
        } else {
          // Không có session hợp lệ -> chưa đăng nhập
          dispatch({ type: AUTH_ACTIONS.AUTH_FAILURE, payload: { error: null } });
        }
      } catch {
        if (!isMounted) return;
        dispatch({ type: AUTH_ACTIONS.AUTH_FAILURE, payload: { error: null } });
      }
    };

    initializeAuth();

    // 📝 Listen sự kiện logout từ bất kỳ đâu trong app
    // Vd: token refresh fail trong api.js sẽ dispatch event này
    const handleLogoutEvent = () => dispatch({ type: AUTH_ACTIONS.LOGOUT });
    window.addEventListener("auth:logout", handleLogoutEvent);

    // 📝 Cleanup function: chạy khi component unmount
    return () => {
      isMounted = false;
      window.removeEventListener("auth:logout", handleLogoutEvent);
    };
  }, []); // [] = chỉ chạy 1 lần khi mount

  // 📝 useCallback: Ghi nhớ hàm, không tạo mới mỗi lần render
  // Quan trọng khi truyền hàm xuống child components
  // [] = hàm không bao giờ thay đổi (không dependencies)
  const register = useCallback(async (userData) => {
    dispatch({ type: AUTH_ACTIONS.AUTH_START });
    try {
      const { user } = await authService.register(userData);
      await cartService.mergeCarts().catch(() => {});
      dispatch({ type: AUTH_ACTIONS.AUTH_SUCCESS, payload: { user } });
      // Phát event để các components khác biết user đã login
      window.dispatchEvent(new CustomEvent("auth:login"));
      return { success: true, user };
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.AUTH_FAILURE, payload: { error: error.message } });
      return { success: false, error: error.message };
    }
  }, []);

  const login = useCallback(async (credentials) => {
    dispatch({ type: AUTH_ACTIONS.AUTH_START });
    try {
      const { user } = await authService.login(credentials);
      await cartService.mergeCarts().catch(() => {});
      dispatch({ type: AUTH_ACTIONS.AUTH_SUCCESS, payload: { user } });
      window.dispatchEvent(new CustomEvent("auth:login"));
      return { success: true, user };
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.AUTH_FAILURE, payload: { error: error.message } });
      return { success: false, error: error.message };
    }
  }, []);

  // Logout: Dù API fail vẫn phải clear local state
  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // finally luôn chạy dù try thành công hay thất bại
      clearAccessToken();
      dispatch({ type: AUTH_ACTIONS.LOGOUT });
      window.dispatchEvent(new CustomEvent("auth:logout"));
    }
  }, []);

  const updateUser = useCallback((userData) => {
    dispatch({ type: AUTH_ACTIONS.UPDATE_USER, payload: { user: userData } });
  }, []);

  const refreshUser = useCallback(async () => {
    try {
      const user = await authService.getCurrentUser();
      dispatch({ type: AUTH_ACTIONS.UPDATE_USER, payload: { user } });
      return user;
    } catch (error) {
      console.error("Failed to refresh user:", error);
      return null;
    }
  }, []);

  const clearError = useCallback(() => {
    dispatch({ type: AUTH_ACTIONS.CLEAR_ERROR });
  }, []);

  // 📝 hasRole: Kiểm tra user có role cụ thể không
  // [state.user] = tạo lại hàm khi user thay đổi
  const hasRole = useCallback(
    (roles) => {
      if (!state.user) return false;
      // Hỗ trợ cả string lẫn array: hasRole('admin') hoặc hasRole(['admin', 'moderator'])
      const roleArray = Array.isArray(roles) ? roles : [roles];
      return roleArray.includes(state.user.role);
    },
    [state.user]
  );

  // 📝 useMemo: Ghi nhớ giá trị, chỉ tính lại khi dependencies thay đổi
  // Ngăn chặn re-render không cần thiết của children
  const value = useMemo(
    () => ({
      user: state.user,
      status: state.status,
      error: state.error,
      isAuthenticated: state.isAuthenticated,
      isLoading: state.isLoading,
      register,
      login,
      logout,
      updateUser,
      refreshUser,
      clearError,
      hasRole,
    }),
    [state, register, login, logout, updateUser, refreshUser, clearError, hasRole]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
```

### Constants (`context/constants.js`)

```javascript
// frontend/src/context/constants.js
export const AUTH_STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  AUTHENTICATED: "authenticated",
  UNAUTHENTICATED: "unauthenticated",
};

export const CART_STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};
```

---

## 2.5 Auth Components

### Protected Route (`components/auth/ProtectedRoute.jsx`)

```jsx
// frontend/src/components/auth/ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: "4rem" }}>
        <div>Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
```

### Guest Route (`components/auth/GuestRoute.jsx`)

```jsx
// frontend/src/components/auth/GuestRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function GuestRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: "4rem" }}>
        <div>Loading...</div>
      </div>
    );
  }

  if (isAuthenticated) {
    const from = location.state?.from?.pathname || "/";
    return <Navigate to={from} replace />;
  }

  return children;
}
```

### Admin Route (`components/auth/AdminRoute.jsx`)

```jsx
// frontend/src/components/auth/AdminRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AdminRoute({ children }) {
  const { isAuthenticated, isLoading, hasRole } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: "4rem" }}>
        <div>Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!hasRole("admin")) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
```

### Auth Components Index (`components/auth/index.js`)

```javascript
// frontend/src/components/auth/index.js
export { default as ProtectedRoute } from "./ProtectedRoute";
export { default as GuestRoute } from "./GuestRoute";
export { default as AdminRoute } from "./AdminRoute";
```

---

## 2.6 App Router Setup

### App Component (`App.jsx`)

```jsx
// frontend/src/App.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "@components/layout";
import Home from "@pages/Home";
import Products from "@pages/Products";
import ProductDetail from "@pages/ProductDetail";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Profile from "@pages/Profile";
import ForgotPassword from "@pages/ForgotPassword";
import ResetPassword from "@pages/ResetPassword";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";
import { ProtectedRoute, GuestRoute } from "@components/auth";

const Cart = () => (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <h1>Shopping Cart</h1>
    <p>Cart page coming soon...</p>
  </div>
);

const NotFound = () => (
  <div style={{ padding: "4rem", textAlign: "center" }}>
    <h1>404</h1>
    <p>Page not found</p>
  </div>
);

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="products/:slug" element={<ProductDetail />} />
                <Route path="cart" element={<Cart />} />
                <Route
                  path="login"
                  element={
                    <GuestRoute>
                      <Login />
                    </GuestRoute>
                  }
                />
                <Route
                  path="register"
                  element={
                    <GuestRoute>
                      <Register />
                    </GuestRoute>
                  }
                />
                <Route
                  path="forgot-password"
                  element={
                    <GuestRoute>
                      <ForgotPassword />
                    </GuestRoute>
                  }
                />
                <Route
                  path="reset-password/:token"
                  element={
                    <GuestRoute>
                      <ResetPassword />
                    </GuestRoute>
                  }
                />
                <Route
                  path="profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Router>
        </CartProvider>
      </AuthProvider>
    </ToastProvider>
  );
}
```

---

## 📝 Checkpoint: Hoàn thành Part 2

> **Kiểm tra hiểu biết trước khi sang Part 3:**

### ✅ Bạn nên hiểu:

- [ ] **Component** là gì? (Reusable UI block)
- [ ] **Props** vs **State** khác nhau thế nào?
- [ ] **useEffect** dùng để làm gì?
- [ ] **Context API** giải quyết vấn đề gì?
- [ ] **React Router** hoạt động như thế nào?

### ✅ Bạn nên làm được:

- [ ] Tạo component mới
- [ ] Pass props giữa components
- [ ] Dùng useState, useEffect
- [ ] Setup routing với react-router-dom
- [ ] Sử dụng Context Provider

### 💡 Tóm tắt Khái niệm Quan trọng

| Khái niệm     | Giải thích đơn giản                     | Ví dụ                                   |
| ------------- | --------------------------------------- | --------------------------------------- |
| **Component** | Khối UI tái sử dụng                     | `<Button />`, `<ProductCard />`         |
| **Props**     | Data truyền từ cha → con                | `<Button text="Click me" />`            |
| **State**     | Data thay đổi trong component           | `const [count, setCount] = useState(0)` |
| **useEffect** | Side effects (API calls, subscriptions) | Fetch products khi mount                |
| **Context**   | Shared state không cần props drilling   | AuthContext, CartContext                |
| **Hook**      | Function để dùng React features         | useState, useEffect, useContext         |

> ⚠️ **Chưa hiểu?** Đọc lại phần liên quan hoặc xem [Part 9: Lý thuyết Nền tảng](#part-9-lý-thuyết-nền-tảng-foundational-theory)

---

# Part 3: Backend Development with Node.js + Express

> ✅ **Đây là phần nên làm TRƯỚC nếu theo workflow thực tế:**
>
> - Tạo API endpoints trước
> - Test API bằng Postman
> - Sau đó Frontend sẽ integrate
>
> 📌 **Phần này dạy:** Express server, MongoDB models, REST API, JWT authentication, Security

## 3.1 Project Initialization

### Step 1: Initialize Backend Project

```bash
mkdir fashion-website-backend
cd fashion-website-backend

npm init -y

# Install production dependencies
npm install express mongoose dotenv cors cookie-parser bcrypt jsonwebtoken slugify validator express-validator helmet express-rate-limit hpp

# Install dev dependencies
npm install -D nodemon eslint
```

### Step 2: Configure package.json

```json
{
  "name": "fashion-website-backend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "lint": "eslint . --ext .js,.jsx"
  },
  "dependencies": {
    "bcrypt": "^6.0.0",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.2.1",
    "express-rate-limit": "^8.2.1",
    "express-validator": "^7.3.1",
    "helmet": "^8.1.0",
    "hpp": "^0.2.3",
    "jsonwebtoken": "^9.0.3",
    "mongoose": "^9.0.2",
    "slugify": "^1.6.6",
    "validator": "^13.15.26"
  },
  "devDependencies": {
    "eslint": "^9.39.2",
    "nodemon": "^3.1.11"
  }
}
```

### Step 3: Create Environment File (.env)

```env
# MongoDB
MONGO_URI=mongodb://localhost:27017/fashion-store

# JWT
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random
JWT_REFRESH_SECRET=your_super_secret_refresh_key_here_also_long_and_random

# Server
PORT=5000
HOST=0.0.0.0
NODE_ENV=development

# Client URL (for CORS)
CLIENT_URL=http://localhost:3000

# Email (optional - for password reset)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=noreply@fashionstore.com
```

---

## 3.2 Server Entry Point

### Server Setup (`src/server.js`)

> 💡 **KHÁI NIỆM:** File `server.js` là **entry point** (điểm khởi đầu) của toàn bộ backend. Nó chịu trách nhiệm:
>
> 1. Khởi tạo Express app
> 2. Gắn middleware theo đúng thứ tự (THỨ TỰ RẤT QUAN TRỌNG!)
> 3. Kết nối database
> 4. Đăng ký routes
> 5. Xử lý lỗi toàn cục (error handling)
>
> 🎯 **PHỎNG VẤN:** "Middleware trong Express chạy theo thứ tự nào?" → Theo thứ tự `app.use()` được gọi (FIFO). Security middleware PHẢI đặt TRƯỚC routes.

```javascript
// backend/src/server.js

// 💡 IMPORT SYNTAX: Đây là ESM (ES Modules) - cú pháp mới của JavaScript
// Khác với CommonJS: const express = require('express')
// ESM dùng: import express from 'express'
// 📌 GHI NHỚ: Phải thêm "type": "module" trong package.json để dùng ESM
import express from "express";
import dotenv from "dotenv"; // Đọc file .env → process.env
import cors from "cors"; // Cross-Origin Resource Sharing
import cookieParser from "cookie-parser"; // Parse cookies từ request headers
import connectDB from "./config/database.js";
import routes from "./routes/index.js";
import { corsOptions } from "./config/cors.js";
// 💡 Named imports: Chỉ import những gì cần dùng (tree-shaking friendly)
import { helmetConfig, mongoSanitizeConfig, xssCleanConfig, hppConfig } from "./config/security.js";
import { globalErrorHandler } from "./middleware/errorHandler.js";
import { securityAuditMiddleware } from "./utils/securityLogger.js";

// 💡 dotenv.config() đọc file .env ở root folder và gán vào process.env
// Ví dụ: file .env có MONGO_URI=mongodb://... → process.env.MONGO_URI = "mongodb://..."
// ⚡ THỰC TẾ: KHÔNG BAO GIỜ commit file .env lên git! Thêm vào .gitignore
dotenv.config();

// 💡 process.on('uncaughtException'): Bắt lỗi runtime KHÔNG ĐƯỢC try/catch
// Ví dụ: gọi undefined.property hoặc lỗi syntax runtime
// 🔑 TẠI SAO process.exit(1)? Vì sau uncaught exception, app có thể ở trạng thái
// không ổn định (corrupted state) → phải restart hoàn toàn
// ⚡ THỰC TẾ: Production dùng PM2 hoặc Docker sẽ tự restart sau exit
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION! Shutting down...");
  console.error(err.name, err.message);
  process.exit(1); // Exit code 1 = có lỗi (0 = bình thường)
});

// 💡 express() tạo một Application object - trung tâm của mọi thứ
// Tất cả middleware, routes đều được gắn vào object này
const app = express();

// 💡 "trust proxy": Khi deploy sau Nginx/AWS ALB, IP thật của client nằm trong
// header X-Forwarded-For. Nếu không set trust proxy, req.ip sẽ là IP của Nginx
// → Rate limiter sẽ coi TẤT CẢ requests đến từ 1 IP → block tất cả!
// 🎯 PHỎNG VẤN: "Tại sao cần trust proxy?" → Vì reverse proxy (Nginx) đứng giữa
// client và server, nếu không trust proxy sẽ không lấy đúng IP client
app.set("trust proxy", 1); // 1 = trust 1 proxy hop (Nginx)

// ========================
// 📌 MIDDLEWARE PIPELINE (THỨ TỰ CỰC KỲ QUAN TRỌNG!)
// Request đi qua từng middleware theo đúng thứ tự app.use()
// Request → Helmet → CORS → JSON Parser → Cookie Parser → Sanitize → Routes → Error Handler
// ========================

app.use(helmetConfig); // 1️⃣ Security headers (phải đầu tiên!)
app.use(cors(corsOptions)); // 2️⃣ CORS - kiểm tra origin trước khi xử lý
app.use(express.json({ limit: "10kb" })); // 3️⃣ Parse JSON body
// 💡 limit: "10kb" → Chặn payload quá lớn (chống tấn công gigantic JSON)
// 🎯 PHỎNG VẤN: "express.json() làm gì?" → Parse request body từ JSON string
// thành JavaScript object, gán vào req.body
app.use(express.urlencoded({ extended: true, limit: "10kb" })); // Parse form data
// 💡 extended: true → Dùng thư viện 'qs' (hỗ trợ nested objects)
// extended: false → Dùng 'querystring' (chỉ flat key=value)
app.use(cookieParser()); // 4️⃣ Parse cookies → req.cookies
app.use(mongoSanitizeConfig); // 5️⃣ Chống NoSQL Injection
app.use(xssCleanConfig); // 6️⃣ Chống XSS
app.use(hppConfig); // 7️⃣ Chống HTTP Parameter Pollution
app.use(securityAuditMiddleware); // 8️⃣ Log hoạt động đáng ngờ

// Kết nối MongoDB (async nhưng KHÔNG await - server chạy song song)
// 💡 Không await vì không muốn block server startup
connectDB();

// Health check endpoint - dùng để kiểm tra server còn sống không
// ⚡ THỰC TẾ: Load balancer (AWS ALB, Nginx) gọi endpoint này liên tục
// Nếu không response → đánh dấu server "unhealthy" → chuyển traffic sang server khác
app.get("/", (req, res) => {
  res.send("API is running...");
});

// 💡 app.use("/api", routes): Mount tất cả routes dưới prefix /api
// Nghĩa là route "/auth/login" sẽ thành "/api/auth/login"
// 🔑 TẠI SAO prefix /api? Để phân biệt với static files, frontend routes
app.use("/api", routes);

// 💡 404 Handler: Đặt SAU tất cả routes → nếu không match route nào → 404
// 📌 GHI NHỚ: Middleware không có next() sẽ kết thúc request-response cycle
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// 💡 Error Handler: Middleware có 4 tham số (err, req, res, next)
// Express tự nhận biết đây là error handler nhờ 4 tham số
// PHẢI đặt CUỐI CÙNG sau tất cả routes và middleware khác
app.use(globalErrorHandler);

// ========================
// SERVER STARTUP
// ========================
const PORT = process.env.PORT || 5000; // || là "or" - dùng PORT từ env, nếu không có thì 5000
const HOST = process.env.HOST || "0.0.0.0";
// 💡 "0.0.0.0" = lắng nghe trên TẤT CẢ network interfaces
// "127.0.0.1" = chỉ localhost (không truy cập từ máy khác được)
// ⚡ THỰC TẾ: Docker container PHẢI dùng 0.0.0.0

const server = app.listen(PORT, HOST, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV || "development"} mode on http://${HOST}:${PORT}`
  );
});

// 💡 unhandledRejection: Bắt Promise bị reject mà KHÔNG có .catch()
// Khác uncaughtException: cái này chỉ cho Promise
// 🔑 TẠI SAO server.close() trước exit? → Để hoàn thành requests đang xử lý
// (graceful shutdown) thay vì cắt ngang giữa chừng
process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION! Shutting down...");
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
```

> 🎯 **CÂU HỎI PHỎNG VẤN QUAN TRỌNG:**
>
> 1. **"Sự khác nhau giữa uncaughtException và unhandledRejection?"**
>    → `uncaughtException` bắt lỗi synchronous không try/catch. `unhandledRejection` bắt Promise reject không `.catch()`. Cả hai đều nên shutdown server vì state có thể bị corrupt.
> 2. **"Tại sao middleware order quan trọng?"**
>    → Vì Express xử lý middleware theo thứ tự gọi `app.use()`. Security middleware (helmet, cors) phải chạy TRƯỚC routes để bảo vệ. Error handler phải ở CUỐI CÙNG để bắt lỗi từ tất cả middleware/routes phía trên.
> 3. **"express.json() vs express.urlencoded() khác nhau thế nào?"**
>    → `express.json()` parse Content-Type: application/json. `express.urlencoded()` parse Content-Type: application/x-www-form-urlencoded (HTML form submit).
> 4. **"Graceful shutdown là gì?"**
>    → Khi cần tắt server, không tắt ngay mà đợi các request đang xử lý hoàn thành → `server.close()` ngừng nhận request mới, đợi request cũ xong → rồi mới `process.exit()`.
>
> ⚡ **THỰC TẾ DỰ ÁN:** Khi ra ngoài làm việc, bạn sẽ gặp thêm: morgan (HTTP logger), compression (gzip response), express-session, passport.js. Nhưng pattern middleware pipeline luôn giống nhau!

---

## 3.3 Configuration Files

### Database Configuration (`config/database.js`)

> 💡 **KHÁI NIỆM:** Mongoose là **ODM** (Object Document Mapper) cho MongoDB.
> Nó giúp: tạo schema → validate data → chuyển JS objects ↔ MongoDB documents.
> Tương tự Sequelize (ORM cho SQL), nhưng Mongoose dành cho NoSQL (MongoDB).

```javascript
// backend/src/config/database.js
import mongoose from "mongoose";

// 💡 async/await: Cách hiện đại để xử lý bất đồng bộ (asynchronous)
// mongoose.connect() trả về Promise → dùng await để đợi kết nối xong
const connectDB = async () => {
  try {
    // 💡 process.env.MONGO_URI lấy từ file .env
    // Ví dụ: MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/fashion-store
    // 📌 GHI NHỚ: URI chứa password → KHÔNG BAO GIỜ hardcode trong code!
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // 💡 conn.connection.host: Hiển thị host đã kết nối (vd: cluster0.abc123.mongodb.net)
    // Giúp xác nhận đang kết nối đúng database (dev vs production)
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // 💡 process.exit(1): Thoát app nếu không kết nối được DB
    // 🔑 TẠI SAO exit? Vì không có DB thì app không hoạt động được
    // Server chạy nhưng mọi request đều fail → tốt hơn nên exit để restart
    process.exit(1);
  }
};

// 💡 export default: Chỉ export 1 thứ duy nhất từ module
// Import bằng: import connectDB from './config/database.js' (không cần {})
// Khác với named export: export { connectDB } → import { connectDB } from '...'
export default connectDB;
```

> 🎯 **PHỎNG VẤN:**
>
> - **"Mongoose vs MongoDB Driver khác nhau thế nào?"** → MongoDB Driver là low-level, viết query thuần. Mongoose thêm schema validation, middleware (hooks), populate (join), giúp code sạch hơn nhưng chậm hơn một chút.
> - **"Tại sao không dùng SQL (MySQL/PostgreSQL)?"** → Fashion store có data linh hoạt (sản phẩm có nhiều variants, thuộc tính khác nhau). NoSQL (MongoDB) phù hợp vì schema flexible. Tuy nhiên, nếu cần quan hệ phức tạp (banking, ERP) → nên dùng SQL.

### CORS Configuration (`config/cors.js`)

> 💡 **KHÁI NIỆM CORS (Cross-Origin Resource Sharing):**
> Browser có **Same-Origin Policy** - mặc định CHẶN request từ domain khác.
> Ví dụ: Frontend ở `http://localhost:3000` gọi API ở `http://localhost:5000` → BỊ CHẶN!
> CORS cho phép server nói: "Tôi cho phép domain X gọi API của tôi".
>
> 🎯 **PHỎNG VẤN:** "CORS error là gì và cách fix?" → Browser chặn cross-origin request.
> Fix: Server phải gửi header `Access-Control-Allow-Origin` với domain được phép.

```javascript
// backend/src/config/cors.js

// 💡 Danh sách origins (domains) được phép gọi API
// .filter(Boolean) loại bỏ giá trị falsy (undefined, null, "")
// Ví dụ: nếu CLIENT_URL_2 không set trong .env → undefined → bị filter ra
const allowedOrigins = [
  process.env.CLIENT_URL || "http://localhost:3000",
  process.env.CLIENT_URL_2, // Có thể undefined nếu không set
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:5173", // Vite dev server default port
  "http://127.0.0.1:3000",
  "http://127.0.0.1:5173",
].filter(Boolean); // 💡 .filter(Boolean) = .filter(item => Boolean(item)) = loại bỏ falsy values

export const corsOptions = {
  // 💡 origin: Function thay vì string → linh hoạt hơn, có thể check logic
  // Nhận 2 tham số: origin (domain gửi request) và callback
  origin: (origin, callback) => {
    // 💡 !origin = true khi request từ cùng origin (server-to-server, Postman, curl)
    // Các tool test API KHÔNG gửi Origin header → cho phép luôn
    if (!origin) return callback(null, true); // null = no error, true = allowed

    // 💡 Development: Cho phép mọi localhost/127.0.0.1
    // ⚡ THỰC TẾ: Production PHẢI bỏ check này, chỉ cho phép domain chính xác!
    if (process.env.NODE_ENV !== "production") {
      if (origin.includes("localhost") || origin.includes("127.0.0.1")) {
        return callback(null, true);
      }
    }

    // Check chính xác trong whitelist
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`CORS blocked origin: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // 💡 Cho phép gửi cookies cross-origin (QUAN TRỌNG cho refreshToken!)
  // 🔑 TẠI SAO credentials: true? Vì refreshToken lưu trong httpOnly cookie
  // Nếu false → browser KHÔNG gửi cookie → refreshToken flow hỏng
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  // 💡 allowedHeaders: Các headers mà client được phép gửi
  allowedHeaders: [
    "Content-Type", // Loại data (application/json)
    "Authorization", // Bearer token
    "X-Requested-With", // Dấu hiệu AJAX request
    "Accept",
    "Origin",
    "X-CSRF-Token", // Chống CSRF attack
    "X-Cart-Session", // Custom header cho guest cart
  ],
  // 💡 exposedHeaders: Headers mà browser JavaScript ĐƯỢC PHÉP đọc từ response
  // Mặc định browser chỉ cho đọc 6 CORS-safelisted headers
  exposedHeaders: ["X-Total-Count", "X-Page-Count"], // Cho pagination
  maxAge: 86400, // 💡 Cache preflight response 24h (giảm OPTIONS requests)
  // 🔑 TẠI SAO maxAge? Mỗi cross-origin request, browser gửi OPTIONS trước (preflight)
  // maxAge cache kết quả → giảm latency
  optionsSuccessStatus: 200, // Một số browsers cũ lỗi với status 204
};
```

> 🎯 **CÂU HỎI PHỎNG VẤN:**
>
> 1. **"Preflight request là gì?"** → Browser gửi OPTIONS request trước request thật để hỏi server "tôi có được phép gọi không?". Xảy ra với: custom headers, methods khác GET/POST, Content-Type khác form-urlencoded.
> 2. **"credentials: true ảnh hưởng gì?"** → Server phải gửi `Access-Control-Allow-Credentials: true`. Frontend cũng phải set `withCredentials: true` trong axios/fetch. Và `Access-Control-Allow-Origin` KHÔNG ĐƯỢC dùng `*` (wildcard).
> 3. **"Same-Origin Policy bảo vệ ai?"** → Bảo vệ USER, không phải server. Ngăn website xấu (evil.com) gọi API bank.com lấy data của user đang login.

### Security Configuration (`config/security.js`)

> 💡 **TỔNG QUAN SECURITY:** Bảo mật backend là LỚP NHIỀU TẦNG (defense in depth):
>
> - **Helmet**: HTTP security headers (chống XSS, clickjacking, sniffing)
> - **Rate Limiting**: Giới hạn requests (chống DDoS, brute-force)
> - **NoSQL Sanitization**: Chống injection attacks
> - **HPP**: Chống parameter pollution
>
> 📌 **GHI NHỚ:** KHÔNG có giải pháp bảo mật nào là đủ một mình. Phải kết hợp nhiều lớp!

```javascript
// backend/src/config/security.js
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import hpp from "hpp";

// ============================================================
// 1️⃣ HELMET - HTTP Security Headers
// ============================================================
// 💡 Helmet tự động thêm ~15 HTTP headers để bảo vệ app
// Ví dụ: X-Content-Type-Options: nosniff, X-Frame-Options: DENY, etc.
// 🔑 TẠI SAO dùng Helmet thay vì tự set headers?
// → Helmet được maintain bởi community, tự update theo best practices mới
export const helmetConfig = helmet({
  // 💡 CSP (Content Security Policy): QUAN TRỌNG NHẤT trong security headers
  // Quy định browser CHỈ ĐƯỢC tải resources từ nguồn nào
  // → Chống XSS vì attacker inject <script src="evil.js"> sẽ bị block!
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"], // Mặc định: chỉ từ cùng domain
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      // 💡 'unsafe-inline' cho CSS vì nhiều library dùng inline styles
      // ⚡ THỰC TẾ: Nên tránh 'unsafe-inline' cho scriptSrc (rất nguy hiểm!)
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"], // data: cho base64 images
      scriptSrc: ["'self'"], // JS CHỈ từ cùng domain (an toàn nhất)
      connectSrc: ["'self'"], // API calls chỉ đến cùng domain
    },
  },
  crossOriginEmbedderPolicy: false,
  // 💡 HSTS (HTTP Strict Transport Security):
  // Nói với browser: "Luôn dùng HTTPS, KHÔNG BAO GIỜ dùng HTTP"
  // Sau khi browser nhận header này 1 lần → tự chuyển HTTP → HTTPS
  hsts: {
    maxAge: 31536000, // Nhớ trong 1 năm (365 * 24 * 60 * 60)
    includeSubDomains: true, // Áp dụng cả *.fashionhbk.shop
    preload: true, // Đăng ký vào HSTS Preload List của Chrome
    // 💡 preload: Browser có sẵn danh sách HSTS → lần đầu truy cập cũng dùng HTTPS
  },
});

// ============================================================
// 2️⃣ RATE LIMITING - Giới hạn số requests
// ============================================================
// 💡 KHÁI NIỆM: Rate limiting = "Cho phép tối đa X requests trong Y thời gian từ 1 IP"
// 🔑 TẠI SAO cần? Chống:
// - DDoS: Flood server với hàng triệu requests
// - Brute-force: Thử password liên tục
// - Scraping: Bot thu thập data
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Window: 15 phút (tính bằng milliseconds)
  max: 10000, // Max 10000 requests/15 phút (dev setting, production nên ~100-200)
  message: {
    success: false,
    message: "Too many requests, please try again later",
  },
  standardHeaders: true, // Gửi RateLimit-Limit, RateLimit-Remaining headers
  legacyHeaders: false, // Không gửi X-RateLimit-* (chuẩn cũ)
});

// 💡 Rate limit RIÊNG cho auth: Nghiêm ngặt hơn vì auth là target #1 của brute-force
export const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 giờ
  max: 10000, // Dev: 10000 (⚡ Production nên là 5-10 lần/giờ!)
  message: {
    success: false,
    message: "Too many login attempts, please try again later",
  },
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  // 💡 skipSuccessfulRequests: Chỉ ĐẾM requests THẤT BẠI
  // → User login đúng không bị đếm → chỉ chặn khi thử sai nhiều lần
  // 🔑 TẠI SAO? Vì mục đích chặn brute-force, không phải chặn user bình thường
});

// ============================================================
// 3️⃣ NoSQL INJECTION PROTECTION
// ============================================================
// 💡 KHÁI NIỆM NoSQL Injection:
// Attacker gửi: { "email": {"$gt": ""}, "password": {"$gt": ""} }
// MongoDB hiểu: tìm user có email > "" VÀ password > "" → MATCH TẤT CẢ USERS!
// → Login được mà không cần biết email/password!
//
// 🎯 PHỎNG VẤN: "NoSQL Injection là gì? Cách phòng chống?"
// → Attacker lợi dụng MongoDB operators ($gt, $ne, $regex) trong input
// → Phòng chống: sanitize input (loại bỏ $, . trong keys), validate data types
const sanitizeObject = (obj) => {
  if (obj === null || typeof obj !== "object") return obj;
  for (const key in obj) {
    // 💡 Object.prototype.hasOwnProperty.call(obj, key):
    // An toàn hơn obj.hasOwnProperty(key) vì obj có thể không kế thừa Object.prototype
    // (ví dụ: Object.create(null) tạo object không có prototype)
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (key.includes("$") || key.includes(".")) {
        // Thay $ và . bằng _ → vô hiệu hóa MongoDB operators
        const sanitizedKey = key.replace(/\$|\./g, "_");
        obj[sanitizedKey] = obj[key];
        delete obj[key];
      }
      // 💡 Đệ quy (recursion): Sanitize cả nested objects
      // Vì attacker có thể giấu operator sâu: { "a": { "b": {"$gt": ""} } }
      if (typeof obj[key] === "object" && obj[key] !== null) {
        sanitizeObject(obj[key]);
      }
    }
  }
  return obj;
};

// Middleware: Sanitize tất cả dữ liệu đầu vào từ client
export const mongoSanitizeConfig = (req, res, next) => {
  if (req.body) sanitizeObject(req.body); // POST/PUT data
  if (req.query) sanitizeObject(req.query); // URL query: ?key=value
  if (req.params) sanitizeObject(req.params); // URL params: /users/:id
  next();
};

// 💡 XSS Clean: Placeholder - có thể thêm library như xss-clean
export const xssCleanConfig = (req, res, next) => next();

// ============================================================
// 4️⃣ HPP - HTTP Parameter Pollution
// ============================================================
// 💡 Chống tấn công: ?sort=price&sort=name (gửi sort 2 lần)
// Bình thường Express parse thành array: req.query.sort = ['price', 'name']
// → Có thể gây lỗi nếu code expect string
// HPP giữ lại giá trị CUỐI CÙNG: req.query.sort = 'name'
export const hppConfig = hpp();
```

> 🎯 **CÂU HỎI PHỎNG VẤN BẢO MẬT (RẤT HAY HỎI):**
>
> 1. **"OWASP Top 10 là gì?"** → Danh sách 10 lỗ hổng web phổ biến nhất. Trong project này đã phòng chống: Injection (sanitize), XSS (helmet CSP), Broken Auth (bcrypt + JWT), Security Misconfiguration (helmet headers).
> 2. **"Helmet bảo vệ khỏi những tấn công nào?"** → XSS (CSP header), Clickjacking (X-Frame-Options), MIME sniffing (X-Content-Type-Options), Man-in-the-middle (HSTS).
> 3. **"Rate limiting có thể bypass không?"** → Có! Dùng nhiều IP (botnet), proxy. Cần kết hợp: CAPTCHA, fingerprinting, WAF (Web Application Firewall).
> 4. **"SQL Injection vs NoSQL Injection?"** → SQL: `' OR 1=1 --`. NoSQL: `{"$gt": ""}`. Cùng concept (inject query logic) nhưng syntax khác. Phòng chống tương tự: sanitize + parameterized queries.
>
> ⚡ **THỰC TẾ:** Khi deploy production, PHẢI giảm rate limit (authLimiter max: 5-10), thêm WAF (Cloudflare, AWS WAF), enable full HSTS, setup CSP report-uri để nhận báo cáo vi phạm CSP.

---

## 3.4 Models

> 💡 **KHÁI NIỆM MODEL trong MVC:**
> Model là lớp định nghĩa **cấu trúc data** và **business logic** liên quan đến data.
> Trong Mongoose: Model = Schema (cấu trúc) + Middleware (hooks) + Methods (logic) + Statics (class methods)
>
> 🎯 **PHỎNG VẤN:** "Schema vs Model khác nhau thế nào?"
> → **Schema** = bản vẽ (blueprint) định nghĩa fields, types, validation
> → **Model** = class được biên dịch từ Schema, dùng để CRUD documents. `mongoose.model('User', userSchema)` tạo Model từ Schema.

### User Model (`models/User.js`)

> 💡 User Model là **phức tạp nhất** trong project vì chứa:
> authentication (password hashing), authorization (roles), data transformation (toJSON), virtual fields.
> Đây là phần BẮT BUỘC nắm vững khi phỏng vấn backend!

```javascript
// backend/src/models/User.js
import mongoose from "mongoose";
import bcrypt from "bcrypt";
// 💡 bcrypt: Thư viện hash password phổ biến nhất cho Node.js
// 🔑 TẠI SAO bcrypt không dùng SHA256/MD5?
// → SHA256/MD5 là hash NHANH (được thiết kế để nhanh) → brute-force dễ
// → bcrypt là hash CHẬM CÓ CHỦ ĐÍCH (cost factor) → brute-force cực khó
// → bcrypt tự tạo salt ngẫu nhiên → 2 password giống nhau, hash khác nhau!
// 🎯 PHỎNG VẤN: "Tại sao dùng bcrypt thay vì SHA256?"
// → bcrypt có: adaptive cost factor (tăng theo thời gian), built-in salt, chống rainbow table

// ============================================================
// SCHEMA DEFINITION
// ============================================================
// 💡 Schema = Bản thiết kế cho documents trong MongoDB collection
// Mỗi field có: type (kiểu data), validators (validation rules), options
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      // 💡 required: [Boolean, errorMessage] - cú pháp Mongoose
      // Nếu không cung cấp giá trị → Mongoose throw ValidationError với message này
      trim: true,
      // 💡 trim: true → tự động " Huy " → "Huy" (xóa khoảng trắng đầu/cuối)
      // 📌 GHI NHỚ: Luôn dùng trim cho String fields để data nhất quán
      maxlength: [50, "First name cannot exceed 50 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      maxlength: [50, "Last name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      // 💡 unique: true → Tạo MongoDB unique index
      // ⚠️ LƯU Ý: unique KHÔNG phải validator! Nó tạo database-level constraint
      // Nếu trùng → MongoDB throw error code 11000, KHÔNG phải Mongoose ValidationError
      // 🔑 TẠI SAO phải handle lỗi 11000 riêng? Vì nó bypass Mongoose validation layer
      lowercase: true,
      // 💡 lowercase: true → "HUY@Email.COM" → "huy@email.com"
      // Đảm bảo email case-insensitive (người dùng hay gõ HOA/thường lẫn lộn)
      trim: true,
      // 💡 Regex validation email: Kiểm tra format @domain.extension
      // ⚡ THỰC TẾ: Regex email không bao giờ 100% chính xác
      // Best practice: Validate format cơ bản + gửi email xác nhận thật
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
      select: false,
      // 💡 select: false → QUAN TRỌNG NHẤT trong bảo mật Model!
      // Khi query: User.find() → password KHÔNG có trong kết quả
      // Phải dùng: User.findOne({ email }).select('+password') → MỚI CÓ password
      // 🔑 TẠI SAO? Tránh vô tình trả password về client
      // Ví dụ: API /api/profile → nếu quên delete password → LỘ hash!!
      // 🎯 PHỎNG VẤN: "Làm sao ẩn field nhạy cảm trong Mongoose?"
      // → Cách 1: select: false (phải +field để lấy)
      // → Cách 2: toJSON transform (xóa khi serialize)
      // → Best practice: DÙNG CẢ HAI (defense in depth)
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      // 💡 enum: Chỉ cho phép giá trị trong danh sách
      // Nếu gán role = "superadmin" → Mongoose throw ValidationError
      // 📌 GHI NHỚ: enum validator CHỈ hoạt động khi save/create, KHÔNG check khi update
      // → Phải dùng { runValidators: true } trong findOneAndUpdate
      default: "user",
      // 💡 default: "user" → Nếu không truyền role, tự gán "user"
      // ⚡ THỰC TẾ: KHÔNG BAO GIỜ cho phép client gửi role = "admin"!
      // Controller phải ignore hoặc filter role từ req.body
    },
    isActive: {
      type: Boolean,
      default: true,
      // 💡 Soft delete pattern: Thay vì xóa user khỏi DB, set isActive = false
      // 🔑 TẠI SAO không hard delete?
      // → Giữ lại data cho audit trail, order history, analytics
      // → Có thể recover account nếu user yêu cầu
      // → Foreign key references (orders, reviews) không bị broken
    },
    avatar: {
      type: String,
      default: null,
    },
    phone: {
      type: String,
      default: null,
      // 💡 Phone là String, KHÔNG phải Number!
      // 🔑 TẠI SAO? Vì phone có thể bắt đầu bằng 0 (0912...), dấu + (+84912...)
      // Number sẽ cắt số 0 đầu và không chứa được ký tự đặc biệt
    },
    // 💡 addresses là ARRAY of subdocuments (embedded documents)
    // Mỗi user có thể có nhiều địa chỉ giao hàng
    // 🔑 TẠI SAO embed thay vì reference (tạo Address model riêng)?
    // → Addresses luôn thuộc về 1 user, không share giữa users
    // → Query nhanh hơn (không cần populate/join)
    // → Thao tác atomic (update address + user trong 1 operation)
    // 🎯 PHỎNG VẤN: "Khi nào embed vs reference trong MongoDB?"
    // → Embed: data thuộc về parent, query chung với parent, size nhỏ
    // → Reference: data share giữa nhiều documents, size lớn, query riêng
    addresses: [
      {
        fullName: { type: String, required: true, trim: true },
        phone: { type: String, required: true, trim: true },
        address: { type: String, required: true, trim: true },
        ward: { type: String, trim: true },
        district: { type: String, trim: true },
        city: { type: String, required: true, trim: true },
        isDefault: { type: Boolean, default: false },
      },
    ],
    refreshToken: {
      type: String,
      select: false, // Giống password, refreshToken không bao giờ trả về client
    },
    // 💡 Password reset flow:
    // 1. User request reset → tạo random token → hash → lưu vào passwordResetToken
    // 2. Gửi token (chưa hash) qua email
    // 3. User click link → gửi token → server hash và compare
    // 4. Nếu match VÀ chưa hết hạn → cho đổi password
    passwordResetToken: { type: String, select: false },
    passwordResetExpires: { type: Date, select: false },
    emailVerified: { type: Boolean, default: false },
    emailVerificationToken: { type: String, select: false },
    emailVerificationExpires: { type: Date, select: false },
    // 💡 preferences: Nested object (khác với subdocument - không có _id)
    preferences: {
      newsletter: { type: Boolean, default: true },
      notifications: { type: Boolean, default: true },
      language: { type: String, default: "en" },
      currency: { type: String, default: "USD" },
    },
    // 💡 wishlist: Array of references (ObjectId trỏ đến Product)
    // Dùng ref: "Product" → có thể .populate('wishlist.product') để lấy full product data
    wishlist: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        addedAt: { type: Date, default: Date.now },
        // 💡 Date.now (không có ()) → truyền FUNCTION reference, gọi mỗi khi tạo document
        // Date.now() (có ()) → truyền GIÁ TRỊ tại thời điểm define schema → tất cả documents cùng 1 thời gian!
      },
    ],
  },
  { timestamps: true }
  // 💡 timestamps: true → Mongoose tự thêm 2 fields:
  // createdAt: Date (khi tạo document)
  // updatedAt: Date (khi save/update document)
  // 📌 GHI NHỚ: KHÔNG cần khai báo thủ công, Mongoose quản lý hoàn toàn!
);

// ============================================================
// VIRTUAL FIELDS
// ============================================================
// 💡 Virtual = field "ảo" - được TÍNH TOÁN, KHÔNG LƯU trong database
// Giống computed property trong Vue/React
// 🔑 TẠI SAO không lưu fullName trong DB?
// → Nếu lưu: phải update fullName mỗi khi đổi firstName/lastName (dễ quên → data inconsistent)
// → Virtual: luôn chính xác vì tính toán real-time từ source of truth
userSchema.virtual("fullName").get(function () {
  // 💡 Template literal: `${variable}` thay vì "string" + variable
  // ⚠️ Phải dùng regular function (không dùng arrow function!)
  // Vì arrow function không có `this` riêng → `this` sẽ là undefined/window
  return `${this.firstName} ${this.lastName}`;
});

// ============================================================
// MIDDLEWARE (HOOKS) - Pre/Post save, validate, remove
// ============================================================
// 💡 PRE-SAVE: Chạy TRƯỚC khi document được lưu vào DB
// Common use cases: hash password, validate business rules, normalize data
// 📌 GHI NHỚ: pre('save') KHÔNG chạy khi dùng findOneAndUpdate()!
// Phải dùng pre('findOneAndUpdate') hoặc gọi .save() thay vì update
userSchema.pre("save", async function () {
  // 💡 this.isModified('password'): Check field cụ thể đã thay đổi chưa
  // 🔑 TẠI SAO check isModified?
  // → Khi update email/phone → save() chạy → pre-save chạy
  // → Nếu không check → hash lại password (hash of hash) → password HỎNG!
  if (!this.isModified("password")) return;

  // 💡 Salt: Chuỗi ngẫu nhiên thêm vào password TRƯỚC khi hash
  // "password123" + "abc123salt" → hash("password123abc123salt")
  // → 2 users cùng password "123456" → 2 khác nhau vì salt khác
  // 🔑 Cost factor 12: Mỗi +1 = chậm gấp đôi. 10 ~65ms, 12 ~250ms, 14 ~1s
  // ⚡ THỰC TẾ: 12 là balance tốt. 10 cho dev, 12-14 cho production
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  // 💡 Sau dòng này: this.password = "$2b$12$..." (bcrypt hash format)
  // Format: $2b$ (algorithm) + 12$ (cost) + 22 chars (salt) + 31 chars (hash)
});

// ============================================================
// INSTANCE METHODS
// ============================================================
// 💡 Instance method: Gắn vào DOCUMENT (instance), gọi trên từng document
// Khác với Static method: gắn vào MODEL (class), gọi trên Model
// Ví dụ: user.comparePassword() vs User.findByEmail()
userSchema.methods.comparePassword = async function (candidatePassword) {
  // 💡 bcrypt.compare() tự extract salt từ hash rồi hash candidatePassword
  // và so sánh. KHÔNG CẦN lưu salt riêng!
  // 🔑 TẠI SAO không dùng === so sánh?
  // → Vì password đã hash, phải dùng bcrypt.compare để hash input rồi compare
  return bcrypt.compare(candidatePassword, this.password);
};

// 💡 toJSON: Gọi tự động khi JSON.stringify(user) hoặc res.json(user)
// Loại bỏ data nhạy cảm trước khi gửi response
// 🔑 TẠI SAO cần toJSON khi đã có select: false?
// → select: false chỉ ẩn khi QUERY. Nhưng nếu dùng .select('+password')
//   rồi res.json(user) → password vẫn lộ! toJSON là lớp bảo vệ cuối cùng
userSchema.methods.toJSON = function () {
  const user = this.toObject(); // Chuyển Mongoose document → plain JS object
  // 💡 .toObject() quan trọng! Mongoose document có nhiều internal properties
  // Phải chuyển sang plain object mới delete được
  delete user.password;
  delete user.refreshToken;
  delete user.passwordResetToken;
  delete user.passwordResetExpires;
  delete user.emailVerificationToken;
  delete user.emailVerificationExpires;
  delete user.__v; // 💡 __v: Version key của Mongoose (internal, không cần gửi client)
  return user;
};

// 💡 mongoose.model('User', userSchema):
// - 'User' → MongoDB sẽ tạo collection tên "users" (lowercase + plural tự động)
// - Trả về Model class → dùng để: User.find(), User.create(), User.findById(), etc.
const User = mongoose.model("User", userSchema);
export default User;
```

> 🎯 **CÂU HỎI PHỎNG VẤN VỀ USER MODEL (RẤT QUAN TRỌNG!):**
>
> 1. **"Tại sao dùng bcrypt thay vì argon2?"** → bcrypt phổ biến hơn, mature, nhiều support. argon2 mới hơn, mạnh hơn (chống GPU attack tốt hơn), là winner của Password Hashing Competition 2015. Cả hai đều tốt, argon2 "đúng chuẩn" hơn nhưng bcrypt "thực tế" hơn.
> 2. **"select: false vs toJSON - dùng cái nào?"** → DÙNG CẢ HAI! select: false ẩn ở query level. toJSON ẩn ở serialization level. Defense in depth = nhiều lớp bảo vệ.
> 3. **"Virtual field có được lưu vào DB không?"** → KHÔNG. Tính toán mỗi khi truy cập. Để include trong toJSON/toObject, cần set: `{ toJSON: { virtuals: true }, toObject: { virtuals: true } }` trong schema options.
> 4. **"pre('save') có chạy khi findOneAndUpdate không?"** → KHÔNG! Đây là gotcha phổ biến. Phải dùng pre('findOneAndUpdate') hoặc find → modify → .save().
> 5. **"Embedded vs Referenced documents?"** → Embed khi data thuộc về parent (addresses). Reference khi data share giữa parents (products trong orders).
>
> ⚡ **THỰC TẾ DỰ ÁN:** Luôn test từng method riêng (unit test). Đặc biệt: comparePassword, pre-save hook (test hash lại, test isModified). Khi join team mới, đọc Models TRƯỚC vì nó là nền tảng hiểu toàn bộ business logic.

### Cart Model (`models/Cart.js`)

> 💡 **PATTERN:** Cart Model dùng kỹ thuật **Subdocument Schema** - tạo schema riêng cho items
> rồi nhúng vào cart schema. Đây là pattern phổ biến cho arrays of complex objects.
> Cart cũng hỗ trợ cả **authenticated users** (có user ID) và **guest users** (có sessionId).

```javascript
// backend/src/models/Cart.js
import mongoose from "mongoose";

// 💡 SUBDOCUMENT SCHEMA: Schema riêng cho từng item trong cart
// 🔑 TẠI SAO tách schema riêng thay vì inline?
// → Code sạch hơn, tái sử dụng được, có thể thêm methods riêng cho subdocument
// → Mỗi subdocument tự có _id riêng → dễ identify và thao tác từng item
const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId, // 💡 ObjectId = reference đến Product collection
    ref: "Product", // 💡 ref cho phép .populate('product') lấy full product data
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, "Quantity must be at least 1"], // 💡 min validator cho Number
    default: 1,
  },
  size: { type: String, default: null },
  color: { type: String, default: null },
  price: { type: Number, required: true },
  // 💡 Lưu price TẠI THỜI ĐIỂM thêm vào cart
  // 🔑 TẠI SAO lưu price thay vì lấy từ Product?
  // → Product price có thể thay đổi (sale, adjust) SAU KHI user thêm vào cart
  // → Snapshot price đảm bảo user trả giá đúng lúc thêm
  // ⚡ THỰC TẾ: Nhiều ecommerce lớn (Amazon, Shopee) vẫn re-validate price khi checkout
});

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null, // null cho guest cart
    },
    sessionId: {
      type: String,
      default: null,
      index: true,
      // 💡 index: true → Tạo MongoDB index cho field này
      // 🔑 TẠI SAO index? Vì query Cart.findOne({ sessionId }) rất thường xuyên
      // Không có index → MongoDB scan TOÀN BỘ documents (O(n)) → CHẬM
      // Có index → O(log n) → NHANH (như tra mục lục sách)
      // 🎯 PHỎNG VẤN: "Index là gì? Khi nào nên dùng?"
      // → Index = cấu trúc dữ liệu giúp tìm kiếm nhanh
      // → Dùng cho fields thường query, filter, sort
      // → KHÔNG dùng cho fields ít query (tốn memory, chậm write)
    },
    items: [cartItemSchema], // 💡 Array of subdocuments
    totalItems: { type: Number, default: 0 },
    totalPrice: { type: Number, default: 0 },
    coupon: { type: String, default: null },
    discount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// 💡 PRE-VALIDATE hook: Chạy TRƯỚC validation
// Thứ tự hooks: pre('validate') → pre('save') → post('save')
// 🔑 TẠI SAO dùng pre-validate thay vì custom validator?
// → Logic liên quan đến NHIỀU fields cùng lúc (user OR sessionId)
// → Custom validator chỉ cho 1 field
cartSchema.pre("validate", function (next) {
  if (!this.user && !this.sessionId) {
    next(new Error("Cart must have either a user or sessionId"));
    // 💡 next(error): Báo Mongoose dừng lại, không save, trả error
  } else {
    next(); // 💡 next() không có error: Tiếp tục pipeline
    // 📌 GHI NHỚ: Mongoose 9 cho phép async pre hooks KHÔNG cần next()
    // Nhưng pre-validate thường vẫn dùng next() vì simple sync logic
  }
});

// 💡 PRE-SAVE: Tự động tính totalItems và totalPrice TRƯỚC KHI lưu
// 📌 GHI NHỚ: Đây gọi là "computed fields at save time" pattern
// Data trong DB luôn consistent vì tính toán mỗi lần save
cartSchema.pre("save", function (next) {
  // 💡 .reduce(): Method phổ biến nhất để tính tổng array
  // reduce((accumulator, currentItem) => accumulator + something, initialValue)
  this.totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
  this.totalPrice = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  next();
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
```

> 🎯 **PHỎNG VẤN:**
>
> - **"Guest cart merge khi login hoạt động thế nào?"** → Guest có sessionId cart. Login → tìm cart theo sessionId → chuyển items sang user cart → xóa guest cart. Xử lý conflict: item trùng → cộng quantity.
> - **"Tại sao totalPrice tính ở pre-save, không lấy từ Product?"** → Snapshot price tại thời điểm add to cart. Nếu product thay đổi giá, user không bị ảnh hưởng (UX tốt hơn). Checkout sẽ re-validate.

---

## 3.5 Services

### Token Service (`services/tokenService.js`)

> 💡 **KHÁI NIỆM JWT (JSON Web Token):**
> JWT là chuẩn xác thực stateless - server KHÔNG lưu session, mọi thông tin nằm trong token.
> Cấu trúc: `header.payload.signature` (3 phần ngăn bởi dấu chấm)
>
> - **Header**: Algorithm + Token type ({"alg": "HS256", "typ": "JWT"})
> - **Payload**: Data (user id, email, role, exp time) - ai cũng đọc được! (base64 decode)
> - **Signature**: HMAC-SHA256(header + payload, SECRET) - xác minh token không bị sửa
>
> 📌 **GHI NHỚ QUAN TRỌNG:** JWT payload KHÔNG mã hóa! Ai cũng decode được. Chỉ SIGNATURE đảm bảo data không bị sửa. KHÔNG BAO GIỜ đặt password/credit card trong payload!
>
> 🎯 **PHỎNG VẤN:** "JWT vs Session-based Auth?"
> → **JWT**: Stateless (server không lưu gì), scalable (nhiều server dùng chung secret), phù hợp microservices, mobile.
> → **Session**: Stateful (lưu session trên server/Redis), có thể invalidate ngay lập tức, phù hợp monolith.

```javascript
// backend/src/services/tokenService.js
import jwt from "jsonwebtoken";

// 💡 ACCESS TOKEN: Token "ngắn hạn" để xác thực mỗi API request
// 15 phút = balance giữa bảo mật (ngắn = an toàn) và UX (dài = ít phải refresh)
// 🔑 TẠI SAO 15 phút? Nếu bị đánh cắp (XSS), attacker chỉ dùng được 15 phút
const ACCESS_TOKEN_EXPIRY = "15m";

// 💡 REFRESH TOKEN: Token "dài hạn" để lấy access token mới
// Lưu trong httpOnly cookie = JavaScript KHÔNG đọc được = an toàn hơn localStorage
// 🔑 TẠI SAO tách access/refresh thay vì 1 token dài hạn?
// → Access token gửi trong header (dễ bị XSS đánh cắp từ localStorage)
// → Refresh token trong httpOnly cookie (chỉ bị CSRF, nhưng CSRF dễ phòng hơn XSS)
// → Nếu access token bị lộ → chỉ 15 phút. Refresh token an toàn hơn trong cookie.
const REFRESH_TOKEN_EXPIRY = "7d";

// 💡 jwt.sign(payload, secret, options): Tạo JWT token
// payload: Data muốn encode (user info)
// secret: Khóa bí mật để tạo signature (KHÔNG BAO GIỜ lộ ra ngoài!)
// options: { expiresIn } tự thêm field "exp" vào payload
export const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRY,
  });
};

export const generateRefreshToken = (payload) => {
  // 💡 JWT_REFRESH_SECRET KHÁC JWT_SECRET!
  // 🔑 TẠI SAO 2 secrets khác nhau?
  // → Nếu dùng chung secret: ai có access token có thể tạo refresh token
  // → 2 secrets riêng biệt: tách biệt hoàn toàn 2 loại token
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRY,
  });
};

// 💡 jwt.verify(token, secret): Xác thực token
// - Decode token
// - Check signature bằng secret
// - Check expiration time
// Nếu sai/hết hạn → THROW ERROR (JsonWebTokenError / TokenExpiredError)
export const verifyAccessToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

export const verifyRefreshToken = (token) => {
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
};

// 💡 generateTokenPair: Tạo cả 2 token cùng lúc
// Gọi khi: register, login, refresh token
export const generateTokenPair = (user) => {
  const payload = {
    id: user._id, // MongoDB ObjectId
    email: user.email,
    role: user.role, // Cho authorization (phân quyền)
  };
  // ⚠️ KHÔNG đặt password, refreshToken, hay data nhạy cảm vào payload!
  // Vì payload chỉ base64 encode, ai cũng decode được

  return {
    accessToken: generateAccessToken(payload),
    refreshToken: generateRefreshToken(payload),
  };
};
```

> 🎯 **CÂU HỎI PHỎNG VẤN VỀ JWT (CỰC KỲ HAY HỎI!):**
>
> 1. **"JWT có thể bị revoke (thu hồi) không?"** → JWT stateless nên KHÔNG THỂ revoke trực tiếp. Workaround: dùng blacklist (lưu token đã revoke vào Redis), hoặc short expiry (15m) + refresh token rotation.
> 2. **"Access token lưu ở đâu?"** → localStorage (dễ bị XSS), sessionStorage (mất khi đóng tab), memory/state (mất khi refresh page). Mỗi cách đều có trade-off. Project này lưu trong memory (React state).
> 3. **"Refresh token rotation là gì?"** → Mỗi lần dùng refresh token để lấy access token mới → tạo refresh token MỚI → invalidate cái cũ. Nếu ai đó dùng refresh token cũ (đã bị đánh cắp) → phát hiện được!
> 4. **"Tại sao không lưu access token trong cookie?"** → Có thể! Nhưng cookie gửi tự động với mọi request → dễ bị CSRF. Lưu trong header Authorization → phải set thủ công → CSRF không attack được.

---

## 3.6 Middleware

> 💡 **KHÁI NIỆM MIDDLEWARE:**
> Middleware = hàm "trung gian" nằm GIỮA request và response.
> Pattern: `(req, res, next) => { /* xử lý */ next(); }`
>
> - `next()` = chuyển sang middleware tiếp theo
> - `next(error)` = nhảy đến error handler
> - Không gọi next() và không res.send() = request bị TREO (timeout)!
>
> 🎯 **PHỎNG VẤN:** "Middleware hoạt động thế nào?" → Middleware tạo thành chain (chuỗi).
> Request đi qua từng middleware theo thứ tự. Mỗi middleware có thể: xử lý & gọi next(),
> hoặc dừng lại & gửi response, hoặc pass error cho error handler.

### Error Handler (`middleware/errorHandler.js`)

> 💡 **PATTERN: Centralized Error Handling**
> Thay vì try/catch + response trong MỖI controller, ta tạo 1 error handler TRUNG TÂM.
> Controllers chỉ throw error → middleware cuối cùng bắt và xử lý.
> Đây là **best practice #1** trong Express!

```javascript
// backend/src/middleware/errorHandler.js

// 💡 CUSTOM ERROR CLASS kế thừa built-in Error
// 🔑 TẠI SAO không dùng Error trực tiếp?
// → Error chỉ có message. AppError thêm: statusCode, isOperational
// → Giúp phân biệt loại lỗi → response phù hợp
// 🎯 PHỎNG VẤN: "Kế thừa class trong JavaScript?"
// → class Child extends Parent { constructor() { super(); } }
// → super() PHẢI gọi TRƯỚC khi dùng this trong constructor
export class AppError extends Error {
  constructor(message, statusCode) {
    super(message); // 💡 Gọi Error constructor → set this.message
    this.statusCode = statusCode;
    // 💡 Template literal + ternary operator:
    // `${statusCode}` chuyển number → string
    // .startsWith("4") → "404" → true → "fail" | "500" → "5..." → "error"
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    // 💡 isOperational = true: Lỗi "dự kiến" (email trùng, password sai)
    // Bug code sẽ có isOperational = undefined → hiển message chung, log chi tiết

    // 💡 captureStackTrace: Lưu vị trí lỗi xảy ra nhưng LOẠI BỎ AppError constructor
    // khỏi stack → stack trace bắt đầu từ chỗ GỌI new AppError() → dễ debug hơn
    Error.captureStackTrace(this, this.constructor);
  }
}

// ============================================================
// ERROR HANDLERS CHO TỪNG LOẠI LỖI MongoDB/JWT
// ============================================================
// 💡 Pattern: Chuyển lỗi kỹ thuật → AppError với message user-friendly
// MongoDB CastError: ObjectId không hợp lệ (vd: /api/products/abc123)
const handleCastErrorDB = (err) => new AppError(`Invalid ${err.path}: ${err.value}`, 400);

// 💡 MongoDB error code 11000: Duplicate key (unique constraint violation)
// Xảy ra khi: tạo user với email đã tồn tại
const handleDuplicateFieldsDB = (err) => {
  const field = Object.keys(err.keyValue)[0];
  // 💡 Object.keys(obj)[0]: Lấy tên field đầu tiên bị duplicate
  return new AppError(`${field} already exists. Please use another value.`, 400);
};

// 💡 Mongoose ValidationError: Nhiều field validation fail cùng lúc
// Gom tất cả error messages lại
const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  // 💡 Object.values() lấy các values → .map() lấy message từ mỗi error
  return new AppError(`Invalid input data: ${errors.join(". ")}`, 400);
};

const handleJWTError = () => new AppError("Invalid token. Please log in again.", 401);
const handleJWTExpiredError = () =>
  new AppError("Your session has expired. Please log in again.", 401);

// ============================================================
// DEVELOPMENT vs PRODUCTION ERROR RESPONSE
// ============================================================
// 💡 Development: HIỂN THỊ TẤT CẢ để debug (stack trace, error object)
// Production: ẨN chi tiết kỹ thuật (attacker có thể lợi dụng!)
// 🎯 PHỎNG VẤN: "Tại sao ẩn error details trong production?"
// → Stack trace lộ file paths, library versions → attacker khai thác vulnerabilities
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    success: false,
    error: err,
    message: err.message,
    stack: err.stack, // 💡 Stack trace: cho biết lỗi ở file nào, dòng nào
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    // Lỗi dự kiến → hiển message cho user
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  } else {
    // 💡 BUG KHÔNG DỰ KIẾN: Log để dev fix, gửi message chung cho user
    // 🔑 TẠI SAO không gửi err.message? Vì có thể chứa thông tin nhạy cảm
    console.error("ERROR:", err);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

// 💡 GLOBAL ERROR HANDLER: Middleware Express có 4 THAM SỐ
// Express TỰ NHẬN BIẾT middleware có (err, req, res, next) = error handler
// 📌 GHI NHỚ: PHẢI có ĐÚNG 4 tham số! Nếu thiếu → Express coi là middleware thường
export const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else {
    // 💡 Spread operator {...err}: Tạo bản copy để không modify error gốc
    let error = { ...err };
    error.message = err.message;
    // ⚠️ Spread operator KHÔNG copy prototype properties (name, message)
    // → Phải gán message thủ công

    // 💡 Switch-case pattern: Map từng loại lỗi MongoDB/JWT → AppError
    if (err.name === "CastError") error = handleCastErrorDB(err);
    if (err.code === 11000) error = handleDuplicateFieldsDB(err);
    if (err.name === "ValidationError") error = handleValidationErrorDB(err);
    if (err.name === "JsonWebTokenError") error = handleJWTError();
    if (err.name === "TokenExpiredError") error = handleJWTExpiredError();

    sendErrorProd(error, res);
  }
};

// ============================================================
// ASYNC HANDLER - Pattern quan trọng nhất trong Express!
// ============================================================
// 💡 VẤN ĐỀ: Express KHÔNG tự bắt error từ async functions
// Nếu async function throw → Promise rejected → KHÔNG ai bắt → server crash!
// Phải try/catch trong MỖI controller → lặp code → xấu
//
// 💡 GIẢI PHÁP: asyncHandler wrapper
// Wrap async function → nếu reject → tự gọi next(error) → chuyển cho error handler
//
// 🔑 TẠI SAO Promise.resolve() bọc fn()?
// → fn() có thể trả về Promise (async) hoặc value (sync)
// → Promise.resolve() đảm bảo luôn là Promise → .catch() luôn hoạt động
//
// 📌 GHI NHỚ: Express 5 đã tự bắt async errors!
// Nhưng asyncHandler vẫn là pattern phổ biến ở Express 4 (hầu hết companies dùng)
export const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
    // 💡 .catch(next) = .catch(err => next(err))
    // next(error) → Express nhảy đến globalErrorHandler
  };
};
```

> 🎯 **CÂU HỎI PHỎNG VẤN:**
>
> 1. **"asyncHandler hoạt động thế nào?"** → Nhận async function → trả về function mới → gọi function gốc → nếu reject → gọi next(error) → Error handler bắt.
> 2. **"Còn cách nào khác xử lý async error?"** → express-async-errors (monkey patch), Express 5 native support, try/catch thủ công. asyncHandler là phổ biến nhất.
> 3. **"isOperational dùng để làm gì?"** → Phân biệt lỗi "dự kiến được" (input sai, not found) và "bug" (null reference, syntax error). Operational → gửi message cho user. Bug → log + message chung.

### Auth Middleware (`middleware/auth.js`)

> 💡 **PATTERN: Authentication + Authorization Middleware**
>
> - **Authentication** (xác thực): "Bạn là AI?" → verify JWT → biết user nào
> - **Authorization** (phân quyền): "Bạn có QUYỀN không?" → check role (admin/user)
>   Trong code: `protect` = authentication, `authorize` = authorization
>
> 🎯 **PHỎNG VẤN:** "Authentication vs Authorization?"
> → Auth**entication**: Xác minh danh tính (login, token verify)
> → Auth**orization**: Kiểm tra quyền hạn (admin mới được xóa product)

```javascript
// backend/src/middleware/auth.js
import { verifyAccessToken } from "../services/tokenService.js";
import User from "../models/User.js";

// ============================================================
// PROTECT: Middleware bắt buộc đăng nhập
// ============================================================
// 💡 FLOW: Request → lấy token từ header → verify → lấy user từ DB → gắn req.user
// Nếu bất kỳ bước nào fail → 401 Unauthorized
export const protect = async (req, res, next) => {
  try {
    let token;

    // 💡 Bearer Token Pattern (chuẩn OAuth 2.0):
    // Header format: Authorization: Bearer eyJhbGciOi...
    // "Bearer" = loại token (bearer = ai có token đều dùng được)
    // 🔑 TẠI SAO dùng "Bearer" prefix?
    // → Phân biệt với các auth schemes khác: Basic (username:password), Digest, etc.
    // → RFC 6750 quy định format này
    if (req.headers.authorization?.startsWith("Bearer")) {
      // 💡 Optional chaining (?.) : Nếu authorization là undefined → không crash
      // .split(" ")[1]: "Bearer token123" → ["Bearer", "token123"] → "token123"
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        // 💡 401 Unauthorized: Chưa xác thực (chưa login / token hết hạn)
        success: false,
        message: "Not authorized - No token provided",
      });
    }

    // 💡 verifyAccessToken: Decode + verify signature + check expiry
    // Nếu token sai/hết hạn → throw error → catch block → 401
    const decoded = verifyAccessToken(token);

    // 💡 Query DB để đảm bảo user vẫn tồn tại và active
    // 🔑 TẠI SAO query DB mỗi request? Token có thể "cũ":
    // → User đã bị delete sau khi token được tạo
    // → User đã bị deactivate
    // → Cần data mới nhất (role có thể thay đổi)
    // ⚡ THỰC TẾ: Đây là trade-off performance. Nếu cần nhanh hơn → cache user trong Redis
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: "Account is deactivated",
        // 💡 Check isActive: Admin suspend account → dù token còn hạn → vẫn từ chối
      });
    }

    // 💡 GẮN user vào req object
    // Pattern phổ biến: middleware gắn data → controller sau đó sử dụng
    // Ví dụ: controller gọi req.user._id để biết ai đang request
    req.user = user;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(401).json({
      success: false,
      message: "Not authorized - Invalid token",
    });
  }
};

// ============================================================
// OPTIONAL AUTH: Middleware xác thực TÙY CHỌN
// ============================================================
// 💡 USE CASE: Cart API hỗ trợ cả guest (sessionId) và logged-in (userId)
// Nếu có token hợp lệ → gắn req.user. Nếu không/sai → vẫn cho qua (next())
// 🔑 TẠI SAO cần? protect → không có token → 401 (block). optionalAuth → cho qua
export const optionalAuth = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (token) {
      const decoded = verifyAccessToken(token);
      const user = await User.findById(decoded.id);
      if (user && user.isActive) {
        req.user = user;
      }
    }

    next(); // 💡 LUÔN gọi next() dù có/không có token
  } catch (error) {
    next(); // 💡 Token sai? Không sao, vẫn cho qua → xử lý như guest
  }
};

// ============================================================
// AUTHORIZE: Middleware phân quyền theo role
// ============================================================
// 💡 Rest parameters (...roles): Nhận bao nhiêu arguments tùy ý → thành array
// authorize('admin') → roles = ['admin']
// authorize('admin', 'manager') → roles = ['admin', 'manager']
// 🎯 PHỎNG VẤN: "Rest vs Spread operator?"
// → Rest (...args): Thu gọn nhiều arguments thành 1 array (trong function parameter)
// → Spread (...arr): Trải array ra thành nhiều elements (trong function call)
export const authorize = (...roles) => {
  // 💡 Closure: Trả về middleware function mà vẫn nhớ biến `roles`
  // 🎯 PHỎNG VẤN: "Closure là gì?"
  // → Function bên trong "nhớ" biến từ function bên ngoài dù function ngoài đã chạy xong
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        // 💡 403 Forbidden ≠ 401 Unauthorized
        // 401: "Tôi không biết bạn là ai" (chưa login)
        // 403: "Tôi biết bạn là ai, nhưng bạn KHÔNG CÓ QUYỀN" (đã login, sai role)
        // 📌 GHI NHỚ: 401 → đăng nhập lại. 403 → liên hệ admin
        success: false,
        message: `Role '${req.user.role}' is not authorized`,
      });
    }
    next();
  };
};
```

> 🎯 **CÂU HỎI PHỎNG VẤN VỀ AUTH MIDDLEWARE:**
>
> 1. **"Middleware chain hoạt động thế nào?"** → `protect → authorize('admin') → controller`. Mỗi middleware gọi next() → chuyển qua middleware tiếp. Bất kỳ middleware nào fail → response ngay, không gọi next().
> 2. **"401 vs 403 khác nhau?"** → 401: chưa xác thực. 403: đã xác thực nhưng không có quyền. Frontend: 401 → redirect login. 403 → show "Access Denied".
> 3. **"Tại sao query DB mỗi request trong protect?"** → Đảm bảo user still exists, still active, role chưa đổi. Trade-off: chậm hơn nhưng an toàn hơn. Optimize: cache user trong Redis (TTL 5 minutes).

### Validation Middleware (`middleware/validate.js`)

> 💡 **KHÁI NIỆM: Input Validation**
> **NGUYÊN TẮC #1 của bảo mật web: KHÔNG BAO GIỜ tin dữ liệu từ client!**
> Validation = kiểm tra data trước khi xử lý. Validation ở 2 lớp:
>
> 1. **Frontend**: UX tốt (hiển thị lỗi ngay), nhưng DỄ BYPASS (F12 → sửa code)
> 2. **Backend**: KHÔNG THỂ BYPASS → đường phòng thủ cuối cùng
>
> 🔑 **express-validator**: Thư viện validation phổ biến nhất cho Express.
> Dựa trên validator.js, tích hợp sẵn vào Express middleware chain.

```javascript
// backend/src/middleware/validate.js
import { body, validationResult } from "express-validator";
// 💡 body(): Validate fields trong req.body
// Còn có: param() cho req.params, query() cho req.query, header() cho req.headers
// validationResult(): Thu thập kết quả validation

// 💡 CENTRALIZED ERROR FORMATTER
// Tập trung xử lý kết quả validation → response format nhất quán
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  // 💡 validationResult(req): Thu thập TẤT CẢ validation errors đã chạy trước đó
  if (!errors.isEmpty()) {
    const firstError = errors.array()[0];
    return res.status(400).json({
      success: false,
      message: firstError.msg, // Message lỗi đầu tiên (cho toast notification)
      code: "VALIDATION_ERROR",
      errors: errors.array().map((err) => ({
        field: err.path, // 💡 err.path: tên field bị lỗi (vd: "email", "password")
        message: err.msg, // Message lỗi cụ thể
      })),
      // 💡 Trả về TẤT CẢ lỗi → frontend highlight tất cả fields sai cùng lúc
      // Thay vì fix từng lỗi một (UX kém)
    });
  }
  next(); // Không có lỗi → tiếp tục đến controller
};

// ============================================================
// VALIDATION CHAINS
// ============================================================
// 💡 Validation chain = Array of middleware functions
// Express chạy từng middleware trong array theo thứ tự
// Mỗi body() tạo 1 validator middleware → chain methods sau đó thêm rules
//
// 📌 GHI NHỚ: Validation chain KHÔNG dừng ngay khi gặp lỗi!
// Nó chạy TẤT CẢ validators → thu thập TẤT CẢ lỗi → handleValidationErrors xử lý cuối

export const validateRegistration = [
  body("firstName")
    .trim() // 💡 Sanitizer: Xóa spaces đầu/cuối TRƯỚC khi validate
    .notEmpty() // 💡 Validator: Kiểm tra không rỗng (sau khi trim)
    .withMessage("Please enter your first name")
    // 💡 .withMessage(): Custom error message (thay vì message mặc định tiếng Anh khó hiểu)
    .isLength({ min: 2, max: 50 })
    .withMessage("First name must be between 2 and 50 characters")
    .matches(/^[a-zA-ZÀ-ỹ\s-]+$/)
    // 💡 REGEX GIẢI THÍCH:
    // ^ = bắt đầu string
    // [a-zA-Z] = chữ cái Latin
    // À-ỹ = chữ cái có dấu (tiếng Việt, Pháp, etc.)
    // \s = khoảng trắng (space)
    // - = dấu gạch ngang
    // + = 1 hoặc nhiều ký tự
    // $ = kết thúc string
    // → Chỉ cho phép: "Nguyễn Văn A", "Jean-Pierre" → OK
    // → Chặn: "hack<script>", "123abc" → KHÔNG OK
    .withMessage("First name can only contain letters, spaces, and hyphens"),

  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Please enter your last name")
    .isLength({ min: 2, max: 50 })
    .withMessage("Last name must be between 2 and 50 characters")
    .matches(/^[a-zA-ZÀ-ỹ\s-]+$/)
    .withMessage("Last name can only contain letters, spaces, and hyphens"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Please enter your email address")
    .isEmail()
    // 💡 .isEmail(): Dùng validator.js kiểm tra format email
    // Mạnh hơn regex vì handle nhiều edge cases
    .withMessage("Please enter a valid email address")
    .normalizeEmail()
    // 💡 .normalizeEmail(): SANITIZER (không phải validator!)
    // Chuẩn hóa email: "HUY@Gmail.com" → "huy@gmail.com"
    // 📌 GHI NHỚ: Sanitizers TRANSFORM data, Validators CHECK data
    .isLength({ max: 254 })
    // 💡 254 = max email length theo RFC 5321
    .withMessage("Email address is too long"),

  body("password")
    .notEmpty()
    .withMessage("Please create a password")
    .isLength({ min: 8, max: 128 })
    .withMessage("Password must be between 8 and 128 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    // 💡 PASSWORD REGEX CHI TIẾT (Lookahead assertions):
    // (?=.*[a-z]) = "phía trước có ít nhất 1 chữ thường" (lookahead)
    // (?=.*[A-Z]) = "phía trước có ít nhất 1 chữ HOA"
    // (?=.*\d) = "phía trước có ít nhất 1 số"
    // ^ = bắt đầu string
    //
    // 💡 Lookahead ((?=...)) = "nhìn phía trước" mà KHÔNG tiêu thụ ký tự
    // → Check condition mà không di chuyển con trỏ
    // → Cho phép check NHIỀU conditions ĐỘC LẬP tại cùng vị trí
    //
    // 🎯 PHỎNG VẤN: "Lookahead assertion trong regex?"
    // → (?=X) = positive lookahead: "tiếp theo phải match X"
    // → (?!X) = negative lookahead: "tiếp theo KHÔNG được match X"
    .withMessage("Password must include uppercase, lowercase, and number"),

  // 💡 Custom validator: Logic phức tạp mà built-in validators không cover
  body("confirmPassword")
    .notEmpty()
    .withMessage("Please confirm your password")
    .custom((value, { req }) => {
      // 💡 .custom(): Nhận function(value, { req, location, path })
      // value = giá trị field hiện tại (confirmPassword)
      // req = request object → truy cập req.body.password
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
        // 💡 throw Error = validation failed
      }
      return true; // 💡 return true = validation passed
      // 📌 GHI NHỚ: Custom validator PHẢI return true hoặc throw Error
    }),

  // 💡 Middleware cuối cùng: Thu thập và xử lý tất cả validation errors
  (req, res, next) => handleValidationErrors(req, res, next),
];

export const validateLogin = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Please enter your email address")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .normalizeEmail(),

  body("password").notEmpty().withMessage("Please enter your password"),
  // 💡 Login KHÔNG validate password strength (min length, uppercase, etc.)
  // 🔑 TẠI SAO? Vì password đã tạo khi register (đã validate rồi)
  // Login chỉ cần check "có nhập password không"

  (req, res, next) => handleValidationErrors(req, res, next),
];
```

> 🎯 **CÂU HỎI PHỎNG VẤN VỀ VALIDATION:**
>
> 1. **"Validation ở frontend vs backend?"** → Cần CẢ HAI. Frontend cho UX nhanh. Backend cho security. Attacker bypass frontend dễ dàng (Postman, curl).
> 2. **"Sanitization vs Validation?"** → Validation = kiểm tra có đúng không. Sanitization = sửa data cho đúng (trim, normalize, escape). Sanitize TRƯỚC, validate SAU.
> 3. **"Tại sao dùng express-validator thay vì Joi/Yup?"** → express-validator tích hợp middleware chain Express. Joi/Yup là standalone schema validators, cần wrapper. Cả ba đều tốt, express-validator "Express-native" nhất.
>
> ⚡ **THỰC TẾ:** Validate MỌI input: body, params, query, headers. Đặc biệt params (`:id`) phải check là valid MongoDB ObjectId trước khi query DB → tránh CastError.

---

## 3.7 Controllers

> 💡 **KHÁI NIỆM CONTROLLER trong MVC:**
> Controller nhận request → xử lý business logic → gọi Model → gửi response.
> Controller KHÔNG nên: truy cập DB trực tiếp (qua Model), handle low-level errors (qua middleware).
>
> 📌 **PATTERN:** Mỗi controller function được wrap bởi `asyncHandler` → tự bắt async errors.
> Không cần try/catch thủ công. Nếu throw error → globalErrorHandler xử lý.

### Auth Controller (`controllers/authController.js`)

> 💡 **Auth Controller** là phức tạp nhất vì xử lý: Register, Login, Logout,
> Token Refresh, Password Reset, Email Verification. Đây là phần CORE của mọi web app!

```javascript
// backend/src/controllers/authController.js
import User from "../models/User.js";
import { generateTokenPair, verifyRefreshToken } from "../services/tokenService.js";
import { asyncHandler } from "../middleware/errorHandler.js";
import crypto from "crypto";
// 💡 crypto: Module BUILT-IN của Node.js (không cần install)
// Cung cấp: random bytes, hashing (SHA256), encryption
import { sendPasswordResetEmail, sendWelcomeEmail } from "../utils/emailService.js";

// ============================================================
// COOKIE CONFIGURATION
// ============================================================
// 💡 Cookie options cho RefreshToken - RẤT QUAN TRỌNG cho bảo mật!
const isProduction = process.env.NODE_ENV === "production";
const cookieOptions = {
  httpOnly: true,
  // 💡 httpOnly: true → JavaScript KHÔNG THỂ đọc cookie này (document.cookie)
  // ⭐ ĐÂY LÀ LÝ DO #1 tại sao refreshToken an toàn hơn access token
  // Access token trong localStorage → XSS attack đọc được
  // Refresh token trong httpOnly cookie → XSS KHÔNG đọc được!
  secure: isProduction,
  // 💡 secure: true → Cookie CHỈ gửi qua HTTPS (chống man-in-the-middle)
  // Dev dùng HTTP → phải false, nếu không cookie không hoạt động
  sameSite: isProduction ? "none" : "lax",
  // 💡 sameSite: Chống CSRF attack
  // "strict": Cookie KHÔNG gửi khi click link từ site khác → bảo mật nhất nhưng annoying
  // "lax": Cookie gửi với navigation (GET) nhưng KHÔNG gửi với POST/form từ site khác
  // "none": Cookie gửi mọi lúc → PHẢI kèm secure=true → cần cho cross-site (khác domain)
  //
  // 🔑 TẠI SAO production dùng "none"?
  // → Frontend (fashionhbk.shop) và Backend (api.fashionhbk.shop) KHÁC subdomain
  // → "lax" sẽ CHẶN cookie khi frontend POST đến backend → login hỏng!
  // → "none" + secure cho phép cross-site cookies
  maxAge: 7 * 24 * 60 * 60 * 1000, // 💡 7 ngày (milliseconds) - khớp với refresh token expiry
  path: "/", // Cookie gửi với MỌI route (không chỉ /api/auth)
};

// ============================================================
// REGISTER
// ============================================================
// 💡 asyncHandler bọc async function → nếu throw → auto gọi next(error)
export const register = asyncHandler(async (req, res, next) => {
  // 💡 Destructuring: Lấy chính xác fields cần → bỏ qua fields không mong muốn
  // 🔑 TẠI SAO không dùng { ...req.body }?
  // → Attacker có thể gửi thêm { role: "admin" } → Nếu spread → NGUY HIỂM!
  // → Destructuring chỉ lấy fields cho phép = Mass Assignment protection
  const { firstName, lastName, email, password } = req.body;

  // 💡 Check email tồn tại TRƯỚC khi tạo user
  // 🔑 TẠI SAO không để unique index tự handle?
  // → unique index throw error code 11000 → message không user-friendly
  // → Check thủ công → custom message rõ ràng → UX tốt hơn
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({
      // 💡 409 Conflict: Resource đã tồn tại (phù hợp hơn 400 Bad Request)
      success: false,
      message: "This email address is already registered. Please sign in or use a different email.",
      code: "EMAIL_EXISTS",
      // 💡 code: Error code cho frontend → switch/case xử lý cụ thể
      // Frontend: if (code === "EMAIL_EXISTS") → show link "Sign in instead"
    });
  }

  // 💡 User.create(): Tạo document + validate + trigger pre-save hooks
  // password được HASH TỰ ĐỘNG bởi pre-save hook (bcrypt)
  const user = await User.create({ firstName, lastName, email, password });

  const { accessToken, refreshToken } = generateTokenPair(user);

  // 💡 Lưu refreshToken vào DB → để verify + invalidate sau này
  user.refreshToken = refreshToken;
  await user.save();
  // 📌 GHI NHỚ: .save() trigger pre-save hook → isModified('password') check
  // → password lần này KHÔNG modified → KHÔNG hash lại → tối!

  // 💡 res.cookie(): Set cookie trên browser
  // Cookie tự động gửi với mọi request đến cùng domain
  res.cookie("refreshToken", refreshToken, cookieOptions);

  // 💡 Non-blocking email: Wrap trong try/catch riêng
  // Nếu email fail → log error nhưng VẪN response thành công
  // 🔑 TẠI SAO? User đã tạo account thành công, email chỉ là bonus
  try {
    await sendWelcomeEmail(user.email, user.firstName);
  } catch (emailError) {
    console.error("Welcome email failed (non-critical):", emailError);
  }

  res.status(201).json({
    // 💡 201 Created: Resource mới đã được tạo (phù hợp hơn 200 OK)
    success: true,
    message: "Welcome! Your account has been created successfully.",
    data: {
      user: user.toJSON(), // 💡 toJSON() loại bỏ password, refreshToken, etc.
      accessToken, // 💡 Access token gửi trong response body (frontend lưu vào state)
      // ⚠️ refreshToken KHÔNG gửi trong body → chỉ trong cookie (httpOnly)
    },
  });
});

// ============================================================
// LOGIN
// ============================================================
export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // 💡 .select('+password'): Override select: false để lấy password
  // Vì cần password để compare, nhưng bình thường password bị ẩn
  const user = await User.findOne({ email }).select("+password");

  // 💡 SECURITY BEST PRACTICE: KHÔNG nói rõ "email không tồn tại" hay "password sai"
  // 🔑 TẠI SAO? Nếu nói "email not found" → attacker biết email nào TỒN TẠI
  // → Dùng để tấn công credential stuffing (thử password từ DB bị leak)
  // 📌 GHI NHỚ: Luôn dùng message chung: "email or password incorrect"
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "The email or password you entered is incorrect. Please try again.",
      code: "INVALID_CREDENTIALS",
    });
  }

  if (!user.isActive) {
    return res.status(403).json({
      success: false,
      message: "Your account has been suspended. Please contact our support team for assistance.",
      code: "ACCOUNT_SUSPENDED",
    });
  }

  // 💡 comparePassword: Dùng bcrypt.compare (KHÔNG phải ===)
  // bcrypt tự extract salt từ stored hash → hash input → compare
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    return res.status(401).json({
      success: false,
      message: "The email or password you entered is incorrect. Please try again.",
      code: "INVALID_CREDENTIALS",
    });
  }

  // 💡 Token Rotation: Tạo cặp tokens MỚI mỗi lần login
  // refreshToken cũ bị ghi đè → tự động invalidate
  const { accessToken, refreshToken } = generateTokenPair(user);
  user.refreshToken = refreshToken;
  await user.save();

  res.cookie("refreshToken", refreshToken, cookieOptions);

  res.status(200).json({
    success: true,
    message: "Welcome back! You have successfully signed in.",
    data: {
      user: user.toJSON(),
      accessToken,
    },
  });
});

// ============================================================
// LOGOUT
// ============================================================
export const logout = asyncHandler(async (req, res, next) => {
  const { refreshToken } = req.cookies;
  // 💡 req.cookies: Parsed bởi cookieParser middleware

  // 💡 Invalidate token: Xóa refreshToken trong DB
  // Dù attacker có cookie cũ → server verify → DB không match → DENIED
  if (refreshToken) {
    await User.findOneAndUpdate({ refreshToken }, { refreshToken: null });
  }

  // 💡 clearCookie: Xóa cookie ở browser
  // ⚠️ PHẢI truyền CÙNG options (trừ maxAge) → nếu không browser không xóa!
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    path: "/",
  });

  res.status(200).json({
    success: true,
    message: "You have been successfully signed out. See you again soon!",
  });
});

// ============================================================
// REFRESH TOKEN - Cơ chế "lấy vé mới khi vé cũ hết hạn"
// ============================================================
// 💡 FLOW: Access token hết hạn → Frontend gửi refresh token → Server verify
// → Tạo access token MỚI + refresh token MỚI → Gửi về
// → User KHÔNG phải login lại! (Silent refresh)
export const refreshAccessToken = asyncHandler(async (req, res, next) => {
  // 💡 Nhận refresh token: ưu tiên cookie, fallback body
  const refreshToken = req.cookies?.refreshToken || req.body?.refreshToken;
  // 💡 Optional chaining (?.) → nếu cookies undefined → không crash

  if (!refreshToken) {
    return res.status(401).json({
      success: false,
      message: "Your session has expired. Please sign in again to continue.",
      code: "SESSION_EXPIRED",
    });
  }

  let decoded;
  try {
    decoded = verifyRefreshToken(refreshToken);
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Your session has expired. Please sign in again to continue.",
      code: "TOKEN_EXPIRED",
    });
  }

  // 💡 DOUBLE CHECK: Verify token + check DB
  // 🔑 TẠI SAO check DB? Token có thể valid (chưa hết hạn) nhưng đã bị logout
  // → DB không còn refreshToken → deny
  const user = await User.findOne({
    _id: decoded.id,
    refreshToken, // 💡 Match CHÍNH XÁC token trong DB → nếu đã rotate → cũ không match
  }).select("+refreshToken");

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Your session is no longer valid. Please sign in again.",
      code: "INVALID_SESSION",
    });
  }

  // 💡 TOKEN ROTATION: Tạo cặp tokens MỚI → invalidate cũ
  // 🔑 TẠI SAO rotate? Nếu refresh token bị đánh cắp:
  // → Hacker dùng token cũ → server tạo token mới cho hacker
  // → User THẬT dùng token cũ → KHÔNG match DB (đã rotate) → 401
  // → User phải login lại → server biết có breach → investigate
  const tokens = generateTokenPair(user);
  user.refreshToken = tokens.refreshToken;
  await user.save();

  res.cookie("refreshToken", tokens.refreshToken, cookieOptions);

  res.status(200).json({
    success: true,
    data: {
      accessToken: tokens.accessToken,
    },
  });
});

// ============================================================
// GET ME - Lấy thông tin user đang login
// ============================================================
export const getMe = asyncHandler(async (req, res, next) => {
  // 💡 req.user.id: Được gắn bởi protect middleware
  const user = await User.findById(req.user.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "We couldn't find your account. Please try signing in again.",
      code: "USER_NOT_FOUND",
    });
  }

  res.status(200).json({
    success: true,
    data: { user }, // 💡 Mongoose toJSON tự động chạy khi res.json() serialize
  });
});

// ============================================================
// FORGOT PASSWORD - Gửi email reset password
// ============================================================
// 💡 FLOW: User nhập email → Server tạo random token → Hash token → lưu DB
// → Gửi token (CHƯA hash) qua email → User click link → resetPassword xử lý
export const forgotPassword = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Please provide your email address.",
      code: "EMAIL_REQUIRED",
    });
  }

  const user = await User.findOne({ email: email.toLowerCase() });

  // 💡 SECURITY: Production KHÔNG nói email có tồn tại hay không
  // → Chống email enumeration attack (thử email nào tồn tại)
  // Dev mode hiển thị rõ để debug dễ
  if (!user) {
    if (process.env.NODE_ENV === "development") {
      return res.status(404).json({
        success: false,
        message: "No account found with this email address. Please register first.",
        code: "EMAIL_NOT_FOUND",
      });
    }
    // 💡 Production: Luôn trả 200 OK dù email tồn tại hay không
    return res.status(200).json({
      success: true,
      message: "If an account with that email exists, we have sent password reset instructions.",
    });
  }

  // 💡 crypto.randomBytes(32): Tạo 32 bytes ngẫu nhiên → 64 hex chars
  // Cryptographically secure → không đoán được, không lặp lại
  const resetToken = crypto.randomBytes(32).toString("hex");
  // 💡 Hash token trước khi lưu vào DB
  // 🔑 TẠI SAO hash? Nếu DB bị hack → hacker thấy hash → KHÔNG dùng được
  // Email gửi token GỐC → user gửi token gốc → server hash → compare
  const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");

  user.passwordResetToken = hashedToken;
  user.passwordResetExpires = Date.now() + 60 * 60 * 1000; // 1 giờ
  await user.save({ validateBeforeSave: false });
  // 💡 validateBeforeSave: false → Bỏ qua validation
  // 🔑 TẠI SAO? Vì user đang reset password → password field required → sẽ fail
  // Ta chỉ update token fields, không cần validate toàn bộ document

  const clientUrl = process.env.CLIENT_URL || "http://localhost:3000";
  const resetUrl = `${clientUrl}/reset-password/${resetToken}`;

  try {
    await sendPasswordResetEmail(user.email, resetToken, resetUrl);

    res.status(200).json({
      success: true,
      message: "If an account with that email exists, we have sent password reset instructions.",
    });
  } catch (error) {
    // 💡 ROLLBACK: Nếu gửi email fail → xóa token → user có thể thử lại
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    console.error("Password reset email error:", error);
    return res.status(500).json({
      success: false,
      message: "There was an error sending the email. Please try again later.",
      code: "EMAIL_SEND_FAILED",
    });
  }
});

// ============================================================
// RESET PASSWORD - Đặt lại mật khẩu với token từ email
// ============================================================
export const resetPassword = asyncHandler(async (req, res, next) => {
  const { token } = req.params; // 💡 Token từ URL: /api/auth/reset-password/:token
  const { password, confirmPassword } = req.body;

  // Validate input
  if (!password || !confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Please provide both password and confirmation.",
      code: "PASSWORD_REQUIRED",
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Passwords do not match.",
      code: "PASSWORD_MISMATCH",
    });
  }

  if (password.length < 8) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 8 characters long.",
      code: "PASSWORD_TOO_SHORT",
    });
  }

  if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
    return res.status(400).json({
      success: false,
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
      code: "PASSWORD_WEAK",
    });
  }

  // 💡 Hash token từ URL để so sánh với stored hash
  // User gửi reset token gốc → hash → compare với DB (lưu dạng hash)
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  // 💡 MongoDB operator $gt (greater than): passwordResetExpires > now → chưa hết hạn
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
    // 💡 Query compound: PHẢI match cả token VÀ chưa hết hạn
  });

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Password reset link is invalid or has expired. Please request a new one.",
      code: "INVALID_TOKEN",
    });
  }

  // 💡 Set password MỚI → pre-save hook tự hash bằng bcrypt
  user.password = password;
  // Xóa reset token (đã sử dụng, one-time use)
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  // 💡 Lần save này: isModified('password') = true → pre-save hook hash password

  // 💡 Auto-login sau reset: Tạo tokens mới → user không phải login lại
  const { accessToken, refreshToken } = generateTokenPair(user);
  user.refreshToken = refreshToken;
  await user.save();

  res.cookie("refreshToken", refreshToken, cookieOptions);

  res.status(200).json({
    success: true,
    message: "Your password has been reset successfully. You are now logged in.",
    data: {
      user: user.toJSON(),
      accessToken,
    },
  });
});

// ============================================================
// VERIFY EMAIL
// ============================================================
export const verifyEmail = asyncHandler(async (req, res, next) => {
  // 💡 Cùng pattern: hash token gốc → compare với DB hash
  const hashedToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

  const user = await User.findOne({
    emailVerificationToken: hashedToken,
    emailVerificationExpires: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Invalid or expired verification token.",
      code: "INVALID_TOKEN",
    });
  }

  user.emailVerified = true;
  user.emailVerificationToken = undefined;
  user.emailVerificationExpires = undefined;
  await user.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    message: "Email verified successfully.",
  });
});
```

> 🎯 **CÂU HỎI PHỎNG VẤN VỀ AUTH CONTROLLER (CỰC KỲ QUAN TRỌNG!):**
>
> 1. **"Mô tả flow Register-Login-Refresh?"**
>    → Register: Validate input → Check email exists → Create user (auto hash password) → Generate tokens → Set cookie → Response.
>    → Login: Find user by email → Compare password → Generate tokens → Set cookie → Response.
>    → Refresh: Verify refresh token → Check DB → Rotate tokens → Set new cookie → Response.
> 2. **"Tại sao cần Token Rotation?"** → Phát hiện token theft. Nếu hacker dùng token cũ → DB đã rotate → không match → 401 → user biết có breach.
> 3. **"Tại sao hash password reset token trong DB?"** → Nếu DB bị leak → hacker thấy token (chưa hash) → dùng reset password → chiếm account! Hash token → hacker KHÔNG thể dùng.
> 4. **"validateBeforeSave: false dùng khi nào?"** → Khi update 1 vài fields mà KHÔNG muốn validate toàn bộ schema. Ví dụ: update token mà password field required → sẽ fail validation.
> 5. **"res.cookie() options nào PHẢI đúng?"** → httpOnly, secure, sameSite, path. Sai bất kỳ option nào → cookie không hoạt động → refresh flow hỏng!
>
> ⚡ **THỰC TẾ DỰ ÁN:**
>
> - Luôn test flow đầy đủ: Register → Login → Access protected route → Token expire → Refresh → Access lại → Logout → Verify không access được
> - Thêm account lockout (khóa sau 5 lần login sai), 2FA (Google Authenticator), OAuth (Google/Facebook login)
> - Production: Dùng Redis để lưu blacklisted tokens thay vì query DB mỗi request

---

## 3.8 Routes

> 💡 **KHÁI NIỆM ROUTES:**
> Routes = "bản đồ" mapping URL paths + HTTP methods → Controller functions.
> Express Router gom nhóm routes → modular, clean code.
>
> 📌 **PATTERN:** Route definition = HTTP method + Path + Middleware chain + Controller handler
> `router.post("/register", authLimiter, validateRegistration, register)`
> → POST /register → Rate limit → Validate → Controller function
>
> 🎯 **PHỎNG VẤN:** "RESTful API design principles?"
> → Resources là nouns (không dùng verbs): `/products` không phải `/getProducts`
> → HTTP methods biểu thị hành động: GET (đọc), POST (tạo), PUT/PATCH (sửa), DELETE (xóa)
> → Status codes biểu thị kết quả: 200 (OK), 201 (Created), 400 (Bad Request), 404 (Not Found)

### Auth Routes (`routes/authRoutes.js`)

```javascript
// backend/src/routes/authRoutes.js
import express from "express";
import {
  register,
  login,
  logout,
  refreshAccessToken,
  getMe,
  forgotPassword,
  resetPassword,
  verifyEmail,
} from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";
import { validateRegistration, validateLogin } from "../middleware/validate.js";
import { authLimiter, passwordResetLimiter } from "../config/security.js";

// 💡 express.Router(): Tạo "mini app" với routes riêng
// Sau đó mount vào main app: app.use('/api/auth', authRouter)
const router = express.Router();

// ============================================================
// PUBLIC ROUTES (Không cần đăng nhập)
// ============================================================
// 💡 Middleware chain: Chạy từ TRÁI → PHẢI
// authLimiter → validateRegistration → register
// Nếu rate limit quá → DỪNG, không chạy tiếp
// Nếu validation fail → DỪNG, không chạy register
router.post("/register", authLimiter, validateRegistration, register);
router.post("/login", authLimiter, validateLogin, login);
router.post("/logout", logout); // 💡 Logout không cần protect vì đây là cleanup
router.post("/refresh", refreshAccessToken);
router.post("/forgot-password", passwordResetLimiter, forgotPassword);
router.post("/reset-password/:token", passwordResetLimiter, resetPassword);
// 💡 :token = URL parameter → req.params.token
// Ví dụ: POST /api/auth/reset-password/abc123 → req.params.token = "abc123"
router.get("/verify-email/:token", verifyEmail);

// ============================================================
// PROTECTED ROUTES (Phải đăng nhập)
// ============================================================
// 💡 protect middleware → verify JWT → gắn req.user → getMe sử dụng req.user
router.get("/me", protect, getMe);

export default router;
```

### Cart Routes (`routes/cartRoutes.js`)

> 💡 Cart routes dùng `optionalAuth` thay vì `protect` vì hỗ trợ cả guest users.
> Guest → dùng sessionId. Logged-in → dùng userId. Merge khi login.

```javascript
// backend/src/routes/cartRoutes.js
import express from "express";
import {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  applyCoupon,
  removeCoupon,
  mergeGuestCart,
  validateCart,
  syncCart,
} from "../controllers/cartController.js";
import { protect, optionalAuth } from "../middleware/auth.js";

const router = express.Router();

// 💡 optionalAuth: Nếu có token → gắn req.user, nếu không → vẫn cho qua
// Controller sẽ check: req.user ? userId cart : sessionId cart
router.get("/", optionalAuth, getCart);
router.post("/items", optionalAuth, addToCart);
router.put("/items/:itemId", optionalAuth, updateCartItem);
router.patch("/items/:itemId", optionalAuth, updateCartItem);
// 💡 PUT vs PATCH: PUT = replace toàn bộ, PATCH = update 1 phần
// Cả hai đều hỗ trợ để frontend linh hoạt chọn method
router.delete("/items/:itemId", optionalAuth, removeFromCart);
router.delete("/", optionalAuth, clearCart);

// 💡 Coupon routes: Áp dụng/gỡ mã giảm giá
router.post("/coupon", optionalAuth, applyCoupon);
router.delete("/coupon", optionalAuth, removeCoupon);

// 💡 Merge: SAU login, gộp guest cart vào user cart
// Dùng protect (BẮT BUỘC login) vì merge cần biết user
router.post("/merge", protect, mergeGuestCart);

router.post("/sync", optionalAuth, syncCart);
router.post("/validate", optionalAuth, validateCart);

export default router;
```

### Profile Routes (`routes/profileRoutes.js`)

> 💡 **PATTERN ĐẶC BIỆT:** Profile routes xử lý trực tiếp trong route file (inline handler)
> thay vì tạo controller riêng. Khi logic đơn giản có thể inline, khi phức tạp nên tách controller.
> File này chứa **18 routes** cho: profile CRUD, addresses, password, email, preferences, avatar, và wishlist.
>
> 🎯 **PHỎNG VẤN:** "Khi nào inline handler, khi nào tách controller?"
> → Inline: Route đơn giản (< 20 dòng), ít reuse. Controller: Logic phức tạp, cần reuse, cần test riêng.

```javascript
// backend/src/routes/profileRoutes.js
import express from "express";
import mongoose from "mongoose";
import { protect } from "../middleware/auth.js";
import User from "../models/User.js";
import Product from "../models/Product.js";
import Cart from "../models/Cart.js";
import bcrypt from "bcrypt";

const router = express.Router();

// ============================================
// Profile CRUD
// ============================================

// 💡 GET /api/profile - Lấy thông tin profile user đang login
router.get("/", protect, async (req, res) => {
  try {
    // 💡 .select("-password"): Loại bỏ password khỏi kết quả
    // Dấu "-" = exclude, dấu "+" = include (dùng cho select: false fields)
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND",
      });
    }
    res.json({ success: true, data: { user } });
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
      code: "SERVER_ERROR",
    });
  }
});

// 💡 PATCH /api/profile - Cập nhật profile (partial update)
// 🔑 TẠI SAO PATCH không phải PUT?
// → PUT = replace toàn bộ resource. PATCH = update chỉ fields được gửi
// → User chỉ đổi phone → gửi { phone: "..." } → PATCH phù hợp hơn PUT
router.patch("/", protect, async (req, res) => {
  try {
    // 💡 Destructuring: Chỉ lấy fields cho phép update
    // ⚡ THỰC TẾ: KHÔNG cho phép update email, role, password qua route này!
    // Mass Assignment Protection: Dù client gửi { role: "admin" } → bị bỏ qua
    const { firstName, lastName, phone } = req.body;
    const updateData = {};
    // 💡 Check !== undefined: Cho phép gửi empty string ("") để xóa data
    // Nếu check !firstName → empty string bị ignore → không xóa được
    if (firstName !== undefined) updateData.firstName = firstName.trim();
    if (lastName !== undefined) updateData.lastName = lastName.trim();
    if (phone !== undefined) updateData.phone = phone.trim();

    // 💡 findByIdAndUpdate: Mongoose query + update trong 1 operation (atomic)
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $set: updateData },
      // 💡 $set: Chỉ update fields được chỉ định, giữ nguyên fields khác
      // Nếu không dùng $set → có thể ghi đè toàn bộ document!
      { new: true, runValidators: true }
      // 💡 new: true → Trả về document SAU khi update (default: trước khi update!)
      // runValidators: true → Chạy validation khi update (default: false! → gotcha)
      // 🎯 PHỎNG VẤN: "findByIdAndUpdate có chạy validators mặc định không?"
      // → KHÔNG! Phải thêm { runValidators: true }. Đây là Mongoose gotcha phổ biến
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND",
      });
    }

    res.json({
      success: true,
      message: "Profile updated successfully",
      data: { user },
    });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update profile. Please try again.",
      code: "UPDATE_FAILED",
    });
  }
});

// 💡 CHANGE PASSWORD: Đổi mật khẩu (cần biết mật khẩu cũ)
// 🔑 TẠI SAO khác Reset Password?
// → Change: User ĐANG LOGIN, biết password cũ → confirm rồi đổi
// → Reset: User QUÊN password → dùng email token → đặt password mới
router.patch("/password", protect, async (req, res) => {
  try {
    const { currentPassword, newPassword, confirmPassword } = req.body;

    // 💡 Input validation thủ công (vì không dùng express-validator ở đây)
    if (!currentPassword || !newPassword || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "All password fields are required",
        code: "MISSING_FIELDS",
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "New passwords do not match",
        code: "PASSWORD_MISMATCH",
      });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({
        success: false,
        message: "New password must be at least 8 characters",
        code: "PASSWORD_TOO_SHORT",
      });
    }

    // 💡 .select("+password"): Bắt buộc vì password có select: false
    const user = await User.findById(req.user._id).select("+password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND",
      });
    }

    // 💡 Verify current password TRƯỚC khi cho đổi
    // Bảo mật: Dù đã login, vẫn phải confirm password cũ
    // (phòng trường hợp ai đó mượn máy đã login)
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Current password is incorrect",
        code: "INVALID_PASSWORD",
      });
    }

    // 💡 Gán password mới → .save() → pre-save hook tự hash
    user.password = newPassword;
    await user.save();
    // 📌 GHI NHỚ: PHẢI dùng .save() để trigger pre-save hook!
    // Nếu dùng findByIdAndUpdate → pre-save KHÔNG chạy → password LƯU RAW!

    res.json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error("Change password error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to change password. Please try again.",
      code: "PASSWORD_CHANGE_FAILED",
    });
  }
});

// ============================================
// Address Management
// ============================================
// 💡 CRUD cho addresses array (subdocuments trong User model)
// Pattern: Thao tác trên array subdocuments bằng Mongoose methods
// push() để thêm, findIndex() để tìm, splice()/pull() để xóa

// Get all addresses
router.get("/addresses", protect, async (req, res) => {
  try {
    // 💡 .select("addresses"): Chỉ lấy field addresses, không load toàn bộ user
    // Giảm data transfer, tăng performance
    const user = await User.findById(req.user._id).select("addresses");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.json({ success: true, data: { addresses: user.addresses || [] } });
    // 💡 || []: Fallback empty array nếu addresses undefined
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// 💡 POST: Thêm address mới vào array
router.post("/addresses", protect, async (req, res) => {
  try {
    const { fullName, phone, address, ward, district, city, isDefault } = req.body;

    if (!fullName || !phone || !address || !city) {
      return res.status(400).json({
        success: false,
        message: "Full name, phone, address, and city are required",
        code: "MISSING_FIELDS",
      });
    }

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // 💡 BUSINESS LOGIC: Chỉ 1 address được default tại 1 thời điểm
    // Nếu address mới = default → bỏ default tất cả address cũ
    if (isDefault) {
      user.addresses.forEach((addr) => {
        addr.isDefault = false;
      });
    }

    // 💡 Address đầu tiên TỰ ĐỘNG set default (UX: user không cần thao tác thêm)
    const shouldBeDefault = isDefault || user.addresses.length === 0;

    const newAddress = {
      fullName: fullName.trim(),
      phone: phone.trim(),
      address: address.trim(),
      ward: ward?.trim() || "", // 💡 Optional chaining + fallback
      district: district?.trim() || "",
      city: city.trim(),
      isDefault: shouldBeDefault,
    };

    // 💡 .push(): Mongoose method thêm subdocument vào array
    // Mongoose tự tạo _id cho subdocument mới
    user.addresses.push(newAddress);
    await user.save();

    // 💡 Lấy address vừa thêm (cuối array) để trả về client
    const createdAddress = user.addresses[user.addresses.length - 1];
    res.status(201).json({
      success: true,
      message: "Address added successfully",
      data: { address: createdAddress },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to add address" });
  }
});

// 💡 PATCH: Cập nhật address cụ thể bằng ID
router.patch("/addresses/:id", protect, async (req, res) => {
  try {
    const { id } = req.params;
    // 💡 Validate ObjectId format TRƯỚC khi query
    // Tránh CastError nếu id không phải ObjectId hợp lệ (vd: "abc")
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid address ID format" });
    }

    const { fullName, phone, address, ward, district, city, isDefault } = req.body;
    const user = await User.findById(req.user._id);
    // 💡 findIndex: Tìm vị trí address trong array
    // .toString() vì ObjectId so sánh cần convert sang string
    const addressIndex = user.addresses.findIndex((addr) => addr._id.toString() === id);

    if (addressIndex === -1) {
      return res.status(404).json({ success: false, message: "Address not found" });
    }

    if (isDefault) {
      user.addresses.forEach((addr) => {
        addr.isDefault = false;
      });
    }

    const addressToUpdate = user.addresses[addressIndex];
    if (fullName !== undefined) addressToUpdate.fullName = fullName.trim();
    if (phone !== undefined) addressToUpdate.phone = phone.trim();
    if (address !== undefined) addressToUpdate.address = address.trim();
    if (ward !== undefined) addressToUpdate.ward = ward.trim();
    if (district !== undefined) addressToUpdate.district = district.trim();
    if (city !== undefined) addressToUpdate.city = city.trim();
    if (isDefault !== undefined) addressToUpdate.isDefault = isDefault;

    await user.save();

    res.json({ success: true, message: "Address updated", data: { address: addressToUpdate } });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update address" });
  }
});

// Delete address
router.delete("/addresses/:id", protect, async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid address ID format" });
    }

    const user = await User.findById(req.user._id);
    const addressIndex = user.addresses.findIndex((addr) => addr._id.toString() === id);

    if (addressIndex === -1) {
      return res.status(404).json({ success: false, message: "Address not found" });
    }

    const wasDefault = user.addresses[addressIndex].isDefault;
    user.addresses.splice(addressIndex, 1);

    // If deleted was default, make first one default
    if (wasDefault && user.addresses.length > 0) {
      user.addresses[0].isDefault = true;
    }

    await user.save();
    res.json({ success: true, message: "Address deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete address" });
  }
});

// Set address as default
router.patch("/addresses/:id/default", protect, async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid address ID format" });
    }

    const user = await User.findById(req.user._id);
    const addressIndex = user.addresses.findIndex((addr) => addr._id.toString() === id);

    if (addressIndex === -1) {
      return res.status(404).json({ success: false, message: "Address not found" });
    }

    user.addresses.forEach((addr) => {
      addr.isDefault = false;
    });
    user.addresses[addressIndex].isDefault = true;

    await user.save();
    res.json({
      success: true,
      message: "Default address updated",
      data: { address: user.addresses[addressIndex] },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to set default address" });
  }
});

// ============================================
// Account Deletion
// ============================================

// Delete user account (soft delete)
router.delete("/", protect, async (req, res) => {
  try {
    const { password, confirmation } = req.body;

    if (!password || confirmation !== "DELETE") {
      return res.status(400).json({
        success: false,
        message: "Password and confirmation ('DELETE') are required",
        code: "MISSING_FIELDS",
      });
    }

    const user = await User.findById(req.user._id).select("+password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Password is incorrect",
        code: "INVALID_PASSWORD",
      });
    }

    // Soft delete - deactivate & anonymize
    user.isActive = false;
    user.email = `deleted_${user._id}@deleted.com`;
    await user.save({ validateBeforeSave: false });

    res.json({ success: true, message: "Account deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete account" });
  }
});

// ============================================
// Email Update
// ============================================

// Update email (requires password verification)
router.patch("/email", protect, async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
        code: "MISSING_FIELDS",
      });
    }

    const user = await User.findById(req.user._id).select("+password");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Password is incorrect" });
    }

    // Check if email already taken
    const existing = await User.findOne({ email, _id: { $ne: user._id } });
    if (existing) {
      return res.status(409).json({ success: false, message: "This email is already in use" });
    }

    user.email = email;
    user.emailVerified = false; // Reset verification
    await user.save({ validateBeforeSave: false });

    res.json({
      success: true,
      message: "Email updated successfully",
      data: { email: user.email },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update email" });
  }
});

// ============================================
// Preferences
// ============================================

// Update preferences
router.patch("/preferences", protect, async (req, res) => {
  try {
    const { newsletter, notifications, language, currency } = req.body;

    const updateData = {};
    if (newsletter !== undefined) updateData["preferences.newsletter"] = newsletter;
    if (notifications !== undefined) updateData["preferences.notifications"] = notifications;
    if (language !== undefined) updateData["preferences.language"] = language;
    if (currency !== undefined) updateData["preferences.currency"] = currency;

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $set: updateData },
      { new: true, runValidators: true }
    ).select("preferences");

    res.json({
      success: true,
      message: "Preferences updated successfully",
      data: { preferences: user.preferences },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update preferences" });
  }
});

// ============================================
// Avatar
// ============================================

// Upload avatar (accepts URL or base64)
router.post("/avatar", protect, async (req, res) => {
  try {
    const { avatar } = req.body;
    if (!avatar) {
      return res.status(400).json({ success: false, message: "Avatar data is required" });
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $set: { avatar } },
      { new: true }
    ).select("avatar");

    res.json({
      success: true,
      message: "Avatar uploaded successfully",
      data: { avatar: user.avatar },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to upload avatar" });
  }
});

// Delete avatar
router.delete("/avatar", protect, async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user._id, { $unset: { avatar: 1 } }, { new: true });
    res.json({ success: true, message: "Avatar deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete avatar" });
  }
});

// ============================================
// Wishlist
// ============================================

// Get wishlist (with populated product data)
router.get("/wishlist", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .select("wishlist")
      .populate({
        path: "wishlist",
        select: "name slug price compareAtPrice thumbnail ratings category isActive",
        match: { isActive: true },
      });

    const wishlist = (user.wishlist || []).filter(Boolean);
    res.json({ success: true, data: { wishlist, total: wishlist.length } });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Add to wishlist
router.post("/wishlist", protect, async (req, res) => {
  try {
    const { productId } = req.body;

    if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ success: false, message: "Valid product ID is required" });
    }

    const product = await Product.findById(productId);
    if (!product || !product.isActive) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    const user = await User.findById(req.user._id);

    // Check if already in wishlist
    if (user.wishlist.some((id) => id.toString() === productId)) {
      return res.status(400).json({ success: false, message: "Product already in wishlist" });
    }

    user.wishlist.push(productId);
    await user.save({ validateBeforeSave: false });

    res.status(201).json({
      success: true,
      message: "Product added to wishlist",
      data: { wishlist: user.wishlist },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to add to wishlist" });
  }
});

// Remove from wishlist
router.delete("/wishlist/:productId", protect, async (req, res) => {
  try {
    const { productId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ success: false, message: "Invalid product ID format" });
    }

    const user = await User.findById(req.user._id);
    user.wishlist = user.wishlist.filter((id) => id.toString() !== productId);
    await user.save({ validateBeforeSave: false });

    res.json({
      success: true,
      message: "Product removed from wishlist",
      data: { wishlist: user.wishlist },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to remove from wishlist" });
  }
});

// Check if product is in wishlist
router.get("/wishlist/check/:productId", protect, async (req, res) => {
  try {
    const { productId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ success: false, message: "Invalid product ID format" });
    }

    const user = await User.findById(req.user._id).select("wishlist");
    const inWishlist = user.wishlist.some((id) => id.toString() === productId);

    res.json({ success: true, data: { inWishlist } });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Move from wishlist to cart
router.post("/wishlist/:productId/move-to-cart", protect, async (req, res) => {
  try {
    const { productId } = req.params;
    const { size, color, quantity = 1 } = req.body;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ success: false, message: "Invalid product ID format" });
    }

    const product = await Product.findById(productId);
    if (!product || !product.isActive) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    // Add to cart
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      cart = new Cart({ user: req.user._id, items: [] });
    }

    const existingIndex = cart.items.findIndex(
      (item) =>
        item.product.toString() === productId &&
        (item.size || "") === (size || "") &&
        (item.color || "") === (color || "")
    );

    if (existingIndex > -1) {
      cart.items[existingIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity, price: product.price, size, color });
    }

    await cart.save();

    // Remove from wishlist
    const user = await User.findById(req.user._id);
    user.wishlist = user.wishlist.filter((id) => id.toString() !== productId);
    await user.save({ validateBeforeSave: false });

    res.json({
      success: true,
      message: "Product moved to cart",
      data: { wishlist: user.wishlist },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to move to cart" });
  }
});

export default router;
```

### Routes Index (`routes/index.js`)

```javascript
// backend/src/routes/index.js
import express from "express";
import authRoutes from "./authRoutes.js";
import productRoutes from "./productRoutes.js";
import cartRoutes from "./cartRoutes.js";
import profileRoutes from "./profileRoutes.js";
import orderRoutes from "./orderRoutes.js";
import checkoutRoutes from "./checkoutRoutes.js";
import wishlistRoutes from "./wishlistRoutes.js";
import reviewRoutes from "./reviewRoutes.js";
import couponRoutes from "./couponRoutes.js";
import paymentRoutes from "./paymentRoutes.js";
import adminRoutes from "./adminRoutes.js";
import inventoryRoutes from "./inventoryRoutes.js";

const router = express.Router();

// Mount routes
router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/profile", profileRoutes);
router.use("/orders", orderRoutes);
router.use("/checkout", checkoutRoutes);
router.use("/wishlist", wishlistRoutes);
router.use("/reviews", reviewRoutes);
router.use("/coupons", couponRoutes);
router.use("/payments", paymentRoutes);
router.use("/admin", adminRoutes);
router.use("/inventory", inventoryRoutes);

// Health check
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is healthy",
    timestamp: new Date().toISOString(),
  });
});

export default router;
```

---

## 3.9 API Endpoints Summary

### Authentication Endpoints

| Method | Endpoint                          | Description            | Auth      |
| ------ | --------------------------------- | ---------------------- | --------- |
| POST   | `/api/auth/register`              | Register new user      | Public    |
| POST   | `/api/auth/login`                 | Login user             | Public    |
| POST   | `/api/auth/logout`                | Logout user            | Public    |
| POST   | `/api/auth/refresh`               | Refresh access token   | Public    |
| POST   | `/api/auth/forgot-password`       | Request password reset | Public    |
| POST   | `/api/auth/reset-password/:token` | Reset password         | Public    |
| GET    | `/api/auth/me`                    | Get current user       | Protected |

### Profile Endpoints

| Method | Endpoint                | Description      | Auth      |
| ------ | ----------------------- | ---------------- | --------- |
| GET    | `/api/profile`          | Get user profile | Protected |
| PATCH  | `/api/profile`          | Update profile   | Protected |
| PATCH  | `/api/profile/password` | Change password  | Protected |

### Cart Endpoints

| Method | Endpoint                  | Description          | Auth      |
| ------ | ------------------------- | -------------------- | --------- |
| GET    | `/api/cart`               | Get cart             | Optional  |
| POST   | `/api/cart/items`         | Add item to cart     | Optional  |
| PATCH  | `/api/cart/items/:itemId` | Update item quantity | Optional  |
| DELETE | `/api/cart/items/:itemId` | Remove item          | Optional  |
| DELETE | `/api/cart`               | Clear cart           | Optional  |
| POST   | `/api/cart/coupon`        | Apply coupon         | Optional  |
| DELETE | `/api/cart/coupon`        | Remove coupon        | Optional  |
| POST   | `/api/cart/merge`         | Merge guest cart     | Protected |

### Product Endpoints

| Method | Endpoint                     | Description           | Auth   |
| ------ | ---------------------------- | --------------------- | ------ |
| GET    | `/api/products`              | Get all products      | Public |
| GET    | `/api/products/:identifier`  | Get single product    | Public |
| GET    | `/api/products/featured`     | Get featured products | Public |
| GET    | `/api/products/new-arrivals` | Get new arrivals      | Public |
| GET    | `/api/products/sale`         | Get sale products     | Public |

### Wishlist Endpoints

| Method | Endpoint                   | Description          | Auth      |
| ------ | -------------------------- | -------------------- | --------- |
| GET    | `/api/wishlist`            | Get user's wishlist  | Protected |
| POST   | `/api/wishlist/:productId` | Add to wishlist      | Protected |
| DELETE | `/api/wishlist/:productId` | Remove from wishlist | Protected |
| DELETE | `/api/wishlist`            | Clear wishlist       | Protected |

### Order Endpoints

| Method | Endpoint                         | Description       | Auth      |
| ------ | -------------------------------- | ----------------- | --------- |
| GET    | `/api/orders`                    | Get user's orders | Protected |
| POST   | `/api/orders`                    | Create new order  | Optional  |
| GET    | `/api/orders/:orderId`           | Get single order  | Protected |
| GET    | `/api/orders/track/:orderNumber` | Track order       | Public    |
| POST   | `/api/orders/:orderId/cancel`    | Cancel order      | Protected |

### Checkout Endpoints

| Method | Endpoint                       | Description         | Auth     |
| ------ | ------------------------------ | ------------------- | -------- |
| POST   | `/api/checkout/initialize`     | Initialize checkout | Optional |
| POST   | `/api/checkout/shipping-rates` | Get shipping rates  | Optional |
| POST   | `/api/checkout/complete`       | Complete order      | Optional |

### Review Endpoints

| Method | Endpoint                                     | Description         | Auth      |
| ------ | -------------------------------------------- | ------------------- | --------- |
| GET    | `/api/products/:productId/reviews`           | Get product reviews | Public    |
| POST   | `/api/products/:productId/reviews`           | Create review       | Protected |
| PUT    | `/api/products/:productId/reviews/:reviewId` | Update review       | Protected |
| DELETE | `/api/products/:productId/reviews/:reviewId` | Delete review       | Protected |

### Coupon Endpoints

| Method | Endpoint                | Description     | Auth     |
| ------ | ----------------------- | --------------- | -------- |
| POST   | `/api/coupons/validate` | Validate coupon | Optional |

> 📌 **Ghi chú:** Xem thêm chi tiết tại [Section 8.11: Complete API Endpoints Summary](#811-complete-api-endpoints-summary)

---

## 📝 Checkpoint: Hoàn thành Part 3

> **Kiểm tra hiểu biết trước khi sang Part 4:**

### ✅ Bạn nên hiểu:

- [ ] **REST API** là gì? (GET, POST, PUT, DELETE)
- [ ] **Middleware** trong Express hoạt động thế nào?
- [ ] **JWT** authentication flow như thế nào?
- [ ] **Mongoose Model** dùng để làm gì?
- [ ] **CORS** là gì và tại sao cần?

### ✅ Bạn nên làm được:

- [ ] Tạo Express server
- [ ] Tạo Mongoose model
- [ ] Viết API route + controller
- [ ] Test API với Postman
- [ ] Implement JWT authentication

### 💡 Tóm tắt Khái niệm Backend

| Khái niệm           | Giải thích                        | Ví dụ                              |
| ------------------- | --------------------------------- | ---------------------------------- |
| **Route**           | URL endpoint                      | `/api/products`, `/api/auth/login` |
| **Controller**      | Logic xử lý request               | getProducts(), createOrder()       |
| **Model**           | Schema database                   | User, Product, Cart                |
| **Middleware**      | Function chạy trước controller    | auth.js, errorHandler.js           |
| **JWT**             | Token để xác thực user            | accessToken, refreshToken          |
| **httpOnly Cookie** | Cookie an toàn, JS không đọc được | Lưu refreshToken                   |

> 🔥 **Test API ngay:** Mở Postman → POST `http://localhost:5000/api/auth/login`

---

# Part 4: Frontend-Backend Integration

> 🎯 **Mục tiêu Part này:**
>
> - Kết nối Frontend React với Backend Express
> - Hiểu flow của dữ liệu từ UI → API → Database
> - Setup authentication flow hoàn chỉnh
> - Handle errors và loading states

---

## 4.1 Integration Overview

### Luồng dữ liệu trong ứng dụng

```
┌────────────────────────────────────────────────────────────────────────────┐
│                        DATA FLOW DIAGRAM                                   │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  ┌──────────┐    ┌─────────────┐    ┌──────────┐    ┌──────────────────┐  │
│  │  User    │───▶│   React     │───▶│  Axios   │───▶│  Express API     │  │
│  │  Action  │    │  Component  │    │  Service │    │  (Backend)       │  │
│  └──────────┘    └─────────────┘    └──────────┘    └────────┬─────────┘  │
│                                                               │            │
│                                                               ▼            │
│  ┌──────────┐    ┌─────────────┐    ┌──────────┐    ┌──────────────────┐  │
│  │  UI      │◀───│   State     │◀───│  JSON    │◀───│  MongoDB         │  │
│  │  Update  │    │   Update    │    │  Response│    │  (Database)      │  │
│  └──────────┘    └─────────────┘    └──────────┘    └──────────────────┘  │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### Checklist trước khi integrate

```markdown
✅ Backend đã chạy được ở http://localhost:5000
✅ API endpoints đã test với Postman
✅ Frontend đã có Axios instance configured
✅ CORS đã enable ở backend
✅ Environment variables đã set
```

---

## 4.2 Axios Configuration

### Tạo Axios Instance với Interceptors

```javascript
// frontend/src/services/api.js
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Token storage (in-memory cho security)
let accessToken = null;

export const setAccessToken = (token) => {
  accessToken = token;
};

export const clearAccessToken = () => {
  accessToken = null;
};

// Create Axios instance
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // ⚠️ QUAN TRỌNG: Để gửi cookies
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor - Thêm token vào mỗi request
api.interceptors.request.use(
  (config) => {
    // Thêm access token nếu có
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    // Thêm cart session cho guest
    const cartSession = localStorage.getItem("cartSession");
    if (cartSession) {
      config.headers["X-Cart-Session"] = cartSession;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor - Handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Nếu 401 và chưa retry
    if (error.response?.status === 401 && !originalRequest._retry) {
      // Không retry cho refresh endpoint (tránh infinite loop)
      if (originalRequest.url?.includes("/auth/refresh")) {
        clearAccessToken();
        window.location.href = "/login";
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      try {
        // Gọi refresh token
        const { data } = await api.post("/auth/refresh");
        setAccessToken(data.accessToken);

        // Retry request gốc với token mới
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        clearAccessToken();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
```

---

## 4.3 Service Layer Pattern

### Tại sao cần Service Layer?

```
❌ KHÔNG NÊN: Component gọi API trực tiếp
   → Duplicate code, khó test, khó maintain

✅ NÊN: Component → Service → API
   → Centralized, reusable, testable
```

### Ví dụ Auth Service

```javascript
// frontend/src/services/authService.js
import api, { setAccessToken, clearAccessToken } from "./api";

export const authService = {
  // Đăng nhập
  async login(email, password) {
    const { data } = await api.post("/auth/login", { email, password });
    setAccessToken(data.accessToken);
    return data.user;
  },

  // Đăng ký
  async register(userData) {
    const { data } = await api.post("/auth/register", userData);
    setAccessToken(data.accessToken);
    return data.user;
  },

  // Đăng xuất
  async logout() {
    try {
      await api.post("/auth/logout");
    } finally {
      clearAccessToken();
    }
  },

  // Kiểm tra auth status
  async checkAuth() {
    const { data } = await api.get("/auth/me");
    setAccessToken(data.accessToken);
    return data.user;
  },
};
```

---

## 4.4 Component Integration Example

### Login Form với API Integration

```jsx
// frontend/src/pages/Login.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@context/AuthContext";
import { useToast } from "@context/ToastContext";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      await login(formData.email, formData.password);
      showToast("Login successful!", "success");
      navigate("/"); // Redirect về home
    } catch (error) {
      // Handle different error types
      if (error.response?.status === 401) {
        setErrors({ general: "Invalid email or password" });
      } else if (error.response?.data?.errors) {
        // Validation errors from backend
        const fieldErrors = {};
        error.response.data.errors.forEach((err) => {
          fieldErrors[err.path] = err.msg;
        });
        setErrors(fieldErrors);
      } else {
        setErrors({ general: "Something went wrong. Please try again." });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors.general && <div className="error">{errors.general}</div>}

      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email"
      />
      {errors.email && <span className="error">{errors.email}</span>}

      <input
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        placeholder="Password"
      />
      {errors.password && <span className="error">{errors.password}</span>}

      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
```

---

## 4.5 Testing Integration

### Checklist kiểm tra integration

```markdown
## Authentication

- [ ] Login thành công → Redirect về home
- [ ] Login sai password → Hiện error message
- [ ] Register thành công → Auto login
- [ ] Logout → Clear session, redirect login
- [ ] Refresh page → Vẫn logged in (refresh token)

## API Calls

- [ ] GET products → Hiển thị danh sách
- [ ] Add to cart → Cart count tăng
- [ ] Update profile → Data được lưu

## Error Handling

- [ ] Network error → Hiện thông báo
- [ ] 401 Unauthorized → Redirect login
- [ ] 500 Server error → Hiện error page
```

---

## 📝 Checkpoint: Hoàn thành Part 4

### ✅ Website của bạn nên:

- [ ] Frontend chạy ở `localhost:5173`
- [ ] Backend chạy ở `localhost:5000`
- [ ] Login/Register hoạt động
- [ ] Products load từ API
- [ ] Cart add/remove items được
- [ ] Không có CORS errors

### ⚠️ Lỗi thường gặp khi Integration

| Lỗi                              | Nguyên nhân                         | Cách fix                             |
| -------------------------------- | ----------------------------------- | ------------------------------------ |
| **CORS error**                   | Backend không allow frontend origin | Check `corsOptions.origin`           |
| **401 trên protected routes**    | Cookie không được gửi               | `credentials: 'include'` trong Axios |
| **State không update sau login** | Không refresh user data             | Gọi `fetchUser()` sau login          |
| **Cart mất sau refresh**         | Không persist cart                  | Check CartContext localStorage       |
| **API trả về 404**               | URL sai hoặc route không tồn tại    | Check `/api/...` prefix              |

> 🔥 **Debug tip:** Mở DevTools → Network tab để xem requests/responses

---

# Part 5: Common Issues & Solutions

> 🎯 **Phần này tổng hợp các lỗi thường gặp khi develop và cách fix**

## 5.1 CORS Errors

### Problem

```
Access to XMLHttpRequest at 'http://localhost:5000/api' from origin
'http://localhost:3000' has been blocked by CORS policy
```

### Solution

Ensure CORS is properly configured in `config/cors.js`:

```javascript
export const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    // Allow localhost in development
    if (process.env.NODE_ENV !== "production") {
      if (origin.includes("localhost") || origin.includes("127.0.0.1")) {
        return callback(null, true);
      }
    }
    callback(null, true);
  },
  credentials: true, // CRITICAL for cookies
};
```

## 5.2 Cookie Not Being Set

### Problem

Refresh token cookie không được set ở browser.

### Solution

1. Ensure `withCredentials: true` in Axios:

```javascript
const api = axios.create({
  withCredentials: true, // Required for cookies
});
```

2. Ensure cookie options are correct:

```javascript
const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // false for localhost
  sameSite: "strict",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};
```

## 5.3 Token Refresh Loop

### Problem

App continuously tries to refresh token, causing infinite loop.

### Solution

Add flag to prevent retry on refresh endpoint:

```javascript
if (originalRequest.url?.includes("/auth/refresh")) {
  clearAccessToken();
  return Promise.reject(error);
}
```

## 5.4 Guest Cart Not Persisting

### Problem

Guest cart items disappear after refresh.

### Solution

Ensure cart session ID is stored and sent with requests:

```javascript
// In api.js request interceptor
const cartSession = localStorage.getItem("cartSession");
if (cartSession) {
  config.headers["X-Cart-Session"] = cartSession;
}
```

## 5.5 Password Validation Error

### Problem

Registration fails with password validation error.

### Solution

Password must meet all requirements:

- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number

```javascript
// Validation regex
.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
```

---

# Part 6: Testing

> 🎯 **Mục tiêu Part này:**
>
> - Setup automated testing với Jest (Backend) và Vitest (Frontend)
> - Viết unit tests cho các functions quan trọng
> - Có manual testing checklist đầy đủ

---

## 6.1 Manual Testing Checklist

### Authentication Flow

- [ ] Register with valid data
- [ ] Register with existing email (should fail)
- [ ] Login with valid credentials
- [ ] Login with wrong password (should fail)
- [ ] Logout clears session
- [ ] Token refresh works automatically
- [ ] Protected routes redirect to login
- [ ] Guest routes redirect authenticated users

### Cart Flow

- [ ] Guest can add items to cart
- [ ] Guest cart persists on refresh
- [ ] Logged in user cart syncs with server
- [ ] Cart merges after login
- [ ] Update quantity works
- [ ] Remove item works
- [ ] Clear cart works

### Profile Flow

- [ ] View profile information
- [ ] Update profile (name, phone)
- [ ] Change password with correct current password
- [ ] Change password with wrong current password (should fail)

### Password Reset Flow

- [ ] Request password reset
- [ ] Reset password with valid token
- [ ] Reset password with expired token (should fail)

### Order Flow

- [ ] Checkout from cart
- [ ] Guest checkout works
- [ ] Order confirmation email sent
- [ ] View order history
- [ ] Track order status
- [ ] Cancel order (if allowed)

### Admin Flow

- [ ] Admin can view all orders
- [ ] Admin can update order status
- [ ] Admin can create/edit/delete products
- [ ] Admin can view user list
- [ ] Admin dashboard shows statistics

---

## 6.2 Automated API Testing (BỔ SUNG MỚI) ⭐

> 🎯 **Mục đích:**
>
> - Tự động kiểm thử tất cả API endpoints
> - Đảm bảo tính nhất quán khi thay đổi code
> - Phát hiện lỗi sớm trước khi deploy
>
> 📅 **Ngày bổ sung:** 2025-01-10
> 📁 **File mới tạo:** `backend/tests/api-test.js`

### 6.2.1 Tạo Automated Test Suite

**📁 Vị trí file:** `fashion-website-backend/tests/api-test.js`

**🔧 Mục đích:**

- Kiểm thử tự động 65 API endpoints
- Chạy test bằng một lệnh duy nhất
- Xuất báo cáo JSON và console

```javascript
/**
 * Fashion Website API Test Suite
 * Kiểm thử tự động tất cả các API endpoints
 *
 * Cách chạy: node tests/api-test.js
 * Yêu cầu: Server đang chạy tại localhost:5000
 */

const BASE_URL = process.env.API_URL || "http://localhost:5000/api";

// Test results storage
const testResults = {
  passed: 0,
  failed: 0,
  total: 0,
  details: [],
};

// Stored data for chained tests
let accessToken = "";
let refreshToken = "";
let testProductId = "";
let cartItemId = "";

// Colors for console output
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * HTTP Request Helper
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE)
 * @param {string} endpoint - API endpoint
 * @param {object} body - Request body (optional)
 * @param {object} headers - Custom headers (optional)
 */
async function request(method, endpoint, body = null, headers = {}) {
  const url = endpoint.startsWith("http") ? endpoint : `${BASE_URL}${endpoint}`;

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    const data = await response.json().catch(() => ({}));
    return {
      status: response.status,
      data,
      headers: Object.fromEntries(response.headers.entries()),
    };
  } catch (error) {
    return {
      status: 0,
      error: error.message,
      data: null,
    };
  }
}

/**
 * Test Runner - Chạy một test case và ghi kết quả
 */
async function runTest(testName, testFn) {
  testResults.total++;
  const startTime = Date.now();

  try {
    const result = await testFn();
    const duration = Date.now() - startTime;

    if (result.passed) {
      testResults.passed++;
      console.log(`${colors.green}✓${colors.reset} ${testName} (${duration}ms)`);
    } else {
      testResults.failed++;
      console.log(`${colors.red}✗${colors.reset} ${testName} (${duration}ms)`);
      console.log(`  Expected: ${result.expected}`);
      console.log(`  Actual: ${result.actual}`);
    }

    testResults.details.push({
      name: testName,
      passed: result.passed,
      duration,
      expected: result.expected,
      actual: result.actual,
    });
  } catch (error) {
    testResults.failed++;
    console.log(`${colors.red}✗${colors.reset} ${testName} - Error: ${error.message}`);
  }
}

// ============================================================
// TEST MODULES - Mỗi module kiểm thử một nhóm API
// ============================================================

// Chi tiết các test modules xem trong file đầy đủ
// Tests bao gồm: Health Check, Authentication, Products, Cart,
// Wishlist, Checkout, Orders, Profile
```

### 6.2.2 Ví dụ Test Cases

**🔐 Authentication Tests:**

```javascript
// Test đăng ký với dữ liệu hợp lệ
await runTest("Register - New user success (201)", async () => {
  const res = await request("POST", "/auth/register", {
    firstName: "Test",
    lastName: "User",
    email: `test_${Date.now()}@example.com`,
    password: "TestPassword123!",
    confirmPassword: "TestPassword123!",
  });
  return {
    passed: res.status === 201 && res.data.success === true,
    expected: "Status 201, success: true",
    actual: `Status ${res.status}, success: ${res.data?.success}`,
  };
});

// Test đăng nhập thành công
await runTest("Login - Valid credentials (200)", async () => {
  const res = await request("POST", "/auth/login", {
    email: "admin@example.com",
    password: "password123",
  });

  if (res.status === 200 && res.data.data?.accessToken) {
    accessToken = res.data.data.accessToken; // Lưu token cho các test sau
  }

  return {
    passed: res.status === 200 && res.data.success === true,
    expected: "Status 200, success: true",
    actual: `Status ${res.status}`,
  };
});
```

**📦 Product Tests:**

```javascript
// Test lọc sản phẩm theo giá
await runTest("Get Products - Price range filter (200)", async () => {
  const res = await request("GET", "/products?minPrice=50&maxPrice=200");
  return {
    passed: res.status === 200 && res.data.success === true,
    expected: "Status 200, success: true",
    actual: `Status ${res.status}`,
  };
});

// Test sắp xếp sản phẩm
// ⚠️ LƯU Ý: Sort parameter dùng format hyphenated: price-asc, price-desc, newest
await runTest("Get Products - Sort by price ascending (200)", async () => {
  const res = await request("GET", "/products?sort=price-asc");
  return {
    passed: res.status === 200 && res.data.success === true,
    expected: "Status 200, success: true",
    actual: `Status ${res.status}`,
  };
});
```

**🛒 Cart Tests:**

```javascript
// Test thêm sản phẩm vào giỏ hàng
await runTest("Add to Cart - Valid product (200)", async () => {
  const res = await request(
    "POST",
    "/cart/items",
    {
      productId: testProductId,
      quantity: 1,
    },
    {
      Authorization: `Bearer ${accessToken}`,
    }
  );
  return {
    passed: [200, 201].includes(res.status) && res.data.success === true,
    expected: "Status 200 or 201, success: true",
    actual: `Status ${res.status}`,
  };
});
```

### 6.2.3 Cách chạy Test Suite

```bash
# Đảm bảo server đang chạy
cd fashion-website-backend
npm run dev

# Mở terminal mới và chạy test
node tests/api-test.js
```

### 6.2.4 Kết quả Test (65 Test Cases)

| Module            | Tests  | Pass Rate |
| ----------------- | ------ | --------- |
| 🏥 Health Check   | 3      | 100%      |
| 🔐 Authentication | 14     | 100%      |
| 📦 Products       | 14     | 100%      |
| 🛒 Cart           | 8      | 100%      |
| ❤️ Wishlist       | 7      | 100%      |
| 💳 Checkout       | 6      | 100%      |
| 📋 Orders         | 5      | 100%      |
| 👤 Profile        | 7      | 100%      |
| **TOTAL**         | **65** | **100%**  |

### 6.2.5 Các lưu ý quan trọng khi viết test

> ⚠️ **Những điểm cần chú ý (đã phát hiện trong quá trình test):**

| Vấn đề                | Giải pháp                                                                    |
| --------------------- | ---------------------------------------------------------------------------- |
| Sort parameter format | Dùng `price-asc`, `price-desc`, `newest` (không phải `sort=price&order=asc`) |
| Product sizes         | Array of objects: `[{ name: "M", stock: 40 }]` với name là enum              |
| Product colors        | Array of objects: `[{ name: "Black", hexCode: "#000000", stock: 50 }]`       |
| Rate limiting         | Auth endpoints có rate limit, có thể trả về 429                              |
| Guest cart            | Cần header `x-cart-session` cho guest users                                  |

---

## 6.3 Test Report (BỔ SUNG MỚI)

**📁 File báo cáo:** `fashion-website-backend/tests/API_TEST_REPORT.md`

File này được tự động tạo sau khi chạy test suite, bao gồm:

- Tổng quan kết quả (passed/failed/total)
- Chi tiết từng test case
- Thời gian thực thi
- Response data (để debug nếu fail)

---

# Part 7: Deployment

> 🎯 **Mục tiêu Part này:**
>
> - Containerize ứng dụng với Docker
> - Deploy lên cloud server (Ubuntu VPS)
> - Setup SSL/HTTPS với Nginx + Let's Encrypt
> - Configure CI/CD với GitHub Actions

(Xem nội dung chi tiết ở phần Part 7: Deployment Notes bên dưới)

---

# Part 8: Advanced Features (Đã implement)

> ✅ **Cập nhật quan trọng**: Tất cả các tính năng nâng cao đã được **IMPLEMENT HOÀN CHỈNH** trong cả Backend và Frontend.
>
> **Backend đã có:** `orderController.js`, `checkoutController.js`, `reviewController.js`, `couponController.js`, `paymentController.js`, `inventoryController.js`, `adminController.js`
>
> **Models đầy đủ:** `User.js`, `Product.js`, `Cart.js`, `Order.js`, `Review.js`, `Coupon.js`

---

## 8.1 Order System (Hệ thống Đơn hàng)

### 6.1.1 Order Model

```javascript
// backend/src/models/Order.js
import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: String,
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  size: String,
  color: String,
  sku: String,
});

// 📝 Order address dùng firstName/lastName (KHÔNG phải fullName)
// 📝 Dùng "address" (KHÔNG phải "street"), "postalCode" (KHÔNG phải "zipCode")
const addressSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  apartment: String,
  city: {
    type: String,
    required: true,
  },
  state: String,
  postalCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
    default: "Vietnam",
  },
  phone: {
    type: String,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    // Order Number - unique, human-readable
    orderNumber: {
      type: String,
      unique: true,
      required: true,
    },

    // User (optional for guest checkout)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // Guest Email (for guest checkout)
    guestEmail: {
      type: String,
      trim: true,
      lowercase: true,
    },

    // Order Items
    items: [orderItemSchema],

    // Addresses
    shippingAddress: addressSchema,
    billingAddress: addressSchema,
    sameAsShipping: {
      type: Boolean,
      default: true,
    },

    // Pricing
    // 📝 Dùng "shippingCost" (KHÔNG phải "shipping"), "total" (KHÔNG phải "totalAmount")
    subtotal: {
      type: Number,
      required: true,
      min: 0,
    },
    shippingCost: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    tax: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    discount: {
      type: Number,
      default: 0,
      min: 0,
    },
    total: {
      type: Number,
      required: true,
      min: 0,
    },

    // Coupon
    // 📝 Dùng "discountType" + "discountValue" (KHÔNG phải "type" + "discount")
    coupon: {
      code: String,
      discountType: {
        type: String,
        enum: ["percentage", "fixed"],
      },
      discountValue: Number,
    },

    // Shipping
    shippingMethod: {
      type: String,
      enum: ["standard", "express", "overnight"],
      default: "standard",
    },
    estimatedDelivery: Date,
    trackingNumber: String,
    carrier: String,

    // Payment (top-level fields, KHÔNG phải nested object)
    // 📝 Dùng "paymentMethod" + "paymentStatus" (KHÔNG phải "payment.method" + "payment.status")
    paymentMethod: {
      type: String,
      enum: ["cod", "card", "bank_transfer", "paypal", "momo", "zalopay"],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded", "partial_refund"],
      default: "pending",
    },
    paymentIntentId: String, // For Stripe
    paidAt: Date,

    // Order Status
    status: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "processing",
        "shipped",
        "delivered",
        "cancelled",
        "returned",
        "refunded",
      ],
      default: "pending",
    },

    // Status History
    statusHistory: [
      {
        status: String,
        timestamp: {
          type: Date,
          default: Date.now,
        },
        note: String,
        updatedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],

    // Notes
    // 📝 Dùng "customerNote" (KHÔNG phải "notes"), "adminNote" (KHÔNG phải "internalNotes")
    customerNote: String,
    adminNote: {
      type: String,
      select: false, // Hide from customer queries
    },

    // Cancellation
    cancelReason: String,
    cancelledAt: Date,
    cancelledBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // Return (flat fields, KHÔNG phải nested object)
    returnRequested: {
      type: Boolean,
      default: false,
    },
    returnReason: String,
    returnStatus: {
      type: String,
      enum: ["pending", "approved", "rejected", "completed"],
    },

    // Timestamps
    confirmedAt: Date,
    shippedAt: Date,
    deliveredAt: Date,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// 💡 INDEXES: Tối ưu hiệu suất query
// MongoDB index = "mục lục" → tìm kiếm nhanh thay vì scan toàn bộ
// 📌 GHI NHỚ: orderNumber đã có unique:true → tự tạo index → không cần khai báo lại
// 🎯 PHỎNG VẤN: "Compound index là gì?"
// → Index trên NHIỀU fields: { user: 1, createdAt: -1 }
// → 1 = ascending (tăng dần), -1 = descending (giảm dần)
// → Optimize cho query: Order.find({ user: userId }).sort({ createdAt: -1 })
orderSchema.index({ user: 1, createdAt: -1 }); // Đơn hàng của user, mới nhất trước
orderSchema.index({ status: 1, createdAt: -1 }); // Lọc theo status
orderSchema.index({ guestEmail: 1 }); // Tìm đơn guest
orderSchema.index({ paymentStatus: 1 }); // Lọc theo payment status
orderSchema.index({ createdAt: -1 }); // Sort theo thời gian

// 💡 Virtual: Tính tổng số lượng sản phẩm trong đơn
orderSchema.virtual("itemCount").get(function () {
  return this.items.reduce((total, item) => total + item.quantity, 0);
});

// 💡 STATIC METHOD: Tạo mã đơn hàng unique (format: FSYYMMDD0001)
// Static method gắn vào MODEL (khác instance method gắn vào document)
// Gọi bằng: Order.generateOrderNumber() (trên class, không phải instance)
// 🎯 PHỎNG VẤN: "Static vs Instance method trong Mongoose?"
// → Static: Order.generateOrderNumber() → thao tác trên collection
// → Instance: order.canBeCancelled() → thao tác trên 1 document cụ thể
orderSchema.statics.generateOrderNumber = async function () {
  const date = new Date();
  // 💡 .slice(-2): Lấy 2 ký tự cuối → "2025" → "25"
  const year = date.getFullYear().toString().slice(-2);
  // 💡 .padStart(2, "0"): Đảm bảo 2 chữ số → tháng 1 → "01"
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  // 💡 Tìm đơn hàng cuối cùng trong ngày để tạo sequence number
  const startOfDay = new Date(date.setHours(0, 0, 0, 0));
  const endOfDay = new Date(date.setHours(23, 59, 59, 999));

  const lastOrder = await this.findOne({
    createdAt: { $gte: startOfDay, $lte: endOfDay },
    // 💡 $gte (greater than or equal), $lte (less than or equal)
    // → Tìm đơn được tạo trong ngày hôm nay
  }).sort({ createdAt: -1 }); // Sắp xếp giảm dần → lấy đơn MỚI NHẤT

  let sequence = 1;
  if (lastOrder && lastOrder.orderNumber) {
    // 💡 .slice(-4): Lấy 4 ký tự cuối của orderNumber → "0003" → 3
    const lastSequence = parseInt(lastOrder.orderNumber.slice(-4), 10);
    sequence = lastSequence + 1;
  }

  // 💡 Kết quả: "FS" + "25" + "01" + "15" + "0001" = "FS2501150001"
  return `FS${year}${month}${day}${sequence.toString().padStart(4, "0")}`;
};

// 💡 PRE-SAVE: Tự động track status history khi status thay đổi
// Pattern: Audit trail - lưu lại MỌI thay đổi trạng thái để trace back
// ⚡ THỰC TẾ: Rất quan trọng cho ecommerce (khách hàng hỏi "đơn tôi đang ở đâu?")
orderSchema.pre("save", function () {
  if (this.isModified("status")) {
    this.statusHistory.push({
      status: this.status,
      timestamp: new Date(),
    });

    // 💡 Auto-set timestamp fields dựa trên status mới
    switch (this.status) {
      case "confirmed":
        this.confirmedAt = new Date();
        break;
      case "shipped":
        this.shippedAt = new Date();
        break;
      case "delivered":
        this.deliveredAt = new Date();
        break;
      case "cancelled":
        this.cancelledAt = new Date();
        break;
    }
  }
});

// 💡 BUSINESS LOGIC Methods: Encapsulate rules vào model
// 🔑 TẠI SAO đặt trong model thay vì controller?
// → Rules nhất quán dù gọi từ đâu (API, admin panel, cron job)
// → Single Source of Truth cho business rules
orderSchema.methods.canBeCancelled = function () {
  const nonCancellableStatuses = ["shipped", "delivered", "cancelled", "returned", "refunded"];
  return !nonCancellableStatuses.includes(this.status);
  // 💡 Đã ship/giao/hủy rồi → không thể hủy nữa
};

orderSchema.methods.canRequestReturn = function () {
  if (this.status !== "delivered") return false;
  // 💡 Chỉ return được khi đã giao hàng + trong vòng 30 ngày
  const deliveryDate = this.deliveredAt || this.updatedAt;
  const daysSinceDelivery = (Date.now() - deliveryDate) / (1000 * 60 * 60 * 24);
  return daysSinceDelivery <= 30;
};

const Order = mongoose.model("Order", orderSchema);

export default Order;
```

### 6.1.2 Order Controller

> 💡 **ORDER CONTROLLER — Trung tâm xử lý đơn hàng**
>
> Controller này xử lý toàn bộ lifecycle (vòng đời) của đơn hàng:
>
> - `createOrder` — Tạo đơn mới từ cart
> - `getOrders` — Lấy danh sách đơn (pagination)
> - `getOrderById` — Xem chi tiết 1 đơn
> - `trackOrder` — Guest track đơn bằng orderNumber
> - `cancelOrder` — Hủy đơn (kiểm tra business rules)
> - `requestReturn` — Yêu cầu trả hàng (30 ngày)
> - `getOrderInvoice` — Xuất hóa đơn
> - `getAllOrders` — Admin xem tất cả đơn (search, filter, sort)
> - `updateOrderStatus` — Admin cập nhật trạng thái
>
> 📌 **PATTERN QUAN TRỌNG:**
>
> - Mỗi function đều là `async (req, res, next)` + try/catch/next(error)
> - LUÔN verify ownership: `{ _id: id, user: req.user._id }` → user chỉ thấy đơn của mình
> - Stock management: Giảm stock khi tạo đơn, tăng stock khi hủy đơn

```javascript
// backend/src/controllers/orderController.js
import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

/**
 * @desc    Create new order from cart
 * @route   POST /api/orders
 * @access  Private/Public (guest checkout)
 */
// 💡 createOrder: Function phức tạp nhất — xử lý cả authenticated user VÀ guest
// ⚡ THỰC TẾ: Đây là "happy path" chính của ecommerce — user click "Place Order"
export const createOrder = async (req, res, next) => {
  try {
    // 💡 DESTRUCTURING với DEFAULT VALUES
    // sameAsShipping = true → nếu client không gửi, mặc định true
    // shippingMethod = "standard" → mặc định standard shipping
    // 🔑 TẠI SAO dùng default? → Giảm validation logic, UX tốt hơn
    const {
      shippingAddress,
      billingAddress,
      sameAsShipping = true,
      paymentMethod,
      shippingMethod = "standard",
      customerNote,
      guestEmail,
    } = req.body;

    // 💡 STRATEGY PATTERN: Xử lý khác nhau cho authenticated vs guest
    // req.user tồn tại → đã login → lấy cart từ DB
    // Không có req.user → guest → lấy items từ request body
    let cartItems = [];
    if (req.user) {
      // 💡 .populate("items.product"): Load full product data thay vì chỉ ObjectId
      // Cần để tính giá, check stock
      const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");
      if (!cart || cart.items.length === 0) {
        return res.status(400).json({
          success: false,
          message: "Cart is empty",
        });
      }
      cartItems = cart.items;
    } else if (req.body.items) {
      // Guest checkout with items in request
      cartItems = req.body.items;
    } else {
      return res.status(400).json({
        success: false,
        message: "No items to order",
      });
    }

    // 💡 VALIDATION + TRANSFORMATION: Check stock và build order items
    // Đây là "server-side validation" — KHÔNG TIN client gửi giá
    // 🎯 PHỎNG VẤN: "Tại sao không dùng giá client gửi lên?"
    // → Client có thể hack giá. Server PHẢI tự tính từ DB
    const orderItems = [];
    let subtotal = 0;

    for (const item of cartItems) {
      // 💡 item.product._id ? → Nếu đã populated (có _id) → dùng luôn
      //                       → Nếu chưa (chỉ là ObjectId) → query DB
      // 🔑 Pattern này xử lý cả 2 case: populated cart (auth) vs raw items (guest)
      const product = item.product._id ? item.product : await Product.findById(item.product);

      if (!product) {
        return res.status(400).json({
          success: false,
          message: `Product not found: ${item.product}`,
        });
      }

      if (product.stock < item.quantity) {
        // 📌 GHI NHỚ: Phải check stock TRƯỚC khi tạo order → tránh overselling
        return res.status(400).json({
          success: false,
          message: `Insufficient stock for ${product.name}. Available: ${product.stock}`,
        });
      }

      // 💡 salePrice || price: Ưu tiên giá sale, fallback giá gốc
      // 🔑 || (OR): Nếu salePrice = 0/null/undefined → dùng price
      const price = product.salePrice || product.price;
      const itemTotal = price * item.quantity;
      subtotal += itemTotal;

      // 💡 DENORMALIZATION: Lưu name, image, price VÀO order
      // 🔑 TẠI SAO không chỉ lưu product ID rồi populate?
      // → Nếu product bị xóa/sửa tên/sửa giá → order vẫn giữ nguyên data lúc đặt
      // → Đây là "snapshot" — rất quan trọng cho ecommerce
      // 🎯 PHỎNG VẤN: "Embedded vs Referenced data trong Order?"
      // → Product ID: Referenced (để link về product page)
      // → Name, price, image: Embedded (snapshot tại thời điểm order)
      orderItems.push({
        product: product._id,
        name: product.name,
        // 💡 Optional chaining (?.) + fallback:
        // product.images?.[0]?.url → Nếu images[0] có url (object format)
        // || product.images?.[0]  → Nếu images[0] là string trực tiếp
        // || ""                   → Fallback nếu không có image
        image: product.images?.[0]?.url || product.images?.[0] || "",
        price,
        quantity: item.quantity,
        size: item.size,
        color: item.color,
        sku: product.sku,
      });
    }

    // 💡 SHIPPING CALCULATION: Lookup table pattern
    // Object mapping thay vì if/else chain → dễ mở rộng, dễ đọc
    const shippingCosts = {
      standard: 5.99,
      express: 14.99,
      overnight: 29.99,
    };
    // 💡 Free shipping khi subtotal >= $100 (threshold promotion)
    // || 5.99: Fallback nếu shippingMethod không hợp lệ
    const shippingCost = subtotal >= 100 ? 0 : shippingCosts[shippingMethod] || 5.99;

    // 💡 TAX CALCULATION
    // .toFixed(2) → Làm tròn 2 chữ số thập phân: 15.555 → "15.56"
    // Number() → Convert string "15.56" → number 15.56
    // 🔑 TẠI SAO Number((...).toFixed(2))? → Tránh floating point: 0.1 + 0.2 = 0.30000000000000004
    const taxRate = 0.1;
    const tax = Number((subtotal * taxRate).toFixed(2));

    // Calculate total
    const total = Number((subtotal + shippingCost + tax).toFixed(2));

    // 💡 ESTIMATED DELIVERY: Tính ngày giao dự kiến
    const deliveryDays = { standard: 5, express: 2, overnight: 1 };
    const estimatedDelivery = new Date();
    // 💡 .setDate() + .getDate(): Cộng thêm N ngày vào ngày hiện tại
    estimatedDelivery.setDate(estimatedDelivery.getDate() + (deliveryDays[shippingMethod] || 5));

    // 💡 Gọi static method trên Model (không phải instance)
    const orderNumber = await Order.generateOrderNumber();

    // 💡 Create order object rồi save
    // 🔑 TẠI SAO new Order() + save() thay vì Order.create()?
    // → Cả 2 đều OK, nhưng new + save cho phép manipulate trước khi save
    // → Ngoài ra order.save() sẽ trigger pre-save hooks (status history)
    // 📝 Dùng top-level paymentMethod/paymentStatus (KHÔNG phải nested payment object)
    // 📝 Dùng shippingCost (KHÔNG phải shipping)
    const order = new Order({
      orderNumber,
      // 💡 req.user?._id: Optional chaining → null nếu guest
      user: req.user?._id,
      // 💡 Conditional: Chỉ set guestEmail nếu KHÔNG phải authenticated user
      guestEmail: !req.user ? guestEmail : undefined,
      items: orderItems,
      shippingAddress,
      // 💡 Ternary: nếu sameAsShipping → dùng shippingAddress cho cả billing
      billingAddress: sameAsShipping ? shippingAddress : billingAddress,
      sameAsShipping,
      subtotal,
      shippingCost,
      tax,
      total,
      shippingMethod,
      estimatedDelivery,
      paymentMethod,
      customerNote,
      status: "pending",
      paymentStatus: paymentMethod === "cod" ? "pending" : "pending",
    });

    await order.save();

    // 💡 ATOMIC STOCK UPDATE: $inc operator
    // $inc: { stock: -item.quantity } → Giảm stock đúng số lượng
    // 🔑 TẠI SAO dùng $inc thay vì read → modify → save?
    // → $inc là ATOMIC: Nếu 2 user order cùng lúc, stock vẫn đúng
    // → Read-modify-save: Race condition → có thể oversell
    // 🎯 PHỎNG VẤN: "Race condition là gì? Làm sao tránh?"
    // → 2 request đọc stock=5, cả 2 order 3 → cả 2 save stock=2
    // → Nhưng đúng ra stock phải = -1 (oversold!). $inc giải quyết vấn đề này.
    for (const item of orderItems) {
      await Product.findByIdAndUpdate(item.product, {
        $inc: { stock: -item.quantity },
      });
    }

    // 💡 Clear cart sau khi order thành công
    // findOneAndUpdate: Reset items về [] nhưng KHÔNG xóa cart document
    // 🔑 TẠI SAO không deleteOne? → Giữ cart document để user tiếp tục shopping
    if (req.user) {
      await Cart.findOneAndUpdate({ user: req.user._id }, { items: [], subtotal: 0, total: 0 });
    }

    // 💡 Response 201 (Created): Trả về thông tin cần thiết cho frontend
    // Chỉ trả minimal data → frontend redirect tới order detail page
    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: {
        order: {
          _id: order._id,
          orderNumber: order.orderNumber,
          total: order.total,
          status: order.status,
          estimatedDelivery: order.estimatedDelivery,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get all orders for current user
 * @route   GET /api/orders
 * @access  Private
 */
// 💡 PAGINATION PATTERN: Lấy danh sách theo trang
// 🎯 PHỎNG VẤN: "Tại sao dùng pagination thay vì trả tất cả?"
// → Performance: 10.000 orders → chỉ load 10 → nhanh hơn 1000 lần
// → UX: User không cần scroll vô tận
// → Bandwidth: Tiết kiệm dữ liệu truyền tải
export const getOrders = async (req, res, next) => {
  try {
    // 💡 QUERY PARAMS với DEFAULT: page = 1, limit = 10 nếu không truyền
    // req.query lấy từ URL: /api/orders?page=2&limit=5&status=shipped
    const { page = 1, limit = 10, status } = req.query;

    // 💡 Dynamic query building: Chỉ thêm filter nếu có
    // Luôn filter theo user → user chỉ thấy đơn của mình (AUTHORIZATION)
    const query = { user: req.user._id };
    if (status) {
      query.status = status;
    }

    // 💡 MONGOOSE QUERY CHAIN:
    // .sort({ createdAt: -1 }) → Mới nhất trước
    // .skip((page-1) * limit) → Bỏ qua N documents (page 2, limit 10 → skip 10)
    // .limit() → Giới hạn số lượng trả về
    // .select("-adminNote") → Loại bỏ adminNote (dấu - = exclude)
    // 📌 GHI NHỚ: skip + limit = pagination cơ bản trong MongoDB
    const orders = await Order.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .select("-adminNote");

    // 💡 countDocuments: Đếm tổng số documents match query (cho pagination metadata)
    const total = await Order.countDocuments(query);

    // 💡 PAGINATION METADATA: Frontend cần để render pagination UI
    // hasNextPage: Còn trang tiếp không?
    // hasPrevPage: Có trang trước không?
    // totalPages: Tổng số trang = ceil(total / limit) → 25/10 = 3 trang
    res.status(200).json({
      success: true,
      data: {
        orders,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(total / limit),
          totalOrders: total,
          hasNextPage: page * limit < total,
          hasPrevPage: page > 1,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get order by ID
 * @route   GET /api/orders/:id
 * @access  Private
 */
// 💡 OWNERSHIP CHECK: User chỉ xem được đơn của CHÍNH MÌNH
// findOne({ _id: ..., user: req.user._id }) → 2 điều kiện AND
// 🔑 TẠI SAO không dùng findById(id) rồi check order.user === req.user._id?
// → findOne kết hợp = 1 query thay vì 2 bước → hiệu quả hơn
// → Nếu order thuộc user khác → trả 404 thay vì 403 (không leak info)
export const getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user._id,
    })
      // 💡 .populate("items.product", "name slug images"):
      // Load product data nhưng CHỈ lấy name, slug, images
      // → Để frontend render link về product page
      .populate("items.product", "name slug images")
      .select("-adminNote"); // Ẩn ghi chú nội bộ admin

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      data: { order },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Track order by order number (guest)
 * @route   GET /api/orders/track/:orderNumber
 * @access  Public
 */
// 💡 PUBLIC endpoint: Guest track đơn hàng bằng orderNumber + email
// Không cần login → ai cũng gọi được → PHẢI verify email để bảo mật
// ⚡ THỰC TẾ: Amazon, Shopee đều có tính năng "Track without login"
export const trackOrder = async (req, res, next) => {
  try {
    const { orderNumber } = req.params; // /api/orders/track/FS2501150001
    const { email } = req.query; // ?email=guest@example.com

    const query = { orderNumber };

    // 💡 Verify email cho guest → tránh ai cũng xem được đơn người khác
    if (email) {
      query.guestEmail = email.toLowerCase();
    }

    // 💡 .select(): Chỉ trả những field cần thiết cho tracking
    // Không trả shippingAddress, billingAddress, paymentMethod → bảo mật
    const order = await Order.findOne(query).select(
      "orderNumber status statusHistory shippingMethod estimatedDelivery trackingNumber carrier createdAt deliveredAt shippedAt items.name items.quantity total"
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found. Please check your order number and email.",
      });
    }

    res.status(200).json({
      success: true,
      data: { order },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Cancel order
 * @route   POST /api/orders/:id/cancel
 * @access  Private
 */
// 💡 CANCEL ORDER: Business logic phức tạp cần hiểu rõ
// Flow: Verify ownership → Check cancellable → Update status → Restore stock
// ⚡ THỰC TẾ: Hủy đơn = tác vụ "compensating" → phải UNDO mọi thứ đã làm khi tạo đơn
export const cancelOrder = async (req, res, next) => {
  try {
    const { reason } = req.body;

    // 💡 Ownership check: User chỉ hủy được đơn của mình
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // 💡 Gọi instance method từ Model (đã define trong orderSchema.methods)
    // 🔑 TẠI SAO dùng method thay vì check trực tiếp?
    // → Business rule nằm 1 chỗ (Model) → dễ maintain khi thay đổi rules
    // → DRY: Dùng lại ở nhiều nơi (API, admin panel, cron job)
    // Dùng canBeCancelled() instance method (KHÔNG phải manual check)
    if (!order.canBeCancelled()) {
      return res.status(400).json({
        success: false,
        message: `Order cannot be cancelled. Current status: ${order.status}`,
      });
    }

    order.status = "cancelled";
    order.cancelReason = reason;
    order.cancelledBy = req.user._id; // 📝 ObjectId (KHÔNG phải string "user")

    // 💡 .save() trigger pre-save hook → tự động push vào statusHistory
    await order.save();

    // 💡 RESTORE STOCK: Hoàn lại stock khi hủy đơn (compensating action)
    // $inc: { stock: +item.quantity } → CỘNG lại (ngược với khi tạo đơn)
    // ⚡ THỰC TẾ: Nếu quên restore stock → sản phẩm "mất" vĩnh viễn trong hệ thống
    for (const item of order.items) {
      await Product.findByIdAndUpdate(item.product, {
        $inc: { stock: item.quantity },
      });
    }

    res.status(200).json({
      success: true,
      message: "Order cancelled successfully",
      data: { order },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Request return for order
 * @route   POST /api/orders/:id/return
 * @access  Private
 */
// 💡 RETURN REQUEST: Yêu cầu trả hàng (không phải trả ngay)
// Flow: Verify ownership → Check returnable (30 ngày) → Mark as return requested
// 🔑 TẠI SAO return là "request" chứ không tự động?
// → Admin cần review lý do trả hàng trước khi approve
// → Tránh abuse (mua dùng xong trả)
export const requestReturn = async (req, res, next) => {
  try {
    const { reason, items } = req.body;

    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // 💡 Gọi canRequestReturn() → check status === "delivered" + trong 30 ngày
    // Dùng canRequestReturn() instance method
    if (!order.canRequestReturn()) {
      return res.status(400).json({
        success: false,
        message: "Return request cannot be submitted for this order",
      });
    }

    // 📝 Return dùng flat fields (KHÔNG phải nested returnRequest object)
    // 💡 Flat fields: Mỗi field nằm trực tiếp trên order document
    // → Dễ query: Order.find({ returnStatus: "pending" })
    // → Nếu nested: Order.find({ "returnRequest.status": "pending" }) → phức tạp hơn
    order.returnRequested = true;
    order.returnReason = reason;
    order.returnStatus = "pending";

    await order.save();

    res.status(200).json({
      success: true,
      message: "Return request submitted successfully",
      data: {
        orderId: order._id,
        returnStatus: order.returnStatus,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get order invoice
 * @route   GET /api/orders/:id/invoice
 * @access  Private
 */
export const getOrderInvoice = async (req, res, next) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user._id,
    }).select("-adminNote");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    const invoice = {
      invoiceNumber: `INV-${order.orderNumber}`,
      orderNumber: order.orderNumber,
      orderDate: order.createdAt,
      items: order.items,
      subtotal: order.subtotal,
      shippingCost: order.shippingCost,
      tax: order.tax,
      discount: order.discount,
      total: order.total,
      shippingAddress: order.shippingAddress,
      billingAddress: order.billingAddress,
      paymentMethod: order.paymentMethod,
      paymentStatus: order.paymentStatus,
    };

    res.status(200).json({
      success: true,
      data: { invoice },
    });
  } catch (error) {
    next(error);
  }
};

// ============ ADMIN ROUTES ============
// 💡 Những endpoint dưới đây CHỈ admin mới gọi được (protect + adminOnly middleware)

/**
 * @desc    Get all orders (Admin)
 * @route   GET /api/orders/admin/all
 * @access  Admin
 */
// 💡 ADMIN LIST: Search + Filter + Sort + Pagination
// ⚡ THỰC TẾ: Admin dashboard cần xem TẤT CẢ đơn → query phức tạp hơn user
export const getAllOrders = async (req, res, next) => {
  try {
    // 💡 DESTRUCTURING nhiều query params với defaults
    // Cho phép: /api/orders/admin/all?status=shipped&search=john&sortBy=total&sortOrder=asc&page=2
    const {
      page = 1,
      limit = 20,
      status,
      paymentStatus,
      search,
      sortBy = "createdAt",
      sortOrder = "desc",
    } = req.query;

    // 💡 DYNAMIC QUERY BUILDING: Thêm filter dần dần
    // Bắt đầu từ {} (empty = tất cả), thêm condition nếu có
    const query = {};
    if (status) query.status = status;
    if (paymentStatus) query.paymentStatus = paymentStatus;

    // 💡 $or: MongoDB OR operator — match BẤT KỲ condition nào
    // $regex: Text search không chính xác (partial match)
    // $options: "i" = case-insensitive (không phân biệt hoa/thường)
    // 🔑 TẠI SAO search nhiều fields? → Admin tìm bằng mã đơn, tên khách, hoặc email
    // 🎯 PHỎNG VẤN: "Full-text search vs $regex?"
    // → $regex: Đơn giản, phù hợp quy mô nhỏ
    // → MongoDB Atlas Search hoặc Elasticsearch: Quy mô lớn, hỗ trợ fuzzy search
    if (search) {
      query.$or = [
        { orderNumber: { $regex: search, $options: "i" } },
        { "shippingAddress.firstName": { $regex: search, $options: "i" } },
        { "shippingAddress.lastName": { $regex: search, $options: "i" } },
        { guestEmail: { $regex: search, $options: "i" } },
      ];
    }

    // 💡 COMPUTED PROPERTY NAME: { [sortBy]: value }
    // sortBy = "total" → sort = { total: -1 }
    // sortBy = "createdAt" → sort = { createdAt: -1 }
    // 🔑 [sortBy] = dynamic key trong object literal (ES6 feature)
    const sort = { [sortBy]: sortOrder === "desc" ? -1 : 1 };

    // 💡 .populate("user", "email firstName lastName"):
    // Load user data nhưng CHỈ email + name (không password, address, etc.)
    const orders = await Order.find(query)
      .populate("user", "email firstName lastName")
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Order.countDocuments(query);

    res.status(200).json({
      success: true,
      data: {
        orders,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(total / limit),
          totalOrders: total,
          hasNextPage: page * limit < total,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update order status (Admin)
 * @route   PATCH /api/orders/:id/status
 * @access  Admin
 */
// 💡 ADMIN UPDATE STATUS: Cập nhật trạng thái đơn hàng
// 🔑 PATCH (không phải PUT): Chỉ update 1 phần (status) chứ không replace toàn bộ
// ⚡ THỰC TẾ: Admin dashboard có dropdown chọn status → gọi API này
export const updateOrderStatus = async (req, res, next) => {
  try {
    const { status, note, trackingNumber, carrier } = req.body;

    // 💡 Admin xem TẤT CẢ orders → không cần filter theo user
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // 💡 Update status → trigger pre-save hook → auto push statusHistory
    order.status = status;

    // 💡 Add note to LAST status history entry
    // statusHistory là array, push entry mới khi save (trong pre-save hook)
    // Note + updatedBy được gắn vào entry cuối cùng
    if (note) {
      order.statusHistory[order.statusHistory.length - 1].note = note;
      order.statusHistory[order.statusHistory.length - 1].updatedBy = req.user._id;
    }

    // 💡 Tracking info: Chỉ cần khi status = "shipped"
    // trackingNumber: Mã vận đơn (VD: VNPOST123456)
    // carrier: Đơn vị vận chuyển (VD: "VNPost", "GHN", "GHTK")
    if (status === "shipped") {
      order.trackingNumber = trackingNumber;
      order.carrier = carrier;
    }

    // 💡 AUTO PAYMENT UPDATE: COD (Cash on Delivery) → paid khi delivered
    // 🔑 TẠI SAO? Với COD, customer trả tiền KHI NHẬN hàng
    // → Khi admin mark "delivered" → tự động update paymentStatus = "paid"
    if (status === "delivered" && order.paymentMethod === "cod") {
      order.paymentStatus = "paid";
      order.paidAt = new Date();
    }

    await order.save();

    res.status(200).json({
      success: true,
      message: "Order status updated successfully",
      data: { order },
    });
  } catch (error) {
    next(error);
  }
};
```

### 6.1.3 Order Routes

> 🎯 **PHỎNG VẤN — ORDER CONTROLLER:**
>
> **Q: "Giải thích flow tạo đơn hàng?"**
> A: Validate cart → Check stock từng item → Tính giá server-side → Tính shipping + tax → Generate orderNumber → Create order → Giảm stock ($inc atomic) → Clear cart → Response 201
>
> **Q: "Race condition khi 2 user order cùng 1 sản phẩm (stock=1)?"**
> A: Dùng `$inc` atomic operator. Nếu cần nghiêm ngặt hơn, dùng MongoDB transactions với `session.startTransaction()`. Hoặc dùng optimistic locking với `__v` (version key).
>
> **Q: "Tại sao lưu name, price trong order items thay vì chỉ product ID?"**
> A: Denormalization/snapshot pattern. Nếu product bị xóa/sửa giá → order vẫn giữ nguyên data thời điểm đặt hàng. Đây là best practice ecommerce.
>
> **Q: "skip + limit pagination có nhược điểm gì?"**
> A: Performance kém khi offset lớn (skip 10000 phải scan 10000 docs). Alternative: cursor-based pagination dùng `_id > lastId` + limit.
>
> ⚡ **THỰC TẾ DỰ ÁN:**
>
> - LUÔN tính giá server-side, KHÔNG tin giá từ client
> - Compensating actions: Hủy đơn → restore stock, refund payment
> - Audit trail: statusHistory lưu trọn vẹn lịch sử thay đổi
> - Admin endpoints tách riêng route prefix (`/admin/all`) và middleware (`adminOnly`)
> - Graceful handling: Guest checkout + authenticated checkout cùng 1 endpoint

```javascript
// backend/src/routes/orderRoutes.js
// 💡 ORDER ROUTES: Map URL → Middleware → Controller
// Pattern: Public → Protected → Admin (từ ít quyền → nhiều quyền)
import express from "express";
import { protect, optionalAuth, adminOnly } from "../middleware/auth.js";
import {
  validateCreateOrder,
  validateOrderStatus,
  validateOrderReturn,
  validateObjectId,
} from "../middleware/validate.js";
import {
  createOrder,
  getOrders,
  getOrderById,
  trackOrder,
  cancelOrder,
  requestReturn,
  getOrderInvoice,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";

const router = express.Router();

// ============ PUBLIC ROUTES ============
// 💡 Track order: Không cần login → ai cũng gọi được
router.get("/track/:orderNumber", trackOrder);

// ============ PROTECTED ROUTES ============
// 💡 optionalAuth: Guest hoặc authenticated đều tạo được đơn
// 🔑 TẠI SAO optionalAuth cho POST? → Guest checkout không cần tài khoản
router.post("/", optionalAuth, validateCreateOrder, createOrder);

// 💡 protect: Bắt buộc login
router.get("/", protect, getOrders);

// 💡 validateObjectId("id"): Kiểm tra :id có phải ObjectId hợp lệ không
// → Tránh Mongoose CastError khi id = "abc123" (không phải 24-char hex)
router.get("/:id", protect, validateObjectId("id"), getOrderById);

// 💡 POST (không phải DELETE/PATCH): Cancel là ACTION, không phải xóa/sửa resource
// 🔑 REST convention: POST cho "action" endpoints
router.post("/:id/cancel", protect, validateObjectId("id"), cancelOrder);

router.post("/:id/return", protect, validateObjectId("id"), validateOrderReturn, requestReturn);

router.get("/:id/invoice", protect, validateObjectId("id"), getOrderInvoice);

// ============ ADMIN ROUTES ============
// 💡 protect + adminOnly: 2 middleware chain → phải login VÀ phải là admin
router.get("/admin/all", protect, adminOnly, getAllOrders);
router.patch(
  "/:id/status",
  protect,
  adminOnly,
  validateObjectId("id"),
  validateOrderStatus,
  updateOrderStatus
);

export default router;
```

---

## 8.2 Checkout System

### 8.2.1 Checkout Controller

> 💡 **CHECKOUT CONTROLLER — Hệ thống checkout đa bước**
>
> Checkout khác Order Controller ở chỗ TÁCH thành nhiều bước:
>
> 1. `initializeCheckout` — Load cart + tính shipping options + tax
> 2. `getShippingRates` — Tính phí ship theo địa chỉ
> 3. `calculateTax` — Tính thuế
> 4. `validateCoupon` — Kiểm tra mã giảm giá
> 5. `completeCheckout` — Tạo order cuối cùng (giống createOrder nhưng có coupon)
> 6. `getOrderConfirmation` — Trang xác nhận sau checkout
>
> 📌 **TẠI SAO TÁCH RA?**
>
> - Frontend render multi-step checkout form (Step 1: Address → Step 2: Shipping → Step 3: Payment → Step 4: Review)
> - Mỗi step gọi 1 API → trải nghiệm mượt mà, không load 1 lần hết
> - Coupon validation riêng → user biết ngay mã hợp lệ không

```javascript
// backend/src/controllers/checkoutController.js
import Cart from "../models/Cart.js";
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import Coupon from "../models/Coupon.js";

/**
 * @desc    Initialize checkout
 * @route   POST /api/checkout/initialize
 * @access  Private/Public
 */
// 💡 STEP 1: Load cart data + tính toán ban đầu cho checkout page
// Frontend gọi khi user click "Checkout" → hiển thị summary + shipping options
export const initializeCheckout = async (req, res, next) => {
  try {
    let cartItems = [];
    let subtotal = 0;

    // 💡 DUAL FLOW: Authenticated vs Guest (giống createOrder)
    if (req.user) {
      const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");
      if (!cart || cart.items.length === 0) {
        return res.status(400).json({
          success: false,
          message: "Cart is empty",
        });
      }
      cartItems = cart.items;
      subtotal = cart.totalPrice || 0;
    } else if (req.body.items) {
      // 💡 Guest: Client gửi items trong body → server tính giá lại từ DB
      // 🔑 KHÔNG dùng giá client gửi → tự query Product để lấy giá chính xác
      for (const item of req.body.items) {
        const product = await Product.findById(item.productId);
        if (product) {
          const price = product.salePrice || product.price;
          subtotal += price * item.quantity;
          cartItems.push({
            product,
            quantity: item.quantity,
            size: item.size,
            color: item.color,
          });
        }
      }
    }

    // 💡 SHIPPING OPTIONS: Trả về 3 lựa chọn cho frontend render
    // Mỗi option có id, name, price, estimatedDays
    // 🔑 Free shipping nếu subtotal >= $100 (chỉ Standard)
    // ⚡ THỰC TẾ: Threshold free shipping là chiến lược marketing phổ biến
    //   → Khuyến khích user mua thêm để đạt free shipping
    const shippingOptions = [
      {
        id: "standard",
        name: "Standard Shipping",
        price: subtotal >= 100 ? 0 : 5.99, // 💡 Ternary: Free nếu >= $100
        estimatedDays: "5-7 business days",
      },
      {
        id: "express",
        name: "Express Shipping",
        price: 14.99,
        estimatedDays: "2-3 business days",
      },
      {
        id: "overnight",
        name: "Overnight Shipping",
        price: 29.99,
        estimatedDays: "1 business day",
      },
    ];

    // 💡 Vietnam VAT: 10%
    const taxRate = 0.1;
    const tax = Number((subtotal * taxRate).toFixed(2));

    // 💡 RESPONSE SERIALIZATION: Transform data cho frontend
    // .map() tạo array mới với format clean (không leak internal data)
    // qualifiesForFreeShipping: Frontend hiển thị "Free shipping!" badge
    res.status(200).json({
      success: true,
      data: {
        items: cartItems.map((item) => ({
          productId: item.product._id,
          name: item.product.name,
          image: item.product.images?.[0]?.url || item.product.images?.[0],
          price: item.product.salePrice || item.product.price,
          quantity: item.quantity,
          size: item.size,
          color: item.color,
        })),
        subtotal,
        tax,
        shippingOptions,
        freeShippingThreshold: 100,
        qualifiesForFreeShipping: subtotal >= 100,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get shipping rates
 * @route   POST /api/checkout/shipping-rates
 * @access  Public
 */
// 💡 STEP 2: Tính phí ship chi tiết (có thể dựa theo address)
// 🔑 TẠI SAO endpoint riêng? → User thay đổi địa chỉ → recalculate shipping
// ⚡ THỰC TẾ: Real app sẽ gọi API của đơn vị vận chuyển (GHN, GHTK, VNPost)
//   dựa trên khoảng cách, trọng lượng, kích thước
export const getShippingRates = async (req, res, next) => {
  try {
    const { shippingAddress, subtotal = 0 } = req.body;

    // 💡 Hardcoded rates (demo) — real app sẽ call external shipping API
    const rates = [
      {
        id: "standard",
        name: "Standard Shipping",
        price: subtotal >= 100 ? 0 : 5.99,
        // 💡 Date.now() + 7 * 24 * 60 * 60 * 1000 = timestamp hiện tại + 7 ngày (ms)
        estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        estimatedDays: "5-7 business days",
      },
      {
        id: "express",
        name: "Express Shipping",
        price: 14.99,
        estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        estimatedDays: "2-3 business days",
      },
      {
        id: "overnight",
        name: "Overnight Shipping",
        price: 29.99,
        estimatedDelivery: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
        estimatedDays: "1 business day",
      },
    ];

    res.status(200).json({
      success: true,
      data: { rates },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Calculate tax
 * @route   POST /api/checkout/calculate-tax
 * @access  Public
 */
// 💡 STEP 3: Tính thuế riêng — đơn giản hóa cho demo (10% VAT)
// ⚡ THỰC TẾ: Tax phức tạp hơn nhiều → phụ thuộc quốc gia, bang, loại sản phẩm
//   → Dùng service như TaxJar, Avalara cho Mỹ (mỗi bang thuế khác nhau)
export const calculateTax = async (req, res, next) => {
  try {
    const { subtotal } = req.body;

    // Vietnam: 10% VAT
    const taxRate = 0.1;
    const tax = Number((subtotal * taxRate).toFixed(2));

    res.status(200).json({
      success: true,
      data: {
        taxRate,
        taxAmount: tax,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Validate coupon
 * @route   POST /api/checkout/validate-coupon
 * @access  Public
 */
// 💡 STEP 4: Kiểm tra mã giảm giá TRƯỚC khi complete checkout
// Frontend: User nhập mã → click "Apply" → gọi API này → thấy discount ngay
// 🔑 TẠI SAO endpoint riêng? → UX tốt hơn — user biết ngay mã hợp lệ không
//   mà không cần submit toàn bộ form checkout
export const validateCoupon = async (req, res, next) => {
  try {
    const { code, subtotal } = req.body;

    // 💡 findValidCoupon: Static method trên Coupon model
    // Kiểm tra: tồn tại + active + chưa hết hạn + chưa hết lượt dùng
    // .toUpperCase(): Chuẩn hóa mã coupon (SALE10 = sale10 = Sale10)
    let coupon = null;
    try {
      coupon = await Coupon.findValidCoupon(code.toUpperCase());
    } catch (e) {
      // 💡 try/catch lồng: findValidCoupon có thể throw error
      // Bắt ở đây để trả message thân thiện thay vì 500
    }

    if (!coupon) {
      return res.status(400).json({
        success: false,
        message: "Invalid coupon code",
      });
    }

    // 💡 MIN PURCHASE CHECK: Đơn hàng tối thiểu $X mới dùng được
    if (subtotal < (coupon.minPurchase || 0)) {
      return res.status(400).json({
        success: false,
        message: `Minimum order of $${coupon.minPurchase} required for this coupon`,
      });
    }

    // 💡 DISCOUNT CALCULATION: 2 loại discount
    // percentage: 20% off → discount = subtotal * 20 / 100 → cap tại maxDiscount
    // fixed: $10 off → discount = 10 (cố định)
    // 🎯 PHỎNG VẤN: "Tại sao có maxDiscount cho percentage coupon?"
    // → Coupon 50% off, đơn $10.000 → discount $5.000 → lỗ! maxDiscount = $100 → cap lại
    let discount = 0;
    if (coupon.discountType === "percentage") {
      discount = (subtotal * coupon.discountValue) / 100;
      if (coupon.maxDiscount) discount = Math.min(discount, coupon.maxDiscount);
    } else if (coupon.discountType === "fixed") {
      discount = coupon.discountValue;
    }

    res.status(200).json({
      success: true,
      data: {
        code: coupon.code,
        type: coupon.discountType,
        value: coupon.discountValue,
        discount: Number(discount.toFixed(2)),
        message:
          coupon.discountType === "percentage"
            ? `${coupon.discountValue}% off applied`
            : `$${coupon.discountValue} off applied`,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Complete checkout and create order
 * @route   POST /api/checkout/complete
 * @access  Private/Public
 */
// 💡 STEP 5: HOÀN TẤT CHECKOUT — Tạo order cuối cùng
// Giống createOrder nhưng CÓ THÊM coupon support
// 🔑 TẠI SAO có cả createOrder VÀ completeCheckout?
// → createOrder: Simple order creation (direct from cart)
// → completeCheckout: Full checkout flow với coupon, multi-step validation
// ⚡ THỰC TẾ: Ecommerce lớn thường dùng checkout flow (nhiều bước), không phải 1-click order
export const completeCheckout = async (req, res, next) => {
  try {
    const {
      shippingAddress,
      billingAddress,
      sameAsShipping = true,
      paymentMethod,
      shippingMethod = "standard",
      customerNote,
      guestEmail,
      couponCode,
    } = req.body;

    // Get cart items
    let cartItems = [];
    let subtotal = 0;

    if (req.user) {
      const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");
      if (!cart || cart.items.length === 0) {
        return res.status(400).json({
          success: false,
          message: "Cart is empty",
        });
      }
      cartItems = cart.items;
    } else if (req.body.items) {
      cartItems = req.body.items;
    } else {
      return res.status(400).json({
        success: false,
        message: "No items to checkout",
      });
    }

    // Calculate totals
    const orderItems = [];

    for (const item of cartItems) {
      const product = item.product._id ? item.product : await Product.findById(item.product);

      if (!product) {
        return res.status(400).json({
          success: false,
          message: `Product not found`,
        });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Insufficient stock for ${product.name}`,
        });
      }

      const price = product.salePrice || product.price;
      subtotal += price * item.quantity;

      orderItems.push({
        product: product._id,
        name: product.name,
        image: product.images?.[0]?.url || product.images?.[0] || "",
        price,
        quantity: item.quantity,
        size: item.size,
        color: item.color,
      });
    }

    // Calculate shipping
    const shippingCosts = { standard: 5.99, express: 14.99, overnight: 29.99 };
    const shippingCost = subtotal >= 100 ? 0 : shippingCosts[shippingMethod] || 5.99;

    // Calculate tax
    const tax = Number((subtotal * 0.1).toFixed(2));

    // 💡 COUPON APPLICATION: Áp dụng mã giảm giá (nếu có)
    // Pattern: Try to apply → fail silently (continue without discount)
    // 🔑 TẠI SAO fail silently? → Coupon sai không nên block order
    //   → User đã validate ở step 4, đây là double-check
    let discount = 0;
    let couponData = null;
    if (couponCode) {
      try {
        const coupon = await Coupon.findValidCoupon(couponCode.toUpperCase());
        if (coupon) {
          // 💡 calculateDiscount: Instance method trên Coupon document
          discount = coupon.calculateDiscount(subtotal);
          couponData = {
            code: coupon.code,
            discountType: coupon.discountType,
            discountValue: coupon.discountValue,
          };
          // 💡 recordUsage: Tăng usedCount + 1, lưu userId
          // Đảm bảo coupon có giới hạn lượt dùng
          await coupon.recordUsage(req.user?._id);
        }
      } catch (e) {
        // Coupon invalid or expired, continue without discount
      }
    }

    // 💡 TOTAL: subtotal + shipping + tax - discount
    // Discount TRỪ cuối cùng (sau tax) → cách tính phổ biến
    const total = Number((subtotal + shippingCost + tax - discount).toFixed(2));

    // Generate order number
    const orderNumber = await Order.generateOrderNumber();

    // Estimated delivery
    const deliveryDays = { standard: 7, express: 3, overnight: 1 };
    const estimatedDelivery = new Date();
    estimatedDelivery.setDate(estimatedDelivery.getDate() + (deliveryDays[shippingMethod] || 7));

    // 💡 completeCheckout tạo order với status "confirmed" (khác createOrder là "pending")
    // 🔑 TẠI SAO "confirmed"? → Multi-step checkout đã validate hết → confirmed ngay
    //    createOrder chỉ "pending" vì chưa qua full validation flow
    // 📝 Dùng field name "shippingCost" (KHÔNG phải "shipping")
    // 📝 Dùng "paymentMethod" + "paymentStatus" (KHÔNG phải nested "payment" object)
    // 📝 Dùng "customerNote" (KHÔNG phải "notes")
    // 📝 coupon data dùng "discountType" + "discountValue" (KHÔNG phải "type")
    const order = new Order({
      orderNumber,
      user: req.user?._id,
      guestEmail: !req.user ? guestEmail : undefined,
      items: orderItems,
      shippingAddress,
      billingAddress: sameAsShipping ? shippingAddress : billingAddress,
      sameAsShipping,
      subtotal,
      shippingCost,
      tax,
      discount,
      total,
      coupon: couponData,
      shippingMethod,
      estimatedDelivery,
      paymentMethod,
      customerNote,
      status: "confirmed",
      paymentStatus: paymentMethod === "cod" ? "pending" : "paid",
      paidAt: paymentMethod !== "cod" ? new Date() : undefined,
    });

    await order.save();

    // 💡 STOCK UPDATE: Giảm stock VÀ tăng sold (tracking doanh số)
    // 📝 Dùng $inc atomic update, cập nhật cả stock VÀ sold
    // 🔑 sold tracking: Giúp admin biết sản phẩm nào bán chạy
    for (const item of orderItems) {
      await Product.findByIdAndUpdate(item.product, {
        $inc: { stock: -item.quantity, sold: item.quantity },
      });
    }

    // 💡 CLEAR CART: Reset items + discount + coupon
    // Khác createOrder: Ở đây reset thêm discount và coupon (vì checkout có coupon)
    // 📝 Clear cart (reset items, không xóa cart document)
    if (req.user) {
      await Cart.findOneAndUpdate({ user: req.user._id }, { items: [], discount: 0, coupon: null });
    }

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      data: {
        order: {
          _id: order._id,
          orderNumber: order.orderNumber,
          total: order.total,
          status: order.status,
          paymentStatus: order.paymentStatus,
          estimatedDelivery: order.estimatedDelivery,
          itemCount: order.itemCount,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get order confirmation
 * @route   GET /api/checkout/order/:orderNumber
 * @access  Public
 */
// 💡 STEP 6: Trang xác nhận đơn hàng (Thank You page)
// Frontend redirect tới đây sau khi completeCheckout thành công
// 🔑 optionalAuth: Cả guest và authenticated user đều xem được
// Guest verify bằng email, authenticated verify bằng user ID
export const getOrderConfirmation = async (req, res, next) => {
  try {
    const { orderNumber } = req.params;
    const { email } = req.query;

    const query = { orderNumber };

    // 💡 CONDITIONAL QUERY: Tùy auth status mà verify khác nhau
    // Guest: verify bằng email → tránh người khác xem đơn
    // Auth: verify bằng user ID → chắc chắn đơn thuộc user
    if (!req.user && email) {
      query.guestEmail = email.toLowerCase();
    } else if (req.user) {
      query.user = req.user._id;
    }

    const order = await Order.findOne(query).select("-adminNote");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      data: { order },
    });
  } catch (error) {
    next(error);
  }
};
```

### 8.2.2 Checkout Routes

> 🎯 **PHỎNG VẤN — CHECKOUT CONTROLLER:**
>
> **Q: "So sánh createOrder vs completeCheckout?"**
> A: createOrder = tạo đơn trực tiếp (simple). completeCheckout = multi-step flow có coupon, status "confirmed", tracking sold count. Cả hai đều validate stock server-side.
>
> **Q: "Tại sao tách shipping/tax thành endpoint riêng?"**
> A: Multi-step checkout UX. User thay đổi address → recalculate shipping. User nhập coupon → validate riêng. Mỗi step = 1 API call → responsive, không block.
>
> **Q: "Coupon calculation percentage vs fixed?"**
> A: Percentage: `(subtotal * value) / 100` với maxDiscount cap. Fixed: Trừ trực tiếp. maxDiscount tránh loss khi đơn lớn + coupon % cao.
>
> ⚡ **THỰC TẾ DỰ ÁN:**
>
> - Shipping rates: Real app gọi API carriers (GHN, GHTK, Ahamove)
> - Tax: Real app dùng TaxJar/Avalara (Mỹ), VAT service (EU), hoặc fixed rate (VN)
> - Coupon abuse prevention: usedCount, maxUses, expiresAt, minPurchase
> - Cart clearing: Reset nhưng KHÔNG xóa document → preserve user's cart entity

```javascript
// backend/src/routes/checkoutRoutes.js
// 💡 CHECKOUT ROUTES: Multi-step checkout flow
// Tất cả endpoint dùng optionalAuth hoặc public (guest checkout support)
import express from "express";
import { optionalAuth } from "../middleware/auth.js";
import {
  validateCheckoutInitialize,
  validateCompleteCheckout,
  validateCouponCode,
  validateObjectId,
} from "../middleware/validate.js";
import {
  initializeCheckout,
  getShippingRates,
  calculateTax,
  validateCoupon,
  completeCheckout,
  getOrderConfirmation,
} from "../controllers/checkoutController.js";

const router = express.Router();

// 💡 Step 1: Initialize checkout → load cart + shipping options
router.post("/initialize", optionalAuth, validateCheckoutInitialize, initializeCheckout);

// 💡 Step 2: Get shipping rates (public — không cần auth)
router.post("/shipping-rates", getShippingRates);

// 💡 Step 3: Calculate tax (public)
router.post("/calculate-tax", calculateTax);

// 💡 Step 4: Validate coupon code
router.post("/validate-coupon", validateCouponCode, validateCoupon);

// 💡 Step 5: Complete checkout → tạo order cuối cùng
router.post("/complete", optionalAuth, validateCompleteCheckout, completeCheckout);

// 💡 Step 6: Get order confirmation (Thank You page)
router.get("/order/:orderNumber", optionalAuth, getOrderConfirmation);

export default router;
```

---

## 8.3 Email Service

### 8.3.1 Email Service Implementation

```javascript
// backend/src/services/emailService.js
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create transporter
const createTransporter = () => {
  // For development, use ethereal.email or mailtrap
  if (process.env.NODE_ENV !== "production") {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.mailtrap.io",
      port: process.env.SMTP_PORT || 2525,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  // For production, use real SMTP service
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

const transporter = createTransporter();

// Email templates
const templates = {
  welcome: (data) => ({
    subject: "Welcome to Fashion Store!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Welcome, ${data.firstName}!</h1>
        <p>Thank you for creating an account with Fashion Store.</p>
        <p>Start shopping now and discover the latest trends!</p>
        <a href="${process.env.CLIENT_URL}/products" 
           style="display: inline-block; padding: 12px 24px; background: #000; color: #fff; text-decoration: none; border-radius: 4px;">
          Shop Now
        </a>
      </div>
    `,
  }),

  passwordReset: (data) => ({
    subject: "Reset Your Password",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Password Reset Request</h1>
        <p>Hi ${data.firstName},</p>
        <p>You requested to reset your password. Click the button below to set a new password:</p>
        <a href="${data.resetUrl}" 
           style="display: inline-block; padding: 12px 24px; background: #000; color: #fff; text-decoration: none; border-radius: 4px;">
          Reset Password
        </a>
        <p style="margin-top: 20px; color: #666; font-size: 14px;">
          This link will expire in 1 hour. If you didn't request this, please ignore this email.
        </p>
      </div>
    `,
  }),

  orderConfirmation: (data) => ({
    subject: `Order Confirmed - #${data.order.orderNumber}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Thank You for Your Order!</h1>
        <p>Order Number: <strong>${data.order.orderNumber}</strong></p>
        
        <h2 style="margin-top: 30px;">Order Summary</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background: #f5f5f5;">
              <th style="padding: 10px; text-align: left;">Item</th>
              <th style="padding: 10px; text-align: center;">Qty</th>
              <th style="padding: 10px; text-align: right;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${data.order.items
              .map(
                (item) => `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  ${item.name}
                  ${item.size ? `<br><small>Size: ${item.size}</small>` : ""}
                </td>
                <td style="padding: 10px; text-align: center; border-bottom: 1px solid #eee;">${item.quantity}</td>
                <td style="padding: 10px; text-align: right; border-bottom: 1px solid #eee;">$${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" style="padding: 10px; text-align: right;">Subtotal:</td>
              <td style="padding: 10px; text-align: right;">$${data.order.subtotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 10px; text-align: right;">Shipping:</td>
              <td style="padding: 10px; text-align: right;">$${data.order.shippingCost.toFixed(2)}</td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 10px; text-align: right;">Tax:</td>
              <td style="padding: 10px; text-align: right;">$${data.order.tax.toFixed(2)}</td>
            </tr>
            ${
              data.order.discount > 0
                ? `
              <tr>
                <td colspan="2" style="padding: 10px; text-align: right; color: green;">Discount:</td>
                <td style="padding: 10px; text-align: right; color: green;">-$${data.order.discount.toFixed(2)}</td>
              </tr>
            `
                : ""
            }
            <tr style="font-weight: bold; font-size: 18px;">
              <td colspan="2" style="padding: 10px; text-align: right;">Total:</td>
              <td style="padding: 10px; text-align: right;">$${data.order.total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
        
        <h2 style="margin-top: 30px;">Shipping Address</h2>
        <p>
          ${data.order.shippingAddress.firstName} ${data.order.shippingAddress.lastName}<br>
          ${data.order.shippingAddress.address}<br>
          ${data.order.shippingAddress.apartment ? data.order.shippingAddress.apartment + "<br>" : ""}
          ${data.order.shippingAddress.city}, ${data.order.shippingAddress.state} ${data.order.shippingAddress.postalCode}<br>
          ${data.order.shippingAddress.country}
        </p>
        
        <p style="margin-top: 30px;">
          <a href="${process.env.CLIENT_URL}/orders/${data.order._id}" 
             style="display: inline-block; padding: 12px 24px; background: #000; color: #fff; text-decoration: none; border-radius: 4px;">
            Track Your Order
          </a>
        </p>
      </div>
    `,
  }),

  orderStatusUpdate: (data) => ({
    subject: `Order Update - #${data.order.orderNumber}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Order Status Update</h1>
        <p>Your order <strong>#${data.order.orderNumber}</strong> status has been updated to:</p>
        <h2 style="color: #007bff; text-transform: capitalize;">${data.status.replace(/_/g, " ")}</h2>
        
        ${
          data.trackingNumber
            ? `
          <p><strong>Tracking Number:</strong> ${data.trackingNumber}</p>
          <p><strong>Carrier:</strong> ${data.carrier}</p>
        `
            : ""
        }
        
        <p style="margin-top: 30px;">
          <a href="${process.env.CLIENT_URL}/orders/track/${data.order.orderNumber}" 
             style="display: inline-block; padding: 12px 24px; background: #000; color: #fff; text-decoration: none; border-radius: 4px;">
            Track Your Order
          </a>
        </p>
      </div>
    `,
  }),
};

// Send email function
export const sendEmail = async (to, templateName, data) => {
  try {
    const template = templates[templateName];
    if (!template) {
      throw new Error(`Email template "${templateName}" not found`);
    }

    const { subject, html } = template(data);

    const mailOptions = {
      from: `"Fashion Store" <${process.env.FROM_EMAIL || "noreply@fashionstore.com"}>`,
      to,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};

// Convenience functions
export const sendWelcomeEmail = (user) => {
  return sendEmail(user.email, "welcome", { firstName: user.firstName });
};

export const sendPasswordResetEmail = (user, resetUrl) => {
  return sendEmail(user.email, "passwordReset", { firstName: user.firstName, resetUrl });
};

export const sendOrderConfirmation = (order) => {
  const email = order.user?.email || order.guestEmail;
  return sendEmail(email, "orderConfirmation", { order });
};

export const sendOrderStatusUpdate = (order, status, trackingInfo = {}) => {
  const email = order.user?.email || order.guestEmail;
  return sendEmail(email, "orderStatusUpdate", {
    order,
    status,
    ...trackingInfo,
  });
};
```

### 8.3.2 Update Auth Controller để gửi email

```javascript
// Trong authController.js, import email functions:
import { sendPasswordResetEmail, sendWelcomeEmail } from "../utils/emailService.js";

// Inside register function - gửi welcome email (non-blocking):
try {
  await sendWelcomeEmail(user.email, user.firstName);
} catch (emailError) {
  console.error("Welcome email failed (non-critical):", emailError);
}

// Inside forgotPassword function - gửi email reset password:
const clientUrl = process.env.CLIENT_URL || "http://localhost:3000";
const resetUrl = `${clientUrl}/reset-password/${resetToken}`;
await sendPasswordResetEmail(user.email, resetToken, resetUrl);
```

---

## 8.4 Review & Rating System

> 💡 **REVIEW SYSTEM — Đánh giá sản phẩm**
>
> Hệ thống review cho phép user đánh giá sản phẩm sau khi mua.
> Pattern: Product ← Review → User (Many-to-Many qua Review collection)
>
> - Review Model: rating, title, comment, images, helpful votes
> - Review Controller: CRUD + vote (helpful/unhelpful)
> - Auto-update Product.averageRating khi review thay đổi
>
> 📌 **DESIGN PATTERN**: Separate collection (không embed review trong Product)
> → Product có thể có 1000+ reviews → Embed = document quá lớn
> → Reference: Product chỉ lưu averageRating + reviewCount (denormalized)

### 8.4.1 Review Model

```javascript
// backend/src/models/Review.js
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    // 💡 REFERENCE: Liên kết đến Product và User
    // ObjectId + ref: Cho phép .populate() để load full data
    // index: true → tạo index riêng cho mỗi field → query nhanh
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "Product is required"],
      index: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
      index: true,
    },

    // 💡 ORDER REFERENCE: Verify user đã mua sản phẩm trước khi review
    // 🔑 TẠI SAO? → Tránh fake reviews từ người chưa mua
    // ⚡ THỰC TẾ: Amazon có badge "Verified Purchase" dựa trên order reference
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },

    // Rating (1-5 stars)
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot exceed 5"],
    },

    // Review title
    title: {
      type: String,
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },

    // Review comment (maxlength 2000, KHÔNG phải 1000)
    comment: {
      type: String,
      required: [true, "Review comment is required"],
      trim: true,
      maxlength: [2000, "Comment cannot exceed 2000 characters"],
    },

    // Review images
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        alt: String,
      },
    ],

    // Size/Color purchased (for context)
    sizePurchased: String,
    colorPurchased: String,

    // Fit feedback
    fit: {
      type: String,
      enum: ["runs_small", "true_to_size", "runs_large"],
    },

    // Verified purchase
    isVerifiedPurchase: {
      type: Boolean,
      default: false,
    },

    // Review status
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    // 📝 helpfulVotes là Number count (KHÔNG phải array)
    // helpfulVoters là array of ObjectId (KHÔNG phải "votedBy" với helpful boolean)
    helpfulVotes: {
      type: Number,
      default: 0,
      min: 0,
    },

    helpfulVoters: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    // 📝 Dùng "adminReply" (KHÔNG phải "adminResponse")
    // Sub-field dùng "comment" + "repliedAt" + "repliedBy" (KHÔNG phải "respondedAt"/"respondedBy")
    adminReply: {
      comment: String,
      repliedAt: Date,
      repliedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },

    // Rejection reason
    rejectionReason: String,
  },
  {
    timestamps: true,
  }
);

// Indexes
// Compound index: One review per user per product
reviewSchema.index({ product: 1, user: 1 }, { unique: true });
reviewSchema.index({ status: 1, createdAt: -1 });
reviewSchema.index({ rating: 1 });

// Static method: Calculate average rating for product
reviewSchema.statics.calculateAverageRating = async function (productId) {
  const stats = await this.aggregate([
    { $match: { product: productId, status: "approved" } },
    {
      $group: {
        _id: "$product",
        averageRating: { $avg: "$rating" },
        numReviews: { $sum: 1 },
        ratingDistribution: {
          $push: "$rating",
        },
      },
    },
  ]);

  if (stats.length > 0) {
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    stats[0].ratingDistribution.forEach((rating) => {
      distribution[rating]++;
    });

    await mongoose.model("Product").findByIdAndUpdate(productId, {
      "ratings.average": Math.round(stats[0].averageRating * 10) / 10,
      "ratings.count": stats[0].numReviews,
      "ratings.distribution": distribution,
    });
  } else {
    await mongoose.model("Product").findByIdAndUpdate(productId, {
      "ratings.average": 0,
      "ratings.count": 0,
      "ratings.distribution": { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    });
  }
};

// 📝 Post-save: CHỈ recalculate khi status là "approved"
reviewSchema.post("save", async function () {
  if (this.status === "approved") {
    await this.constructor.calculateAverageRating(this.product);
  }
});

// Post-remove hook
reviewSchema.post("remove", async function () {
  await this.constructor.calculateAverageRating(this.product);
});

// Post-findOneAndDelete hook
reviewSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await doc.constructor.calculateAverageRating(doc.product);
  }
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
```

### 8.4.2 Review Controller

```javascript
// backend/src/controllers/reviewController.js
import Review from "../models/Review.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";
import { asyncHandler, AppError } from "../middleware/errorHandler.js";

/**
 * @desc    Get reviews for a product
 * @route   GET /api/products/:productId/reviews
 * @access  Public
 */
export const getProductReviews = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const skip = (page - 1) * limit;

  // Build query
  const query = { product: productId, status: "approved" };

  // Filter by rating
  if (req.query.rating) {
    query.rating = parseInt(req.query.rating, 10);
  }

  // Filter by verified purchase
  if (req.query.verified === "true") {
    query.isVerifiedPurchase = true;
  }

  // Sort options
  let sort = "-createdAt";
  if (req.query.sort === "helpful") {
    sort = "-helpfulVotes";
  } else if (req.query.sort === "rating-high") {
    sort = "-rating";
  } else if (req.query.sort === "rating-low") {
    sort = "rating";
  }

  const [reviews, total] = await Promise.all([
    Review.find(query)
      .populate("user", "firstName lastName")
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .lean(),
    Review.countDocuments(query),
  ]);

  // Get rating summary
  const ratingStats = await Review.aggregate([
    { $match: { product: new mongoose.Types.ObjectId(productId), status: "approved" } },
    {
      $group: {
        _id: null,
        averageRating: { $avg: "$rating" },
        totalReviews: { $sum: 1 },
      },
    },
  ]);

  res.status(200).json({
    success: true,
    data: {
      reviews,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalReviews: total,
      },
      summary: ratingStats[0] || { averageRating: 0, totalReviews: 0 },
    },
  });
});

/**
 * @desc    Create a review
 * @route   POST /api/products/:productId/reviews
 * @access  Private
 */
export const createReview = asyncHandler(async (req, res, next) => {
  const { productId } = req.params;
  const { rating, title, comment, pros, cons } = req.body;

  // Check if product exists
  const product = await Product.findById(productId);
  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  // Check if user already reviewed this product
  const existingReview = await Review.findOne({
    product: productId,
    user: req.user._id,
  });

  if (existingReview) {
    return next(new AppError("You have already reviewed this product", 400));
  }

  // Check if user has purchased this product
  const order = await Order.findOne({
    user: req.user._id,
    "items.product": productId,
    status: "delivered",
  });

  const review = await Review.create({
    product: productId,
    user: req.user._id,
    order: order?._id,
    rating,
    title,
    comment,
    pros: pros || [],
    cons: cons || [],
    isVerifiedPurchase: !!order,
    status: "pending", // Require moderation
  });

  res.status(201).json({
    success: true,
    message: "Review submitted successfully. It will be visible after moderation.",
    data: { review },
  });
});

/**
 * @desc    Update a review
 * @route   PUT /api/products/:productId/reviews/:reviewId
 * @access  Private
 */
export const updateReview = asyncHandler(async (req, res, next) => {
  const { reviewId } = req.params;
  const { rating, title, comment, pros, cons } = req.body;

  const review = await Review.findOne({
    _id: reviewId,
    user: req.user._id,
  });

  if (!review) {
    return next(new AppError("Review not found", 404));
  }

  // Update fields
  if (rating) review.rating = rating;
  if (title !== undefined) review.title = title;
  if (comment) review.comment = comment;
  if (pros) review.pros = pros;
  if (cons) review.cons = cons;

  // Reset status for re-moderation
  review.status = "pending";

  await review.save();

  res.status(200).json({
    success: true,
    message: "Review updated successfully. It will be visible after moderation.",
    data: { review },
  });
});

/**
 * @desc    Delete a review
 * @route   DELETE /api/products/:productId/reviews/:reviewId
 * @access  Private
 */
export const deleteReview = asyncHandler(async (req, res, next) => {
  const { reviewId } = req.params;

  const review = await Review.findOne({
    _id: reviewId,
    user: req.user._id,
  });

  if (!review) {
    return next(new AppError("Review not found", 404));
  }

  const productId = review.product;
  await review.deleteOne();

  // Recalculate product rating
  await Review.calculateAverageRating(productId);

  res.status(200).json({
    success: true,
    message: "Review deleted successfully",
  });
});

/**
 * @desc    Vote on a review (helpful/not helpful)
 * @route   POST /api/reviews/:reviewId/vote
 * @access  Private
 */
export const voteReview = asyncHandler(async (req, res, next) => {
  const { reviewId } = req.params;
  const { helpful } = req.body;

  const review = await Review.findById(reviewId);

  if (!review) {
    return next(new AppError("Review not found", 404));
  }

  // Check if user already voted
  const existingVoteIndex = review.votedBy.findIndex(
    (vote) => vote.user.toString() === req.user._id.toString()
  );

  if (existingVoteIndex !== -1) {
    // Update existing vote
    const oldVote = review.votedBy[existingVoteIndex].helpful;
    review.votedBy[existingVoteIndex].helpful = helpful;

    // Update helpful count
    if (oldVote !== helpful) {
      review.helpfulVotes += helpful ? 1 : -1;
    }
  } else {
    // Add new vote
    review.votedBy.push({ user: req.user._id, helpful });
    if (helpful) {
      review.helpfulVotes += 1;
    }
  }

  await review.save();

  res.status(200).json({
    success: true,
    data: { helpfulVotes: review.helpfulVotes },
  });
});
```

### 8.4.3 Review Routes

```javascript
// backend/src/routes/reviewRoutes.js
import express from "express";
import {
  getProductReviews,
  createReview,
  updateReview,
  deleteReview,
  voteReview,
} from "../controllers/reviewController.js";
import { protect } from "../middleware/auth.js";

// 💡 mergeParams: true → KẾ THỪA params từ parent router
// Parent: router.use("/products/:productId/reviews", reviewRoutes)
// → Trong reviewRoutes, req.params.productId có giá trị từ parent URL
// 🎯 PHỎNG VẤN: "mergeParams dùng khi nào?"
// → Khi mount sub-router vào parent router và cần access parent's :params
// → Pattern phổ biến: Nested resources (products/:id/reviews, users/:id/orders)
const router = express.Router({ mergeParams: true });

// 💡 Public: Ai cũng xem được reviews
router.get("/", getProductReviews);

// 💡 Protected: Phải login mới review/sửa/xóa/vote được
router.post("/", protect, createReview);
router.put("/:reviewId", protect, updateReview);
router.delete("/:reviewId", protect, deleteReview);
// 💡 POST (không PATCH): Vote là một ACTION, không phải update resource
router.post("/:reviewId/vote", protect, voteReview);

export default router;
```

---

## 8.5 Coupon System

> 💡 **COUPON SYSTEM — Hệ thống mã giảm giá**
>
> Coupon model phức tạp vì có nhiều BUSINESS RULES:
>
> - 2 loại discount: percentage (%) và fixed ($)
> - Giới hạn: maxDiscount, minOrderValue, usageLimit, usageLimitPerUser
> - Thời gian: validFrom → validUntil
> - Hạn chế: applicableProducts, applicableCategories, firstOrderOnly
>
> 📌 **PATTERN**: Model chứa cả logic validation (canBeUsedBy) + calculation (calculateDiscount)
> → Đảm bảo business rules nhất quán dù gọi từ đâu

### 8.5.1 Coupon Model

```javascript
// backend/src/models/Coupon.js
import mongoose from "mongoose";

const couponSchema = new mongoose.Schema(
  {
    // 💡 CODE: Mã coupon (unique, uppercase, alphanumeric)
    // uppercase: true → Mongoose tự convert "sale10" → "SALE10" khi save
    // trim: true → Loại bỏ khoảng trắng đầu/cuối
    // match: regex validation → chỉ cho phép A-Z, 0-9
    code: {
      type: String,
      required: [true, "Coupon code is required"],
      unique: true,
      uppercase: true,
      trim: true,
      maxlength: [20, "Coupon code cannot exceed 20 characters"],
      match: [/^[A-Z0-9]+$/, "Coupon code can only contain letters and numbers"],
    },

    // Description
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: [200, "Description cannot exceed 200 characters"],
    },

    // Discount type
    discountType: {
      type: String,
      required: true,
      enum: ["percentage", "fixed"],
      default: "percentage",
    },

    // Discount value
    discountValue: {
      type: Number,
      required: [true, "Discount value is required"],
      min: [0, "Discount value cannot be negative"],
    },

    // Maximum discount (for percentage type)
    maxDiscount: {
      type: Number,
      min: [0, "Max discount cannot be negative"],
    },

    // Minimum order value
    minOrderValue: {
      type: Number,
      default: 0,
      min: [0, "Minimum order value cannot be negative"],
    },

    // Currency
    currency: {
      type: String,
      default: "USD",
      enum: ["USD", "EUR", "GBP", "VND"],
    },

    // Validity period
    validFrom: {
      type: Date,
      required: [true, "Valid from date is required"],
      default: Date.now,
    },

    validUntil: {
      type: Date,
      required: [true, "Valid until date is required"],
    },

    // Usage limits
    usageLimit: {
      type: Number,
      default: null, // null = unlimited
      min: [1, "Usage limit must be at least 1"],
    },

    usageLimitPerUser: {
      type: Number,
      default: 1,
      min: [1, "Usage limit per user must be at least 1"],
    },

    // Current usage count
    usedCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    // Users who used this coupon
    usedBy: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        usedAt: {
          type: Date,
          default: Date.now,
        },
        orderId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Order",
        },
      },
    ],

    // Restrictions
    applicableProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],

    applicableCategories: [
      {
        type: String,
        enum: ["women", "men", "kids", "accessories", "shoes", "bags"],
      },
    ],

    excludedProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],

    // First order only
    firstOrderOnly: {
      type: Boolean,
      default: false,
    },

    // Minimum items in cart
    minItems: {
      type: Number,
      default: 1,
      min: 1,
    },

    // Active status
    isActive: {
      type: Boolean,
      default: true,
    },

    // Created by (admin)
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
// Note: code already has unique:true in schema, no need for separate index on code
couponSchema.index({ isActive: 1, validFrom: 1, validUntil: 1 });
couponSchema.index({ validUntil: 1 });

// 💡 VIRTUAL isValid: Tính toán on-the-fly, không lưu trong DB
// Gọi: coupon.isValid → true/false
// 🔑 TẠI SAO virtual thay vì lưu field?
// → Dữ liệu luôn "tươi" — kiểm tra thời gian thực tại thời điểm gọi
// → Nếu lưu field, phải chạy cron job để update → phức tạp hơn
couponSchema.virtual("isValid").get(function () {
  const now = new Date();
  return (
    this.isActive &&
    now >= this.validFrom &&
    now <= this.validUntil &&
    // 💡 null = unlimited → luôn pass
    (this.usageLimit === null || this.usedCount < this.usageLimit)
  );
});

// 💡 canBeUsedBy: Comprehensive validation — check MỌI điều kiện
// Return object { valid: boolean, errors: string[] } thay vì throw error
// 🔑 TẠI SAO return errors array? → Frontend hiển thị TẤT CẢ lý do invalid
//   thay vì chỉ lý do đầu tiên → UX tốt hơn
// 🎯 PHỎNG VẤN: "Validation nên throw error hay return result object?"
// → Throw: Cho critical errors (permission denied, not found)
// → Return result: Cho business validation (coupon không hợp lệ = expected case)
couponSchema.methods.canBeUsedBy = async function (userId, cartTotal, cartItems, isFirstOrder) {
  const errors = [];

  // Check if coupon is active
  if (!this.isActive) {
    errors.push("Coupon is not active");
  }

  // Check validity period
  const now = new Date();
  if (now < this.validFrom) {
    errors.push("Coupon is not yet valid");
  }
  if (now > this.validUntil) {
    errors.push("Coupon has expired");
  }

  // Check usage limit
  if (this.usageLimit !== null && this.usedCount >= this.usageLimit) {
    errors.push("Coupon usage limit reached");
  }

  // Check per-user usage limit
  if (userId) {
    const userUsageCount = this.usedBy.filter(
      (usage) => usage.user.toString() === userId.toString()
    ).length;
    if (userUsageCount >= this.usageLimitPerUser) {
      errors.push("You have already used this coupon the maximum number of times");
    }
  }

  // Check minimum order value
  if (cartTotal < this.minOrderValue) {
    errors.push(`Minimum order value is ${this.currency} ${this.minOrderValue}`);
  }

  // Check minimum items
  if (cartItems && cartItems.length < this.minItems) {
    errors.push(`Minimum ${this.minItems} items required`);
  }

  // Check first order only
  if (this.firstOrderOnly && !isFirstOrder) {
    errors.push("This coupon is only valid for first orders");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};

// 💡 calculateDiscount: Tính số tiền giảm giá thực tế
// ⚠️ 3 RULES quan trọng:
// 1. Percentage: (baseAmount * value) / 100, cap bởi maxDiscount
// 2. Fixed: Trừ trực tiếp discountValue
// 3. Discount KHÔNG được vượt quá cartTotal (tránh negative total)
// 📌 Math.round(x * 100) / 100: Làm tròn 2 decimal chính xác hơn .toFixed(2)
couponSchema.methods.calculateDiscount = function (cartTotal, applicableItemsTotal = null) {
  const baseAmount = applicableItemsTotal !== null ? applicableItemsTotal : cartTotal;

  let discount = 0;

  if (this.discountType === "percentage") {
    discount = (baseAmount * this.discountValue) / 100;
    // 💡 Cap tại maxDiscount → tránh giảm quá nhiều
    if (this.maxDiscount && discount > this.maxDiscount) {
      discount = this.maxDiscount;
    }
  } else {
    // Fixed amount
    discount = this.discountValue;
  }

  // 💡 Không cho discount > cartTotal → total không bao giờ < 0
  if (discount > cartTotal) {
    discount = cartTotal;
  }

  return Math.round(discount * 100) / 100;
};

// 💡 recordUsage: Ghi lại lịch sử sử dụng coupon
// Mỗi lần dùng: tăng usedCount + push vào usedBy array
// 🔑 TẠI SAO lưu usedBy? → Kiểm tra usageLimitPerUser + admin audit trail
couponSchema.methods.recordUsage = async function (userId, orderId) {
  this.usedCount += 1;
  this.usedBy.push({
    user: userId,
    orderId,
    usedAt: new Date(),
  });
  await this.save();
};

// 💡 findValidCoupon: STATIC method — query coupon hợp lệ từ DB
// Kết hợp nhiều điều kiện trong 1 query:
// - code match (uppercase)
// - isActive = true
// - Trong thời hạn (validFrom ≤ now ≤ validUntil)
// - Chưa hết lượt dùng (usageLimit null HOẶC usedCount < usageLimit)
// 🎯 PHỎNG VẤN: "$expr là gì?"
// → $expr cho phép SO SÁNH 2 FIELDS trong cùng 1 document
// → $lt: ["$usedCount", "$usageLimit"] → usedCount < usageLimit
// → Không thể dùng { usedCount: { $lt: usageLimit } } vì usageLimit là field, không phải value
couponSchema.statics.findValidCoupon = async function (code) {
  const now = new Date();
  return this.findOne({
    code: code.toUpperCase(),
    isActive: true,
    validFrom: { $lte: now }, // 💡 $lte: less than or equal → đã bắt đầu hiệu lực
    validUntil: { $gte: now }, // 💡 $gte: greater than or equal → chưa hết hạn
    // 💡 $or: usageLimit null (unlimited) HOẶC usedCount < usageLimit
    $or: [{ usageLimit: null }, { $expr: { $lt: ["$usedCount", "$usageLimit"] } }],
  });
};

// 💡 PRE-SAVE: Validate business rules trước khi lưu
// 🔑 Đặt trong pre-save → ai sửa coupon cũng phải pass validation
couponSchema.pre("save", function () {
  // 💡 Percentage > 100% → vô lý → reject
  if (this.discountType === "percentage" && this.discountValue > 100) {
    throw new Error("Percentage discount cannot exceed 100%");
  }

  // 💡 Ngày hết hạn phải SAU ngày bắt đầu → logic cơ bản
  if (this.validUntil <= this.validFrom) {
    throw new Error("Valid until date must be after valid from date");
  }
});

const Coupon = mongoose.model("Coupon", couponSchema);

export default Coupon;
```

---

> 💡 **ADMIN APIs — Dashboard + Management**
>
> Admin panel cần 3 nhóm chính:
>
> 1. **Analytics**: Dashboard overview, revenue stats, top products, category stats, user stats
> 2. **Order Management**: List all orders, update status, track returns
> 3. **User/Inventory Management**: List users, update roles, update stock
>
> 📌 **PATTERN QUAN TRỌNG:**
>
> - TẤT CẢ admin routes phải qua `protect + adminOnly` middleware
> - Aggregate pipeline cho thống kê phức tạp (không dùng `.find()`)
> - Promise.all chạy song song nhiều queries → tốc độ nhanh hơn
>
> 🎯 **PHỎNG VẤN**: "MongoDB Aggregation Pipeline là gì?"
> → Chuỗi stages xử lý data: $match → $group → $sort → $project → $lookup
> → Giống SQL: WHERE → GROUP BY → ORDER BY → SELECT → JOIN

### 8.6.1 Admin Middleware

> **Lưu ý:** Không có file `admin.js` riêng. `adminOnly` nằm trong `auth.js` cùng với `protect` và `optionalAuth`.

```javascript
// backend/src/middleware/auth.js (trích đoạn)

/**
 * Admin only middleware
 * Phải dùng SAU middleware protect (vì cần req.user)
 */
// 💡 adminOnly: Kiểm tra role = "admin"
// 🔑 TẠI SAO tách thành middleware riêng thay vì check trong mỗi controller?
// → DRY: Viết 1 lần, dùng ở MỌI admin route
// → Separation of Concerns: Auth logic tách khỏi business logic
// 📌 GHI NHỚ: 401 (Unauthorized) = chưa login, 403 (Forbidden) = login rồi nhưng không có quyền
export const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Access denied. Admin only.",
    });
  }
  next();
};

// 💡 SỬ DỤNG: 2 cách
// Cách 1: router.use(protect, adminOnly); → Áp dụng cho TẤT CẢ routes bên dưới
// Cách 2: router.get("/stats", protect, adminOnly, getStats); → Áp dụng cho 1 route cụ thể
// 🔑 Cách 1 gọn hơn khi TẤT CẢ routes đều admin-only
// router.use(protect, adminOnly); // Áp dụng cho tất cả routes bên dưới
// Hoặc: router.get("/stats", protect, adminOnly, getStats); // Áp dụng cho route cụ thể
```

### 8.6.2 Admin Controller

```javascript
// backend/src/controllers/adminController.js
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
// 💡 DASHBOARD OVERVIEW: "Home page" của admin panel
// Trả về MỌI metrics quan trọng trong 1 API call
// ⚡ THỰC TẾ: Dashboard phải load NHANH — admin mở lên thấy ngay tình hình
export const getDashboardOverview = async (req, res) => {
  try {
    // 💡 Date calculations: Tính mốc thời gian cho queries
    const today = new Date();
    const startOfToday = new Date(today.setHours(0, 0, 0, 0));
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const startOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const endOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);

    // 💡 PROMISE.ALL: Chạy 14 queries SONG SONG
    // 🔑 TẠI SAO Promise.all thay vì chạy tuần tự?
    // → Tuần tự: 14 queries × 50ms = 700ms
    // → Song song: max(50ms) ≈ 50ms → NHANH HƠN ~14 lần!
    // 🎯 PHỎNG VẤN: "Promise.all vs Promise.allSettled?"
    // → Promise.all: Fail fast — 1 query fail → TẤT CẢ fail → catch error
    // → Promise.allSettled: Chờ TẤT CẢ complete → return kết quả từng cái (fulfilled/rejected)
    // → Ở đây dùng all vì dashboard cần TẤT CẢ data → 1 fail = không hiện dashboard
    // 📝 Promise.all: Chạy song song nhiều queries để tăng performance
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
      // 💡 countDocuments: Đếm số documents match condition → trả về number
      Order.countDocuments(),
      Order.countDocuments({ createdAt: { $gte: startOfToday } }),
      Order.countDocuments({ createdAt: { $gte: startOfMonth } }),
      Order.countDocuments({ createdAt: { $gte: startOfLastMonth, $lte: endOfLastMonth } }),

      // 💡 AGGREGATE PIPELINE: Tính tổng doanh thu
      // $match: Filter documents (giống WHERE trong SQL)
      // $group: Gom nhóm + tính toán (giống GROUP BY)
      // _id: null → gom TẤT CẢ documents thành 1 nhóm
      // $sum: "$total" → tổng field "total" của tất cả documents
      // 🎯 PHỎNG VẤN: "Tại sao dùng aggregate thay vì find + sum?"
      // → Aggregate xử lý trên server MongoDB → ít data truyền về app
      // → Find + sum: Load TẤT CẢ orders vào memory → chậm + tốn RAM
      // 📝 Aggregate: $sum: "$total" - dùng field name "total" (KHÔNG phải "totalAmount")
      // 📝 paymentStatus: "paid" (KHÔNG phải "completed")
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

      // 💡 Product counts: Active, low stock (1-10), out of stock (0)
      Product.countDocuments({ isActive: true }),
      Product.countDocuments({ stock: { $gt: 0, $lte: 10 }, isActive: true }),
      Product.countDocuments({ stock: 0, isActive: true }),

      User.countDocuments(),
      User.countDocuments({ createdAt: { $gte: startOfMonth } }),
      Review.countDocuments({ status: "pending" }),
      // 📝 Coupon: dùng "validUntil" (KHÔNG phải "endDate")
      Coupon.countDocuments({ isActive: true, validUntil: { $gte: new Date() } }),
    ]);

    // 💡 GROWTH CALCULATION: So sánh tháng này vs tháng trước
    // Formula: ((current - previous) / previous) * 100 = % growth
    // lastMonth = 0 → growth = 100% (tránh divide by zero)
    const orderGrowth =
      lastMonthOrders > 0 ? ((thisMonthOrders - lastMonthOrders) / lastMonthOrders) * 100 : 100;
    // 💡 ?. optional chaining + || 0: Aggregate trả [] nếu không có data
    // → [0]?.total = undefined → || 0 = 0
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
          growth: orderGrowth.toFixed(1),
        },
        revenue: {
          total: totalRevenue[0]?.total || 0,
          thisMonth: thisMonthRev,
          growth: revenueGrowth.toFixed(1),
        },
        products: {
          total: totalProducts,
          lowStock: lowStockProducts,
          outOfStock: outOfStockProducts,
        },
        users: { total: totalUsers, newThisMonth: newUsersThisMonth },
        pendingReviews,
        activeCoupons,
      },
    });
  } catch (error) {
    console.error("Dashboard overview error:", error);
    res.status(500).json({ success: false, message: "Không thể lấy dữ liệu dashboard" });
  }
};

/**
 * @desc    Lấy thống kê doanh thu theo thời gian
 * @route   GET /api/admin/revenue-stats
 */
// 💡 REVENUE STATS: Biểu đồ doanh thu theo thời gian
// Frontend render line chart/bar chart từ data này
// 🔑 Dynamic grouping: 7 ngày → group by ngày, 12 tháng → group by tháng
export const getRevenueStats = async (req, res) => {
  try {
    const { period = "7days" } = req.query;
    let startDate, groupFormat;

    // 💡 $dateToString: MongoDB operator format date thành string
    // "%Y-%m-%d" → "2025-01-15" (group by ngày)
    // "%Y-%m"    → "2025-01"    (group by tháng)
    switch (period) {
      case "30days":
        startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
        groupFormat = { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } };
        break;
      case "12months":
        startDate = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
        groupFormat = { $dateToString: { format: "%Y-%m", date: "$createdAt" } };
        break;
      default:
        startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        groupFormat = { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } };
    }

    // 💡 AGGREGATE PIPELINE: 4 stages
    // 1. $match: Filter paid orders từ startDate → giống WHERE
    // 2. $group: Group by date format → tính revenue, orders, avgOrderValue
    //    - $sum: "$total" → tổng doanh thu
    //    - $sum: 1 → đếm số đơn (mỗi document = 1)
    //    - $avg: "$total" → giá trị trung bình đơn hàng
    // 3. $sort: Sắp xếp theo _id (date string) tăng dần
    const stats = await Order.aggregate([
      { $match: { createdAt: { $gte: startDate }, paymentStatus: "paid" } },
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

    res.json({ success: true, period, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, message: "Không thể lấy thống kê doanh thu" });
  }
};

/**
 * @desc    Lấy top sản phẩm bán chạy
 * @route   GET /api/admin/top-products
 */
// 💡 TOP PRODUCTS: Aggregate phức tạp nhất — 7 stages
// ⚡ THỰC TẾ: Admin cần biết sản phẩm nào bán chạy để quyết định restock, marketing
export const getTopProducts = async (req, res) => {
  try {
    const { limit = 10 } = req.query;

    // 💡 AGGREGATE PIPELINE (7 stages):
    const topProducts = await Order.aggregate([
      // Stage 1: Lọc bỏ đơn đã hủy
      { $match: { status: { $ne: "cancelled" } } },

      // Stage 2: $unwind — "tách" mỗi item trong array thành document riêng
      // VD: Order có 3 items → trở thành 3 documents (mỗi cái có 1 item)
      // 🎯 PHỎNG VẤN: "$unwind là gì?"
      // → "Flatten" array field thành từng documents riêng biệt
      // → Cần thiết để group/aggregate theo elements trong array
      { $unwind: "$items" },

      // Stage 3: Group by product ID → tính tổng sold + revenue
      // $multiply: Tính itemTotal = price × quantity
      {
        $group: {
          _id: "$items.product",
          totalSold: { $sum: "$items.quantity" },
          totalRevenue: { $sum: { $multiply: ["$items.price", "$items.quantity"] } },
        },
      },

      // Stage 4: Sort by totalSold giảm dần (bán chạy nhất đầu tiên)
      { $sort: { totalSold: -1 } },

      // Stage 5: Giới hạn top N sản phẩm
      { $limit: parseInt(limit) },

      // Stage 6: $lookup — JOIN với products collection
      // 🎯 PHỎNG VẤN: "$lookup giống gì trong SQL?"
      // → Giống LEFT JOIN: from = bảng cần join, localField & foreignField = ON condition
      // → as: "product" → kết quả join lưu vào array "product"
      { $lookup: { from: "products", localField: "_id", foreignField: "_id", as: "product" } },

      // Stage 7: $unwind product array (vì $lookup trả array, nhưng chỉ có 1 element)
      { $unwind: "$product" },

      // Stage 8: $project — Chọn fields cần trả về (giống SELECT trong SQL)
      // _id: 0 → ẩn _id mặc định, đổi thành productId
      {
        $project: {
          _id: 0,
          productId: "$_id",
          name: "$product.name",
          totalSold: 1,
          totalRevenue: 1,
        },
      },
    ]);

    res.json({ success: true, data: topProducts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Không thể lấy top sản phẩm" });
  }
};

/**
 * @desc    Lấy đơn hàng gần đây
 * @route   GET /api/admin/recent-orders
 */
export const getRecentOrders = async (req, res) => {
  try {
    const { limit = 10 } = req.query;
    const orders = await Order.find()
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .populate("user", "firstName lastName email")
      .select("orderNumber total status paymentStatus createdAt");
    res.json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, message: "Không thể lấy đơn hàng gần đây" });
  }
};

/**
 * @desc    Thống kê theo danh mục
 * @route   GET /api/admin/category-stats
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
        },
      },
      { $sort: { totalProducts: -1 } },
    ]);
    res.json({ success: true, data: categoryStats });
  } catch (error) {
    res.status(500).json({ success: false, message: "Không thể lấy thống kê danh mục" });
  }
};

/**
 * @desc    Sản phẩm sắp hết hàng
 * @route   GET /api/admin/low-stock
 */
export const getLowStockProducts = async (req, res) => {
  try {
    const { threshold = 10, page = 1, limit = 20 } = req.query;
    const products = await Product.find({ stock: { $lte: parseInt(threshold) }, isActive: true })
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
      pagination: { page: parseInt(page), limit: parseInt(limit), total },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Không thể lấy sản phẩm sắp hết hàng" });
  }
};

/**
 * @desc    Thống kê người dùng
 * @route   GET /api/admin/user-stats
 */
// 💡 USER STATS: Top customers by spending + role distribution
// Aggregate pipeline JOIN order → user để tính tổng chi tiêu
export const getUserStats = async (req, res) => {
  try {
    // 💡 TOP CUSTOMERS: Aggregate qua Order collection
    // Group by user → sum total spent → sort → limit 10 → lookup user info
    const topCustomers = await Order.aggregate([
      { $match: { paymentStatus: "paid" } },
      { $group: { _id: "$user", totalSpent: { $sum: "$total" }, orderCount: { $sum: 1 } } },
      { $sort: { totalSpent: -1 } },
      { $limit: 10 },
      // 💡 $lookup: JOIN với users collection → lấy name, email
      { $lookup: { from: "users", localField: "_id", foreignField: "_id", as: "user" } },
      { $unwind: "$user" },
      {
        $project: {
          // 💡 $concat: Nối chuỗi trong aggregate
          // 📝 Dùng firstName + lastName (KHÔNG phải user.name)
          // 🔑 TẠI SAO concat ở đây? → User model lưu firstName + lastName riêng
          //   → Cần nối lại cho frontend hiển thị
          name: { $concat: ["$user.firstName", " ", "$user.lastName"] },
          email: "$user.email",
          totalSpent: 1,
          orderCount: 1,
        },
      },
    ]);

    // 💡 ROLE DISTRIBUTION: Đếm số user theo role
    // VD: [{ _id: "user", count: 150 }, { _id: "admin", count: 3 }]
    const roleStats = await User.aggregate([{ $group: { _id: "$role", count: { $sum: 1 } } }]);
    res.json({ success: true, data: { topCustomers, roleDistribution: roleStats } });
  } catch (error) {
    res.status(500).json({ success: false, message: "Không thể lấy thống kê người dùng" });
  }
};

/**
 * @desc    Cập nhật trạng thái đơn hàng (Admin)
 * @route   PUT /api/admin/orders/:id/status
 */
// 💡 STATUS TRANSITION VALIDATION: Đảm bảo chuyển trạng thái hợp lệ
// VD: pending → shipped ❌ (phải qua processing trước)
//     pending → processing ✅
// 🔑 TẠI SAO validate transition?
// → Tránh bug/hack: Admin không thể "shipped" đơn chưa "processing"
// → Business flow rõ ràng: pending → processing → shipped → delivered
// ⚡ THỰC TẾ: Đây là STATE MACHINE pattern — mỗi state chỉ chuyển được sang states cụ thể
export const updateOrderStatus = async (req, res) => {
  try {
    const { status, trackingNumber, estimatedDelivery, note } = req.body;
    const order = await Order.findById(req.params.id).populate("user", "email name");

    if (!order) {
      return res.status(404).json({ success: false, message: "Không tìm thấy đơn hàng" });
    }

    // 💡 STATE MACHINE: Định nghĩa transitions hợp lệ
    // Key = current state, Value = array of allowed next states
    // pending → [processing, cancelled]
    // delivered → [] → không thể chuyển đi đâu nữa (terminal state)
    const validTransitions = {
      pending: ["processing", "cancelled"],
      processing: ["shipped", "cancelled"],
      shipped: ["out_for_delivery", "delivered"],
      out_for_delivery: ["delivered"],
      delivered: [], // Terminal state
      cancelled: [], // Terminal state
    };

    // 💡 ?. optional chaining + .includes(): Check nếu transition hợp lệ
    if (!validTransitions[order.status]?.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Không thể chuyển từ "${order.status}" sang "${status}"`,
      });
    }

    // 📝 Dùng "status" (KHÔNG phải "orderStatus")
    order.status = status;
    if (trackingNumber) order.trackingNumber = trackingNumber;
    if (estimatedDelivery) order.estimatedDelivery = estimatedDelivery;

    order.statusHistory.push({
      status,
      note: note || `Status updated to ${status}`,
      updatedBy: req.user._id,
      updatedAt: new Date(),
    });

    await order.save();

    res.json({ success: true, message: "Cập nhật trạng thái thành công", data: order });
  } catch (error) {
    logger.error("Update order status error", error);
    res.status(500).json({ success: false, message: "Không thể cập nhật trạng thái" });
  }
};

/**
 * @desc    Cập nhật tồn kho sản phẩm
 * @route   PUT /api/admin/products/:id/stock
 */
// 💡 STOCK MANAGEMENT: Admin cập nhật tồn kho thủ công
// Use case: Nhập hàng mới, kiểm kê phát hiện sai lệch, hàng bị hỏng
// 🔑 AUDIT TRAIL: Lưu stockHistory để trace back ai sửa, khi nào, lý do gì
// ⚡ THỰC TẾ: Inventory management cần audit trail cho kế toán/kiểm kê
export const updateProductStock = async (req, res) => {
  try {
    const { stock, reason } = req.body;
    if (stock === undefined || stock < 0) {
      return res.status(400).json({ success: false, message: "Số lượng tồn kho không hợp lệ" });
    }

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Không tìm thấy sản phẩm" });
    }

    // 💡 AUDIT TRAIL PATTERN: Lưu lại mọi thay đổi stock
    // { oldStock, newStock, reason, updatedBy, updatedAt }
    // → Admin có thể xem lịch sử: "AI thay đổi BẰNG BAO NHIÊU VÀO KHI NÀO"
    const oldStock = product.stock;
    product.stock = stock;
    if (!product.stockHistory) product.stockHistory = [];
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
      data: { productId: product._id, name: product.name, oldStock, newStock: stock },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Không thể cập nhật tồn kho" });
  }
};

/**
 * @desc    Lấy tất cả đơn hàng (Admin)
 * @route   GET /api/admin/orders
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
      .populate("user", "firstName lastName email");

    const total = await Order.countDocuments(query);
    res.json({
      success: true,
      data: orders,
      pagination: { page: parseInt(page), total, pages: Math.ceil(total / limit) },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Không thể lấy danh sách đơn hàng" });
  }
};

/**
 * @desc    Lấy tất cả người dùng (Admin)
 * @route   GET /api/admin/users
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
      // 📝 Search bằng firstName, lastName (KHÔNG phải user.name)
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
      pagination: { page: parseInt(page), total, pages: Math.ceil(total / limit) },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Không thể lấy danh sách người dùng" });
  }
};

/**
 * @desc    Cập nhật role người dùng (Admin)
 * @route   PUT /api/admin/users/:id/role
 */
// 💡 ROLE MANAGEMENT: Admin thăng/hạ cấp user
// 🔑 SELF-DEMOTION PREVENTION: Admin không thể tự hạ cấp mình
// → Tránh trường hợp hệ thống không còn admin nào
// ⚡ THỰC TẾ: Nên có super-admin hoặc require approval từ admin khác
export const updateUserRole = async (req, res) => {
  try {
    const { role } = req.body;
    // 💡 Whitelist validation: Chỉ chấp nhận "user" hoặc "admin"
    if (!["user", "admin"].includes(role)) {
      return res.status(400).json({ success: false, message: "Role không hợp lệ" });
    }

    // 💡 SELF-DEMOTION CHECK: So sánh param ID với current user ID
    // .toString(): ObjectId → string để so sánh (ObjectId !== string)
    // Prevent self-demotion
    if (req.params.id === req.user._id.toString() && role !== "admin") {
      return res.status(400).json({ success: false, message: "Không thể tự hạ cấp quyền" });
    }

    const user = await User.findByIdAndUpdate(req.params.id, { role }, { new: true }).select(
      "-password -refreshToken"
    );
    if (!user) {
      return res.status(404).json({ success: false, message: "Không tìm thấy người dùng" });
    }

    res.json({ success: true, message: `Đã cập nhật role thành ${role}`, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Không thể cập nhật role" });
  }
};
```

### 8.6.3 Admin Routes

> 🎯 **PHỎNG VẤN — ADMIN CONTROLLER:**
>
> **Q: "MongoDB Aggregate Pipeline stages phổ biến?"**
> A: $match (WHERE), $group (GROUP BY), $sort (ORDER BY), $project (SELECT), $lookup (JOIN), $unwind (flatten array), $limit, $skip, $count, $addFields, $expr
>
> **Q: "Promise.all vs tuần tự cho dashboard?"**
> A: Promise.all chạy song song → N queries chỉ tốn max(time) thay vì sum(time). Dùng khi các queries ĐỘC LẬP. Nếu query B phụ thuộc kết quả query A → phải tuần tự.
>
> **Q: "State machine cho order status?"**
> A: Mỗi status chỉ chuyển được sang một số status cụ thể. Validate transition trước khi apply. Tránh bug/hack skip steps. Terminal states (delivered, cancelled) không chuyển đi đâu.
>
> ⚡ **THỰC TẾ DỰ ÁN:**
>
> - Dashboard queries phải cached (Redis) để không query DB mỗi lần admin F5
> - Stock audit trail BẮT BUỘC cho ecommerce (kế toán cần trace)
> - Self-demotion prevention → tránh lock-out
> - $unwind + $group pattern: Tính toán trên array elements là use case RẤT phổ biến

```javascript
// backend/src/routes/adminRoutes.js
import express from "express";
import {
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
} from "../controllers/adminController.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

// 💡 router.use(protect, adminOnly):
// Middleware GLOBAL cho router → TẤT CẢ routes bên dưới đều yêu cầu admin
// 🔑 TẠI SAO dùng router.use thay vì gắn vào từng route?
// → DRY: Viết 1 lần, 13 routes đều được bảo vệ
// → Impossible quên: Không thể vô tình tạo route admin không có auth
router.use(protect, adminOnly);

// 💡 Dashboard Overview — API đầu tiên admin gọi khi vào dashboard
router.get("/dashboard", getDashboardOverview);

// 💡 Analytics & Statistics — Data cho charts/graphs
router.get("/revenue-stats", getRevenueStats);
router.get("/top-products", getTopProducts);
router.get("/category-stats", getCategoryStats);
router.get("/user-stats", getUserStats);
router.get("/low-stock", getLowStockProducts);

// 💡 Order Management
router.get("/orders", getAllOrders);
router.get("/recent-orders", getRecentOrders);
router.put("/orders/:id/status", updateOrderStatus);

// 💡 User Management
router.get("/users", getAllUsers);
router.put("/users/:id/role", updateUserRole);

// 💡 Inventory Management
router.put("/products/:id/stock", updateProductStock);

export default router;
```

---

## 8.7 CartContext (Frontend - Đã có trong codebase)

> ℹ️ **Lưu ý**: `CartContext.jsx` đã được implement trong codebase (548 dòng). Dưới đây là tài liệu chi tiết.

### 6.7.1 Cấu trúc CartContext

```jsx
// frontend/src/context/CartContext.jsx

// Constants
const TAX_RATE = 0.1; // 10% tax
const FREE_SHIPPING_THRESHOLD = 100; // Free shipping above $100
const SHIPPING_COST = 7.99;

// Action Types
const CART_ACTIONS = {
  CART_START: "CART_START",
  CART_SUCCESS: "CART_SUCCESS",
  CART_FAILURE: "CART_FAILURE",
  CLEAR_CART: "CLEAR_CART",
  SET_ERROR: "SET_ERROR",
  CLEAR_ERROR: "CLEAR_ERROR",
  OPTIMISTIC_UPDATE: "OPTIMISTIC_UPDATE",
  OPEN_CART: "OPEN_CART",
  CLOSE_CART: "CLOSE_CART",
  TOGGLE_CART: "TOGGLE_CART",
};

// Initial State
const initialState = {
  items: [],
  subtotal: 0,
  total: 0,
  discount: 0,
  coupon: null,
  itemCount: 0,
  status: CART_STATUS.IDLE,
  error: null,
  isLoading: true,
  isOpen: false, // Cart drawer UI state
};
```

### 6.7.2 Các methods quan trọng

```jsx
// Trong CartProvider:

// Fetch cart from server
const fetchCart = useCallback(async () => {
  dispatch({ type: CART_ACTIONS.CART_START });
  try {
    const cart = await cartService.getCart();
    dispatch({ type: CART_ACTIONS.CART_SUCCESS, payload: { cart } });
  } catch (error) {
    dispatch({ type: CART_ACTIONS.CART_FAILURE, payload: { error: error.message } });
  }
}, []);

// Add to cart with optimistic update
const addToCart = useCallback(
  async (productId, quantity = 1, variant = null) => {
    // Optimistic update
    const optimisticItems = [...state.items];
    // ... add item to optimisticItems
    dispatch({ type: CART_ACTIONS.OPTIMISTIC_UPDATE, payload: { items: optimisticItems } });

    try {
      const cart = await cartService.addItem(productId, quantity, variant);
      dispatch({ type: CART_ACTIONS.CART_SUCCESS, payload: { cart } });
      return { success: true };
    } catch (error) {
      // Rollback on error
      await fetchCart();
      return { success: false, error: error.message };
    }
  },
  [state.items, fetchCart]
);

// Similar patterns for updateQuantity, removeItem, clearCart
```

### 6.7.3 Sử dụng CartContext

```jsx
// Trong component
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart, isOpen, openCart, itemCount } = useCart();

  const handleAddToCart = async () => {
    const result = await addToCart(product._id, 1, { size: "M" });
    if (result.success) {
      openCart(); // Open cart drawer
    }
  };

  return <button onClick={handleAddToCart}>Add to Cart ({itemCount})</button>;
}
```

---

## 8.8 ToastContext (Frontend - Đã có trong codebase)

### 6.8.1 Cấu trúc ToastContext

```jsx
// frontend/src/context/ToastContext.jsx

const TOAST_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
};

// ToastProvider cung cấp:
// - addToast(message, type, duration)
// - removeToast(id)
// - clearAllToasts()
// - success(message) - shorthand
// - error(message) - shorthand
// - warning(message) - shorthand
// - info(message) - shorthand
```

### 6.8.2 Sử dụng Toast

```jsx
import { useToast } from "../context/ToastContext";

function CheckoutButton() {
  const toast = useToast();

  const handleCheckout = async () => {
    try {
      await processCheckout();
      toast.success("Order placed successfully!");
    } catch (error) {
      toast.error(error.message || "Checkout failed");
    }
  };

  return <button onClick={handleCheckout}>Checkout</button>;
}
```

---

## 8.9 Address Management (Thêm vào User Model)

```javascript
// Thêm vào backend/src/models/User.js

const addressSchema = new mongoose.Schema({
  label: {
    type: String,
    default: "Home",
    enum: ["Home", "Work", "Other"],
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  apartment: String,
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    default: "Vietnam",
  },
  isDefault: {
    type: Boolean,
    default: false,
  },
});

// Trong userSchema, thêm:
addresses: {
  type: [addressSchema],
  default: [],
  validate: {
    validator: function (arr) {
      return arr.length <= 5; // Max 5 addresses
    },
    message: "Cannot have more than 5 saved addresses",
  },
},
```

---

## 8.10 Update Routes Index

```javascript
// backend/src/routes/index.js - Cập nhật để include các routes mới
import express from "express";
import authRoutes from "./authRoutes.js";
import productRoutes from "./productRoutes.js";
import cartRoutes from "./cartRoutes.js";
import profileRoutes from "./profileRoutes.js";
import orderRoutes from "./orderRoutes.js";
import checkoutRoutes from "./checkoutRoutes.js";
import reviewRoutes from "./reviewRoutes.js";
import adminRoutes from "./adminRoutes.js";

const router = express.Router();

// Public routes
router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/profile", profileRoutes);
router.use("/orders", orderRoutes);
router.use("/checkout", checkoutRoutes);

// Review routes (nested under products)
router.use("/products/:productId/reviews", reviewRoutes);

// Admin routes
router.use("/admin", adminRoutes);

// Health check
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is healthy",
    timestamp: new Date().toISOString(),
  });
});

export default router;
```

---

## 8.11 Complete API Endpoints Summary

### Authentication Endpoints

| Method | Endpoint                          | Description            | Auth      |
| ------ | --------------------------------- | ---------------------- | --------- |
| POST   | `/api/auth/register`              | Register new user      | Public    |
| POST   | `/api/auth/login`                 | Login user             | Public    |
| POST   | `/api/auth/logout`                | Logout user            | Public    |
| POST   | `/api/auth/refresh`               | Refresh access token   | Public    |
| POST   | `/api/auth/forgot-password`       | Request password reset | Public    |
| POST   | `/api/auth/reset-password/:token` | Reset password         | Public    |
| GET    | `/api/auth/me`                    | Get current user       | Protected |

### Profile Endpoints

| Method | Endpoint                | Description      | Auth      |
| ------ | ----------------------- | ---------------- | --------- |
| GET    | `/api/profile`          | Get user profile | Protected |
| PATCH  | `/api/profile`          | Update profile   | Protected |
| PATCH  | `/api/profile/password` | Change password  | Protected |

### Cart Endpoints

| Method | Endpoint                  | Description          | Auth      |
| ------ | ------------------------- | -------------------- | --------- |
| GET    | `/api/cart`               | Get cart             | Optional  |
| POST   | `/api/cart/items`         | Add item to cart     | Optional  |
| PATCH  | `/api/cart/items/:itemId` | Update item quantity | Optional  |
| DELETE | `/api/cart/items/:itemId` | Remove item          | Optional  |
| DELETE | `/api/cart`               | Clear cart           | Optional  |
| POST   | `/api/cart/coupon`        | Apply coupon         | Optional  |
| DELETE | `/api/cart/coupon`        | Remove coupon        | Optional  |
| POST   | `/api/cart/merge`         | Merge guest cart     | Protected |

### Product Endpoints

| Method | Endpoint                     | Description           | Auth   |
| ------ | ---------------------------- | --------------------- | ------ |
| GET    | `/api/products`              | Get all products      | Public |
| GET    | `/api/products/:identifier`  | Get single product    | Public |
| GET    | `/api/products/featured`     | Get featured products | Public |
| GET    | `/api/products/new-arrivals` | Get new arrivals      | Public |
| GET    | `/api/products/sale`         | Get sale products     | Public |

### Order Endpoints (MỚI)

| Method | Endpoint                         | Description       | Auth      |
| ------ | -------------------------------- | ----------------- | --------- |
| GET    | `/api/orders`                    | Get user's orders | Protected |
| POST   | `/api/orders`                    | Create new order  | Optional  |
| GET    | `/api/orders/:orderId`           | Get single order  | Protected |
| GET    | `/api/orders/track/:orderNumber` | Track order       | Public    |
| POST   | `/api/orders/:orderId/cancel`    | Cancel order      | Protected |
| POST   | `/api/orders/:orderId/return`    | Request return    | Protected |

### Checkout Endpoints (MỚI)

| Method | Endpoint                              | Description           | Auth     |
| ------ | ------------------------------------- | --------------------- | -------- |
| POST   | `/api/checkout/initialize`            | Initialize checkout   | Optional |
| POST   | `/api/checkout/shipping-rates`        | Get shipping rates    | Optional |
| POST   | `/api/checkout/calculate-tax`         | Calculate tax         | Optional |
| POST   | `/api/checkout/create-payment-intent` | Create payment intent | Optional |
| POST   | `/api/checkout/complete`              | Complete order        | Optional |

### Review Endpoints (MỚI)

| Method | Endpoint                                     | Description         | Auth      |
| ------ | -------------------------------------------- | ------------------- | --------- |
| GET    | `/api/products/:productId/reviews`           | Get product reviews | Public    |
| POST   | `/api/products/:productId/reviews`           | Create review       | Protected |
| PUT    | `/api/products/:productId/reviews/:reviewId` | Update review       | Protected |
| DELETE | `/api/products/:productId/reviews/:reviewId` | Delete review       | Protected |
| POST   | `/api/reviews/:reviewId/vote`                | Vote on review      | Protected |

### Admin Endpoints (MỚI)

| Method | Endpoint                            | Description         | Auth  |
| ------ | ----------------------------------- | ------------------- | ----- |
| GET    | `/api/admin/dashboard`              | Get dashboard stats | Admin |
| GET    | `/api/admin/orders`                 | Get all orders      | Admin |
| PATCH  | `/api/admin/orders/:orderId/status` | Update order status | Admin |
| GET    | `/api/admin/users`                  | Get all users       | Admin |
| PATCH  | `/api/admin/users/:userId`          | Update user         | Admin |
| PATCH  | `/api/admin/reviews/:reviewId`      | Moderate review     | Admin |

---

# Part 7: Deployment Notes

> 🎯 **Mục tiêu Part này:**
>
> - Containerize ứng dụng với Docker
> - Deploy lên cloud server
> - Setup SSL/HTTPS với Let's Encrypt
> - Configure Nginx reverse proxy

---

## 7.1 Environment Variables for Production

```env
# Backend .env.production
NODE_ENV=production
MONGO_URI=mongodb://mongodb:27017/fashion-store
JWT_SECRET=your-production-secret-key
JWT_REFRESH_SECRET=your-production-refresh-key
CLIENT_URL=https://yourdomain.com

# Frontend .env.production
VITE_API_URL=/api
```

## 7.2 Docker Compose

```yaml
version: "3.8"

services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - VITE_API_URL=/api

  backend:
    build: ./fashion-website-backend
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - MONGO_URI=mongodb://mongodb:27017/fashion-store
    depends_on:
      - mongodb

  mongodb:
    image: mongo:7
    volumes:
      - mongodb_data:/data/db

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - frontend
      - backend

volumes:
  mongodb_data:
```

---

# 📝 Version History

| Version | Date       | Changes                                                |
| ------- | ---------- | ------------------------------------------------------ |
| 1.0     | 2025-01-21 | Initial complete guide matching current codebase       |
| 2.0     | 2025-01-21 | Added Order, Checkout, Email, Review, Admin systems    |
| 3.0     | 2025-01-21 | Added Theory, Clean Code, Debugging, Interview, Career |

---

# 📚 Câu hỏi Gợi mở cho Người học

## Về Authentication & Security

1. **Tại sao dùng 2 token (Access + Refresh) thay vì chỉ 1 token?**
   - Access token ngắn hạn (15 phút) giảm rủi ro nếu bị đánh cắp
   - Refresh token trong httpOnly cookie bảo vệ khỏi XSS
   - Cân bằng giữa security và UX

2. **`sameSite: 'strict'` có ý nghĩa gì?**
   - Ngăn chặn CSRF attacks
   - Cookie chỉ được gửi khi request từ cùng domain
   - Hạn chế: không hoạt động với cross-site requests

3. **Tại sao `forgotPassword` luôn trả về success?**
   - Ngăn chặn email enumeration attacks
   - Attacker không biết email có tồn tại hay không
   - Security best practice

## Về Cart & Checkout

4. **"Optimistic Update" là gì và tại sao cần?**
   - UI update ngay lập tức, không đợi server response
   - Cải thiện perceived performance
   - Rollback nếu server fail

5. **Inventory Lock trong checkout flow hoạt động thế nào?**
   - Reserve stock khi user bắt đầu checkout
   - Timeout để release nếu user abandon
   - Permanent deduct khi order confirmed

6. **Guest checkout vs User checkout khác gì?**
   - Guest: dùng sessionId, không lưu history
   - User: sync với database, có order history
   - Merge cart khi guest đăng ký/login

## Về Order Management

7. **Tại sao cần `statusHistory` array?**
   - Audit trail cho compliance
   - Debug issues trong fulfillment
   - Customer transparency

8. **Soft delete vs Hard delete - khi nào dùng cái nào?**
   - Soft delete: data có relationships, cần audit
   - Hard delete: test data, GDPR compliance request
   - Fashion store: soft delete products, hard delete carts

## Về Performance & Scalability

9. **Khi nào cần Elasticsearch thay vì MongoDB text search?**
   - Catalog > 10,000 products
   - Cần fuzzy matching, typo tolerance
   - Complex faceted search

10. **Redis cache nên dùng ở đâu?**
    - Session storage
    - Cart data cho guests
    - Frequently accessed products
    - Rate limiting counters

---

# Part 8: Lý thuyết Nền tảng (Foundational Theory)

> 📖 Phần này giải thích các khái niệm core mà mọi lập trình viên fullstack cần nắm vững.

---

## 8.1 Kiến trúc Client-Server

### Khái niệm

```
┌─────────────┐         HTTP Request          ┌─────────────┐
│   CLIENT    │ ─────────────────────────────▶│   SERVER    │
│  (Browser)  │                               │  (Node.js)  │
│             │◀───────────────────────────── │             │
└─────────────┘         HTTP Response         └─────────────┘
```

**Client (Frontend)**:

- Giao diện người dùng (UI)
- Chạy trên browser của user
- Gửi requests, nhận responses
- Render dữ liệu thành HTML/CSS

**Server (Backend)**:

- Xử lý business logic
- Kết nối database
- Xác thực, phân quyền
- Trả về dữ liệu (thường là JSON)

### Tại sao tách Client và Server?

| Lợi ích                    | Giải thích                                      |
| -------------------------- | ----------------------------------------------- |
| **Separation of Concerns** | Mỗi phần chịu trách nhiệm riêng                 |
| **Scalability**            | Scale backend và frontend độc lập               |
| **Security**               | Logic nhạy cảm ở server, không expose ra client |
| **Team Collaboration**     | Frontend và Backend team làm việc song song     |
| **Multiple Clients**       | Một backend phục vụ web, mobile, IoT            |

### Stateless vs Stateful

**HTTP là Stateless Protocol:**

```javascript
// Request 1: Login
POST /api/auth/login { email, password }
// Response: { accessToken: "abc123" }

// Request 2: Get Profile - Server không nhớ request 1!
GET /api/profile
// Phải gửi token để server biết bạn là ai
Headers: { Authorization: "Bearer abc123" }
```

**Cách duy trì state:**

- **Cookies**: Server set, browser tự gửi
- **Tokens (JWT)**: Client lưu, gửi trong header
- **Sessions**: Server lưu, client chỉ giữ session ID

---

## 8.2 RESTful API

### REST là gì?

**REST** = Representational State Transfer

Là một kiến trúc thiết kế API dựa trên các nguyên tắc:

1. **Client-Server**: Tách biệt rõ ràng
2. **Stateless**: Mỗi request chứa đủ thông tin
3. **Cacheable**: Response có thể cache
4. **Uniform Interface**: Sử dụng HTTP methods chuẩn
5. **Layered System**: Có thể thêm middleware, proxy

### HTTP Methods & CRUD

| Method | CRUD Operation   | Ví dụ                    | Idempotent |
| ------ | ---------------- | ------------------------ | ---------- |
| GET    | Read             | Lấy danh sách sản phẩm   | ✅ Yes     |
| POST   | Create           | Tạo đơn hàng mới         | ❌ No      |
| PUT    | Update (Full)    | Thay thế toàn bộ product | ✅ Yes     |
| PATCH  | Update (Partial) | Cập nhật chỉ price       | ✅ Yes     |
| DELETE | Delete           | Xóa review               | ✅ Yes     |

> **Idempotent**: Gọi nhiều lần cho cùng kết quả như gọi 1 lần

### RESTful URL Design

```
# ✅ Good - Resource-based
GET    /api/products          # Lấy tất cả products
GET    /api/products/123      # Lấy product id=123
POST   /api/products          # Tạo product mới
PUT    /api/products/123      # Update product 123
DELETE /api/products/123      # Xóa product 123

# Nested resources
GET    /api/products/123/reviews      # Reviews của product 123
POST   /api/products/123/reviews      # Thêm review cho product 123

# ❌ Bad - Verb-based
GET    /api/getProducts
POST   /api/createProduct
POST   /api/deleteProduct/123
```

### HTTP Status Codes

```javascript
// 2xx - Success
200 OK                  // GET, PUT, PATCH thành công
201 Created             // POST tạo resource thành công
204 No Content          // DELETE thành công

// 4xx - Client Error
400 Bad Request         // Validation error
401 Unauthorized        // Chưa login
403 Forbidden           // Login rồi nhưng không có quyền
404 Not Found           // Resource không tồn tại
409 Conflict            // Duplicate email khi register
422 Unprocessable       // Semantic error
429 Too Many Requests   // Rate limit exceeded

// 5xx - Server Error
500 Internal Server     // Bug trong code
502 Bad Gateway         // Nginx không connect được backend
503 Service Unavailable // Server quá tải
```

### Response Format Chuẩn

```javascript
// Success response
{
  "success": true,
  "message": "Products retrieved successfully",
  "data": {
    "products": [...],
    "pagination": {
      "currentPage": 1,
      "totalPages": 10,
      "totalProducts": 100
    }
  }
}

// Error response
{
  "success": false,
  "message": "Validation failed",
  "code": "VALIDATION_ERROR",
  "errors": [
    { "field": "email", "message": "Email is required" },
    { "field": "password", "message": "Password too short" }
  ]
}
```

---

## 8.3 JWT (JSON Web Token)

### JWT là gì?

JWT là một chuẩn mở (RFC 7519) để truyền thông tin an toàn giữa các bên dưới dạng JSON object đã được ký số.

### Cấu trúc JWT

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJ1c2VySWQiOiIxMjM0NTYiLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJpYXQiOjE2MzI0NTY3ODksImV4cCI6MTYzMjQ2MDM4OX0.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

Header.Payload.Signature
```

**Header** (Base64):

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

**Payload** (Base64):

```json
{
  "userId": "123456",
  "email": "user@example.com",
  "role": "user",
  "iat": 1632456789,
  "exp": 1632460389
}
```

**Signature**:

```javascript
HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secretKey);
```

### JWT Flow trong Authentication

```
┌──────────┐                                      ┌──────────┐
│  Client  │                                      │  Server  │
└────┬─────┘                                      └────┬─────┘
     │                                                 │
     │  1. POST /login { email, password }             │
     │ ───────────────────────────────────────────────▶│
     │                                                 │
     │                    Verify credentials           │
     │                    Generate JWT tokens          │
     │                                                 │
     │  2. { accessToken, refreshToken (cookie) }      │
     │ ◀───────────────────────────────────────────────│
     │                                                 │
     │  3. GET /profile                                │
     │     Authorization: Bearer <accessToken>         │
     │ ───────────────────────────────────────────────▶│
     │                                                 │
     │                    Verify signature             │
     │                    Check expiration             │
     │                    Extract user info            │
     │                                                 │
     │  4. { user: { name, email, ... } }              │
     │ ◀───────────────────────────────────────────────│
```

### Tại sao dùng 2 tokens?

| Aspect             | Access Token            | Refresh Token             |
| ------------------ | ----------------------- | ------------------------- |
| **Lifetime**       | 15 phút                 | 7 ngày                    |
| **Storage**        | Memory/localStorage     | httpOnly cookie           |
| **Purpose**        | Authenticate requests   | Get new access token      |
| **Risk if stolen** | Limited damage (15 min) | Higher risk               |
| **Sent with**      | Every API request       | Only to /refresh endpoint |

### JWT vs Sessions

| JWT                                 | Sessions                             |
| ----------------------------------- | ------------------------------------ |
| Stateless - không cần lưu ở server  | Stateful - server lưu session data   |
| Scalable - không cần shared storage | Cần Redis/DB để share across servers |
| Không thể revoke trước khi hết hạn  | Có thể revoke bất cứ lúc nào         |
| Payload có thể lớn                  | Session ID nhỏ gọn                   |

---

## 8.4 Xác thực (Authentication) vs Phân quyền (Authorization)

### Authentication (AuthN) - Bạn là ai?

```javascript
// Xác minh danh tính user
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "secretPassword"
}

// Server verify và trả về token
{
  "success": true,
  "data": {
    "user": { "id": "123", "email": "user@example.com" },
    "accessToken": "eyJhbGci..."
  }
}
```

### Authorization (AuthZ) - Bạn được làm gì?

```javascript
// Middleware kiểm tra quyền
export const requireAdmin = (req, res, next) => {
  // Authentication đã xong (user có trong req.user)

  // Authorization: kiểm tra role
  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Admin access required",
    });
  }

  next();
};

// Sử dụng
router.get("/admin/dashboard", protect, requireAdmin, getDashboard);
```

### RBAC (Role-Based Access Control)

```javascript
const roles = {
  user: ["read:products", "write:cart", "write:orders"],
  admin: [
    "read:products",
    "write:products",
    "delete:products",
    "read:orders",
    "update:orders",
    "read:users",
  ],
  superadmin: ["*"], // All permissions
};

// Middleware
export const requirePermission = (...permissions) => {
  return (req, res, next) => {
    const userPermissions = roles[req.user.role] || [];

    const hasPermission = permissions.every(
      (p) => userPermissions.includes(p) || userPermissions.includes("*")
    );

    if (!hasPermission) {
      return res.status(403).json({
        success: false,
        message: `Required permissions: ${permissions.join(", ")}`,
      });
    }

    next();
  };
};

// Usage
router.delete("/products/:id", protect, requirePermission("delete:products"), deleteProduct);
```

---

## 8.5 State Management

### Tại sao cần State Management?

```
                    ┌─────────────┐
                    │   App.jsx   │
                    │ (user state)│
                    └──────┬──────┘
           ┌───────────────┼───────────────┐
           ▼               ▼               ▼
      ┌─────────┐    ┌─────────┐    ┌─────────┐
      │ Header  │    │Products │    │  Cart   │
      │(cần user│    │(cần user│    │(cần user│
      │  name)  │    │wishlist)│    │  cart)  │
      └─────────┘    └─────────┘    └─────────┘
```

**Vấn đề Prop Drilling:**

```jsx
// ❌ Truyền props qua nhiều tầng
<App user={user}>
  <Layout user={user}>
    <Header user={user}>
      <UserMenu user={user} /> {/* Cuối cùng mới dùng! */}
    </Header>
  </Layout>
</App>
```

**Giải pháp Context API:**

```jsx
// ✅ Sử dụng Context
<AuthProvider>
  {" "}
  {/* Cung cấp user state */}
  <App>
    <Layout>
      <Header>
        <UserMenu /> {/* Lấy user từ context */}
      </Header>
    </Layout>
  </App>
</AuthProvider>;

// Trong UserMenu
const { user, logout } = useAuth();
```

### React Context + useReducer Pattern

```jsx
// 1. Define action types
const AUTH_ACTIONS = {
  LOGIN_START: "LOGIN_START",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGOUT: "LOGOUT",
};

// 2. Create reducer (pure function)
function authReducer(state, action) {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_START:
      return { ...state, isLoading: true, error: null };
    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return { ...state, isLoading: false, user: action.payload, isAuthenticated: true };
    case AUTH_ACTIONS.LOGIN_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case AUTH_ACTIONS.LOGOUT:
      return { ...initialState, isLoading: false };
    default:
      return state;
  }
}

// 3. Create context and provider
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (email, password) => {
    dispatch({ type: AUTH_ACTIONS.LOGIN_START });
    try {
      const user = await authService.login(email, password);
      dispatch({ type: AUTH_ACTIONS.LOGIN_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.LOGIN_FAILURE, payload: error.message });
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>{children}</AuthContext.Provider>
  );
}
```

### Khi nào dùng gì?

| Solution                 | Use Case                               |
| ------------------------ | -------------------------------------- |
| **useState**             | Local component state                  |
| **useReducer**           | Complex state logic trong 1 component  |
| **Context + useReducer** | Shared state (auth, theme, cart)       |
| **Redux**                | Very large apps, time-travel debugging |
| **Zustand/Jotai**        | Simpler global state, less boilerplate |
| **React Query/SWR**      | Server state (caching, refetching)     |

---

## 8.6 MVC Pattern

### Model-View-Controller

```
┌─────────────────────────────────────────────────────────────┐
│                        MVC Pattern                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────┐      ┌────────────┐      ┌─────────┐          │
│  │  VIEW   │ ◀─── │ CONTROLLER │ ◀─── │  MODEL  │          │
│  │(React)  │      │ (Express)  │      │(Mongoose)│          │
│  └────┬────┘      └─────┬──────┘      └────┬────┘          │
│       │                 │                  │                │
│       │    User         │   Business       │   Database     │
│       │    Interface    │   Logic          │   Operations   │
│       │                 │                  │                │
│       ▼                 ▼                  ▼                │
│  ┌─────────┐      ┌────────────┐      ┌─────────┐          │
│  │ Button  │      │ Validate   │      │ MongoDB │          │
│  │ Form    │ ───▶ │ Process    │ ───▶ │ Query   │          │
│  │ Display │      │ Respond    │      │ Save    │          │
│  └─────────┘      └────────────┘      └─────────┘          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Trong Fashion Website

```
backend/src/
├── models/           # MODEL - Schema definitions
│   ├── User.js
│   ├── Product.js
│   └── Order.js
├── controllers/      # CONTROLLER - Business logic
│   ├── authController.js
│   ├── productController.js
│   └── orderController.js
├── routes/           # Route definitions
│   └── index.js
└── middleware/       # Request processing
    └── auth.js

frontend/src/
├── components/       # VIEW - UI components
│   ├── ProductCard.jsx
│   └── CartDrawer.jsx
├── pages/            # VIEW - Page components
│   └── Products.jsx
└── context/          # State management
    └── AuthContext.jsx
```

---

# Part 9: Nguyên tắc Clean Code & Best Practices

## 9.1 SOLID Principles

### S - Single Responsibility Principle

> Một class/function chỉ nên có MỘT lý do để thay đổi.

```javascript
// ❌ Bad - Làm quá nhiều việc
class UserService {
  async register(userData) {
    // Validate input
    if (!userData.email.includes("@")) throw new Error("Invalid email");

    // Hash password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Save to database
    const user = await User.create({ ...userData, password: hashedPassword });

    // Send welcome email
    await sendEmail(user.email, "Welcome!", "Thanks for joining...");

    // Log to analytics
    analytics.track("user_registered", { userId: user.id });

    return user;
  }
}

// ✅ Good - Tách thành các services riêng
class UserService {
  constructor(emailService, analyticsService) {
    this.emailService = emailService;
    this.analyticsService = analyticsService;
  }

  async register(userData) {
    // Chỉ làm 1 việc: tạo user
    const user = await User.create(userData);

    // Delegate các việc khác
    await this.emailService.sendWelcome(user);
    this.analyticsService.track("user_registered", { userId: user.id });

    return user;
  }
}
```

### O - Open/Closed Principle

> Mở cho mở rộng, đóng cho sửa đổi.

```javascript
// ❌ Bad - Phải sửa code khi thêm payment method
function processPayment(order, method) {
  if (method === "stripe") {
    // Stripe logic
  } else if (method === "paypal") {
    // PayPal logic
  } else if (method === "cod") {
    // COD logic
  }
  // Thêm method mới = sửa function này
}

// ✅ Good - Thêm mới không cần sửa code cũ
const paymentProcessors = {
  stripe: new StripeProcessor(),
  paypal: new PayPalProcessor(),
  cod: new CODProcessor(),
};

function processPayment(order, method) {
  const processor = paymentProcessors[method];
  if (!processor) throw new Error("Unknown payment method");
  return processor.process(order);
}

// Thêm payment method mới - chỉ thêm file mới
paymentProcessors.vnpay = new VNPayProcessor();
```

### L - Liskov Substitution Principle

> Objects của subclass có thể thay thế objects của parent class.

```javascript
// ❌ Bad - Square không thể thay thế Rectangle
class Rectangle {
  setWidth(w) {
    this.width = w;
  }
  setHeight(h) {
    this.height = h;
  }
  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(w) {
    this.width = this.height = w;
  } // Breaks LSP!
  setHeight(h) {
    this.width = this.height = h;
  }
}

// ✅ Good - Dùng composition thay vì inheritance
class Shape {
  getArea() {
    throw new Error("Must implement");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  getArea() {
    return this.side * this.side;
  }
}
```

### I - Interface Segregation Principle

> Nhiều interface nhỏ tốt hơn 1 interface lớn.

```javascript
// ❌ Bad - Interface quá lớn
class FullFeaturedUser {
  login() {}
  logout() {}
  updateProfile() {}
  deleteAccount() {}
  viewOrders() {}
  createOrder() {}
  manageProducts() {} // Không phải user nào cũng cần
  viewAnalytics() {} // Chỉ admin cần
}

// ✅ Good - Tách thành các interfaces nhỏ
const AuthMixin = {
  login() {},
  logout() {},
};

const ProfileMixin = {
  updateProfile() {},
  deleteAccount() {},
};

const CustomerMixin = {
  viewOrders() {},
  createOrder() {},
};

const AdminMixin = {
  manageProducts() {},
  viewAnalytics() {},
};

// Compose theo nhu cầu
const RegularUser = { ...AuthMixin, ...ProfileMixin, ...CustomerMixin };
const AdminUser = { ...RegularUser, ...AdminMixin };
```

### D - Dependency Inversion Principle

> Depend on abstractions, not concretions.

```javascript
// ❌ Bad - Phụ thuộc trực tiếp vào implementation
class OrderService {
  async createOrder(data) {
    // Phụ thuộc trực tiếp vào Stripe
    const stripe = require('stripe')(process.env.STRIPE_KEY);
    await stripe.paymentIntents.create(...);

    // Phụ thuộc trực tiếp vào Nodemailer
    const nodemailer = require('nodemailer');
    await nodemailer.sendMail(...);
  }
}

// ✅ Good - Inject dependencies
class OrderService {
  constructor(paymentGateway, emailService) {
    this.paymentGateway = paymentGateway;  // Abstraction
    this.emailService = emailService;       // Abstraction
  }

  async createOrder(data) {
    await this.paymentGateway.charge(data.amount);
    await this.emailService.sendConfirmation(data);
  }
}

// Inject different implementations
const orderService = new OrderService(
  new StripeGateway(),   // hoặc new PayPalGateway()
  new NodemailerService() // hoặc new SendGridService()
);
```

---

## 9.2 DRY, KISS, YAGNI

### DRY - Don't Repeat Yourself

```javascript
// ❌ Bad - Code lặp lại
async function getActiveProducts() {
  return await Product.find({ isActive: true, stock: { $gt: 0 } });
}

async function getFeaturedProducts() {
  return await Product.find({ isActive: true, stock: { $gt: 0 }, isFeatured: true });
}

async function getSaleProducts() {
  return await Product.find({ isActive: true, stock: { $gt: 0 }, isOnSale: true });
}

// ✅ Good - Extract common logic
const baseProductQuery = { isActive: true, stock: { $gt: 0 } };

async function getProducts(additionalQuery = {}) {
  return await Product.find({ ...baseProductQuery, ...additionalQuery });
}

const getActiveProducts = () => getProducts();
const getFeaturedProducts = () => getProducts({ isFeatured: true });
const getSaleProducts = () => getProducts({ isOnSale: true });
```

### KISS - Keep It Simple, Stupid

```javascript
// ❌ Over-engineered
class ProductPriceCalculatorFactory {
  static createCalculator(type) {
    switch (type) {
      case "regular":
        return new RegularPriceCalculator();
      case "sale":
        return new SalePriceCalculator();
      case "vip":
        return new VIPPriceCalculator();
    }
  }
}

class AbstractPriceCalculator {
  calculateFinalPrice(product, user) {
    throw new Error("Must implement");
  }
}

// ✅ Simple and clear
function calculatePrice(product, user) {
  let price = product.price;

  if (product.isOnSale && product.salePrice) {
    price = product.salePrice;
  }

  if (user?.isVIP) {
    price *= 0.9; // 10% VIP discount
  }

  return price;
}
```

### YAGNI - You Aren't Gonna Need It

```javascript
// ❌ Building for imaginary future requirements
const userSchema = new Schema({
  email: String,
  password: String,

  // "Might need these later..."
  facebookId: String,
  googleId: String,
  twitterId: String,
  linkedinId: String,
  githubId: String,

  // "In case we go international..."
  preferredLanguage: String,
  timezone: String,
  currency: String,
  dateFormat: String,

  // "For future gamification..."
  points: Number,
  level: Number,
  badges: [String],
  achievements: [Object],
});

// ✅ Build what you need NOW
const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  // Add more fields when you ACTUALLY need them
});
```

---

## 9.3 Clean Code Practices

### Meaningful Names

```javascript
// ❌ Bad names
const d = new Date();
const u = users.filter((x) => x.a > 18);
function calc(p, q, t) {
  return p * q * (1 + t);
}

// ✅ Good names
const currentDate = new Date();
const adultUsers = users.filter((user) => user.age > 18);
function calculateTotalWithTax(price, quantity, taxRate) {
  return price * quantity * (1 + taxRate);
}
```

### Small Functions

```javascript
// ❌ Bad - Function quá dài
async function processOrder(orderData) {
  // 200 lines of code doing everything...
  // Validate
  // Check inventory
  // Calculate totals
  // Process payment
  // Update database
  // Send emails
  // Update analytics
}

// ✅ Good - Tách thành các functions nhỏ
async function processOrder(orderData) {
  validateOrderData(orderData);
  await checkInventoryAvailability(orderData.items);

  const totals = calculateOrderTotals(orderData);
  const paymentResult = await processPayment(totals.total);

  const order = await createOrder(orderData, totals, paymentResult);

  // Fire-and-forget async tasks
  sendOrderConfirmation(order);
  updateAnalytics(order);

  return order;
}
```

### Comments - When and How

```javascript
// ❌ Bad comments - stating the obvious
// Increment i by 1
i++;

// Check if user is logged in
if (user.isLoggedIn) {
}

// ✅ Good comments - explain WHY, not WHAT

// Using 24-hour session timeout as required by PCI-DSS compliance
const SESSION_TIMEOUT = 24 * 60 * 60 * 1000;

// Workaround for Safari bug in iOS 14.x where cookies
// don't persist after app backgrounding. See: github.com/issue/12345
if (isSafariMobile()) {
  localStorage.setItem("tempAuth", token);
}

// Business rule: VIP users get free shipping on orders over $50
// (normal threshold is $100). Confirmed with product team on 2024-01-15
const freeShippingThreshold = user.isVIP ? 50 : 100;
```

### Error Handling

```javascript
// ❌ Bad - Swallowing errors
try {
  await processPayment(amount);
} catch (e) {
  console.log(e);
}

// ❌ Bad - Generic error messages
catch (error) {
  throw new Error('Something went wrong');
}

// ✅ Good - Proper error handling
try {
  await processPayment(amount);
} catch (error) {
  // Log với context
  logger.error('Payment processing failed', {
    amount,
    userId: user.id,
    error: error.message,
    stack: error.stack
  });

  // Re-throw với message phù hợp cho user
  if (error.code === 'INSUFFICIENT_FUNDS') {
    throw new AppError('Payment declined. Please check your card balance.', 402);
  }

  if (error.code === 'CARD_EXPIRED') {
    throw new AppError('Your card has expired. Please update payment method.', 402);
  }

  // Unknown error - log và show generic message
  throw new AppError('Payment could not be processed. Please try again later.', 500);
}
```

---

# Part 10: Kỹ năng Thực tế (Practical Skills)

## 10.1 Debugging Hiệu quả

### Debugging Mindset

```
┌─────────────────────────────────────────────────────────────┐
│                    DEBUGGING PROCESS                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. REPRODUCE  ─────▶  2. ISOLATE  ─────▶  3. IDENTIFY     │
│     Tái tạo bug         Thu hẹp scope       Tìm root cause │
│                                                             │
│       ▲                                           │         │
│       │                                           ▼         │
│                                                             │
│  6. VERIFY    ◀─────  5. TEST     ◀─────  4. FIX           │
│     Bug đã hết?        Unit test          Sửa code         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Console Debugging Techniques

```javascript
// 1. console.log với labels rõ ràng
console.log("[AUTH] User login attempt:", { email, timestamp: new Date() });
console.log("[CART] Adding item:", { productId, quantity, currentCart: cart.items.length });

// 2. console.table cho arrays/objects
console.table(users.map((u) => ({ id: u.id, name: u.name, role: u.role })));

// 3. console.group cho structured logging
console.group("Order Processing");
console.log("1. Validating order...");
console.log("2. Processing payment...");
console.log("3. Creating order...");
console.groupEnd();

// 4. console.time cho performance
console.time("Database Query");
const products = await Product.find();
console.timeEnd("Database Query"); // Database Query: 45.123ms

// 5. console.trace cho call stack
function deeplyNestedFunction() {
  console.trace("How did we get here?");
}
```

### Backend Debugging

```javascript
// 1. Request/Response logging middleware
app.use((req, res, next) => {
  const start = Date.now();

  // Log request
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  console.log("Body:", JSON.stringify(req.body, null, 2));
  console.log("Query:", req.query);

  // Log response
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`[RESPONSE] ${res.statusCode} - ${duration}ms`);
  });

  next();
});

// 2. Mongoose query debugging
mongoose.set("debug", (collectionName, method, query, doc) => {
  console.log(`[MONGOOSE] ${collectionName}.${method}`, JSON.stringify(query));
});

// 3. Error stack traces
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise);
  console.error("Reason:", reason);
  console.error("Stack:", reason?.stack);
});
```

### Frontend Debugging

```javascript
// 1. React DevTools Profiler
// - Tìm component render nhiều lần không cần thiết
// - Đo performance của mỗi render

// 2. Network tab analysis
// - Check request/response payload
// - Verify headers (Authorization, Content-Type)
// - Check timing (TTFB, Download time)

// 3. useEffect dependencies debugging
useEffect(() => {
  console.log("[useEffect] Dependencies changed:", {
    user,
    isAuthenticated,
    renderCount: ++renderCountRef.current,
  });

  // Your effect logic
}, [user, isAuthenticated]);

// 4. Why did this component re-render?
import { useRef } from "react";

function useWhyDidYouRender(componentName, props) {
  const previousProps = useRef();

  useEffect(() => {
    if (previousProps.current) {
      const changedProps = Object.entries(props).filter(
        ([key, value]) => previousProps.current[key] !== value
      );

      if (changedProps.length > 0) {
        console.log(`[${componentName}] Changed props:`, changedProps);
      }
    }

    previousProps.current = props;
  });
}
```

### Common Bug Patterns

| Bug Pattern          | Symptoms                               | Solution                                  |
| -------------------- | -------------------------------------- | ----------------------------------------- |
| **Race Condition**   | Inconsistent behavior, works sometimes | Use locks, queues, or proper async/await  |
| **Memory Leak**      | App slows down over time               | Cleanup useEffect, remove event listeners |
| **Infinite Loop**    | Browser freezes, max call stack        | Check useEffect deps, recursive calls     |
| **Stale Closure**    | Old values in callbacks                | useRef, useCallback with deps             |
| **CORS Error**       | Request blocked in browser             | Configure backend CORS headers            |
| **401 Unauthorized** | Token missing/expired                  | Check auth flow, refresh token            |

---

## 10.2 Git Workflow

### Git Branching Strategy

```
main (production)
  │
  ├── develop (staging)
  │     │
  │     ├── feature/add-wishlist
  │     │     └── commits...
  │     │
  │     ├── feature/checkout-flow
  │     │     └── commits...
  │     │
  │     └── bugfix/cart-quantity
  │           └── commits...
  │
  └── hotfix/security-patch
        └── merge directly to main
```

### Commit Message Convention

```bash
# Format: <type>(<scope>): <subject>

# Types:
feat     # New feature
fix      # Bug fix
docs     # Documentation
style    # Formatting, no code change
refactor # Code restructuring
test     # Adding tests
chore    # Maintenance tasks

# Examples:
git commit -m "feat(auth): add password reset flow"
git commit -m "fix(cart): resolve quantity update race condition"
git commit -m "refactor(api): extract common validation logic"
git commit -m "docs: update API endpoints in README"
git commit -m "test(order): add checkout flow integration tests"
```

### Daily Git Workflow

```bash
# 1. Start your day - sync with remote
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/add-review-system

# 3. Make atomic commits (small, focused)
git add src/models/Review.js
git commit -m "feat(review): add Review model with schema"

git add src/controllers/reviewController.js
git commit -m "feat(review): add CRUD controller methods"

git add src/routes/reviewRoutes.js
git commit -m "feat(review): configure review routes"

# 4. Push regularly
git push origin feature/add-review-system

# 5. Before PR - rebase to latest develop
git fetch origin
git rebase origin/develop

# 6. Fix conflicts if any
# Edit conflicted files
git add .
git rebase --continue

# 7. Force push after rebase
git push origin feature/add-review-system --force-with-lease

# 8. Create Pull Request on GitHub/GitLab
```

### Handling Merge Conflicts

```bash
# 1. Khi gặp conflict
Auto-merging src/routes/index.js
CONFLICT (content): Merge conflict in src/routes/index.js

# 2. Mở file và tìm conflict markers
<<<<<<< HEAD
import reviewRoutes from './reviewRoutes.js';
=======
import wishlistRoutes from './wishlistRoutes.js';
>>>>>>> feature/add-wishlist

# 3. Resolve - keep both hoặc chọn 1
import reviewRoutes from './reviewRoutes.js';
import wishlistRoutes from './wishlistRoutes.js';

# 4. Stage và continue
git add src/routes/index.js
git rebase --continue
# hoặc
git merge --continue
```

### Git Tips

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Amend last commit message
git commit --amend -m "New message"

# Stash changes temporarily
git stash
git stash pop

# View pretty log
git log --oneline --graph --all

# Find who wrote a line
git blame src/controllers/authController.js

# Search in commit history
git log --grep="password reset"

# Interactive rebase (squash commits)
git rebase -i HEAD~3
```

---

## 10.3 Code Review Best Practices

### As a Reviewer

```markdown
## Code Review Checklist

### Functionality

- [ ] Code does what the PR description says
- [ ] Edge cases are handled
- [ ] Error handling is proper

### Code Quality

- [ ] Follows project coding standards
- [ ] No duplicate code
- [ ] Functions are small and focused
- [ ] Variable names are meaningful

### Security

- [ ] No hardcoded secrets
- [ ] Input validation present
- [ ] No SQL/NoSQL injection vulnerabilities
- [ ] Authorization checks in place

### Performance

- [ ] No obvious N+1 queries
- [ ] No unnecessary re-renders
- [ ] Large lists are paginated

### Testing

- [ ] Unit tests added for new logic
- [ ] Existing tests still pass
- [ ] Edge cases tested
```

### Giving Constructive Feedback

```markdown
# ❌ Bad feedback

"This code is wrong"
"Why did you do it this way?"
"This is not how we do things here"

# ✅ Good feedback

"Consider using `Array.find()` instead of `filter()[0]` for better
readability and early termination"

"I noticed this query runs inside a loop (line 45-50). This might
cause N+1 query issues. Would you consider using `.populate()`
or batching the queries? Happy to pair on this if helpful!"

"Nice approach! One small suggestion: we could extract lines 23-35
into a separate function like `calculateDiscount()` to make testing
easier. What do you think?"
```

### As an Author

```markdown
# Good PR Description Template

## What does this PR do?

Adds product review functionality allowing users to rate and review products.

## Why is this change needed?

Per product requirement PRD-123, users should be able to leave reviews
to improve social proof and SEO.

## How to test?

1. Login as a user who has purchased a product
2. Navigate to product detail page
3. Submit a review with rating 1-5
4. Verify review appears after admin moderation

## Screenshots (if UI changes)

[Before/After screenshots]

## Checklist

- [x] Tests added
- [x] Documentation updated
- [x] No console.logs left
- [x] Mobile responsive checked
```

---

## 10.4 Problem Solving Approach

### UMPIRE Method

```
U - Understand the problem
M - Match with known patterns
P - Plan your approach
I - Implement the solution
R - Review and test
E - Evaluate and optimize
```

### Example: "Add to Cart không hoạt động"

```markdown
## U - Understand

- User click "Add to Cart" button
- Không có gì xảy ra
- Console không có error
- Network tab: request không được gửi

## M - Match Pattern

- Có thể là: event handler không được attach
- Có thể là: button disabled
- Có thể là: state không đúng

## P - Plan

1. Check button onClick handler
2. Check component render
3. Add console.log to trace flow

## I - Implement debugging

const handleAddToCart = async () => {
console.log('Button clicked!'); // ← Không log → handler chưa attach
console.log('Product:', product);
await addToCart(product.\_id);
};

## R - Review findings

- onClick handler bị typo: `onCLick` thay vì `onClick`

## E - Fix và validate

// ❌ Wrong
<Button onCLick={handleAddToCart}>Add to Cart</Button>

// ✅ Fixed
<Button onClick={handleAddToCart}>Add to Cart</Button>
```

### Rubber Duck Debugging

Kỹ thuật giải thích vấn đề cho một "con vịt cao su" (hoặc bất kỳ ai/cái gì):

1. **Mô tả vấn đề chi tiết** - "Add to cart button không work"
2. **Giải thích expected behavior** - "Khi click, item phải được thêm vào cart"
3. **Giải thích actual behavior** - "Không có gì xảy ra, không có error"
4. **Walk through code line by line** - "Đầu tiên button render, onClick gọi handleAddToCart..."
5. **💡 Thường sẽ tự tìm ra bug** - "Ồ! onClick bị viết sai!"

---

# Part 11: Bài tập Thực hành & Tình huống Phỏng vấn

## 11.1 Bài tập Củng cố theo Module

### Module 1: Authentication

**Bài tập cơ bản:**

1. Implement "Remember Me" checkbox - giữ user logged in lâu hơn
2. Thêm password strength indicator khi register
3. Implement account lockout sau 5 lần login fail

**Bài tập nâng cao:** 4. Implement 2FA với OTP qua email 5. Thêm social login (Google OAuth) 6. Implement session management - xem và revoke sessions

### Module 2: Shopping Cart

**Bài tập cơ bản:**

1. Thêm "Save for Later" functionality
2. Implement cart item quantity limits (max 10 per item)
3. Show "Low Stock" warning khi inventory < 5

**Bài tập nâng cao:** 4. Implement abandoned cart email (send after 24h) 5. Thêm real-time stock validation khi checkout 6. Implement multi-currency support

### Module 3: Product

**Bài tập cơ bản:**

1. Thêm "Recently Viewed Products" section
2. Implement product comparison (compare 2-3 products)
3. Thêm product zoom on hover

**Bài tập nâng cao:** 4. Implement product recommendations ("Customers also bought") 5. Thêm product variants với different prices 6. Implement product search autocomplete

### Module 4: Order

**Bài tập cơ bản:**

1. Implement order print/PDF export
2. Thêm reorder functionality
3. Implement order status notifications (email/push)

**Bài tập nâng cao:** 4. Implement partial order cancellation 5. Thêm delivery time slot selection 6. Implement order splitting (multiple shipments)

---

## 11.2 Tình huống Phỏng vấn Giả lập

### Câu hỏi Kiến thức

**Q1: Giải thích JWT authentication flow trong project này?**

```
Expected Answer:
1. User gửi credentials (email/password) đến /api/auth/login
2. Server verify credentials với database
3. Server generate 2 tokens:
   - Access token (15 min) - trả về trong response body
   - Refresh token (7 days) - set trong httpOnly cookie
4. Client lưu access token trong memory
5. Mỗi API request gửi access token trong Authorization header
6. Khi access token expire, client gọi /api/auth/refresh
7. Server verify refresh token từ cookie, issue new tokens
8. Logout: clear refresh token từ database và cookie
```

**Q2: Tại sao dùng httpOnly cookie cho refresh token?**

```
Expected Answer:
- httpOnly cookie không thể access bằng JavaScript
- Bảo vệ khỏi XSS attacks - script malicious không đọc được token
- Browser tự động gửi cookie với mỗi request
- Kết hợp với sameSite: 'strict' để chống CSRF
- Access token ngắn hạn trong memory là acceptable risk
```

**Q3: Làm sao xử lý race condition trong inventory management?**

```javascript
// Expected Answer:
// 1. Optimistic locking với version field
// 2. Database transactions cho critical operations
// 3. Inventory reservation khi checkout start
// 4. TTL cho reservations (15-30 minutes)
// 5. Queue system cho high-traffic scenarios

// Code example:
const session = await mongoose.startSession();
session.startTransaction();

try {
  const product = await Product.findOneAndUpdate(
    { _id: productId, stock: { $gte: quantity } },
    { $inc: { stock: -quantity } },
    { session, new: true }
  );

  if (!product) {
    throw new Error("Insufficient stock");
  }

  await Order.create([orderData], { session });
  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
  throw error;
} finally {
  session.endSession();
}
```

### Câu hỏi System Design

**Q4: Thiết kế hệ thống "Flash Sale" cho 10,000 concurrent users**

```
Expected Discussion Points:

1. Challenges:
   - High concurrent requests
   - Race conditions
   - Server overload

2. Architecture:
   - Load balancer (Nginx, AWS ALB)
   - Redis for inventory counter (atomic operations)
   - Message queue for order processing
   - CDN for static assets

3. Strategies:
   - Virtual queue system
   - Rate limiting per user
   - Pre-warm cache
   - Separate read/write databases

4. Code pattern:
   // Redis atomic decrement
   const remaining = await redis.decr(`flash_sale:${productId}`);
   if (remaining < 0) {
     await redis.incr(`flash_sale:${productId}`);
     throw new Error('Sold out');
   }
   // Add to processing queue
   await queue.add('process_order', orderData);
```

**Q5: Làm sao implement search với autocomplete cho 100k products?**

```
Expected Discussion Points:

1. Simple approach (< 10k products):
   - MongoDB text index
   - Simple regex matching

2. Medium scale (10k - 100k):
   - Elasticsearch/Algolia
   - Prefix matching with edge n-grams
   - Cache popular searches

3. Autocomplete implementation:
   - Debounce input (300ms)
   - Minimum 2-3 characters
   - Return max 10 suggestions
   - Highlight matching text

4. Performance optimizations:
   - Store search analytics
   - Boost popular products
   - Use completion suggester in ES
```

### Live Coding Challenges

**Challenge 1: Implement debounce function**

```javascript
// Task: Implement debounce to limit search API calls

function debounce(func, wait) {
  // Your implementation here
}

// Expected behavior:
const debouncedSearch = debounce(searchProducts, 300);

// Gọi liên tục 5 lần trong 100ms
debouncedSearch("shirt");
debouncedSearch("shirts");
debouncedSearch("shirts b");
debouncedSearch("shirts bl");
debouncedSearch("shirts blue");

// Chỉ searchProducts('shirts blue') được gọi 1 lần sau 300ms

// Solution:
function debounce(func, wait) {
  let timeoutId = null;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
```

**Challenge 2: Implement cart total calculator**

```javascript
// Task: Calculate cart total with discounts and tax

const cart = {
  items: [
    { productId: "1", price: 29.99, quantity: 2 },
    { productId: "2", price: 49.99, quantity: 1 },
  ],
  coupon: { type: "percentage", value: 10 }, // 10% off
  taxRate: 0.08, // 8%
  freeShippingThreshold: 100,
  shippingCost: 9.99,
};

function calculateCartTotal(cart) {
  // Your implementation
}

// Expected output:
// {
//   subtotal: 109.97,
//   discount: 10.997,
//   afterDiscount: 98.973,
//   shipping: 0, // Free because > 100 before discount
//   tax: 7.92,
//   total: 106.89
// }

// Solution:
function calculateCartTotal(cart) {
  const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  let discount = 0;
  if (cart.coupon) {
    if (cart.coupon.type === "percentage") {
      discount = subtotal * (cart.coupon.value / 100);
    } else if (cart.coupon.type === "fixed") {
      discount = Math.min(cart.coupon.value, subtotal);
    }
  }

  const afterDiscount = subtotal - discount;

  // Free shipping based on subtotal (before discount)
  const shipping = subtotal >= cart.freeShippingThreshold ? 0 : cart.shippingCost;

  const tax = Number((afterDiscount * cart.taxRate).toFixed(2));

  const total = Number((afterDiscount + shipping + tax).toFixed(2));

  return { subtotal, discount, afterDiscount, shipping, tax, total };
}
```

---

# Part 12: Tài liệu Tham khảo & Học thêm

## 12.1 Documentation Chính thức

### Frontend

| Resource     | Link                     | Notes                    |
| ------------ | ------------------------ | ------------------------ |
| React Docs   | https://react.dev        | New React documentation  |
| Vite Guide   | https://vitejs.dev/guide | Build tool documentation |
| React Router | https://reactrouter.com  | Routing documentation    |
| Axios        | https://axios-http.com   | HTTP client docs         |

### Backend

| Resource | Link                         | Notes                 |
| -------- | ---------------------------- | --------------------- |
| Node.js  | https://nodejs.org/docs      | Official Node.js docs |
| Express  | https://expressjs.com        | Web framework         |
| MongoDB  | https://www.mongodb.com/docs | Database docs         |
| Mongoose | https://mongoosejs.com/docs  | ODM documentation     |

### Security

| Resource     | Link                       | Notes                  |
| ------------ | -------------------------- | ---------------------- |
| OWASP Top 10 | https://owasp.org/Top10    | Common vulnerabilities |
| JWT.io       | https://jwt.io             | JWT debugger & docs    |
| Helmet.js    | https://helmetjs.github.io | Security headers       |

## 12.2 Khóa học & Tutorials

### Tiếng Việt

- **F8**: https://fullstack.edu.vn - Khóa JavaScript, React miễn phí
- **TEDU**: https://tedu.com.vn - Khóa .NET, React
- **Kteam**: https://howkteam.vn - Lập trình cơ bản

### Tiếng Anh

- **freeCodeCamp**: https://freecodecamp.org - Full stack curriculum miễn phí
- **The Odin Project**: https://theodinproject.com - Full stack path
- **Frontend Masters**: https://frontendmasters.com - Advanced courses (paid)
- **Udemy**: Search "MERN Stack" - Nhiều courses chất lượng

### YouTube Channels

- **Traversy Media** - Web development tutorials
- **Fireship** - Quick, modern web content
- **Web Dev Simplified** - React & JavaScript
- **The Net Ninja** - Full stack tutorials

## 12.3 Cộng đồng & Hỗ trợ

### Forums

- **Stack Overflow**: https://stackoverflow.com - Q&A
- **Reddit**: r/reactjs, r/node, r/webdev
- **Dev.to**: https://dev.to - Blog community

### Discord Servers

- Reactiflux (React community)
- Nodeiflux (Node.js community)
- Frontend Mentor

### Vietnamese Communities

- Vietnam Developer Community (Facebook)
- Cộng đồng JavaScript Việt Nam (Facebook)
- Viblo.asia - Tech blog platform

## 12.4 Tools & Productivity

### Development

| Tool            | Purpose           |
| --------------- | ----------------- |
| VS Code         | Code editor       |
| Postman         | API testing       |
| MongoDB Compass | Database GUI      |
| React DevTools  | Browser extension |
| Redux DevTools  | State debugging   |

### Deployment

| Tool           | Purpose          |
| -------------- | ---------------- |
| Docker         | Containerization |
| GitHub Actions | CI/CD            |
| Vercel         | Frontend hosting |
| Railway/Render | Backend hosting  |
| Cloudflare     | CDN & DNS        |

---

# Part 13: Định hướng Nghề nghiệp

## 13.1 Chuẩn bị Portfolio

### GitHub Profile

```markdown
# README.md cho GitHub profile

## 👋 Hi, I'm [Your Name]

🔭 I'm currently working on: [Current project]
🌱 I'm learning: [Technologies]
💬 Ask me about: React, Node.js, MongoDB
📫 How to reach me: [Email/LinkedIn]

### 🛠️ Tech Stack

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white)

### 📊 GitHub Stats

[GitHub stats card]
```

### Project Showcase

```markdown
# Fashion E-commerce Website

## 🚀 Live Demo: [Link]

## 📋 Features

- ✅ User authentication with JWT
- ✅ Shopping cart with guest checkout
- ✅ Product search and filtering
- ✅ Order management
- ✅ Admin dashboard

## 🛠️ Tech Stack

- Frontend: React 18, Vite, React Router 6
- Backend: Node.js, Express 5, MongoDB
- Auth: JWT with refresh tokens
- Deployment: Docker, Nginx, Ubuntu VPS

## 📸 Screenshots

[Screenshots of key features]

## 🏃‍♂️ Run Locally

git clone [repo]
cd project
npm install
npm run dev

## 📝 Lessons Learned

- Implemented secure authentication with httpOnly cookies
- Handled race conditions in inventory management
- Optimized MongoDB queries with proper indexing
```

## 13.2 Chuẩn bị Phỏng vấn

### Kỹ thuật Trả lời STAR

```
S - Situation: Bối cảnh, hoàn cảnh
T - Task: Nhiệm vụ của bạn
A - Action: Hành động bạn đã làm
R - Result: Kết quả đạt được

Example:
Q: "Tell me about a challenging bug you solved"

S: "In my e-commerce project, users reported that sometimes
    their cart items disappeared after logging in."

T: "I needed to find and fix the root cause while ensuring
    no data was lost for affected users."

A: "I analyzed the auth flow and discovered a race condition
    between cart merge and session creation. I implemented
    proper async/await handling and added retry logic."

R: "The fix eliminated the issue completely. I also added
    monitoring to detect similar issues early. No more user
    complaints about lost carts."
```

### Câu hỏi Thường gặp

**Behavioral:**

1. Tell me about yourself
2. Why do you want to work here?
3. Describe a project you're proud of
4. How do you handle disagreements with teammates?
5. Tell me about a time you failed

**Technical:**

1. Explain the virtual DOM in React
2. What is the difference between SQL and NoSQL?
3. How does HTTPS work?
4. Explain async/await vs callbacks vs promises
5. What happens when you type a URL in browser?

## 13.3 Career Growth Path

```
Junior Developer (0-2 years)
├── Focus: Learn, build, ask questions
├── Skills: Core language, framework basics, git
└── Goal: Ship features independently

Mid Developer (2-5 years)
├── Focus: Architecture, mentoring
├── Skills: System design, testing, DevOps basics
└── Goal: Lead small projects/features

Senior Developer (5+ years)
├── Focus: Technical leadership, cross-team impact
├── Skills: Scalability, security, team building
└── Goal: Drive technical direction

Staff/Principal (8+ years)
├── Focus: Organization-wide impact
├── Skills: Strategy, influence, innovation
└── Goal: Solve company-level problems
```

---

# PART I: PHỤ LỤC QUAN TRỌNG 📚

## Phụ lục A: Security Checklist & Best Practices

> 🎯 **Mục tiêu**: Hiểu và áp dụng đầy đủ các biện pháp bảo mật cho ứng dụng web production

### A.1 Checklist Bảo mật Backend

```markdown
## Authentication & Authorization

- [ ] Password hashing với bcrypt (salt rounds >= 12)
      → Tại sao: Brute-force attack cần ~100 năm để crack
- [ ] JWT stored trong httpOnly cookie
      → Tại sao: XSS không thể đọc được cookie này
- [ ] Refresh token rotation
      → Tại sao: Nếu token bị đánh cắp, chỉ dùng được 1 lần
- [ ] Access token ngắn hạn (15-30 phút)
      → Tại sao: Giảm window of vulnerability
- [ ] Logout invalidates all tokens
      → Tại sao: Ngăn session hijacking

## Input Validation

- [ ] Validate tất cả input với express-validator
      → Tại sao: Ngăn injection attacks
- [ ] Sanitize NoSQL queries với express-mongo-sanitize
      → Tại sao: Ngăn NoSQL injection ($gt, $ne, etc)
- [ ] Escape HTML trong output
      → Tại sao: Ngăn stored XSS
- [ ] Validate file upload (type, size, content)
      → Tại sao: Ngăn malicious file execution

## Rate Limiting & DDoS Protection

- [ ] Rate limit: 100 requests/5 phút (production)
      → Tại sao: Ngăn brute-force và DDoS
- [ ] Stricter rate limit cho auth endpoints (5/15min)
      → Tại sao: Protect password guessing
- [ ] Slowdown middleware cho repeated failures
      → Tại sao: Tăng cost cho attacker

## Headers & Transport Security

- [ ] Helmet.js enabled với CSP strict
      → Tại sao: Ngăn XSS, clickjacking, MIME sniffing
- [ ] HTTPS only (HSTS enabled)
      → Tại sao: Encrypt all traffic, ngăn MITM
- [ ] Secure cookie flags (secure, sameSite)
      → Tại sao: Ngăn cookie theft và CSRF
- [ ] Remove X-Powered-By header
      → Tại sao: Không tiết lộ tech stack

## Database Security

- [ ] MongoDB không expose ra internet
      → Tại sao: Ngăn unauthorized access
- [ ] Database user có minimal permissions
      → Tại sao: Principle of least privilege
- [ ] Enable MongoDB authentication
      → Tại sao: Không ai truy cập anonymous
- [ ] Regular backup với encryption
      → Tại sao: Data recovery + data protection
```

### A.2 Checklist Bảo mật Frontend

```markdown
## XSS Prevention

- [ ] React tự động escape HTML (không dùng dangerouslySetInnerHTML trực tiếp)
      → Tại sao: React's default protection
- [ ] Nếu dùng dangerouslySetInnerHTML: BẮT BUỘC dùng DOMPurify
      → npm install dompurify
      → DOMPurify.sanitize(htmlContent)
- [ ] Sanitize user-generated content với DOMPurify
      → Tại sao: Display user content safely
- [ ] CSP header chặn inline scripts
      → Tại sao: Block injected scripts

## Sensitive Data

- [ ] Không store sensitive data trong localStorage
      → Tại sao: XSS có thể đọc localStorage
- [ ] Không log sensitive data trong console
      → Tại sao: Browser extensions có thể capture
- [ ] Mask credit card, password inputs
      → Tại sao: Shoulder surfing protection
- [ ] Clear sensitive state on logout
      → Tại sao: Next user không thấy data

## API Communication

- [ ] HTTPS only
      → Tại sao: Encrypt data in transit
- [ ] Include CSRF token trong requests
      → Tại sao: Verify request origin
- [ ] Validate API responses
      → Tại sao: Don't trust server blindly
```

### A.3 Script Audit Bảo mật Tự động

```bash
#!/bin/bash
# security-audit.sh - Chạy trước mỗi lần deploy

echo "🔒 Running Security Audit..."

# Check for hardcoded secrets
echo "Checking for hardcoded secrets..."
grep -rn "password\s*=\s*['\"]" --include="*.js" --include="*.jsx" || echo "✅ No hardcoded passwords"
grep -rn "API_KEY\s*=\s*['\"]" --include="*.js" --include="*.jsx" || echo "✅ No hardcoded API keys"

# Check for console.log with sensitive data
echo "Checking for sensitive console.log..."
grep -rn "console.log.*password\|console.log.*token" --include="*.js" || echo "✅ No sensitive logs"

# Run npm audit
echo "Running npm audit..."
cd fashion-website-backend && npm audit --production
cd ../frontend && npm audit --production

# Check dependencies for vulnerabilities
echo "Checking for outdated packages..."
npm outdated

echo "🔒 Security Audit Complete!"
```

---

### A.4 Các Lỗ hổng Thực tế & Cách Fix ⭐

> 🎯 **Đây là các lỗ hổng thực tế phát hiện trong project này và cách khắc phục**

#### A.4.1 XSS qua `dangerouslySetInnerHTML` 🔴 HIGH

**❌ Lỗi:**

```jsx
// NGUY HIỂM! Không sanitize HTML từ database
<div dangerouslySetInnerHTML={{ __html: product.description }} />
```

**Tại sao nguy hiểm?**

- Attacker có thể inject `<script>alert('XSS')</script>` vào product description
- Script sẽ chạy trên browser của tất cả users xem sản phẩm
- Có thể steal cookies, redirect users, keylog passwords

**✅ Fix với DOMPurify:**

```bash
# Cài đặt
npm install dompurify
```

```jsx
import DOMPurify from "dompurify";

// AN TOÀN - Loại bỏ tất cả script, event handlers
<div
  dangerouslySetInnerHTML={{
    __html: DOMPurify.sanitize(product.description || ""),
  }}
/>;
```

**File áp dụng:** `frontend/src/components/products/ProductTabs.jsx`

---

#### A.4.2 Hardcoded Credentials trong Code 🚨 CRITICAL

**❌ Lỗi nghiêm trọng:**

```javascript
// scripts/seedToAtlas.js - CREDENTIALS BỊ COMMIT LÊN GIT!
const MONGODB_URI = "mongodb+srv://username:password@cluster.mongodb.net/db";

// .env.example - SAI! Không đưa credentials thật vào example
MONGODB_URI=mongodb+srv://realuser:realpass@...
```

**Tại sao nguy hiểm?**

- Git history lưu vĩnh viễn, không thể xóa hoàn toàn
- Public repo = hacker có credentials trong 5 phút
- Private repo + 1 dev bị hack = database compromised

**✅ Fix:**

```javascript
// Dùng environment variable
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/mydb";
```

```dotenv
# .env.example - Chỉ placeholder, KHÔNG credentials thật
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/dbname
```

```gitignore
# .gitignore - Ignore TẤT CẢ .env files
.env
.env.*
.env.local
.env.production
.env.development
```

**⚠️ Nếu đã commit credentials:**

1. **NGAY LẬP TỨC** rotate credentials (đổi password)
2. Invalidate tokens, API keys đã lộ
3. Kiểm tra access logs xem có ai dùng credentials đó không

---

#### A.4.3 Thiếu Rate Limiting cho API Routes 🔴 HIGH

**❌ Lỗi:**

```javascript
// server.js - Chỉ auth có rate limit, còn lại không có
app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/products", productRoutes); // KHÔNG CÓ RATE LIMIT!
app.use("/api/checkout", checkoutRoutes); // KHÔNG CÓ RATE LIMIT!
```

**Tại sao nguy hiểm?**

- DDoS attack có thể crash server
- Brute-force order IDs, coupon codes
- Scraping tất cả products trong database

**✅ Fix - Apply rate limit globally:**

```javascript
// server.js
import { generalLimiter } from "./config/security.js";

// Áp dụng cho TẤT CẢ API routes
app.use("/api", generalLimiter);

// Routes riêng có thể có stricter limits
app.use("/api/auth", authLimiter, authRoutes);
```

```javascript
// config/security.js
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 phút
  max: process.env.NODE_ENV === "production" ? 100 : 1000,
  message: {
    success: false,
    message: "Too many requests, please try again after 15 minutes",
  },
});
```

---

#### A.4.4 Bảng Tóm tắt Lỗ hổng

| Lỗ hổng                   | Mức độ      | File bị ảnh hưởng    | Cách fix                                 |
| ------------------------- | ----------- | -------------------- | ---------------------------------------- |
| **XSS via innerHTML**     | 🔴 HIGH     | ProductTabs.jsx      | DOMPurify.sanitize()                     |
| **Hardcoded credentials** | 🚨 CRITICAL | .env._, scripts/_.js | Environment variables                    |
| **Missing .gitignore**    | 🚨 CRITICAL | .gitignore           | Thêm `.env*` patterns                    |
| **No global rate limit**  | 🔴 HIGH     | server.js            | `app.use("/api", generalLimiter)`        |
| **console.log in prod**   | 🟠 MEDIUM   | 6+ backend files     | Centralized logger utility (A.4.6)       |
| **Missing validation**    | 🔴 HIGH     | checkout, orders     | express-validator middleware (A.4.7)     |
| **React memory leak**     | 🟠 MEDIUM   | Home.jsx             | isMounted cleanup pattern (A.4.8)        |
| **Weak JWT secrets**      | 🟡 LOW      | .env                 | `crypto.randomBytes(64).toString('hex')` |

---

#### A.4.5 Security Audit Script (PowerShell)

```powershell
# security-audit.ps1 - Chạy trước mỗi deployment

Write-Host "🔒 Running Security Audit..." -ForegroundColor Cyan

# Check for hardcoded credentials
Write-Host "`n📍 Checking for hardcoded credentials..."
$patterns = @(
    "password\s*[=:]\s*[`"'][^`"']+[`"']",
    "mongodb\+srv://[^:]+:[^@]+@",
    "api[_-]?key\s*[=:]\s*[`"'][^`"']+[`"']"
)

foreach ($pattern in $patterns) {
    $matches = Get-ChildItem -Recurse -Include *.js,*.jsx,*.ts,*.env* |
               Select-String -Pattern $pattern -CaseSensitive:$false
    if ($matches) {
        Write-Host "⚠️ FOUND: $pattern" -ForegroundColor Red
        $matches | ForEach-Object { Write-Host "   $_" }
    }
}

# Check for dangerouslySetInnerHTML without DOMPurify
Write-Host "`n📍 Checking for unsafe dangerouslySetInnerHTML..."
$unsafeHtml = Get-ChildItem -Path frontend -Recurse -Include *.jsx |
              Select-String -Pattern "dangerouslySetInnerHTML" |
              Select-String -Pattern "DOMPurify" -NotMatch
if ($unsafeHtml) {
    Write-Host "⚠️ UNSAFE innerHTML found:" -ForegroundColor Red
    $unsafeHtml
}

# Run npm audit
Write-Host "`n📍 Running npm audit..."
Push-Location fashion-website-backend
npm audit --production 2>$null
Pop-Location

Push-Location frontend
npm audit --production 2>$null
Pop-Location

Write-Host "`n🔒 Security Audit Complete!" -ForegroundColor Green
```

---

#### A.4.6 Centralized Logging (Logger Utility) 🟠 MEDIUM

**Vấn đề:** Dùng `console.log` trực tiếp trong production code gây:

- Leak thông tin nhạy cảm
- Khó debug vì không có log levels
- Không có timestamps hay context

**Giải pháp:** Tạo Logger utility tập trung

```javascript
// backend/src/utils/logger.js
const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
};

const currentLevel = process.env.NODE_ENV === "production" ? LOG_LEVELS.INFO : LOG_LEVELS.DEBUG;

const formatMessage = (level, message, meta = {}) => {
  const timestamp = new Date().toISOString();
  const metaStr = Object.keys(meta).length ? ` | ${JSON.stringify(meta)}` : "";
  return `[${timestamp}] [${level}] ${message}${metaStr}`;
};

const logger = {
  debug: (message, meta) => {
    if (currentLevel <= LOG_LEVELS.DEBUG) {
      console.log(formatMessage("DEBUG", message, meta));
    }
  },
  info: (message, meta) => {
    if (currentLevel <= LOG_LEVELS.INFO) {
      console.log(formatMessage("INFO", message, meta));
    }
  },
  warn: (message, meta) => {
    if (currentLevel <= LOG_LEVELS.WARN) {
      console.warn(formatMessage("WARN", message, meta));
    }
  },
  error: (message, error) => {
    if (currentLevel <= LOG_LEVELS.ERROR) {
      const meta = error instanceof Error ? { error: error.message, stack: error.stack } : error;
      console.error(formatMessage("ERROR", message, meta));
    }
  },
  // Specialized loggers
  db: (message, meta) => console.log(formatMessage("DB", message, meta)),
  security: (eventType, details) => console.log(formatMessage("SECURITY", eventType, details)),
  email: (to, subject, body) => {
    console.log("\n📧 ========== EMAIL (Dev Mode) ==========");
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${body?.substring(0, 200)}...`);
    console.log("==========================================\n");
  },
};

export default logger;
```

**Cách sử dụng:**

```javascript
// Thay vì:
console.log("Server started on port 5000");
console.error("Database error:", error);

// Dùng:
import logger from "./utils/logger.js";

logger.info("Server started", { port: 5000 });
logger.error("Database connection failed", error);
logger.db("Connected to MongoDB successfully");
logger.security("LOGIN_ATTEMPT", { email, ip: req.ip, success: true });
```

**Files đã cập nhật:**

- `server.js` - Server startup logs
- `database.js` - Database connection logs
- `authController.js` - Auth debug logs removed
- `adminController.js` - Order status logs
- `emailService.js` - Email send logs
- `securityLogger.js` - Security event logs

---

#### A.4.7 Input Validation cho API Routes 🔴 HIGH

**Vấn đề:** Thiếu validation cho checkout và order routes có thể dẫn đến:

- Injection attacks
- Invalid data trong database
- Application crashes

**Giải pháp:** Sử dụng `express-validator` với custom rules

```javascript
// backend/src/middleware/validate.js

// Checkout validation rules
export const validateCheckoutInitialize = [
  body("items").isArray({ min: 1 }).withMessage("Items must be a non-empty array"),
  body("items.*.productId").isMongoId().withMessage("Invalid product ID"),
  body("items.*.quantity").isInt({ min: 1 }).withMessage("Quantity must be at least 1"),
  handleValidationErrors,
];

export const validateShippingAddress = [
  // 📝 Dùng firstName + lastName (khớp Order model addressSchema), KHÔNG dùng fullName
  body("shippingAddress.firstName").trim().notEmpty().withMessage("First name is required"),
  body("shippingAddress.lastName").trim().notEmpty().withMessage("Last name is required"),
  body("shippingAddress.phone")
    .matches(/^[0-9]{10,11}$/)
    .withMessage("Invalid phone number"),
  body("shippingAddress.address").trim().notEmpty().withMessage("Address is required"),
  body("shippingAddress.city").trim().notEmpty().withMessage("City is required"),
  body("shippingAddress.postalCode").trim().notEmpty().withMessage("Postal code is required"),
  handleValidationErrors,
];

export const validateCompleteCheckout = [
  body("shippingAddress").isObject().withMessage("Shipping address required"),
  body("paymentMethod")
    .isIn(["cod", "bank_transfer", "stripe", "vnpay"])
    .withMessage("Invalid payment method"),
  handleValidationErrors,
];

// Order validation rules
export const validateCreateOrder = [
  body("items").isArray({ min: 1 }).withMessage("Order must have at least one item"),
  body("shippingAddress").isObject().withMessage("Shipping address is required"),
  body("paymentMethod")
    .isIn(["cod", "bank_transfer", "stripe", "vnpay"])
    .withMessage("Invalid payment method"),
  handleValidationErrors,
];

export const validateOrderStatus = [
  body("status")
    .isIn(["pending", "confirmed", "processing", "shipped", "delivered", "cancelled", "refunded"])
    .withMessage("Invalid order status"),
  handleValidationErrors,
];

export const validateOrderReturn = [
  body("reason")
    .trim()
    .isLength({ min: 10, max: 500 })
    .withMessage("Return reason must be 10-500 characters"),
  handleValidationErrors,
];
```

**Áp dụng vào routes:**

```javascript
// checkoutRoutes.js
import {
  validateCheckoutInitialize,
  validateCompleteCheckout,
  validateCouponCode,
} from "../middleware/validate.js";

router.post(
  "/initialize",
  protect,
  validateCheckoutInitialize,
  checkoutController.initializeCheckout
);
router.post("/validate-coupon", protect, validateCouponCode, checkoutController.validateCoupon);
router.post("/complete", protect, validateCompleteCheckout, checkoutController.completeCheckout);

// orderRoutes.js
import {
  validateCreateOrder,
  validateOrderStatus,
  validateOrderReturn,
  validateObjectId,
} from "../middleware/validate.js";

router.post("/", protect, validateCreateOrder, orderController.createOrder);
router.get("/:id", protect, validateObjectId, orderController.getOrderById);
router.post(
  "/:id/return",
  protect,
  validateObjectId,
  validateOrderReturn,
  orderController.requestReturn
);
router.put(
  "/:id/status",
  protect,
  admin,
  validateObjectId,
  validateOrderStatus,
  orderController.updateOrderStatus
);
```

---

#### A.4.8 React Memory Leak Prevention 🟠 MEDIUM

**Vấn đề:** Memory leak khi component unmount nhưng async operation vẫn đang chạy

```javascript
// ❌ BAD - Gây memory leak
useEffect(() => {
  fetchData().then((data) => {
    setProducts(data); // Component có thể đã unmount!
  });
}, []);
```

**Giải pháp:** Sử dụng `isMounted` flag hoặc AbortController

```javascript
// ✅ GOOD - Với isMounted flag
useEffect(() => {
  let isMounted = true;

  const loadData = async () => {
    try {
      const data = await fetchData();
      if (isMounted) {
        setProducts(data);
        setLoading(false);
      }
    } catch (error) {
      if (isMounted) {
        setError(error.message);
      }
    }
  };

  loadData();

  return () => {
    isMounted = false;
  };
}, []);

// ✅ BETTER - Với AbortController
useEffect(() => {
  const controller = new AbortController();

  const loadData = async () => {
    try {
      const response = await fetch("/api/products", {
        signal: controller.signal,
      });
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      if (error.name !== "AbortError") {
        setError(error.message);
      }
    }
  };

  loadData();

  return () => controller.abort();
}, []);
```

**File đã fix:** `frontend/src/pages/Home.jsx`

```javascript
// Home.jsx - Fixed version
useEffect(() => {
  let isMounted = true;

  const loadHomeData = async () => {
    try {
      const [featuredRes, newArrivalsRes, categoriesRes] = await Promise.all([
        productService.getFeaturedProducts(8),
        productService.getNewArrivals(8),
        productService.getCategories(),
      ]);

      if (isMounted) {
        setFeaturedProducts(featuredRes?.data || []);
        setNewArrivals(newArrivalsRes?.data || []);
        setCategories(categoriesRes?.data || []);
        setLoading(false);
      }
    } catch (err) {
      if (isMounted) {
        setError("Failed to load content");
        setLoading(false);
      }
    }
  };

  loadHomeData();

  return () => {
    isMounted = false;
  };
}, []);
```

---

#### A.4.9 Bảng Tóm tắt Bổ sung

| Issue                    | Severity  | Files Affected         | Solution                      |
| ------------------------ | --------- | ---------------------- | ----------------------------- |
| **console.log in prod**  | 🟠 MEDIUM | 6+ backend files       | Centralized logger utility    |
| **Missing validation**   | 🔴 HIGH   | checkout, order routes | express-validator middleware  |
| **React memory leak**    | 🟠 MEDIUM | Home.jsx               | isMounted cleanup pattern     |
| **Unhandled rejections** | 🟡 LOW    | Multiple async calls   | try/catch with proper cleanup |

---

## Phụ lục B: Backup & Recovery Guide

> 🎯 **Mục tiêu**: Đảm bảo data không bao giờ mất và có thể phục hồi nhanh chóng

### B.1 Tại sao cần Backup?

```
❌ Không có backup:
   - Hardware failure → Mất tất cả data
   - Human error (delete nhầm) → Không thể undo
   - Ransomware → Phải trả tiền hoặc mất data
   - Database corruption → Mất tất cả

✅ Có backup strategy:
   - Hardware failure → Restore từ backup
   - Human error → Point-in-time recovery
   - Ransomware → Restore từ offline backup
   - Corruption → Restore từ clean backup
```

### B.2 Backup Strategy (3-2-1 Rule)

```markdown
3 copies of data:
├── 1 Production database (live data)
├── 1 Local backup (trên cùng server)
└── 1 Offsite backup (cloud storage)

2 different storage types:
├── SSD (production)
└── Object storage (S3/DigitalOcean Spaces)

1 offsite backup:
└── Different geographic location
```

### B.3 MongoDB Backup Script

```bash
#!/bin/bash
# backup-mongodb.sh

# Configuration
BACKUP_DIR="/var/backups/mongodb"
DATE=$(date +%Y%m%d_%H%M%S)
MONGO_HOST="localhost"
MONGO_PORT="27017"
MONGO_DB="fashion_db"

# Tạo thư mục backup nếu chưa có
mkdir -p $BACKUP_DIR

# Tại sao dùng mongodump?
# → Binary backup, nhanh, có thể restore point-in-time
# → Hỗ trợ backup khi database đang chạy

echo "📦 Starting MongoDB backup..."
mongodump \
    --host $MONGO_HOST \
    --port $MONGO_PORT \
    --db $MONGO_DB \
    --out $BACKUP_DIR/$DATE \
    --gzip  # Tại sao gzip? Giảm 70-90% dung lượng

# Kiểm tra backup thành công
if [ $? -eq 0 ]; then
    echo "✅ Backup successful: $BACKUP_DIR/$DATE"

    # Tại sao upload offsite?
    # → Server chết thì backup vẫn còn
    echo "☁️ Uploading to cloud storage..."
    aws s3 cp $BACKUP_DIR/$DATE s3://your-bucket/backups/$DATE --recursive

    # Xóa backup cũ hơn 7 ngày (local)
    # Tại sao? Tiết kiệm disk space
    find $BACKUP_DIR -type d -mtime +7 -exec rm -rf {} \;

    echo "🗑️ Cleaned up old backups"
else
    echo "❌ Backup failed!"
    # Gửi alert
    curl -X POST "https://hooks.slack.com/your-webhook" \
         -H "Content-Type: application/json" \
         -d '{"text":"⚠️ MongoDB backup FAILED!"}'
    exit 1
fi

# Log backup
echo "$DATE - Backup completed" >> $BACKUP_DIR/backup.log
```

### B.4 Thiết lập Cron Job

```bash
# Chạy backup hàng ngày lúc 2:00 AM
# Tại sao 2AM? Traffic thấp, impact ít nhất

# Edit crontab
crontab -e

# Thêm dòng này:
0 2 * * * /opt/scripts/backup-mongodb.sh >> /var/log/backup.log 2>&1

# Giải thích cron expression:
# ┌─────── minute (0)
# │ ┌───── hour (2 = 2AM)
# │ │ ┌─── day of month (*)
# │ │ │ ┌─ month (*)
# │ │ │ │ ┌ day of week (*)
# 0 2 * * *
```

### B.5 Restore từ Backup

```bash
#!/bin/bash
# restore-mongodb.sh

BACKUP_PATH=$1  # Đường dẫn đến backup
MONGO_DB="fashion_db"

if [ -z "$BACKUP_PATH" ]; then
    echo "Usage: ./restore-mongodb.sh <backup_path>"
    exit 1
fi

echo "⚠️ WARNING: This will REPLACE all data in $MONGO_DB"
read -p "Are you sure? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo "Cancelled."
    exit 0
fi

echo "🔄 Restoring from $BACKUP_PATH..."

# Tại sao --drop? Xóa data cũ trước khi restore
mongorestore \
    --db $MONGO_DB \
    --drop \
    --gzip \
    $BACKUP_PATH/$MONGO_DB

if [ $? -eq 0 ]; then
    echo "✅ Restore successful!"
else
    echo "❌ Restore failed!"
    exit 1
fi
```

### B.6 Code Backup (Git)

```bash
# Tại sao cần backup code riêng?
# → Git history có thể bị corrupt
# → GitHub có thể down
# → Account có thể bị lock

# Backup Git repository định kỳ
git clone --mirror git@github.com:user/fashion-website.git
tar -czf fashion-website-$(date +%Y%m%d).tar.gz fashion-website.git
# Upload to backup storage
```

---

## Phụ lục C: Debugging & Troubleshooting Guide

> 🎯 **Mục tiêu**: Giải quyết bugs nhanh chóng và có hệ thống

### C.1 Debugging Mindset

```
🎯 Quy trình Debug 5 bước:

1. REPRODUCE - Tái hiện bug
   → Nếu không reproduce được, không thể fix

2. ISOLATE - Cô lập vấn đề
   → Frontend hay Backend? Network? Database?

3. IDENTIFY - Xác định root cause
   → Không fix symptoms, fix root cause

4. FIX - Sửa lỗi
   → Minimal change, không break other things

5. VERIFY - Kiểm tra fix
   → Test case ban đầu + regression test
```

### C.2 Common Errors & Solutions

#### Frontend Errors

```javascript
// ❌ Error: "Cannot read property 'X' of undefined"
// Nguyên nhân: Truy cập property của object null/undefined
// Fix:
const name = user?.name || "Guest"; // Optional chaining + fallback

// ❌ Error: "Too many re-renders"
// Nguyên nhân: Infinite loop trong useEffect
// Kiểm tra:
useEffect(() => {
  // ❌ Sai: setState không có dependency → infinite loop
  setData(data);
}, []); // Thêm [] hoặc đúng dependencies

// ❌ Error: "Objects are not valid as React child"
// Nguyên nhân: Render object thay vì string
// Fix:
{
  JSON.stringify(object);
} // Hoặc access specific property

// ❌ Error: Network Error / CORS
// Nguyên nhân: Backend chưa config CORS đúng
// Kiểm tra:
// 1. Backend có cors middleware?
// 2. Origin có trong whitelist?
// 3. Credentials: true ở cả 2 phía?
```

#### Backend Errors

```javascript
// ❌ Error: "MongooseServerSelectionError"
// Nguyên nhân: Không kết nối được MongoDB
// Kiểm tra:
// 1. MongoDB đang chạy? → systemctl status mongod
// 2. Connection string đúng?
// 3. Network/firewall cho phép?

// ❌ Error: "jwt malformed"
// Nguyên nhân: Token không hợp lệ
// Kiểm tra:
// 1. Token có "Bearer " prefix không?
// 2. Token có expire không?
// 3. Secret key có khớp không?

// ❌ Error: "EADDRINUSE"
// Nguyên nhân: Port đang được sử dụng
// Fix:
// Linux: lsof -i :5000 → kill process
// Windows: netstat -ano | findstr :5000

// ❌ Error: "PayloadTooLargeError"
// Nguyên nhân: Request body > limit
// Fix: Tăng limit trong express.json()
app.use(express.json({ limit: "10mb" }));
```

### C.3 Debugging Tools

```javascript
// 1. Console methods (không chỉ console.log!)
console.log("Basic output");
console.error("Error with red color");
console.warn("Warning with yellow");
console.table([{ a: 1 }, { a: 2 }]); // Table format
console.time("Timer");
// ... code
console.timeEnd("Timer"); // Đo thời gian execution
console.trace(); // Stack trace
console.group("Group");
console.log("Nested");
console.groupEnd();

// 2. Debugger statement
function complexFunction(data) {
  debugger; // Browser sẽ pause ở đây
  // ... code
}

// 3. React DevTools
// Install extension, xem component tree, state, props

// 4. Network tab
// Kiểm tra requests, responses, timing, headers
```

### C.4 Debug Checklist

```markdown
## Khi gặp bug, kiểm tra theo thứ tự:

### Frontend Issues

- [ ] Console có error không?
- [ ] Network tab: request có gửi không?
- [ ] Request payload đúng không?
- [ ] Response status code?
- [ ] Response data đúng format?
- [ ] State/props có update không? (React DevTools)

### Backend Issues

- [ ] Server có chạy không?
- [ ] Request có tới server không? (check logs)
- [ ] Route có match không?
- [ ] Middleware có block không?
- [ ] Database query có lỗi không?
- [ ] Response có gửi đúng không?

### Database Issues

- [ ] MongoDB có chạy không?
- [ ] Connection string đúng?
- [ ] Collection/document tồn tại?
- [ ] Query syntax đúng?
- [ ] Index có cho slow queries?

### Deployment Issues

- [ ] Environment variables set đúng?
- [ ] Port có conflict không?
- [ ] SSL certificate hợp lệ?
- [ ] Nginx config đúng?
- [ ] Firewall rules?
```

### C.5 Logging Best Practices

```javascript
// fashion-website-backend/src/utils/logger.js

const winston = require("winston");

// Tại sao dùng Winston?
// → Multiple transports (console, file, cloud)
// → Log levels (error, warn, info, debug)
// → Structured logging (JSON format)

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    // Console cho development
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
    }),
    // File cho production
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "logs/combined.log",
    }),
  ],
});

// Sử dụng:
logger.info("User logged in", { userId: user._id, ip: req.ip });
logger.error("Payment failed", { orderId, error: err.message });
logger.warn("Rate limit approaching", { ip: req.ip, count: 80 });

module.exports = logger;
```

---

## Phụ lục D: Quick Reference Cheatsheet

### D.1 Git Commands

```bash
# Daily workflow
git status                    # Xem changes
git add .                     # Stage all
git commit -m "feat: add X"   # Commit
git push origin main          # Push

# Branching
git checkout -b feature/name  # Create & switch branch
git merge feature/name        # Merge vào current branch
git branch -d feature/name    # Delete branch

# Undo mistakes
git checkout -- file.js       # Discard local changes
git reset HEAD~1              # Undo last commit (keep changes)
git reset --hard HEAD~1       # Undo last commit (discard changes)
git stash                     # Save changes temporarily
git stash pop                 # Restore stashed changes
```

### D.2 npm Commands

```bash
# Basics
npm install                   # Install dependencies
npm install package           # Add dependency
npm install -D package        # Add dev dependency
npm uninstall package         # Remove package
npm update                    # Update all packages

# Scripts
npm run dev                   # Development mode
npm run build                 # Production build
npm run start                 # Start production
npm run lint                  # Run linter
npm run test                  # Run tests

# Maintenance
npm audit                     # Check vulnerabilities
npm audit fix                 # Auto-fix vulnerabilities
npm outdated                  # Check outdated packages
npm cache clean --force       # Clear npm cache
```

### D.3 MongoDB Commands

```bash
# Mongo shell
mongosh                       # Connect to local
mongosh "mongodb://host/db"   # Connect to remote

# Basic operations
show dbs                      # List databases
use fashion_db                # Switch database
show collections              # List collections

# CRUD
db.products.find()            # Find all
db.products.find({price: {$gt: 100}})  # Find with filter
db.products.insertOne({...})  # Insert one
db.products.updateOne({_id}, {$set: {...}})  # Update one
db.products.deleteOne({_id})  # Delete one

# Indexes
db.products.createIndex({name: 1})     # Create index
db.products.getIndexes()               # List indexes
db.products.dropIndex("name_1")        # Drop index
```

### D.4 Linux Server Commands

```bash
# Process management
pm2 start server.js          # Start with PM2
pm2 restart app              # Restart app
pm2 stop app                 # Stop app
pm2 logs                     # View logs
pm2 monit                    # Monitor resources

# Nginx
sudo nginx -t                # Test config
sudo systemctl reload nginx  # Reload config
sudo systemctl restart nginx # Restart nginx

# System
htop                         # System monitor
df -h                        # Disk usage
free -m                      # Memory usage
netstat -tulpn               # Open ports

# Logs
tail -f /var/log/nginx/access.log   # Live nginx logs
tail -100 logs/error.log            # Last 100 lines
journalctl -u nginx -f              # Systemd logs
```

---

## Phụ lục E: Code Changes Log (BỔ SUNG MỚI) ⭐

> 📅 **Cập nhật:** 2025-01-10
> 🎯 **Mục đích:** Ghi chú tất cả các thay đổi code trong quá trình phát triển dự án

---

### E.1 Automated API Test Suite

**📁 File mới:** `fashion-website-backend/tests/api-test.js`

| Thông tin    | Chi tiết                                  |
| ------------ | ----------------------------------------- |
| **Ngày tạo** | 2025-01-10                                |
| **Mục đích** | Kiểm thử tự động 65 API endpoints         |
| **Lợi ích**  | Phát hiện lỗi sớm, đảm bảo tính nhất quán |

**Tính năng:**

- ✅ 65 test cases cover tất cả modules
- ✅ Chạy bằng lệnh `node tests/api-test.js`
- ✅ Xuất báo cáo JSON tự động
- ✅ Console output có màu sắc dễ đọc

---

### E.2 API Design Observations (Phát hiện từ Testing)

> ⚠️ **Những pattern quan trọng cần biết khi làm việc với API:**

#### E.2.1 Sort Parameter Format

**📁 File liên quan:** `backend/src/controllers/productController.js`

```javascript
// ✅ ĐÚNG: Dùng format hyphenated
const sortOptions = {
  "price-asc": "price",
  "price-desc": "-price",
  newest: "-createdAt",
  oldest: "createdAt",
  "name-asc": "name",
  "name-desc": "-name",
  rating: "-ratings.average",
  popular: "-numReviews",
};

// Gọi API như sau:
// GET /api/products?sort=price-asc  ✅
// GET /api/products?sort=price&order=asc  ❌ KHÔNG ĐÚNG
```

**💡 Lý do:** Đơn giản hóa query string, dễ validate và parse.

---

#### E.2.2 Product Data Structure

**📁 File liên quan:** `backend/src/models/Product.js`

```javascript
// ✅ Cấu trúc sizes - PHẢI dùng object với name là enum
sizes: [
  {
    name: {
      type: String,
      required: true,
      enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "One Size"],
    },
    stock: {
      type: Number,
      default: 0,
      min: 0,
    },
    sku: String,
  },
],

// ✅ Cấu trúc colors - Có hexCode để hiển thị màu
colors: [
  {
    name: {
      type: String,
      required: true,
    },
    hexCode: {
      type: String,
      match: [/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Invalid hex color code"],
    },
    stock: {
      type: Number,
      default: 0,
      min: 0,
    },
    images: [String],
  },
],

// ✅ Cấu trúc images - Có isPrimary để xác định ảnh chính
images: [
  {
    url: {
      type: String,
      required: true,
    },
    alt: String,
    isPrimary: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
],
```

**💡 Khi tạo Product từ API:**

```javascript
// ✅ Request body đúng format
const newProduct = {
  name: "Test Product",
  description: "Product description...",
  price: 99.99,
  category: "men", // enum: women, men, kids, accessories, shoes, bags
  stock: 100,
  sizes: [
    { name: "S", stock: 30 },
    { name: "M", stock: 40 },
    { name: "L", stock: 30 },
  ],
  colors: [
    { name: "Black", hexCode: "#000000", stock: 50 },
    { name: "White", hexCode: "#FFFFFF", stock: 50 },
  ],
  images: [{ url: "https://example.com/image.jpg", alt: "Product image", isPrimary: true }],
};
```

---

#### E.2.3 User Role Assignment

**📁 File liên quan:** `backend/src/models/User.js`

```javascript
// Khi người dùng đăng ký, role mặc định là "user"
role: {
  type: String,
  enum: ["user", "admin"],
  default: "user",  // ← Mặc định khi register
},
```

| Hành động          | Role được gán                    |
| ------------------ | -------------------------------- |
| Register (đăng ký) | `user` (mặc định)                |
| Login (đăng nhập)  | Giữ nguyên role trong DB         |
| Nâng cấp admin     | Phải cập nhật trực tiếp trong DB |

---

#### E.2.4 Rate Limiting trên Auth Endpoints

**📁 File liên quan:** `backend/src/config/security.js`

```javascript
// Các endpoint nhạy cảm có rate limiting
// Có thể trả về status 429 Too Many Requests

// Khi viết test, cần xử lý case này:
return {
  passed: [400, 404, 429].includes(res.status),
  expected: "Status 400, 404 or 429 (rate limited)",
  actual: `Status ${res.status}`,
};
```

**Endpoints bị rate limit:**

- `POST /api/auth/forgot-password`
- `POST /api/auth/reset-password/:token`
- `POST /api/auth/login` (sau nhiều lần sai)

---

#### E.2.5 Guest Cart với Session Header

**📁 File liên quan:** `backend/src/controllers/cartController.js`

```javascript
// Helper: Get or create cart for user or guest
const getOrCreateCart = async (req) => {
  // Nếu user đăng nhập, dùng user cart
  if (req.user) {
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      cart = new Cart({ user: req.user.id, items: [] });
    }
    return cart;
  }

  // Cho guest, dùng sessionId từ header hoặc body
  const sessionId = req.headers["x-cart-session"] || req.body.sessionId;
  if (!sessionId) {
    return null; // ← Trả về null nếu không có session
  }

  let cart = await Cart.findOne({ sessionId });
  if (!cart) {
    cart = new Cart({ sessionId, items: [] });
  }
  return cart;
};
```

**💡 Khi gọi Cart API cho guest:**

```javascript
// Frontend cần gửi header x-cart-session
const response = await fetch("/api/cart", {
  headers: {
    "x-cart-session": "guest_" + sessionId,
  },
});
```

---

### E.3 Test Suite Files Created

| File                         | Mục đích                | Kích thước     |
| ---------------------------- | ----------------------- | -------------- |
| `tests/api-test.js`          | Script kiểm thử tự động | ~1400 lines    |
| `tests/api-test-report.json` | Báo cáo JSON            | Auto-generated |
| `tests/API_TEST_REPORT.md`   | Báo cáo Markdown        | Auto-generated |

---

### E.4 Danh sách API Endpoints đã test

```
✅ Health Check (3 tests)
   GET /api/health
   GET /api
   GET /api/invalid-route (404)

✅ Authentication (14 tests)
   POST /api/auth/register
   POST /api/auth/login
   GET /api/auth/me
   POST /api/auth/refresh-token
   POST /api/auth/forgot-password
   POST /api/auth/reset-password/:token
   POST /api/auth/logout

✅ Products (14 tests)
   GET /api/products
   GET /api/products?search=...
   GET /api/products?category=...
   GET /api/products?minPrice=...&maxPrice=...
   GET /api/products?sort=price-asc
   GET /api/products/:id
   GET /api/products/featured
   GET /api/products/new-arrivals
   GET /api/products/sale
   GET /api/products/categories
   GET /api/products/:id/related
   POST /api/products (Admin)

✅ Cart (8 tests)
   GET /api/cart
   POST /api/cart/items
   POST /api/cart/coupon
   GET /api/cart/validate
   DELETE /api/cart

✅ Wishlist (7 tests)
   GET /api/wishlist
   POST /api/wishlist/:productId
   GET /api/wishlist/check/:productId
   POST /api/wishlist/:productId/toggle
   DELETE /api/wishlist/:productId
   DELETE /api/wishlist

✅ Checkout (6 tests)
   POST /api/checkout/initialize
   GET /api/checkout/shipping-rates
   POST /api/checkout/calculate-tax
   POST /api/checkout/validate-coupon
   POST /api/checkout/complete

✅ Orders (5 tests)
   GET /api/orders
   GET /api/orders/:id
   GET /api/orders/track/:orderNumber
   GET /api/orders/all (Admin)

✅ Profile (7 tests)
   GET /api/profile
   PUT /api/profile
   PUT /api/profile/password
```

---

## Phụ lục F: Các Tính Năng Nâng Cao Đã Implement ⭐ **MỚI**

### F.1 Tổng Quan Các Tính Năng Mới

Sau khi hoàn thành phần cơ bản, hệ thống đã được bổ sung thêm các tính năng sau:

| Module               | Mô tả                              | Status  |
| -------------------- | ---------------------------------- | ------- |
| Reviews & Ratings    | Đánh giá sản phẩm, vote helpful    | ✅ Done |
| Coupon System        | Mã giảm giá với các điều kiện      | ✅ Done |
| Payment Integration  | COD, Bank Transfer, Stripe, VNPay  | ✅ Done |
| Admin Dashboard      | Thống kê, quản lý đơn hàng         | ✅ Done |
| Inventory Management | Quản lý tồn kho, cảnh báo hết hàng | ✅ Done |
| Email Notifications  | Email xác nhận thanh toán, refund  | ✅ Done |

---

### F.2 Review & Rating System

#### F.2.1 Review Model

**📁 File:** `backend/src/models/Review.js`

```javascript
const reviewSchema = new mongoose.Schema({
  product: { type: ObjectId, ref: "Product", required: true, index: true },
  user: { type: ObjectId, ref: "User", required: true, index: true },
  order: { type: ObjectId, ref: "Order" },
  rating: { type: Number, required: true, min: 1, max: 5 },
  title: { type: String, maxlength: 100 },
  comment: { type: String, required: true, maxlength: 2000 },
  images: [{ url: { type: String, required: true }, alt: String }],
  sizePurchased: String,
  colorPurchased: String,
  fit: { type: String, enum: ["runs_small", "true_to_size", "runs_large"] },
  isVerifiedPurchase: { type: Boolean, default: false },
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  helpfulVotes: { type: Number, default: 0, min: 0 }, // Count (Number, NOT array)
  helpfulVoters: [{ type: ObjectId, ref: "User" }], // Array of user IDs
  adminReply: { comment: String, repliedAt: Date, repliedBy: ObjectId }, // NOT "content"
  rejectionReason: String,
});
```

**Các tính năng:**

- 1-5 star rating
- Verified purchase badge (kiểm tra đã mua sản phẩm)
- Helpful votes (vote hữu ích)
- Admin moderation (approve/reject)
- Admin reply
- Auto-calculate product average rating

#### F.2.2 Review API Endpoints

```
# Public
GET /api/reviews/product/:productId     # Lấy reviews của sản phẩm

# User (cần đăng nhập)
POST /api/reviews/product/:productId    # Tạo review
PUT /api/reviews/:reviewId              # Sửa review
DELETE /api/reviews/:reviewId           # Xóa review
POST /api/reviews/:reviewId/helpful     # Vote helpful
GET /api/reviews/my-reviews             # Reviews của tôi
GET /api/reviews/can-review/:productId  # Kiểm tra có thể review không

# Admin
GET /api/reviews/admin/all              # Tất cả reviews
PUT /api/reviews/admin/:reviewId/approve
PUT /api/reviews/admin/:reviewId/reject
POST /api/reviews/admin/:reviewId/reply
```

---

### F.3 Coupon System

#### F.3.1 Coupon Model

**📁 File:** `backend/src/models/Coupon.js`

```javascript
const couponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true, uppercase: true },
  description: { type: String, required: true },
  discountType: { type: String, enum: ["percentage", "fixed"], required: true },
  discountValue: { type: Number, required: true },
  minOrderValue: { type: Number, default: 0 },
  maxDiscount: { type: Number }, // Giới hạn cho percentage
  currency: { type: String, default: "USD", enum: ["USD", "EUR", "GBP", "VND"] },
  validFrom: { type: Date, required: true, default: Date.now },
  validUntil: { type: Date, required: true },
  usageLimit: { type: Number, default: null }, // null = unlimited
  usageLimitPerUser: { type: Number, default: 1 },
  usedCount: { type: Number, default: 0 },
  usedBy: [{ user: ObjectId, usedAt: Date, orderId: ObjectId }],
  applicableCategories: [
    { type: String, enum: ["women", "men", "kids", "accessories", "shoes", "bags"] },
  ],
  applicableProducts: [ObjectId],
  excludedProducts: [ObjectId],
  firstOrderOnly: { type: Boolean, default: false },
  minItems: { type: Number, default: 1 },
  isActive: { type: Boolean, default: true },
  createdBy: { type: ObjectId, ref: "User" },
});
```

**Các phương thức:**

- `canBeUsedBy(userId, cartTotal, cartItems, isFirstOrder)` - Kiểm tra user có thể dùng coupon không
- `calculateDiscount(cartTotal, applicableItemsTotal)` - Tính số tiền được giảm
- `recordUsage(userId, orderId)` - Ghi nhận lượt sử dụng

**Static method:**

- `Coupon.findValidCoupon(code)` - Tìm coupon hợp lệ theo code

#### F.3.2 Coupon API Endpoints

```
# User
POST /api/coupons/validate     # Validate coupon với cartTotal
GET /api/coupons/available     # Danh sách coupon có thể dùng

# Admin
POST /api/coupons              # Tạo coupon
GET /api/coupons               # Danh sách tất cả coupons
GET /api/coupons/:id           # Chi tiết coupon
PUT /api/coupons/:id           # Cập nhật coupon
DELETE /api/coupons/:id        # Xóa coupon
PUT /api/coupons/:id/toggle    # Bật/tắt coupon
GET /api/coupons/:id/stats     # Thống kê sử dụng
```

---

### F.4 Payment Integration

#### F.4.1 Payment Controller

**📁 File:** `backend/src/controllers/paymentController.js`

**Các phương thức thanh toán hỗ trợ:**

| Method        | Status  | Mô tả                           |
| ------------- | ------- | ------------------------------- |
| COD           | ✅ Full | Thanh toán khi nhận hàng        |
| Bank Transfer | ✅ Full | Chuyển khoản ngân hàng          |
| Stripe        | 🔶 Mock | Credit/Debit card (cần API key) |
| VNPay         | 🔶 Mock | VNPay gateway (cần credentials) |

#### F.4.2 Payment API Endpoints

```
# Public
GET /api/payments/methods              # Danh sách phương thức

# User
POST /api/payments/stripe/intent       # Tạo Stripe PaymentIntent
POST /api/payments/stripe/confirm      # Xác nhận thanh toán Stripe
POST /api/payments/cod                 # Thanh toán COD
POST /api/payments/bank-transfer       # Chuyển khoản
POST /api/payments/vnpay/create        # Tạo VNPay payment
GET /api/payments/vnpay/callback       # VNPay callback
GET /api/payments/:orderId/status      # Trạng thái thanh toán
POST /api/payments/:orderId/refund     # Yêu cầu hoàn tiền

# Admin
PUT /api/payments/admin/:orderId/verify-transfer  # Xác nhận chuyển khoản
PUT /api/payments/admin/:orderId/process-refund   # Xử lý hoàn tiền
```

#### F.4.3 Bank Transfer Flow

```
1. User chọn Bank Transfer → POST /api/payments/bank-transfer
2. System tạo transfer reference (FAS + timestamp + orderNumber)
3. Gửi email hướng dẫn chuyển khoản với thông tin ngân hàng
4. User chuyển khoản với nội dung = transfer reference
5. Admin verify → PUT /api/payments/admin/:orderId/verify-transfer
6. System cập nhật paymentStatus = "completed"
7. Gửi email xác nhận thanh toán thành công
```

---

### F.5 Admin Dashboard

#### F.5.1 Dashboard Overview API

**📁 File:** `backend/src/controllers/adminController.js`

```javascript
// GET /api/admin/dashboard
{
  success: true,
  data: {
    orders: {
      total: 1250,
      today: 15,
      thisMonth: 320,
      lastMonth: 280,
      growth: "14.3%"
    },
    revenue: {
      total: 2500000000,
      thisMonth: 450000000,
      lastMonth: 380000000,
      growth: "18.4%"
    },
    products: {
      total: 450,
      lowStock: 23,
      outOfStock: 5
    },
    users: {
      total: 5600,
      newThisMonth: 120
    },
    pendingReviews: 15,
    activeCoupons: 8
  }
}
```

#### F.5.2 Admin API Endpoints

```
# Dashboard
GET /api/admin/dashboard           # Tổng quan
GET /api/admin/revenue-stats       # Doanh thu theo thời gian
GET /api/admin/top-products        # Top sản phẩm bán chạy
GET /api/admin/recent-orders       # Đơn hàng gần đây
GET /api/admin/category-stats      # Thống kê theo danh mục
GET /api/admin/user-stats          # Thống kê người dùng
GET /api/admin/low-stock           # Sản phẩm sắp hết hàng

# Order Management
GET /api/admin/orders              # Danh sách đơn hàng (filter, paginate)
PUT /api/admin/orders/:id/status   # Cập nhật trạng thái đơn hàng

# User Management
GET /api/admin/users               # Danh sách users (filter, paginate)
PUT /api/admin/users/:id/role      # Cập nhật role user

# Inventory
PUT /api/admin/products/:id/stock  # Cập nhật tồn kho
```

---

### F.6 Inventory Management

#### F.6.1 Inventory Controller

**📁 File:** `backend/src/controllers/inventoryController.js`

**Các tính năng:**

- Low stock alerts (cảnh báo hết hàng)
- Bulk stock update (cập nhật hàng loạt)
- Stock adjustment (điều chỉnh tăng/giảm)
- Stock history tracking (lịch sử thay đổi)
- Inventory reports (báo cáo tồn kho)
- Email alerts (gửi cảnh báo qua email)

#### F.6.2 Inventory API Endpoints

```
# Admin only
GET /api/inventory/alerts          # Danh sách cảnh báo tồn kho
GET /api/inventory/report          # Báo cáo tồn kho theo category
PUT /api/inventory/bulk-update     # Cập nhật tồn kho hàng loạt
PUT /api/inventory/:productId/adjust   # Điều chỉnh +/- tồn kho
GET /api/inventory/:productId/history  # Lịch sử thay đổi
POST /api/inventory/send-alerts    # Gửi email cảnh báo
```

#### F.6.3 Inventory Report Structure

```javascript
// GET /api/inventory/report
{
  success: true,
  data: {
    summary: {
      totalProducts: 450,
      totalStock: 12500,
      totalValue: 2500000000,
      outOfStock: 5,
      lowStock: 23
    },
    byCategory: [
      {
        category: "Áo",
        totalProducts: 120,
        avgPrice: 450000,
        totalStock: 3500,
        avgRating: 4.2
      },
      // ...
    ],
    generatedAt: "2024-01-15T10:30:00.000Z"
  }
}
```

---

### F.7 Email Notifications

#### F.7.1 Các Template Email Mới

**📁 File:** `backend/src/utils/emailService.js`

| Function                       | Mục đích                |
| ------------------------------ | ----------------------- |
| `sendPaymentConfirmationEmail` | Xác nhận thanh toán     |
| `sendBankTransferEmail`        | Hướng dẫn chuyển khoản  |
| `sendOrderStatusEmail`         | Cập nhật trạng thái đơn |
| `sendRefundEmail`              | Thông báo hoàn tiền     |

#### F.7.2 Email Template Structure

Tất cả email templates đều có:

- Header với logo Fashion Store (background #1a1a1a)
- Content section với thông tin chi tiết
- CTA button (màu #c9a962)
- Footer với copyright

---

### F.8 Files Đã Tạo/Cập Nhật

#### Các file MỚI:

| File                                     | Mô tả                      |
| ---------------------------------------- | -------------------------- |
| `src/models/Review.js`                   | Review Model               |
| `src/models/Coupon.js`                   | Coupon Model               |
| `src/controllers/reviewController.js`    | Review Controller          |
| `src/controllers/couponController.js`    | Coupon Controller          |
| `src/controllers/paymentController.js`   | Payment Controller         |
| `src/controllers/adminController.js`     | Admin Dashboard Controller |
| `src/controllers/inventoryController.js` | Inventory Controller       |
| `src/routes/reviewRoutes.js`             | Review Routes              |
| `src/routes/couponRoutes.js`             | Coupon Routes              |
| `src/routes/paymentRoutes.js`            | Payment Routes             |
| `src/routes/adminRoutes.js`              | Admin Routes               |
| `src/routes/inventoryRoutes.js`          | Inventory Routes           |
| `NEW_FEATURES_TEST.md`                   | Test documentation         |

#### Các file ĐÃ CẬP NHẬT:

| File                        | Thay đổi                 |
| --------------------------- | ------------------------ |
| `src/routes/index.js`       | Thêm các routes mới      |
| `src/utils/emailService.js` | Thêm email templates mới |

---

### F.9 Tổng Số API Endpoints

Sau khi bổ sung, hệ thống có tổng cộng:

| Module    | Public | User   | Admin  | Total  |
| --------- | ------ | ------ | ------ | ------ |
| Auth      | 2      | 5      | 0      | 7      |
| Products  | 8      | 0      | 2      | 10     |
| Cart      | 0      | 6      | 0      | 6      |
| Wishlist  | 0      | 6      | 0      | 6      |
| Checkout  | 0      | 5      | 0      | 5      |
| Orders    | 0      | 3      | 1      | 4      |
| Profile   | 0      | 4      | 0      | 4      |
| Reviews   | 1      | 6      | 4      | 11     |
| Coupons   | 0      | 2      | 7      | 9      |
| Payments  | 1      | 7      | 2      | 10     |
| Admin     | 0      | 0      | 12     | 12     |
| Inventory | 0      | 0      | 6      | 6      |
| **TOTAL** | **12** | **44** | **34** | **90** |

---

> 💡 **Lời kết**: Giáo án này cung cấp kiến thức fullstack từ cơ bản đến production-ready. Hãy học theo thứ tự, làm từng bước, và đừng skip phần nào. Mỗi concept đều quan trọng và liên kết với nhau.
>
> **Các tính năng đã implement:**
>
> ✅ Review & Rating System với verified purchase  
> ✅ Coupon System với nhiều điều kiện  
> ✅ Payment Integration (COD, Bank Transfer, Stripe mock, VNPay mock)  
> ✅ Admin Dashboard với thống kê real-time  
> ✅ Inventory Management với cảnh báo tồn kho  
> ✅ Email Notifications cho mọi hoạt động
>
> **Tiếp theo có thể thêm:**
>
> 1. Real-time notifications với Socket.io
> 2. Multi-language support (i18n)
> 3. Redis caching cho performance
> 4. Integrate Stripe/VNPay thật với API keys
>
> Good luck! 🚀

---

## Phụ lục G: Source Code Đầy Đủ ⭐ **MỚI**

> 📅 **Cập nhật:** 2026-02-02  
> 🎯 **Mục đích:** Tổng hợp toàn bộ source code đã chỉnh sửa/thêm mới trong quá trình phát triển

---

### G.1 Backend - Models

#### G.1.1 Review Model

**📁 File:** `backend/src/models/Review.js`  
**📝 Mô tả:** Model cho hệ thống đánh giá sản phẩm với verified purchase, helpful votes, admin moderation

```javascript
import mongoose from "mongoose";

/**
 * Review Model
 * Cho phép khách hàng đánh giá sản phẩm
 *
 * Features:
 * - Rating 1-5 sao
 * - Comment text
 * - Images đính kèm
 * - Verified purchase badge
 * - Helpful votes
 * - Admin reply
 */

const reviewSchema = new mongoose.Schema(
  {
    // Reference to Product
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "Product is required"],
      index: true,
    },

    // Reference to User
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
      index: true,
    },

    // Order reference (to verify purchase)
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },

    // Rating (1-5 stars)
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot exceed 5"],
    },

    // Review title
    title: {
      type: String,
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },

    // Review comment
    comment: {
      type: String,
      required: [true, "Review comment is required"],
      trim: true,
      maxlength: [2000, "Comment cannot exceed 2000 characters"],
    },

    // Review images
    images: [
      {
        url: { type: String, required: true },
        alt: String,
      },
    ],

    // Size & Color purchased (for context)
    sizePurchased: { type: String },
    colorPurchased: { type: String },

    // Fit feedback
    fit: {
      type: String,
      enum: ["runs_small", "true_to_size", "runs_large"],
    },

    // Verified purchase (user bought this product)
    isVerifiedPurchase: {
      type: Boolean,
      default: false,
    },

    // Review status
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    // Helpful votes
    helpfulVotes: { type: Number, default: 0, min: 0 },
    helpfulVoters: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    // Admin reply
    adminReply: {
      comment: String,
      repliedAt: Date,
      repliedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },

    // Rejection reason
    rejectionReason: { type: String },
  },
  { timestamps: true }
);

// Compound index: Một user chỉ review một product một lần
reviewSchema.index({ product: 1, user: 1 }, { unique: true });
reviewSchema.index({ status: 1, createdAt: -1 });
reviewSchema.index({ rating: 1 });

// Static method: Tính average rating cho product
reviewSchema.statics.calculateAverageRating = async function (productId) {
  const stats = await this.aggregate([
    { $match: { product: productId, status: "approved" } },
    {
      $group: {
        _id: "$product",
        averageRating: { $avg: "$rating" },
        numReviews: { $sum: 1 },
        ratingDistribution: { $push: "$rating" },
      },
    },
  ]);

  if (stats.length > 0) {
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    stats[0].ratingDistribution.forEach((rating) => {
      distribution[rating]++;
    });

    await mongoose.model("Product").findByIdAndUpdate(productId, {
      "ratings.average": Math.round(stats[0].averageRating * 10) / 10,
      "ratings.count": stats[0].numReviews,
      "ratings.distribution": distribution,
    });
  } else {
    await mongoose.model("Product").findByIdAndUpdate(productId, {
      "ratings.average": 0,
      "ratings.count": 0,
      "ratings.distribution": { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    });
  }
};

// Post save/remove hooks
reviewSchema.post("save", async function () {
  if (this.status === "approved") {
    await this.constructor.calculateAverageRating(this.product);
  }
});

reviewSchema.post("remove", async function () {
  await this.constructor.calculateAverageRating(this.product);
});

reviewSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await doc.constructor.calculateAverageRating(doc.product);
  }
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;
```

---

#### G.1.2 Coupon Model

**📁 File:** `backend/src/models/Coupon.js`  
**📝 Mô tả:** Model mã giảm giá với percentage/fixed discount, usage limits, date range, category restrictions

```javascript
import mongoose from "mongoose";

/**
 * Coupon Model - Quản lý mã giảm giá
 */

const couponSchema = new mongoose.Schema(
  {
    // Coupon code (unique, uppercase)
    code: {
      type: String,
      required: [true, "Coupon code is required"],
      unique: true,
      uppercase: true,
      trim: true,
      maxlength: [20, "Coupon code cannot exceed 20 characters"],
      match: [/^[A-Z0-9]+$/, "Coupon code can only contain letters and numbers"],
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: [200, "Description cannot exceed 200 characters"],
    },

    // Discount type & value
    discountType: {
      type: String,
      required: true,
      enum: ["percentage", "fixed"],
      default: "percentage",
    },
    discountValue: {
      type: Number,
      required: [true, "Discount value is required"],
      min: [0, "Discount value cannot be negative"],
    },
    maxDiscount: { type: Number, min: [0, "Max discount cannot be negative"] },
    minOrderValue: { type: Number, default: 0, min: [0, "Min order value cannot be negative"] },

    // Validity period
    validFrom: { type: Date, required: true, default: Date.now },
    validUntil: { type: Date, required: true },

    // Usage limits
    usageLimit: { type: Number, default: null, min: [1, "Usage limit must be at least 1"] },
    usageLimitPerUser: { type: Number, default: 1, min: 1 },
    usedCount: { type: Number, default: 0, min: 0 },

    // Users who used this coupon
    usedBy: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        usedAt: { type: Date, default: Date.now },
        orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
      },
    ],

    // Restrictions
    applicableProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    applicableCategories: [
      { type: String, enum: ["women", "men", "kids", "accessories", "shoes", "bags"] },
    ],
    excludedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    firstOrderOnly: { type: Boolean, default: false },
    minItems: { type: Number, default: 1, min: 1 },

    // Status
    isActive: { type: Boolean, default: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

// Indexes
couponSchema.index({ code: 1 });
couponSchema.index({ isActive: 1, validFrom: 1, validUntil: 1 });

// Virtual: Check if coupon is valid
couponSchema.virtual("isValid").get(function () {
  const now = new Date();
  return (
    this.isActive &&
    now >= this.validFrom &&
    now <= this.validUntil &&
    (this.usageLimit === null || this.usedCount < this.usageLimit)
  );
});

// Method: Check if user can use this coupon
couponSchema.methods.canBeUsedBy = async function (userId, cartTotal, cartItems, isFirstOrder) {
  const errors = [];
  const now = new Date();

  if (!this.isActive) errors.push("Coupon is not active");
  if (now < this.validFrom) errors.push("Coupon is not yet valid");
  if (now > this.validUntil) errors.push("Coupon has expired");
  if (this.usageLimit && this.usedCount >= this.usageLimit)
    errors.push("Coupon usage limit reached");
  if (cartTotal < this.minOrderValue) errors.push(`Minimum order value is $${this.minOrderValue}`);
  if (this.firstOrderOnly && !isFirstOrder) errors.push("Coupon is for first order only");

  // Check user usage limit
  if (userId) {
    const userUsageCount = this.usedBy.filter(
      (u) => u.user.toString() === userId.toString()
    ).length;
    if (userUsageCount >= this.usageLimitPerUser) {
      errors.push("You have reached your usage limit for this coupon");
    }
  }

  return { valid: errors.length === 0, errors };
};

// Method: Calculate discount
couponSchema.methods.calculateDiscount = function (cartTotal) {
  let discount = 0;
  if (this.discountType === "percentage") {
    discount = (cartTotal * this.discountValue) / 100;
    if (this.maxDiscount) discount = Math.min(discount, this.maxDiscount);
  } else {
    discount = this.discountValue;
  }
  return Math.min(discount, cartTotal);
};

// Method: Record usage
couponSchema.methods.recordUsage = async function (userId, orderId) {
  this.usedBy.push({ user: userId, orderId, usedAt: new Date() });
  this.usedCount += 1;
  await this.save();
};

// Static: Find valid coupon by code
couponSchema.statics.findValidCoupon = async function (code) {
  const now = new Date();
  return this.findOne({
    code: code.toUpperCase(),
    isActive: true,
    validFrom: { $lte: now },
    validUntil: { $gte: now },
  });
};

const Coupon = mongoose.model("Coupon", couponSchema);
export default Coupon;
```

---

### G.2 Backend - Controllers

> 💡 **APPENDIX CONTROLLERS — Code đầy đủ các Controller phụ**
>
> Những controller này follow CÙNG patterns đã giải thích ở các section trước:
>
> - `asyncHandler` wrapper (thay vì try/catch/next thủ công)
> - `AppError` class cho custom errors
> - Pagination: skip + limit + countDocuments
> - Ownership check: user chỉ CRUD data của mình
> - Aggregate pipeline cho thống kê
>
> 📌 **PATTERNS XUYÊN SUỐT:**
>
> - `asyncHandler(async (req, res, next) => {...})` — auto catch errors
> - `AppError("message", statusCode)` — throw → errorHandler bắt
> - `Promise.all([query, count])` — song song cho pagination
> - `.lean()` — trả plain JS object (không Mongoose document) → nhanh hơn

#### G.2.1 Review Controller

**📁 File:** `backend/src/controllers/reviewController.js`  
**📝 Mô tả:** CRUD reviews, vote helpful, admin moderation (approve/reject/reply)

> 💡 **REVIEW CONTROLLER — Patterns nổi bật:**
>
> - `$cond` trong aggregate: Conditional count (đếm từng mức rating)
> - `isVerifiedPurchase`: Check order history trước khi review
> - `helpfulVotes/unhelpfulVotes`: Community moderation pattern
> - `updateProductRating()`: Tính lại averageRating sau mỗi review thay đổi

```javascript
import Review from "../models/Review.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";
import { asyncHandler, AppError } from "../middleware/errorHandler.js";

// ============================================================
// PUBLIC ROUTES
// ============================================================

/**
 * @desc    Get reviews for a product
 * @route   GET /api/reviews/product/:productId
 * @access  Public
 */
// 💡 Multi-sort + filter: Frontend cho user chọn "Helpful first", "Highest rating", etc.
export const getProductReviews = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const skip = (page - 1) * limit;

  // 💡 Dynamic query building: Thêm filter tùy theo query params
  const { rating, sort, verified } = req.query;
  const query = { product: productId, status: "approved" }; // Chỉ hiện review đã approve

  if (rating) query.rating = parseInt(rating, 10);
  if (verified === "true") query.isVerifiedPurchase = true;

  // 💡 Dynamic sort: Dựa trên user chọn
  let sortOption = { createdAt: -1 }; // Default: mới nhất
  if (sort === "helpful") sortOption = { helpfulVotes: -1, createdAt: -1 };
  else if (sort === "rating-high") sortOption = { rating: -1, createdAt: -1 };
  else if (sort === "rating-low") sortOption = { rating: 1, createdAt: -1 };

  // 💡 Promise.all: Chạy song song query data + count total
  const [reviews, total] = await Promise.all([
    Review.find(query)
      .populate("user", "firstName lastName avatar")
      .sort(sortOption)
      .skip(skip)
      .limit(limit)
      .lean(), // 💡 .lean(): Trả plain object → nhẹ + nhanh hơn Mongoose document
    Review.countDocuments(query),
  ]);

  // 💡 RATING SUMMARY: Aggregate tính thống kê rating
  // $cond: Conditional — nếu rating === 5 thì count 1, else 0
  // 🎯 PHỎNG VẤN: "$cond là gì?"
  // → Giống if/else trong aggregate: { $cond: [condition, then, else] }
  // → Dùng để conditional count/sum trong $group
  const ratingSummary = await Review.aggregate([
    { $match: { product: productId, status: "approved" } },
    {
      $group: {
        _id: null,
        averageRating: { $avg: "$rating" },
        totalReviews: { $sum: 1 },
        rating5: { $sum: { $cond: [{ $eq: ["$rating", 5] }, 1, 0] } },
        rating4: { $sum: { $cond: [{ $eq: ["$rating", 4] }, 1, 0] } },
        rating3: { $sum: { $cond: [{ $eq: ["$rating", 3] }, 1, 0] } },
        rating2: { $sum: { $cond: [{ $eq: ["$rating", 2] }, 1, 0] } },
        rating1: { $sum: { $cond: [{ $eq: ["$rating", 1] }, 1, 0] } },
      },
    },
  ]);

  res.status(200).json({
    success: true,
    data: {
      reviews,
      // 📝 Fallback phải có đầy đủ rating1-5 để frontend không bị undefined
      summary: ratingSummary[0] || {
        averageRating: 0,
        totalReviews: 0,
        rating5: 0,
        rating4: 0,
        rating3: 0,
        rating2: 0,
        rating1: 0,
      },
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalReviews: total,
        limit,
      },
    },
  });
});

// ============================================================
// PROTECTED ROUTES
// ============================================================

/**
 * @desc    Create a review
 * @route   POST /api/reviews
 * @access  Private
 */
// 💡 CREATE REVIEW — 3 checks quan trọng:
// 1. Product tồn tại
// 2. User chưa review product này (1 user = 1 review/product)
// 3. Check verified purchase (đã mua chưa?)
export const createReview = asyncHandler(async (req, res, next) => {
  const { productId, rating, title, comment, images, sizePurchased, colorPurchased, fit } =
    req.body;

  const product = await Product.findById(productId);
  if (!product) return next(new AppError("Product not found", 404));

  // 💡 DUPLICATE CHECK: 1 user chỉ review 1 lần/product
  const existingReview = await Review.findOne({ product: productId, user: req.user._id });
  if (existingReview) return next(new AppError("You have already reviewed this product", 400));

  // 💡 VERIFIED PURCHASE: Check user đã mua product này chưa
  // Query: Order của user, chứa productId, status delivered/completed
  // "items.product": Dot notation query vào nested array field
  const purchasedOrder = await Order.findOne({
    user: req.user._id,
    "items.product": productId,
    status: { $in: ["delivered", "completed"] },
  });

  // 💡 !!purchasedOrder: Convert truthy/falsy → boolean
  // purchasedOrder = document → true, null → false
  // status: "pending" → Admin phải approve trước khi hiện
  // 🔑 TẠI SAO cần approval? → Tránh spam, nội dung không phù hợp
  const review = await Review.create({
    product: productId,
    user: req.user._id,
    order: purchasedOrder?._id,
    rating,
    title,
    comment,
    images,
    sizePurchased,
    colorPurchased,
    fit,
    isVerifiedPurchase: !!purchasedOrder,
    status: "pending", // 💡 Chờ admin approve
  });

  await review.populate("user", "firstName lastName avatar");

  res.status(201).json({
    success: true,
    message: "Review submitted successfully. It will be visible after approval.",
    data: { review },
  });
});

/**
 * @desc    Update a review
 * @route   PUT /api/reviews/:id
 * @access  Private (Owner only)
 */
// 💡 UPDATE REVIEW: Chỉ owner mới sửa được + phải re-approve
// 🔑 TẠI SAO re-approve? → User có thể sửa thành nội dung xấu
export const updateReview = asyncHandler(async (req, res, next) => {
  const review = await Review.findById(req.params.id);
  if (!review) return next(new AppError("Review not found", 404));
  // 💡 OWNERSHIP CHECK: .toString() vì ObjectId !== string
  if (review.user.toString() !== req.user._id.toString()) {
    return next(new AppError("You can only update your own reviews", 403));
  }

  const { rating, title, comment, images, fit } = req.body;
  // 💡 Conditional update: Chỉ update field nào được gửi
  if (rating) review.rating = rating;
  if (title !== undefined) review.title = title; // 💡 !== undefined: Cho phép title = ""
  if (comment) review.comment = comment;
  if (images) review.images = images;
  if (fit) review.fit = fit;
  review.status = "pending"; // 💡 Re-approval needed khi sửa nội dung

  await review.save();
  await review.populate("user", "firstName lastName avatar");

  res.status(200).json({
    success: true,
    message: "Review updated successfully. It will be visible after re-approval.",
    data: { review },
  });
});

/**
 * @desc    Delete a review
 * @route   DELETE /api/reviews/:id
 * @access  Private (Owner or Admin)
 */
// 💡 DELETE: Owner HOẶC admin đều xóa được
// 🔑 Pattern: owner || admin → kết hợp 2 conditions
// Sau khi xóa → recalculate averageRating trên Product
export const deleteReview = asyncHandler(async (req, res, next) => {
  const review = await Review.findById(req.params.id);
  if (!review) return next(new AppError("Review not found", 404));

  // 💡 DUAL AUTHORIZATION: Owner hoặc Admin
  if (review.user.toString() !== req.user._id.toString() && req.user.role !== "admin") {
    return next(new AppError("You can only delete your own reviews", 403));
  }

  const productId = review.product;
  await Review.findByIdAndDelete(req.params.id);
  // 💡 Recalculate: Xóa review → averageRating thay đổi → cập nhật Product
  await Review.calculateAverageRating(productId);

  res.status(200).json({ success: true, message: "Review deleted successfully" });
});

/**
 * @desc    Vote review as helpful
 * @route   POST /api/reviews/:id/helpful
 * @access  Private
 */
// 💡 TOGGLE VOTE PATTERN: Click lần 1 → vote, click lần 2 → unvote
// Giống "Like" trên Facebook — toggle on/off
// 🔑 helpfulVoters array: Lưu user IDs để check đã vote chưa
export const voteHelpful = asyncHandler(async (req, res, next) => {
  const review = await Review.findById(req.params.id);
  if (!review) return next(new AppError("Review not found", 404));

  // 💡 .includes(): Check nếu user đã vote
  const alreadyVoted = review.helpfulVoters.includes(req.user._id);
  if (alreadyVoted) {
    // 💡 UNVOTE: Filter bỏ user ID khỏi array + giảm count
    review.helpfulVoters = review.helpfulVoters.filter(
      (v) => v.toString() !== req.user._id.toString()
    );
    review.helpfulVotes -= 1;
  } else {
    // 💡 VOTE: Push user ID vào array + tăng count
    review.helpfulVoters.push(req.user._id);
    review.helpfulVotes += 1;
  }

  await review.save();
  res.status(200).json({
    success: true,
    message: alreadyVoted ? "Vote removed" : "Marked as helpful",
    data: { helpfulVotes: review.helpfulVotes, voted: !alreadyVoted },
  });
});

/**
 * @desc    Get user's reviews
 * @route   GET /api/reviews/my-reviews
 * @access  Private
 */
export const getMyReviews = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;

  const [reviews, total] = await Promise.all([
    Review.find({ user: req.user._id })
      .populate("product", "name slug thumbnail price")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean(),
    Review.countDocuments({ user: req.user._id }),
  ]);

  res.status(200).json({
    success: true,
    data: {
      reviews,
      // 📝 Thêm limit vào pagination response
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalReviews: total,
        limit,
      },
    },
  });
});

/**
 * @desc    Check if user can review a product
 * @route   GET /api/reviews/can-review/:productId
 * @access  Private
 */
export const canReviewProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const existingReview = await Review.findOne({ product: productId, user: req.user._id });

  if (existingReview) {
    return res.status(200).json({
      success: true,
      data: { canReview: false, reason: "already_reviewed", existingReview: existingReview._id },
    });
  }

  const purchasedOrder = await Order.findOne({
    user: req.user._id,
    "items.product": productId,
    status: { $in: ["delivered", "completed"] },
  });

  res.status(200).json({
    success: true,
    data: { canReview: true, isVerifiedPurchase: !!purchasedOrder },
  });
});

// ============================================================
// ADMIN ROUTES
// ============================================================

/**
 * @desc    Get all reviews (Admin)
 * @route   GET /api/reviews/admin/all
 */
export const getAllReviews = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 20;
  const { status, rating, search } = req.query;
  const query = {};

  if (status) query.status = status;
  if (rating) query.rating = parseInt(rating, 10);
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { comment: { $regex: search, $options: "i" } },
    ];
  }

  const [reviews, total] = await Promise.all([
    Review.find(query)
      .populate("user", "firstName lastName email")
      .populate("product", "name slug thumbnail")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean(),
    Review.countDocuments(query),
  ]);

  // 📝 Aggregate đếm số review theo từng status (pending, approved, rejected)
  const statusCounts = await Review.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }]);

  res.status(200).json({
    success: true,
    data: {
      reviews,
      statusCounts: statusCounts.reduce((acc, curr) => {
        acc[curr._id] = curr.count;
        return acc;
      }, {}),
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalReviews: total,
        limit,
      },
    },
  });
});

/** @desc Approve review - PATCH /api/reviews/:id/approve */
export const approveReview = asyncHandler(async (req, res, next) => {
  const review = await Review.findById(req.params.id);
  if (!review) return next(new AppError("Review not found", 404));

  review.status = "approved";
  await review.save();
  await Review.calculateAverageRating(review.product);

  res
    .status(200)
    .json({ success: true, message: "Review approved successfully", data: { review } });
});

/** @desc Reject review - PATCH /api/reviews/:id/reject */
export const rejectReview = asyncHandler(async (req, res, next) => {
  const review = await Review.findById(req.params.id);
  if (!review) return next(new AppError("Review not found", 404));

  review.status = "rejected";
  review.rejectionReason = req.body.reason;
  await review.save();

  res.status(200).json({ success: true, message: "Review rejected", data: { review } });
});

/** @desc Reply to review - POST /api/reviews/:id/reply */
export const replyToReview = asyncHandler(async (req, res, next) => {
  const { comment } = req.body;
  if (!comment) return next(new AppError("Reply comment is required", 400));

  const review = await Review.findById(req.params.id);
  if (!review) return next(new AppError("Review not found", 404));

  review.adminReply = { comment, repliedAt: new Date(), repliedBy: req.user._id };
  await review.save();

  res.status(200).json({ success: true, message: "Reply added successfully", data: { review } });
});
```

---

#### G.2.2 Coupon Controller

**📁 File:** `backend/src/controllers/couponController.js`  
**📝 Mô tả:** Validate coupon, CRUD coupons (Admin), coupon statistics

> 💡 **COUPON CONTROLLER — Patterns nổi bật:**
>
> - **Validation chain**: findValidCoupon (static) → canBeUsedBy (instance) → calculateDiscount (instance)
> - **Dual access**: `validateCoupon` dùng `optionalAuth` (guest + user), CRUD dùng `adminOnly`
> - **Soft delete**: Coupon đã được dùng → deactivate thay vì xóa (giữ lịch sử)
> - **Enriched response**: `getAllCoupons` thêm `isExpired`, `isStarted`, `remainingUses` — computed fields
>
> 🎯 **PHỎNG VẤN**: "Tại sao validation logic nằm ở Model thay vì Controller?"
> → Model = single source of truth → nhiều controllers gọi cùng logic
> → Controller chỉ orchestrate (gọi model methods + format response)
>
> ⚡ **THỰC TẾ**: Real e-commerce → coupon validation rất phức tạp:
>
> - Stacking coupons (dùng nhiều coupons cùng lúc)
> - A/B testing coupon campaigns
> - Fraud detection (lạm dụng coupon)

```javascript
import Coupon from "../models/Coupon.js";
import Order from "../models/Order.js";
import { asyncHandler, AppError } from "../middleware/errorHandler.js";

// ============================================================
// PUBLIC/USER ROUTES
// ============================================================

/**
 * @desc    Validate and get coupon details
 * @route   POST /api/coupons/validate
 * @access  Public
 */
// 💡 VALIDATE COUPON: Kiểm tra mã giảm giá có hợp lệ không + tính số tiền giảm
// Flow: findValidCoupon → canBeUsedBy → calculateDiscount
export const validateCoupon = asyncHandler(async (req, res, next) => {
  const { code, cartTotal, cartItems } = req.body;
  if (!code) return next(new AppError("Coupon code is required", 400));

  // 💡 findValidCoupon: Static method trên Coupon model
  // Tìm coupon isActive=true + trong thời hạn + chưa hết lượt
  const coupon = await Coupon.findValidCoupon(code);
  if (!coupon) return next(new AppError("Invalid or expired coupon code", 404));

  // 💡 Check firstOrderOnly: Nếu coupon chỉ cho đơn đầu tiên
  // req.user có thể null (guest) → mặc định isFirstOrder = true
  let isFirstOrder = true;
  if (req.user) {
    const orderCount = await Order.countDocuments({ user: req.user._id });
    isFirstOrder = orderCount === 0;
  }

  // 💡 canBeUsedBy: Instance method — kiểm tra user cụ thể có dùng được không
  // Checks: minOrderValue, usageLimitPerUser, applicableProducts, firstOrderOnly
  // 🔑 req.user?._id: Optional chaining — guest không có user
  const validation = await coupon.canBeUsedBy(
    req.user?._id,
    cartTotal || 0,
    cartItems,
    isFirstOrder
  );
  if (!validation.valid) {
    // 💡 Trả về errors[0] làm message chính + full errors array cho frontend
    return res
      .status(400)
      .json({ success: false, message: validation.errors[0], errors: validation.errors });
  }

  // 💡 calculateDiscount: Tính tiền giảm dựa trên discountType (percentage/fixed)
  // Percentage: amount * discountValue / 100, cap tại maxDiscount
  // Fixed: discountValue trực tiếp
  const discount = coupon.calculateDiscount(cartTotal || 0);

  res.status(200).json({
    success: true,
    data: {
      coupon: {
        code: coupon.code,
        description: coupon.description,
        discountType: coupon.discountType,
        discountValue: coupon.discountValue,
        maxDiscount: coupon.maxDiscount,
        minOrderValue: coupon.minOrderValue,
        validUntil: coupon.validUntil,
      },
      discount,
      newTotal: Math.max(0, (cartTotal || 0) - discount),
    },
  });
});

/**
 * @desc    Get available coupons for user
 * @route   GET /api/coupons/available
 * @access  Private
 */
// 💡 GET AVAILABLE COUPONS: Lấy danh sách coupons user có thể dùng
// 🔑 2 bước: (1) Find valid coupons → (2) Filter theo per-user usage
// ⚡ THỰC TẾ: N+1 query problem! Mỗi coupon → 1 findById → chậm khi nhiều coupons
// → Optimize: aggregate pipeline hoặc populate usedBy rồi filter in-memory
export const getAvailableCoupons = asyncHandler(async (req, res) => {
  const now = new Date();
  // 💡 Query phức hợp: active + trong thời hạn + chưa hết lượt
  // $expr: So sánh 2 fields trong cùng document ($usedCount < $usageLimit)
  const coupons = await Coupon.find({
    isActive: true,
    validFrom: { $lte: now },
    validUntil: { $gte: now },
    $or: [{ usageLimit: null }, { $expr: { $lt: ["$usedCount", "$usageLimit"] } }],
  })
    .select("code description discountType discountValue maxDiscount minOrderValue validUntil")
    .lean(); // 💡 .lean(): POJO, không có Mongoose methods

  // 💡 Filter per-user: Check mỗi user đã dùng bao nhiêu lần
  // 📌 MẸO: for...of (tuần tự) thay vì .map + Promise.all
  // → .lean() ở trên nên cần findById lại để dùng usedBy
  const availableCoupons = [];
  for (const coupon of coupons) {
    const fullCoupon = await Coupon.findById(coupon._id);
    const userUsageCount = fullCoupon.usedBy.filter(
      (u) => u.user.toString() === req.user._id.toString()
    ).length;
    if (userUsageCount < fullCoupon.usageLimitPerUser) {
      availableCoupons.push({
        ...coupon,
        remainingUses: fullCoupon.usageLimitPerUser - userUsageCount,
      });
    }
  }

  res.status(200).json({ success: true, data: { coupons: availableCoupons } });
});

// ============================================================
// ADMIN ROUTES
// ============================================================

/** @desc Create coupon - POST /api/coupons */
// � CREATE COUPON: Admin tạo mã giảm giá mới
// 📌 Destructure tất cả fields cho rõ ràng thay vì spread ...req.body
// 🔑 TẠI SAO destructure? → Whitelist pattern: Chỉ lấy fields cho phép
// → Nếu dùng ...req.body → user có thể inject usedCount, usedBy (security risk!)
export const createCoupon = asyncHandler(async (req, res, next) => {
  const {
    code,
    description,
    discountType,
    discountValue,
    maxDiscount,
    minOrderValue,
    validFrom,
    validUntil,
    usageLimit,
    usageLimitPerUser,
    applicableProducts,
    applicableCategories,
    excludedProducts,
    firstOrderOnly,
    minItems,
  } = req.body;

  const existingCoupon = await Coupon.findOne({ code: code.toUpperCase() });
  if (existingCoupon) return next(new AppError("Coupon code already exists", 400));

  const coupon = await Coupon.create({
    code,
    description,
    discountType,
    discountValue,
    maxDiscount,
    minOrderValue,
    validFrom,
    validUntil,
    usageLimit,
    usageLimitPerUser,
    applicableProducts,
    applicableCategories,
    excludedProducts,
    firstOrderOnly,
    minItems,
    createdBy: req.user._id,
  });
  res.status(201).json({ success: true, message: "Coupon created successfully", data: { coupon } });
});

/** @desc Get all coupons - GET /api/coupons */
// � GET ALL COUPONS (Admin): Pagination + Filter + Search + Enriched fields
// 📌 populate createdBy để hiện tên admin + enrichedCoupons thêm trường tính toán
// 🔑 ENRICHED RESPONSE: Server tính isExpired, isStarted, remainingUses
// → Frontend không cần tính → giảm logic phía client
export const getAllCoupons = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 20;
  const skip = (page - 1) * limit;
  const { status, search } = req.query;
  const query = {};

  // 💡 DYNAMIC QUERY BUILDER: Thêm conditions dựa vào query params
  // 📌 Pattern: Bắt đầu với query = {} → dần thêm filters
  if (status === "active") {
    const now = new Date();
    query.isActive = true;
    query.validFrom = { $lte: now }; // 💡 $lte: Đã bắt đầu
    query.validUntil = { $gte: now }; // 💡 $gte: Chưa hết hạn
  } else if (status === "expired") query.validUntil = { $lt: new Date() };
  else if (status === "inactive") query.isActive = false;

  // 💡 $regex + $options: "i" → case-insensitive search
  // $or: Tìm trong code HOẶC description
  if (search) {
    query.$or = [
      { code: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  }

  const [coupons, total] = await Promise.all([
    Coupon.find(query)
      .populate("createdBy", "firstName lastName")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    Coupon.countDocuments(query),
  ]);

  // 💡 ENRICHED RESPONSE: Thêm computed fields cho frontend
  // ...coupon (spread) + 3 computed fields
  // 🔑 TẠI SAO server tính? → Frontend không cần so sánh Date
  // → Tránh timezone issues giữa server và client
  const enrichedCoupons = coupons.map((coupon) => ({
    ...coupon,
    isExpired: new Date(coupon.validUntil) < new Date(), // 💡 Đã hết hạn?
    isStarted: new Date(coupon.validFrom) <= new Date(), // 💡 Đã bắt đầu?
    remainingUses: coupon.usageLimit ? coupon.usageLimit - coupon.usedCount : null, // 💡 null = unlimited
  }));

  res.status(200).json({
    success: true,
    data: {
      coupons: enrichedCoupons,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalCoupons: total,
        limit,
      },
    },
  });
});

/** @desc Get single coupon - GET /api/coupons/:id */
// � GET SINGLE COUPON: Lấy chi tiết 1 coupon + populate 3 references
// 📌 populate 3 nguồn: createdBy (admin tạo), usedBy.user (khách dùng), usedBy.orderId (đơn hàng)
// 🔑 Multi-populate: Mongoose cho phép chain .populate() nhiều lần
export const getCoupon = asyncHandler(async (req, res, next) => {
  const coupon = await Coupon.findById(req.params.id)
    .populate("createdBy", "firstName lastName")
    .populate("usedBy.user", "firstName lastName email")
    .populate("usedBy.orderId", "orderNumber total");
  if (!coupon) return next(new AppError("Coupon not found", 404));
  res.status(200).json({ success: true, data: { coupon } });
});

/** @desc Update coupon - PUT /api/coupons/:id */
export const updateCoupon = asyncHandler(async (req, res, next) => {
  const coupon = await Coupon.findById(req.params.id);
  if (!coupon) return next(new AppError("Coupon not found", 404));

  // 💡 BUSINESS RULE: Không đổi code nếu coupon đã được sử dụng
  // → Orders cũ reference bằng code string → đổi code = mất liên kết
  if (req.body.code && coupon.usedCount > 0 && req.body.code !== coupon.code) {
    return next(new AppError("Cannot change code of a coupon that has been used", 400));
  }

  // 💡 WHITELIST PATTERN: Chỉ cho update các fields trong danh sách
  // 📌 15 allowedFields — KHÔNG có: code (nếu đã dùng), usedCount, usedBy, createdBy
  // 🔑 TẠI SAO không dùng findByIdAndUpdate(id, req.body)?
  // → Security: User có thể inject usedCount: 0 để reset usage!
  const allowedFields = [
    "description",
    "discountType",
    "discountValue",
    "maxDiscount",
    "minOrderValue",
    "validFrom",
    "validUntil",
    "usageLimit",
    "usageLimitPerUser",
    "applicableProducts",
    "applicableCategories",
    "excludedProducts",
    "firstOrderOnly",
    "minItems",
    "isActive",
  ];
  allowedFields.forEach((field) => {
    if (req.body[field] !== undefined) coupon[field] = req.body[field];
  });

  await coupon.save();
  res.status(200).json({ success: true, message: "Coupon updated successfully", data: { coupon } });
});

/** @desc Delete coupon - DELETE /api/coupons/:id */
// 💡 SOFT DELETE PATTERN: Đã dùng → deactivate, chưa dùng → hard delete
// 🔑 TẠI SAO soft delete? → Giữ audit trail cho accounting/reporting
// → Orders cũ reference couponCode → xóa coupon = mất data báo cáo
// ⚡ THỰC TẾ: Nhiều hệ thống KHÔNG bao giờ hard delete → thêm deletedAt field
export const deleteCoupon = asyncHandler(async (req, res, next) => {
  const coupon = await Coupon.findById(req.params.id);
  if (!coupon) return next(new AppError("Coupon not found", 404));

  // 💡 usedCount > 0: Có lịch sử sử dụng → chỉ deactivate
  if (coupon.usedCount > 0) {
    coupon.isActive = false;
    await coupon.save();
    return res
      .status(200)
      .json({ success: true, message: "Coupon deactivated (has usage history)" });
  }

  // 💡 Chưa ai dùng → an toàn hard delete
  await Coupon.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true, message: "Coupon deleted" });
});

/** @desc Toggle coupon status - PATCH /api/coupons/:id/toggle */
export const toggleCouponStatus = asyncHandler(async (req, res, next) => {
  const coupon = await Coupon.findById(req.params.id);
  if (!coupon) return next(new AppError("Coupon not found", 404));

  coupon.isActive = !coupon.isActive;
  await coupon.save();
  res.status(200).json({
    success: true,
    message: `Coupon ${coupon.isActive ? "activated" : "deactivated"}`,
    data: { coupon },
  });
});

/** @desc Get coupon stats - GET /api/coupons/:id/stats */
// � COUPON STATS: Thống kê hiệu quả của 1 coupon
// 📌 Query orders theo couponCode → tính tổng discount, order value, average
// 🔑 usageByDate: .reduce() tạo object { '2024-01-15': 3, '2024-01-16': 1 }
// → Frontend vẽ chart usage theo ngày
// ⚡ THỰC TẾ: Real app dùng aggregate pipeline cho performance tốt hơn
export const getCouponStats = asyncHandler(async (req, res, next) => {
  const coupon = await Coupon.findById(req.params.id);
  if (!coupon) return next(new AppError("Coupon not found", 404));

  // 💡 Tìm tất cả orders dùng coupon này
  const orders = await Order.find({ couponCode: coupon.code }).select("total discount createdAt");
  const stats = {
    totalUses: coupon.usedCount,
    remainingUses: coupon.usageLimit ? coupon.usageLimit - coupon.usedCount : "Unlimited",
    totalDiscountGiven: orders.reduce((sum, o) => sum + (o.discount || 0), 0), // 💡 Tổng tiền giảm
    totalOrderValue: orders.reduce((sum, o) => sum + o.total, 0), // 💡 Tổng doanh thu từ coupon
    averageOrderValue:
      orders.length > 0 ? orders.reduce((sum, o) => sum + o.total, 0) / orders.length : 0,
    usageByDate: coupon.usedBy.reduce((acc, usage) => {
      const date = usage.usedAt.toISOString().split("T")[0];
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {}),
  };

  res.status(200).json({ success: true, data: { stats } });
});
```

> 🎯 **PHỎNG VẤN — Coupon Controller:**
>
> - **Q: Tại sao `validateCoupon` dùng `optionalAuth` thay vì `protect`?**
>   → Guest checkout: User chưa đăng nhập vẫn có thể dùng coupon
>   → req.user có thể null → check `if (req.user)` trước khi đọc \_id
> - **Q: Soft delete coupon — lợi ích gì?**
>   → Orders cũ reference couponCode string → xóa = mất data báo cáo
>   → Accounting/audit cần lịch sử coupon đã dùng
> - **Q: `getAvailableCoupons` có N+1 query problem — cách fix?**
>   → Hiện tại: `find()` + loop `findById()` = N+1 queries
>   → Fix: Populate usedBy trong find query ban đầu, filter in-memory
>   → Hoặc: Aggregate pipeline $lookup + $filter
>
> ⚡ **THỰC TẾ**: Coupon systems trong production:
>
> - **Rate limiting**: Prevent brute-force coupon guessing
> - **Fraud detection**: Detect coupon abuse (nhiều accounts cùng 1 người)
> - **A/B testing**: Coupon campaigns với different discount levels

---

#### G.2.3 Payment Controller

**📁 File:** `backend/src/controllers/paymentController.js`  
**📝 Mô tả:** Xử lý thanh toán COD, Bank Transfer, Stripe (mock), VNPay (mock), MoMo (disabled), refund

> 💡 **PAYMENT CONTROLLER — Patterns nổi bật:**
>
> - **Strategy Pattern**: `processPayment` → dispatch đến handler khác nhau dựa trên paymentMethod
> - **Mock payments**: Stripe/VNPay chỉ simulate (trả về mock data) — real app cần integrate SDK
> - **Payment status lifecycle**: pending → processing → paid → refunded
> - **Cart cleanup**: Clear cart + record coupon usage SAU KHI payment thành công
>
> 🎯 **PHỎNG VẤN**: "Tại sao Payment riêng Order?"
> → Separation of Concerns: Order = đơn hàng, Payment = thanh toán
> → Cùng 1 order có thể thanh toán nhiều lần (retry, partial refund)
> → Real app: Payment service là microservice riêng

```javascript
// 📝 Import Cart ngoài Order, Coupon — dùng cho clear cart sau payment
import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import Coupon from "../models/Coupon.js";
import { asyncHandler, AppError } from "../middleware/errorHandler.js";
import { sendEmail } from "../utils/emailService.js";

/**
 * @desc    Get available payment methods
 * @route   GET /api/payments/methods
 * @access  Public
 */
// 💡 PAYMENT METHODS: Trả về danh sách phương thức thanh toán hỗ trợ
// Frontend render dropdown/radio buttons từ data này
// ⚡ THỰC TẾ: Real app lấy từ config/DB, không hardcode
export const getPaymentMethods = asyncHandler(async (req, res) => {
  const paymentMethods = [
    {
      id: "cod",
      name: "Cash on Delivery",
      description: "Pay when you receive your order",
      icon: "cash",
      enabled: true,
      fee: 0,
    },
    {
      id: "bank_transfer",
      name: "Bank Transfer",
      description: "Transfer to our bank account",
      icon: "bank",
      enabled: true,
      fee: 0,
      bankInfo: {
        bankName: "Vietcombank",
        accountNumber: "1234567890",
        accountName: "FASHION STORE",
        branch: "Ho Chi Minh City",
      },
    },
    {
      id: "stripe",
      name: "Credit/Debit Card",
      description: "Pay securely with Stripe",
      icon: "credit-card",
      enabled: true,
      fee: 0,
      supportedCards: ["visa", "mastercard", "amex"],
    },
    {
      id: "vnpay",
      name: "VNPay",
      description: "Pay with VNPay QR or Banking App",
      icon: "qr-code",
      enabled: true,
      fee: 0,
    },
    // 📝 MoMo — enabled: false (Coming soon), sẽ bị filter bỏ
    {
      id: "momo",
      name: "MoMo",
      description: "Pay with MoMo e-wallet",
      icon: "wallet",
      enabled: false,
      fee: 0,
    },
  ];

  res.status(200).json({
    success: true,
    data: { paymentMethods: paymentMethods.filter((m) => m.enabled) },
  });
});

/**
 * @desc    Create payment intent (for Stripe)
 * @route   POST /api/payments/create-intent
 * @access  Private
 */
// 💡 PAYMENT INTENT: Stripe pattern — tạo "ý định thanh toán" trước khi charge
// 🔑 TẠI SAO 2 bước (create-intent → confirm)?
// → Security: Server tạo intent → Client dùng clientSecret → Stripe charge
// → Client KHÔNG biết amount thật (server-side control)
// ⚡ THỰC TẾ: Đây là MOCK — real app dùng: const stripe = require('stripe')(secretKey)
//   → stripe.paymentIntents.create({ amount, currency })
export const createPaymentIntent = asyncHandler(async (req, res, next) => {
  const { orderId, paymentMethod } = req.body;
  const order = await Order.findById(orderId);
  if (!order) return next(new AppError("Order not found", 404));

  // 📝 Check ownership — đảm bảo user chỉ tạo payment cho order của mình
  if (order.user && order.user.toString() !== req.user._id.toString()) {
    return next(new AppError("Unauthorized", 403));
  }

  // 💡 IDEMPOTENT CHECK: Đã paid rồi → không charge lần nữa
  if (order.paymentStatus === "paid") return next(new AppError("Order already paid", 400));

  // 💡 MOCK PAYMENT INTENT: Simulate Stripe response
  // Real: const intent = await stripe.paymentIntents.create({...})
  // amount * 100: Stripe dùng cents (smallest currency unit)
  // clientSecret: Frontend dùng để confirm payment bên client-side
  const paymentIntent = {
    id: `pi_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    amount: order.total * 100, // 💡 Convert to cents ($10.50 → 1050)
    currency: order.currency?.toLowerCase() || "usd",
    status: "requires_payment_method",
    clientSecret: `${Date.now()}_secret_${Math.random().toString(36).substr(2, 16)}`,
    metadata: { orderId: order._id.toString(), orderNumber: order.orderNumber },
  };

  order.paymentDetails = {
    paymentIntentId: paymentIntent.id,
    paymentMethod,
    createdAt: new Date(),
  };
  await order.save();

  res.status(200).json({
    success: true,
    data: {
      clientSecret: paymentIntent.clientSecret,
      paymentIntentId: paymentIntent.id,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
    },
  });
});

/**
 * @desc    Confirm payment (webhook simulation)
 * @route   POST /api/payments/confirm
 * @access  Private
 */
// 💡 CONFIRM PAYMENT: Simulate Stripe webhook callback
// Real flow: Stripe gọi webhook → server verify → update order
// 🔑 TẠI SAO webhook thay vì client confirm?
// → Security: Client có thể hack "paid" → phải server-side verify
// → Stripe gọi endpoint của chúng ta khi payment thật sự thành công
export const confirmPayment = asyncHandler(async (req, res, next) => {
  const { orderId, paymentIntentId, paymentMethod } = req.body;
  const order = await Order.findById(orderId);
  if (!order) return next(new AppError("Order not found", 404));

  // 💡 Update payment status + order status
  order.paymentStatus = "paid";
  order.paymentDetails = {
    ...order.paymentDetails, // 💡 Spread: Giữ data cũ + thêm mới
    paymentIntentId,
    paymentMethod,
    paidAt: new Date(),
  };
  order.status = "processing"; // 💡 Paid → chuyển sang processing
  await order.save();

  // 💡 Record coupon usage SAU KHI payment thành công
  // 🔑 TẠI SAO ở đây thay vì khi tạo order?
  // → Nếu payment fail → coupon không bị trừ lượt
  if (order.couponCode) {
    const coupon = await Coupon.findOne({ code: order.couponCode });
    if (coupon) await coupon.recordUsage(order.user, order._id);
  }

  // 💡 Email notification: Non-blocking (try/catch để không fail request)
  // 📝 Gửi email xác nhận thanh toán
  if (order.customerEmail) {
    try {
      await sendEmail({
        to: order.customerEmail,
        subject: `Payment Confirmed - Order #${order.orderNumber}`,
        template: "payment-confirmed",
        data: { orderNumber: order.orderNumber, amount: order.total, paymentMethod },
      });
    } catch (emailError) {
      // 💡 Email fail → log nhưng KHÔNG fail request
      // Payment đã thành công → không nên rollback vì email lỗi
      console.error("Failed to send payment confirmation email:", emailError);
    }
  }

  res.status(200).json({
    success: true,
    message: "Payment confirmed successfully",
    data: {
      order: {
        _id: order._id,
        orderNumber: order.orderNumber,
        status: order.status,
        paymentStatus: order.paymentStatus,
      },
    },
  });
});

/**
 * @desc    Process COD order
 * @route   POST /api/payments/cod
 * @access  Private/Public
 */
// 💡 COD (Cash on Delivery): Đơn giản nhất — chỉ cập nhật trạng thái
// paymentStatus = "pending" (chưa trả) — sẽ chuyển "paid" khi giao thành công
// 📌 Pattern: Update fields → save() → return relevant data only
export const processCOD = asyncHandler(async (req, res, next) => {
  const { orderId } = req.body;
  const order = await Order.findById(orderId);
  if (!order) return next(new AppError("Order not found", 404));

  order.paymentMethod = "cod";
  order.paymentStatus = "pending";
  order.paymentDetails = {
    paymentMethod: "cod",
    note: "Payment will be collected on delivery",
  };
  order.status = "processing";
  await order.save();

  res.status(200).json({
    success: true,
    message: "COD order confirmed",
    data: {
      order: {
        _id: order._id,
        orderNumber: order.orderNumber,
        status: order.status,
        paymentMethod: order.paymentMethod,
      },
    },
  });
});

/**
 * @desc    Process Bank Transfer order
 * @route   POST /api/payments/bank-transfer
 * @access  Private/Public
 */
// 💡 BANK TRANSFER: Tạo thông tin chuyển khoản + gửi email hướng dẫn
// 🔑 transferReference: Mã ghi chú chuyển khoản — để đối chiếu
// 📌 expiresAt: 24h — quá hạn sẽ tự động hủy (ở production cần cron job)
// ⚡ THỰC TẾ: Real app tích hợp với ngân hàng API để tự động xác nhận
export const processBankTransfer = asyncHandler(async (req, res, next) => {
  const { orderId } = req.body;
  const order = await Order.findById(orderId);
  if (!order) return next(new AppError("Order not found", 404));

  const transferReference = `FS${order.orderNumber}`;
  order.paymentMethod = "bank_transfer";
  order.paymentStatus = "awaiting_payment";
  order.paymentDetails = {
    paymentMethod: "bank_transfer",
    transferReference,
    bankInfo: {
      bankName: "Vietcombank",
      accountNumber: "1234567890",
      accountName: "FASHION STORE",
      branch: "Ho Chi Minh City",
    },
    note: `Please include reference: ${transferReference}`,
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
  };
  await order.save();

  // � Gửi email hướng dẫn chuyển khoản — dùng template + data thay vì html trực tiếp
  // 📌 Non-blocking: try/catch bọc bên ngoài — email fail không ảnh hưởng response
  if (order.customerEmail) {
    try {
      await sendEmail({
        to: order.customerEmail,
        subject: `Bank Transfer Instructions - Order #${order.orderNumber}`,
        template: "bank-transfer",
        data: {
          orderNumber: order.orderNumber,
          amount: order.total,
          transferReference,
          bankInfo: order.paymentDetails.bankInfo,
          expiresAt: order.paymentDetails.expiresAt,
        },
      });
    } catch (emailError) {
      console.error("Failed to send bank transfer email:", emailError);
    }
  }

  res.status(200).json({
    success: true,
    message: "Please complete the bank transfer within 24 hours",
    data: {
      order: {
        _id: order._id,
        orderNumber: order.orderNumber,
        status: order.status,
        paymentMethod: order.paymentMethod,
      },
      transferDetails: {
        transferReference,
        bankInfo: order.paymentDetails.bankInfo,
        amount: order.total,
        expiresAt: order.paymentDetails.expiresAt,
      },
    },
  });
});

/**
 * @desc    Verify bank transfer (Admin)
 * @route   POST /api/payments/verify-transfer
 * @access  Private/Admin
 */
// 💡 VERIFY BANK TRANSFER: Admin xác nhận đã nhận được tiền
// 🔑 Spread operator: ...order.paymentDetails giữ data cũ + thêm verified fields
// 📌 Audit trail: verifiedAt, verifiedBy (admin ID), transactionId, notes
export const verifyBankTransfer = asyncHandler(async (req, res, next) => {
  const { orderId, transactionId, notes } = req.body;
  const order = await Order.findById(orderId);
  if (!order) return next(new AppError("Order not found", 404));
  if (order.paymentMethod !== "bank_transfer")
    return next(new AppError("This order is not a bank transfer order", 400));

  order.paymentStatus = "paid";
  order.paymentDetails = {
    ...order.paymentDetails,
    verified: true,
    verifiedAt: new Date(),
    verifiedBy: req.user._id,
    transactionId,
    notes,
  };
  order.status = "processing";
  await order.save();

  // 📝 Gửi email xác nhận đã nhận thanh toán
  if (order.customerEmail) {
    try {
      await sendEmail({
        to: order.customerEmail,
        subject: `Payment Received - Order #${order.orderNumber}`,
        template: "payment-confirmed",
        data: {
          orderNumber: order.orderNumber,
          amount: order.total,
          paymentMethod: "Bank Transfer",
        },
      });
    } catch (emailError) {
      console.error("Failed to send payment confirmation email:", emailError);
    }
  }

  res
    .status(200)
    .json({ success: true, message: "Bank transfer verified successfully", data: { order } });
});

/**
 * @desc    Create VNPay payment URL
 * @route   POST /api/payments/vnpay/create
 * @access  Private/Public
 */
// 💡 VNPAY MOCK: Simulate VNPay payment gateway
// Real flow: Tạo URL với HMAC signature → redirect user → VNPay xử lý → callback
// 🔑 amount * 100: VNPay dùng đơn vị nhỏ nhất (VND không có decimal, nhưng API yêu cầu *100)
export const createVNPayPayment = asyncHandler(async (req, res, next) => {
  const { orderId } = req.body;
  const order = await Order.findById(orderId);
  if (!order) return next(new AppError("Order not found", 404));

  // Mock VNPay URL — production sẽ gọi VNPay API thật
  const vnpayUrl = `https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?vnp_Amount=${
    order.total * 100
  }&vnp_OrderInfo=${order.orderNumber}&vnp_TxnRef=${Date.now()}`;

  order.paymentMethod = "vnpay";
  order.paymentStatus = "awaiting_payment";
  order.paymentDetails = {
    paymentMethod: "vnpay",
    vnpayTxnRef: Date.now().toString(),
    createdAt: new Date(),
  };
  await order.save();

  res.status(200).json({
    success: true,
    data: { paymentUrl: vnpayUrl, orderId: order._id, orderNumber: order.orderNumber },
  });
});

/**
 * @desc    VNPay callback/return handler
 * @route   GET /api/payments/vnpay/callback
 * @access  Public
 */
// 💡 CALLBACK HANDLER: VNPay redirect user về URL này SAU KHI thanh toán
// vnp_ResponseCode = "00" → Thành công, khác → Thất bại
// 🔑 Tìm order qua paymentDetails.vnpayTxnRef (nested field query)
// 📌 Coupon recording + email lặp lại giống confirmPayment → DRY violation
// ⚡ THỰC TẾ: Refactor thành helper: handleSuccessfulPayment(order)
export const vnpayCallback = asyncHandler(async (req, res, next) => {
  // 💡 Destructure VNPay query params
  const { vnp_ResponseCode, vnp_TxnRef, vnp_OrderInfo, vnp_Amount, vnp_TransactionNo } = req.query;
  // 💡 Nested field query: Tìm order có paymentDetails.vnpayTxnRef match
  const order = await Order.findOne({ "paymentDetails.vnpayTxnRef": vnp_TxnRef });
  if (!order) return next(new AppError("Order not found", 404));

  if (vnp_ResponseCode === "00") {
    // Payment successful
    order.paymentStatus = "paid";
    order.paymentDetails = {
      ...order.paymentDetails,
      vnpayTransactionNo: vnp_TransactionNo,
      vnpayAmount: vnp_Amount,
      paidAt: new Date(),
    };
    order.status = "processing";
    await order.save();

    // 📝 Record coupon usage + gửi email — giống confirmPayment
    if (order.couponCode) {
      const coupon = await Coupon.findOne({ code: order.couponCode });
      if (coupon) await coupon.recordUsage(order.user, order._id);
    }

    if (order.customerEmail) {
      try {
        await sendEmail({
          to: order.customerEmail,
          subject: `Payment Confirmed - Order #${order.orderNumber}`,
          template: "payment-confirmed",
          data: { orderNumber: order.orderNumber, amount: order.total, paymentMethod: "VNPay" },
        });
      } catch (emailError) {
        console.error("Failed to send payment confirmation email:", emailError);
      }
    }

    res.redirect(`/order-confirmation/${order.orderNumber}?payment=success`);
  } else {
    // 💡 Payment failed → ghi lý do + redirect với ?payment=failed
    // Frontend hiển thị lỗi dựa trên query param
    order.paymentStatus = "failed";
    order.paymentDetails = {
      ...order.paymentDetails,
      failedAt: new Date(),
      failureReason: `VNPay response code: ${vnp_ResponseCode}`,
    };
    await order.save();
    res.redirect(`/order-confirmation/${order.orderNumber}?payment=failed`);
  }
});

/**
 * @desc    Get payment status
 * @route   GET /api/payments/status/:orderId
 * @access  Private
 */
// 💡 PAYMENT STATUS: Frontend poll endpoint này để check trạng thái
// .select(): Chỉ lấy fields cần thiết → nhẹ response
// 📌 paidAt lấy từ paymentDetails?.paidAt (optional chaining)
export const getPaymentStatus = asyncHandler(async (req, res, next) => {
  // 💡 .select() chỉ lấy 5 fields thay vì toàn bộ order document
  const order = await Order.findById(req.params.orderId).select(
    "orderNumber paymentStatus paymentMethod paymentDetails total"
  );
  if (!order) return next(new AppError("Order not found", 404));

  res.status(200).json({
    success: true,
    data: {
      orderNumber: order.orderNumber,
      paymentStatus: order.paymentStatus,
      paymentMethod: order.paymentMethod,
      amount: order.total,
      paidAt: order.paymentDetails?.paidAt,
    },
  });
});

/**
 * @desc    Request refund
 * @route   POST /api/payments/refund
 * @access  Private
 */
// 💡 REQUEST REFUND: User yêu cầu hoàn tiền
// 🔑 REFUND vs RETURN: Refund = hoàn tiền (chưa giao), Return = trả hàng (sau giao)
// 📌 Business logic: Chỉ refund nếu paid + chưa delivered
// order.refundRequest = {...}: Embedded object thay vì separate collection
export const requestRefund = asyncHandler(async (req, res, next) => {
  const { orderId, reason } = req.body;
  const order = await Order.findById(orderId);
  if (!order) return next(new AppError("Order not found", 404));

  // 📝 Check ownership
  if (order.user && order.user.toString() !== req.user._id.toString()) {
    return next(new AppError("Unauthorized", 403));
  }

  if (order.paymentStatus !== "paid")
    return next(new AppError("Cannot refund an unpaid order", 400));

  // � KHÔNG cho refund đơn đã giao — phải dùng return thay refund
  // 📌 Business rule: delivered/completed → hàng đã giao → cần return process khác
  if (order.status === "delivered" || order.status === "completed") {
    return next(new AppError("Cannot refund a delivered order. Please request a return.", 400));
  }

  // 💡 Embedded refund request: Lưu trực tiếp trong order document
  // status: pending → admin sẽ approve/reject
  order.refundRequest = { requested: true, requestedAt: new Date(), reason, status: "pending" };
  await order.save();

  res.status(200).json({
    success: true,
    message: "Refund request submitted successfully",
    data: {
      orderId: order._id,
      orderNumber: order.orderNumber,
      refundStatus: order.refundRequest.status,
    },
  });
});

/**
 * @desc    Process refund (Admin)
 * @route   POST /api/payments/refund/process
 * @access  Private/Admin
 */
// 💡 PROCESS REFUND: Admin duyệt yêu cầu hoàn tiền
// 🔑 approved (boolean): true = hoàn tiền + cancel order, false = từ chối
// 📌 Spread: ...order.refundRequest giữ data cũ (reason, requestedAt) + thêm mới
// ⚡ THỰC TẾ: Real app cần Stripe refund API: stripe.refunds.create({payment_intent})
export const processRefund = asyncHandler(async (req, res, next) => {
  const { orderId, approved, adminNotes } = req.body;
  const order = await Order.findById(orderId);
  if (!order) return next(new AppError("Order not found", 404));

  // � Kiểm tra order có refund request không
  // ?. optional chaining: nếu refundRequest là undefined → không throw error
  if (!order.refundRequest?.requested) {
    return next(new AppError("No refund request found for this order", 400));
  }

  // 💡 Update refund status + audit trail
  order.refundRequest = {
    ...order.refundRequest, // 💡 Giữ reason, requestedAt cũ
    status: approved ? "approved" : "rejected",
    processedAt: new Date(), // 💡 Khi admin xử lý
    processedBy: req.user._id, // 💡 Admin nào xử lý
    adminNotes, // 💡 Ghi chú của admin
  };
  // 💡 Nếu approved: Cập nhật payment + order status
  if (approved) {
    order.paymentStatus = "refunded"; // 💡 paid → refunded
    order.status = "cancelled"; // 💡 Order bị hủy luôn
  }
  await order.save();

  // 📝 Gửi email thông báo kết quả refund
  if (order.customerEmail) {
    try {
      await sendEmail({
        to: order.customerEmail,
        subject: `Refund ${approved ? "Approved" : "Rejected"} - Order #${order.orderNumber}`,
        template: approved ? "refund-approved" : "refund-rejected",
        data: { orderNumber: order.orderNumber, amount: order.total, adminNotes },
      });
    } catch (emailError) {
      console.error("Failed to send refund email:", emailError);
    }
  }

  res.status(200).json({
    success: true,
    message: `Refund ${approved ? "approved" : "rejected"} successfully`,
    data: { order },
  });
});
```

> 🎯 **PHỎNG VẤN — Payment Controller:**
> - **Q: Tại sao mock payments thay vì integrate thật?**
>   → Development/testing: Không cần API keys, không tốn tiền
>   → Production: Replace mock functions bằng real SDK (stripe, vnpay-lib)
>   → Architecture giữ nguyên: Controller + Route không đổi
> - **Q: `confirmPayment` — tại sao record coupon ở đây thay vì createOrder?**
>   → Payment có thể fail → nếu record coupon trước → user mất lượt dùng
>   → Record SAU KHI payment success = đảm bảo consistency
> - **Q: Webhook vs Client-side confirm — ưu nhược điểm?**
>   → Client-side: Nhanh nhưng dễ hack (user fake "paid" status)
>   → Webhook: Server-to-server, không qua client → secure nhưng phức tạp hơn
>   → Best practice: Luôn verify payment server-side qua webhook
> - **Q: VNPay callback dùng GET — tại sao?**
>   → Browser redirect chỉ dùng GET (không thể POST từ redirect)
>   → Query params chứa response data: vnp_ResponseCode, vnp_TxnRef, etc.
>
> ⚡ **THỰC TẾ**: Payment integration production checklist:
> - Webhook verification (signature check)
> - Idempotency keys (tránh charge 2 lần)
> - PCI DSS compliance (không store card data trên server)
> - Retry logic cho failed webhooks

---

#### G.2.4 Wishlist Controller

**📁 File:** `backend/src/controllers/wishlistController.js`  
**📝 Mô tả:** Quản lý danh sách yêu thích của user

> 💡 **WISHLIST CONTROLLER — Patterns nổi bật:**
>
> - Wishlist là EMBEDDED trong User model (không phải separate collection)
> - 🔑 TẠI SAO embedded? → Mỗi user chỉ có 1 wishlist, ít items → phù hợp embed
> - Toggle pattern: Add nếu chưa có, remove nếu đã có
> - `.filter(item => item.product)`: Loại bỏ items có product đã bị xóa (dangling ref)
> - `$addToSet` vs `$push`: addToSet tránh duplicate, push cho phép duplicate

```javascript
import User from "../models/User.js";
import Product from "../models/Product.js";

/**
 * @desc    Get user's wishlist
 * @route   GET /api/wishlist
 * @access  Private
 */
// 💡 POPULATE NESTED: wishlist.product → Load product data cho mỗi wishlist item
export const getWishlist = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).populate({
      path: "wishlist.product",
      select: "name slug price salePrice images stock category",
    });

    // 💡 .filter(item => item.product): Loại bỏ items mà product đã bị xóa
    // Khi product bị delete → wishlist vẫn có ObjectId → populate = null → filter bỏ
    const wishlistItems = user.wishlist
      .filter((item) => item.product)
      .map((item) => ({ _id: item._id, product: item.product, addedAt: item.addedAt }));

    res
      .status(200)
      .json({ success: true, data: { wishlist: wishlistItems, count: wishlistItems.length } });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Add product to wishlist
 * @route   POST /api/wishlist/:productId
 * @access  Private
 */
// 💡 ADD TO WISHLIST: Thêm sản phẩm vào danh sách yêu thích
// 🔑 findIndex thay vì $addToSet: Kiểm tra duplicate trước khi push
// 📌 .toString(): ObjectId là object → so sánh bằng === cần convert string
export const addToWishlist = async (req, res, next) => {
  try {
    const { productId } = req.params;
    // 💡 Validate product tồn tại trước khi thêm
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });

    const user = await User.findById(req.user._id);
    // 💡 findIndex: Tìm vị trí product trong wishlist array
    // .toString(): Convert ObjectId → string để so sánh
    const existingIndex = user.wishlist.findIndex((item) => item.product.toString() === productId);

    // 💡 > -1 nghĩa là tìm thấy (đã có trong wishlist)
    if (existingIndex > -1) {
      return res.status(400).json({ success: false, message: "Product already in wishlist" });
    }

    // 💡 .push(): Thêm vào cuối array embedded
    // addedAt: Ghi thời điểm thêm để sort "mới thêm trước"
    user.wishlist.push({ product: productId, addedAt: new Date() });
    await user.save();

    res.status(200).json({
      success: true,
      message: "Added to wishlist",
      data: { productId, count: user.wishlist.length },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Remove product from wishlist
 * @route   DELETE /api/wishlist/:productId
 * @access  Private
 */
// 💡 REMOVE FROM WISHLIST: Xóa sản phẩm khỏi danh sách yêu thích
// 🔑 .splice(index, 1): Xóa 1 phần tử tại vị trí index
// 📌 KHÔNG dùng .filter() vì cần mutate array gốc (Mongoose tracked changes)
export const removeFromWishlist = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const user = await User.findById(req.user._id);
    const existingIndex = user.wishlist.findIndex((item) => item.product.toString() === productId);

    if (existingIndex === -1) {
      return res.status(404).json({ success: false, message: "Product not in wishlist" });
    }

    // 💡 .splice(index, 1): Xóa phần tử tại index, Mongoose detect change → save()
    user.wishlist.splice(existingIndex, 1);
    await user.save();

    res.status(200).json({
      success: true,
      message: "Removed from wishlist",
      data: { productId, count: user.wishlist.length },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Toggle product in wishlist
 * @route   POST /api/wishlist/:productId/toggle
 * @access  Private
 */
// 💡 TOGGLE PATTERN: Nhấn lần 1 = thêm, nhấn lần 2 = xóa
// 🔑 TẠI SAO toggle thay vì add/remove riêng?
// → Frontend chỉ cần 1 button (heart icon) — 1 API call
// → Giảm logic phía client: không cần check state trước
// 📌 Response trả isInWishlist boolean để frontend update UI
export const toggleWishlist = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });

    const user = await User.findById(req.user._id);
    const existingIndex = user.wishlist.findIndex((item) => item.product.toString() === productId);

    // 💡 TOGGLE LOGIC: Có rồi → xóa, chưa có → thêm
    let isInWishlist;
    if (existingIndex > -1) {
      user.wishlist.splice(existingIndex, 1); // 💡 Xóa
      isInWishlist = false;
    } else {
      user.wishlist.push({ product: productId, addedAt: new Date() }); // 💡 Thêm
      isInWishlist = true;
    }

    await user.save();
    res.status(200).json({
      success: true,
      message: isInWishlist ? "Added to wishlist" : "Removed from wishlist",
      data: { productId, isInWishlist, count: user.wishlist.length },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Check if product is in wishlist
 * @route   GET /api/wishlist/check/:productId
 * @access  Private
 */
// 💡 CHECK WISHLIST: Frontend gọi khi render product card để hiển heart icon
// 🔑 .some(): Trả boolean (true/false) — không cần tìm full object
// 📌 Nhẹ hơn .find() vì dừng ngay khi tìm thấy match đầu tiên
export const checkWishlist = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    // 💡 .some(): Array method trả true nếu có ít nhất 1 item thỏa điều kiện
    const isInWishlist = user.wishlist.some(
      (item) => item.product.toString() === req.params.productId
    );
    res
      .status(200)
      .json({ success: true, data: { productId: req.params.productId, isInWishlist } });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Clear entire wishlist
 * @route   DELETE /api/wishlist
 * @access  Private
 */
// 💡 CLEAR WISHLIST: Xóa toàn bộ wishlist
// 🔑 Gán [] (empty array) thay vì lặp splice — đơn giản + nhanh hơn
export const clearWishlist = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    user.wishlist = []; // 💡 Reset toàn bộ array
    await user.save();
    res.status(200).json({ success: true, message: "Wishlist cleared", data: { count: 0 } });
  } catch (error) {
    next(error);
  }
};
```

> 🎯 **PHỎNG VẤN — Wishlist Controller:**
>
> - **Q: Tại sao wishlist embedded trong User thay vì separate collection?**
>   → Mỗi user chỉ có 1 wishlist, ít items (10-50) → embedded phù hợp
>   → Separate collection chỉ cần khi wishlist > 1000 items hoặc cần complex queries
> - **Q: `.findIndex()` vs `.indexOf()`?**
>   → `indexOf` so sánh by reference (ObjectId ≠ string) → dùng `findIndex` với custom comparator
> - **Q: Toggle pattern ưu điểm gì?**
>   → 1 API call thay vì 2 (add + remove) → giảm network requests
>   → Frontend chỉ cần 1 handler cho button → code gọn hơn
>
> ⚡ **THỰC TẾ**: Optimistic Updates trong frontend:
>
> - Toggle UI ngay lập tức → gọi API → rollback nếu fail
> - User không phải chờ API response → UX mượt mà hơn
> - Xem `useWishlist` hook ở phần G.5.1 để thấy pattern này

---

#### G.2.5 Inventory Controller

**📁 File:** `backend/src/controllers/inventoryController.js`  
**📝 Mô tả:** Quản lý tồn kho, cảnh báo hết hàng, bulk update, stock history  
**📝 Lưu ý:** Controller này dùng tiếng Việt cho error messages + console.error trong mỗi catch block

> 💡 **INVENTORY CONTROLLER — Patterns nổi bật:**
>
> - **Error messages tiếng Việt**: Bản này dùng tiếng Việt cho error responses
> - **Try/catch thay vì asyncHandler**: Mỗi function tự try/catch + console.error
> - **Audit trail**: stockHistory array ghi lại mọi thay đổi stock
> - **Bulk operations**: for loop tuần tự với partial success tracking
> - **Aggregate pipeline**: getInventoryReport dùng $group, $cond, $multiply
>
> 🎯 **PHỏNG VẤN**: "Tại sao Inventory tách riêng thành controller?"
> → Separation of Concerns: Product = CRUD thông tin SP, Inventory = quản lý số lượng
> → Admin nhập hàng/xuất hàng không cần sửa product info
> → Real app: Inventory là microservice riêng với warehouse management
>
> ⚡ **THỰC TẾ**: E-commerce lớn dùng:
>
> - **Warehouse Management System (WMS)**: Quản lý nhiều kho
> - **SKU-level tracking**: Mỗi variant (size/color) có stock riêng
> - **Reserved stock**: Tạm giữ stock khi user đang checkout
> - **Event sourcing**: Ghi lại mọi event thay đổi stock

```javascript
import Product from "../models/Product.js";
import { sendEmail } from "../utils/emailService.js";

// 📝 Tất cả error messages dùng tiếng Việt, mỗi catch có console.error

/** @desc Get inventory alerts - GET /api/inventory/alerts */
// 💡 INVENTORY ALERTS: Lấy danh sách SP sắp hết/hết hàng
// 🔑 lowStockThreshold = 10: Default threshold, frontend có thể truyền query param
// 📌 outOfStockOnly: Filter chỉ SP hết hàng (stock = 0)
// Response phân loại: outOfStock (stock=0) vs lowStock (0 < stock ≤ threshold)
export const getInventoryAlerts = async (req, res) => {
  try {
    // 💡 Destructure với default values từ query string
    const { lowStockThreshold = 10, outOfStockOnly = false } = req.query;
    const query = { isActive: true }; // 💡 Chỉ SP đang active

    // 💡 outOfStockOnly là string từ query ("true"/"false")
    // 🔑 So sánh === "true" (string) chứ không phải boolean
    if (outOfStockOnly === "true") query.stock = 0;
    else query.stock = { $lte: parseInt(lowStockThreshold) }; // 💡 $lte: ≤ threshold

    const products = await Product.find(query)
      .sort({ stock: 1 })
      .select("name sku stock price category images");
    // 💡 Phân loại kết quả: outOfStock vs lowStock
    // .filter() trên JS array (không phải MongoDB query)
    const outOfStock = products.filter((p) => p.stock === 0);
    const lowStock = products.filter((p) => p.stock > 0);

    res.json({
      success: true,
      data: {
        outOfStock: { count: outOfStock.length, products: outOfStock },
        lowStock: { count: lowStock.length, products: lowStock, threshold: parseInt(lowStockThreshold) },
        totalAlerts: products.length,
      },
    });
  } catch (error) {
    console.error("Inventory alerts error:", error);
    res.status(500).json({ success: false, message: "Không thể lấy cảnh báo tồn kho" });
  }
};

/** @desc Bulk update stock - PUT /api/inventory/bulk-update */
// 💡 BULK UPDATE: Cập nhật stock nhiều SP cùng lúc
// 🔑 PARTIAL SUCCESS: Không phải all-or-nothing — mỗi item xử lý độc lập
// results.success[] và results.failed[] → frontend biết item nào thành công/thất bại
// 📌 stockHistory: Audit trail — ghi lại oldStock, newStock, reason, ai sửa, khi nào
// ⚡ THỰC TẾ: Real app dùng bulkWrite() cho performance tốt hơn
export const bulkUpdateStock = async (req, res) => {
  try {
    const { updates } = req.body;
    // 💡 Validate input: phải là array và không rỗng
    if (!Array.isArray(updates) || updates.length === 0) {
      return res.status(400).json({ success: false, message: "Danh sách cập nhật không hợp lệ" });
    }

    // 💡 PARTIAL SUCCESS PATTERN: Track từng item
    const results = { success: [], failed: [] };

    // 💡 for...of: Tuần tự (không dùng Promise.all để tránh race condition trên stock)
    for (const update of updates) {
      try {
        const { productId, stock, reason } = update;
        // 💡 Validate từng item: productId bắt buộc, stock >= 0
        if (!productId || stock === undefined || stock < 0) {
          results.failed.push({ productId, error: "Dữ liệu không hợp lệ" });
          continue; // 💡 continue: Bỏ qua item này, tiếp tục vòng lặp
        }

        const product = await Product.findById(productId);
        if (!product) {
          results.failed.push({ productId, error: "Không tìm thấy sản phẩm" });
          continue;
        }

        // 💡 AUDIT TRAIL: Ghi lại lịch sử thay đổi stock
        const oldStock = product.stock;
        product.stock = stock;
        if (!product.stockHistory) product.stockHistory = []; // 💡 Init nếu chưa có
        product.stockHistory.push({
          oldStock, newStock: stock, reason: reason || "Bulk update",
          updatedBy: req.user._id, updatedAt: new Date(), // 💡 Ai sửa + khi nào
        });

        await product.save();
        results.success.push({ productId, name: product.name, oldStock, newStock: stock });
      } catch (err) {
        results.failed.push({ productId: update.productId, error: err.message });
      }
    }

    res.json({
      success: true,
      message: `Đã cập nhật ${results.success.length}/${updates.length} sản phẩm`,
      data: results,
    });
  } catch (error) {
    console.error("Bulk update stock error:", error);
    res.status(500).json({ success: false, message: "Không thể cập nhật tồn kho hàng loạt" });
  }
};

/** @desc Adjust stock (+/-) - PUT /api/inventory/:productId/adjust */
// 💡 ADJUST STOCK: Tăng/giảm stock theo số lượng (không phải set tuyệt đối)
// 🔑 adjustment = +5 (nhập hàng) hoặc -3 (xuất hàng)
// 📌 TẠI SAO adjust thay vì set?
// → Concurrent: 2 admin cùng sửa — set(10) + set(20) = mất data
// → Adjust: +5 và -3 dù thứ tự nào cũng đúng (ưu tiên dùng $inc atomically)
// ⚡ THỰC TẾ: Dùng findOneAndUpdate với $inc cho atomic operation
export const adjustStock = async (req, res) => {
  try {
    const { adjustment, reason } = req.body;
    // 💡 Validate: adjustment không được = 0 (vô nghĩa)
    if (adjustment === undefined || adjustment === 0) {
      return res.status(400).json({ success: false, message: "Số lượng điều chỉnh không hợp lệ" });
    }

    const product = await Product.findById(req.params.productId);
    if (!product) return res.status(404).json({ success: false, message: "Không tìm thấy sản phẩm" });

    const oldStock = product.stock;
    const newStock = oldStock + adjustment; // 💡 Cộng/trừ dựa vào dấu của adjustment

    // 💡 Không cho stock âm
    if (newStock < 0) {
      return res.status(400).json({
        success: false,
        message: `Không thể giảm ${Math.abs(adjustment)} sản phẩm. Tồn kho hiện tại: ${oldStock}`,
        // 💡 Math.abs(): Lấy giá trị tuyệt đối cho message dễ đọc
      });
    }

    product.stock = newStock;
    if (!product.stockHistory) product.stockHistory = [];
    product.stockHistory.push({
      oldStock, newStock, adjustment,
      // 💡 Default reason: "Nhập hàng" (adjustment > 0) hoặc "Xuất hàng" (< 0)
      reason: reason || (adjustment > 0 ? "Nhập hàng" : "Xuất hàng"),
      updatedBy: req.user._id, updatedAt: new Date(),
    });

    await product.save();
    // 📝 Response có thêm name so với guide cũ
    res.json({
      success: true,
      message: adjustment > 0 ? "Đã nhập thêm hàng" : "Đã xuất hàng",
      data: { productId: product._id, name: product.name, oldStock, adjustment, newStock },
    });
  } catch (error) {
    console.error("Adjust stock error:", error);
    res.status(500).json({ success: false, message: "Không thể điều chỉnh tồn kho" });
  }
};

/** @desc Get stock history - GET /api/inventory/:productId/history */
// 💡 STOCK HISTORY: Lấy lịch sử thay đổi tồn kho của 1 SP
// 📌 populate + sort + slice: 3 bước xử lý data
// 🔑 Sort mới nhất trước + giới hạn 50 records (tránh response quá lớn)
export const getStockHistory = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId)
      .select("name sku stock stockHistory") // 💡 Chỉ lấy fields cần
      // 📝 populate "name email" (KHÔNG phải "firstName lastName") → match User model
      .populate("stockHistory.updatedBy", "name email");
    if (!product) return res.status(404).json({ success: false, message: "Không tìm thấy sản phẩm" });

    // � Sort mới nhất trước + giới hạn 50 records (pagination cơ bản)
    // .sort(): Compare dates — b - a = descending (mới trước)
    const history = (product.stockHistory || [])
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      .slice(0, 50); // 💡 .slice(0, 50): Lấy 50 entries đầu

    res.json({
      success: true,
      data: {
        // 📝 Có thêm id: product._id
        product: { id: product._id, name: product.name, sku: product.sku, currentStock: product.stock },
        history,
      },
    });
  } catch (error) {
    console.error("Get stock history error:", error);
    res.status(500).json({ success: false, message: "Không thể lấy lịch sử tồn kho" });
  }
};

/** @desc Get inventory report - GET /api/inventory/report */
// � INVENTORY REPORT: Báo cáo tồn kho theo category + tổng hợp
// 📝 Chạy byCategory trước, rồi summary riêng — KHÔNG dùng Promise.all
// 📝 Hỗ trợ filter theo category query param
// 📝 byCategory KHÔNG có avgRating, sort theo totalValue (không phải totalProducts)
// 🔑 2 AGGREGATE PIPELINES:
//   1. byCategory: $group by category + computed fields
//   2. summary: $group _id: null (gộp tất cả)
// 📌 $cond: MongoDB IF-THEN-ELSE inside aggregate
// $multiply: Tính totalValue = stock * price
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
          outOfStock: { $sum: { $cond: [{ $eq: ["$stock", 0] }, 1, 0] } },
          lowStock: {
            $sum: { $cond: [{ $and: [{ $gt: ["$stock", 0] }, { $lte: ["$stock", 10] }] }, 1, 0] },
          },
        },
      },
      { $sort: { totalValue: -1 } },
    ]);

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
        summary: summary[0] || { totalProducts: 0, totalStock: 0, totalValue: 0, outOfStock: 0, lowStock: 0 },
        byCategory: report,
        generatedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Inventory report error:", error);
    res.status(500).json({ success: false, message: "Không thể tạo báo cáo tồn kho" });
  }
};

/** @desc Send low stock alerts email - POST /api/inventory/send-alerts */
// � SEND ALERTS: Gửi email cảnh báo hết hàng cho admin
// 📝 Gửi HTML email hoàn chỉnh (styled tables) thay vì plain text
// 🔑 Template literal + .map().join("") để tạo HTML table rows
// 📌 recipientEmail: Dùng email từ body hoặc default = admin's email
// ⚡ THỰC TẾ: Real app dùng email template engine (Handlebars, EJS)
// và schedule (cron job mỗi sáng) thay vì manual trigger
export const sendLowStockAlerts = async (req, res) => {
  try {
    const { threshold = 10, email } = req.body;
    const recipientEmail = email || req.user.email;

    const lowStockProducts = await Product.find({ stock: { $lte: threshold }, isActive: true })
      .sort({ stock: 1 })
      .select("name sku stock category");

    if (lowStockProducts.length === 0) {
      return res.json({ success: true, message: "Không có sản phẩm nào sắp hết hàng" });
    }

    const outOfStock = lowStockProducts.filter((p) => p.stock === 0);
    const lowStock = lowStockProducts.filter((p) => p.stock > 0);

    // 📝 HTML email đầy đủ với styled tables, phân biệt out-of-stock vs low-stock
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
    <div class="header"><h1>⚠️ Inventory Alert</h1></div>
    <div class="content">
      ${outOfStock.length > 0 ? `
      <div class="alert alert-danger"><strong>🔴 Out of Stock: ${outOfStock.length} products</strong></div>
      <table>
        <tr><th>Product</th><th>SKU</th><th>Category</th></tr>
        ${outOfStock.map((p) => \`<tr><td>\${p.name}</td><td>\${p.sku || "N/A"}</td><td>\${p.category}</td></tr>\`).join("")}
      </table>` : ""}
      ${lowStock.length > 0 ? `
      <div class="alert alert-warning"><strong>🟡 Low Stock: ${lowStock.length} products (≤ ${threshold} units)</strong></div>
      <table>
        <tr><th>Product</th><th>SKU</th><th>Stock</th><th>Category</th></tr>
        ${lowStock.map((p) => \`<tr><td>\${p.name}</td><td>\${p.sku || "N/A"}</td><td>\${p.stock}</td><td>\${p.category}</td></tr>\`).join("")}
      </table>` : ""}
      <p>Please restock these items as soon as possible.</p>
    </div>
    <div class="footer">
      <p>Generated at \${new Date().toLocaleString()}</p>
      <p>&copy; \${new Date().getFullYear()} Fashion Store Admin</p>
    </div>
  </div>
</body>
</html>`;

    await sendEmail({
      to: recipientEmail,
      subject: \`🚨 Inventory Alert: \${lowStockProducts.length} products need attention\`,
      html,
      text: \`Inventory Alert: \${outOfStock.length} out of stock, \${lowStock.length} low stock products\`,
    });

    res.json({
      success: true,
      message: \`Đã gửi cảnh báo tồn kho đến \${recipientEmail}\`,
      data: { outOfStock: outOfStock.length, lowStock: lowStock.length, threshold },
    });
  } catch (error) {
    console.error("Send low stock alerts error:", error);
    res.status(500).json({ success: false, message: "Không thể gửi cảnh báo tồn kho" });
  }
};

// 📝 Default export — xuất tất cả functions
// 💡 Named exports (ở trên) + Default export (object) → import linh hoạt
// import { adjustStock } from '...'  HOẶC  import inventoryController from '...'
export default {
  getInventoryAlerts, bulkUpdateStock, adjustStock, getStockHistory, getInventoryReport, sendLowStockAlerts,
};
```

> 🎯 **PHỎNG VẤN — Inventory Controller:**
>
> - **Q: Tại sao bulkUpdateStock dùng for...of thay vì Promise.all?**
>   → Sequential: Tránh race condition nếu 2 items cùng update 1 product
>   → Partial success: Track từng item → frontend biết item nào fail
>   → Real app: Dùng `bulkWrite()` hoặc transaction cho atomicity
> - **Q: adjust (+/-) vs set (absolute) — khi nào dùng gì?**
>   → Adjust: Nhập/xuất hàng hàng ngày → concurrent safe
>   → Set: Admin muốn sửa sai số liệu → cần audit reason bắt buộc
> - **Q: aggregation pipeline trong getInventoryReport dùng gì đặc biệt?**
>   → `$cond`: IF-THEN-ELSE trong aggregate (đếm outOfStock, lowStock)
>   → `$multiply`: Tính totalValue = stock × price
>   → 2 pipelines độc lập: byCategory + summary (không nest $group)
>
> ⚡ **THỰC TẾ**: Inventory management patterns:
>
> - **Cron jobs**: Tự động gửi alerts mỗi sáng (không chờ admin click)
> - **Reserved stock**: Tạm giữ stock khi user checkout (15 phút)
> - **Multi-warehouse**: Mỗi kho có stock riêng → location-based fulfillment)

---

### G.3 Backend - Routes

> 💡 **ROUTES — Tổng quan:**
>
> - Routes là **điểm vào** của API — map URL + HTTP method → controller function
> - **Middleware chain**: `protect` (auth) → `adminOnly` (role) → controller
> - **Router-level middleware**: `router.use(protect)` = áp dụng cho TẤT CẢ routes bên dưới
> - **Route chaining**: `.route("/").get(...).post(...)` = gộp cùng path
> - **Param routes**: `/:id`, `/:productId` — dynamic segments

#### G.3.1 Main Routes Index

**📁 File:** `backend/src/routes/index.js`  
**📝 Mô tả:** File tổng hợp tất cả routes

> 💡 **ROUTE MOUNTING**: Mỗi router.use() mount sub-router vào prefix
> Ví dụ: `router.use("/auth", authRoutes)` → `/api/auth/login`, `/api/auth/register`
> 🔑 TẠI SAO tách files? → Mỗi module có route riêng → dễ maintain + team thêm feature
> 📌 Health check: Endpoint đơn giản để monitoring tools (AWS, Docker) check server sống

```javascript
import express from "express";
import authRoutes from "./authRoutes.js";
import productRoutes from "./productRoutes.js";
import cartRoutes from "./cartRoutes.js";
import profileRoutes from "./profileRoutes.js";
import orderRoutes from "./orderRoutes.js";
import checkoutRoutes from "./checkoutRoutes.js";
import wishlistRoutes from "./wishlistRoutes.js";
import reviewRoutes from "./reviewRoutes.js";
import couponRoutes from "./couponRoutes.js";
import paymentRoutes from "./paymentRoutes.js";
import adminRoutes from "./adminRoutes.js";
import inventoryRoutes from "./inventoryRoutes.js";

const router = express.Router();

// Mount routes
router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/profile", profileRoutes);
router.use("/orders", orderRoutes);
router.use("/checkout", checkoutRoutes);
router.use("/wishlist", wishlistRoutes);
router.use("/reviews", reviewRoutes);
router.use("/coupons", couponRoutes);
router.use("/payments", paymentRoutes);
router.use("/admin", adminRoutes);
router.use("/inventory", inventoryRoutes);

// Health check
router.get("/health", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "API is healthy", timestamp: new Date().toISOString() });
});

export default router;
```

---

#### G.3.2 Wishlist Routes

**📁 File:** `backend/src/routes/wishlistRoutes.js`

> 💡 `router.use(protect)`: TẤT CẢ wishlist routes yêu cầu đăng nhập
> 🔑 Thứ tự routes quan trọng: `/check/:productId` phải trước `/:productId`
> → Nếu không, Express match "check" như productId!

```javascript
import express from "express";
import { protect } from "../middleware/auth.js";
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
  checkWishlist,
  clearWishlist,
} from "../controllers/wishlistController.js";

const router = express.Router();
router.use(protect); // All wishlist routes require auth

router.get("/", getWishlist);
router.delete("/", clearWishlist);
router.get("/check/:productId", checkWishlist);
router.post("/:productId", addToWishlist);
router.delete("/:productId", removeFromWishlist);
router.post("/:productId/toggle", toggleWishlist);

export default router;
```

---

#### G.3.3 Review Routes

**📁 File:** `backend/src/routes/reviewRoutes.js`

> 💡 **MIXED ACCESS LEVELS**:
>
> - Public: `getProductReviews` (ai cũng xem được reviews)
> - Protected: CRUD reviews (cần đăng nhập)
> - Admin: approve/reject/reply (cần admin role)
>   🔑 KHÔNG dùng `router.use(protect)` vì có public routes

```javascript
import express from "express";
import { protect, adminOnly } from "../middleware/auth.js";
import {
  getProductReviews,
  createReview,
  updateReview,
  deleteReview,
  voteHelpful,
  getMyReviews,
  canReviewProduct,
  getAllReviews,
  approveReview,
  rejectReview,
  replyToReview,
} from "../controllers/reviewController.js";

const router = express.Router();

// Public
router.get("/product/:productId", getProductReviews);

// Protected
router.get("/my-reviews", protect, getMyReviews);
router.get("/can-review/:productId", protect, canReviewProduct);
router.post("/", protect, createReview);
router.put("/:id", protect, updateReview);
router.delete("/:id", protect, deleteReview);
router.post("/:id/helpful", protect, voteHelpful);

// Admin
router.get("/admin/all", protect, adminOnly, getAllReviews);
router.patch("/:id/approve", protect, adminOnly, approveReview);
router.patch("/:id/reject", protect, adminOnly, rejectReview);
router.post("/:id/reply", protect, adminOnly, replyToReview);

export default router;
```

---

#### G.3.4 Coupon Routes

**📁 File:** `backend/src/routes/couponRoutes.js`

> 💡 **3 ACCESS LEVELS**:
>
> - `optionalAuth`: validate coupon (guest + user)
> - `protect`: get available coupons (user only)
> - `protect + adminOnly`: CRUD coupons (admin only)
>   📌 `.route("/")`: Gộp GET + POST cùng path "/" vào 1 chain

```javascript
import express from "express";
import { protect, optionalAuth, adminOnly } from "../middleware/auth.js";
import {
  validateCoupon,
  getAvailableCoupons,
  createCoupon,
  getAllCoupons,
  getCoupon,
  updateCoupon,
  deleteCoupon,
  toggleCouponStatus,
  getCouponStats,
} from "../controllers/couponController.js";

const router = express.Router();

// User routes
router.post("/validate", optionalAuth, validateCoupon);
router.get("/available", protect, getAvailableCoupons);

// Admin CRUD
router.route("/").get(protect, adminOnly, getAllCoupons).post(protect, adminOnly, createCoupon);
router
  .route("/:id")
  .get(protect, adminOnly, getCoupon)
  .put(protect, adminOnly, updateCoupon)
  .delete(protect, adminOnly, deleteCoupon);
router.patch("/:id/toggle", protect, adminOnly, toggleCouponStatus);
router.get("/:id/stats", protect, adminOnly, getCouponStats);

export default router;
```

---

#### G.3.5 Payment Routes

**📁 File:** `backend/src/routes/paymentRoutes.js`

> 💡 **PAYMENT ROUTES — Access levels:**
>
> - Public: `getPaymentMethods`, `vnpayCallback` (gateway gọi về)
> - `optionalAuth`: create-intent, confirm, COD, bank-transfer (guest + user)
> - `protect`: requestRefund (chỉ user đăng nhập)
> - `protect + adminOnly`: verify-transfer, processRefund
>   🔑 VNPay callback là GET (không phải POST) vì browser redirect

```javascript
import express from "express";
import { protect, optionalAuth, adminOnly } from "../middleware/auth.js";
import {
  getPaymentMethods,
  createPaymentIntent,
  confirmPayment,
  processCOD,
  processBankTransfer,
  verifyBankTransfer,
  createVNPayPayment,
  vnpayCallback,
  getPaymentStatus,
  requestRefund,
  processRefund,
} from "../controllers/paymentController.js";

const router = express.Router();

// Public
router.get("/methods", getPaymentMethods);
router.get("/vnpay/callback", vnpayCallback);

// Protected
router.post("/create-intent", optionalAuth, createPaymentIntent);
router.post("/confirm", optionalAuth, confirmPayment);
router.post("/cod", optionalAuth, processCOD);
router.post("/bank-transfer", optionalAuth, processBankTransfer);
router.post("/vnpay/create", optionalAuth, createVNPayPayment);
router.get("/status/:orderId", optionalAuth, getPaymentStatus);
router.post("/refund", protect, requestRefund);

// Admin
router.post("/verify-transfer", protect, adminOnly, verifyBankTransfer);
router.post("/refund/process", protect, adminOnly, processRefund);

export default router;
```

---

#### G.3.6 Admin Routes

**📁 File:** `backend/src/routes/adminRoutes.js`

```javascript
import express from "express";
import {
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
} from "../controllers/adminController.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();
router.use(protect, adminOnly); // All admin routes

// Dashboard
router.get("/dashboard", getDashboardOverview);
router.get("/revenue-stats", getRevenueStats);
router.get("/top-products", getTopProducts);
router.get("/category-stats", getCategoryStats);
router.get("/user-stats", getUserStats);
router.get("/low-stock", getLowStockProducts);

// Order Management
router.get("/orders", getAllOrders);
router.get("/recent-orders", getRecentOrders);
router.put("/orders/:id/status", updateOrderStatus);

// User Management
router.get("/users", getAllUsers);
router.put("/users/:id/role", updateUserRole);

// Inventory
router.put("/products/:id/stock", updateProductStock);

export default router;
```

---

#### G.3.7 Inventory Routes

**📁 File:** `backend/src/routes/inventoryRoutes.js`

> 💡 `router.use(protect, adminOnly)`: Tất cả inventory routes chỉ admin
> 🔑 Thứ tự: static routes (`/alerts`, `/report`) trước dynamic (`/:productId/...`)
> → Tránh Express match "alerts" làm productId

```javascript
import express from "express";
import {
  getInventoryAlerts,
  bulkUpdateStock,
  adjustStock,
  getStockHistory,
  getInventoryReport,
  sendLowStockAlerts,
} from "../controllers/inventoryController.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();
router.use(protect, adminOnly);

router.get("/alerts", getInventoryAlerts);
router.get("/report", getInventoryReport);
router.post("/send-alerts", sendLowStockAlerts);
router.put("/bulk-update", bulkUpdateStock);
router.put("/:productId/adjust", adjustStock);
router.get("/:productId/history", getStockHistory);

export default router;
```

---

### G.4 Frontend - Services

> 💡 **SERVICE LAYER PATTERN**: Tất cả API calls được gói trong service files
>
> - Component KHÔNG gọi `axios.get()` trực tiếp → gọi `wishlistService.getWishlist()`
> - 🔑 TẠI SAO? → Thay đổi API URL/structure chỉ sửa 1 file
> - Centralized error handling, auth headers (trong `api` instance)
> - ⚡ THỰC TẾ: Real app thường dùng React Query / SWR bọc ngoài services

#### G.4.1 Wishlist Service

**📁 File:** `frontend/src/services/wishlistService.js`  
**📝 Mô tả:** API calls cho wishlist

> 💡 Mỗi function: Gọi API endpoint tương ứng + return `response.data`
> 🔑 `api` là Axios instance đã config baseURL + auth interceptors
> 📌 Template literals cho dynamic paths: `` `/wishlist/${productId}` ``

```javascript
import api from "./api";

const wishlistService = {
  async getWishlist() {
    const response = await api.get("/wishlist");
    return response.data;
  },

  async addToWishlist(productId) {
    const response = await api.post(`/wishlist/${productId}`);
    return response.data;
  },

  async removeFromWishlist(productId) {
    const response = await api.delete(`/wishlist/${productId}`);
    return response.data;
  },

  async toggleWishlist(productId) {
    const response = await api.post(`/wishlist/${productId}/toggle`);
    return response.data;
  },

  async checkWishlist(productId) {
    const response = await api.get(`/wishlist/check/${productId}`);
    return response.data;
  },

  async clearWishlist() {
    const response = await api.delete("/wishlist");
    return response.data;
  },
};

export default wishlistService;
```

---

#### G.4.2 Checkout Service

**📁 File:** `frontend/src/services/checkoutService.js`

> 💡 **CHECKOUT FLOW**: Multi-step process
>
> 1. `initialize()` → Tạo checkout session
> 2. `getShippingRates()` → Lấy giá ship
> 3. `calculateTax()` → Tính thuế
> 4. `validateCoupon()` → Kiểm tra mã giảm giá
> 5. `completeOrder()` → Hoàn tất đặt hàng
>    📌 `response.data.data`: Backend trả `{ success, data: { ... } }` → unwrap 2 lần

```javascript
import api from "./api";

const checkoutService = {
  async initialize() {
    const response = await api.post("/checkout/initialize");
    return response.data.data;
  },

  async getShippingRates(shippingAddress, subtotal) {
    const response = await api.post("/checkout/shipping-rates", { shippingAddress, subtotal });
    return response.data.data;
  },

  async calculateTax(subtotal) {
    const response = await api.post("/checkout/calculate-tax", { subtotal });
    return response.data.data;
  },

  async validateCoupon(code, subtotal) {
    const response = await api.post("/checkout/validate-coupon", { code, subtotal });
    return response.data.data;
  },

  async completeOrder(orderData) {
    const response = await api.post("/checkout/complete", orderData);
    return response.data.data;
  },

  async getOrderConfirmation(orderNumber, email) {
    const response = await api.get(`/checkout/order/${orderNumber}`, {
      params: email ? { email } : {},
    });
    return response.data.data.order;
  },
};

export default checkoutService;
```

---

#### G.4.3 Order Service

**📁 File:** `frontend/src/services/orderService.js`

> 💡 `params`: Axios tự động convert object → query string
> Ví dụ: `{ page: 2, limit: 10 }` → `?page=2&limit=10`
> 🔑 `trackOrder(orderNumber, email)`: Guest tracking không cần auth

```javascript
import api from "./api";

const orderService = {
  async getOrders(params = {}) {
    const response = await api.get("/orders", { params });
    return response.data.data;
  },

  async getOrderById(orderId) {
    const response = await api.get(`/orders/${orderId}`);
    return response.data.data.order;
  },

  async trackOrder(orderNumber, email) {
    const response = await api.get(`/orders/track/${orderNumber}`, { params: { email } });
    return response.data.data.order;
  },

  async cancelOrder(orderId, reason) {
    const response = await api.post(`/orders/${orderId}/cancel`, { reason });
    return response.data.data.order;
  },

  async requestReturn(orderId, returnData) {
    const response = await api.post(`/orders/${orderId}/return`, returnData);
    return response.data.data;
  },
};

export default orderService;
```

---

### G.5 Frontend - Hooks

> 💡 **CUSTOM HOOKS**: Tách logic ra khỏi component → reusable + testable
>
> - useState + useCallback + useEffect → state management logic
> - Hook return object với data + actions + status flags
> - Component chỉ cần: `const { wishlist, toggleWishlist } = useWishlist()`

#### G.5.1 useWishlist Hook

**📁 File:** `frontend/src/hooks/useWishlist.js`  
**📝 Mô tả:** Custom hook quản lý wishlist với optimistic updates

> 💡 **OPTIMISTIC UPDATE PATTERN** — Pattern quan trọng nhất trong hook này:
>
> 1. Update UI ngay lập tức (giả định thành công)
> 2. Gọi API trong background
> 3. Nếu API fail → ROLLBACK UI về trạng thái cũ
>
> 🔑 TẠI SAO optimistic? → User không phải chờ API response (100-500ms)
> → Heart icon chuyển màu ngay khi click → UX mượt mà như native app
>
> 🎯 **PHỏNG VẤN**: "useCallback là gì? Tại sao cần?"
> → Memoize function → không tạo lại mỗi render
> → Khi truyền vào child component qua props → tránh re-render không cần thiết
> → Dependencies: [isAuthenticated] = chỉ tạo lại khi auth state thay đổi

```javascript
import { useState, useCallback, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import wishlistService from "../services/wishlistService";

export function useWishlist() {
  const { isAuthenticated, user } = useAuth();
  const [wishlist, setWishlist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isToggling, setIsToggling] = useState(false);
  const [error, setError] = useState(null);

  const fetchWishlist = useCallback(async () => {
    if (!isAuthenticated) {
      setWishlist([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await wishlistService.getWishlist();
      if (response.success) {
        setWishlist(response.data.wishlist || response.data.items || []);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load wishlist");
      setWishlist([]);
    } finally {
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist, user]);

  const isInWishlist = useCallback(
    (productId) => {
      return wishlist.some((item) => {
        const itemProductId = item.product?._id || item.product || item._id;
        return itemProductId === productId;
      });
    },
    [wishlist]
  );

  const toggleWishlist = useCallback(
    async (productId) => {
      if (!isAuthenticated) return { success: false, error: "Authentication required" };

      setIsToggling(true);
      setError(null);

      // Optimistic update
      const wasInWishlist = isInWishlist(productId);
      if (wasInWishlist) {
        setWishlist((prev) =>
          prev.filter((item) => (item.product?._id || item.product || item._id) !== productId)
        );
      } else {
        setWishlist((prev) => [...prev, { product: productId, addedAt: new Date() }]);
      }

      try {
        const response = await wishlistService.toggleWishlist(productId);
        if (response.success) {
          return { success: true, action: response.data.isInWishlist ? "added" : "removed" };
        }
        return { success: false, error: response.message };
      } catch (err) {
        // Revert on error
        if (wasInWishlist) {
          setWishlist((prev) => [...prev, { product: productId, addedAt: new Date() }]);
        } else {
          setWishlist((prev) =>
            prev.filter((item) => (item.product?._id || item.product || item._id) !== productId)
          );
        }
        return {
          success: false,
          error: err.response?.data?.message || "Failed to update wishlist",
        };
      } finally {
        setIsToggling(false);
      }
    },
    [isAuthenticated, isInWishlist]
  );

  const clearWishlist = useCallback(async () => {
    try {
      await wishlistService.clearWishlist();
      setWishlist([]);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.response?.data?.message };
    }
  }, []);

  return {
    wishlist,
    wishlistCount: wishlist.length,
    isLoading,
    isToggling,
    error,
    isInWishlist,
    toggleWishlist,
    clearWishlist,
    refetch: fetchWishlist,
  };
}
```

---

### G.6 Frontend - Pages

> 💡 **PAGE COMPONENTS**: Kết hợp hooks + services + UI components
>
> - Import hooks để lấy data + actions
> - Conditional rendering: Loading / Empty / Authenticated / Data
> - CSS Modules: `styles.wishlist` — scoped CSS không conflict

#### G.6.1 Wishlist Page

**📁 File:** `frontend/src/pages/Wishlist.jsx`  
**📝 Mô tả:** Trang hiển thị wishlist của user

> 💡 **CONDITIONAL RENDERING 4 states:**
>
> 1. `!isAuthenticated` → Hiển "Please Log In" với Link to /login
> 2. `isLoading` → Hiển Loading Spinner
> 3. `wishlistCount === 0` → Hiển Empty State với Link to /products
> 4. `wishlistCount > 0` → Hiển Product Grid
>
> 🔑 `products.map().filter(Boolean)`:
>
> - `.map()` extract product object từ wishlist item
> - `.filter(Boolean)` loại bỏ null (product đã bị xóa)
>   📌 `window.confirm()`: Native browser dialog — simple UX

```jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../hooks/useWishlist";
import { useAuth } from "../context/AuthContext";
import ProductCard from "../components/products/ProductCard";
import LoadingSpinner from "../components/common/LoadingSpinner";
import styles from "./Wishlist.module.css";

const Wishlist = () => {
  const { isAuthenticated } = useAuth();
  const { wishlist, isLoading, error, clearWishlist, wishlistCount } = useWishlist();
  const [isClearing, setIsClearing] = useState(false);

  const handleClearWishlist = async () => {
    if (!window.confirm("Are you sure you want to clear your entire wishlist?")) return;
    setIsClearing(true);
    await clearWishlist();
    setIsClearing(false);
  };

  const products = wishlist
    .map((item) => (item.product && typeof item.product === "object" ? item.product : null))
    .filter(Boolean);

  if (!isAuthenticated) {
    return (
      <div className={styles.wishlist}>
        <div className={styles.container}>
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}>🔐</span>
            <h2>Please Log In</h2>
            <p>You need to be logged in to view your wishlist.</p>
            <Link to="/login" className={styles.loginButton}>
              Log In
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.wishlist}>
        <div className={styles.container}>
          <LoadingSpinner size="large" />
          <p>Loading your wishlist...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wishlist}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>My Wishlist</h1>
            <p className={styles.count}>
              {wishlistCount} {wishlistCount === 1 ? "item" : "items"}
            </p>
          </div>
          {wishlistCount > 0 && (
            <button
              className={styles.clearButton}
              onClick={handleClearWishlist}
              disabled={isClearing}
            >
              {isClearing ? "Clearing..." : "Clear Wishlist"}
            </button>
          )}
        </div>

        {wishlistCount === 0 ? (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}>💝</span>
            <h2>Your wishlist is empty</h2>
            <p>Save items you love by clicking the heart icon.</p>
            <Link to="/products" className={styles.browseButton}>
              Browse Products
            </Link>
          </div>
        ) : (
          <div className={styles.productGrid}>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} showWishlistButton={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
```

---

### G.7 Tổng Kết Files Đã Tạo/Cập Nhật

| Loại    | File                                             | Mô tả                           |
| ------- | ------------------------------------------------ | ------------------------------- |
| Model   | `backend/src/models/Review.js`                   | Review & Rating Model           |
| Model   | `backend/src/models/Coupon.js`                   | Coupon Model                    |
| Ctrl    | `backend/src/controllers/reviewController.js`    | Review CRUD + Admin moderation  |
| Ctrl    | `backend/src/controllers/couponController.js`    | Coupon CRUD + validation        |
| Ctrl    | `backend/src/controllers/paymentController.js`   | Payment methods integration     |
| Ctrl    | `backend/src/controllers/wishlistController.js`  | Wishlist management             |
| Ctrl    | `backend/src/controllers/inventoryController.js` | Inventory management            |
| Ctrl    | `backend/src/controllers/adminController.js`     | Admin dashboard                 |
| Routes  | `backend/src/routes/index.js`                    | Main routes index               |
| Routes  | `backend/src/routes/reviewRoutes.js`             | Review routes                   |
| Routes  | `backend/src/routes/couponRoutes.js`             | Coupon routes                   |
| Routes  | `backend/src/routes/paymentRoutes.js`            | Payment routes                  |
| Routes  | `backend/src/routes/wishlistRoutes.js`           | Wishlist routes                 |
| Routes  | `backend/src/routes/adminRoutes.js`              | Admin routes                    |
| Routes  | `backend/src/routes/inventoryRoutes.js`          | Inventory routes                |
| Service | `frontend/src/services/wishlistService.js`       | Wishlist API calls              |
| Service | `frontend/src/services/checkoutService.js`       | Checkout API calls              |
| Service | `frontend/src/services/orderService.js`          | Order API calls                 |
| Hook    | `frontend/src/hooks/useWishlist.js`              | Wishlist hook với optimistic UI |
| Page    | `frontend/src/pages/Wishlist.jsx`                | Wishlist page                   |

---

> 📅 **Cập nhật lần cuối:** 2026-02-02  
> ✅ Tài liệu đã bao gồm toàn bộ source code từ các session phát triển  
> 🎯 Sử dụng làm mẫu giáo án thực hành cho học viên
