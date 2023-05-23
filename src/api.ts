import mysql from 'mysql';
import express, { Request, Response } from 'express';
import { CpfValidator } from './cpf-validator';
const app = express();
app.use(express.json());

app.post('/checkout', (req: Request, res: Response) => {
  if (!CpfValidator.validate(req.body.cpf)) {
    res.json({ message: 'Invalid cpf' });
  }
  res.end();
});

app.listen(3000, () => console.log('Server running on port 3000'));
