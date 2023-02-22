/* 
    ? Array Destructuring
    - Allows us to unpack values from arrays into distinct variables.
    - Similar syntax to array literals, but the square brackets [] are on the left side of the assignment operator (=)
    - Great way to pull info from the array and assign to its own variable
*/

// W/O Destructuring
const fullName = ['Kate', 'Lockhart'];
const firstName = fullName[0];
const lastName = fullName[1];
console.log(firstName, lastName); // space
console.log(firstName + lastName); // no space

// W/ Destructuring
const surname = ['Kate', 'Lockhart'];
let [firstName2, lastName2] = surname;
console.log(firstName2);
console.log(lastName2);
console.log(firstName2, lastName2);

/* 
    ? Spread Operator (...)
    - The spread operator basically pulls out the elements of an array as a standalone list of elements
    - Denoted by three consecutive periods, ex: "...arrayName"
*/

const myName = ["Kate", "Lockhart"];
console.log(myName); // [ 'Kate', 'Lockhart' ]
const copiedName = [...myName]; // The spread operator inserts the elements from fullName
console.log("Copied w/ spread operator:", copiedName); // Copied w/ spread operator: [ 'Kate', 'Lockhart' ]

const anotherCopy = [myName];
console.log('Copied w/o spread operator:', anotherCopy); // Copied w/o spread operator: [ [ 'Kate', 'Lockhart' ] ] ~ an array nested in an array
console.log(anotherCopy[0]); // [ 'Kate', 'Lockhart' ]
console.log(anotherCopy[0][1]); // Lockhart - not fun to grab values using this method!!

// An example with numbers:
let numberArray = [];

for (i = 0; i <= 20; i++) {
    numberArray.push(i);
};
console.log(numberArray);

const newNumberArray = [...numberArray];
console.log(newNumberArray);

// Back to editing myName
myName.unshift("Miss"); // unshift adds to beginning
console.log("My Name:", myName); // changes
console.log("Copied Name: ", copiedName); // does not change (copy was already printed so further changes must be made to this variable as well if you want them to match)

// *Math.min Method - Returns the smaller of a set of supplied numeric expressions.
console.log(Math.min(1, 5, 13, -3)); // returns smallest value, in this case, -3

const prices = [10.99, 5.99, 20, 3.99];
console.log(Math.min(prices)); // NaN ~ Math.min does not work on an array because it is not a number
console.log(Math.min(...prices)); // 3.99 ~ spread operator was able to unpack the numerical values from the array to process with Math.min

// * Ex changing the original and copied array

const persons = [
    {
    name: "Jane",
    age: 28,
    },
    {
    name: "John",
    age: 35,
    },
];

// Old way of copying persons:
const copiedPersons = persons.map((person) => ({
    name: person.name,
    age: person.age
}))

const copiedPersons2 = [...persons];

console.log("Copied Persons Array:", copiedPersons);
console.log("Copied Persons Array 2:", copiedPersons2);

// Test using push on persons array, does copiedPersons change
persons.push({name: "Anna", age: 29});

console.log("Persons Array: ", persons);
/* 
Persons Array:  [
    { name: 'Jane', age: 28 },
    { name: 'John', age: 35 },
    { name: 'Anna', age: 29 }
]
*/

console.log("Copied Persons Array:", copiedPersons2); // Copied Persons Array: "[ { name: 'Jane', age: 28 }, { name: 'John', age: 35 } ]"" // (no Anna)

// * Variables within Memory
// First assignment/original assignment
let x = 10;
let y = "abc";
let z = null;

// Reassign to another variable
let a = x;
console.log(a); // 10
let b = y;
console.log(b); // "abc"

// Reassign a and b
a = 5;
b = "def";
console.log (x, y, a, b); // 20, abc, 5, def

// --------------------

let arr = [];
arr.push(1);
console.log(`arr: ${arr}`);

let reference = [1];
let refCopy = reference;
console.log("refCopy:", refCopy); // prints brackets
console.log(`refCopy in backticks: ${refCopy}`); // no brackets

reference.push(2); // both reference and refCopy will have the 2 added
console.log(reference, refCopy); // [ 1, 2 ] [ 1, 2 ]

// ! JS References both reference and refCopy in a heap as the same thing
refCopy.push(3);
console.log(reference, refCopy); // anticipated [ 1, 2 ] [ 1, 2, 3 ]
// received [ 1, 2, 3 ] [ 1, 2, 3 ]

// -----------------------------------
/* 
    ? Rest Syntax

    We can use the spread operator syntax, referred to as 'rest' syntax when working with array destructuring, to package up the REST of the values in the referenced array, and return them as their own array.

    - Looks exactly like spread syntax: ...
    - Spread "expands" an array
    - Rest "condenses" an array
*/

const fullNameAgain = [
    "Jane",
    "Doe",
    "Mrs.",
    {
        month: 03,
        date: 22,
        year: 1973,
    },
    2,
    "test",
    "4",
    true,
    false,
];

let janesName = fullNameAgain[0];
console.log(janesName); // Jane

// Using both array destructuring and rest:
let [newFirstName, newLastName, , ...otherInfo] = fullNameAgain;
console.log(`newFirstName: ${newFirstName}`);
console.log(`newLastName: ${newLastName}`);
console.log(`otherInfo: ${otherInfo}`); // [object Object],2,test,4,true,false
console.log(otherInfo); // [ { month: 3, date: 22, year: 1973 }, 2, 'test', '4', true, false ]