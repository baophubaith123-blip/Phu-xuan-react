// AttractionCard.tsx — Thẻ hiển thị một địa điểm tham quan
// Buổi 5 · Lab 4: Tích hợp StarRating

import { useState, useEffect } from 'react';
import StarRating from './StarRating';

interface AttractionCardProps {
  id: number;
  name: string;
  category: string;
  description: string;
  rating: number;
}

function AttractionCard({ id, name, category, description, rating }: AttractionCardProps) {
  // Lab 2: State yêu thích (lưu vào localStorage)
  const [isFavorite, setIsFavorite] = useState<boolean>(() => {
    const saved = localStorage.getItem(`favorite-${id}`);
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem(`favorite-${id}`, String(isFavorite));
  }, [isFavorite, id]);

  function handleToggleFavorite() {
    setIsFavorite((prev) => !prev);
  }

  return (
    <div className="attraction-card">
      {/* Lab 2: Nút yêu thích */}
      <button
        className={`attraction-card__favorite ${isFavorite ? 'is-active' : ''}`}
        onClick={handleToggleFavorite}
      >
        {isFavorite ? '♥ Đã lưu' : '♡ Lưu địa điểm'}
      </button>

      <div className="attraction-card__badge">{category}</div>
      <h3>{name}</h3>
      <p>{description}</p>

      {/* Lab 4: Đánh giá sao */}
      <StarRating />

      <span className="attraction-card__rating">⭐ {rating}</span>
    </div>
  );
}

export default AttractionCard;