// TheDiaDanh.tsx — Thẻ địa danh tái sử dụng qua props
// Buổi 9 · Lab 1: Props + giá trị mặc định + render list
// INT.7.18 — Web FrontEnd nâng cao

import './TheDiaDanh.css';

interface TheDiaDanhProps {
  anh: string;
  ten: string;
  moTa?: string;
}

function TheDiaDanh({
  anh,
  ten,
  moTa = 'Đang cập nhật mô tả...',
}: TheDiaDanhProps) {
  return (
    <div className="the-dia-danh">
      <img className="the-dia-danh__anh" src={anh} alt={ten} />
      <div className="the-dia-danh__than">
        <h3 className="the-dia-danh__ten">{ten}</h3>
        <p className="the-dia-danh__mo-ta">{moTa}</p>
      </div>
    </div>
  );
}

export default TheDiaDanh;