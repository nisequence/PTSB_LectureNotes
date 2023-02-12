/* 
? Scope: determines the accessibility (visibility) of variables/functions to JavaScript
    JS's 3 types of Scope:
    - Block Scope
        -Defined by curly brackets { } to group elements or statements, block scope is also provided by let and const, ex. "code block"
    - Function Scope
        - each function creates a new scope: variables inside functions are not accessible outside the function, also known as "Local Scope"
    - Global Scope
        - variable declared outside a function is Global: all scripts and functions can access the variable
*/ 

// Global variable
let globalVariable = true;
console.log("Outside of function: " + globalVariable);

function checkGlobalVariable() {
    console.log("Inside of function: " + globalVariable);
}

checkGlobalVariable();

// Global variable declared
let x = 12;

function scope() {
    // Local variable declared
    let x = 33;
    console.log(x);
}

scope(); // 33
console.log(x); // 12

// Example of Local Variable Being Redefined Locally, Instead of Re-declared
let y = 13;

function newScope() {
    // Local variable
    y = 1200;
    console.log(`In the newScope function: ${y}`);
    let z = 45;
    console.log(`In the newScope function: ${z}`);
}

newScope(); // 1200
console.log("Outside of the newScope function: " + y); // 1200 (was redefined in function, not re-declared)
// console.log(z); - gives an error as z does not exist globally