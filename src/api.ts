import express, { Request, Response } from 'express';
import { CpfValidator } from './cpf-validator';
import { createOrder } from './main';
const app = express();
app.use(express.json());

app.post('/checkout', async (req: Request, res: Response) => {
  if (!CpfValidator.validate(req.body.cpf))
    res.json({ message: 'Invalid cpf' });
  const response = await createOrder(req.body);
  console.log({ response });
  res.json(response);
});

app.listen(3000, () => console.log('Server running on port 3000'));
