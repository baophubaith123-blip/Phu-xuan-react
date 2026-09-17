// FormThemDiaDiem.tsx — Form thêm địa điểm tham quan
// Buổi 8 · Lab 1: Biểu mẫu có kiểm soát cơ bản (3 ô đầu tiên)
// INT.7.18 — Web FrontEnd nâng cao

import { useState } from 'react';
import type { ChangeEvent } from 'react';

// ✅ Interface cho state (TypeScript)
interface DuLieuForm {
  ten: string;
  moTa: string;
  giaVe: string;
  phuong: string;
  loaiHinh: string;
  dongY: boolean;
}

// ✅ Hằng số giá trị ban đầu — khai báo NGOÀI component
const GIA_TRI_BAN_DAU: DuLieuForm = {
  ten: '',
  moTa: '',
  giaVe: '',
  phuong: '',
  loaiHinh: 'di-tich',
  dongY: false,
};

export default function FormThemDiaDiem() {
  const [duLieu, setDuLieu] = useState<DuLieuForm>(GIA_TRI_BAN_DAU);

  function xuLyThayDoi(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setDuLieu((truoc) => ({
      ...truoc,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  return (
    <form className="form-dia-diem">
      <h2>Thêm địa điểm tham quan</h2>

      {/* ===== Ô 1: Tên địa điểm ===== */}
      <div className="truong">
        <label htmlFor="ten">Tên địa điểm</label>
        <input
          id="ten"
          name="ten"
          type="text"
          value={duLieu.ten}
          onChange={xuLyThayDoi}
          placeholder="Ví dụ: Lăng Minh Mạng"
        />
      </div>

      {/* ===== Ô 2: Mô tả ngắn ===== */}
      <div className="truong">
        <label htmlFor="moTa">Mô tả ngắn</label>
        <textarea
          id="moTa"
          name="moTa"
          rows={4}
          value={duLieu.moTa}
          onChange={xuLyThayDoi}
          placeholder="Vài dòng giới thiệu về địa điểm…"
        />
      </div>

      {/* ===== Ô 3: Phường / xã ===== */}
      <div className="truong">
        <label htmlFor="phuong">Phường / xã</label>
        <select
          id="phuong"
          name="phuong"
          value={duLieu.phuong}
          onChange={xuLyThayDoi}
        >
          <option value="">-- Chọn phường --</option>
          <option value="phu-hau">Phú Hậu</option>
          <option value="huong-long">Hương Long</option>
          <option value="thuy-bieu">Thuỷ Biểu</option>
          <option value="vy-da">Vỹ Dạ</option>
        </select>
      </div>
    </form>
  );
}