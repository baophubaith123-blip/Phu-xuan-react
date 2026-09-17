// FormThemDiaDiem.tsx — Form thêm địa điểm (dùng hook useForm)
// Buổi 8 · Lab 4: Rút gọn logic vào Custom Hook + thông báo thành công
// INT.7.18 — Web FrontEnd nâng cao

import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { useForm } from '../../hooks/useForm';
import { kiemChung } from './kiemChung';
import type { DuLieuForm } from './types';

// ✅ Hằng số giá trị ban đầu — khai báo NGOÀI component
const GIA_TRI_BAN_DAU: DuLieuForm = {
  ten: '',
  moTa: '',
  giaVe: '',
  phuong: '',
  loaiHinh: 'di-tich',
  dongY: false,
  tienIch: [],
};

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

interface FormThemDiaDiemProps {
  onThemXong?: (duLieu: DuLieuForm) => void;
}

export default function FormThemDiaDiem({ onThemXong }: FormThemDiaDiemProps) {
  // ✅ Hook quản lý state/handler/validation
  const {
    duLieu,
    setDuLieu,
    dangGui,
    xuLyThayDoi,
    xuLyRoiO,
    loiCuaO,
    xuLyGui,
    datLai,
  } = useForm(GIA_TRI_BAN_DAU, kiemChung);

  // ✅ State riêng của form này — thông báo thành công
  const [thongBao, setThongBao] = useState<string>('');

  // ✅ Handler riêng cho nhóm tiện ích (vì lưu vào mảng)
  function xuLyTich(e: ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.target;
    setDuLieu((truoc) => ({
      ...truoc,
      tienIch: checked
        ? [...truoc.tienIch, value]
        : truoc.tienIch.filter((ma) => ma !== value),
    }));
  }

  // ✅ Hàm gửi cụ thể cho form này
  const gui = xuLyGui(async (gt) => {
    // Giả lập gọi máy chủ 1.2 giây
    await new Promise((r) => setTimeout(r, 1200));

    // Chuyển giá vé về số trước khi gửi
    const duLieuGui = { ...gt, giaVe: Number(gt.giaVe) };
    console.log('Đã gửi:', duLieuGui);

    // Thông báo cho cha (nếu có)
    onThemXong?.(gt);

    // ✅ Hiện thông báo thành công
    setThongBao(`Đã thêm địa điểm "${gt.ten}" thành công!`);

    // ✅ Reset form
    datLai();

    // ✅ Tự động ẩn thông báo sau 3 giây
    setTimeout(() => setThongBao(''), 3000);
  });

  return (
    <form className="form-dia-diem" onSubmit={gui} noValidate>
      <h2>Thêm địa điểm tham quan</h2>

      {/* ===== Thông báo thành công ===== */}
      {thongBao && (
        <p className="thong-bao-thanh-cong" role="status">
          {thongBao}
        </p>
      )}

      {/* ===== Ô 1: Tên địa điểm ===== */}
      <div className="truong">
        <label htmlFor="ten">Tên địa điểm</label>
        <input
          id="ten"
          name="ten"
          type="text"
          value={duLieu.ten}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          placeholder="Ví dụ: Lăng Minh Mạng"
          aria-invalid={loiCuaO('ten') ? true : undefined}
        />
        {loiCuaO('ten') && (
          <p role="alert" className="thong-bao-loi">
            {loiCuaO('ten')}
          </p>
        )}
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

      {/* ===== Ô 3: Giá vé ===== */}
      <div className="truong">
        <label htmlFor="giaVe">Giá vé (VNĐ)</label>
        <input
          id="giaVe"
          name="giaVe"
          type="number"
          value={duLieu.giaVe}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          placeholder="0"
          min={0}
          aria-invalid={loiCuaO('giaVe') ? true : undefined}
        />
        {loiCuaO('giaVe') && (
          <p role="alert" className="thong-bao-loi">
            {loiCuaO('giaVe')}
          </p>
        )}
      </div>

      {/* ===== Ô 4: Phường / xã ===== */}
      <div className="truong">
        <label htmlFor="phuong">Phường / xã</label>
        <select
          id="phuong"
          name="phuong"
          value={duLieu.phuong}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          aria-invalid={loiCuaO('phuong') ? true : undefined}
        >
          <option value="">-- Chọn phường --</option>
          <option value="phu-hau">Phú Hậu</option>
          <option value="huong-long">Hương Long</option>
          <option value="thuy-bieu">Thuỷ Biểu</option>
          <option value="vy-da">Vỹ Dạ</option>
        </select>
        {loiCuaO('phuong') && (
          <p role="alert" className="thong-bao-loi">
            {loiCuaO('phuong')}
          </p>
        )}
      </div>

      {/* ===== Ô 5: Nhóm nút chọn "Loại hình" ===== */}
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

      {/* ===== Ô 6: Nhóm tiện ích ===== */}
      <fieldset>
        <legend>Tiện ích tại điểm đến</legend>
        {DS_TIEN_ICH.map((ti) => (
          <label key={ti.ma}>
            <input
              type="checkbox"
              value={ti.ma}
              checked={duLieu.tienIch.includes(ti.ma)}
              onChange={xuLyTich}
            />
            {ti.ten}
          </label>
        ))}
      </fieldset>

      {/* ===== Ô 7: Hộp kiểm xác nhận ===== */}
      <label className="hop-kiem-xac-nhan">
        <input
          name="dongY"
          type="checkbox"
          checked={duLieu.dongY}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          aria-invalid={loiCuaO('dongY') ? true : undefined}
        />
        Tôi xác nhận thông tin địa điểm là chính xác
      </label>
      {loiCuaO('dongY') && (
        <p role="alert" className="thong-bao-loi" style={{ marginBottom: 12 }}>
          {loiCuaO('dongY')}
        </p>
      )}

      {/* ===== Nhóm nút ===== */}
      <div className="nhom-nut">
        <button type="submit" disabled={dangGui}>
          {dangGui ? 'Đang lưu...' : 'Thêm địa điểm'}
        </button>
        <button type="button" onClick={datLai}>
          Nhập lại
        </button>
      </div>
    </form>
  );
}