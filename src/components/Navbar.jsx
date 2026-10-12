import React, { useState } from 'react';

export default function Navbar({
  activeTab = 'Home',
  onTabChange,
  categoriesOpen = true,
}) {
  const [isCatOpen, setIsCatOpen] = useState(categoriesOpen);
  const [pagesDropdown, setPagesDropdown] = useState(false);

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

  const navItems = ['Home', 'Shop', 'Shop Detail', 'Pages', 'Contact'];

  return (
    <nav className="bg-white border-b border-gray-100 px-4 md:px-12 relative z-20">
      <div className="flex items-stretch justify-between">
        
        {/* Categories Dropdown Section */}
        <div className="w-64 relative flex-shrink-0">
          <button
            type="button"
            onClick={() => setIsCatOpen(!isCatOpen)}
            className="w-full bg-[#4c1d54] text-white px-5 py-3 font-semibold text-sm flex items-center justify-between rounded-t-sm"
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

          {/* Categories List */}
          {isCatOpen && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-md py-2 z-30">
              {categories.map((cat, idx) => (
                <a
                  key={idx}
                  href={`#category-${cat.name.toLowerCase()}`}
                  className="px-5 py-2 text-sm text-gray-700 hover:text-[#4c1d54] hover:bg-gray-50 flex items-center justify-between transition"
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

        {/* Center Nav Links */}
        <div className="flex-1 flex items-center pl-8">
          <div className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = activeTab === item;

              if (item === 'Pages') {
                return (
                  <div
                    key={item}
                    className="relative"
                    onMouseEnter={() => setPagesDropdown(true)}
                    onMouseLeave={() => setPagesDropdown(false)}
                  >
                    <button
                      type="button"
                      className="flex items-center space-x-1 text-gray-700 hover:text-[#D19C97] transition"
                    >
                      <span>Pages</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {pagesDropdown && (
                      <div className="absolute top-full left-0 w-40 bg-white border border-gray-200 shadow-md py-2 z-40">
                        <a href="#cart" className="block px-4 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-[#4c1d54]">Shopping Cart</a>
                        <a href="#checkout" className="block px-4 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-[#4c1d54]">Checkout</a>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item}
                  onClick={() => onTabChange && onTabChange(item)}
                  className={`transition ${
                    isActive
                      ? 'text-[#D19C97] font-semibold'
                      : 'text-gray-700 hover:text-[#D19C97]'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4 text-sm font-medium">
          <a href="#login" className="text-gray-700 hover:text-[#4c1d54] transition">Login</a>
          <a href="#register" className="text-gray-700 hover:text-[#4c1d54] transition">Register</a>
        </div>

      </div>
    </nav>
  );
}

