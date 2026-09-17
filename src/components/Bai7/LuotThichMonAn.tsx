// LuotThichMonAn.tsx — Phiên bản hoàn chỉnh
// Buổi 7 · Lab 3: Updater function

import { useState } from 'react';

export default function LuotThichMonAn() {
  const [luotThich, setLuotThich] = useState(0);

  // ✅ Updater function: mỗi lời gọi nhận kết quả của lời gọi trước
  function handleThich3() {
    setLuotThich((truoc) => truoc + 1);
    setLuotThich((truoc) => truoc + 1);
    setLuotThich((truoc) => truoc + 1);
  }

  return (
    <div className="luot-thich">
      <p>Bún bò Huế — {luotThich} lượt thích</p>
      <button onClick={() => setLuotThich((t) => t + 1)}>+1</button>
      <button onClick={handleThich3}>+3 lượt thích</button>
      <button onClick={() => setLuotThich(0)}>Đặt lại</button>
    </div>
  );
}