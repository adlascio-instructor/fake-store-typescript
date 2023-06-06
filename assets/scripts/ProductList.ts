import { ProductItem } from "./ProductItem.js";

export class ProductList {
  private products: ProductItem[] = [];

  async fetchProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    for (const prod of data) {
      const newProductItem = new ProductItem(prod);
      this.products.push(newProductItem);
    }
  }
  async render() {
    await this.fetchProducts();
    const ul = document.createElement("ul");
    ul.classList.add("product-list");

    this.products.forEach((product) => {
      const productLi = product.render();
      ul.append(productLi);
    });
    return ul;
  }
}
