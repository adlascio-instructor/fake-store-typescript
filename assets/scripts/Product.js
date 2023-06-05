export class Product {
  constructor(product) {
    this.product = {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      img: product.image,
    };
  }
}
