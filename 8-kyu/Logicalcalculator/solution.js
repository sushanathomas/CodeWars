/*
Your Task
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).

function logicalCalc(array, op){
  //your code here
}
*/

/* PREP:
Parameter: (array[], op)

Return: return a boolean result value (true or false)

Example: booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False

Psudocode: 
Create a variable called result and assign it the first value of the array.
Loop through the array starting at index 1.
Get the current Boolean value using the loop index.
If the operator is "AND", update result using &&.
Otherwise, if the operator is "OR", update result using ||.
Otherwise, if the operator is "XOR", update result using !==.
After the loop finishes, return result.
*/

function logicalCalc(array, op) {
    let result = array[0];

    for (let i = 1; i < array.length; i++) {
        const currentValue = array[i];

        if (op === "AND") {
            result = result && currentValue;
        } else if (op === "OR") {
            result = result || currentValue;
        } else if (op === "XOR") {
            result = result !== currentValue;
        }
    }

    return result; 
}