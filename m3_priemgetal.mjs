import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);


let numInput = parseFloat(await userInput.question('Geef een nummer in: '));
let prime = true
let i;

for(i = 2; i < numInput; i++){
    if(numInput % i === 0){
        prime = false;
        break;  // stops the loop to prevent unnecessary iterations
    }
}

if(numInput === 1){
    console.log(numInput, 'is geen priemgetal want', 1, 'is een uitzondering.');
}else if(prime){
    console.log(numInput, 'is een priemgetal.');
}else{
    console.log(numInput, 'is geen priemgetal, want het is deelbaar door', i);
}


process.exit();