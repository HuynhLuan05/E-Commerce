import React, { useState, useEffect } from 'react';

/**
 * [VIEW] HeaderView
 * Hiển thị Header gồm:
 * - Logo / Brand
 * - Search Bar 
 * - Cart Icon & Wishlist
 */
export default function HeaderView({
  cartCount = 0,
  searchQuery = '',
  onSearch,
  onNavigateHome,
}) {
  const [inputValue, setInputValue] = useState(searchQuery);

  // Cập nhật giá trị input khi searchQuery từ controller thay đổi
  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(inputValue);
    }
  };

  return (
    <header className="bg-white py-4 px-4 sm:px-8 lg:px-12 border-b border-gray-100 shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand / Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <button
            type="button"
            onClick={onNavigateHome}
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#4c1d54] flex items-center group"
          >
            <span className="text-[#D19C97] border-2 border-[#D19C97] px-2 py-0.5 mr-1 font-black group-hover:bg-[#D19C97] group-hover:text-white transition duration-200">
              E
            </span>
            <span>SHOPPER</span>
          </button>

          {/* Mobile Cart Preview */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              type="button"
              className="flex items-center space-x-1 border border-gray-200 px-2.5 py-1.5 rounded text-xs font-bold text-gray-700"
            >
              <span>🛒</span>
              <span className="text-[#4c1d54]">{cartCount}</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:max-w-xl flex items-stretch border border-gray-300 rounded overflow-hidden focus-within:border-[#4c1d54] focus-within:ring-1 focus-within:ring-[#4c1d54] transition shadow-sm"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search for products"
            className="flex-1 px-4 py-2.5 text-sm text-gray-800 outline-none placeholder-gray-400"
          />

          {/* Nút tìm kiếm */}
          <button
            type="submit"
            id="search-btn-node-7-34"
            title="Nhấn nút tìm kiếm để hiển thị ở Detail"
            className="bg-[#4c1d54] hover:bg-[#60256a] active:bg-[#3b1542] text-white px-5 flex items-center justify-center transition"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M23.707 22.293l-5.969-5.969a10.01 10.01 0 10-1.414 1.414l5.969 5.969a1 1 0 001.414-1.414zM10 18a8 8 0 118-8 8.009 8.009 0 01-8 8z" />
            </svg>
          </button>
        </form>

        {/* Desktop Cart Counter & Wishlist */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="flex items-center space-x-2 border border-gray-200 px-3.5 py-2 rounded text-gray-700 hover:border-gray-400 transition cursor-pointer">
            <svg className="w-4 h-4 fill-[#4c1d54]" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="text-sm font-bold">0</span>
          </div>

          <div
            id="cart-counter-node-7-36"
            className="flex items-center space-x-2 border border-gray-200 px-3.5 py-2 rounded text-gray-700 hover:border-gray-400 transition cursor-pointer relative"
          >
            <svg className="w-4 h-4 fill-[#4c1d54]" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <span className="text-sm font-extrabold text-[#4c1d54] min-w-[12px] text-center">
              {cartCount}
            </span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#58B245] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-pulse">
                {cartCount}
              </span>
            )}
          </div>
        </div>

      </div>
    </header>
  );
}

