// BoCucTrang.tsx — Bố cục trang với 3 khe JSX
// Buổi 9 · Lab 3A: Slot pattern (khe JSX)
// INT.7.18 — Web FrontEnd nâng cao

import type { ReactNode } from 'react';
import './BoCucTrang.css';

interface BoCucTrangProps {
  thanhDieuHuong: ReactNode;  // Vùng header
  noiDungChinh: ReactNode;    // Vùng main
  chanTrang: ReactNode;       // Vùng footer
}

function BoCucTrang({ thanhDieuHuong, noiDungChinh, chanTrang }: BoCucTrangProps) {
  return (
    <div className="bo-cuc">
      <header className="bo-cuc__dau">{thanhDieuHuong}</header>
      <main className="bo-cuc__giua">{noiDungChinh}</main>
      <footer className="bo-cuc__chan">{chanTrang}</footer>
    </div>
  );
}

export default BoCucTrang;