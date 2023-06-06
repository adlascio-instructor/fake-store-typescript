export type ProductType = {
  readonly id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: Rating;
};

type Rating = {
  rate: number;
  count: number;
};

export abstract class Product {
  readonly id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  protected rating: Rating = { rate: 0, count: 0 };
  constructor(product: ProductType) {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.description = product.description;
    this.image = product.image;
    this.rating = product.rating;
  }
  abstract getHTML(): string;
}

// export class Product {
//   product: ProductType;
//   constructor(product: ProductType) {
//     this.product = {
//       id: product.id,
//       title: product.title,
//       price: product.price,
//       description: product.description,
//       image: product.image,
//       rating: product.rating,
//     };
//   }
// }
