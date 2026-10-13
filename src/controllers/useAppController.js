import { useState, useMemo } from 'react';
import { CartModel } from '../models/cartModel';
import { SearchModel } from '../models/searchModel';
import { INITIAL_PRODUCTS } from '../models/productModel';

/**
 * Đóng vai trò là Controller trong mô hình MVC:
 * 1. Tiếp nhận sự kiện người dùng từ Views (Search, Add to Cart, Điều hướng)
 * 2. Tương tác với Models để cập nhật và truy xuất dữ liệu
 * 3. Cung cấp dữ liệu đã xử lý và các handler cho Views
 */
export function useAppController() {
  // Khởi tạo Model instances
  const cartModel = useMemo(() => new CartModel(0), []);
  const searchModel = useMemo(() => new SearchModel('Reasonable Price'), []);

  // State đồng bộ hóa dữ liệu Model lên React UI
  const [cartCount, setCartCount] = useState(cartModel.getCount());
  const [searchQuery, setSearchQuery] = useState(searchModel.getQuery());
  const [currentView, setCurrentView] = useState('HOME'); // 'HOME' | 'DETAIL'
  const [products] = useState(INITIAL_PRODUCTS);

  // Controller Action 1: Xử lý tìm kiếm
  const handleSearch = (keyword) => {
    const updatedQuery = searchModel.setQuery(keyword);
    setSearchQuery(updatedQuery);
    setCurrentView('DETAIL'); // Tự động chuyển sang trang Detail
  };

  // Controller Action 2: Xử lý click 'Add to cart'
  const handleAddToCart = (product) => {
    const newCount = cartModel.increment();
    setCartCount(newCount);
  };

  // Controller Action 3: Điều hướng giữa các trang
  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  // Controller Action 4: Cập nhật nội dung trong textarea ở trang Detail
  const handleUpdateDetailContent = (content) => {
    const updated = searchModel.setQuery(content);
    setSearchQuery(updated);
  };

  return {
    // Data
    cartCount,
    searchQuery,
    currentView,
    products,

    // Actions (Controller handlers)
    handleSearch,
    handleAddToCart,
    handleNavigate,
    handleUpdateDetailContent,
  };
}

