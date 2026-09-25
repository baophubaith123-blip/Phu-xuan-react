// TourListView.tsx — Thành phần trình bày (presentational)
// Buổi 10 · Lab 2: KHÔNG có state, chỉ nhận props và vẽ
// INT.7.18 — Web FrontEnd nâng cao

import type { Tour } from '../../data/tours';
import { PriceFilter } from './PriceFilter';
import { TourGrid } from './TourGrid';

interface TourListViewProps {
  // --- Dữ liệu đã xử lý sẵn sàng hiển thị ---
  filteredTours: Tour[];
  totalCount: number;

  // --- Trạng thái bộ lọc ---
  minPrice: number;
  maxPrice: number;

  // --- Callback gửi ngược lên cha ---
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
}

export function TourListView({
  filteredTours,
  totalCount,
  minPrice,
  maxPrice,
  onMinChange,
  onMaxChange,
}: TourListViewProps) {
  return (
    <main className="tour-list-page">
      <h1>Khám phá Huế qua {totalCount} hành trình</h1>

      <PriceFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinChange={onMinChange}
        onMaxChange={onMaxChange}
      />

      <p className="filter-summary">
        Đang hiển thị {filteredTours.length} / {totalCount} tour
      </p>

      {filteredTours.length === 0 ? (
        <p className="empty-state">
          Không có tour nào phù hợp với khoảng giá này. Hãy nới rộng thanh trượt.
        </p>
      ) : (
        <TourGrid tours={filteredTours} />
      )}
    </main>
  );
}