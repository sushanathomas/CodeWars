/* 
Description:
Split & Add
A sequence satisfies the recurrence relation
​   am+n = am + an + y * m * n
for all non-negative integers m, n, where y is a fixed non-negative integer.

Given: a1 = 1, regardless of the value of y

Write a function that returns the value of 
a1 = 1, regardless of the value of y. 

write a function that returns the value of ax for given x, y. 

Constraints
0 ≤ x ≤ 10^8
0 ≤ y ≤ 10^4


function solve(x, y) {
    // split and add
}
*/

function solve(x, y) {
    x = BigInt(x);
    y = BigInt(y);

    return x + (y * x * (x - 1n)) / 2n;
}

/*
PREP: 
- for the parameters:  we have two (x, y). 
- x is the position in the sequence whos value we want to calculate. For example we x=3, wew want a3. 
- y isa fixed non-negative intyerger used in the mathemathical formula. 
- We also need to return the value of (x, y) - Which we can use a numbere sequence representing the value at position x. 

- It wants us to write out a function that returns the value of ax, for given x,y. Which use return instead of console.log

*/