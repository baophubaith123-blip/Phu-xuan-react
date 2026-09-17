// StarRating.tsx — Component đánh giá 5 sao

import { useState } from 'react';

function StarRating() {
  // ✅ State cục bộ — mỗi StarRating có bản thể riêng
  const [userRating, setUserRating] = useState(0);

  // Mảng 1–5 để lặp render 5 ngôi sao
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star-rating">
      <div className="star-rating__stars">
        {stars.map((starValue) => (
          <span
            key={starValue}
            className={`star ${starValue <= userRating ? 'is-filled' : ''}`}
            onClick={() => setUserRating(starValue)}
            title={`Đánh giá ${starValue} sao`}
          >
            {starValue <= userRating ? '★' : '☆'}
          </span>
        ))}
      </div>

      <p className="star-rating__label">
        {userRating > 0
          ? `Bạn đã đánh giá: ${userRating}/5 sao`
          : 'Bấm vào sao để đánh giá'}
      </p>
    </div>
  );
}

export default StarRating;