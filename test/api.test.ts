import axios from 'axios';

test('Deve retornar um erro quando o CPF for inválido', async () => {
  const input = {
    cpf: '144.189.017-35',
    items: [],
  };
  const response: any = await axios.post(
    'http://localhost:3000/checkout',
    input
  );
  expect(response.data.message).toBe('Invalid cpf');
});

test('Deve retornar o valor total da compra', async () => {
  const input = {
    cpf: '144.189.017-36',
    products: [
      {
        description: 'A', // R$ 1000
        amount: 1,
      },
      {
        description: 'B', // R$ 5000
        amount: 1,
      },
      {
        description: 'C', // R$ 30
        amount: 3,
      },
    ],
  };
  const response: any = await axios.post(
    'http://localhost:3000/checkout',
    input
  );
  expect(response.data.value).toBe(6090);
});
