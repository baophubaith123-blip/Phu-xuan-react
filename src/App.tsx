// App.tsx — Lab 4 Buổi 4: Tách component địa điểm
// Buổi 4 · INT.7.18 — Web FrontEnd nâng cao

import DiaDiem1 from "./components/DiaDiem1";
import DiaDiem2 from "./components/DiaDiem2";
import DiaDiem3 from "./components/DiaDiem3";

function App() {
  return (
    <div className="trang-chu">
      <h1>Danh sách địa điểm — phu-xuan-react</h1>
      <DiaDiem1 />
      <DiaDiem2 />
      <DiaDiem3 />
    </div>
  );
}

export default App;