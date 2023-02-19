// ? Array Methods, awesome ways to do things with or to arrays

let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Hotdog"];

for(item of food) {
    console.log(item);
}

// * .push() Method - adds item to the end of an array
food.push("Pizza", "More Pie"); // adds both to the food array
console.log("Push method: ", food); // Push method:  [ 'Pecan Pie', 'Shrimp', 'Quesadilla', 'Hotdog', 'Pizza', 'More Pie' ]
console.log(food[4]); // Pizza

// * .splice Method - changes the content of an array by removing existing elements and/or adding new elements
// splice(index of where to place, how many to remove, what to replace with/add)
food.splice(1, 1, "Tacos");
console.log("Splice method: ", food);

food.splice(1, 0, "Steak");
console.log("Splice method 2: ", food);

// * .pop() Method - removes a value from the end of the array
food.pop();
console.log("Pop method: ", food);

// * .shift() Method - removes the first value of an array (value in first [0] position)
food.shift();
console.log("Shift method: ", food);

// * .unshift() Method - adds to the front of an array, can include multiple items
food.unshift("cake", "sushi");
console.log("Unshift method: ", food);

// * .length Property (not method) - measures length of the array
console.log(food.length); // 7

// * .toString() Method - returns a string representation of the array
let rgb = ["red", "green", "blue"];
console.log("ToString Method: ", rgb.toString());

// ? Iteration Methods
/* 
    * .filter() & .includes()
    - does not destroy the original array
    - we typically store the filter array in a new variable
    - takes a callback function that returns either true or false
        - a callback function is another function that we invoke within our main function
    - loops through array
    - MUST have a return
*/

let fruit = ["kumquat", "banana", "peach", "kiwi", "papaya", "mango"]

// Use filter to remove peach

let filteredFruit = fruit.filter(fruit => {
    let remainingFruit = fruit !== "peach";
    console.log(`Remaining fruit: ${remainingFruit}`);
    return remainingFruit;
})

console.log(filteredFruit);

// .includes(), analyze any fruit with "P"
let otherFruit = "Pineapple";
console.log("Includes method: ", fruit.includes("P")); // false
console.log("Includes method 2: ", otherFruit.includes("P")); // true
console.log("Includes method 3: ", otherFruit.includes("apple")); // true

// .filter with .includes , remove any fruit with "P"
const filterFruit2 = fruit.filter((item) => !item.includes("p"));
console.log(filterFruit2);

// set the filtered array to variable, filter will run eatMango function per item in array
const filteredFruitFunctionEx = fruit.filter(eatMango);

// returns true if not mango, false if mango
function eatMango(fruit) {
    return fruit != "mango";
}

// printing to see final filtered array
console.log("Filter with function ex: ", filteredFruitFunctionEx);
// console.log(eatMango("Baseball")); // demo function - "true"
console.log(eatMango("mango"));

// -------------------------------------------------------------

//? .forEach()
/* 
    * .forEach() Method - helps us iterate over an array performing a function once per element in the array
    Runs 3 arguments:
        - The value
        - The index
        - the array object itself
    It is not executed for empty elements and does not change the original array.
*/

let newFoodList = ["apple", "pear", "mushrooms", "cheese", "spaghetti"];

for (let i = 0; i < newFoodList.length; i++) {
    console.log(newFoodList[i]);
};

// arrow function with concise body
newFoodList.forEach((item) => console.log("ForEach Method: ", item));

// arrow function with block body
newFoodList.forEach((item, i) => {
    console.log("For Each with Index: ", item, i);
});

// declarative function
newFoodList.forEach(function (item) {
    console.log("Declaration sample: ", item);
});

// Build a function to console.log item

function displayFoodItem(foodThing) {
    console.log("Function outside of forEach: " + foodThing);
}
// function call
displayFoodItem("potato");

// Pass our forEach the function
newFoodList.forEach(displayFoodItem); // does not require smooth parens "()"

/* 
    * .map() Method -
    - Creates a new array from calling a function for every array element
    - Calls the function once per element in an array
    - Does not execute the function for empty elements
    - Does not change the original array
*/

// Populated by for loop
let numArray = [];
// Populate by using .map on numArray
let fizzBuzzArray = [];

for (let k = 0; k < 25; k++) {
    numArray.push(k)
}

// Checking if numArray was populated
console.log("NumArray:", numArray);

// Simple example first
numArray.map((x) => fizzBuzzArray.push(x + 5));

// If % 3 print fizz, if % by 5 print buzz, if % by 3 & 5 print # (push to fizzBuzzArray)
numArray.map((x) => {
    // Use a conditional to check division
    if (x % 15 === 0) {
        fizzBuzzArray.push(x);
    } else if (x % 3 === 0) {
        fizzBuzzArray.push("Fizz");
    } else if (x % 5 === 0) {
        fizzBuzzArray.push("Buzz");
    } // else should go here
});

// Check if fizzBuzzArray populated
console.log(`FizzBuzzArray: ${fizzBuzzArray}`);

// ? ---------------map vs forEach example----------------

let mainArray = [1, 2, 3, 4];

// .forEach does NOT return anything, performs an action on each item, does not return a value
let forEachEx = mainArray.forEach((i) => i);
console.log("ForEach Ex: ", forEachEx);

// .map returns a new array, perform action & creates/returns new value
let mapEx = mainArray.map((i) => i + 3);
console.log("Map Ex: ", mapEx);

let secondMap = mapEx.map((i) => i + 5);
console.log("SecondMap Ex: ", secondMap);
console.log(mainArray);

// --------------------------------------------------------------------------
/* 
    * .find() Method
    - Executes a function for each array element and returns the value of the first element that passes a test.
    - Returns undefined if no elements are found.
    - Does not execute the function for empty elements.
    - Does not change the original array.
*/

let tmnt = ["Mikey", "Donnie", "Leo", "Raph", "Splinter", "Shredder", "Baxter"];

let character = "Leo";

console.log(
    "Find Ex 1: ",
    tmnt.find((c) => c === character)
);

character = "Splinter"; // find will return true for splinter versus the value splinter because we checked all items via including the index
console.log("Find Ex 2: ",);
tmnt.find((c, i) => console.log("Character: ", c === character, "Index: ", i));