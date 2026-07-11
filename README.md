# 💪 FITLiFE - Hệ thống quản lý phòng gym thông minh

<div align="center">

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**🤝 [Đóng Góp](CONTRIBUTING.md)** • **📜 [Changelog](CHANGELOG.md)**

</div>

<div align="center">

[![DEMO](https://img.shields.io/badge/🚀_DEMO-FITLIFE-orange?style=for-the-badge&logo=rocket&logoColor=white&labelColor=4a5568&color=f97316)](https://github.com/HoDuongQuocHuy278/FITLIFE-documents) [![DOCS](https://img.shields.io/badge/📚_DOCS-FITLIFE-blue?style=for-the-badge&logo=book&logoColor=white&labelColor=4a5568&color=3b82f6)](docs/intro.md)

</div>

> _"Kết nối - Quản lý - Phát triển cùng FITLiFE 🏋️"_

## 📖 Tổng Quan

**FITLiFE** là một hệ thống quản lý phòng gym toàn diện được phát triển bởi nhóm sinh viên **Đại học Tài chính – Marketing**. Dự án tích hợp ba nền tảng chính:

🏋️ **Quản lý hội viên** – Đăng ký, theo dõi lịch tập, điểm danh và gói tập.  
👨‍🏫 **Quản lý huấn luyện viên** – Lịch dạy, ghi chú sức khoẻ hội viên, lương thưởng.  
🛡️ **Quản trị hệ thống** – Admin quản lý chi nhánh, gói tập, duyệt lịch và báo cáo.

---

## 👥 Thành Viên Nhóm

| Họ Tên | MSSV | Gmail | SĐT | GitHub |
|--------|------|-------|-----|--------|
| Võ Thị Thái Ngọc | 29209024817 | Vothithaingoc072005@gmail.com | 0935346126 | [vothithaingoc05](https://github.com/vothithaingoc05) |
| Nguyễn Trần Nam Khánh | 29219064936 | khanh2005hs@gmail.com | 0833199092 | [NamKhanh0809](https://github.com/NamKhanh0809) |
| Nguyễn Trần Khánh Huyền | 29201130396 | hnguyentrankhanh44@gmail.com | 0356017805 | [ntkhanhhuyen25-01-2005](https://github.com/ntkhanhhuyen25-01-2005) |
| Trần Xuân Trường | 29214150270 | xuantruong081205@gmail.com | 0813559551 | [xuantruong5](https://github.com/xuantruong5) |
| Nguyễn Nam Hùng | 29219021557 | namhung03022005@gmail.com | 0971120038 | [HungNguyen3205](https://github.com/HungNguyen3205) |
| Hồ Dương Quốc Huy | 29219036559 | huyho2782005@gmail.com | 0775999005 | [HoDuongQuocHuy278](https://github.com/HoDuongQuocHuy278) |

---

## ✨ Các Module Chính

### 1. 📱 Ứng dụng Mobile (React Native – FitLife)

- Dành cho **Huấn luyện viên (Trainer)**
- Đăng nhập, xem & tạo lịch dạy
- Điểm danh hội viên, ghi chú sức khỏe
- Xem lịch sử thu nhập / lương

### 2. 🖥️ Web Admin (Vue.js – WEB-FITLIFE)

- Dành cho **Admin** quản trị hệ thống
- Quản lý hội viên, huấn luyện viên, chi nhánh
- Quản lý gói tập, lịch tập, hóa đơn
- Báo cáo thống kê & dữ liệu

### 3. ⚙️ Backend API (Laravel – Be-FITLIFE)

- RESTful API chuẩn JSON
- Xác thực bằng **Laravel Sanctum**
- 3 vai trò: **Member**, **Trainer**, **Admin**
- Quản lý: branches, packages, trainer schedules, attendances, reschedules, trainer notes, trainer salaries

---

## 🧱 Kiến Trúc Hệ Thống

### Thành phần và Công nghệ

| Thành phần | Công nghệ |
|---|---|
| **Mobile App** | React Native (TypeScript) |
| **Web Admin** | Vue.js 3 + Vite |
| **Backend API** | Laravel 11 (PHP 8.2+) |
| **Authentication** | Laravel Sanctum (Token-based) |
| **Database** | MySQL / SQLite |
| **API Style** | RESTful JSON API |

---

## 🔗 API Endpoints Chính

### Public Routes (Không cần đăng nhập)
```text
POST   /api/login                  # Đăng nhập hội viên
POST   /api/register               # Đăng ký hội viên
POST   /api/trainer/login          # Đăng nhập huấn luyện viên
POST   /api/admin/login            # Đăng nhập admin
GET    /api/packages               # Xem danh sách gói tập
```

### Member Routes (Token hội viên)
```text
GET    /api/member/profile         # Xem hồ sơ
GET    /api/member/my-schedules    # Lịch tập đã đăng ký
POST   /api/member/register-schedule  # Đăng ký lịch tập
GET    /api/member/my-attendances  # Lịch sử điểm danh
POST   /api/member/reschedules     # Yêu cầu đổi lịch
GET    /api/member/my-notes        # Ghi chú sức khỏe từ HLV
```

### Trainer Routes (Token huấn luyện viên)
```text
GET    /api/trainer/schedules      # Xem lịch dạy
POST   /api/trainer/schedules      # Tạo lịch dạy
POST   /api/trainer/attendances    # Điểm danh
GET    /api/trainer/notes          # Ghi chú hội viên
GET    /api/trainer/my-salary      # Xem lương
```

### Admin Routes (Token admin + Sanctum)
```text
GET    /api/admin/branches         # Quản lý chi nhánh
GET    /api/admin/packages         # Quản lý gói tập
GET    /api/admin/schedules        # Duyệt lịch tập
GET    /api/admin/salaries         # Quản lý lương HLV
```

---

## 🚀 Cài Đặt Hệ Thống

### Yêu cầu hệ thống
- **Node.js** 18+ (React Native & Vue.js)
- **PHP** 8.2+ (Laravel backend)
- **Composer** 2+
- **MySQL** hoặc **SQLite**
- **XAMPP** (hoặc tương đương cho local)

### Cài đặt Backend (Be-FITLIFE)

```bash
# Di chuyển vào thư mục backend
cd Be-FITLIFE

# Cài đặt PHP dependencies
composer install

# Sao chép file môi trường
cp .env.example .env

# Tạo app key
php artisan key:generate

# Chạy migrations
php artisan migrate

# (Tuỳ chọn) Seed dữ liệu mẫu
php artisan db:seed

# Khởi chạy server
php artisan serve
# API chạy tại: http://localhost:8000
```

### Cài đặt Web Admin (WEB-FITLIFE)

```bash
cd WEB-FITLIFE
npm install
npm run dev
# Web Admin chạy tại: http://localhost:5173
```

### Cài đặt Mobile App (FitLife)

```bash
cd FitLife
npm install

# Chạy trên Android
npx react-native run-android

# Chạy trên iOS
npx react-native run-ios
```

---

## 📁 Cấu Trúc Thư Mục

```
FITLiFE/
├── Be-FITLIFE/          # Laravel Backend API
│   ├── app/
│   │   ├── Http/Controllers/   # 12 Controllers
│   │   ├── Models/             # Eloquent Models
│   │   └── Http/Requests/      # Form Requests
│   ├── database/migrations/    # 15 Migrations
│   └── routes/api.php          # API Routes
│
├── FitLife/             # React Native Mobile App (Trainer)
│   ├── src/
│   │   ├── pages/       # Screens & Pages
│   │   └── general/     # Shared components
│   └── App.tsx
│
├── WEB-FITLIFE/         # Vue.js Admin Web
│   ├── src/
│   │   ├── pages/admin/ # Admin pages
│   │   ├── layout/
│   │   └── router/
│   └── index.html
│
└── FITLIFE-documents/   # Tài liệu dự án (Docusaurus)
```

---

## 🧪 Kiểm Thử

```bash
# Backend tests
cd Be-FITLIFE
php artisan test

# Frontend tests
cd FitLife
npm run test
```

---

## 📄 Tài Liệu Liên Quan

| File | Mô tả |
|------|-------|
| `docs/intro.md` | Giới thiệu dự án |
| `docs/Architecture.md` | Kiến trúc chi tiết |
| `docs/Installation.md` | Hướng dẫn cài đặt |
| `docs/Services/` | Tài liệu các API service |

---

## 🤝 Đóng Góp Cho Dự Án

### 🌱 Quy Trình Đóng Góp

#### 1. Fork Repository

```bash
git clone https://github.com/HoDuongQuocHuy278/FITLIFE-documents.git
cd FITLIFE-documents
```

#### 2. Tạo Branch Mới

```bash
git checkout -b feat/<tên-tính-năng>
# Ví dụ
git checkout -b feat/member-attendance-api
```

#### 3. Commit Thay Đổi

```bash
git add .
git commit -m "feat: add member attendance API"
```

#### 4. Push & Tạo Pull Request

```bash
git push -u origin feat/<tên-tính-năng>
```

---

## ⚖️ Quy Tắc Ứng Xử

Dự án này tuân theo bộ quy tắc ứng xử cho cộng đồng. Xem file [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) để biết thêm chi tiết.

---

## 📞 Liên Hệ Team FITLiFE

Nếu cần trao đổi thêm, vui lòng liên hệ:

- **Hồ Dương Quốc Huy**: huyho2782005@gmail.com
- **Trần Xuân Trường**: xuantruong081205@gmail.com
- **Nguyễn Nam Hùng**: namhung03022005@gmail.com

---

## 📜 License

Dự án này được phân phối dưới [MIT License](LICENSE).

---

© 2025 **FITLiFE** - Hệ thống quản lý phòng gym thông minh 💪
