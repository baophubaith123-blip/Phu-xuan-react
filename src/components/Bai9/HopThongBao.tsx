// HopThongBao.tsx — Hộp thông báo tổng quát + biến thể chuyên biệt
// Buổi 9 · Lab 4: Composition & Specialization
// INT.7.18 — Web FrontEnd nâng cao

import type { ReactNode } from 'react';
import './HopThongBao.css';

// ============================================================
// Component TỔNG QUÁT
// ============================================================

interface HopThongBaoProps {
  mauNen?: string;       // Màu nền (có giá trị mặc định)
  children: ReactNode;   // Nội dung bên trong
}

function HopThongBao({ mauNen = '#e6f0ef', children }: HopThongBaoProps) {
  return (
    <div
      className="hop-thong-bao"
      style={{ background: mauNen }}
    >
      {children}
    </div>
  );
}

// ============================================================
// Biến thể CHUYÊN BIỆT — dùng lại HopThongBao (composition)
// ============================================================

interface HopThongBaoThanhCongProps {
  children: ReactNode;
}

export function HopThongBaoThanhCong({ children }: HopThongBaoThanhCongProps) {
  return (
    <HopThongBao mauNen="#e7f3ec">
      <strong style={{ color: '#1e7a46' }}>Thành công! </strong>
      {children}
    </HopThongBao>
  );
}

export default HopThongBao;