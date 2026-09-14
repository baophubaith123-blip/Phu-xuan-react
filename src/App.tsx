// App.tsx — trang chủ phu-xuan-react v0.1
// Buổi 2 · INT.7.18 — Web FrontEnd nâng cao

import { formatDate, toSlug } from './utils/string-utils';
import Header from './components/Header'
import WelcomeBanner from './components/WelcomeBanner'
import PostCard from './components/PostCard'
import Footer from './components/Footer'

function App() {
  // --- Thêm tạm 2 dòng log để kiểm tra module mới (Lab 1 - Buổi 3) ---
  console.log('Hôm nay:', formatDate(new Date()));
  console.log('Slug:', toSlug('Trang chủ phu-xuan-react'));

  return (
    // Fragment <> </> cho phép trả về nhiều thẻ ngang cấp
    // mà không cần bọc trong <div> thừa
    <>
      <Header />
      <main>
        <WelcomeBanner />
        {/* PostCard hiển thị một bài viết mẫu */}
        <PostCard />
      </main>
      <Footer />
    </>
  )
}

export default App