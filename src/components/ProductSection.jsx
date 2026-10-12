import React, { useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductSection({ onAddToCart }) {
  const [activeSubTab, setActiveSubTab] = useState('DESCRIPTION');

  const products = [
    {
      id: 1,
      name: 'Pure Pineapple',
      category: 'AGELOC',
      price: 14.00,
      originalPrice: 35.00,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      name: 'Pure Pineapple',
      category: 'AGELOC',
      price: 14.00,
      originalPrice: 35.00,
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      name: 'Pure Pineapple',
      category: 'AGELOC',
      price: 14.00,
      originalPrice: 35.00,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <section className="px-4 md:px-12 py-12 bg-white">
      {/* Section Title Pill */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-3">
          <span className="w-12 h-0.5 bg-[#4c1d54]"></span>
          <h2 className="bg-[#4c1d54] text-white text-lg md:text-xl font-bold px-6 py-2 rounded-sm shadow-sm tracking-wide">
            Most Popular Products
          </h2>
          <span className="w-12 h-0.5 bg-[#4c1d54]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Promo Card */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-teal-100 p-8 rounded-sm flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900 leading-snug mb-4">
              Find out what everyone's talking about
            </h3>
            <p className="text-sm text-gray-600 font-medium">
              Browse our best
            </p>
          </div>
          <div className="mt-8 flex justify-end">
            <span className="w-12 h-12 rounded-full border border-teal-300 flex items-center justify-center text-teal-600">
              ➔
            </span>
          </div>
        </div>

        {/* Right Product Showcase & Tabs */}
        <div className="lg:col-span-3 flex flex-col">
          
          {/* Sub Tabs & View All */}
          <div className="flex items-center justify-between border-b border-gray-200 mb-6">
            <div className="flex space-x-6">
              <button
                type="button"
                onClick={() => setActiveSubTab('DESCRIPTION')}
                className={`py-3 text-xs md:text-sm font-bold uppercase tracking-wider border-t-2 -mt-[2px] transition ${
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
                className={`py-3 text-xs md:text-sm font-bold uppercase tracking-wider border-t-2 -mt-[2px] transition ${
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

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((item) => (
              <ProductCard
                key={item.id}
                {...item}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>

          {/* Bottom Indicators / Slider bar */}
          <div className="flex justify-center items-center mt-8">
            <span className="w-8 h-1 bg-gray-900 rounded-full"></span>
          </div>

        </div>

      </div>
    </section>
  );
}

