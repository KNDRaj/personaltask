import { useState } from 'react';
import { useApp } from '../context/AppContext';
import './Header.css';

export default function Header() {
  const { handleSearch, searchQuery, cartCount, setCartOpen, selectCategory } = useApp();
  const [inputValue, setInputValue] = useState(searchQuery);

  function onSubmit(e) {
    e.preventDefault();
    handleSearch(inputValue);
  }

  function onClear() {
    setInputValue('');
    handleSearch('');
  }

  return (
    <header className="header">
      <div className="header-left">
        <button
          className="logo-btn"
          onClick={() => { selectCategory(null); setInputValue(''); }}
          title="GiftIt Solutions Home"
        >
          <span className="logo-icon">🎁</span>
          <span className="logo-text">
            <span className="logo-name">GiftIt</span>
            <span className="logo-sub">Solutions</span>
          </span>
        </button>
      </div>

      <form className="search-bar" onSubmit={onSubmit} role="search">
        <span className="search-icon">🔍</span>
        <input
          type="search"
          className="search-input"
          placeholder="Search products..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          aria-label="Search products"
        />
        {inputValue && (
          <button type="button" className="search-clear" onClick={onClear} aria-label="Clear search">
            ✕
          </button>
        )}
        <button type="submit" className="search-btn">Search</button>
      </form>

      <div className="header-right">
        <button
          className="cart-btn"
          onClick={() => setCartOpen(true)}
          aria-label={`Open cart, ${cartCount} items`}
        >
          <span className="cart-icon">🛒</span>
          <span className="cart-label">Order</span>
          {cartCount > 0 && (
            <span className="cart-badge" aria-live="polite">{cartCount}</span>
          )}
        </button>
      </div>
    </header>
  );
}
