/*
Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
}
*/

function sumDigits(number) {
    let positiveNumber = Math.abs(number);
    let numberString = positiveNumber.toString();
    let digits = numberString.split('');

    let total = 0;

    for (let i = 0; i < digits.length; i++) {
        total += Number(digits[i]);
    }

    return total;
}

/* PREP
parameter: number 
return: we're returning the sum of the absolute number. Absolute meaning 
example: 
psuedocode: 
Remember our plan:
1. Make the number positive using Math.abs().
2. Convert it into a string using .toString().
3. Separate its digits using .split('').
4. Loop through the digits and add them.
5. Return the total.

Let's review the patterns you learned 🧠
Problem clue	JavaScript solution
"Absolute value"	Math.abs()
"Individual digits"	.toString() and .split('')
"Each digit"	for loop
"Convert to number"	Number()
"Sum"	total +=
"Return the result"	return total;
*/

