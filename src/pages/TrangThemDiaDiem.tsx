// TrangThemDiaDiem.tsx — Trang cha giữ state, truyền xuống 2 con
// Buổi 8 · Lab 5: Nâng state lên (Lifting State Up)
// INT.7.18 — Web FrontEnd nâng cao

import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { kiemChung } from '../features/dia-diem/kiemChung';
import FormThemDiaDiem from '../features/dia-diem/FormThemDiaDiem';
import XemTruocTheDiaDiem from '../features/dia-diem/XemTruocTheDiaDiem';
import type { DuLieuForm } from '../features/dia-diem/types';

const GIA_TRI_BAN_DAU: DuLieuForm = {
  ten: '',
  moTa: '',
  giaVe: '',
  phuong: '',
  loaiHinh: 'di-tich',
  dongY: false,
  tienIch: [],
};

export default function TrangThemDiaDiem() {
  // ✅ CHA gọi hook — giữ toàn bộ state
  const form = useForm(GIA_TRI_BAN_DAU, kiemChung);

  // ✅ State riêng cho thông báo thành công (giữ ở cha)
  const [thongBao, setThongBao] = useState('');

  return (
    <div className="trang-them-dia-diem">
      {/* ✅ Thanh thông báo thành công — hiển thị trên cùng */}
      {thongBao && (
        <p className="thong-bao-thanh-cong" role="status">
          {thongBao}
        </p>
      )}

      {/* ✅ Bố cục 2 cột: form bên trái, xem trước bên phải */}
      <div className="bo-cuc-hai-cot">
        <FormThemDiaDiem
          {...form}
          onThemXong={(gt) => {
            setThongBao(`Đã thêm địa điểm "${gt.ten}" thành công!`);
            setTimeout(() => setThongBao(''), 3000);
          }}
        />

        <XemTruocTheDiaDiem duLieu={form.duLieu} />
      </div>
    </div>
  );
}