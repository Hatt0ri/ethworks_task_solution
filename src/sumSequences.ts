import { IInputTerm, IHashMap } from './interfaces';
import { get } from 'lodash';

export const sumSequences = (firstSequence: IInputTerm[], secondSequence: IInputTerm[]): string => {
    if (isInputInvalid(firstSequence, secondSequence)) {
        return null;
    }

    const hashMap: IHashMap = {};
    parseInput(firstSequence, secondSequence, hashMap);


    return null;
};

const isInputInvalid = (firstSequence: IInputTerm[], secondSequence: IInputTerm[]) => {
    return get(firstSequence, 'length', 0) === 0 || get(secondSequence, 'length', 0) === 0;
};

const parseInput = (firstSequence: IInputTerm[], secondSequence: IInputTerm[], hashMap: IHashMap) => {
    firstSequence.forEach((term) => {
        hashMap[term[1]] = { coefficient: term[0], exponent: term[1] };
    });
    secondSequence.forEach((term) => {
        if (typeof hashMap[term[1]] === 'undefined') {
        hashMap[term[1]] = { coefficient: term[0], exponent: term[1] };
        } else {
            const coefficient = hashMap[term[1]].coefficient;
            hashMap[term[1]] = { ...hashMap[term[1]], coefficient: coefficient + term[0] };
        }
    });
};

