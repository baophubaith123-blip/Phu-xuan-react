// FormThemDiaDiem.tsx — Form thêm địa điểm (NHẬN PROPS từ cha)
// Buổi 8 · Lab 5: Không tự gọi hook — cha giữ state
// INT.7.18 — Web FrontEnd nâng cao

import type { ChangeEvent, FocusEvent, FormEvent } from 'react';
import type { DuLieuForm } from './types';

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

// ✅ Props — nhận TOÀN BỘ từ hook của cha + callback onThemXong
interface FormThemDiaDiemProps {
  duLieu: DuLieuForm;
  setDuLieu: (updater: (truoc: DuLieuForm) => DuLieuForm) => void;
  dangGui: boolean;
  xuLyThayDoi: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  xuLyRoiO: (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  loiCuaO: (ten: string) => string | undefined;
  xuLyGui: (
    guiDuLieu: (duLieu: DuLieuForm) => Promise<void>
  ) => (e: FormEvent<HTMLFormElement>) => Promise<void>;
  datLai: () => void;
  onThemXong?: (duLieu: DuLieuForm) => void;
}

export default function FormThemDiaDiem({
  duLieu,
  setDuLieu,
  dangGui,
  xuLyThayDoi,
  xuLyRoiO,
  loiCuaO,
  xuLyGui,
  datLai,
  onThemXong,
}: FormThemDiaDiemProps) {
  // ✅ Handler riêng cho nhóm tiện ích
  function xuLyTich(e: ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.target;
    setDuLieu((truoc) => ({
      ...truoc,
      tienIch: checked
        ? [...truoc.tienIch, value]
        : truoc.tienIch.filter((ma) => ma !== value),
    }));
  }

  // ✅ Hàm gửi — gọi hook của cha
  const gui = xuLyGui(async (gt) => {
    await new Promise((r) => setTimeout(r, 1200));

    const duLieuGui = { ...gt, giaVe: Number(gt.giaVe) };
    console.log('Đã gửi:', duLieuGui);

    onThemXong?.(gt);
    datLai();
  });

  return (
    <form className="form-dia-diem" onSubmit={gui} noValidate>
      <h2>Thêm địa điểm tham quan</h2>

      {/* ===== Ô 1: Tên ===== */}
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

      {/* ===== Ô 2: Mô tả ===== */}
      <div className="truong">
        <label htmlFor="moTa">Mô tả ngắn</label>
        <textarea
          id="moTa"
          name="moTa"
          rows={4}
          value={duLieu.moTa}
          onChange={xuLyThayDoi}
          placeholder="Vài dòng giới thiệu…"
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

      {/* ===== Ô 4: Phường ===== */}
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

      {/* ===== Ô 5: Loại hình ===== */}
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

      {/* ===== Ô 6: Tiện ích ===== */}
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

      {/* ===== Ô 7: Xác nhận ===== */}
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