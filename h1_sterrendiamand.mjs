import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);


let height = parseFloat(await userInput.question('Geef een hoogte in: '));
let i;
if(height % 2 === 0){
    i = 0;
}else{
    i = 1;
}

for(i; i < height; i += 2){
    console.log(' '.repeat((height - i) / 2) + '*'.repeat(i));
}

// TODO optimize this part
if(height % 2 === 0){
    console.log(' '.repeat((height - i) / 2) + '*'.repeat(i));
}

for(i; i > 0; i -= 2){
    console.log(' '.repeat((height - i) / 2) + '*'.repeat(i));
}


process.exit();