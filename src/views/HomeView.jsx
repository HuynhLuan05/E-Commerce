import React from 'react';
import TopBarView from './components/TopBarView';
import HeaderView from './components/HeaderView';
import NavbarView from './components/NavbarView';
import HeroBannerView from './components/HeroBannerView';
import ProductSectionView from './components/ProductSectionView';
import FooterView from './components/FooterView';

/**
 * [VIEW] HomeView
 * Giao diện trang Home hoàn chỉnh, responsive
 */
export default function HomeView({
  cartCount,
  searchQuery,
  products,
  onSearch,
  onAddToCart,
  onNavigate,
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. TopBar */}
      <TopBarView />

      {/* 2. Header (Search Bar 7-34 & Cart 7-36) */}
      <HeaderView
        cartCount={cartCount}
        searchQuery={searchQuery}
        onSearch={onSearch}
        onNavigateHome={() => onNavigate('HOME')}
      />

      {/* 3. Navbar */}
      <NavbarView
        currentView="HOME"
        onNavigate={onNavigate}
        defaultCategoriesOpen={true}
      />

      {/* 4. Body Content */}
      <main className="flex-1">
        {/* Banner Section */}
        <HeroBannerView />

        {/* Most Popular Products */}
        <ProductSectionView
          products={products}
          onAddToCart={onAddToCart}
        />
      </main>

      {/* 5. Footer */}
      <FooterView />
    </div>
  );
}

