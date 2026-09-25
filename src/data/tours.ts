// tours.ts — Dữ liệu 6 tour Huế (Buổi 10 · Lab 1)
// INT.7.18 — Web FrontEnd nâng cao

export type TourCategory = 'di-tich' | 'am-thuc' | 'thien-nhien' | 'lang-nghe';

export interface Tour {
  id: string;
  name: string;
  category: TourCategory;
  price: number;      // VND
  duration: number;   // giờ
  image: string;
  hot?: boolean;
}

export const tours: Tour[] = [
  {
    id: 't01',
    name: 'Đại Nội Huế',
    category: 'di-tich',
    price: 300000,
    duration: 3,
    image: 'https://picsum.photos/seed/dainoi/400/260',
    hot: true,
  },
  {
    id: 't02',
    name: 'Chợ Đông Ba',
    category: 'am-thuc',
    price: 150000,
    duration: 2,
    image: 'https://picsum.photos/seed/dongba/400/260',
  },
  {
    id: 't03',
    name: 'Cầu Tràng Tiền',
    category: 'di-tich',
    price: 100000,
    duration: 1,
    image: 'https://picsum.photos/seed/trangtien/400/260',
  },
  {
    id: 't04',
    name: 'Lăng Tự Đức',
    category: 'di-tich',
    price: 400000,
    duration: 4,
    image: 'https://picsum.photos/seed/tuduc/400/260',
    hot: true,
  },
  {
    id: 't05',
    name: 'Đầm phá Tam Giang',
    category: 'thien-nhien',
    price: 600000,
    duration: 5,
    image: 'https://picsum.photos/seed/tamgiang/400/260',
  },
  {
    id: 't06',
    name: 'Làng nón Phú Cam',
    category: 'lang-nghe',
    price: 200000,
    duration: 2,
    image: 'https://picsum.photos/seed/phucam/400/260',
  },
];