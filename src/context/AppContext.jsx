import { createContext, useContext, useState, useCallback } from 'react';
import { products as allProducts, searchProducts } from '../data/products';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const displayedProducts = searchQuery
    ? searchProducts(searchQuery)
    : selectedSubCategory
    ? allProducts.filter((p) => p.subCategoryId === selectedSubCategory)
    : selectedCategory
    ? allProducts.filter((p) => p.categoryId === selectedCategory)
    : allProducts;

  const addToCart = useCallback((product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id
            ? { ...i, quantity: Math.min(i.quantity + quantity, product.quantity) }
            : i
        );
      }
      return [...prev, { ...product, quantity }];
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCartItems((prev) => prev.filter((i) => i.id !== productId));
  }, []);

  const updateCartQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((i) => (i.id === productId ? { ...i, quantity } : i))
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const cartTotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  const selectCategory = useCallback((categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSubCategory(null);
    setSelectedProduct(null);
    setSearchQuery('');
  }, []);

  const selectSubCategory = useCallback((subCategoryId, categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSubCategory(subCategoryId);
    setSelectedProduct(null);
    setSearchQuery('');
  }, []);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    if (query) {
      setSelectedCategory(null);
      setSelectedSubCategory(null);
    }
    setSelectedProduct(null);
  }, []);

  return (
    <AppContext.Provider
      value={{
        selectedCategory,
        selectedSubCategory,
        selectedProduct,
        setSelectedProduct,
        searchQuery,
        handleSearch,
        selectCategory,
        selectSubCategory,
        displayedProducts,
        cartItems,
        cartTotal,
        cartCount,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartOpen,
        setCartOpen,
        orderSubmitted,
        setOrderSubmitted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
