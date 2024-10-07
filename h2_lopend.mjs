import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);

let numInput = 0;
let i = 1;
let average = 0;

for(let sum = 0; sum / i <= 25; sum += numInput){
    numInput = parseFloat(await userInput.question('Num: '));
    average = (sum + numInput) / i;
    console.log(average);
    i++;
}

console.log(average, 'is groter dan 25.');

process.exit();