// MonAnYeuThich.tsx — Sắp xếp món ăn bằng kéo thả + bàn phím
// Buổi 7 · Lab 5 (BONUS): onDragStart/Over/Drop/End + Alt+mũi tên + aria-live

import { useState } from 'react';
import type { DragEvent, KeyboardEvent } from 'react';
import { DS_MON_AN } from '../../data/monAnHue';

// ✅ Hàm THUẦN: trả về MẢNG MỚI với phần tử chuyển từ vị trí `tu` sang `den`
// Không đụng tới state, dễ test độc lập trong Console
function diChuyen<T>(mang: T[], tu: number, den: number): T[] {
  const moi = [...mang];
  const [phanTu] = moi.splice(tu, 1);
  moi.splice(den, 0, phanTu);
  return moi;
}

// Thử nhanh trong Console trình duyệt:
// diChuyen(['A', 'B', 'C', 'D'], 0, 2)  →  ['B', 'C', 'A', 'D']

export default function MonAnYeuThich() {
  const [dsMon, setDsMon] = useState(DS_MON_AN.slice(0, 5));
  const [idDangKeo, setIdDangKeo] = useState<string | null>(null);
  const [idViTriTha, setIdViTriTha] = useState<string | null>(null);
  const [thongBao, setThongBao] = useState('');

  // Hàm tiện ích: báo vị trí mới của món sau khi di chuyển
  function baoViTri(ds: typeof dsMon, id: string) {
    const viTri = ds.findIndex((m) => m.id === id);
    setThongBao(`Đã chuyển ${ds[viTri].ten} đến vị trí ${viTri + 1}`);
  }

  // --- 4 sự kiện kéo thả ---

  function handleDragStart(e: DragEvent<HTMLLIElement>, id: string) {
    setIdDangKeo(id);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', id); // Cần cho Firefox
  }

  function handleDragOver(e: DragEvent<HTMLLIElement>, id: string) {
    e.preventDefault(); // Cho phép thả
    if (id !== idViTriTha) setIdViTriTha(id);
  }

  function handleDrop(e: DragEvent<HTMLLIElement>, idDich: string) {
    e.preventDefault();
    if (idDangKeo === null || idDangKeo === idDich) return;

    const tu = dsMon.findIndex((m) => m.id === idDangKeo);
    const den = dsMon.findIndex((m) => m.id === idDich);
    const moi = diChuyen(dsMon, tu, den);

    setDsMon(moi);
    baoViTri(moi, idDangKeo);
  }

  function handleDragEnd() {
    setIdDangKeo(null);
    setIdViTriTha(null);
  }

  // --- Phím tắt Alt + mũi tên lên/xuống ---

  function handleKeyDown(e: KeyboardEvent<HTMLLIElement>, viTri: number) {
    if (!e.altKey) return; // Chỉ xử lý khi giữ Alt
    const buoc = e.key === 'ArrowUp' ? -1 : e.key === 'ArrowDown' ? 1 : 0;
    if (buoc === 0) return; // Không phải mũi tên
    e.preventDefault(); // Không cuộn trang

    const den = viTri + buoc;
    if (den < 0 || den >= dsMon.length) return; // Vượt biên

    const moi = diChuyen(dsMon, viTri, den);
    setDsMon(moi);
    baoViTri(moi, dsMon[viTri].id);
  }

  // --- Xoá món ---

  function handleXoa(id: string) {
    const mon = dsMon.find((m) => m.id === id);
    if (!mon) return;
    setDsMon((truoc) => truoc.filter((m) => m.id !== id));
    setThongBao(`Đã xoá ${mon.ten} khỏi danh sách`);
  }

  return (
    <section className="lab">
      <h2>Lab 5 — Món Huế yêu thích của tôi</h2>

      <p className="goi-y-thao-tac">
        💡 Kéo thả để sắp xếp, hoặc chọn một món rồi nhấn <kbd>Alt</kbd> +{' '}
        <kbd>↑</kbd>/<kbd>↓</kbd>
      </p>

      <ol className="ds-mon-yeu-thich">
        {dsMon.map((mon, viTri) => (
          <li
            key={mon.id}
            draggable
            tabIndex={0}
            onDragStart={(e) => handleDragStart(e, mon.id)}
            onDragOver={(e) => handleDragOver(e, mon.id)}
            onDrop={(e) => handleDrop(e, mon.id)}
            onDragEnd={handleDragEnd}
            onKeyDown={(e) => handleKeyDown(e, viTri)}
            className={
              (mon.id === idDangKeo ? 'dang-keo ' : '') +
              (mon.id === idViTriTha && mon.id !== idDangKeo
                ? 'vi-tri-tha'
                : '')
            }
          >
            <span>{mon.ten}</span>
            <button
              aria-label={`Xoá ${mon.ten}`}
              onClick={() => handleXoa(mon.id)}
              onKeyDown={(e) => e.stopPropagation()}
            >
              Xoá
            </button>
          </li>
        ))}
      </ol>

      {/* ✅ Vùng thông báo cho trình đọc màn hình */}
      <p className="thong-bao" aria-live="polite">
        {thongBao}
      </p>
    </section>
  );
}