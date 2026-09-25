// DiTichFilter.tsx — Bộ lọc di tích (presentational)
// Buổi 10 · Lab 4: KHÔNG có state
// INT.7.18 — Web FrontEnd nâng cao

import type { DiTichFilter as FilterState, LoaiDiTich } from './types';

interface DiTichFilterProps {
  boLoc: FilterState;
  onChange: (patch: Partial<FilterState>) => void;
  onReset: () => void;
}

const CAC_LOAI: Array<{ value: LoaiDiTich | 'tat-ca'; label: string }> = [
  { value: 'tat-ca', label: 'Tất cả' },
  { value: 'kinh-thanh', label: 'Kinh thành' },
  { value: 'lang-tam', label: 'Lăng tẩm' },
  { value: 'chua', label: 'Chùa' },
  { value: 'te-dan', label: 'Tế đàn' },
  { value: 'cong-trinh-cong-cong', label: 'Công trình công cộng' },
];

export function DiTichFilter({ boLoc, onChange, onReset }: DiTichFilterProps) {
  return (
    <div className="ditich-filter">
      <label className="ditich-filter__field">
        <span>Loại di tích:</span>
        <select
          value={boLoc.loai}
          onChange={(e) =>
            onChange({ loai: e.target.value as LoaiDiTich | 'tat-ca' })
          }
        >
          {CAC_LOAI.map((l) => (
            <option key={l.value} value={l.value}>
              {l.label}
            </option>
          ))}
        </select>
      </label>

      <label className="ditich-filter__checkbox">
        <input
          type="checkbox"
          checked={boLoc.chiChuaThamQuan}
          onChange={(e) => onChange({ chiChuaThamQuan: e.target.checked })}
        />
        Chỉ hiện những nơi chưa tham quan
      </label>

      <button
        type="button"
        className="ditich-filter__reset"
        onClick={onReset}
      >
        Đặt lại bộ lọc
      </button>
    </div>
  );
}