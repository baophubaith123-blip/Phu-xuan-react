// App.tsx — trang chủ phu-xuan-react v0.2
// Buổi 3 · INT.7.18 — Web FrontEnd nâng cao

// --- Import từ barrel export (kiến trúc mới Lab 3) ---
import { formatDate, toSlug } from './utils';
import { APP_NAME } from './constants';
import type { Post } from './types';

// --- Import các component từ Buổi 2 ---
import Header from './components/Header'
import WelcomeBanner from './components/WelcomeBanner'
import PostCard from './components/PostCard'
import Footer from './components/Footer'

// --- Lab 1 Buổi 3: Kiểm tra module string-utils ---
console.log('Hôm nay:', formatDate(new Date()));
console.log('Slug:', toSlug('Trang chủ phu-xuan-react'));

// --- Lab 2 Buổi 3: Đọc biến môi trường ---
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const version = import.meta.env.VITE_APP_VERSION;
const isDev = import.meta.env.DEV;
const isProd = import.meta.env.PROD;
const mode = import.meta.env.MODE;

// --- Lab 3 Buổi 3: Dữ liệu mẫu dùng kiểu Post mới ---
const samplePost: Post = {
  id: 1,
  title: 'Giới thiệu React và hệ sinh thái hiện đại',
  excerpt: 'Bài viết đầu tiên của phu-xuan-react giới thiệu các khái niệm cốt lõi.',
  content: 'Nội dung đầy đủ sẽ được tải từ API...',
  authorId: 1,
  publishedAt: new Date().toISOString(),
  tags: ['react', 'javascript', 'frontend'],
};

function App() {
  return (
    <>
      <Header />
      <main>
        <WelcomeBanner />

        {/* PostCard hiển thị một bài viết mẫu (từ Buổi 2) */}
        <PostCard />

        {/* --- Lab 3 Buổi 3: Bài viết mẫu dùng kiến trúc mới --- */}
        <section style={{ padding: '1rem', marginTop: '1rem', border: '1px solid #ddd', borderRadius: 8 }}>
          <h2>Kiểm tra kiến trúc mới (Lab 3)</h2>
          <article>
            <h3>{samplePost.title}</h3>
            <p style={{ color: 'gray', fontSize: '0.9em' }}>
              Đăng ngày: {formatDate(samplePost.publishedAt)}
            </p>
            <p>{samplePost.excerpt}</p>
            <p>
              Slug URL: <code>/{toSlug(samplePost.title)}</code>
            </p>
            <div>
              Tags: {samplePost.tags.map(tag => (
                <span key={tag} style={{ marginRight: 8, background: '#eee', padding: '2px 8px', borderRadius: 4 }}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </section>

        {/* --- Lab 2 Buổi 3: Bảng thông tin môi trường --- */}
        <section style={{ padding: '1rem', marginTop: '1rem', border: '1px solid #ddd', borderRadius: 8 }}>
          <h2>{APP_NAME} — v{version}</h2>
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