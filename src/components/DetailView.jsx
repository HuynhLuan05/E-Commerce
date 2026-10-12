import React from 'react';

/**
 * DetailView Component
 * Tương ứng với Annotation Node 7-28: 'Kết quả hiển thị ở trang Detail'
 * Hiển thị kết quả tìm kiếm nhận từ Home sau khi nhấn nút kính lúp (Node 7-34)
 */
export default function DetailView({
  searchQuery = 'Reasonable Price',
  onBackToHome,
}) {
  return (
    <div className="px-4 md:px-12 py-10 bg-white min-h-[500px]">
      
      {/* Breadcrumb / Back button */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <button
            type="button"
            onClick={onBackToHome}
            className="hover:text-[#4c1d54] underline font-medium"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-gray-900 font-semibold">Shop Detail</span>
        </div>

        <button
          type="button"
          onClick={onBackToHome}
          className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded transition"
        >
          ← Quay lại trang chủ
        </button>
      </div>

      {/* Khung hiển thị kết quả đúng như Figma Screenshot 134055 */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Chi tiết kết quả tìm kiếm
        </h2>

        {/* Khung viền chữ nhật hiển thị text đã nhập ở Home */}
        <div className="border border-gray-300 rounded-sm p-6 min-h-[260px] bg-white shadow-inner flex flex-col justify-start">
          <p className="text-base font-medium text-gray-900 mb-2">
            {searchQuery || 'Chưa có từ khóa tìm kiếm'}
          </p>
          <p className="text-xs text-gray-400">
            (Dữ liệu được truyền từ ô input ở Home sau khi kích hoạt sự kiện click tại Node 7-34)
          </p>

          {/* Mô phỏng các sản phẩm khớp với từ khóa */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Danh sách kết quả tương ứng:
            </h3>
            <div className="bg-gray-50 p-4 rounded border border-gray-100 text-sm text-gray-600 flex items-center justify-between">
              <div>
                <span className="font-semibold text-gray-900">{searchQuery} Special Offer</span>
                <span className="text-xs block text-gray-500">Danh mục: E-Commerce Collection</span>
              </div>
              <span className="text-sm font-bold text-[#E5A125]">$14.00</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

