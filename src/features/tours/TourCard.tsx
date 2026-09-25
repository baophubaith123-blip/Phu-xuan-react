// TourCard.tsx — Thẻ hiển thị 1 tour
// Buổi 10 · Lab 1: Presentational component
// INT.7.18 — Web FrontEnd nâng cao

import type { Tour } from '../../data/tours';

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <article className="tour-card">
      <img className="tour-card__anh" src={tour.image} alt={tour.name} />
      <div className="tour-card__than">
        <h3 className="tour-card__ten">
          {tour.name}
          {tour.hot && <span className="tour-card__hot">HOT</span>}
        </h3>
        <p className="tour-card__gia">
          {tour.price.toLocaleString('vi-VN')}đ · {tour.duration}h
        </p>
      </div>
    </article>
  );
}