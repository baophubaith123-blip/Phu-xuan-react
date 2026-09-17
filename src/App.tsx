// App.tsx — Lab 5 Buổi 4: Trang danh sách địa điểm hoàn chỉnh
// Buổi 4 · INT.7.18 — Web FrontEnd nâng cao

// ✅ Import default exports (từ Lab 4)
import DiaDiem1 from "./components/DiaDiem1";
import DiaDiem2 from "./components/DiaDiem2";
import DiaDiem3 from "./components/DiaDiem3";

// ✅ Import named exports (từ Bước 1) — chú ý dấu { }
import { NhanTrangThai, demTongSoDiaDiem } from "./components/TienIch";

function App() {
  const danhSachTen = ["Đại Nội Huế", "Chợ Đông Ba", "Cầu Tràng Tiền",];
  const gioHienTaiLa8Gio = true; // Giả lập giờ hiện tại để kiểm tra

  return (
    <div className="trang-chu">
      <h1>Danh sách địa điểm — phu-xuan-react</h1>

      <p>
        Tổng số địa điểm: {demTongSoDiaDiem(danhSachTen)}
        {" "}— <NhanTrangThai dangMoCua={gioHienTaiLa8Gio} />
      </p>

      <DiaDiem1 />
      <DiaDiem2 />
      <DiaDiem3 />
    </div>
  );
}

export default App;