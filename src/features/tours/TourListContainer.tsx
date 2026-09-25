// TourListContainer.tsx — Container với 3 state: minPrice, maxPrice, query
// Buổi 10 · Lab 3: Lifting state lần 2 + logic lọc kết hợp
// INT.7.18 — Web FrontEnd nâng cao

import { useState } from 'react';
import { tours } from '../../data/tours';
import { TourListView } from './TourListView';

// ⚠️ TODO: Chuyển logic này vào useTourList (xem commit sau)
export function TourListContainer() {
  // ✅ 3 state — đều nằm ở Container (cha chung gần nhất)
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [query, setQuery] = useState('');

  // ✅ Lọc kết hợp: theo giá VÀ theo từ khóa
  const normalized = query.trim().toLowerCase();

  const filteredTours = tours
    .filter((t) => t.price >= minPrice && t.price <= maxPrice)
    .filter((t) =>
      normalized === '' ? true : t.name.toLowerCase().includes(normalized)
    );

  return (
    <TourListView
      filteredTours={filteredTours}
      totalCount={tours.length}
      minPrice={minPrice}
      maxPrice={maxPrice}
      query={query}
      onMinChange={setMinPrice}
      onMaxChange={setMaxPrice}
      onQueryChange={setQuery}
    />
  );
}
