import { isValidCpf } from '../src/cpf-validator';

describe('CpfValidator', () => {
  const invalidCpfs = [
    '00000000000',
    '111.111.111-11',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
  ];
  it.each(invalidCpfs)('deve retornar false para CPFs inválidos: %s', (cpf) => {
    expect(isValidCpf(cpf)).toBeFalsy();
  });

  const validCpfs = [
    '673.959.764-28',
    '21822515700',
    '67725855424',
    '247.139.761-13',
  ];

  it.each(validCpfs)(
    'deve retornar true para CPFs válidos: %s',
    (cpf: string) => {
      expect(isValidCpf(cpf)).toBeTruthy();
    }
  );
});
