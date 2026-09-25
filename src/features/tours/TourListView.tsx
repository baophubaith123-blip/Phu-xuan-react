// TourListView.tsx — View gọi Custom Hook trực tiếp (không cần Container)
// Buổi 10 · Lab 5: Custom Hook thay Container
// INT.7.18 — Web FrontEnd nâng cao

import { tours } from '../../data/tours';
import { useTourList } from './useTourList';
import { PageLayout } from '../../components/PageLayout';
import { PriceFilter } from './PriceFilter';
import { SearchBox } from './SearchBox';
import { TourGrid } from './TourGrid';

export function TourListView() {
  // ✅ View gọi hook trực tiếp — KHÔNG cần Container
  const {
    filteredTours,
    totalCount,
    minPrice,
    maxPrice,
    query,
    setMinPrice,
    setMaxPrice,
    setQuery,
  } = useTourList(tours);

  return (
    <PageLayout
      header={
        <>
          <h1>Khám phá Huế qua {totalCount} hành trình</h1>
          <SearchBox
            value={query}
            onChange={setQuery}
            placeholder="Tìm tên tour (VD: Đại Nội)..."
          />
        </>
      }
      sidebar={
        <>
          <h2>Bộ lọc</h2>
          <PriceFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            onMinChange={setMinPrice}
            onMaxChange={setMaxPrice}
          />
        </>
      }
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