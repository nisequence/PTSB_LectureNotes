/* 
    ? Classes

    - Introduced in 2015
    - A function that helps/allows us to create a specific object(s)
    - We use classes to define a category/set of objects (objects that have similar details but unique values to those details.)

    * Base Structure:
    class NameOfClass {
        constructor(parameter) {
            this.key = parameter
        }
        methodName() {
            .. code block to run
        }
    } // end of structure
*/

// Ex: Create an item class to define things sold in a store
// 1    2
class Item {
    //   3        <---- 4 ---->
    constructor(name, desc, price) {
        //5   6      7
        this.name = name;
        this.description = desc;
        this.price = price;
    }
}

/* 
    1. "Class" keyword - denotes (or tells JS) what "type" of function we are building
    2. Class name - note that class names are capitalized (Pascal Casing) to help determine what type of function we are referencing later in our code
    3. "Constructor" keyword
        - activated when we instantiate (create) a new object
        - builds what sort of keys and values will be associated with our new object
    4. Parameter(s) of our constructor object - establishes the values of our new object
    5. "This" keyword - refers to "this" specific object being created
    6. The name of a key to our new object (in ex., Item objects have the keys "name", "description", and "price")
    7. The value for those keys (referenced by the parameters)
*/

// Ex: Create a class called NewObject & instantiate an object off the class
class NewObject {
    constructor() {
        this.name;
        this.desc;
    }
}

let one = new NewObject();
console.log(one);
one.name = "sample";
one.desc = "sample description";
console.log(one);

// Instantiate/Create an object off of class Item w/ and w/o the values:

let itemZero = new Item();
console.log(itemZero); // returns an object with the Item keys that hold undefined values

let itemOne = new Item("beans", "canned", 0.99);
console.log(itemOne);
// Change thing in itemOne
itemOne.name = "spinach";
console.log(itemOne);

let itemTwo = itemOne;
itemTwo.name = "fish"; // only changes itemTwo, not itemOne
itemOne.price = 1; // changing itemOne price
console.log(itemTwo); // changes price when we changed itemOne

// let brokenItem = Item();
// console.log(brokenItem);
// ! ^ TypeError: Class constructor Item cannot be invoked without 'new'

/* 
    ? Factory Functions
    Using a function to handle the object creation
*/

let iType = "tomato soup";
let iDesc = "canned";
let iCost = 1.29;

// Build a function to process items
function processItem(itemName, desc, cost) {
    return new Item(itemName, desc, cost);
}

let useFunction = processItem(iType, iDesc, iCost);
console.log(useFunction);