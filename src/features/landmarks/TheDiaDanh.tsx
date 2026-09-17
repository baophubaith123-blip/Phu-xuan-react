// TheDiaDanh.tsx — Thẻ địa danh (được bọc React.memo)
// Buổi 6 · Lab 4: React.memo để tránh render thừa

import { memo } from 'react';

export interface DiaDanh {
  id: number;
  ten: string;
  khuVuc: string;
}

interface TheDiaDanhProps {
  diaDanh: DiaDanh;
  onYeuThich: (id: number) => void;
}

function TheDiaDanh({ diaDanh, onYeuThich }: TheDiaDanhProps) {
  // ✅ Log để quan sát khi nào component render lại
  console.log('🎴 TheDiaDanh render:', diaDanh.ten);

  return (
    <div className="the-dia-danh">
      <div>
        <h4>{diaDanh.ten}</h4>
        <p className="the-dia-danh__khu-vuc">📍 {diaDanh.khuVuc}</p>
      </div>
      <button
        className="the-dia-danh__btn"
        onClick={() => onYeuThich(diaDanh.id)}
      >
        ♡ Yêu thích
      </button>
    </div>
  );
}

// ✅ Bọc React.memo — chỉ render lại khi props thay đổi
export default memo(TheDiaDanh);