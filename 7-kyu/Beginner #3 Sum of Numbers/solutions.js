//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//Note: a and b are not ordered!

//Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.


//Solvng the problem: 
//lets use getSum(-2, 2). We need to find all the intergers(numbers) in between -2, and 2. Once we do, we add them together. Which are -2, -1, 0, 1, 2. When we add then all together, we get a return of 0. 
//The we're going to declare a new variable. 
//let total = 0; 



//Solutions
function getSum(a, b)
{
let total = 0; 

const start = Math.min(a, b); 
const end = Math.max(a, b); 

for (let i = start; i <= end; i++) {
    total += i;  
}
    return total; 
}
