import { createOrder } from '../src/main';

test('Deve criar um pedido com 3 produtos e calcular o valor total', () => {
  const input = {
    cpf: '144.189.017-36',
    products: [
      {
        description: 'agua',
        amount: 2,
      },
      {
        description: 'mel',
        amount: 2,
      },
      {
        description: 'arroz',
        amount: 1,
      },
    ],
  };

  const output = createOrder(input);
  expect(output?.value).toBe(15);
});

test("Deve criar um pedido com 3 produtos e aplicar 10% de desconto", () => {
  const input = {
    cpf: '144.189.017-36',
    products: [
      {
        description: 'agua',
        amount: 2,
      },
      {
        description: 'mel',
        amount: 2,
      },
      {
        description: 'arroz',
        amount: 1,
      },
    ],
    cupom: 'VALE10'
  };

  const output = createOrder(input);
  expect(output?.value).toBe(13.5);
})
