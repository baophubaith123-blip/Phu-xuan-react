// App.tsx — Lab 1 Buổi 5: Danh sách địa điểm tham quan
// Buổi 5 · INT.7.18 — Web FrontEnd nâng cao

import './App.css';
import AttractionList from './components/AttractionList';
import { attractions } from './data/attractions';

function App() {
  return (
    <div className="app">
      <h1>Khám phá Huế</h1>
      <AttractionList attractions={attractions} />
    </div>
  );
}

export default App;