// ditich.ts — Dữ liệu 8 di tích Huế (Buổi 10 · Lab 4)
// INT.7.18 — Web FrontEnd nâng cao

import type { DiTich } from '../features/ditich/types';

export const danhSachDiTich: DiTich[] = [
  {
    id: 'd01',
    ten: 'Đại Nội Huế',
    loai: 'kinh-thanh',
    theKy: 19,
    moTa: 'Kinh thành của triều Nguyễn, di sản văn hoá thế giới UNESCO.',
    daThamQuan: false,
  },
  {
    id: 'd02',
    ten: 'Lăng Tự Đức',
    loai: 'lang-tam',
    theKy: 19,
    moTa: 'Khu lăng giữa rừng thông và hồ sen yên tĩnh, kiến trúc tinh tế.',
    daThamQuan: false,
  },
  {
    id: 'd03',
    ten: 'Lăng Khải Định',
    loai: 'lang-tam',
    theKy: 20,
    moTa: 'Nổi tiếng với nghệ thuật khảm sành sứ, kết hợp kiến trúc Á – Âu.',
    daThamQuan: false,
  },
  {
    id: 'd04',
    ten: 'Lăng Minh Mạng',
    loai: 'lang-tam',
    theKy: 19,
    moTa: 'Lăng tẩm uy nghi, hài hoà với thiên nhiên, chuẩn mực kiến trúc.',
    daThamQuan: false,
  },
  {
    id: 'd05',
    ten: 'Chùa Thiên Mụ',
    loai: 'chua',
    theKy: 17,
    moTa: 'Ngôi chùa cổ linh thiêng với tháp Phước Duyên bên sông Hương.',
    daThamQuan: true,
  },
  {
    id: 'd06',
    ten: 'Cầu Trường Tiền',
    loai: 'cong-trinh-cong-cong',
    theKy: 19,
    moTa: 'Cây cầu thép bắc qua sông Hương, biểu tượng của thành phố Huế.',
    daThamQuan: true,
  },
  {
    id: 'd07',
    ten: 'Đàn Nam Giao',
    loai: 'te-dan',
    theKy: 19,
    moTa: 'Đàn tế trời đất của triều Nguyễn, nơi vua tế lễ hàng năm.',
    daThamQuan: false,
  },
  {
    id: 'd08',
    ten: 'Chùa Từ Đàm',
    loai: 'chua',
    theKy: 17,
    moTa: 'Ngôi chùa cổ, trụ sở của Giáo hội Phật giáo Việt Nam.',
    daThamQuan: false,
  },
];