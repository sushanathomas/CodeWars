//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!

//The function takes a name as its only argument, and returns one of the following strings:

//name + " plays banjo"
//name + " does not play banjo"
//Names given are always valid strings.

//if/else statement to write to solve this answer
//if (name[0] === "R" || name[0] === "r"), return "names with r's plays banjo". else, return name doesn't play banjo.

      //problem
/*function areYouPlayingBanjo(name) {
  // Implement me
  return name;
}*/

//solutions
function areYouPlayingBanjo(name) {
  if (name[0] === "R" || name[0] === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}
