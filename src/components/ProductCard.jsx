import { useApp } from '../context/AppContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { setSelectedProduct, addToCart } = useApp();

  const stockLabel =
    product.quantity === 0
      ? 'Out of Stock'
      : product.quantity <= 10
      ? `Only ${product.quantity} left`
      : `In Stock`;

  const stockClass =
    product.quantity === 0
      ? 'stock-out'
      : product.quantity <= 10
      ? 'stock-low'
      : 'stock-ok';

  return (
    <article className="product-card" onClick={() => setSelectedProduct(product)}>
      <div className="card-image-wrap">
        <img
          src={product.images[0]}
          alt={product.name}
          className="card-image"
          loading="lazy"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=No+Image'; }}
        />
        {product.quantity === 0 && (
          <div className="card-out-of-stock-overlay">Out of Stock</div>
        )}
        {product.images.length > 1 && (
          <span className="card-image-count">+{product.images.length - 1} photos</span>
        )}
      </div>

      <div className="card-body">
        <div className="card-sku">{product.sku}</div>
        <h3 className="card-name">{product.name}</h3>
        <p className="card-desc">{product.description}</p>

        <div className="card-tags">
          {product.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="card-tag">{tag}</span>
          ))}
        </div>

        <div className="card-footer">
          <div className="card-price-row">
            <span className="card-price">
              ${product.price.toFixed(2)}
            </span>
            <span className={`card-stock ${stockClass}`}>{stockLabel}</span>
          </div>
          <button
            className="card-add-btn"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product, 1);
            }}
            disabled={product.quantity === 0}
            aria-label={`Add ${product.name} to order`}
          >
            + Add
          </button>
        </div>
      </div>
    </article>
  );
}
