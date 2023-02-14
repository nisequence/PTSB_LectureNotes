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

/* 
    ? Var vs. Let
    Variable keywords:
        - const: cannot be reassigned
        - var: scoped to nearest function block
        - let: scoped to the nearest enclosing block
*/

// * Var example - scoped to function block, variable declared inside {} can be accessed from outside the block

var a = 12;

function varTest() {
    var a = 33;
    console.log(`Var - within function, before if: ${a}`) // 33

    if (true) {
        var a = 45;
        console.log(`Var - within if: ${a}`); // 45
    }
    console.log(`Var - outside if, inside function: ${a}`); // 45 (bleeds through)
}
varTest();
console.log(`Var - outside function/globally: ${a}`); // 12

// * Let Example - scoped to enclosing block, variable declared inside of a { } block cannot be accessed outside the block.

let b = 12;

function letTest() {
    let b = 100; 
    console.log(`Let - start of function: ${b}`); // 100
    if (true) {
        let b = 50;
        console.log(`Let - within if: ${b}`); // 50
    }
    console.log(`Let - end of function ${b}`); // 100
}
letTest();
console.log(`Let - outside of function/globally ${b}`); // 12

/* 
    ? Hoisting: JS's default behavior of moving declarations to the top of the current scope (to the top of the current script/function/file)
        - JS reads from top to bottom in two passes, line by line
            - 1st pass:
                - made by the compiler
                - this is where hoisting is initiated
                - compiled for execution
            - 2nd pass:
                - variables are assigned
                - execution phase
                - runs any hoisted code
        * - JS only hoists declarations ("let a"), not initializations ("a = 10" or "let a = 10")
        - to avoid bugs, always declare all variables at the beginning of every scope
            - top of the file if global
            - top of the function/loop/etc. if local
*/
// ! console.log(`Before: ${personName}`); - ReferenceError: Cannot access 'personName' before initialization
let personName = "Nicole"; // JS hoists existence of "personName", not what it means
console.log(`After: ${personName}`); // works now - AFTER initialization (meaning) is provided

b(); // works even though function comes after, because it has been hoisted

function b() {
    console.log("I'm hoisted");
}

// ! newFunc(); does NOT work as above because it is an arrow function (not hoisted)

let newFunc = () => {
    console.log("Hoisted?");
}