// AttractionList.tsx — Render danh sách các địa điểm

import AttractionCard from './AttractionCard';
import type { Attraction } from '../data/attractions';

interface AttractionListProps {
  attractions: Attraction[];
}

function AttractionList({ attractions }: AttractionListProps) {
  return (
    <div className="attraction-list">
      {attractions.map((item) => (
        <AttractionCard
          key={item.id}
          name={item.name}
          category={item.category}
          description={item.description}
          rating={item.rating}
        />
      ))}
    </div>
  );
}

export default AttractionList;