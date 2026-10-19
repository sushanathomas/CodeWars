//Create a function with two arguments that will return an array of the first n multiples of x.
//Assume both the given number and the number of times to count will be positive numbers greater than 0.
//Return the results as an array or list ( depending on language ).
//Examples
//x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
//x = 2, n = 5  --> [2,4,6,8,10]
//problem to solve
function countBy(x, n) {
  let z = [];

  return z;
}




//We're using 3,5 to supplement the x,n. 
//So countBy(3,5). 
//USe a for loop to increments the problem. 
//solutions 
function countBy(x, n) {
  let z = [];

  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }

  return z;
}