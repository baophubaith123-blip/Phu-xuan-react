import { useRef, useState } from 'react';
import type { MouseEvent } from 'react';

interface DongNhatKy {
  id: number;
  noiDung: string;
}

export default function ThuSuKien() {
  const [soLanBam, setSoLanBam] = useState(0);
  const [nhatKy, setNhatKy] = useState<DongNhatKy[]>([]);
  const demId = useRef(0);

  function ghiNhatKy(noiDung: string) {
    demId.current += 1;
    const dong: DongNhatKy = { id: demId.current, noiDung };
    setNhatKy((truoc) => [dong, ...truoc].slice(0, 5));
  }

  function handleBamNut() {
    setSoLanBam((so) => so + 1);
    ghiNhatKy('Bấm nút "Bắt đầu hành trình"');
  }

  function handleBamThe(e: MouseEvent<HTMLDivElement>) {
    const targetTag = e.target instanceof Element ? e.target.tagName : '?';
    ghiNhatKy(
      'type=' + e.type +
      ' | target=' + targetTag +
      ' | currentTarget=' + e.currentTarget.tagName
    );
  }

  return (
    <section className="lab">
      <h2>Lab 1 — Sự kiện đầu tiên</h2>

      <button onClick={handleBamNut}>
        Bắt đầu hành trình ({soLanBam})
      </button>

      <div className="the-thu" onClick={handleBamThe}>
        <span className="ten">Lăng Tự Đức</span>
        <span className="loai">Lăng tẩm</span>
      </div>

      <h3>Nhật ký sự kiện (5 dòng gần nhất)</h3>
      <ol className="nhat-ky">
        {nhatKy.map((dong) => (
          <li key={dong.id}>{dong.noiDung}</li>
        ))}
      </ol>
    </section>
  );
}