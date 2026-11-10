/* 
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  // Go for it
}
*/


function reverseWords(str) {
  return str
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}

/*
PREP: Reverse Words (7kyu)

P - Parameters:
We are given a string (str) containing one or more words.
The string may contain spaces between words.

R - Returns:
Return a new string where each word is reversed,
but the order of the words stays the same.
All spaces should remain in their original positions.

E - Examples:
reverseWords("Hello World") // "olleH dlroW"
reverseWords("I love JavaScript") // "I evol tpircSavaJ"
reverseWords("This is a test") // "sihT si a tset"
reverseWords("double  spaces") // "elbuod  secaps"

P - Pseudocode:
1. Take the string passed into the function.
2. Split the string into an array of words using spaces.
3. Loop through each word using map().
4. Split each word into individual characters.
5. Reverse the characters using reverse().
6. Join the reversed characters back into words.
7. Join all the words back into a sentence with spaces.
8. Return the final reversed sentence.
*/

