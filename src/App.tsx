// App.tsx — Buổi 8: Biểu mẫu có kiểm soát
// INT.7.18 — Web FrontEnd nâng cao

import './styles/Bai8.css';
import TrangThemDiaDiem from './pages/TrangThemDiaDiem';
import FormGopY from './features/gop-y/FormGopY';

export default function App() {
  return (
    <main className="trang-Bai8">
      <h1>Bài 8 — Biểu mẫu có kiểm soát</h1>

      {/* ✅ Lab 5: Trang có khung xem trước (cha giữ state) */}
      <TrangThemDiaDiem />

      {/* Form Góp ý (vẫn dùng hook độc lập) */}
      <FormGopY />
    </main>
  );
}