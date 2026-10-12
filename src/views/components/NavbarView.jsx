import React, { useState } from 'react';

/**
 * [VIEW] NavbarView
 * Thanh điều hướng đa thiết bị (Responsive Mobile Hamburger & Desktop)
 */
export default function NavbarView({
  currentView = 'HOME',
  onNavigate,
  defaultCategoriesOpen = true,
}) {
  const [isCatOpen, setIsCatOpen] = useState(defaultCategoriesOpen);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    { name: 'Dresses', hasSub: true },
    { name: 'Shirts', hasSub: false },
    { name: 'Jeans', hasSub: false },
    { name: 'Swimwear', hasSub: false },
    { name: 'Sleepwear', hasSub: false },
    { name: 'Sportswear', hasSub: false },
    { name: 'Jumpsuits', hasSub: false },
    { name: 'Blazers', hasSub: false },
    { name: 'Jackets', hasSub: false },
    { name: 'Shoes', hasSub: false },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 px-4 sm:px-8 lg:px-12 relative z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Categories Button & Dropdown (Desktop) */}
        <div className="hidden lg:block w-64 relative flex-shrink-0">
          <button
            type="button"
            onClick={() => setIsCatOpen(!isCatOpen)}
            className="w-full bg-[#4c1d54] hover:bg-[#5a2463] text-white px-5 py-3 font-semibold text-sm flex items-center justify-between transition"
          >
            <span>Categories</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isCatOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isCatOpen && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-xl py-2 z-40 max-h-96 overflow-y-auto">
              {categories.map((cat, idx) => (
                <a
                  key={idx}
                  href={`#category-${cat.name.toLowerCase()}`}
                  className="px-5 py-2 text-sm text-gray-700 hover:text-[#4c1d54] hover:bg-purple-50 flex items-center justify-between transition"
                >
                  <span>{cat.name}</span>
                  {cat.hasSub && (
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden py-3">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-[#4c1d54] focus:outline-none flex items-center space-x-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
            <span className="text-sm font-semibold">Menu</span>
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-8 pl-8 text-sm font-medium">
          <button
            type="button"
            onClick={() => onNavigate('HOME')}
            className={`transition py-4 ${
              currentView === 'HOME'
                ? 'text-[#D19C97] font-bold border-b-2 border-[#D19C97]'
                : 'text-gray-700 hover:text-[#D19C97]'
            }`}
          >
            Home
          </button>

          <a href="#shop" className="text-gray-700 hover:text-[#D19C97] transition">
            Shop
          </a>

          <button
            type="button"
            onClick={() => onNavigate('DETAIL')}
            className={`transition py-4 ${
              currentView === 'DETAIL'
                ? 'text-[#D19C97] font-bold border-b-2 border-[#D19C97]'
                : 'text-gray-700 hover:text-[#D19C97]'
            }`}
          >
            Shop Detail
          </button>

          <a href="#contact" className="text-gray-700 hover:text-[#D19C97] transition">
            Contact
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-5 text-sm font-medium">
          <a href="#login" className="text-gray-700 hover:text-[#4c1d54] transition">Login</a>
          <a href="#register" className="text-gray-700 hover:text-[#4c1d54] transition">Register</a>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 py-3 space-y-2 bg-white">
          <button
            type="button"
            onClick={() => {
              onNavigate('HOME');
              setIsMobileMenuOpen(false);
            }}
            className={`block w-full text-left px-3 py-2 text-sm font-semibold rounded ${
              currentView === 'HOME' ? 'text-[#D19C97] bg-pink-50' : 'text-gray-700'
            }`}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => {
              onNavigate('DETAIL');
              setIsMobileMenuOpen(false);
            }}
            className={`block w-full text-left px-3 py-2 text-sm font-semibold rounded ${
              currentView === 'DETAIL' ? 'text-[#D19C97] bg-pink-50' : 'text-gray-700'
            }`}
          >
            Shop Detail (Xem kết quả)
          </button>

          <a href="#shop" className="block px-3 py-2 text-sm text-gray-700 font-medium">
            Shop
          </a>
          <a href="#contact" className="block px-3 py-2 text-sm text-gray-700 font-medium">
            Contact
          </a>

          <div className="pt-2 border-t border-gray-100 flex items-center space-x-4 px-3 text-sm">
            <a href="#login" className="text-gray-700 font-semibold">Login</a>
            <span className="text-gray-300">|</span>
            <a href="#register" className="text-gray-700 font-semibold">Register</a>
          </div>
        </div>
      )}
    </nav>
  );
}

