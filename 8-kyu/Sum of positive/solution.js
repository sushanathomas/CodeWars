//Problem: You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  
}

//Solution: 
function positiveSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }

  return sum;
}

// Create a variable to store our total. 
// let sum = 0; 

//Loop through the array
// for (let i = 0; i < arr.length; i++)

//Check whether the number is positive
// if (arr[i] > 0); 

//Adding the positive number
// sum += arr[1]; 