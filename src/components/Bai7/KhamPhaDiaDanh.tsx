// KhamPhaDiaDanh.tsx — Phiên bản hoàn chỉnh
// Buổi 7 · Lab 3: onClickCapture đếm MỌI cú bấm, kể cả khi con đã stopPropagation

import { useState } from 'react';
import { DS_DIA_DANH } from '../../data/diaDanhHue';
import TheDiaDanhMoRong from './TheDiaDanhMoRong';

export default function KhamPhaDiaDanh() {
  const [idDangMo, setIdDangMo] = useState<number | null>(null);
  const [dsYeuThich, setDsYeuThich] = useState<number[]>([]);
  const [soTuongTac, setSoTuongTac] = useState(0);

  // Bấm lại thẻ đang mở thì đóng lại
  function handleXem(id: number) {
    setIdDangMo((truoc) => (truoc === id ? null : id));
  }

  function handleYeuThich(id: number) {
    setDsYeuThich((truoc) =>
      truoc.includes(id) ? truoc.filter((x) => x !== id) : [...truoc, id]
    );
  }

  return (
    // ✅ Pha bắt: đếm MỌI cú bấm trong khu vực, kể cả khi thẻ con đã stopPropagation
    <section
      className="lab"
      onClickCapture={() => setSoTuongTac((t) => t + 1)}
    >
      <h2>Lab 3 — Khám phá địa danh</h2>

      <p className="thong-ke">
        Số lượt tương tác: <strong>{soTuongTac}</strong> · Yêu thích:{' '}
        <strong>{dsYeuThich.length}</strong>
      </p>

      <div className="luoi-the">
        {DS_DIA_DANH.map((dd) => (
          <TheDiaDanhMoRong
            key={dd.id}
            diaDanh={dd}
            dangMo={dd.id === idDangMo}
            laYeuThich={dsYeuThich.includes(dd.id)}
            onXem={handleXem}
            onYeuThich={handleYeuThich}
          />
        ))}
      </div>
    </section>
  );
}