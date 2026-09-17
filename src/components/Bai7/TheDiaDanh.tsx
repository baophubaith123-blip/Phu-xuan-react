// TheDiaDanh.tsx — Component con: chỉ hiển thị và báo sự kiện lên cha
// Buổi 7 · Lab 2: Component con KHÔNG giữ state "đang chọn"

import type { DiaDanh } from '../../data/diaDanhHue';

interface TheDiaDanhProps {
  diaDanh: DiaDanh;
  dangChon: boolean;
  onChon: (id: number) => void;
}

export default function TheDiaDanh({ diaDanh, dangChon, onChon }: TheDiaDanhProps) {
  return (
    <li className={'the-dia-danh' + (dangChon ? ' dang-chon' : '')}>
      <label>
        <input
          type="checkbox"
          checked={dangChon}
          onChange={() => onChon(diaDanh.id)}
        />
        <span className="ten">{diaDanh.ten}</span>
        <span className="loai">{diaDanh.loai}</span>
      </label>
    </li>
  );
}