import { createOrder } from '../src/main';

it('deve criar um pedido com 3 produtos', () => {
  const input = {
    cpf: '673.959.764-28',
    order: [
      { productName: 'Cerveja', amount: 2 }, // 5
      { productName: 'Banana', amount: 5 }, // 3
      { productName: 'Leite', amount: 1 }, // 4
    ],
  };
  const order = createOrder(input);
  expect(order.total).toBe(29);
});
it('deve criar um pedido com 3 produtos e associar um cupom de desconto', () => {
  const input = {
    cpf: '673.959.764-28',
    order: [
      { productName: 'Cerveja', amount: 2 },
      { productName: 'Banana', amount: 5 },
      { productName: 'Leite', amount: 1 },
    ],
    coupom: 'COUPOM_5',
  };
  const order = createOrder(input);
  expect(order.total).toBe(27.55);
});
it('não deve criar um pedido com cpf inválido', () => {
  const input = {
    cpf: '111.111.111-11',
    order: [
      { productName: 'Cerveja', amount: 2 },
      { productName: 'Banana', amount: 5 },
      { productName: 'Leite', amount: 1 },
    ],
    coupom: 'COUPOM_5',
  };
  try {
    createOrder(input);
  } catch (err: any) {
    expect(err.message).toBe('Cpf is invalid');
  }
});
