// TourListView.tsx — View dùng PageLayout với 3 khe
// Buổi 10 · Lab 3: Kết hợp composition (PageLayout) + render (TourGrid)
// INT.7.18 — Web FrontEnd nâng cao

import type { Tour } from '../../data/tours';
import { PageLayout } from '../../components/PageLayout';
import { PriceFilter } from './PriceFilter';
import { SearchBox } from './SearchBox';
import { TourGrid } from './TourGrid';

interface TourListViewProps {
  filteredTours: Tour[];
  totalCount: number;
  minPrice: number;
  maxPrice: number;
  query: string;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
  onQueryChange: (value: string) => void;
}

export function TourListView({
  filteredTours,
  totalCount,
  minPrice,
  maxPrice,
  query,
  onMinChange,
  onMaxChange,
  onQueryChange,
}: TourListViewProps) {
  return (
    <PageLayout
      // ✅ Khe 1: Header — tiêu đề + ô tìm kiếm
      header={
        <>
          <h1>Khám phá Huế qua {totalCount} hành trình</h1>
          <SearchBox
            value={query}
            onChange={onQueryChange}
            placeholder="Tìm tên tour (VD: Đại Nội)..."
          />
        </>
      }

      // ✅ Khe 2: Sidebar — bộ lọc giá
      sidebar={
        <>
          <h2>Bộ lọc</h2>
          <PriceFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            onMinChange={onMinChange}
            onMaxChange={onMaxChange}
          />
        </>
      }

      // ✅ Khe 3: Main — thống kê + danh sách tour
      main={
        <>
          <p className="filter-summary">
            {filteredTours.length} / {totalCount} tour phù hợp
          </p>
          {filteredTours.length === 0 ? (
            <p className="empty-state">
              Không có tour nào phù hợp. Hãy nới bộ lọc hoặc thử từ khóa khác.
            </p>
          ) : (
            <TourGrid tours={filteredTours} />
          )}
        </>
      }
    />
  );
}