---
sidebar_position: 3
---

# 🏗️ Kiến Trúc Hệ Thống

## Tổng Quan Kiến Trúc

FITLiFE được thiết kế theo mô hình **Client-Server** với Backend API tập trung phục vụ cho cả Mobile App và Web Admin.

```
┌──────────────────────────────────────────────────────────────┐
│                      CLIENT LAYER                            │
├─────────────────────────┬────────────────────────────────────┤
│     Mobile App          │          Web Admin                 │
│     (FitLife)           │         (WEB-FITLIFE)              │
│                         │                                    │
│  • React Native         │  • Vue.js 3                        │
│  • TypeScript           │  • Vite                            │
│  • Axios HTTP Client    │  • Vue Router                      │
│  • Context/State Mgmt   │  • Axios HTTP Client               │
│                         │                                    │
│  Dành cho: Trainer      │  Dành cho: Admin                   │
└─────────────────────────┴────────────────────────────────────┘
                          │  HTTP/JSON
                          ▼
┌──────────────────────────────────────────────────────────────┐
│                    BACKEND LAYER (Be-FITLIFE)                │
│                                                              │
│  Framework: Laravel 11 (PHP 8.2+)                           │
│  Auth: Laravel Sanctum (Token-based)                        │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                  API Routes (api.php)               │    │
│  │  /api/login  /api/member/*  /api/trainer/*          │    │
│  │  /api/admin/*                                       │    │
│  └──────────────────────┬──────────────────────────────┘    │
│                         ▼                                    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              Controllers (12 controllers)           │    │
│  │  AdminController   MembersController                │    │
│  │  TrainerController BranchController                 │    │
│  │  PackageController TrainerScheduleController        │    │
│  │  AttendanceController ScheduleMemberController      │    │
│  │  RescheduleController TrainerNoteController         │    │
│  │  TrainerSalaryController                            │    │
│  └──────────────────────┬──────────────────────────────┘    │
│                         ▼                                    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │           Eloquent Models (19 models)               │    │
│  │  User  Member  Trainer  Admin  Branch  Package      │    │
│  │  TrainerSchedule  ScheduleMember  Attendance        │    │
│  │  Reschedule  TrainerNote  TrainerSalary             │    │
│  └──────────────────────┬──────────────────────────────┘    │
└─────────────────────────┼────────────────────────────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────┐
│                     DATABASE LAYER                           │
│                                                              │
│  MySQL (Production) / SQLite (Development)                  │
│  15 Migrations                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## 📂 Cấu Trúc Backend (Be-FITLIFE)

```
Be-FITLIFE/
├── app/
│   ├── Http/
│   │   ├── Controllers/          # 12 controllers
│   │   │   ├── AdminController.php
│   │   │   ├── MembersController.php
│   │   │   ├── TrainerController.php
│   │   │   ├── BranchController.php
│   │   │   ├── PackageController.php
│   │   │   ├── TrainerScheduleController.php
│   │   │   ├── ScheduleMemberController.php
│   │   │   ├── AttendanceController.php
│   │   │   ├── RescheduleController.php
│   │   │   ├── TrainerNoteController.php
│   │   │   └── TrainerSalaryController.php
│   │   ├── Middleware/           # Custom middleware
│   │   └── Requests/             # Form Request Validation
│   ├── Models/                   # Eloquent Models
│   └── Providers/
├── database/
│   └── migrations/               # 15 migration files
├── routes/
│   └── api.php                   # Tất cả API routes
└── config/
    └── sanctum.php               # Sanctum config
```

---

## 📂 Cấu Trúc Mobile App (FitLife)

```
FitLife/
├── src/
│   ├── pages/                    # Màn hình ứng dụng
│   │   ├── login.tsx             # Đăng nhập
│   │   ├── HomePage.tsx          # Trang chủ HLV
│   │   ├── CalendarPage.tsx      # Lịch dạy
│   │   ├── CreateSchedule.tsx    # Tạo lịch dạy
│   │   ├── AttendancePage.tsx    # Điểm danh
│   │   ├── MembersPage.tsx       # Danh sách hội viên
│   │   ├── MemberDetails.tsx     # Chi tiết hội viên
│   │   ├── TrainerIncome.tsx     # Thu nhập HLV
│   │   ├── ChangeSchedule.tsx    # Đổi lịch
│   │   └── Profile.tsx           # Hồ sơ HLV
│   └── general/                  # Components dùng chung
└── App.tsx                       # Root navigator
```

---

## 📂 Cấu Trúc Web Admin (WEB-FITLIFE)

```
WEB-FITLIFE/
├── src/
│   ├── pages/admin/
│   │   ├── dashboard/            # Dashboard tổng quan
│   │   ├── hoivien/              # Quản lý hội viên
│   │   ├── huanluyenvien/        # Quản lý HLV
│   │   ├── goitap/               # Quản lý gói tập
│   │   ├── lich/                 # Quản lý lịch tập
│   │   ├── hoadon/               # Hóa đơn
│   │   ├── solieu/               # Thống kê số liệu
│   │   ├── lichsuhoatdong/       # Lịch sử hoạt động
│   │   ├── profile/              # Hồ sơ admin
│   │   ├── caidat/               # Cài đặt
│   │   └── login/                # Đăng nhập admin
│   ├── layout/                   # Layout components
│   ├── router/                   # Vue Router
│   └── assets/                   # Static assets
└── index.html
```

---

## 🔐 Luồng Xác Thực

```
Client gửi credentials
        ↓
Backend xác thực (Laravel Sanctum)
        ↓
Trả về token
        ↓
Client lưu token (AsyncStorage / localStorage)
        ↓
Mỗi request tiếp theo gửi kèm: Authorization: Bearer {token}
        ↓
Middleware kiểm tra token → Cho phép / Từ chối
```

### Middleware phân quyền:
- `memberMiddleware` → Kiểm tra token hội viên
- `trainerMiddleware` → Kiểm tra token huấn luyện viên
- `auth:sanctum` → Kiểm tra token admin (Sanctum default)
