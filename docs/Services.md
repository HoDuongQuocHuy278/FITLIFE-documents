---
sidebar_position: 5
---

# ⚙️ Tài Liệu API Services

## Tổng Quan

Backend FITLiFE cung cấp RESTful API với format JSON. Tất cả các endpoint có prefix `/api/`.

### Base URL
```
http://localhost:8000/api
```

### Header chung (cho các route cần auth)
```
Authorization: Bearer {your_token}
Content-Type: application/json
Accept: application/json
```

---

## 🔓 Public Routes (Không cần Token)

### Auth – Hội Viên

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | `/api/login` | Đăng nhập hội viên |
| POST | `/api/login-google` | Đăng nhập qua Google |
| POST | `/api/register` | Đăng ký tài khoản mới |

### Auth – Huấn Luyện Viên

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | `/api/trainer/login` | Đăng nhập HLV |

### Auth – Admin

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | `/api/admin/login` | Đăng nhập admin |

### Gói Tập (Public)

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/packages` | Xem danh sách gói tập |

---

## 🧑‍💼 Member Routes (Cần token hội viên)

Prefix: `/api/member/` | Middleware: `memberMiddleware`

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | `/logout` | Đăng xuất |
| POST | `/logout-all` | Đăng xuất tất cả thiết bị |
| GET | `/profile` | Xem hồ sơ cá nhân |
| POST | `/change-profile` | Cập nhật hồ sơ |
| POST | `/register-schedule` | Đăng ký lịch tập |
| GET | `/my-schedules` | Xem lịch đã đăng ký |
| DELETE | `/schedule-members/{id}` | Huỷ đăng ký lịch |
| GET | `/my-attendances` | Xem lịch sử điểm danh |
| GET | `/reschedules` | Xem yêu cầu đổi lịch |
| POST | `/reschedules` | Gửi yêu cầu đổi lịch |
| GET | `/my-notes` | Xem ghi chú sức khỏe từ HLV |

---

## 👨‍🏫 Trainer Routes (Cần token HLV)

Prefix: `/api/trainer/` | Middleware: `trainerMiddleware`

### Xác Thực
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | `/logout` | Đăng xuất |
| POST | `/logout-all` | Đăng xuất tất cả thiết bị |

### Lịch Dạy
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/schedules` | Xem tất cả lịch dạy |
| POST | `/schedules` | Tạo lịch dạy mới |
| GET | `/schedules/{id}` | Xem chi tiết lịch dạy |
| PUT | `/schedules/{id}` | Cập nhật lịch dạy |
| DELETE | `/schedules/{id}` | Xoá lịch dạy |

### Hội Viên & Điểm Danh
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/schedule-members` | Danh sách hội viên trong ca học |
| GET | `/attendances` | Xem danh sách điểm danh |
| POST | `/attendances` | Tạo điểm danh |
| GET | `/attendances/{id}` | Xem chi tiết điểm danh |
| PUT | `/attendances/{id}` | Cập nhật điểm danh |

### Đổi Lịch
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/reschedules` | Xem yêu cầu đổi lịch từ hội viên |
| GET | `/reschedules/{id}` | Xem chi tiết yêu cầu |
| POST | `/reschedules/{id}/approve` | Duyệt yêu cầu đổi lịch |
| POST | `/reschedules/{id}/reject` | Từ chối yêu cầu đổi lịch |

### Ghi Chú Hội Viên
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/notes` | Xem tất cả ghi chú |
| POST | `/notes` | Tạo ghi chú mới |
| GET | `/notes/{id}` | Xem chi tiết ghi chú |
| PUT | `/notes/{id}` | Cập nhật ghi chú |
| DELETE | `/notes/{id}` | Xoá ghi chú |

### Lương
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/my-salary` | Xem lương cá nhân |

---

## 🛡️ Admin Routes (Cần token admin + Sanctum)

Prefix: `/api/admin/` | Middleware: `auth:sanctum`

### Chi Nhánh
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/branches` | Danh sách chi nhánh |
| POST | `/branches` | Tạo chi nhánh mới |
| GET | `/branches/{id}` | Chi tiết chi nhánh |
| PUT | `/branches/{id}` | Cập nhật chi nhánh |
| DELETE | `/branches/{id}` | Xoá chi nhánh |

### Gói Tập
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/packages` | Danh sách gói tập (admin view) |
| POST | `/packages` | Tạo gói tập mới |
| GET | `/packages/{id}` | Chi tiết gói tập |
| PUT | `/packages/{id}` | Cập nhật gói tập |
| DELETE | `/packages/{id}` | Xoá gói tập |

### Lịch Tập
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/schedules` | Danh sách lịch (admin view) |
| GET | `/schedules/{id}` | Chi tiết lịch |
| POST | `/schedules/{id}/approve` | Duyệt lịch tập |
| POST | `/schedules/{id}/reject` | Từ chối lịch tập |

### Lương HLV
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/salaries` | Danh sách lương |
| POST | `/salaries` | Tạo bảng lương |
| GET | `/salaries/{id}` | Chi tiết lương |
| PUT | `/salaries/{id}` | Cập nhật lương |
| POST | `/salaries/{id}/pay` | Đánh dấu đã thanh toán |

---

## 📤 Format Response

### Thành công
```json
{
    "success": true,
    "message": "...",
    "data": { ... }
}
```

### Lỗi
```json
{
    "success": false,
    "message": "Mô tả lỗi",
    "errors": { ... }
}
```

### HTTP Status Codes
| Code | Ý nghĩa |
|------|---------|
| 200 | OK – Thành công |
| 201 | Created – Tạo mới thành công |
| 400 | Bad Request – Dữ liệu không hợp lệ |
| 401 | Unauthorized – Chưa xác thực |
| 403 | Forbidden – Không có quyền |
| 404 | Not Found – Không tìm thấy |
| 422 | Unprocessable Entity – Validation failed |
| 500 | Internal Server Error |
