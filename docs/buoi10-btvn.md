# Bài 10 — BTVN: Module Di tích Huế

## 1. Sơ đồ cây thành phần

```text
App
└── DiTichListView ← gọi useDiTichList
    └── PageLayout (3 khe: header, sidebar, main)
        ├── SearchBox (slot: header)
        ├── DiTichFilter (slot: sidebar)
        └── DiTichCard × N (slot: main)

Custom Hook: useDiTichList
├── State: danhSach, boLoc
├── Computed: danhSachHienThi
└── Actions: capNhatBoLoc, danhDauDaThamQuan, resetBoLoc
2. Ba mẫu đã áp dụng
2.1. Custom Hook thay Container
Vì sao chọn: View chỉ cần gọi 1 dòng useDiTichList(danhSachDiTich) là có đủ state + actions.

Lợi ích: Code ngắn hơn Container, không cần truyền props qua nhiều tầng.

Trade-off: Logic ẩn trong hook — cần đọc hook mới hiểu.

2.2. Named Slots (PageLayout)
Vì sao chọn: Trang Di tích và trang Tour có cùng cấu trúc (header/sidebar/main).

Lợi ích: Tái sử dụng PageLayout — không cần viết lại layout.

Trade-off: Phải học cách truyền JSX qua props.

2.3. Presentational Component
Vì sao chọn: DiTichCard, DiTichFilter chỉ nhận props và vẽ — không có state.

Lợi ích: Dễ test độc lập, dễ tái sử dụng.

Trade-off: Phải truyền nhiều props từ cha xuống.

3. Phần được AI hỗ trợ
Không dùng AI. Sinh viên tự viết toàn bộ code dựa trên hướng dẫn của giảng viên và tài liệu thực hành.

4. Khó khăn đã gặp và cách khắc phục
Khó khăn 1: Immutable update trong danhDauDaThamQuan
Vấn đề: Ban đầu viết danhSach.find(d => d.id === id).daThamQuan = !... → không kích hoạt re-render.

Khắc phục: Dùng setDanhSach((prev) => prev.map(...)) với spread { ...d, daThamQuan: !d.daThamQuan }.

Khó khăn 2: View vẫn hiện Hooks trong DevTools
Vấn đề: Ban đầu để 1 useState cho "đang tải" trong View.

Khắc phục: Chuyển hết state vào useDiTichList. View chỉ gọi hook.

Khó khăn 3: TypeScript báo lỗi khi truyền Partial<DiTichFilter>
Vấn đề: onChange không nhận được { loai: ... }.

Khắc phục: Đổi signature thành (patch: Partial<DiTichFilter>) => void.