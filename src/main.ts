import { CpfValidator } from './cpf-validator';
import { Order } from './order';

const products = [
  {
    description: 'agua',
    value: 2,
  },
  {
    description: 'mel',
    value: 3,
  },
  {
    description: 'arroz',
    value: 5,
  },
];

const cupoms = [
  {
    code: 'VALE10',
    percentage: 10,
  },
];

interface ICreateOrder {
  products: Array<{
    description: string;
    amount: number;
  }>;
  cpf: string;
  cupom?: string;
}

export function createOrder(input: ICreateOrder) {
  const isValidCpf = CpfValidator.validate(input.cpf);
  if (!isValidCpf) throw new Error('Invalid CPF');
  const order = new Order();
  for (let i = 0; i < input.products.length; i++) {
    const product = products.find(
      (p) => p.description === input.products[i].description
    );
    if (!product) throw new Error('Product not found');
    order.addProduct({ ...product, amount: input.products[i].amount });
  }
  if (input.cupom) {
    const cupom = cupoms.find((c) => c.code === input.cupom);
    if (!cupom) return;
    order.addCupom(cupom);
  }
  return { value: order.getTotal() };
}
