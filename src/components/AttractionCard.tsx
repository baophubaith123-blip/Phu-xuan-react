// AttractionCard.tsx — Thẻ hiển thị một địa điểm tham quan

// Định nghĩa kiểu props mà component này nhận vào
interface AttractionCardProps {
  name: string;
  category: string;
  description: string;
  rating: number;
}

function AttractionCard({ name, category, description, rating }: AttractionCardProps) {
  return (
    <div className="attraction-card">
      <div className="attraction-card__badge">{category}</div>
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="attraction-card__rating">⭐ {rating}</span>
    </div>
  );
}

export default AttractionCard;