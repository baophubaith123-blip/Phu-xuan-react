// WelcomeBanner.tsx — banner chào mừng người dùng trên trang chủ

function WelcomeBanner() {
  // Khai báo dữ liệu trực tiếp trong thành phần (chưa dùng props hay state)
  const tenKhoaHoc = 'Web FrontEnd nâng cao (INT.7.18)'
  const soTinChi = 3
  const tongBuoi = 20

  return (
    <section>
      <h2>Chào mừng bạn đến với khoá học!</h2>

      {/* Nhúng biểu thức JavaScript vào JSX bằng dấu {} */}
      <p>Môn học: {tenKhoaHoc}</p>
      <p>Số tín chỉ: {soTinChi} tín chỉ</p>
      <p>Tổng số buổi: {tongBuoi} buổi</p>

      {/* Biểu thức tính toán trực tiếp trong JSX */}
      <p>
        Hiện tại: Buổi 2 / {tongBuoi} ({Math.round((2 / tongBuoi) * 100)}% hoàn thành)
      </p>
    </section>
  )
}

export default WelcomeBanner