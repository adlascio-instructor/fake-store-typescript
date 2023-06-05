import { Shop } from "./Shop.js";

export class App {
  static init() {
    this.shop = new Shop();
    this.shop.render();
  }
  static addProductToCart(product) {
    this.shop.cart.addProduct(product);
  }
}

App.init();
