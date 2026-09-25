// The.tsx — Thành phần khung với children
// Buổi 9 · Lab 2: Props + children + conditional rendering
// INT.7.18 — Web FrontEnd nâng cao

import type { ReactNode } from 'react';
import './The.css';

interface TheProps {
  tieuDe?: string;      // Tiêu đề tùy chọn
  children: ReactNode;  // Nội dung bất kỳ
}

function The({ tieuDe, children }: TheProps) {
  return (
    <div className="the">
      {/* ✅ Kết xuất có điều kiện: chỉ vẽ tiêu đề nếu có */}
      {tieuDe && <div className="the__dau">{tieuDe}</div>}
      <div className="the__than">{children}</div>
    </div>
  );
}

export default The;