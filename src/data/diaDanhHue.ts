// diaDanhHue.ts — Dữ liệu mẫu địa danh Huế dùng cho Bài 7

export interface DiaDanh {
  id: number;
  ten: string;
  loai: string;
  moTa: string;
}

export const DS_DIA_DANH: DiaDanh[] = [
  { id: 1, ten: 'Đại Nội Huế', loai: 'Di tích',
    moTa: 'Quần thể cung điện của triều Nguyễn bên bờ Bắc sông Hương.' },
  { id: 2, ten: 'Chùa Thiên Mụ', loai: 'Chùa',
    moTa: 'Ngôi chùa cổ với tháp Phước Duyên nhìn ra sông Hương.' },
  { id: 3, ten: 'Lăng Tự Đức', loai: 'Lăng tẩm',
    moTa: 'Khu lăng giữa rừng thông và hồ sen yên tĩnh.' },
  { id: 4, ten: 'Lăng Khải Định', loai: 'Lăng tẩm',
    moTa: 'Nổi tiếng với nghệ thuật khảm sành sứ, kết hợp kiến trúc Á – Âu.' },
  { id: 5, ten: 'Cầu Tràng Tiền', loai: 'Công trình',
    moTa: 'Cây cầu thép bắc qua sông Hương, biểu tượng của thành phố.' },
  { id: 6, ten: 'Chợ Đông Ba', loai: 'Chợ',
    moTa: 'Khu chợ lớn và lâu đời, thiên đường ẩm thực Huế.' },
];