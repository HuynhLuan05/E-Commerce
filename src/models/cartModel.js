/**
 * [MODEL] CartModel
 * Quản lý dữ liệu giỏ hàng: số lượng sản phẩm, logic cộng dồn
 */

export class CartModel {
  constructor(initialCount = 0) {
    this.count = initialCount;
  }

  getCount() {
    return this.count;
  }

  increment() {
    this.count += 1;
    return this.count;
  }

  reset() {
    this.count = 0;
    return this.count;
  }
}

