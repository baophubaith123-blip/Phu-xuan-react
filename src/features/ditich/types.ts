// types.ts — Interface cho module Di tích (Buổi 10 · Lab 4)
// INT.7.18 — Web FrontEnd nâng cao

export type LoaiDiTich =
  | 'kinh-thanh'
  | 'lang-tam'
  | 'chua'
  | 'te-dan'
  | 'cong-trinh-cong-cong';

export interface DiTich {
  id: string;
  ten: string;
  loai: LoaiDiTich;
  theKy: number;
  moTa: string;
  daThamQuan: boolean;
}

export interface DiTichFilter {
  tuKhoa: string;
  loai: LoaiDiTich | 'tat-ca';
  chiChuaThamQuan: boolean;
}