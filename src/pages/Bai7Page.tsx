// Bai7Page.tsx — Trang chính của Bài 7
// Buổi 7 · INT.7.18 — Web FrontEnd nâng cao

import '../styles/Bai7.css';
import ThuSuKien from '../components/Bai7/ThuSuKien';
import DanhSachDiaDanh from '../components/Bai7/DanhSachDiaDanh';

export default function Bai7Page() {
  return (
    <main className="trang-Bai7">
      <h1>Bài 7 — Quản lý sự kiện trong React</h1>

      <ThuSuKien />
      <DanhSachDiaDanh />
    </main>
  );
}