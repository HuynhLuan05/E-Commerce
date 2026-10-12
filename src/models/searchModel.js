/**
 * [MODEL] SearchModel
 * Quản lý dữ liệu từ khóa tìm kiếm và chuyển đổi nội dung
 */

export class SearchModel {
  constructor(initialQuery = '') {
    this.query = initialQuery;
  }

  getQuery() {
    return this.query;
  }

  setQuery(newQuery) {
    this.query = newQuery.trim();
    return this.query;
  }

  clear() {
    this.query = '';
    return this.query;
  }
}

