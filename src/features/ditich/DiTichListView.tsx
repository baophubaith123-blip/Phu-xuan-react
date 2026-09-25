// DiTichListView.tsx — View chính của module Di tích
// Buổi 10 · Lab 4: Gọi custom hook trực tiếp — không cần Container
// INT.7.18 — Web FrontEnd nâng cao

import { useDiTichList } from './useDiTichList';
import { danhSachDiTich } from '../../data/ditich';
import { DiTichCard } from './DiTichCard';
import { DiTichFilter } from './DiTichFilter';
import { SearchBox } from '../tours/SearchBox';
import { PageLayout } from '../../components/PageLayout';

export function DiTichListView() {
  // ✅ View gọi hook trực tiếp — KHÔNG cần Container
  const {
    danhSachHienThi,
    boLoc,
    capNhatBoLoc,
    danhDauDaThamQuan,
    resetBoLoc,
  } = useDiTichList(danhSachDiTich);

  return (
    <PageLayout
      // ===== Khe 1: Header — tiêu đề + search =====
      header={
        <>
          <h1>Di tích Huế</h1>
          <SearchBox
            value={boLoc.tuKhoa}
            onChange={(value) => capNhatBoLoc({ tuKhoa: value })}
            placeholder="Tìm di tích..."
          />
        </>
      }

      // ===== Khe 2: Sidebar — bộ lọc =====
      sidebar={
        <DiTichFilter
          boLoc={boLoc}
          onChange={capNhatBoLoc}
          onReset={resetBoLoc}
        />
      }

      // ===== Khe 3: Main — thống kê + lưới thẻ =====
      main={
        <>
          <p className="filter-summary">
            Hiển thị {danhSachHienThi.length} / {danhSachDiTich.length} di tích
          </p>
          {danhSachHienThi.length === 0 ? (
            <p className="empty-state">
              Không có di tích nào phù hợp. Hãy thử từ khoá hoặc bộ lọc khác.
            </p>
          ) : (
            <div className="ditich-grid">
              {danhSachHienThi.map((d) => (
                <DiTichCard
                  key={d.id}
                  diTich={d}
                  onToggleThamQuan={danhDauDaThamQuan}
                />
              ))}
            </div>
          )}
        </>
      }
    />
  );
}