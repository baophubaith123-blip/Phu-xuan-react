function App() {
  const daNopBaiTapVeNha = false;   // Thử đổi thành true để xem sự khác biệt
  const hoTen = "Lê Thị Hồng";
  const maSinhVien = "22CNTT045";
  const diemChuyenCan = 9;
  const diemBaiTap = 8;
  const diemKiemTra = 7.5;

  return (
    <div className="student-card">
      <h2>{hoTen}</h2>
      <p>Mã số sinh viên: {maSinhVien}</p>
      <p>
         Điểm quá trình:{" "}
  {diemChuyenCan * 0.2 + diemBaiTap * 0.4 + diemKiemTra * 0.4}
      </p>
      <p style={{ color: daNopBaiTapVeNha ? "green" : "crimson" }}>
  {daNopBaiTapVeNha
    ? "Đã nộp bài tập về nhà Buổi 3."
    : "Chưa nộp bài tập về nhà Buổi 3 — cần nộp trước Buổi 4!"}
      </p>  
    </div>
  );
}

export default App;