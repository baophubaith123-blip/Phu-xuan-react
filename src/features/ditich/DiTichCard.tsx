// DiTichCard.tsx — Thẻ hiển thị 1 di tích (presentational)
// Buổi 10 · Lab 4: KHÔNG có state
// INT.7.18 — Web FrontEnd nâng cao

import type { DiTich } from './types';

interface DiTichCardProps {
  diTich: DiTich;
  onToggleThamQuan: (id: string) => void;
}

export function DiTichCard({ diTich, onToggleThamQuan }: DiTichCardProps) {
  return (
    <article
      className={`ditich-card ${diTich.daThamQuan ? 'ditich-card--visited' : ''}`}
    >
      <h3 className="ditich-card__ten">{diTich.ten}</h3>
      <p className="ditich-card__meta">
        {diTich.loai.replace(/-/g, ' ')} — thế kỷ {diTich.theKy}
      </p>
      <p className="ditich-card__desc">{diTich.moTa}</p>
      <button
        type="button"
        className="ditich-card__btn"
        onClick={() => onToggleThamQuan(diTich.id)}
      >
        {diTich.daThamQuan ? '✓ Đã tham quan' : 'Đánh dấu đã tham quan'}
      </button>
    </article>
  );
}