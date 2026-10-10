/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
  // Code here
}
*/




//solution
function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a, b) => a - b);

    return numbers[0] + numbers[1];
}

/*
 let use [19, 5, 42, 2, 77]. numbers.sort((a, b) => a - b)
1- Sort the array	[2, 5, 19, 42, 77]
2- Get numbers[0]	2
3- Get numbers[1]	5
4- Add both numbers	2 + 5 = 7
5- Return the answer	7
*/