// App.tsx — Buổi 9: Tái sử dụng & Kết hợp thành phần
// INT.7.18 — Web FrontEnd nâng cao

import TheDiaDanh from './components/Bai9/TheDiaDanh';
import { DANH_SACH_DIA_DANH } from './du-lieu/diaDanh';
import './App.css';

function App() {
  return (
    <div className="trang">
      <h1>Khám phá Cố đô Huế</h1>

      <div className="luoi-dia-danh">
        {DANH_SACH_DIA_DANH.map((dd) => (
          <TheDiaDanh
            key={dd.id}
            anh={dd.anh}
            ten={dd.ten}
            moTa={dd.moTa}
          />
        ))}
      </div>
    </div>
  );
}

export default App;