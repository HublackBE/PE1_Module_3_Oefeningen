import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);


const num1 = parseFloat(await userInput.question('Nummer 1: '));
const num2 = parseFloat(await userInput.question('Nummer 2: '));
let biggestDivisor = 1;

for(let i = 1; (num1 / i) >= 1 && (num2 / i) >= 1; i++) {
    if(num1 % i === 0 && num2 % i === 0){
        biggestDivisor = i;
    }
}

console.log('Grootste gemene deler van', num1, 'en', num2, 'is', biggestDivisor);


process.exit();