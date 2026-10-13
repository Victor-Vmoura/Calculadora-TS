export class Calculadora {
  soma(a: number, b: number): number {
    return a + b;
  }

  subtracao(a: number, b: number): number {
    return a - b;
  }

  multiplicacao(a: number, b: number): number {
    return a * b;
  }

  divisao(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
  }
}