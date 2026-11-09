/*
Create a function drop that accepts a list, and a non-negative integer n, and returns a copy of the list that skips the first n elements.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)


function drop(arr, n){
your magic code goes here
}
*/

function drop(arr, n) {
    return arr.slice(n)
}

/*
PREP: 

Parameter: (arr, n)

Return: returns a copy of the list that skips the firs n element: Array? 

Example: drop(["apple", "banana", "cherry", "mango"], 3);

Psuedocode: a. 
- Create a function called drop that accepts an array an n. 
- Use the slice method to skip the first n element (based off the example from the link)
- return an array with the rest of the elements. 
*/

//another example of solving it with the correct answer is...
function drop(arr, n) {
    const res = arr.slice(n)
    return res
}