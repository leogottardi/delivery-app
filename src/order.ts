interface IProductOrder {
  value: number;
  amount: number;
  description: string;
}

interface ICupomOrder {
  code: string;
  percentage: number;
}

export class Order {
  products: IProductOrder[] = [];
  total = 0;
  cupom?: ICupomOrder;

  addProduct(product: IProductOrder) {
    this.products.push(product);
    this.total += product.value * product.amount;
  }

  addCupom(cupom: ICupomOrder) {
    this.cupom = cupom;
  }

  getTotal() {
    if (!this.cupom) return this.total;
    return this.total - (this.cupom.percentage / 100) * this.total;
  }
}
