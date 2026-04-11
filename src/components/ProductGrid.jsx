import { useApp } from '../context/AppContext';
import { categories } from '../data/products';
import ProductCard from './ProductCard';
import './ProductGrid.css';

function getBreadcrumb(selectedCategory, selectedSubCategory, searchQuery) {
  if (searchQuery) return `Search results for "${searchQuery}"`;
  if (!selectedCategory) return 'All Products';
  const cat = categories.find((c) => c.id === selectedCategory);
  if (!cat) return 'All Products';
  if (!selectedSubCategory) return cat.name;
  const sub = cat.subCategories.find((s) => s.id === selectedSubCategory);
  return `${cat.name} › ${sub ? sub.name : ''}`;
}

export default function ProductGrid() {
  const { displayedProducts, selectedCategory, selectedSubCategory, searchQuery } =
    useApp();

  const breadcrumb = getBreadcrumb(selectedCategory, selectedSubCategory, searchQuery);

  return (
    <main className="product-grid-section">
      <div className="grid-header">
        <h2 className="grid-title">{breadcrumb}</h2>
        <span className="grid-count">{displayedProducts.length} item{displayedProducts.length !== 1 ? 's' : ''}</span>
      </div>

      {displayedProducts.length === 0 ? (
        <div className="grid-empty">
          <span className="grid-empty-icon">🔍</span>
          <p>No products found.</p>
          {searchQuery && <p className="grid-empty-hint">Try a different search term or browse by category.</p>}
        </div>
      ) : (
        <div className="product-grid">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
