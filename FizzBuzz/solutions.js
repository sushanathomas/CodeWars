//Instruction
//Return an array containing the numbers from 1 to N, where N is the parametered value.
//Replace certain values however if any of the following conditions are met:
//If the value is a multiple of 3: use the value "Fizz" instead
//If the value is a multiple of 5: use the value "Buzz" instead
//If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
//N will never be less than 1.
//Method calling example:
//fizzbuzz(3) -->  [1, 2, "Fizz"]

//Problem 
function fizzbuzz(n) {
    //print code
}


//Solutions
//multiple of 3 = 'fizz'
//multiple of 5 = 'buzz'
//multiple of 3*5 = 'fizzbuzz'

// Return an array
function fizzbuzz(n) {
    let result = []; //creating an empty array with a new variable
    for (let i = 1; i <= n; i++) { //Create a for-loop so that it can iterate through the problem. 
        if (i % 3 === 0 && i % 5 === 0) { //If 3 & 5 which equals for 15, if it's === 0;
            result.push('FizzBuzz') //Return fizzbuzz
        } else if (i % 5 === 0) { // If it's an remainder of 5 === 0; 
            result.push('Buzz') //Return 'Buzz'
        } else if (i % 3 === 0) { //If it's an remainder of 3 === 0; 
            result.push('Fizz') //Return 'Fizz'
        } else { //Else, return i, which is a indication index=0
            result.push(i)
        }
    }
    return result;
}
console.log(fizzbuzz(15)); // 3*5 = 15; 3 and 5 is a remainder of 15. 