// TrangMonAn.tsx — Trang chọn và xem chi tiết món ăn Huế
// Buổi 6 · Lab 2: Component cha quản lý idMonAn

import { useState } from 'react';
import ChiTietMonAn from './ChiTietMonAn';

function TrangMonAn() {
  const [idDangChon, setIdDangChon] = useState(1);

  return (
    <div className="trang-mon-an">
      <h2>🍜 Ẩm thực Huế</h2>

      <div className="trang-mon-an__buttons">
        <button
          onClick={() => setIdDangChon(1)}
          className={idDangChon === 1 ? 'is-active' : ''}
        >
          Bún bò Huế
        </button>
        <button
          onClick={() => setIdDangChon(2)}
          className={idDangChon === 2 ? 'is-active' : ''}
        >
          Cơm hến
        </button>
        <button
          onClick={() => setIdDangChon(3)}
          className={idDangChon === 3 ? 'is-active' : ''}
        >
          Bánh bèo
        </button>
        <button
          onClick={() => setIdDangChon(4)}
          className={idDangChon === 4 ? 'is-active' : ''}
        >
          Nem lụi
        </button>
      </div>

      <ChiTietMonAn idMonAn={idDangChon} />
    </div>
  );
}

export default TrangMonAn;