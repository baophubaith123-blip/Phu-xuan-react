// AttractionCard.tsx — Thẻ hiển thị một địa điểm tham quan
// Buổi 5 · Lab 5: Tích hợp TicketCounter

import { useState, useEffect } from 'react';
import StarRating from './StarRating';
import TicketCounter from './TicketCounter';

interface AttractionCardProps {
  id: number;
  name: string;
  category: string;
  description: string;
  rating: number;
  showTicket?: boolean;      // ← Có hiện TicketCounter không
  ticketPrice?: number;      // ← Đơn giá vé (nếu có)
}

function AttractionCard({
  id,
  name,
  category,
  description,
  rating,
  showTicket = false,
  ticketPrice = 0,
}: AttractionCardProps) {
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
      <button
        className={`attraction-card__favorite ${isFavorite ? 'is-active' : ''}`}
        onClick={handleToggleFavorite}
      >
        {isFavorite ? '♥ Đã lưu' : '♡ Lưu địa điểm'}
      </button>

      <div className="attraction-card__badge">{category}</div>
      <h3>{name}</h3>
      <p>{description}</p>

      <StarRating />

      {/* ✅ Lab 5: Chỉ hiện TicketCounter nếu showTicket = true */}
      {showTicket && <TicketCounter price={ticketPrice} />}

      <span className="attraction-card__rating">⭐ {rating}</span>
    </div>
  );
}

export default AttractionCard;