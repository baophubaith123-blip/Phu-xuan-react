// Nut.tsx — Nút tái sử dụng với props + children
// Buổi 9 · Lab 5: Thành phần tái sử dụng của riêng nhóm
// INT.7.18 — Web FrontEnd nâng cao

import type { ReactNode } from 'react';
import './Nut.css';

// ✅ Props — cho phép tùy biến biến thể + kích thước
interface NutProps {
  loai?: 'chinh' | 'phu' | 'nguy-hiem';   // Biến thể màu
  kichThuoc?: 'nho' | 'vua' | 'lon';       // Kích thước
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;                     // ✅ Nhãn nút (nội dung tùy ý)
}

function Nut({
  loai = 'chinh',
  kichThuoc = 'vua',
  onClick,
  disabled = false,
  children,
}: NutProps) {
  // Tạo className động từ props
  const className = `nut nut--${loai} nut--${kichThuoc}`;

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Nut;