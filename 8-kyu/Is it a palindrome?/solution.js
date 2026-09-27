/*
Write a function that checks if a given string (case insensitive) is a palindrome.
A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

function isPalindrome(x) {
  // your code here
}
*/
function isPalindrome(x) {
    let word = x.toLowerCase();
    let letters = word.split('');
    let reversedLetters = letters.reverse();
    let reversedWord = reversedLetters.join('');
    return word === reversedWord;
}

/*
Step 1: Convert the string to lowercase. This makes our comparison case-insensitive. Example: "Racecar" becomes "racecar".
Step 2: Split the string into an array of letters. Example: "madam" becomes ["m", "a", "d", "a", "m"].
Step 3: Reverse the order of the letters. Example: ["c", "a", "t"] becomes ["t", "a", "c"].
Step 4: Join the letters back into a string. Example: ["m", "a", "d", "a", "m"] becomes "madam".
Step 5: Compare the original word with the reversed word.
    // === checks whether both strings are exactly equal. Returns true if they match and false if they don't.
*/