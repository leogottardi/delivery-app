import pgsql from 'pg-promise';
import { CpfValidator } from './cpf-validator';
import { Order } from './order';

interface ICreateOrder {
  products: Array<{
    description: string;
    amount: number;
  }>;
  cpf: string;
  cupom?: string;
}

const connection = pgsql()('postgres://postgres:senha@localhost:5432/postgres');

export async function createOrder(
  input: ICreateOrder
): Promise<{ value: number }> {
  const products = await connection.query('SELECT * FROM ccct10.product;');
  const isValidCpf = CpfValidator.validate(input.cpf);
  if (!isValidCpf) throw new Error('Invalid CPF');
  const invalidProduct = input.products.find((product) => product.amount <= 0);
  if (invalidProduct) throw new Error('Invalid product amount');
  const order = new Order();
  for (let i = 0; i < input.products.length; i++) {
    const product = products.find(
      (p: any) => p.description === input.products[i].description
    );
    if (!product) throw new Error('Product not found');
    order.addProduct({ ...product, amount: input.products[i].amount });
  }
  if (input.cupom) {
    const cupoms = await connection.query('SELECT * FROM ccct10.cupom;');
    const cupom = cupoms.find((c: any) => c.code === input.cupom);
    if (!cupom) throw new Error('Invalid cupom');
    if (cupom.expires_date < new Date()) throw new Error('Expired cupom');
    order.addCupom(cupom);
  }
  return { value: order.getTotal() };
}
