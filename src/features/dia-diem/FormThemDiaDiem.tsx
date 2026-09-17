// FormThemDiaDiem.tsx — Form thêm địa điểm tham quan
// Buổi 8 · Lab 1+2+3: Biểu mẫu có kiểm soát đầy đủ + validation + submit
// INT.7.18 — Web FrontEnd nâng cao

import { useState } from 'react';
import type { ChangeEvent, FormEvent, FocusEvent } from 'react';
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

// ✅ Kiểu trạng thái gửi (4 giá trị)
type TrangThaiGui = 'cho' | 'dang-gui' | 'thanh-cong' | 'that-bai';

export default function FormThemDiaDiem() {
  const [duLieu, setDuLieu] = useState<DuLieuForm>(GIA_TRI_BAN_DAU);
  const [tienIch, setTienIch] = useState<string[]>([]);

  // ✅ State Lab 3: Đánh dấu ô nào đã "chạm" (blur)
  const [daCham, setDaCham] = useState<Record<string, boolean>>({});

  // ✅ State Lab 3: Trạng thái gửi (4 giá trị)
  const [trangThai, setTrangThai] = useState<TrangThaiGui>('cho');

  // ✅ Lỗi là TRẠNG THÁI DẪN XUẤT — tính lại mỗi lần render, KHÔNG lưu state
  const loi = kiemChung(duLieu);

  // --- Handler duy nhất cho mọi ô object ---
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

  // --- Handler riêng cho nhóm tiện ích ---
  function xuLyTich(e: ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.target;
    setTienIch((truoc) =>
      checked ? [...truoc, value] : truoc.filter((ma) => ma !== value)
    );
  }

  // --- Lab 3: Đánh dấu ô đã chạm khi user rời khỏi ---
  function xuLyRoiO(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name } = e.target;
    setDaCham((truoc) => ({ ...truoc, [name]: true }));
  }

  // --- Lab 3: Chỉ trả về lỗi nếu ô đã được chạm ---
  function loiHienThi(ten: string): string | undefined {
    return daCham[ten] ? loi[ten] : undefined;
  }

  // --- Lab 3: Xử lý gửi ---
  async function xuLyGui(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // ✅ Chặn tải lại trang

    // Đánh dấu MỌI ô đã chạm để lộ hết lỗi còn sót
    const tatCaDaCham: Record<string, boolean> = {};
    Object.keys(GIA_TRI_BAN_DAU).forEach((k) => {
      tatCaDaCham[k] = true;
    });
    setDaCham(tatCaDaCham);

    // Nếu còn lỗi → dừng, không gọi API
    if (Object.keys(kiemChung(duLieu)).length > 0) return;

    try {
      setTrangThai('dang-gui');
      await new Promise((giai) => setTimeout(giai, 1200)); // Giả lập gọi máy chủ
      setTrangThai('thanh-cong');
      setDuLieu(GIA_TRI_BAN_DAU);
      setDaCham({});
      setTienIch([]);
    } catch {
      setTrangThai('that-bai');
    }
  }

  // --- Lab 3: Nhập lại form ---
  function xuLyNhapLai() {
    setDuLieu(GIA_TRI_BAN_DAU);
    setDaCham({});
    setTienIch([]);
    setTrangThai('cho');
  }

  return (
    <form className="form-dia-diem" onSubmit={xuLyGui} noValidate>
      <h2>Thêm địa điểm tham quan</h2>

      {/* ===== Ô 1: Tên địa điểm (có validation) ===== */}
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
          aria-invalid={loiHienThi('ten') ? true : undefined}
        />
        {loiHienThi('ten') && (
          <p role="alert" className="thong-bao-loi">
            {loiHienThi('ten')}
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

      {/* ===== Ô 3: Giá vé (có validation) ===== */}
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
          aria-invalid={loiHienThi('giaVe') ? true : undefined}
        />
        {loiHienThi('giaVe') && (
          <p role="alert" className="thong-bao-loi">
            {loiHienThi('giaVe')}
          </p>
        )}
      </div>

      {/* ===== Ô 4: Phường / xã (có validation) ===== */}
      <div className="truong">
        <label htmlFor="phuong">Phường / xã</label>
        <select
          id="phuong"
          name="phuong"
          value={duLieu.phuong}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          aria-invalid={loiHienThi('phuong') ? true : undefined}
        >
          <option value="">-- Chọn phường --</option>
          <option value="phu-hau">Phú Hậu</option>
          <option value="huong-long">Hương Long</option>
          <option value="thuy-bieu">Thuỷ Biểu</option>
          <option value="vy-da">Vỹ Dạ</option>
        </select>
        {loiHienThi('phuong') && (
          <p role="alert" className="thong-bao-loi">
            {loiHienThi('phuong')}
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
              checked={tienIch.includes(ti.ma)}
              onChange={xuLyTich}
            />
            {ti.ten}
          </label>
        ))}
      </fieldset>

      {/* ===== Ô 7: Hộp kiểm xác nhận (có validation) ===== */}
      <label className="hop-kiem-xac-nhan">
        <input
          name="dongY"
          type="checkbox"
          checked={duLieu.dongY}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          aria-invalid={loiHienThi('dongY') ? true : undefined}
        />
        Tôi xác nhận thông tin địa điểm là chính xác
      </label>
      {loiHienThi('dongY') && (
        <p role="alert" className="thong-bao-loi" style={{ marginBottom: 12 }}>
          {loiHienThi('dongY')}
        </p>
      )}

      {/* ===== Thông báo trạng thái gửi ===== */}
      {trangThai === 'thanh-cong' && (
        <p className="thong-bao-thanh-cong" role="status">
          Đã thêm địa điểm thành công!
        </p>
      )}
      {trangThai === 'that-bai' && (
        <p className="thong-bao-that-bai" role="alert">
          Có lỗi khi gửi, vui lòng thử lại.
        </p>
      )}

      {/* ===== Nhóm nút ===== */}
      <div className="nhom-nut">
        <button type="submit" disabled={trangThai === 'dang-gui'}>
          {trangThai === 'dang-gui' ? 'Đang lưu...' : 'Thêm địa điểm'}
        </button>
        <button type="button" onClick={xuLyNhapLai}>
          Nhập lại
        </button>
      </div>
    </form>
  );
}