import { describe, it, expect, beforeEach } from 'vitest';
import { Calculadora } from '../src/calculadora';

describe('Testes da classe Calculadora', () => {
  let calc: Calculadora;

  beforeEach(() => {
    calc = new Calculadora();
  });

  describe('Soma', () => {
    it('deve somar dois números positivos corretamente', () => {
      expect(calc.soma(2, 3)).toBe(5);
    });

    it('deve somar números negativos corretamente', () => {
      expect(calc.soma(-2, -3)).toBe(-5);
    });
  });

  describe('Subtração', () => {
    it('deve subtrair dois números corretamente', () => {
      expect(calc.subtracao(10, 4)).toBe(6);
    });

    it('deve resultar em número negativo quando o subtraendo for maior', () => {
      expect(calc.subtracao(4, 10)).toBe(-6);
    });
  });

  describe('Multiplicação', () => {
    it('deve multiplicar dois números corretamente', () => {
      expect(calc.multiplicacao(3, 4)).toBe(12);
    });

    it('deve retornar zero se um dos fatores for zero', () => {
      expect(calc.multiplicacao(5, 0)).toBe(0);
    });
  });

  describe('Divisão', () => {
    it('deve dividir dois números corretamente', () => {
      expect(calc.divisao(10, 2)).toBe(5);
    });

    it('deve lançar uma exceção ao tentar dividir por zero', () => {
      expect(() => calc.divisao(10, 0)).toThrow("Divisão por zero não é permitida.");
    });
  });
});