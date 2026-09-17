// FormThemDiaDiem.tsx — Form thêm địa điểm tham quan
// Buổi 8 · Lab 1+2: Biểu mẫu có kiểm soát đầy đủ
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

// ✅ Danh sách tiện ích (Lab 2)
interface TienIch {
  ma: string;
  ten: string;
}

const DS_TIEN_ICH: TienIch[] = [
  { ma: 'bai-xe', ten: 'Bãi đỗ xe' },
  { ma: 'huong-dan', ten: 'Có hướng dẫn viên' },
  { ma: 've-online', ten: 'Bán vé trực tuyến' },
  { ma: 'khu-ve-sinh', ten: 'Khu vệ sinh công cộng' },
];

export default function FormThemDiaDiem() {
  // ✅ State 1: Dữ liệu form (object)
  const [duLieu, setDuLieu] = useState<DuLieuForm>(GIA_TRI_BAN_DAU);

  // ✅ State 2: Mảng tiện ích được chọn (tách riêng vì là mảng)
  const [tienIch, setTienIch] = useState<string[]>([]);

  // ✅ Handler duy nhất cho MỌI ô nhập object (text, textarea, select, radio, checkbox đơn)
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

  // ✅ Handler riêng cho nhóm tiện ích (vì lưu vào mảng)
  function xuLyTich(e: ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.target;
    setTienIch((truoc) =>
      checked
        ? [...truoc, value]
        : truoc.filter((ma) => ma !== value)
    );
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

      {/* ===== Ô 3: Giá vé (Lab 2) ===== */}
      <div className="truong">
        <label htmlFor="giaVe">Giá vé (VNĐ)</label>
        <input
          id="giaVe"
          name="giaVe"
          type="number"
          value={duLieu.giaVe}
          onChange={xuLyThayDoi}
          placeholder="0"
          min={0}
        />
      </div>

      {/* ===== Ô 4: Phường / xã ===== */}
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

      {/* ===== Ô 5: Nhóm nút chọn "Loại hình" (Lab 2) ===== */}
      <fieldset>
        <legend>Loại hình</legend>
        <label>
          <input
            name="loaiHinh"
            type="radio"
            value="di-tich"
            checked={duLieu.loaiHinh === 'di-tich'}
            onChange={xuLyThayDoi}
          />
          Di tích lịch sử
        </label>
        <label>
          <input
            name="loaiHinh"
            type="radio"
            value="am-thuc"
            checked={duLieu.loaiHinh === 'am-thuc'}
            onChange={xuLyThayDoi}
          />
          Điểm ẩm thực
        </label>
      </fieldset>

      {/* ===== Ô 6: Nhóm tiện ích (Lab 2) ===== */}
      <fieldset>
        <legend>Tiện ích tại điểm đến</legend>
        {DS_TIEN_ICH.map((ti) => (
          <label key={ti.ma}>
            <input
              type="checkbox"
              value={ti.ma}
              checked={tienIch.includes(ti.ma)}
              onChange={xuLyTich}
            />
            {ti.ten}
          </label>
        ))}
      </fieldset>

      {/* ===== Ô 7: Hộp kiểm xác nhận (Lab 2) ===== */}
      <label className="hop-kiem-xac-nhan">
        <input
          name="dongY"
          type="checkbox"
          checked={duLieu.dongY}
          onChange={xuLyThayDoi}
        />
        Tôi xác nhận thông tin địa điểm là chính xác
      </label>
    </form>
  );
}