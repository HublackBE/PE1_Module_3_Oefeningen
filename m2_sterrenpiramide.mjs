import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);


let height = parseFloat(await userInput.question('Geef een hoogte in: '));

for(let i = 1; i <= height; i++){
    console.log('*'.repeat(i));
}


process.exit();