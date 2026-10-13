import React from 'react';

export default function ProductCard({
  id = 1,
  name = 'Pure Pineapple',
  category = 'AGELOC',
  price = 14.00,
  originalPrice = 35.00,
  image = 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80',
  isSale = true,
  isLoyal = true,
  onAddToCart,
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col group hover:shadow-lg transition duration-300 relative">
      
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        {isSale && (
          <span className="bg-[#58B245] text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
            SALE
          </span>
        )}
      </div>

      {isLoyal && (
        <div className="absolute top-2 right-2 z-10 w-9 h-9 rounded-full bg-yellow-500/90 border-2 border-yellow-300 flex items-center justify-center shadow text-center p-1">
          <span className="text-[7px] leading-tight font-extrabold text-white uppercase">
            KHÁCH HÀNG THÂN THIẾT
          </span>
        </div>
      )}

      {/* Product Image */}
      <div className="w-full h-56 bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 text-center flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
            {category}
          </p>
          <h4 className="text-base font-medium text-gray-800 mb-2 hover:text-[#4c1d54] transition">
            {name}
          </h4>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-lg font-bold text-[#E5A125]">
              ${Number(price).toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ${Number(originalPrice).toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Nút 'Add to card' */}
        <button
          type="button"
          onClick={() => onAddToCart && onAddToCart({ id, name, price })}
          className="w-full bg-[#4c1d54] hover:bg-[#63236e] active:scale-95 text-white py-2.5 text-xs font-semibold tracking-wide uppercase transition duration-200"
        >
          Add to card
        </button>
      </div>

    </div>
  );
}

