// useDebounce.ts — Custom Hook trì hoãn giá trị
// Buổi 6 · Lab 5: Đóng gói logic debounce để tái sử dụng

import { useState, useEffect } from 'react';

/**
 * Hook trì hoãn giá trị — chỉ cập nhật sau khi `giaTri` ngừng thay đổi trong `doTre` ms.
 *
 * @param giaTri - Giá trị cần theo dõi (thường là state từ ô input)
 * @param doTre  - Thời gian trì hoãn (milliseconds)
 * @returns Giá trị đã được trì hoãn
 */
function useDebounce<T>(giaTri: T, doTre: number): T {
  const [giaTriDaTre, setGiaTriDaTre] = useState<T>(giaTri);

  useEffect(() => {
    // ✅ Đặt bộ đếm: sau `doTre` ms thì cập nhật giá trị đã trễ
    const idTimeout = setTimeout(() => {
      setGiaTriDaTre(giaTri);
    }, doTre);

    // ✅ Cleanup: hủy bộ đếm cũ nếu `giaTri` đổi trước khi hết thời gian chờ
    return () => clearTimeout(idTimeout);
  }, [giaTri, doTre]);

  return giaTriDaTre;
}

export default useDebounce;