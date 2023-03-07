const isValidCpfLength = (value: string) =>
  value.length >= 11 || value.length <= 14;

const formatCpf = (value: string) =>
  value.replaceAll('.', '').replace('-', '').replace(' ', '');

const isSameDigit = (value: string) =>
  value.split('').every((c) => c === value[0]);

const calculateDigit = (digit: number) => {
  const rest = digit % 11;
  return rest < 2 ? 0 : 11 - rest;
};

export function isValidCpf(cpf: string) {
  if (!isValidCpfLength(cpf)) return false;
  const formatedCpf = formatCpf(cpf);
  if (isSameDigit(formatedCpf)) return false;
  try {
    let digito1 = 0;
    let digito2 = 0;
    for (let i = 1; i < formatedCpf.length - 1; i++) {
      const digito = parseInt(formatedCpf.substring(i - 1, i));
      digito1 += (11 - i) * digito;
      digito2 += (12 - i) * digito;
    }
    const dg1 = calculateDigit(digito1);
    digito2 += 2 * dg1;
    const dg2 = calculateDigit(digito2);
    return formatedCpf.endsWith(`${dg1}${dg2}`);
  } catch (e) {
    console.error('Erro !' + e);
    return false;
  }
}
