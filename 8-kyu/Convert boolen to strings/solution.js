/* Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  //...
}
*/

function boolToWord(bool) {
    if (bool === true) {
        return "Yes";
    } else {
        return "No";
    }
}

/*
tests cases: 
boolToWord(true);  // "Yes"
boolToWord(false); // "No"

Since false is not equal to true, JavaScript skips the if block and executes the else block.
You're practicing conditional statements, which are an important part of JavaScript! 
Now you've worked through three Codewars challenges:
*/