/* 
    A comment block in JS:
    Windows: alt + shift + a
    Mac: option + shift + a
*/

/* 
    ? *Variables:
        - How we give the app/program/computer data(a thing we want the computer to know)
        - A declaration that stores data/data values

    Variables are declared with JS keywords:
        - "var" , old and not often used(prone to mistakes)
        - "let" , can reassign the variable's value
        - "const" , cannot reassign the value to this variable

    Undeclared/no-keyword: works but don't do it!!!
*/

let a = 100;
let streetAddress = "123 Main Street";

//1     2     3     4     5
let     v     =     1     ;

/* 
    1. JavaScript Keyword to denote the creation of a variable
    2. Name of the variable
        - Developers refer to and use the variable name to grab the data stored
        - Try to keep variable names pertaining to the data (if you can)
    3. Assignment operator (fancy tech/math term for the equal sign)
    4. The initial value or data value
    5. Semi-colon for good formatting practice
*/

// Variable Declaration
let x;
let y;

// Variable Initialization
let z = 10; // Anything on the right side of the = (been given a value)
const n = 5;

// Assigning to Other Variables
let first = "Nicole";
let last = "Sekol";

let fullName = first + " " + last;

console.log(fullName);

// When Console says, "Module not found" it means it can't find what you're looking for. Check for spelling errors.
// Must save before Console is able to run code!

console.log('Declaration: ', x ); // Declaration: undefined

x = 13; // Assigned our variable x for the first time
console.log('Initialization 1: ', x);

x = 42; // Reassigned a new value to x
console.log('Initialization 2: ', x); // JavaScript reads top to bottom

let hi = "hello";
console.log("Both variables: ", x, hi);
console.log(hi + ", " + fullName);

// "let" vs "const" in action
// const is "new" is ES6: declare variables meant to remain unchanged

let today = 'Great!';
const JavaScript = "Awesome!";
console.log(today, JavaScript);

today = 'Loverly!';
// typing "JavaScript = 'Super!';" will give an error message (TypeError), as "JavaScript" is a const
console.log(today, JavaScript);

console.warn("This is your first warning!"); // does not display differently than logs in VSC, but shows yellow in browser

let warning = "Uh oh, we've been warned...";
console.warn("Warning: ", warning);

let err = "This looks real bad and scary...";
console.error("Error: ", err);

let error = "Ope!";
console.log(error);