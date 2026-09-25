// formatGia.ts — Hàm tiện ích format giá (Buổi 10 · Lab 5)
// INT.7.18 — Web FrontEnd nâng cao

export function formatGia(gia: number): string {
  return gia.toLocaleString('vi-VN') + 'đ';
}