// monAnHue.ts — Dữ liệu mẫu món ăn Huế

export interface MonAn {
  id: string;
  ten: string;
  gia: number;
}

export const DS_MON_AN: MonAn[] = [
  { id: 'bun-bo', ten: 'Bún bò Huế', gia: 45000 },
  { id: 'com-hen', ten: 'Cơm hến', gia: 20000 },
  { id: 'banh-beo', ten: 'Bánh bèo', gia: 30000 },
  { id: 'banh-khoai', ten: 'Bánh khoái', gia: 35000 },
  { id: 'banh-loc', ten: 'Bánh lọc', gia: 30000 },
  { id: 'che-hue', ten: 'Chè Huế', gia: 15000 },
  { id: 'nem-lui', ten: 'Nem lụi', gia: 40000 },
];