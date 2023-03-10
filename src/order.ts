import { OrderProduct } from './order-product';

interface IOrderProduct {
  name: string;
  price: number;
  quantity: number;
}

export class Order {
  private products: OrderProduct[] = [];

  addProduct({ name, price, quantity }: IOrderProduct) {
    this.products.push(new OrderProduct(name, price, quantity));
  }

  getTotal() {
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      total += this.products[i].price * this.products[i].quantity;
    }
    return total;
  }
}
