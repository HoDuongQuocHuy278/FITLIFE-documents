---
sidebar_position: 4
---

# 🔧 Hướng Dẫn Cài Đặt

## Yêu Cầu Hệ Thống

| Công cụ | Phiên bản tối thiểu |
|---------|---------------------|
| PHP | 8.2+ |
| Composer | 2.0+ |
| Node.js | 18+ |
| npm | 9+ |
| MySQL | 8.0+ (hoặc SQLite) |
| XAMPP | Bất kỳ phiên bản có PHP 8.2+ |
| Git | 2.0+ |

---

## 1. Clone Dự Án

```bash
git clone <repository-url>
cd FITLiFE
```

---

## 2. Cài Đặt Backend (Be-FITLIFE)

```bash
# Di chuyển vào thư mục backend
cd Be-FITLIFE

# Cài đặt PHP dependencies
composer install

# Sao chép file cấu hình môi trường
cp .env.example .env

# Tạo application key
php artisan key:generate
```

### Cấu hình `.env`

Mở file `.env` và cập nhật thông tin database:

```env
APP_NAME=FITLiFE
APP_ENV=local
APP_KEY=  # Tự động điền sau php artisan key:generate
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=fitlife
DB_USERNAME=root
DB_PASSWORD=

# Hoặc dùng SQLite cho local
# DB_CONNECTION=sqlite
```

### Chạy Migration

```bash
# Tạo bảng database
php artisan migrate

# (Tuỳ chọn) Seed dữ liệu mẫu
php artisan db:seed

# Khởi chạy server
php artisan serve
```

✅ Backend API chạy tại: `http://localhost:8000`

---

## 3. Cài Đặt Web Admin (WEB-FITLIFE)

```bash
# Di chuyển vào thư mục web
cd ../WEB-FITLIFE

# Cài đặt dependencies
npm install

# Khởi chạy dev server
npm run dev
```

✅ Web Admin chạy tại: `http://localhost:5173`

> **Lưu ý**: Đảm bảo URL API trong file cấu hình trỏ đến `http://localhost:8000`

---

## 4. Cài Đặt Mobile App (FitLife)

```bash
# Di chuyển vào thư mục mobile
cd ../FitLife

# Cài đặt dependencies
npm install
```

### Chạy trên Android

```bash
# Khởi động Android emulator trước, sau đó:
npx react-native run-android
```

### Chạy trên iOS (macOS only)

```bash
# Cài đặt iOS pods
cd ios && pod install && cd ..

# Chạy trên simulator
npx react-native run-ios
```

> **Lưu ý**: Cập nhật `BASE_URL` trong source code mobile để trỏ đến địa chỉ IP máy chủ (không dùng `localhost` trên thiết bị thật).

---

## 5. Cài Đặt Docusaurus (FITLIFE-documents)

```bash
cd FITLIFE-documents

# Cài đặt dependencies
npm install

# Chạy dev server
npm start
```

✅ Docs chạy tại: `http://localhost:3000`

```bash
# Build production
npm run build
```

---

## Kiểm Tra Cài Đặt

```bash
# Kiểm tra backend API
curl http://localhost:8000/api/packages
# Kết quả mong đợi: JSON array các gói tập

# Hoặc dùng Postman / Thunder Client để test các endpoint
```

---

## Troubleshooting

### Lỗi: `vendor/autoload.php not found`
```bash
cd Be-FITLIFE
composer install
```

### Lỗi: Database connection
- Kiểm tra MySQL đang chạy trong XAMPP
- Đảm bảo database `fitlife` đã được tạo
- Kiểm tra thông tin `DB_*` trong `.env`

### Lỗi: CORS
- Kiểm tra config `config/cors.php` trong Be-FITLIFE
- Đảm bảo `allowed_origins` bao gồm URL của Frontend

### Lỗi Metro Bundler (React Native)
```bash
cd FitLife
npx react-native start --reset-cache
```
