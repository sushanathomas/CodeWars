/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)
"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"

Notes:
If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a,b) {
  
}
*/


/*
USING PREP to solve: 
 Parameter - (a, b) / and the data type is a string, if you look at the examples "4", "5" --> "9". 

 Return - The return is asking ud to display the outputs the sum (as a string)

 Example - Using of the the example, sumStr("2", ""). What would this return?  an empty string means "" 0. So if "2", "0" = "2". 

 Psudeocode - Convert both inputs into numbers (treating empty empty strings as zero), add them, and convert the result back into a string. 

 - we need to convert number to strings. So, 
 // let numA = Number(a); 
 // Let numB - Number(b); 
 // create a variable that returns the total that stores the sum of NumA and numB
 // let total = numA + numB. 
 //JS has a built-in function called String(), which return the total in string. 
 // return String(total)

....write it all out. 
*/

//The function: 
function sumStr(a, b) {
     let numA = Number(a); 
     let numB = Number(b); 

     let total = numA + numB; 

    return String(total); 
}

//Another answer to the questions is: 

//function sumStr(a, b) {
//    return String(Number(a)+Number(b)); 
//}