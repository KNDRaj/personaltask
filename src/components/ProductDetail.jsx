import { useState, useEffect, useCallback } from 'react';
import { useApp } from '../context/AppContext';
import { categories } from '../data/products';
import './ProductDetail.css';

export default function ProductDetail() {
  const { selectedProduct, setSelectedProduct, addToCart, cartItems } = useApp();
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setActiveImage(0);
    setQuantity(1);
  }, [selectedProduct]);

  // Keyboard navigation
  const handleKey = useCallback(
    (e) => {
      if (!selectedProduct) return;
      if (e.key === 'Escape') setSelectedProduct(null);
      if (e.key === 'ArrowRight')
        setActiveImage((i) => (i + 1) % selectedProduct.images.length);
      if (e.key === 'ArrowLeft')
        setActiveImage((i) => (i - 1 + selectedProduct.images.length) % selectedProduct.images.length);
    },
    [selectedProduct, setSelectedProduct]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  if (!selectedProduct) return null;

  const product = selectedProduct;
  const cat = categories.find((c) => c.id === product.categoryId);
  const sub = cat?.subCategories.find((s) => s.id === product.subCategoryId);

  const alreadyInCart = cartItems.find((i) => i.id === product.id);
  const maxQty = product.quantity;
  const stockLabel =
    maxQty === 0 ? 'Out of Stock' : maxQty <= 10 ? `Only ${maxQty} left` : `${maxQty} in stock`;
  const stockClass = maxQty === 0 ? 'stock-out' : maxQty <= 10 ? 'stock-low' : 'stock-ok';

  function handleAddToCart() {
    if (quantity > 0 && quantity <= maxQty) {
      addToCart(product, quantity);
      setSelectedProduct(null);
    }
  }

  return (
    <div
      className="detail-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) setSelectedProduct(null); }}
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <div className="detail-modal">
        {/* Close */}
        <button
          className="detail-close"
          onClick={() => setSelectedProduct(null)}
          aria-label="Close product detail"
        >
          ✕
        </button>

        <div className="detail-content">
          {/* Image Gallery */}
          <div className="detail-gallery">
            <div className="detail-main-image-wrap">
              <img
                src={product.images[activeImage]}
                alt={`${product.name} - image ${activeImage + 1}`}
                className="detail-main-image"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=No+Image'; }}
              />
              {product.images.length > 1 && (
                <>
                  <button
                    className="gallery-nav gallery-prev"
                    onClick={() =>
                      setActiveImage((i) => (i - 1 + product.images.length) % product.images.length)
                    }
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    className="gallery-nav gallery-next"
                    onClick={() =>
                      setActiveImage((i) => (i + 1) % product.images.length)
                    }
                    aria-label="Next image"
                  >
                    ›
                  </button>
                  <div className="gallery-dots">
                    {product.images.map((_, idx) => (
                      <button
                        key={idx}
                        className={`gallery-dot${idx === activeImage ? ' active' : ''}`}
                        onClick={() => setActiveImage(idx)}
                        aria-label={`View image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {product.images.length > 1 && (
              <div className="detail-thumbnails">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`detail-thumb${idx === activeImage ? ' active' : ''}`}
                    onClick={() => setActiveImage(idx)}
                    aria-label={`Image ${idx + 1}`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/80x60?text=...'; }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="detail-info">
            <div className="detail-breadcrumb">
              {cat?.name}
              {sub && <> › {sub.name}</>}
            </div>

            <h1 className="detail-name">{product.name}</h1>
            <div className="detail-sku">SKU: {product.sku}</div>

            <div className="detail-price-row">
              <span className="detail-price">${product.price.toFixed(2)}</span>
              <span className={`detail-stock ${stockClass}`}>{stockLabel}</span>
            </div>

            <p className="detail-description">{product.description}</p>

            <div className="detail-tags">
              {product.tags.map((tag) => (
                <span key={tag} className="detail-tag">{tag}</span>
              ))}
            </div>

            {/* Quantity + Add to Order */}
            {maxQty > 0 && (
              <div className="detail-order-row">
                <div className="detail-qty-control">
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    className="qty-input"
                    value={quantity}
                    min={1}
                    max={maxQty}
                    onChange={(e) => {
                      const v = parseInt(e.target.value, 10);
                      if (!isNaN(v)) setQuantity(Math.min(maxQty, Math.max(1, v)));
                    }}
                    aria-label="Quantity"
                  />
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity((q) => Math.min(maxQty, q + 1))}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button className="detail-add-btn" onClick={handleAddToCart}>
                  {alreadyInCart ? '✓ Update Order' : '+ Add to Order'}
                </button>
              </div>
            )}

            {maxQty === 0 && (
              <div className="detail-unavailable">
                This product is currently out of stock.
              </div>
            )}

            {alreadyInCart && (
              <p className="detail-in-cart-note">
                Already in your order: {alreadyInCart.quantity} unit{alreadyInCart.quantity !== 1 ? 's' : ''}
              </p>
            )}

            <div className="detail-subtotal">
              <span>Subtotal for {quantity} unit{quantity !== 1 ? 's' : ''}:</span>
              <strong>${(product.price * quantity).toFixed(2)}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
