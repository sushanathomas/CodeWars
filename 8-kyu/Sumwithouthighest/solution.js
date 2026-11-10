/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.
```
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

```
If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


function sumArray(array) {

}
*/

function sumArray(array) {
    if (!array || array.length < 2) {
        return 0;
    }

    let sortedArray = [...array].sort((a, b) => a - b);

    let middleNumbers = sortedArray.slice(1, -1);

    let total = 0;

    for (let i = 0; i < middleNumbers.length; i++) {
        total = total + middleNumbers[i];
    }

    return total;
}

/*
    PREP: 
Parameters: 'array'. - which has a list of numbers 

Return(s): want to return the sum of the array(a number), or if it comes back null, empty or single digit, return 0. 

Example: 
[6, 2, 1, 8, 10] //outputs 16
[1, 1, 11, 2, 3 ] //outputs 6
[] // outputs 0
[5] // outputs 0
null // outputs 0

Psuedocode: 
1. Create a function that accepts an array.

2. Check if the array is missing or has fewer than
   two elements. If so, return 0.

3. Sort a copy of the array from smallest to largest.

4. Remove the first and last elements using slice.

5. Create a variable called total and set it to 0.

6. Loop through the remaining numbers.

7. Add each number to total.

8. Return total.
*/ 