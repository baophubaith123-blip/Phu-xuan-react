# phu-xuan-react — Bài 9

## Cài đặt & chạy
npm install
npm run dev

text

Mở http://localhost:5173

## Thành phần đã xây dựng

- **TheDiaDanh** — thẻ địa danh tái sử dụng qua props (có giá trị mặc định cho `moTa`)
- **The** — khung có `children` và thanh tiêu đề tùy chọn
- **BoCucTrang** — bố cục 3 khe JSX (header / main / footer)
- **DanhSach** — danh sách dùng mẫu render props (tách logic khỏi hiển thị)
- **HopThongBao** / **HopThongBaoThanhCong** — kết hợp & chuyên biệt hóa
- **TrangDanhMuc** — trang danh mục hoàn chỉnh lắp ghép từ các thành phần trên

## Giải thích thiết kế

### Vì sao chọn props/children cho từng thành phần?

- **TheDiaDanh** dùng **props** (`anh`, `ten`, `moTa`) vì dữ liệu có cấu trúc rõ ràng — mỗi trường là một kiểu dữ liệu cụ thể.
- **The** dùng **children** vì nội dung bên trong không biết trước — nơi gọi quyết định nhét gì vào (lưới, danh sách, đoạn văn...).
- **BoCucTrang** dùng **khe JSX** (3 prop JSX) vì có **3 vùng riêng biệt** (header / main / footer) — nếu dùng `children` thì không phân biệt được vùng nào.
- **DanhSach** dùng **render props** vì cần **tách logic khung (ul/li/key)** khỏi **cách hiển thị từng mục** — cho phép cùng dữ liệu hiển thị theo nhiều kiểu khác nhau.
- **HopThongBaoThanhCong** dùng **composition** (không kế thừa) để **chuyên biệt hóa** `HopThongBao` — chỉ ghi đè `mauNen` và thêm prefix "Thành công!".

## Ảnh chụp giao diện

![giao dien](./anh-chup/trang-danh-muc.png)
## Buổi 10 — Lab 5 BONUS: Refactor trang Tour

### Trước refactor

```text
TourListContainer (state + logic lọc)
└── TourListView (8 props)
    └── PageLayout
        ├── SearchBox
        ├── PriceFilter
        └── TourGrid
Sau refactor
text
TourListView (gọi hook trực tiếp)
├── useTourList ← Custom Hook: state + logic
└── PageLayout
    ├── SearchBox
    ├── PriceFilter
    └── TourGrid
Vì sao chọn Custom Hook?
Đóng gói logic — 3 state (minPrice, maxPrice, query) + logic lọc → gói vào 1 hook.

View gọn hơn — View không còn nhận 8 props, chỉ gọi useTourList(tours).

Tái sử dụng — Có thể dùng hook này cho trang khác (VD: Di tích).

Nhất quán — Cùng pattern với useDiTichList của Lab 4.

Ghi chú
Hình thức: Làm cá nhân (do chưa ghép nhóm đồ án).

Người thực hiện: Nguyễn Gia Bảo (2401ITA006).

Sơ đồ chi tiết: Xem docs/buoi10-lab5/before.md và docs/buoi10-lab5/target.md.

text

Nhấn **Ctrl + S**.

