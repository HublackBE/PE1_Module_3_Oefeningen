import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);


let max = parseFloat(await userInput.question('Max: '));
let fib = [0, 1];

for(let i = 0; fib[i] <= max; i++) {
    fib.push(fib[i] + fib[i+1]);
    console.log(fib[i]);
}


process.exit();