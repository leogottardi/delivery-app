export class CpfValidator {
  static validate(cpf: string) {
    if (!cpf) return false;
    const formatCpf = this.removeSymbols(cpf);
    if (!this.isValidLength(cpf)) return false;
    if (this.allSameDigit(cpf)) return false;
    try {
      const digit1 = this.verifyDigit(formatCpf, 10);
      const digit2 = this.verifyDigit(formatCpf, 11);
      const receivedDigits = formatCpf.substring(
        formatCpf.length - 2,
        formatCpf.length
      );
      return receivedDigits === `${digit1}${digit2}`;
    } catch (e) {
      console.error('Erro !' + e);
      return false;
    }
  }

  private static allSameDigit(cpf: string) {
    return cpf.split('').every((c) => c === cpf[0]);
  }

  private static isValidLength(cpf: string) {
    return cpf.length != 11;
  }

  private static removeSymbols(cpf: string) {
    return cpf.replace(/\D/g, '');
  }

  private static verifyDigit(cpf: string, factor: number) {
    let total = 0;
    for (const digit of cpf) {
      if (factor > 1) total += parseInt(digit) * factor--;
    }
    return total % 11 < 2 ? 0 : 11 - (total % 11);
  }
}
