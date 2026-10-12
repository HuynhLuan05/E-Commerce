import React from 'react';
import TopBarView from './components/TopBarView';
import HeaderView from './components/HeaderView';
import NavbarView from './components/NavbarView';
import FooterView from './components/FooterView';

/**
 * [VIEW] DetailView
 * Yêu cầu:
 * - Bao gồm Header, Footer giống ở trang Home.
 * - Một thẻ <textarea> chứa nội dung bất kì (nhận dữ liệu từ ô tìm kiếm ở Home truyền sang).
 */
export default function DetailView({
  cartCount,
  searchQuery,
  onSearch,
  onNavigate,
  onUpdateDetailContent,
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. TopBar */}
      <TopBarView />

      {/* 2. Header (Đồng bộ Cart count và ô search) */}
      <HeaderView
        cartCount={cartCount}
        searchQuery={searchQuery}
        onSearch={onSearch}
        onNavigateHome={() => onNavigate('HOME')}
      />

      {/* 3. Navbar */}
      <NavbarView
        currentView="DETAIL"
        onNavigate={onNavigate}
        defaultCategoriesOpen={false}
      />

      {/* 4. Detail Body Content */}
      <main className="flex-1 py-10 px-4 sm:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-white p-6 sm:p-10 rounded-sm shadow-sm border border-gray-200">
          
          {/* Breadcrumb navigation */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <button
                type="button"
                onClick={() => onNavigate('HOME')}
                className="hover:text-[#4c1d54] font-medium transition"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-[#4c1d54] font-bold">Detail Page</span>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('HOME')}
              className="text-xs bg-[#4c1d54] hover:bg-[#60256a] text-white px-4 py-2 rounded-sm font-semibold transition"
            >
              ← Quay lại trang Home
            </button>
          </div>

          {/* Heading */}
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mb-2">
              Trang Detail (Hiển thị kết quả tìm kiếm)
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Dữ liệu từ ô tìm kiếm trang Home được xử lý qua Model - Controller và hiển thị trực tiếp vào thẻ <code className="bg-purple-100 text-[#4c1d54] px-1.5 py-0.5 rounded font-mono text-xs">&lt;textarea&gt;</code> bên dưới:
            </p>
          </div>

          {/* YÊU CẦU ĐỀ BÀI: Thẻ <textarea> chứa nội dung vừa nhập */}
          <div className="space-y-3">
            <label
              htmlFor="detail-textarea"
              className="block text-xs uppercase font-bold text-gray-600 tracking-wider"
            >
              Nội dung dữ liệu (Textarea):
            </label>

            <textarea
              id="detail-textarea"
              rows={8}
              value={searchQuery}
              onChange={(e) => onUpdateDetailContent && onUpdateDetailContent(e.target.value)}
              placeholder="Dữ liệu tìm kiếm từ trang Home sẽ hiển thị ở đây..."
              className="w-full p-4 border border-gray-300 rounded-sm shadow-inner text-sm text-gray-800 font-normal focus:border-[#4c1d54] focus:ring-1 focus:ring-[#4c1d54] outline-none transition resize-y bg-gray-50/50"
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-gray-500 pt-1">
              <span>
                Trạng thái: <strong className="text-emerald-600">Đã nhận dữ liệu thành công từ MVC Controller</strong>
              </span>
              <span>Số ký tự: {searchQuery.length}</span>
            </div>
          </div>

        </div>
      </main>

      {/* 5. Footer */}
      <FooterView />
    </div>
  );
}

