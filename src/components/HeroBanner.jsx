import React from 'react';

export default function HeroBanner() {
  return (
    <div className="px-4 md:px-12 py-6 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Hero Banner */}
        <div className="lg:col-span-2 relative h-96 rounded-sm overflow-hidden bg-gray-900 group">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80"
            alt="Reasonable Price Banner"
            className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-6 text-white">
            <span className="text-sm font-semibold tracking-widest uppercase mb-2">10% OFF YOUR FIRST ORDER</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Reasonable Price
            </h1>
            <a
              href="#shop"
              className="bg-white text-gray-900 hover:bg-[#4c1d54] hover:text-white px-8 py-3 text-sm font-bold uppercase transition duration-300 shadow-md"
            >
              Shop Now
            </a>
          </div>

          {/* Carousel Arrows */}
          <button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Right 2 Side Banners */}
        <div className="flex flex-col gap-6">
          {/* Banner 1 */}
          <div className="relative h-44 rounded-sm overflow-hidden bg-gray-800 group">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80"
              alt="Winter Collection"
              className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-6 text-white">
              <span className="text-xs uppercase font-medium tracking-wider mb-1">PREFER CUSTOMER 2025</span>
              <h3 className="text-xl font-bold mb-3">Winter Collection</h3>
              <a href="#shop" className="text-xs font-semibold underline hover:text-[#D19C97] transition">
                Shop Now
              </a>
            </div>
          </div>

          {/* Banner 2 */}
          <div className="relative h-44 rounded-sm overflow-hidden bg-gray-800 group">
            <img
              src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=80"
              alt="Winter Collection"
              className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-6 text-white">
              <span className="text-xs uppercase font-medium tracking-wider mb-1">PREFER CUSTOMER 2025</span>
              <h3 className="text-xl font-bold mb-3">Winter Collection</h3>
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

