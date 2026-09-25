// TrangDanhMuc.tsx — Trang danh mục hoàn chỉnh cho đồ án
// Buổi 9 · Lab 4 + Lab 5: Lắp ghép + Nút tái sử dụng
// INT.7.18 — Web FrontEnd nâng cao

import BoCucTrang from '../components/Bai9/BoCucTrang';
import TheDiaDanh from '../components/Bai9/TheDiaDanh';
import HopThongBao, { HopThongBaoThanhCong } from '../components/Bai9/HopThongBao';
import DanhSach from '../components/Bai9/DanhSach';
import Nut from '../components/Bai9/Nut';   // ✅ Import nút
import { DANH_SACH_DIA_DANH } from '../du-lieu/diaDanh';
import { DANH_SACH_MON_AN } from '../du-lieu/monAn';

function TrangDanhMuc() {
  const soLuong = DANH_SACH_DIA_DANH.length;

  return (
    <BoCucTrang
      thanhDieuHuong={
        // ✅ Dùng Nut lần 1: Nút ở header (biến thể "phụ", nền trắng)
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Danh mục địa danh Huế</span>
          <Nut loai="phu" kichThuoc="nho" onClick={() => alert('Chức năng đăng nhập')}>
            🔑 Đăng nhập
          </Nut>
        </div>
      }

      chanTrang={<span>© 2026 phu-xuan-react — INT.7.18</span>}

      noiDungChinh={
        <>
          <HopThongBao>
            Hiện có <strong>{soLuong}</strong> địa danh đang được giới thiệu.
          </HopThongBao>

          <HopThongBaoThanhCong>
            Dữ liệu đã tải xong.
          </HopThongBaoThanhCong>

          {/* ✅ Dùng Nut lần 2: Nút hành động chính */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            <Nut
              loai="chinh"
              kichThuoc="vua"
              onClick={() => alert('Xem tất cả địa danh')}
            >
              📍 Xem tất cả địa danh
            </Nut>
            <Nut
              loai="phu"
              kichThuoc="vua"
              onClick={() => alert('Đã yêu thích!')}
            >
              ♡ Yêu thích
            </Nut>
          </div>

          <h2>Địa danh nổi bật</h2>
          <div className="luoi-dia-danh">
            {DANH_SACH_DIA_DANH.map((dd) => (
              <TheDiaDanh
                key={dd.id}
                anh={dd.anh}
                ten={dd.ten}
                moTa={dd.moTa}
              />
            ))}
          </div>

          {/* ✅ Dùng Nut lần 3: Nút trong danh sách ẩm thực */}
          <h2>Ẩm thực Huế</h2>
          <DanhSach
            cacMuc={DANH_SACH_MON_AN}
            hienThiMuc={(mon) => (
              <>
                <span>
                  {mon.ten} — {mon.gia.toLocaleString('vi-VN')}đ
                </span>
                <Nut
                  loai="chinh"
                  kichThuoc="nho"
                  onClick={() => alert(`Đặt món: ${mon.ten}`)}
                >
                  Đặt món
                </Nut>
              </>
            )}
          />

          {/* ✅ Dùng Nut lần 4: Nút nguy hiểm */}
          <div style={{ marginTop: 20 }}>
            <Nut
              loai="nguy-hiem"
              kichThuoc="vua"
              onClick={() => {
                if (confirm('Bạn có chắc muốn xoá toàn bộ danh mục?')) {
                  alert('Đã xoá!');
                }
              }}
            >
              🗑 Xoá danh mục
            </Nut>
          </div>
        </>
      }
    />
  );
}

export default TrangDanhMuc;