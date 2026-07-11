---
sidebar_position: 2
---

# 📝 Tổng Quan Dự Án

## Bối Cảnh

Ngày nay, nhiều phòng gym vẫn đang quản lý lịch tập, điểm danh và hội viên theo cách thủ công hoặc qua bảng tính Excel. Điều này dẫn đến nhiều sai sót, khó theo dõi và tốn thời gian. **FITLiFE** ra đời để giải quyết những vấn đề đó bằng một hệ thống số hóa toàn diện.

---

## 🏗️ Kiến Trúc Tổng Thể

FITLiFE gồm **3 ứng dụng** hoạt động phối hợp qua một Backend API chung:

```
┌─────────────────────────────────────────────────────┐
│                    FITLiFE System                   │
├──────────────┬──────────────────┬───────────────────┤
│  Mobile App  │    Web Admin     │   Backend API     │
│  (FitLife)   │  (WEB-FITLIFE)   │  (Be-FITLIFE)     │
│              │                  │                   │
│ React Native │    Vue.js 3      │   Laravel 11      │
│ (Trainer)    │    (Admin)       │   + Sanctum       │
└──────────────┴──────────────────┴───────────────────┘
                          │
                    ┌─────┴─────┐
                    │  Database │
                    │  MySQL /  │
                    │  SQLite   │
                    └───────────┘
```

---

## 👤 Các Vai Trò Trong Hệ Thống

### 1. Admin
- Sử dụng **Web Admin (Vue.js)**
- Toàn quyền quản trị: chi nhánh, gói tập, HLV, lương, lịch tập

### 2. Trainer (Huấn Luyện Viên)
- Sử dụng **Mobile App (React Native)**
- Quản lý lịch dạy, điểm danh, ghi chú hội viên

### 3. Member (Hội Viên)
- Truy cập qua **API**
- Đăng ký gói tập, xem lịch, điểm danh, đổi lịch

---

## 📊 Mô Hình Dữ Liệu

| Bảng | Mô tả |
|------|-------|
| `users` | Tài khoản hội viên (Laravel default) |
| `members` | Thông tin chi tiết hội viên |
| `trainers` | Thông tin huấn luyện viên |
| `admins` | Tài khoản admin |
| `branches` | Chi nhánh phòng gym |
| `packages` | Gói tập (tên, giá, thời hạn) |
| `trainer_schedules` | Lịch dạy của HLV |
| `schedule_members` | Hội viên đăng ký lịch |
| `attendances` | Lịch sử điểm danh |
| `reschedules` | Yêu cầu đổi lịch |
| `trainer_notes` | Ghi chú sức khỏe HLV ghi |
| `trainer_salaries` | Bảng lương HLV |

---

## 🔐 Xác Thực (Authentication)

FITLiFE sử dụng **Laravel Sanctum** với token-based authentication:

- **Member** → middleware `memberMiddleware`
- **Trainer** → middleware `trainerMiddleware`  
- **Admin** → middleware `auth:sanctum`

Mỗi vai trò có token riêng biệt và quyền truy cập API khác nhau.

---

## 🌐 Luồng Hoạt Động

```
Hội viên đăng ký → Chọn gói tập → Đăng ký lịch tập
       ↓
HLV tạo lịch dạy → Admin duyệt → HLV điểm danh
       ↓
Admin tính lương → HLV nhận lương
```
