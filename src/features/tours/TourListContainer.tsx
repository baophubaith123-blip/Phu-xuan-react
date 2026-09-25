// TourListContainer.tsx — Thành phần chứa state và logic
// Buổi 10 · Lab 2: Container (logic) tách khỏi View (hiển thị)
// INT.7.18 — Web FrontEnd nâng cao

import { useState } from 'react';
import { tours } from '../../data/tours';
import { TourListView } from './TourListView';

// ✅ Container chịu trách nhiệm: state + logic lọc
// KHÔNG đụng đến JSX của trang (đó là việc của View)
export function TourListContainer() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);

  // Logic lọc — tính lại mỗi khi state đổi
  const filteredTours = tours.filter(
    (t) => t.price >= minPrice && t.price <= maxPrice
  );

  return (
    <TourListView
      filteredTours={filteredTours}
      totalCount={tours.length}
      minPrice={minPrice}
      maxPrice={maxPrice}
      onMinChange={setMinPrice}
      onMaxChange={setMaxPrice}
    />
  );
}