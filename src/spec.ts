import { sumSequences } from './sumSequences';
import { expect } from 'chai';

describe('Tests for sumSequences()', () => {
  describe('Wrong input', () => {
    it('should return null for empty sequences', () => {
      const sum = sumSequences([], []);
      expect(sum).to.equal(null);
    });
  });

  describe('One filled input sequence', () => {
    it('should return "2x^2 + 6x + 7"', () => {
      const sum = sumSequences([[2, 2], [6, 1], [7, 0]], []);
      expect(sum).to.equal('2x^2 + 6x + 7');
    });
  });

  describe('Example from task', () => {
    it('should return "3x^3 + 3x^2 + 3"', () => {
      const sum = sumSequences([[2, 2], [3, 0]], [[3, 3], [1, 2]]);
      expect(sum).to.equal('3x^3 + 3x^2 + 3');
    });
  });

  describe('Minus sign character', () => {
    it('should return "3x^3 + 3x^2 - 3"', () => {
      const sum = sumSequences([[2, 2], [-3, 0]], [[3, 3], [1, 2]]);
      expect(sum).to.equal('3x^3 + 3x^2 - 3');
    });

    it('should return "100x^100 - x^2 - 3"', () => {
      const sum = sumSequences([[86, 100], [-1, 2]], [[14, 100], [-3, 0]]);
      expect(sum).to.equal('100x^100 - x^2 - 3');
    });

    it('should return "x^9 - x^2 - 3 + 14x^-5"', () => {
      const sum = sumSequences([[1, 9], [-1, 2]], [[14, -5], [-3, 0]]);
      expect(sum).to.equal('x^9 - x^2 - 3 + 14x^-5');
    });

    describe('Minus without a space in a first term', () => {
      it('should return "-72x^10 - x^2 - 3"', () => {
        const sum = sumSequences([[-86, 10], [-1, 2]], [[14, 10], [-3, 0]]);
        expect(sum).to.equal('-72x^10 - x^2 - 3');
      });
    });
  });

  describe('Sorts descending based on an exponent value', () => {
    it('should return "x^10 + x^5.5 + x^2 + 1 + x^-2 + x^-10"', () => {
      const sum = sumSequences([[1, -10], [1, -2], [1, 0]], [[1, 2], [1, 10], [1, 5.5]]);
      expect(sum).to.equal('x^10 + x^5.5 + x^2 + 1 + x^-2 + x^-10');
    });
  });

  describe('Reduces x^0', () => {
    it('should return "x^10 + 1"', () => {
      const sum = sumSequences([[1, 10]], [[1, 0]]);
      expect(sum).to.equal('x^10 + 1');
    });
  });

  describe('Reduces x^1', () => {
    it('should return "x^10 + x"', () => {
      const sum = sumSequences([[1, 10]], [[1, 1]]);
      expect(sum).to.equal('x^10 + x');
    });
  });

  describe('Reduces 1 before x', () => {
    it('should return "x^20 + x^10 + x"', () => {
      const sum = sumSequences([[1, 10]], [[1, 1], [1,20]]);
      expect(sum).to.equal('x^20 + x^10 + x');
    });
  });

  describe('Doesn\'t print 0, when are other terms', () => {
    it('should return "x^2"', () => {
      const sum = sumSequences([[10, 0]], [[-10, 0], [1, 2]]);
      expect(sum).to.equal('x^2');
    });
  });

  describe('When all terms reduces, prints 0', () => {
    it('should return "0"', () => {
      const sum = sumSequences([[10, 1], [10, 2], [10, 3]], [[-10, 1], [-10, 2], [-10, 3]]);
      expect(sum).to.equal('0');
    });
  });
});
