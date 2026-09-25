// App.tsx — Buổi 9 · Lab 3: Khe JSX + Render Props
// INT.7.18 — Web FrontEnd nâng cao

import BoCucTrang from './components/Bai9/BoCucTrang';
import DanhSach from './components/Bai9/DanhSach';
import TheDiaDanh from './components/Bai9/TheDiaDanh';
import { DANH_SACH_DIA_DANH } from './du-lieu/diaDanh';
import { DANH_SACH_MON_AN } from './du-lieu/monAn';
import './App.css';

function App() {
  return (
    <BoCucTrang
      // ✅ Khe 1: Header
      thanhDieuHuong="Du lịch Huế — phu-xuan-react"

      // ✅ Khe 3: Footer
      chanTrang={<span>© 2026 Nhóm — INT.7.18</span>}

      // ✅ Khe 2: Main — chứa nhiều phần tử, dùng Fragment
      noiDungChinh={
        <>
          <h2>Địa danh</h2>
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

          {/* ===== Danh sách 1: Kiểu chữ đậm ===== */}
          <h2>Ẩm thực (kiểu chữ)</h2>
          <DanhSach
            cacMuc={DANH_SACH_MON_AN}
            hienThiMuc={(mon) => (
              <strong>
                {mon.ten} — {mon.gia.toLocaleString('vi-VN')}đ
              </strong>
            )}
          />

          {/* ===== Danh sách 2: Kiểu có nút (CÙNG DanhSach, CÙNG dữ liệu) ===== */}
          <h2>Ẩm thực (kiểu có nút)</h2>
          <DanhSach
            cacMuc={DANH_SACH_MON_AN}
            hienThiMuc={(mon) => (
              <span>
                {mon.ten} <button>Đặt món</button>
              </span>
            )}
          />
        </>
      }
    />
  );
}

export default App;