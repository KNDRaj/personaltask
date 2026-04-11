import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { categories } from '../data/products';
import './Sidebar.css';

export default function Sidebar() {
  const { selectedCategory, selectedSubCategory, selectCategory, selectSubCategory } = useApp();
  const [expanded, setExpanded] = useState(
    () => categories.reduce((acc, c) => ({ ...acc, [c.id]: true }), {})
  );

  function toggleCategory(catId) {
    setExpanded((prev) => ({ ...prev, [catId]: !prev[catId] }));
  }

  return (
    <aside className="sidebar" aria-label="Product categories">
      <nav>
        <div className="sidebar-section-label">Categories</div>

        <button
          className={`sidebar-all-btn${!selectedCategory ? ' active' : ''}`}
          onClick={() => selectCategory(null)}
        >
          <span className="sidebar-all-icon">🏠</span>
          All Products
        </button>

        <ul className="sidebar-list">
          {categories.map((cat) => (
            <li key={cat.id}>
              <div className="sidebar-cat-row">
                <button
                  className={`sidebar-cat-btn${selectedCategory === cat.id && !selectedSubCategory ? ' active' : ''}`}
                  onClick={() => selectCategory(cat.id)}
                  title={cat.name}
                >
                  <span className="sidebar-cat-icon">{cat.icon}</span>
                  <span className="sidebar-cat-name">{cat.name}</span>
                </button>
                <button
                  className={`sidebar-toggle${expanded[cat.id] ? ' open' : ''}`}
                  onClick={() => toggleCategory(cat.id)}
                  aria-label={expanded[cat.id] ? `Collapse ${cat.name}` : `Expand ${cat.name}`}
                >
                  ›
                </button>
              </div>

              {expanded[cat.id] && (
                <ul className="sidebar-sub-list">
                  {cat.subCategories.map((sub) => (
                    <li key={sub.id}>
                      <button
                        className={`sidebar-sub-btn${selectedSubCategory === sub.id ? ' active' : ''}`}
                        onClick={() => selectSubCategory(sub.id, cat.id)}
                      >
                        {sub.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
