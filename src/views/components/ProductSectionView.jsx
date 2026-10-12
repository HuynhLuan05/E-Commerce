import React, { useState } from 'react';
import ProductCardView from './ProductCardView';

/**
 * [VIEW] ProductSectionView
 * Khu vực danh sách sản phẩm nổi bật
 */
export default function ProductSectionView({
  products = [],
  onAddToCart,
}) {
  const [activeSubTab, setActiveSubTab] = useState('DESCRIPTION');

  return (
    <section className="px-4 sm:px-8 lg:px-12 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title Header */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-3">
            <span className="hidden sm:block w-12 h-0.5 bg-[#4c1d54]"></span>
            <h2 className="bg-[#4c1d54] text-white text-base sm:text-lg font-bold px-6 py-2 rounded-sm shadow-sm tracking-wide">
              Most Popular Products
            </h2>
            <span className="hidden sm:block w-12 h-0.5 bg-[#4c1d54]"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Promo Banner */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-teal-100 p-6 sm:p-8 rounded-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-snug mb-3">
                Find out what everyone's talking about
              </h3>
              <p className="text-sm text-gray-600 font-medium">
                Browse our best
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <span className="w-10 h-10 rounded-full border border-teal-300 flex items-center justify-center text-teal-600 font-bold">
                ➔
              </span>
            </div>
          </div>

          {/* Right Product Grid */}
          <div className="lg:col-span-3 flex flex-col">
            
            {/* Sub Tabs */}
            <div className="flex items-center justify-between border-b border-gray-200 mb-6">
              <div className="flex space-x-4 sm:space-x-8">
                <button
                  type="button"
                  onClick={() => setActiveSubTab('DESCRIPTION')}
                  className={`py-3 text-xs sm:text-sm font-bold uppercase tracking-wider border-t-2 -mt-[2px] transition ${
                    activeSubTab === 'DESCRIPTION'
                      ? 'border-[#E5A125] text-gray-900'
                      : 'border-transparent text-gray-400 hover:text-gray-700'
                  }`}
                >
                  DESCRIPTION
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSubTab('SPECIFICATIONS')}
                  className={`py-3 text-xs sm:text-sm font-bold uppercase tracking-wider border-t-2 -mt-[2px] transition ${
                    activeSubTab === 'SPECIFICATIONS'
                      ? 'border-[#E5A125] text-gray-900'
                      : 'border-transparent text-gray-400 hover:text-gray-700'
                  }`}
                >
                  SPECIFICATIONS
                </button>
              </div>

              <a href="#view-all" className="text-xs font-bold text-gray-700 hover:text-[#4c1d54] underline">
                View All &gt;&gt;
              </a>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((item) => (
                <ProductCardView
                  key={item.id}
                  product={item}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>

            {/* Indicator */}
            <div className="flex justify-center items-center mt-8">
              <span className="w-10 h-1.5 bg-gray-900 rounded-full"></span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

