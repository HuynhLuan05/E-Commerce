import React, { useState } from 'react';

/**
 * Header Component
 * Bao gồm:
 * - Logo / Brand
 * - Search Bar (Input + Button tìm kiếm - Node 7-34 'Nhấn nút')
 * - Wishlist & Cart Counter (Node 7-36 'Kết quả khi nhấn add to cart')
 */
export default function Header({
  cartCount = 0,
  wishlistCount = 0,
  onSearch,
  initialSearchQuery = '',
}) {
  const [keyword, setKeyword] = useState(initialSearchQuery);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(keyword.trim());
    }
  };

  return (
    <header className="bg-white py-5 px-4 md:px-12 border-b border-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand / Logo */}
        <div className="flex items-center">
          <a href="#home" className="text-2xl font-bold tracking-tight text-[#4c1d54]">
            <span className="text-[#D19C97] border border-[#D19C97] px-2 py-0.5 mr-1 font-extrabold">E</span>
            <span>SHOPPER</span>
          </a>
        </div>

        {/* Search Bar - Chứa Node 7-34 'Nhấn nút' */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl flex items-stretch border border-gray-300 rounded-sm overflow-hidden focus-within:border-[#4c1d54] transition"
        >
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search for products"
            className="flex-1 px-4 py-2 text-sm text-gray-700 outline-none"
          />
          {/* Node 7-34: Nút tìm kiếm (Kính lúp) */}
          <button
            type="submit"
            id="search-btn-7-34"
            title="Nhấn nút tìm kiếm"
            className="bg-transparent hover:bg-gray-100 text-[#4c1d54] px-4 flex items-center justify-center border-l border-gray-200 transition"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M23.707 22.293l-5.969-5.969a10.01 10.01 0 10-1.414 1.414l5.969 5.969a1 1 0 001.414-1.414zM10 18a8 8 0 118-8 8.009 8.009 0 01-8 8z" />
            </svg>
          </button>
        </form>

        {/* Wishlist & Cart Counters */}
        <div className="flex items-center space-x-3">
          {/* Wishlist */}
          <button
            type="button"
            className="flex items-center space-x-2 border border-gray-200 px-3 py-1.5 rounded-sm hover:border-gray-400 transition"
          >
            <svg className="w-4 h-4 fill-[#4c1d54]" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="text-sm font-semibold text-gray-700">{wishlistCount}</span>
          </button>

          {/* Cart - Cập nhật khi nhấn 'Add to card' (Node 7-36) */}
          <button
            type="button"
            className="flex items-center space-x-2 border border-gray-200 px-3 py-1.5 rounded-sm hover:border-gray-400 transition relative"
          >
            <svg className="w-4 h-4 fill-[#4c1d54]" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <span className="text-sm font-semibold text-gray-700">{cartCount}</span>
          </button>
        </div>

      </div>
    </header>
  );
}

