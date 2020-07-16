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
            expect(sum).to.have.deep.members([[3, 3], [3, 2], [3, 0]]);
        });
    });

    describe('Only one filled input sequence', () => {
        it('should return "[[2, 2], [6, 1], [7, 0]]"', () => {
            const sum = sumSequences([[2, 2], [6, 1], [7, 0]], []);
            expect(sum).to.have.deep.members([[2, 2], [6, 1], [7, 0]]);
        });

        it('should return "[[2, 2], [6, 1], [7, 0]]"', () => {
            const sum = sumSequences([], [[2, 2], [6, 1], [7, 0]]);
            expect(sum).to.have.deep.members([[2, 2], [6, 1], [7, 0]]);
        });
    });

    describe('Sorts descending based on an exponent value', () => {
        it('should return "[[1, 10], [1, 5.5], [1, 2], [1, 0], [1, -2], [1, -10]]"', () => {
            const sum = sumSequences([[1, -10], [1, -2], [1, 0]], [[1, 2], [1, 10], [1, 5.5]], true);
            expect(sum).to.eql([[1, 10], [1, 5.5], [1, 2], [1, 0], [1, -2], [1, -10]]);
        });

        it('should fail with different order"', () => {
            const sum = sumSequences([[1, -10], [1, -2], [1, 0]], [[1, 2], [1, 10], [1, 5.5]], true);
            expect(sum).to.not.eql([[1, 5.5], [1, 10], [1, 2], [1, 0], [1, -2], [1, -10]]);
        });
    });
    describe('Float point numbers', () => {
        it('should return "[[10.1, 2], [0.2, -1.6]]"', () => {
            const sum = sumSequences([[0.2, -1.6]], [[10.1, 2.0]]);
            expect(sum).to.have.deep.members([[10.1, 2], [0.2, -1.6]]);
        });
        it('should return "[[1.001, 2]]"', () => {
            const sum = sumSequences([[0.001, 2.000]], [[1, 2.0]]);
            expect(sum).to.have.deep.members([[1.001, 2]]);
        });
    });
});
