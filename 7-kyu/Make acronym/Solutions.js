//code
function toAcronym(inp){
  // ...
}

//Solutions
function toAcronym(inp) {
  return inp
    .split(" ")
    .map(word => word[0].toUpperCase())
    .join("");
}

