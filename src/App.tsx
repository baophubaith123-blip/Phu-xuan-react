// App.tsx — trang chủ phu-xuan-react v0.1
// Buổi 2 · INT.7.18 — Web FrontEnd nâng cao

import Header from './components/Header'
import WelcomeBanner from './components/WelcomeBanner'
import PostCard from './components/PostCard'
import Footer from './components/Footer'

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
      </main>
      <Footer />
    </>
  )
}

export default App