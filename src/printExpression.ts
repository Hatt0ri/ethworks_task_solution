import { ITerm } from './interfaces';

const printExpression = (sequence: ITerm[]): string => {
    if (sequence === null) {
        return '';
    }
    const outputStringArray: string[] = [];
    fillOutputArray(sequence, outputStringArray);

    const printResult = outputStringArray.join(' + ').replace(/\+ -/g, '- ');
    return printResult === '' ? '0' : printResult;
}

const getX = (term: ITerm) => {
    if (term[1] === 0) {
        return '';
    } else if (term[1] === 1) {
        return 'x';
    }
    return 'x^';
}

const fillOutputArray = (sequence: ITerm[], outputStringArray: string[]) => {
    sequence.forEach((term) => {
        const coefficient = term[0];
        const exponent = term[1];
        if (coefficient !== 0) {
            const xStr = getX(term);
            const exponentStr = xStr ? exponent !== 1 ? exponent : '' : '';
            if (coefficient === 1) {
                const coeStr = !xStr ? coefficient : '';
                outputStringArray.push(coeStr + xStr + exponentStr);
            } else if (coefficient === -1) {
                const coeStr = exponent === 0 ? '' + coefficient : '-';
                outputStringArray.push(coeStr + xStr + exponentStr);
            } else {
                outputStringArray.push(coefficient + xStr + exponentStr);
            }
        }
    });
}

export default printExpression;
