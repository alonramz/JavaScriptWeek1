// VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) 
// and another number, and 
// then uses the functions created in the hard challenge to output the value in sentence form. 
// Example output: "3 + 4 = 7"

const userInput = prompt(`Enter a number`);
const userInput2 = prompt(`Enter an operator (either +, -, * or /)`);
const userInput3 = prompt(`Enter a number`);

// console.log(userInput);
let input = document.querySelector("#myInput");
let info = document.querySelector("#text")

function add(a, b) {
    return a + b ;
  }

console.log(add(userInput, userInput3));