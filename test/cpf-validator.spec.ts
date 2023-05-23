import { CpfValidator } from '../src/cpf-validator';

test('Deve validar que o CPF está correto', () => {
  const input = '144.189.017-36';
  const output = CpfValidator.validate(input);
  expect(output).toBeTruthy();
});

test('Deve retornar erro quando CPF for inválido', () => {
  const input = '144.189.017-35';
  const output = CpfValidator.validate(input);
  expect(output).toBeFalsy();
});
