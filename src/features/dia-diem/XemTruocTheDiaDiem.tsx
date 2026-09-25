// XemTruocTheDiaDiem.tsx — Khung xem trước (chỉ đọc)
// Buổi 8 · Lab 5: Nâng state lên cha, con chỉ nhận props
// INT.7.18 — Web FrontEnd nâng cao

import type { DuLieuForm } from './types';

interface XemTruocTheDiaDiemProps {
  duLieu: DuLieuForm;
}

export default function XemTruocTheDiaDiem({ duLieu }: XemTruocTheDiaDiemProps) {
  return (
    <aside className="the-xem-truoc">
      <h3 className="the-xem-truoc__tieu-de">
        {duLieu.ten || 'Tên địa điểm sẽ hiện ở đây'}
      </h3>

      <p className="the-xem-truoc__mo-ta">
        {duLieu.moTa || 'Mô tả ngắn sẽ hiện ở đây...'}
      </p>

      <p>
        <strong>Giá vé: </strong>
        {duLieu.giaVe
          ? Number(duLieu.giaVe).toLocaleString('vi-VN') + ' đ'
          : 'Chưa nhập'}
      </p>

      <p>
        <strong>Phường: </strong>
        {duLieu.phuong || 'Chưa chọn'}
      </p>

      <p>
        <strong>Loại hình: </strong>
        {duLieu.loaiHinh === 'di-tich' ? 'Di tích lịch sử' : 'Điểm ẩm thực'}
      </p>

      {duLieu.tienIch.length > 0 && (
        <p>
          <strong>Tiện ích: </strong>
          {duLieu.tienIch.join(', ')}
        </p>
      )}

      {duLieu.dongY && (
        <p className="the-xem-truoc__xac-nhan">✓ Đã xác nhận thông tin</p>
      )}
    </aside>
  );
}