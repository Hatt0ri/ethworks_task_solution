import { IInputTerm, IHashMap, ITerm } from './interfaces';
import { get } from 'lodash';

export const sumSequences = (firstSequence: IInputTerm[], secondSequence: IInputTerm[]): string => {
    if (isInputInvalid(firstSequence, secondSequence)) {
        return null;
    }

    const hashMap: IHashMap = {};
    parseInput(firstSequence, secondSequence, hashMap);
    const orderedTermKeys: string[] = Object.keys(hashMap).sort().reverse();

    const outputStringArray: string[] = [];
    fillOutputArray(orderedTermKeys, hashMap, outputStringArray);

    return outputStringArray.join(' + ');
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

const getX = (hashMap: IHashMap, key: string) => {
    if (hashMap[key].exponent === 0) {
        return '';
    }
    return 'x^';
}

function fillOutputArray(orderedTermKeys: string[], hashMap: IHashMap, outputStringArray: string[]) {
    orderedTermKeys.forEach((key) => {
        const coefficient = hashMap[key].coefficient;
        if (coefficient !== 0) {
            const xLetter = getX(hashMap, key);
            if (coefficient === 1) {
                outputStringArray.push(xLetter + hashMap[key].exponent);
            }
            else {
                const exponent = xLetter ? hashMap[key].exponent : '';
                outputStringArray.push(coefficient + xLetter + exponent);
            }
        }
    });
}

