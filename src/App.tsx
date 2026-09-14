// App.tsx — trang chủ phu-xuan-react v0.1
// Buổi 3 · INT.7.18 — Web FrontEnd nâng cao

import { formatDate, toSlug } from './utils/string-utils';
import Header from './components/Header'
import WelcomeBanner from './components/WelcomeBanner'
import PostCard from './components/PostCard'
import Footer from './components/Footer'

// --- Lab 1 Buổi 3: Kiểm tra module string-utils ---
console.log('Hôm nay:', formatDate(new Date()));
console.log('Slug:', toSlug('Trang chủ phu-xuan-react'));

// --- Lab 2 Buổi 3: Đọc biến môi trường ---
// Vite sẽ thay thế các dòng này bằng giá trị thật lúc build
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const appTitle = import.meta.env.VITE_APP_TITLE;
const version = import.meta.env.VITE_APP_VERSION;

// Biến môi trường đặc biệt của Vite (luôn có sẵn, không cần khai báo trong .env)
const isDev = import.meta.env.DEV;    // true khi chạy npm run dev
const isProd = import.meta.env.PROD;  // true khi chạy npm run build
const mode = import.meta.env.MODE;    // 'development' hoặc 'production'

function App() {
  return (
    // Fragment <> </> cho phép trả về nhiều thẻ ngang cấp
    // mà không cần bọc trong <div> thừa
    <>
      <Header />
      <main>
        <WelcomeBanner />

        {/* PostCard hiển thị một bài viết mẫu */}
        <PostCard />

        {/* --- Lab 2 Buổi 3: Bảng thông tin môi trường --- */}
        <section style={{ padding: '1rem', marginTop: '1rem', border: '1px solid #ddd', borderRadius: 8 }}>
          <h2>{appTitle} — v{version}</h2>
          <hr />
          <h3>Thông tin môi trường</h3>
          <table border={1} cellPadding={8} style={{ borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td><strong>API URL</strong></td>
                <td><code>{apiUrl}</code></td>
              </tr>
              <tr>
                <td><strong>Chế độ</strong></td>
                <td><code>{mode}</code></td>
              </tr>
              <tr>
                <td><strong>Đang phát triển?</strong></td>
                <td>{isDev ? '✓ Có' : '✗ Không'}</td>
              </tr>
              <tr>
                <td><strong>Đang production?</strong></td>
                <td>{isProd ? '✓ Có' : '✗ Không'}</td>
              </tr>
            </tbody>
          </table>

          <hr />
          <h3>Kiểm tra bảo mật</h3>
          <p>
            DATABASE_URL (không có VITE_):{' '}
            <code>{String(import.meta.env.DATABASE_URL)}</code>
          </p>
          <p style={{ color: 'green' }}>
            Nếu thấy 'undefined' ở trên → Vite đã bảo vệ biến bí mật đúng cách ✓
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App