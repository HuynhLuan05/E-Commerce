import React from 'react';

/**
 * [VIEW] HeroBannerView
 * Banner trượt và 2 banner phụ khuyến mãi
 */
export default function HeroBannerView() {
  return (
    <div className="px-4 sm:px-8 lg:px-12 py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Banner */}
        <div className="lg:col-span-2 relative h-72 sm:h-96 rounded-sm overflow-hidden bg-gray-900 group">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80"
            alt="Reasonable Price Banner"
            className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center text-center p-6 text-white">
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 text-pink-200">
              10% OFF YOUR FIRST ORDER
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
              Reasonable Price
            </h1>
            <a
              href="#shop"
              className="bg-white text-gray-900 hover:bg-[#4c1d54] hover:text-white px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase transition duration-300 shadow-md"
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* 2 Side Banners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          <div className="relative h-44 rounded-sm overflow-hidden bg-gray-800 group">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80"
              alt="Winter Collection 1"
              className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/35 flex flex-col justify-center p-6 text-white">
              <span className="text-[11px] uppercase font-medium tracking-wider mb-1 text-pink-200">
                PREFER CUSTOMER 2025
              </span>
              <h3 className="text-lg font-bold mb-2">Winter Collection</h3>
              <a href="#shop" className="text-xs font-semibold underline hover:text-[#D19C97] transition">
                Shop Now
              </a>
            </div>
          </div>

          <div className="relative h-44 rounded-sm overflow-hidden bg-gray-800 group">
            <img
              src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=80"
              alt="Winter Collection 2"
              className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/35 flex flex-col justify-center p-6 text-white">
              <span className="text-[11px] uppercase font-medium tracking-wider mb-1 text-pink-200">
                PREFER CUSTOMER 2025
              </span>
              <h3 className="text-lg font-bold mb-2">Winter Collection</h3>
              <a href="#shop" className="text-xs font-semibold underline hover:text-[#D19C97] transition">
                Shop Now
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

