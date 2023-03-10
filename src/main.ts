import { isValidCpf } from './cpf-validator';
import { Order } from './order';

interface ICreateOrder {
  productName: string;
  amount: number;
}

interface ICreateOrderIn {
  cpf: string;
  order: ICreateOrder[];
  coupom?: string;
}

const coupons = [{ code: 'COUPOM_5', percentage: 5 }];

const products = [
  {
    productName: 'Cerveja',
    price: 5,
  },
  {
    productName: 'Banana',
    price: 3,
  },
  {
    productName: 'Leite',
    price: 4,
  },
];

export const createOrder = (input: ICreateOrderIn) => {
  if (!isValidCpf(input.cpf)) throw new Error('Cpf is invalid');
  const order = new Order();
  for (let i = 0; i < input.order.length; i++) {
    const product = products.find(
      (product) => product.productName === input.order[i].productName
    );
    if (product) {
      order.addProduct({
        name: product.productName,
        price: product.price,
        quantity: input.order[i].amount,
      });
    }
  }
  let total = order.getTotal();
  if (input.coupom) {
    const coupom = coupons.find((coupom) => coupom.code === input.coupom);
    if (coupom) total -= (total * coupom.percentage) / 100;
  }
  return { total };
};
