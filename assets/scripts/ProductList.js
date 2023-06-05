import { ProductItem } from "./ProductItem.js";

export class ProductList {
  constructor() {
    this.products = [];
  }
  async fetchProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    for (const prod of data) {
      const newProductItem = new ProductItem(prod);
      //   console.log("prod", newProductItem);
      this.products.push(newProductItem);
    }
    return true;
  }
  async render() {
    const fetch = await this.fetchProducts();
    const ul = document.createElement("ul");
    ul.classList.add("product-list");

    this.products.forEach((product) => {
      const productLi = product.render();
      //   console.log("li", productLi);
      ul.append(productLi);
    });
    return ul;
  }
}
