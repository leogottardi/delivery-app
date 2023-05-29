import { createOrder } from '../src/main';

test('Deve criar um pedido com 3 produtos e calcular o valor total', async () => {
  const input = {
    cpf: '144.189.017-36',
    products: [
      {
        description: 'A',
        amount: 2,
      },
      {
        description: 'B',
        amount: 2,
      },
      {
        description: 'C',
        amount: 1,
      },
    ],
  };

  const output = await createOrder(input);
  expect(output?.value).toBe(12030);
});

test('Deve criar um pedido com 3 produtos e aplicar 10% de desconto', async () => {
  const input = {
    cpf: '144.189.017-36',
    products: [
      {
        description: 'A',
        amount: 2,
      },
      {
        description: 'B',
        amount: 2,
      },
      {
        description: 'C',
        amount: 1,
      },
    ],
    cupom: 'VALE10',
  };

  const output = await createOrder(input);
  expect(output?.value).toBe(10827);
});

test('Não deve aplicar um cupom expirado', async () => {
  const input = {
    cpf: '144.189.017-36',
    products: [
      {
        description: 'A',
        amount: 2,
      },
      {
        description: 'B',
        amount: 2,
      },
      {
        description: 'C',
        amount: 1,
      },
    ],
    cupom: 'VALE20',
  };
  expect(async () => {
    await createOrder(input);
  }).rejects.toThrow(new Error('Expired cupom'));
});

test('Ao fazer um pedido, a quantidade de um item não pode ser negativa', async () => {
  const input = {
    cpf: '144.189.017-36',
    products: [
      {
        description: 'A',
        amount: -1,
      },
    ],
  };
  expect(async () => {
    await createOrder(input);
  }).rejects.toThrow(new Error('Invalid product amount'));
});
