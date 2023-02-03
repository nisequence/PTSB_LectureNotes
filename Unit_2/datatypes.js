/* 
    *JavaScript Data Types
    JavaScript is considered "dynamically typed"; data types exist, but our variables are not bound to any of them (we have to assign them ourselves).
*/
console.log("***Types of Data:");

// Booleans: a true or false data value
let on = true;
let off = false;
console.log(on, off);

// Null: is a value of "nothing", or something that doesn't exist. Intentional absence of any object value
const empty = null;
console.log(empty);

// Undefined: a variable w/o a value; gets both a value and type of undefined
let x;
let undef = undefined;
console.log(x, undef);

// Numbers: values are stored as decimal numbers; can be written with or w/o decimals;
let degrees = 90;
console.log(degrees);

let precise = 999999999999999; // 15 9s
console.log(precise);

let rounded = 9999999999999999; // 16 9s
console.log(rounded); // JS gives us space for 15 9s before it rounds up.

// let this Example = 0.2 + 0.1;
// console.log(thisExamples);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

// String: a series of characters written using single or double quotes.
let stringOne = "Double quotes";
let stringTwo = 'Single quotes';
console.log(stringOne, stringTwo);

let myFriend = 'And she said, "Blah, blah, blah"!';
let me = "Did you say, 'Blah blah?'";
console.log(myFriend, me);

// let test = "Thing thing: "that thing"";
// let test2 = 'Single 'another single'';
// Neither will work - use the opposite style quote for a quote within a quote, or JS will not be able to read it!

// Numbers vs. Strings
let first = 1234 + 567; // causes JS to perform arithmetic: console prints "1801"
let second = '1234' + '567'; // just a string: console prints "1234567"

console.log(first);
console.log(second);

// typeof operator defines what data type each variable is
const defineType = "***Define Types:";
console.log(defineType);
console.log(typeof x, typeof undef);
console.log(typeof off);
console.log(typeof first);
console.log(typeof second);

let createNum = Number("123");
let nonNumber = Number('abc');
console.log(createNum, typeof createNum); // console prints: "123 number"
console.log(nonNumber); // console prints: "NaN" (not a number)

let sum = "1" + 3;
console.log(sum); // console prints: "13"
// type coercion: when we take one data type and it becomes another

let anotherOne = 100 + "a hundred";
console.log(anotherOne, typeof anotherOne);

// Objects: can contain many values and value types. These values are stored in properties (pairs of keys/names and values).

//    1     2
let frodo = {
//   3  4    5
    race: "hobbit",
    rings: 1,
    cloak: true,
}
/* 
    1. Variable name of the object.
    2. Objects are denoted with curly braces {}, inside the brackets are the objects properties.
    3. The key or name of the property.
    4. Key/value pairs are separated with a colon ":"
    5. Every key needs a value to apply to the property.
 */
console.log(frodo); // The console will provide curly brackets along with its keys & values as shown below.
// "{ race: 'hobbit', rings: 1, cloak: true }"

// Arrays:
//    1   2       3
let list= ["item1", "item2", "item3"];
/* 
    1. Name of the Array, or list.
    2. The array is inside of these square brackets.
    3. Each item, regardless of datatype, is separated by commas.
    Denoted by []
*/

let burritos = ["large", 27, true];
console.log(burritos, typeof burritos); // output: "[ 'large', 27, true ] object"

console.log("Method used to check for arrays: ", Array.isArray(burritos));
console.log("frodo object: ", Array.isArray(frodo));

// *Literals
// string literal ex.
let car = "Toyota";
let truck = car; // not a literal

// Numeric literal
let dec = 25;

// Boolean
let tired = true;

// Object
let soup = {
    a: "chicken noodle",
    b: "tomato",
    c: "beef and barley",
};

// Array
let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

console.log(days); // creates an array
console.log(days.toString()); // creates a string
console.log(days.length); // enumerates the data provided (7)
