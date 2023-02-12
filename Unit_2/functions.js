/* 
    ? Function
    - block of code that performs a particular task
    - simplified programs that run a task when invoked
    - Two Main Types:
        - Declaration
        - Expression
    - Functions must be called/invoked to run!
    
    * Function Declaration

    Structure:
        1    2     3
    function hi(parameter) {
        ... code block
    }

    1. Keyword ("function")
    2. Name of the function
    3. Parenthesis for the parameter
    ! Gets hoisted
 */

function hi() {
    console.log("Hi there!");
}

// * Invocation
hi();

/* 
    * Function Expression

    Structure:
        1
    let hey = function hi() {
        code block...
    }

    1. The variable "hey" is now representative of the function hi()
    ! Does NOT get hoisted
 */

let hello = function hey() {
    // console.log("Hey");
    return "Hey!";
}

hello(); // Expression variable name is required to run function
// hey(); will not run

console.log(hello()); // Runs the function and prints the return
console.log(hello); // returns "[Function: hey]"" - tells us what hello stands for, instead of running the function

// * Challenge: Create a function that, when invoked, lists out the numbers 1-10.
function numbers () {
    for (a = 1; a <= 10; a++) {
        console.log(a);
    }
}

numbers();

// * Challenge: Create an array and function to list out array values
let words = ["This", "can", "be", "really", "cool"];

function printArray() {
//    for (i = 0; i < words.length; i++) {
//        console.log(words[i]); // prints each item from array "words" on separate lines
//    }
    console.log("Testing join method: ", words.join(" ")); // adds a space between items on same line
}

printArray(); 

// * Parameters
/* 
    Structure:
                        1
    function fncName(parameter) {
                            2
        console.log(`Hi, ${parameter}`);
    }
                3
    fncName("Ben");
    1. The parameter(s) that the function is accepting or holding.
    2. Using string interpolation, we can refer to the parameter given to the function.
    3. This is where we define what the parameter's value will be.
*/

function greet(title) {
    console.log(`Hey there, ${title}!`);
}

greet("Bob"); // title = "Bob" ; returns "Hey there, Bob!"
greet("Tim"); // title = "Tim" ; returns "Hey there, Tim!"
greet("Joann"); // title = "Joann" ; returns "Hey there, Joann!"
greet(`${words}`); // returns "Hey there, This,can,be,really,cool!"
greet(`${words[2]}`); // returns "Hey there, be!"

// Two parameter function
let totalSpent = 0;

function order(foodItem, total) {
    console.log(`I exchanged ${total} dollars for a ${foodItem}.`);
    totalSpent += total;
    return totalSpent;
}

/* 
    invoke function with # of required arguments
    order(argument, argument);
    otherwise, JS will print "undefined" in the missing argument's place
*/
order("pizza", 10);
order("soda", 2);
order("fries", 5);
order("burger", 12);

console.log("I spent $" + totalSpent + " altogether.");

/* 
    * Return

    Structure:
    let hi = function() {
            1
        return "hi";
    };
            2       3
    let greeting = hi();
    console.log(greeting);

    1. keyword: return - brings our data out of our function.
    2. New variable to hold the returned value.
    3. When called, the function becomes the value of the return.
*/

function fName() {
    return "Steve";

}
let myName = fName();
console.log(myName);

let volume = function (l, w, h) {
    let total = l * w * h;
    return total;
}

let exOne = volume(3, 5, 2);
let exTwo = volume(7, 3, 5);

console.log(`Ex One: ${exOne} \nEx Two: ${exTwo}`); // "\n" calls for a new line - must be BACKSLASH!

function coffeeMaker(filter) {
    return `A full pot of ${filter}!`
}

let mon = coffeeMaker("black coffee");
let wed = coffeeMaker("tea");
let sun = coffeeMaker("soup");

console.log(mon, "\n" + wed, "\n" + sun)

/* 
    * Arrow Functions

    Structure:
    1           2
    let hi = () => {
        console.log('hi');
    }

    1. We need to set the arrow function to a variable.
    2. We use the "fat arrow" (=>) to signify that it's a function.

    - Introduced in ES6. They are basically just a more concise way to write functional expressions - NOT declarations.
    ! Do NOT get hoisted!

    Two different styles:
        - Concise Body: no {}
        - Block Body: uses {}
*/

// Concise Body
let goodbye = () => console.log("Goodbye, friend!");
goodbye();

let total2 = () => 2 + 5;
console.log(total2());

// Block Body
let apples = (qty) => {
    return `There are ${qty} apple(s).`
}

let appleCount = apples(4);
console.log(appleCount);
console.log(apples(7));

// Same example as above but in Concise Body
let apples2 = (qty) => `There are ${qty} apple(s).`

console.log(apples2(5));
console.log(apples2(totalSpent)); // parameter variable from elsewhere in code works also

// * Multiple Parameters
let calc = (x, y) => x + y;
console.log(calc(3, 15));

let calc2 = (x, y) => {
    return x + y;
}
console.log(calc2(5, 6));

/*
    * IIFE

    - Immediately Invoked Function Expression
    - Helps allocating space in memory for anonymous functions
    - fires our function as soon as it is read.
*/

(function () {
    console.log("IIFE fired");
  })();