import { sumSequences } from './sumSequences';
import { expect } from 'chai';

describe('Tests of sumSequences()', () => {
  describe('#sumSequences()', () => {
    it('should return null for empty sequences', () => {
      const sum = sumSequences([],[]);
      expect(sum).to.equal(null);
    });
    it('should return "3x^3 + 3x^2 + 3"', () => {
      const sum = sumSequences([[2, 2], [3, 0]], [[3, 3], [1, 2]]);
      expect(sum).to.equal('3x^3 + 3x^2 + 3');
    });
  });
});
