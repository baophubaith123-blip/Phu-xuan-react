// fetchMonAn.ts — Hàm mô phỏng gọi API với độ trễ mạng

import danhSachMonAn from './mon-an.json';

// Định nghĩa kiểu dữ liệu cho món ăn
export interface MonAn {
  id: number;
  ten: string;
  gia: number;
  moTa: string;
}

function fetchMonAn(id: number): Promise<MonAn | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const monAn = (danhSachMonAn as MonAn[]).find((m) => m.id === id);
      resolve(monAn);
    }, 800); // Giả lập độ trễ mạng 800ms
  });
}

export default fetchMonAn;