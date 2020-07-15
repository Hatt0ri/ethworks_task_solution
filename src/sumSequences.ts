import { ITerm, IHashMap } from './interfaces';
import { get } from 'lodash';

const sumSequences = (firstSequence: ITerm[], secondSequence: ITerm[]): ITerm[]|null => {
    if (isInputInvalid(firstSequence, secondSequence)) {
        return null;
    }

    const hashMap: IHashMap = {};
    sumTerms(firstSequence, secondSequence, hashMap);

    const orderedTermKeys: string[] = Object.keys(hashMap)
        .sort((a, b) => parseFloat(b) - parseFloat(a));
    const result: ITerm[] = [];
    orderedTermKeys.forEach((key) => {
        result.push([hashMap[key], parseFloat(key)]);
    });
    return result;
};

const isInputInvalid = (firstSequence: ITerm[], secondSequence: ITerm[]) => {
    return get(firstSequence, 'length', 0) === 0 && get(secondSequence, 'length', 0) === 0;
};

const sumTerms = (firstSequence: ITerm[], secondSequence: ITerm[], hashMap: IHashMap) => {
    firstSequence.forEach((term) => {
        hashMap[term[1]] = term[0];
    });
    secondSequence.forEach((term) => {
        if (typeof hashMap[term[1]] === 'undefined') {
            hashMap[term[1]] = term[0];
        } else {
            const coefficient = hashMap[term[1]];
            hashMap[term[1]] = coefficient + term[0];
        }
    });
}

export default sumSequences;
