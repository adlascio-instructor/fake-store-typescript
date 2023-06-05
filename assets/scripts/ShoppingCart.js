export class ShoppingCart {
  constructor() {
    this._items = [];
  }

  addProduct(product) {
    // this.items.push(product);
    this.items = [...this._items, product];
    console.log("items", this._items);
  }

  set items(updatedItems) {
    this._items = [...updatedItems];
    const spanTotal = document.getElementById("totalCart");
    spanTotal.textContent = this.total;
  }

  get total() {
    return this._items.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);
  }

  render() {
    const section = document.createElement("section");
    section.classList.add("cart");
    section.innerHTML = `<h2>Total: <span id="totalCart">$${this.total}</span></h2>
        <button>Order Now!</button>`;
    return section;
  }
}
