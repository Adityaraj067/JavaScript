// Faulty Calculator in JavaScript
// This calculator gives wrong results 10% of the time.

let random = Math.random(); // generates a number between 0 and 1
let a = prompt("Enter first number");
let c = prompt("Enter the operation to perform: +, -, *, /");
let b = prompt("Enter second number");

// Convert input to numbers
a = Number(a);
b = Number(b);

// Faulty operation mapping
let obj = {
    "+": "-",
    "-": "+",
    "*": "/",
    "/": "**"
};

// Perform calculation
if (random < 0.1) {
    // 10% chance: correct operation
    let result = eval(`${a} ${c} ${b}`);
    console.log(`Correct result: ${result}`);
    alert(`Correct result: ${result}`);
} else {
    // 90% chance: wrong operation
    c = obj[c]; // get the wrong operation
    let result = eval(`${a} ${c} ${b}`);
    console.log(`Faulty result: ${result}`);
    alert(`Faulty result: ${result}`);
}
