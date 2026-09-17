// LuotXemDaiNoi.tsx — Đồng hồ đếm lượt xem Đại Nội Huế
// Buổi 6 · Lab 1: useEffect cơ bản — Mount & Cleanup

import { useState, useEffect } from 'react';

function LuotXemDaiNoi() {
  const [luotXem, setLuotXem] = useState(120);

  // ✅ useEffect với mảng phụ thuộc rỗng []
  // → Chỉ chạy 1 lần khi component mount
  useEffect(() => {
    console.log('Đã gắn component — bắt đầu đếm lượt xem');

    const idBoDem = setInterval(() => {
      setLuotXem((soCu) => soCu + 1);
    }, 1000);

    // ✅ Hàm cleanup — chạy khi component unmount
    return () => {
      console.log('Dọn dẹp: đã huỷ bộ đếm lượt xem');
      clearInterval(idBoDem);
    };
  }, []);

  return (
    <div className="the-luot-xem">
      <h3>Đại Nội Huế</h3>
      <p>Đang xem: {luotXem} lượt</p>
    </div>
  );
}

export default LuotXemDaiNoi;