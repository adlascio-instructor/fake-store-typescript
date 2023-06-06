import { ProductItem } from "./ProductItem.js";
import { Shop } from "./Shop.js";

export class App {
  static shop: Shop = Shop.getInstance();
  static async init() {
    const shopEl = await this.shop.render();
    const app = document.getElementById("app")!;
    app.append(shopEl);
  }
  static addProductToCart(product: ProductItem) {
    this.shop.cart.addProduct(product);
  }
}

App.init();
