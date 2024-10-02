let fizzBuzz = '';

for(let i = 2; i < 100; i++){
    if(i % 3 !== 0 || i % 5 !== 0){
        fizzBuzz = '';
    }
    if(i % 3 === 0){
        fizzBuzz += 'Fizz';
    }
    if(i % 5 === 0){
        fizzBuzz += 'Buzz';
    }
    console.log(i, fizzBuzz);
}


process.exit();