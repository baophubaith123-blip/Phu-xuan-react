// App.tsx — Buổi 10 · Lab 5: View gọi hook trực tiếp
// INT.7.18 — Web FrontEnd nâng cao

import { useState } from 'react';
import { TourListView } from './features/tours/TourListView';
import { DiTichListView } from './features/ditich/DiTichListView';
import './App.css';

type Trang = 'tour' | 'ditich';

function App() {
  const [trang, setTrang] = useState<Trang>('tour');

  return (
    <>
      <nav className="top-nav">
        <button
          className={trang === 'tour' ? 'is-active' : ''}
          onClick={() => setTrang('tour')}
        >
          🏛 Tour
        </button>
        <button
          className={trang === 'ditich' ? 'is-active' : ''}
          onClick={() => setTrang('ditich')}
        >
          🗿 Di tích
        </button>
      </nav>

      {trang === 'tour' ? <TourListView /> : <DiTichListView />}
    </>
  );
}

export default App;