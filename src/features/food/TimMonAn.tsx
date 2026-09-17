// TimMonAn.tsx — Ô tìm kiếm tự động focus khi mount
// Buổi 6 · Lab 3: useRef cho DOM & giá trị không gây render

import { useRef, useEffect, useState } from 'react';

function TimMonAn() {
  // ✅ Ref #1: Tham chiếu đến thẻ <input> trong DOM
  // Type: HTMLInputElement (vì ref gắn vào <input>)
  const oTimKiemRef = useRef<HTMLInputElement>(null);

  // ✅ Ref #2: Lưu giá trị nội bộ — KHÔNG gây render
  const soLanRenderRef = useRef(0);
  soLanRenderRef.current = soLanRenderRef.current + 1;
  console.log('TimMonAn đã render:', soLanRenderRef.current, 'lần');

  const [tuKhoa, setTuKhoa] = useState('');

  // Tự động focus vào input sau khi DOM mount
  useEffect(() => {
    oTimKiemRef.current?.focus();
  }, []);

  return (
    <div className="tim-mon-an">
      <input
        ref={oTimKiemRef}
        type="text"
        value={tuKhoa}
        onChange={(e) => setTuKhoa(e.target.value)}
        placeholder="Tìm bún bò, cơm hến, bánh bèo…"
        className="tim-mon-an__input"
      />

      {/* Hiển thị số lần render — để quan sát */}
      <p className="tim-mon-an__render-count">
        Đã render {soLanRenderRef.current} lần
      </p>
    </div>
  );
}

export default TimMonAn;