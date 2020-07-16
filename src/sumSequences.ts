import { ITerm, IHashMap } from './interfaces';
import { get } from 'lodash';

const sumSequences = (firstSequence: ITerm[], secondSequence: ITerm[], sortDesc: boolean = false): ITerm[] | null => {
    if (isInputInvalid(firstSequence, secondSequence)) {
        return null;
    }

    const hashMap: IHashMap = {};
    sumTerms(firstSequence, secondSequence, hashMap);

    const orderedTermKeys: string[] = Object.keys(hashMap).filter((key) => hashMap[key] !== 0);

    if (sortDesc) { orderedTermKeys.sort((a, b) => parseFloat(b) - parseFloat(a)); }
    const result: ITerm[] = [];
    for (const key of orderedTermKeys) {
        result.push([hashMap[key], parseFloat(key)]);
    }
    return result;
};

const isInputInvalid = (firstSequence: ITerm[], secondSequence: ITerm[]) => {
    return get(firstSequence, 'length', 0) === 0 && get(secondSequence, 'length', 0) === 0;
};

const sumTerms = (firstSequence: ITerm[], secondSequence: ITerm[], hashMap: IHashMap) => {
    for (const term of firstSequence) {
        hashMap[term[1]] = term[0];
    }
    for (const term of secondSequence) {
        if (typeof hashMap[term[1]] === 'undefined') {
            hashMap[term[1]] = term[0];
        } else {
            hashMap[term[1]] = hashMap[term[1]] + term[0];
        }
    }
}

export default sumSequences;
