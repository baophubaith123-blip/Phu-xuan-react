// useTourList.ts — Custom Hook quản lý danh sách tour
// Buổi 10 · Lab 5: Chuyển logic từ Container sang Hook
// INT.7.18 — Web FrontEnd nâng cao

import { useState } from 'react';
import type { Tour } from '../../data/tours';

export function useTourList(dataGoc: Tour[]) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [query, setQuery] = useState('');

  // Logic lọc kết hợp
  const normalized = query.trim().toLowerCase();

  const filteredTours = dataGoc
    .filter((t) => t.price >= minPrice && t.price <= maxPrice)
    .filter((t) =>
      normalized === '' ? true : t.name.toLowerCase().includes(normalized)
    );

  return {
    // Data đã lọc
    filteredTours,
    totalCount: dataGoc.length,

    // State
    minPrice,
    maxPrice,
    query,

    // Actions
    setMinPrice,
    setMaxPrice,
    setQuery,
  };
}