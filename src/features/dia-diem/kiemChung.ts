// kiemChung.ts — Hàm kiểm chứng dữ liệu form (Pure Function)
// Buổi 8 · Lab 3: Không gọi setState, chỉ nhận dữ liệu và trả về lỗi

import type { DuLieuForm } from './types';

/**
 * Kiểm chứng dữ liệu form thêm địa điểm.
 * @param duLieu - Object chứa dữ liệu form
 * @returns Object chứa lỗi. Rỗng nghĩa là hợp lệ.
 */
export function kiemChung(duLieu: DuLieuForm): Record<string, string> {
  const loi: Record<string, string> = {};

  // --- Kiểm chứng ô Tên ---
  const ten = duLieu.ten.trim();
  if (!ten) {
    loi.ten = 'Vui lòng nhập tên địa điểm.';
  } else if (ten.length < 3) {
    loi.ten = 'Tên địa điểm phải có ít nhất 3 ký tự.';
  }

  // --- Kiểm chứng ô Giá vé ---
  if (duLieu.giaVe === '') {
    loi.giaVe = 'Vui lòng nhập giá vé (nhập 0 nếu miễn phí).';
  } else if (Number.isNaN(Number(duLieu.giaVe)) || Number(duLieu.giaVe) < 0) {
    loi.giaVe = 'Giá vé phải là một số không âm.';
  }

  // --- Kiểm chứng ô Phường ---
  if (!duLieu.phuong) {
    loi.phuong = 'Vui lòng chọn phường hoặc xã.';
  }

  // --- Kiểm chứng hộp kiểm Xác nhận ---
  if (!duLieu.dongY) {
    loi.dongY = 'Bạn cần xác nhận thông tin là chính xác trước khi gửi.';
  }

  return loi; // Rỗng = hợp lệ
}