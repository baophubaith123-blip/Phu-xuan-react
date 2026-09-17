// App.tsx — Lab 3 Buổi 5: Bộ lọc theo danh mục
// Buổi 5 · INT.7.18 — Web FrontEnd nâng cao

import { useState } from 'react';
import './App.css';
import AttractionList from './components/AttractionList';
import CategoryTabs from './components/CategoryTabs';
import { attractions } from './data/attractions';

function App() {
  // ✅ State lọc — đặt ở cha để cả CategoryTabs và AttractionList đều dùng
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  // Lấy danh sách danh mục duy nhất (không trùng lặp) từ dữ liệu
  const categories = [
    'Tất cả',
    ...new Set(attractions.map((item) => item.category)),
  ];

  // Lọc danh sách theo danh mục đang chọn
  const filteredAttractions =
    selectedCategory === 'Tất cả'
      ? attractions
      : attractions.filter((item) => item.category === selectedCategory);

  return (
    <div className="app">
      <h1>Khám phá Huế</h1>

      {/* Thanh tab lọc — nhận state và callback từ cha */}
      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Danh sách đã lọc */}
      <AttractionList attractions={filteredAttractions} />
    </div>
  );
}

export default App;