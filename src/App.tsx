// App.tsx — Buổi 9 · Lab 2: Thành phần khung The với children
// INT.7.18 — Web FrontEnd nâng cao

import The from './components/Bai9/The';
import TheDiaDanh from './components/Bai9/TheDiaDanh';
import { DANH_SACH_DIA_DANH } from './du-lieu/diaDanh';
import './App.css';

function App() {
  return (
    <div className="trang">
      <h1>Khám phá Cố đô Huế</h1>

      {/* ===== Khung 1: Chứa lưới địa danh ===== */}
      <The tieuDe="Di tích tiêu biểu">
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
      </The>

      {/* ===== Khung 2: Chứa danh sách ẩm thực ===== */}
      <The tieuDe="Ẩm thực Huế">
        <ul>
          <li>Bún bò Huế</li>
          <li>Cơm hến</li>
          <li>Bánh bèo, bánh nậm, bánh lọc</li>
        </ul>
      </The>

      {/* ===== Khung 3: Không có tiêu đề (test conditional) ===== */}
      <The>
        <p>
          💡 Khung này <strong>không có tiêu đề</strong> — vì prop{' '}
          <code>tieuDe</code> không được truyền.
        </p>
      </The>
    </div>
  );
}

export default App;