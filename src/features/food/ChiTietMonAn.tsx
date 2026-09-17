// ChiTietMonAn.tsx — Hiển thị chi tiết món ăn theo id
// Buổi 6 · Lab 2: useEffect với dependency & tránh stale data

import { useState, useEffect } from 'react';
import fetchMonAn, { type MonAn } from '../../data/fetchMonAn';

interface ChiTietMonAnProps {
  idMonAn: number;
}

function ChiTietMonAn({ idMonAn }: ChiTietMonAnProps) {
  const [monAn, setMonAn] = useState<MonAn | null>(null);
  const [dangTai, setDangTai] = useState(true);

  useEffect(() => {
    // ✅ Cờ "đã hủy" — ngăn kết quả Promise cũ ghi đè kết quả mới
    let daHuy = false;
    setDangTai(true);

    fetchMonAn(idMonAn).then((data) => {
      if (!daHuy && data) {
        setMonAn(data);
        setDangTai(false);
      }
    });

    // ✅ Cleanup: đánh dấu đã hủy khi idMonAn thay đổi hoặc component unmount
    return () => {
      daHuy = true;
    };
  }, [idMonAn]); // ← Effect chạy lại mỗi khi idMonAn đổi

  if (dangTai) {
    return <p className="chi-tiet-mon-an__loading">⏳ Đang tải thông tin món ăn…</p>;
  }

  if (!monAn) {
    return <p className="chi-tiet-mon-an__error">Không tìm thấy món ăn.</p>;
  }

  return (
    <div className="chi-tiet-mon-an">
      <h3>
        {monAn.ten} — {monAn.gia.toLocaleString('vi-VN')}đ
      </h3>
      <p>{monAn.moTa}</p>
    </div>
  );
}

export default ChiTietMonAn;