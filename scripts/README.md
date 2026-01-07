# Hướng Dẫn Sử Dụng Tool Auto-Add Case

## Cách sử dụng nhanh

### Bước 1: Tạo case bằng AI Generator trong app
1. Mở app tại http://localhost:3000/
2. Vào "AI Generator"
3. Nhập mô tả vấn đề (VD: "Máy giặt rung lắc mạnh")
4. Click "Generate"
5. **Copy toàn bộ code** từ khung code preview

### Bước 2: Chạy tool để thêm vào project

**Windows PowerShell:**
```powershell
# Paste code vào clipboard, sau đó chạy:
Get-Clipboard | npm run add-case
```

**Linux/Mac:**
```bash
# Paste code vào clipboard, sau đó chạy:
pbpaste | npm run add-case
```

**Hoặc tạo file tạm:**
```bash
# Lưu code vào file temp.ts, sau đó:
cat temp.ts | npm run add-case
```

### Bước 3: Xong!
Tool sẽ tự động:
- ✅ Lưu file vào `data/cases/[case-id].ts`
- ✅ Thêm import vào `data/cases.ts`
- ✅ Thêm case vào mảng `ALL_CASES`

Refresh app để thấy case mới!

## Ví dụ đầy đủ

```powershell
# 1. Copy code từ AI Generator
# 2. Chạy lệnh:
Get-Clipboard | npm run add-case

# Output:
# ✅ Phát hiện case: mayGiatRungLacCase (ID: may-giat-rung-lac)
# ✅ Đã lưu: D:\SuaChuaNHa\data\cases\may-giat-rung-lac.ts
# ✅ Đã thêm import vào cases.ts
# ✅ Đã thêm mayGiatRungLacCase vào ALL_CASES
# ✅ Đã cập nhật: D:\SuaChuaNHa\data\cases.ts
# 🎉 Hoàn thành! Case đã được thêm vào project.
```

## Lưu ý
- Code phải có format: `export const xxxCase: RepairCase = { id: "xxx", ... }`
- ID phải là kebab-case (vd: `may-giat-rung-lac`)
- Tên biến phải kết thúc bằng `Case` (vd: `mayGiatRungLacCase`)
