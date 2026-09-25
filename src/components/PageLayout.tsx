// PageLayout.tsx — Khung trang với 3 khe có tên (named slots)
// Buổi 10 · Lab 3: Composition — layout dùng lại được
// INT.7.18 — Web FrontEnd nâng cao

import type { ReactNode } from 'react';
import './PageLayout.css';

interface PageLayoutProps {
  header: ReactNode;   // Khe trên cùng (tiêu đề, tìm kiếm...)
  sidebar: ReactNode;  // Khe bên trái (bộ lọc, danh mục...)
  main: ReactNode;     // Khe chính (nội dung, danh sách...)
}

// ✅ Khung 3 khe — KHÔNG biết gì về tour, di tích, hay bất kỳ feature nào
// → Tái sử dụng được cho mọi trang danh sách
export function PageLayout({ header, sidebar, main }: PageLayoutProps) {
  return (
    <div className="page-layout">
      <header className="page-layout__header">{header}</header>
      <div className="page-layout__body">
        <aside className="page-layout__sidebar">{sidebar}</aside>
        <main className="page-layout__main">{main}</main>
      </div>
    </div>
  );
}