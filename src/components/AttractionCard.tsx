// AttractionCard.tsx — Thẻ hiển thị một địa điểm tham quan
// Buổi 5 · Lab 2 (Bonus): Lưu trạng thái yêu thích vào localStorage

import { useState, useEffect } from 'react';

interface AttractionCardProps {
  id: number;
  name: string;
  category: string;
  description: string;
  rating: number;
}

function AttractionCard({ id, name, category, description, rating }: AttractionCardProps) {
  // Khởi tạo state từ localStorage nếu có (lazy initializer)
  const [isFavorite, setIsFavorite] = useState<boolean>(() => {
    const saved = localStorage.getItem(`favorite-${id}`);
    return saved === 'true';
  });

  // Mỗi khi isFavorite thay đổi → lưu vào localStorage
  useEffect(() => {
    localStorage.setItem(`favorite-${id}`, String(isFavorite));
  }, [isFavorite, id]);

  function handleToggleFavorite() {
    setIsFavorite((prev) => !prev);
  }

  return (
    <div className="attraction-card">
      <button
        className={`attraction-card__favorite ${isFavorite ? 'is-active' : ''}`}
        onClick={handleToggleFavorite}
      >
        {isFavorite ? '♥ Đã lưu' : '♡ Lưu địa điểm'}
      </button>

      <div className="attraction-card__badge">{category}</div>
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="attraction-card__rating">⭐ {rating}</span>
    </div>
  );
}

export default AttractionCard;