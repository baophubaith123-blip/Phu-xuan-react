// monAn.ts — Dữ liệu mẫu món ăn Huế (Buổi 9 · Lab 3)
// INT.7.18 — Web FrontEnd nâng cao

export interface MonAn {
  id: number;
  ten: string;
  gia: number;
}

export const DANH_SACH_MON_AN: MonAn[] = [
  { id: 1, ten: 'Bún bò Huế', gia: 35000 },
  { id: 2, ten: 'Cơm hến', gia: 20000 },
  { id: 3, ten: 'Bánh bèo', gia: 15000 },
];