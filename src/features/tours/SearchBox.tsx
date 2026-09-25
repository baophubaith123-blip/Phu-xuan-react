// SearchBox.tsx — Ô tìm kiếm (presentational thuần)
// Buổi 10 · Lab 3: Không có state — nhận value + onChange từ cha
// INT.7.18 — Web FrontEnd nâng cao

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBox({ value, onChange, placeholder }: SearchBoxProps) {
  return (
    <div className="search-box">
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? 'Tìm kiếm...'}
        aria-label="Ô tìm kiếm"
      />
      {value && (
        <button
          type="button"
          className="search-box__clear"
          onClick={() => onChange('')}
          aria-label="Xóa từ khóa"
        >
          ✕
        </button>
      )}
    </div>
  );
}