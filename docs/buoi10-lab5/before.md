# Lab 5 — Sơ đồ TRƯỚC refactor

## Trang: Tour (TourListContainer)

### Cây thành phần HIỆN TẠI

```text
TourListContainer
├── State: minPrice, maxPrice, query (3 useState)
├── Logic: lọc tour theo giá + từ khoá
└── Render: <TourListView ... />
    └── TourListView (KHÔNG có state)
        └── PageLayout (3 khe: header, sidebar, main)
            ├── SearchBox (header)
            ├── PriceFilter (sidebar)
            └── TourGrid (main)
                └── TourCard × 6
Vấn đề hiện tại
Logic bị tập trung ở Container — Container vừa giữ state, vừa xử lý logic lọc, vừa truyền 8 props xuống View.

Container dài dòng — phải truyền nhiều props qua View.

Khó tái sử dụng — nếu muốn dùng logic lọc ở trang khác (VD: Di tích), phải copy-paste.

Chưa có Custom Hook — logic chưa được đóng gói để tái sử dụng.

Điểm đau cụ thể
tsx
// TourListContainer.tsx hiện tại
const [minPrice, setMinPrice] = useState(0);
const [maxPrice, setMaxPrice] = useState(1000000);
const [query, setQuery] = useState('');

const normalized = query.trim().toLowerCase();
const filteredTours = tours
  .filter((t) => t.price >= minPrice && t.price <= maxPrice)
  .filter((t) => normalized === '' || t.name.toLowerCase().includes(normalized));

return <TourListView ... 8 props ... />;
→ 8 props phải truyền xuống View — dấu hiệu cần đóng gói vào Custom Hook.

text

**4.2.** Tạo file **`docs/buoi10-lab5/target.md`** — Mô tả trạng thái MỤC TIÊU:

```markdown
# Lab 5 — Sơ đồ MỤC TIÊU sau refactor

## Trang: Tour (TourListView)

### Cây thành phần MỤC TIÊU

```text
TourListView (gọi hook trực tiếp — KHÔNG cần Container)
│
├── Custom Hook: useTourList
│   ├── State: minPrice, maxPrice, query
│   ├── Computed: filteredTours
│   └── Actions: setMinPrice, setMaxPrice, setQuery
│
└── Render: <PageLayout ... />
    ├── SearchBox (header)
    ├── PriceFilter (sidebar)
    └── TourGrid (main)
        └── TourCard × N
Vị trí state và ai là container/view
Thành phần	Vai trò	Có state?
useTourList (hook)	Container — giữ state + logic	✅ Có (3 useState)
TourListView	View — chỉ render	❌ Không
SearchBox	Presentational	❌ Không
PriceFilter	Presentational	❌ Không
TourGrid	Presentational	❌ Không
TourCard	Presentational	❌ Không
Lợi ích kỳ vọng
Đóng gói logic — Hook useTourList có thể tái sử dụng ở trang khác.

View gọn hơn — View chỉ gọi 1 dòng hook, không cần truyền 8 props.

Dễ test — Hook test độc lập với UI.

Nhất quán — Cùng pattern với useDiTichList của Lab 4.

text

**4.3.** Commit đầu tiên:

```powershell
git add docs/buoi10-lab5/before.md docs/buoi10-lab5/target.md
git commit -m "buoi10-lab5: ve so do TRUOC va MUC TIEU refactor trang Tour"