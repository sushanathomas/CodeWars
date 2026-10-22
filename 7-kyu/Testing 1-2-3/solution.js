/*Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]*/

//Using  arrays, loops and string concatenation to complete ths problem. 
//The job is to return a new array with string and numbers. 
//We want them to iterate through thr arry until it returns '3:c'. 

var number=function(array){
  
  let result = []; //delcare a variable for us to add the array into. 

  for (let i = 0; i < array.length; i++) {  //because we're using a for-loop it iterate through the array, and we need the length of the array. 
    result.push(array[i]) + 1; //To get the result, we use the push-method onto the end of each array. 
  }
  return result; 
}