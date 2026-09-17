// App.tsx — Lab 3 Buổi 4: Bug Hunt
// Buổi 4 · INT.7.18 — Web FrontEnd nâng cao

function App() {
  const soLuongDiaDiem = 3;
  const trangThaiMoCua = true;

  return (
    // ✅ Lỗi 3: Bọc tất cả trong Fragment
    <>
      {/* ✅ Lỗi 2: class → className */}
      <div className="trang-chu">
        <h1>Danh sách địa điểm</h1>
        <p>Tổng số địa điểm: {soLuongDiaDiem}</p>
      </div>

      {/* ✅ Lỗi 4: Thêm dấu : vào ternary */}
      <p>
        Trạng thái: {trangThaiMoCua ? "Đang mở cửa" : "Đã đóng cửa"}
      </p>

      {/* ✅ Lỗi 5: Thẻ img tự đóng */}
      <img src="https://placehold.co/60x60" alt="placeholder" />
    </>
  );
}

export default App;