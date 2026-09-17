// App.tsx — Buổi 8: Biểu mẫu có kiểm soát + Custom Hook
// INT.7.18 — Web FrontEnd nâng cao

import './styles/Bai8.css';
import FormThemDiaDiem from './features/dia-diem/FormThemDiaDiem';
import FormGopY from './features/gop-y/FormGopY';

export default function App() {
  return (
    <main className="trang-Bai8">
      <h1>Bài 8 — Biểu mẫu có kiểm soát</h1>

      {/* Form 1: Thêm địa điểm — dùng hook useForm */}
      <FormThemDiaDiem />

      {/* Form 2: Góp ý — dùng LẠI hook useForm */}
      <FormGopY />
    </main>
  );
}