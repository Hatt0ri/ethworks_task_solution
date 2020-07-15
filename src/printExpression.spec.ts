import printExpression  from './printExpression'
import { expect } from 'chai';
import { ITerm } from './interfaces';

describe('Tests for printExpression()', () => {
  describe('Wrong input', () => {
    it('should return "" for null', () => {
      const seq: ITerm[] = null;
      expect(printExpression(seq)).to.equal('');
    });

    it('should return 0 for empty sequence', () => {
      const seq: ITerm[] = [];
      expect(printExpression(seq)).to.equal('0');
    });
  });

  describe('Example from task', () => {
    it('should return "3x^3 + 3x^2 + 3"', () => {
      const seq: ITerm[] = [[3, 3], [3, 2], [3, 0]];
      expect(printExpression(seq)).to.equal('3x^3 + 3x^2 + 3');
    });
  });

  describe('Minus sign character', () => {
    it('should return "3x^3 + 3x^2 - 3"', () => {
      const seq: ITerm[] = [[3, 3], [3, 2], [-3, 0]];
      expect(printExpression(seq)).to.equal('3x^3 + 3x^2 - 3');
    });

    it('should return "100x^100 - x^2 - 3"', () => {
      const seq: ITerm[] = [[100, 100], [-1, 2], [-3, 0]];
      expect(printExpression(seq)).to.equal('100x^100 - x^2 - 3');
    });

    it('should return "x^9 - x^2 - 3 + 14x^-5"', () => {
      const seq: ITerm[] = [[1, 9], [-1, 2], [-3, 0], [14, -5]];
      expect(printExpression(seq)).to.equal('x^9 - x^2 - 3 + 14x^-5');
    });

    describe('Minus without a space in a first term', () => {
      it('should return "-72x^10 - x^2 - 3"', () => {
        const seq: ITerm[] = [[-72, 10], [-1, 2], [-3, 0]];
        expect(printExpression(seq)).to.equal('-72x^10 - x^2 - 3');
      });
    });
  });

  describe('Reduces x^0', () => {
    it('should return "x^10 + 1"', () => {
      const seq: ITerm[] = [[1, 10], [1, 0]];
      expect(printExpression(seq)).to.equal('x^10 + 1');
    });
  });

  describe('Reduces x^1', () => {
    it('should return "x^10 + x"', () => {
      const seq: ITerm[] = [[1, 10], [1, 1]];
      expect(printExpression(seq)).to.equal('x^10 + x');
    });
  });

  describe('Reduces 1 before x', () => {
    it('should return "x^20 + x^10 + x"', () => {
      const seq: ITerm[] = [[1, 20], [1, 10], [1, 1]];
      expect(printExpression(seq)).to.equal('x^20 + x^10 + x');
    });
  });
});
