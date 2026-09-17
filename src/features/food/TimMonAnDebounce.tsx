// TimMonAnDebounce.tsx — Tìm kiếm món ăn với useDebounce
// Buổi 6 · Lab 5: Áp dụng Custom Hook useDebounce

import { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import danhSachMonAnRaw from '../../data/mon-an.json';
import type { MonAn } from '../../data/fetchMonAn';

const danhSachMonAn = danhSachMonAnRaw as MonAn[];

function TimMonAnDebounce() {
  const [tuKhoa, setTuKhoa] = useState('');

  // ✅ Áp dụng Custom Hook — giá trị chỉ cập nhật sau 300ms ngừng gõ
  const tuKhoaDaTre = useDebounce(tuKhoa, 300);

  // ✅ Log để kiểm chứng: chỉ chạy khi tuKhoaDaTre thay đổi
  console.log('🔍 Đang lọc theo từ khoá:', tuKhoaDaTre || '(trống)');

  // Lọc danh sách theo từ khoá đã trễ (KHÔNG dùng tuKhoa trực tiếp)
  const danhSachDaLoc = danhSachMonAn.filter((mon) =>
    mon.ten.toLowerCase().includes(tuKhoaDaTre.toLowerCase())
  );

  return (
    <div className="tim-mon-an-debounce">
      <input
        type="text"
        value={tuKhoa}
        onChange={(e) => setTuKhoa(e.target.value)}
        placeholder="🔍 Gõ tên món ăn (VD: bún, cơm, bánh…)"
        className="tim-mon-an-debounce__input"
      />

      <p className="tim-mon-an-debounce__hint">
        ⌨️ Đang gõ: <code>{tuKhoa || '(trống)'}</code>
        {tuKhoa !== tuKhoaDaTre && ' — ⏳ chờ 300ms…'}
      </p>

      <p className="tim-mon-an-debounce__result">
        Kết quả lọc theo: <strong>"{tuKhoaDaTre}"</strong> — Tìm thấy{' '}
        <strong>{danhSachDaLoc.length}</strong> món
      </p>

      <ul className="tim-mon-an-debounce__list">
        {danhSachDaLoc.map((mon) => (
          <li key={mon.id}>
            <strong>{mon.ten}</strong> — {mon.gia.toLocaleString('vi-VN')}đ
            <br />
            <span className="tim-mon-an-debounce__mo-ta">{mon.moTa}</span>
          </li>
        ))}
        {danhSachDaLoc.length === 0 && (
          <li className="tim-mon-an-debounce__empty">
            Không tìm thấy món ăn nào phù hợp.
          </li>
        )}
      </ul>
    </div>
  );
}

export default TimMonAnDebounce;