//Grade book
//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade
// Numerical Score	Letter Grade
//90 <= score <= 100	'A'
//80 <= score < 90	'B'
//70 <= score < 80	'C'
//60 <= score < 70	'D'
//0 <= score < 60	'F'
//Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
  // Code here
}

//1. we need to calculate the average of the three grades. 
//2. Determine which letter grade corresponds to that average. 
//3. get the average by


//Solutions
//const average = ((s1 + s2 + s3) / 3)

function getGrade (s1, s2, s3) {
  // Code here
  //declaring our new variable for the average. 
const average = (s1 + s2 + s3) / 3; 

//If/Else statement to complete the logic

if (average >= 90) {
    return 'A';
} else if (average >= 80) {
    return 'B';
} else if (average >= 70) {
    return 'C';
} else if (average >= 60) {
    return 'D'
} else return 'F'
}


//https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
