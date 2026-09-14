// Header.tsx — thanh tiêu đề của phu-xuan-react
// Đây là thành phần React ĐẦU TIÊN bạn tự viết trong học phần này

// Bước 1: Định nghĩa thành phần — một hàm trả về mô tả giao diện (JSX)
function Header() {
  return (
    <header>
      <h1>📚 phu-xuan-react</h1>
      <p>Ứng dụng quản lý bài viết — Web FrontEnd nâng cao</p>
      <p>Trường Đại học Phú Xuân · Khoa Công nghệ thông tin</p>
    </header>
  )
}

// Bước 2: Xuất thành phần để các file khác có thể nhập vào
export default Header