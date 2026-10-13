import React from 'react';

/**
 * [VIEW] FeaturedPromoView
 * Section giới thiệu sản phẩm tiêu biểu
 */
export default function FeaturedPromoView() {
  return (
    <section className="px-4 sm:px-8 lg:px-12 py-10 bg-white">
      <div className="max-w-7xl mx-auto bg-[#FDFBFB] border border-gray-100 rounded-sm overflow-hidden p-6 sm:p-12 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          
          {/* Cột trái: Ảnh người mẫu + Badge giá Sale tròn */}
          <div className="relative flex justify-center items-center">
            <div className="relative max-w-sm rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80"
                alt="ageLOC LumiSpa iO Model"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
            
            {/* Badge tròn tím 'Sale Of $29.99' */}
            <div className="absolute top-2 right-4 sm:right-12 bg-[#4c1d54] text-white w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center text-center shadow-lg border-2 border-white transform hover:scale-105 transition duration-200">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-pink-200">Sale Of</span>
              <span className="text-sm sm:text-base font-extrabold">$29.99</span>
            </div>
          </div>

          {/* Cột phải: Tiêu đề & Nút Shop Now */}
          <div className="text-center md:text-left space-y-4 md:pl-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-gray-400">
              AGELOC® LUMISPA® iO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              ageLOC® LumiSpa® iO
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
              Elevate your skincare routine
            </p>
            <div className="pt-2">
              <a
                href="#shop"
                className="inline-block bg-[#4c1d54] hover:bg-[#63236e] active:scale-95 text-white px-8 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase rounded-sm transition duration-200 shadow"
              >
                SHOP NOW
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
