// App.tsx — Buổi 10 · Lab 4: Chuyển tab giữa Tour và Di tích
// INT.7.18 — Web FrontEnd nâng cao

import { useState } from 'react';
import { TourListContainer } from './features/tours/TourListContainer';
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

      {trang === 'tour' ? <TourListContainer /> : <DiTichListView />}
    </>
  );
}

export default App;