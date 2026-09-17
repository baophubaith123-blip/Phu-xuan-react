// App.tsx — Lab 1 Buổi 4: Bắt lỗi JSX
// Buổi 4 · INT.7.18 — Web FrontEnd nâng cao

function App() {
  return (
    // ✅ Lỗi #1 đã sửa: Bọc 2 phần tử ngang cấp trong Fragment <>...</>
    <>
      {/* ✅ Lỗi #4 đã sửa: style là object, thuộc tính CSS viết camelCase */}
      <h1 style={{ color: "teal", fontSize: 28 }}>
        Phòng thí nghiệm JSX — phu-xuan-react
      </h1>

      <p>Buổi 4: Giới thiệu JSX</p>

      {/* ✅ Lỗi #2 đã sửa: thẻ <img> tự đóng bằng /> */}
      {/* ✅ Lỗi #3 đã sửa: dùng className thay vì class */}
      <img
        src="https://placehold.co/80x80"
        className="avatar"
        alt="avatar"
      />
    </>
  );
}

export default App;