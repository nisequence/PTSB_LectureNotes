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