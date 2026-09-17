// CategoryTabs.tsx — Thanh tab lọc theo danh mục

interface CategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

function CategoryTabs({ categories, selectedCategory, onSelectCategory }: CategoryTabsProps) {
  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? 'is-active' : ''}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;