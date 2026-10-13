import React from 'react';
import TopBarView from './components/TopBarView';
import HeaderView from './components/HeaderView';
import NavbarView from './components/NavbarView';
import HeroBannerView from './components/HeroBannerView';
import ProductSectionView from './components/ProductSectionView';
import FeaturedPromoView from './components/FeaturedPromoView';
import AwardRecognitionView from './components/AwardRecognitionView';
import NuSkinWayView from './components/NuSkinWayView';
import NewsSectionView from './components/NewsSectionView';
import FooterView from './components/FooterView';

/**
 * [VIEW] HomeView
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
      {/* 1. TopBar (FAQs, Social icons) */}
      <TopBarView />

      {/* 2. Header */}
      <HeaderView
        cartCount={cartCount}
        searchQuery={searchQuery}
        onSearch={onSearch}
        onNavigateHome={() => onNavigate('HOME')}
      />

      {/* 3. Navbar (Categories dropdown & menu) */}
      <NavbarView
        currentView="HOME"
        onNavigate={onNavigate}
        defaultCategoriesOpen={true}
      />

      {/* 4. Full Body Sections */}
      <main className="flex-1">
        {/* Section 1: Hero Banner Slider & 2 Banner phụ */}
        <HeroBannerView />

        {/* Section 2: Most Popular Products  */}
        <ProductSectionView
          products={products}
          onAddToCart={onAddToCart}
        />

        {/* Section 3: Featured Promo  */}
        <FeaturedPromoView />

        {/* Section 4: Award And Recognition */}
        <AwardRecognitionView />

        {/* Section 5: The Nu Skin Way */}
        <NuSkinWayView />

        {/* Section 6: Nu Skin In The News */}
        <NewsSectionView />
      </main>

      {/* 5. Footer */}
      <FooterView />
    </div>
  );
}
