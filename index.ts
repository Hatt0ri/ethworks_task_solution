import printExpression from './src/printExpression';
import sumSequences from './src/sumSequences';
import { ITerm } from './src/interfaces';

const main = () => {
    const repeats = 10000;
    const firstSequence: ITerm[] = [[2, 2], [3, 0]];
    const secondSequence: ITerm[] = [[3, 3], [1, 2]];

    // tslint:disable-next-line:no-console
    console.log('First expression: ' + printExpression(firstSequence));
    // tslint:disable-next-line:no-console
    console.log('Second expression: ' + printExpression(secondSequence));
    // tslint:disable-next-line:no-console
    console.log('Result: ' + printExpression(sumSequences(firstSequence, secondSequence)));
    // tslint:disable-next-line:no-console
    console.log('Test of sumSequences(), ' + repeats + ' repeats\nTimer starts');

    const startTimer = Date.now();
    for (let i = 0; i < repeats; i++) {
        sumSequences(firstSequence, secondSequence);
    }
    const stopTimer = Date.now();
    // tslint:disable-next-line:no-console
    console.log('Execution time: ' + (stopTimer - startTimer) + ' ms');
};

main();
