import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import './App.css';

function CatalogApp() {
  return (
    <div className="app-layout">
      <Header />
      <div className="app-body">
        <Sidebar />
        <ProductGrid />
      </div>
      <ProductDetail />
      <Cart />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <CatalogApp />
    </AppProvider>
  );
}
