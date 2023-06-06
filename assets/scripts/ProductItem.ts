import { App } from "./App.js";
import { Product } from "./Product.js";

export class ProductItem extends Product {
  addToCart() {
    App.addProductToCart(this);
  }

  getHTML(): string {
    return `<div class="product-item__container" key="product-${this.id}">
      <img
        src="${this.image}"
        alt="${this.title}"
      />
      <div class="product-item__content">
        <h2>${this.title}</h2>
        <h3>$${this.price}</h3>
        <h3 class="rateText">${this.rating.rate} out of 5 - ${this.rating.count} votes</h3>
        <div>
            <p> Rate this product: </p>
            <select id="rateSelect">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button id="rateBtn">Submit</button>
        </div>
        <p>${this.description}</p>
        <button id="addBtn">Add to Cart</button>
      </div>
    </div>`;
  }

  updateRating(newRate: number) {
    this.rating = {
      rate:
        (this.rating.rate * this.rating.count + newRate) /
        (this.rating.count + 1),
      count: this.rating.count + 1,
    };
    const rateText = document.querySelector(
      `div[key="product-${this.id}"] .rateText`
    )! as HTMLHeadingElement;
    rateText.innerHTML = `${this.rating.rate.toFixed(1)} out of 5 - ${
      this.rating.count
    } votes`;
  }

  render() {
    const li = document.createElement("li");
    // li.className = "product-item";
    li.classList.add("product-item");
    li.innerHTML = this.getHTML();
    const addBtn = li.querySelector("#addBtn")! as HTMLButtonElement;
    const rateBtn = li.querySelector("#rateBtn")! as HTMLButtonElement;
    const rateSelect = li.querySelector("#rateSelect")! as HTMLSelectElement;
    addBtn.addEventListener("click", this.addToCart.bind(this));
    rateBtn.addEventListener(
      "click",
      this.updateRating.bind(this, +rateSelect.value)
    );
    return li;
  }
  //   render() {
  //     const li = document.createElement("li");
  //     // li.className = "product-item";
  //     li.classList.add("product-item");
  //     li.innerHTML = `<div>
  //       <img
  //         src="${this.image}"
  //         alt="${this.title}"
  //       />
  //       <div class="product-item__content">
  //         <h2>${this.title}</h2>
  //         <h3>$${this.price}</h3>
  //         <p>${this.description}</p>
  //         <button>Add to Cart</button>
  //       </div>
  //     </div>`;
  //     const addBtn = li.querySelector("button");
  //     if(addBtn){
  //         addBtn.addEventListener("click", this.addToCart.bind(this));
  //         return li;
  //     }
  //   }
}
