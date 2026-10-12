import React from 'react';
import { useAppController } from './controllers/useAppController';
import HomeView from './views/HomeView';
import DetailView from './views/DetailView';

/**
 * [ENTRY COMPONENT] App
 * Điều phối ứng dụng theo mô hình MVC:
 * - Controller: `useAppController` quản lý nghiệp vụ, giao tiếp với Models
 * - Views: `HomeView` và `DetailView` hiển thị giao diện thuần túy
 */
export default function App() {
  const {
    cartCount,
    searchQuery,
    currentView,
    products,
    handleSearch,
    handleAddToCart,
    handleNavigate,
    handleUpdateDetailContent,
  } = useAppController();

  if (currentView === 'DETAIL') {
    return (
      <DetailView
        cartCount={cartCount}
        searchQuery={searchQuery}
        onSearch={handleSearch}
        onNavigate={handleNavigate}
        onUpdateDetailContent={handleUpdateDetailContent}
      />
    );
  }

  return (
    <HomeView
      cartCount={cartCount}
      searchQuery={searchQuery}
      products={products}
      onSearch={handleSearch}
      onAddToCart={handleAddToCart}
      onNavigate={handleNavigate}
    />
  );
}
