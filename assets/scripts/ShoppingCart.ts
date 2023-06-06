import { ProductItem } from "./ProductItem";

export class ShoppingCart {
  private items: ProductItem[] = [];
  private _amountItems: number = 0;

  addProduct(product: ProductItem) {
    this.items = [...this.items, product];
    const spanTotal = document.getElementById("totalCart")!;
    spanTotal.textContent = `$ ${this.total.toFixed(2).toString()}`;
    this.amountItems = this.items.length;
  }

  getItemsText(numberOfItems: number) {
    if (numberOfItems === 0) {
      return "No items";
    } else if (numberOfItems === 1) {
      return "1 item";
    } else {
      return `${numberOfItems.toString()} items`;
    }
  }

  set amountItems(newAmount: number) {
    this._amountItems = newAmount;
    const spanAmount = document.getElementById("amountItems")!;
    spanAmount.textContent = this.getItemsText(newAmount);
  }

  get total() {
    return this.items.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);
  }

  render() {
    const section = document.createElement("section");
    section.classList.add("cart");
    section.innerHTML = `<h2>Total: <span id="totalCart">$${
      this.total
    }</span> - <span id="amountItems">${this.getItemsText(
      this._amountItems
    )}</span></h2>
          <button>Order Now!</button>`;
    return section;
  }
}
