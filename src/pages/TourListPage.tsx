// TourListPage.tsx — BẢN ĐÚNG: State được nâng lên cha chung
// Buổi 10 · Lab 1: Single source of truth
// INT.7.18 — Web FrontEnd nâng cao

import { useState } from 'react';
import { tours } from '../data/tours';
import { PriceFilter } from '../features/tours/PriceFilter';
import { TourGrid } from '../features/tours/TourGrid';

export function TourListPage() {
  // ✅ State giờ nằm ở CHA CHUNG — cả PriceFilter và TourGrid đều truy cập được
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);

  // ✅ Lọc tours theo khoảng giá — tính lại mỗi khi state đổi
  const filteredTours = tours.filter(
    (t) => t.price >= minPrice && t.price <= maxPrice
  );

  return (
    <main className="tour-list-page">
      <h1>Khám phá Huế qua 6 hành trình</h1>

      {/* Truyền value + callback xuống con */}
      <PriceFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinChange={setMinPrice}
        onMaxChange={setMaxPrice}
      />

      <p className="filter-summary">
        Đang hiển thị {filteredTours.length} / {tours.length} tour
      </p>

      {/* Truyền danh sách ĐÃ LỌC xuống TourGrid */}
      <TourGrid tours={filteredTours} />
    </main>
  );
}