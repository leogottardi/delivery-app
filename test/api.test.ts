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
    items: [
      {
        description: 'Guitarra', // R$ 1000
        quantity: 1,
      },
      {
        description: 'Amplificador', // R$ 5000
        quantity: 1,
      },
      {
        description: 'Cabo', // R$ 30
        quantity: 3,
      },
    ],
  };
  const response: any = await axios.post(
    'http://localhost:3000/checkout',
    input
  );
  expect(response.data.total).toBe(6090);
});
