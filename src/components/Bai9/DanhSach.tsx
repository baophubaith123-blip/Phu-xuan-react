// DanhSach.tsx — Component dùng mẫu render props
// Buổi 9 · Lab 3B: Tách logic khỏi hiển thị
// INT.7.18 — Web FrontEnd nâng cao

import type { ReactNode } from 'react';
import './DanhSach.css';

interface DanhSachProps<T> {
  cacMuc: T[];
  hienThiMuc: (muc: T) => ReactNode;
}

function DanhSach<T extends { id: number | string }>({
  cacMuc,
  hienThiMuc,
}: DanhSachProps<T>) {
  return (
    <ul className="danh-sach">
      {cacMuc.map((muc) => (
        <li key={muc.id}>{hienThiMuc(muc)}</li>
      ))}
    </ul>
  );
}

export default DanhSach;