import { expect } from 'chai';
import sumSequences from './sumSequences';

describe('Tests for sumSequences()', () => {
    describe('Wrong input', () => {
        it('should return null for empty sequences', () => {
            const sum = sumSequences([], []);
            expect(sum).to.equal(null);
        });
    });

    describe('Example from task', () => {
        it('should return "[[3, 3], [3, 2], [3, 0]]"', () => {
            const sum = sumSequences([[2, 2], [3, 0]], [[3, 3], [1, 2]]);
            expect(sum).to.eql([[3, 3], [3, 2], [3, 0]]);
        });
    });

    describe('Only one filled input sequence', () => {
        it('should return "[[2, 2], [6, 1], [7, 0]]"', () => {
            const sum = sumSequences([[2, 2], [6, 1], [7, 0]], []);
            expect(sum).to.eql([[2, 2], [6, 1], [7, 0]]);
        });

        it('should return "[[2, 2], [6, 1], [7, 0]]"', () => {
            const sum = sumSequences([], [[2, 2], [6, 1], [7, 0]]);
            expect(sum).to.eql([[2, 2], [6, 1], [7, 0]]);
        });
    });

    describe('Sorts descending based on an exponent value', () => {
        it('should return "[[1, 10], [1, 5.5], [1, 2], [1, 0], [1, -2], [1, -10]]"', () => {
            const sum = sumSequences([[1, -10], [1, -2], [1, 0]], [[1, 2], [1, 10], [1, 5.5]]);
            expect(sum).to.eql([[1, 10], [1, 5.5], [1, 2], [1, 0], [1, -2], [1, -10]]);
        });

        it('should fail with different order"', () => {
            const sum = sumSequences([[1, -10], [1, -2], [1, 0]], [[1, 2], [1, 10], [1, 5.5]]);
            expect(sum).to.not.eql([[1, 5.5], [1, 10], [1, 2], [1, 0], [1, -2], [1, -10]]);
        });
    });
});
