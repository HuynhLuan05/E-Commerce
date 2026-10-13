import React from 'react';

/**
 * [VIEW] ProductCardView
 * Hiển thị từng sản phẩm và nút 'Add to card'
 */
export default function ProductCardView({
  product,
  onAddToCart,
}) {
  const { id, name, category, price, originalPrice, image, isSale, isLoyal } = product;

  return (
    <div className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col group hover:shadow-lg hover:border-gray-300 transition duration-300 relative">
      
      {/* Badge SALE */}
      {isSale && (
        <div className="absolute top-2 left-2 z-10">
          <span className="bg-[#58B245] text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider rounded-sm shadow-sm">
            SALE
          </span>
        </div>
      )}

      {/* Badge Khách hàng thân thiết */}
      {isLoyal && (
        <div className="absolute top-2 right-2 z-10 w-9 h-9 rounded-full bg-yellow-500 border-2 border-yellow-200 flex items-center justify-center shadow text-center p-0.5">
          <span className="text-[6.5px] leading-tight font-extrabold text-white uppercase">
            KHÁCH HÀNG THÂN THIẾT
          </span>
        </div>
      )}

      {/* Image container */}
      <div className="w-full h-56 bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Info & Button */}
      <div className="p-4 text-center flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold mb-1">
            {category}
          </p>
          <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 hover:text-[#4c1d54] transition">
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
          onClick={() => onAddToCart && onAddToCart(product)}
          className="w-full bg-[#4c1d54] hover:bg-[#63236e] active:scale-95 text-white py-2.5 text-xs font-bold tracking-wider uppercase transition duration-200 shadow-sm"
        >
          Add to card
        </button>
      </div>

    </div>
  );
}

