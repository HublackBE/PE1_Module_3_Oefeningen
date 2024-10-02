import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);

let numInput;
let sum = 0;

do{
    numInput = parseFloat(await userInput.question('Geef een nummer in: '));
    sum += numInput;
}while(numInput > 0);

// corrects sum if negative number
sum -= numInput;

console.log(sum);


process.exit();