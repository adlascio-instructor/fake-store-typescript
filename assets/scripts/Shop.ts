import { ProductList } from "./ProductList.js";
import { ShoppingCart } from "./ShoppingCart.js";

export class Shop {
  private static instance: Shop;
  products: ProductList;
  cart: ShoppingCart;
  private constructor() {
    this.products = new ProductList();
    this.cart = new ShoppingCart();
  }
  async render() {
    const section = this.cart.render();
    const ul = await this.products.render();
    const shopEl = document.createElement("main");
    shopEl.append(section, ul);
    return shopEl;
  }
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new Shop();
    return this.instance;
  }
}
