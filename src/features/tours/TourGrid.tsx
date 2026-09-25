// TourGrid.tsx — Lưới hiển thị nhiều tour
// Buổi 10 · Lab 1: Presentational component
// INT.7.18 — Web FrontEnd nâng cao

import type { Tour } from '../../data/tours';
import { TourCard } from './TourCard';

interface TourGridProps {
  tours: Tour[];
}

export function TourGrid({ tours }: TourGridProps) {
  return (
    <div className="tour-grid">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
}