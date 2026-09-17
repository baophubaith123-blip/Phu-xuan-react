// useForm.ts — Custom Hook đóng gói toàn bộ logic biểu mẫu
// Buổi 8 · Lab 4: Tái sử dụng cho nhiều form khác nhau
// INT.7.18 — Web FrontEnd nâng cao

import { useState } from 'react';
import type { ChangeEvent, FocusEvent, FormEvent } from 'react';

/**
 * Custom Hook quản lý biểu mẫu có kiểm soát.
 */
export function useForm<T>(
  giaTriBanDau: T,
  kiemChung: (duLieu: T) => Record<string, string>
) {
  // --- 3 state nội bộ ---
  const [duLieu, setDuLieu] = useState<T>(giaTriBanDau);
  const [daCham, setDaCham] = useState<Record<string, boolean>>({});
  const [dangGui, setDangGui] = useState(false);

  // --- Trạng thái dẫn xuất: lỗi + hợp lệ ---
  const loi = kiemChung(duLieu);
  const hopLe = Object.keys(loi).length === 0;

  // --- Handler duy nhất cho mọi ô object ---
  function xuLyThayDoi(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setDuLieu((truoc) => ({
      ...truoc,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  // --- Đánh dấu ô đã chạm khi rời khỏi ---
  function xuLyRoiO(
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name } = e.target;
    setDaCham((truoc) => ({ ...truoc, [name]: true }));
  }

  // --- Chỉ trả về lỗi nếu ô đã được chạm ---
  function loiCuaO(ten: string): string | undefined {
    return daCham[ten] ? loi[ten] : undefined;
  }

  // --- Reset toàn bộ form ---
  function datLai() {
    setDuLieu(giaTriBanDau);
    setDaCham({});
    setDangGui(false);
  }

  // --- Xử lý gửi: dùng currying ---
  function xuLyGui(guiDuLieu: (duLieu: T) => Promise<void>) {
    return async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const tatCaDaCham: Record<string, boolean> = {};
      (Object.keys(giaTriBanDau) as Array<keyof T>).forEach((k) => {
        tatCaDaCham[k as string] = true;
      });
      setDaCham(tatCaDaCham);

      if (Object.keys(kiemChung(duLieu)).length > 0) return;

      try {
        setDangGui(true);
        await guiDuLieu(duLieu);
      } finally {
        setDangGui(false);
      }
    };
  }

  return {
    duLieu,
    loi,
    daCham,
    dangGui,
    hopLe,
    xuLyThayDoi,
    xuLyRoiO,
    loiCuaO,
    xuLyGui,
    datLai,
    setDuLieu,
  };
}

export default useForm;