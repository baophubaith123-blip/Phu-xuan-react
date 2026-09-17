// DanhSachDiaDanh.tsx — Danh sách địa danh có bộ lọc tối ưu
// Buổi 6 · Lab 4: useMemo + useCallback + React.memo

import { useState, useMemo, useCallback } from 'react';
import TheDiaDanh, { type DiaDanh } from './TheDiaDanh';
import danhSachDiaDanhRaw from '../../data/dia-danh.json';

const danhSachDiaDanh = danhSachDiaDanhRaw as DiaDanh[];

function DanhSachDiaDanh() {
  const [boLoc, setBoLoc] = useState('');
  const [danhSachYeuThich, setDanhSachYeuThich] = useState<number[]>([]);

  // ✅ useMemo: Lọc danh sách — chỉ tính lại khi danhSach hoặc boLoc đổi
  const danhSachDaLoc = useMemo(() => {
    console.log('🔍 Đang lọc với từ khoá:', boLoc || '(trống)');

    // Giả lập phép tính tốn kém (để thấy rõ lợi ích của useMemo)
    // Trong dự án thật, đây có thể là lọc + sắp xếp hàng nghìn item
    return danhSachDiaDanh.filter((d) =>
      d.ten.toLowerCase().includes(boLoc.toLowerCase())
    );
  }, [boLoc]);  // danhSachDiaDanh là biến module — không bao giờ đổi, nên chỉ cần [boLoc]

  // ✅ useCallback: Hàm không đổi giữa các lần render
  // → TheDiaDanh (đã bọc memo) sẽ không render lại khi cha re-render
  const themYeuThich = useCallback((id: number) => {
    console.log('💖 Thêm yêu thích:', id);
    setDanhSachYeuThich((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
  }, []);  // ← Mảng rỗng: hàm không bao giờ được tạo lại

  return (
    <div className="danh-sach-dia-danh">
      <input
        type="text"
        value={boLoc}
        onChange={(e) => setBoLoc(e.target.value)}
        placeholder="🔍 Lọc theo tên địa danh…"
        className="danh-sach-dia-danh__input"
      />

      <p className="danh-sach-dia-danh__info">
        Hiển thị: <strong>{danhSachDaLoc.length}</strong> / {danhSachDiaDanh.length} địa danh
        {danhSachYeuThich.length > 0 && ` · Đã yêu thích: ${danhSachYeuThich.length}`}
      </p>

      <div className="danh-sach-dia-danh__list">
        {danhSachDaLoc.map((diaDanh) => (
          <TheDiaDanh
            key={diaDanh.id}
            diaDanh={diaDanh}
            onYeuThich={themYeuThich}
          />
        ))}
      </div>
    </div>
  );
}

export default DanhSachDiaDanh;