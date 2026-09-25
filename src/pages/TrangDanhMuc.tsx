// TrangDanhMuc.tsx — Trang danh mục hoàn chỉnh cho đồ án
// Buổi 9 · Lab 4: Lắp ghép tất cả component
// INT.7.18 — Web FrontEnd nâng cao

import BoCucTrang from '../components/Bai9/BoCucTrang';
import TheDiaDanh from '../components/Bai9/TheDiaDanh';
import HopThongBao, { HopThongBaoThanhCong } from '../components/Bai9/HopThongBao';
import { DANH_SACH_DIA_DANH } from '../du-lieu/diaDanh';

function TrangDanhMuc() {
  const soLuong = DANH_SACH_DIA_DANH.length;

  return (
    <BoCucTrang
      // ✅ Khe 1: Header
      thanhDieuHuong="Danh mục địa danh Huế"

      // ✅ Khe 3: Footer
      chanTrang={<span>© 2026 phu-xuan-react — INT.7.18</span>}

      // ✅ Khe 2: Main
      noiDungChinh={
        <>
          {/* Hộp thông báo tổng quát */}
          <HopThongBao>
            Hiện có <strong>{soLuong}</strong> địa danh đang được giới thiệu.
          </HopThongBao>

          {/* Hộp thông báo chuyên biệt — dùng lại HopThongBao */}
          <HopThongBaoThanhCong>
            Dữ liệu đã tải xong.
          </HopThongBaoThanhCong>

          {/* Lưới thẻ địa danh */}
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
        </>
      }
    />
  );
}

export default TrangDanhMuc;