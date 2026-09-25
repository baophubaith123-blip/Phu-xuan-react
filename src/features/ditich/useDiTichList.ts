// useDiTichList.ts — Custom Hook quản lý danh sách di tích
// Buổi 10 · Lab 4: Thay thế Container bằng Custom Hook
// INT.7.18 — Web FrontEnd nâng cao

import { useState } from 'react';
import type { DiTich, DiTichFilter } from './types';

const BO_LOC_MAC_DINH: DiTichFilter = {
  tuKhoa: '',
  loai: 'tat-ca',
  chiChuaThamQuan: false,
};

export function useDiTichList(dataGoc: DiTich[]) {
  const [danhSach, setDanhSach] = useState<DiTich[]>(dataGoc);
  const [boLoc, setBoLoc] = useState<DiTichFilter>(BO_LOC_MAC_DINH);

  // ===== 1. Tính danhSachHienThi từ danhSach + boLoc =====
  const tuKhoaNormalized = boLoc.tuKhoa.trim().toLowerCase();

  const danhSachHienThi = danhSach.filter((d) => {
    // TODO 1: Lọc theo từ khoá
    if (tuKhoaNormalized && !d.ten.toLowerCase().includes(tuKhoaNormalized)) {
      return false;
    }

    // TODO 2: Lọc theo loại
    if (boLoc.loai !== 'tat-ca' && d.loai !== boLoc.loai) {
      return false;
    }

    // TODO 3: Lọc theo chiChuaThamQuan
    if (boLoc.chiChuaThamQuan && d.daThamQuan) {
      return false;
    }

    return true;
  });

  // ===== 2. Cập nhật bộ lọc =====
  const capNhatBoLoc = (patch: Partial<DiTichFilter>) => {
    setBoLoc((prev) => ({ ...prev, ...patch }));
  };

  // ===== 3. Đảo trạng thái tham quan =====
  const danhDauDaThamQuan = (id: string) => {
    setDanhSach((prev) =>
      prev.map((d) =>
        d.id === id ? { ...d, daThamQuan: !d.daThamQuan } : d
      )
    );
  };

  const resetBoLoc = () => setBoLoc(BO_LOC_MAC_DINH);

  return {
    danhSachHienThi,
    boLoc,
    capNhatBoLoc,
    danhDauDaThamQuan,
    resetBoLoc,
  };
}