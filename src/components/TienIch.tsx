// TienIch.tsx — Các tiện ích dùng named export
// File này KHÔNG có export default, chỉ có 2 named exports

// ✅ Named export #1: Component nhỏ hiển thị nhãn trạng thái
export function NhanTrangThai({ dangMoCua }: { dangMoCua: boolean }) {
  return (
    <span style={{ color: dangMoCua ? "green" : "crimson", fontWeight: "bold" }}>
      {dangMoCua ? "● Đang mở cửa" : "● Đã đóng cửa"}
    </span>
  );
}

// ✅ Named export #2: Hàm JavaScript thuần, không phải component
export function demTongSoDiaDiem(danhSach: string[]): number {
  return danhSach.length;
}