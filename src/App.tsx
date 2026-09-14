// App.tsx — thành phần gốc, tập hợp các thành phần con

// Nhập thành phần Header vừa tạo
import Header from './components/Header'

function App() {
  return (
    <div>
      {/* Dùng Header như một thẻ HTML — đây là cú pháp JSX gọi thành phần */}
      <Header />
      <main>
        <p>Nội dung chính sẽ được xây dựng ở các buổi sau.</p>
      </main>
    </div>
  )
}

export default App