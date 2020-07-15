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

    const result = outputStringArray.join(' + ').replace('+ -', '- ');
    return result === '' ? '0' : result;
};

const isInputInvalid = (firstSequence: IInputTerm[], secondSequence: IInputTerm[]) => {
    return get(firstSequence, 'length', 0) === 0 && get(secondSequence, 'length', 0) === 0;
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
    } else if (hashMap[key].exponent === 1) {
        return 'x';
    }
    return 'x^';
}

const fillOutputArray = (orderedTermKeys: string[], hashMap: IHashMap, outputStringArray: string[]) => {
    orderedTermKeys.forEach((key) => {
        const coefficient = hashMap[key].coefficient;
        const exponent = hashMap[key].exponent;
        if (coefficient !== 0) {
            const xLetter = getX(hashMap, key);
            const exponentStr = xLetter ? exponent !== 1 ? exponent : '' : '';
            if (coefficient === 1) {
                outputStringArray.push(xLetter + exponentStr);
            }
            else {
                outputStringArray.push(coefficient + xLetter + exponentStr);
            }
        }
    });
}

