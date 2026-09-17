// App.tsx — Buổi 6: Test useEffect, useRef, useMemo, useCallback, Custom Hook
// Buổi 5–6 · INT.7.18 — Web FrontEnd nâng cao

import { useState } from 'react';
import './App.css';
import AttractionList from './components/AttractionList';
import CategoryTabs from './components/CategoryTabs';
import LuotXemDaiNoi from './features/landmarks/LuotXemDaiNoi';
import DanhSachDiaDanh from './features/landmarks/DanhSachDiaDanh';
import TrangMonAn from './features/food/TrangMonAn';
import TimMonAn from './features/food/TimMonAn';
import TimMonAnDebounce from './features/food/TimMonAnDebounce';   // ← Thêm
import { attractions } from './data/attractions';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [hienThi, setHienThi] = useState(true);

  const categories = [
    'Tất cả',
    ...new Set(attractions.map((item) => item.category)),
  ];

  const filteredAttractions =
    selectedCategory === 'Tất cả'
      ? attractions
      : attractions.filter((item) => item.category === selectedCategory);

  return (
    <div className="app">
      <h1>Khám phá Huế</h1>

      {/* === Lab 1 Buổi 6 === */}
      <div style={{
        padding: '1rem',
        marginBottom: '1.5rem',
        background: '#fef3c7',
        border: '1px solid #fbbf24',
        borderRadius: '8px'
      }}>
        <h2 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>
          🧪 Test Lab 1 Buổi 6: useEffect Cleanup
        </h2>
        <button
          onClick={() => setHienThi(!hienThi)}
          style={{
            padding: '6px 14px',
            marginBottom: '0.75rem',
            borderRadius: '6px',
            border: '1px solid #f59e0b',
            background: '#ffffff',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          {hienThi ? '👁 Ẩn thẻ Đại Nội' : '👁 Hiện thẻ Đại Nội'}
        </button>
        {hienThi && <LuotXemDaiNoi />}
      </div>

      {/* === Lab 2 Buổi 6 === */}
      <div style={{
        padding: '1rem',
        marginBottom: '1.5rem',
        background: '#fce7f3',
        border: '1px solid #f9a8d4',
        borderRadius: '8px'
      }}>
        <h2 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>
          🧪 Test Lab 2 Buổi 6: useEffect với dependency
        </h2>
        <TrangMonAn />
      </div>

      {/* === Lab 3 Buổi 6 === */}
      <div style={{
        padding: '1rem',
        marginBottom: '1.5rem',
        background: '#ede9fe',
        border: '1px solid #c4b5fd',
        borderRadius: '8px'
      }}>
        <h2 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>
          🧪 Test Lab 3 Buổi 6: useRef (focus & đếm render)
        </h2>
        <TimMonAn />
      </div>

      {/* === Lab 4 Buổi 6 === */}
      <div style={{
        padding: '1rem',
        marginBottom: '1.5rem',
        background: '#dbeafe',
        border: '1px solid #93c5fd',
        borderRadius: '8px'
      }}>
        <h2 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>
          🧪 Test Lab 4 Buổi 6: useMemo + useCallback + React.memo
        </h2>
        <DanhSachDiaDanh />
      </div>

      {/* === Lab 5 Buổi 6: Custom Hook useDebounce === */}
      <div style={{
        padding: '1rem',
        marginBottom: '1.5rem',
        background: '#dcfce7',
        border: '1px solid #86efac',
        borderRadius: '8px'
      }}>
        <h2 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>
          🧪 Test Lab 5 Buổi 6: Custom Hook useDebounce
        </h2>
        <TimMonAnDebounce />
      </div>

      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <AttractionList attractions={filteredAttractions} />
    </div>
  );
}

export default App;