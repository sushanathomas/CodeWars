function oddOrEven(array) {
   //enter code here
  //console.log(array)

  const result = array.reduce((acc, cv) => acc + cv, 0)
 if (result % 2 === 0) {
   return "even"; 
 }  else { 
 return "odd"}
   
}
//PREP: 
//Parameters will be taking on array of numbers
//return if it's odd or even. 
//Example: 
//Need an array that can give me the sum of an array
