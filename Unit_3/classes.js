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

console.log("------------------ Sunday 2/26/23 ----------------------")
/* 
? Class Methods
    - Generating/creating our own methods for use with our objects

*/

class DeptInventory {
    constructor(dept) {
        this.department = dept;
        this.items = []; // empty array - makes a default value for this key

    }

    //     1          2     
    addToInventory(newItem) {
    //   3          4 
        this.items.push(newItem);
        console.log("An item was added to the store!");
        console.table(this.items);

    }
}

//              <------ 5 --------------->
let dryGoods = new DeptInventory("Dry Goods");
let itemThree = new Item("canned corn", "canned", 0.79);

// 6
dryGoods.addToInventory(itemThree);
dryGoods.addToInventory(itemTwo);
dryGoods.addToInventory(itemOne);
console.log(dryGoods);

/* 
* Class Method Definitions
    1. Establishing a name for our method
    2. This particular method requires a parameter
    3. "This" keyword is referencing the "dryGoods" object (in this scenario) and adding to its array of items
    4. Using an array method ("push") to add to the "items" array that belongs to dryGoods
    5. Generating/creating a new dept object named "dryGoods"
    6. Using dot notation to target our method  within our dryGoods object and passing items to it
*/


//* Factory Methods

class Expense {
    // static keyword, create/build a new expense
    // ! static keywords are only reachable within the "Expense" class itself, not by children or global
    static addUpChargeForProfit(wholesale) {
        // calculate the wholesale charge and store in a variable
        let upCharge = wholesale + (wholesale*0.25)
        // return (so it is accessible) the new expense
        return new Expense(wholesale, upCharge);
    }

    // basic constructor of key value pairs
    constructor(w, u) {
        this.purchased_price = w;
        this.sell_at = u;
    }

    // addTax method
    addTax(x) {
        // set x value to percentage variable
        let percentage = x;
        // set the value of sell_at to variable
        let saleCost = this.sell_at;

        // write and set the taxed cost
        this.plus_sales_tax = ((saleCost * x) + saleCost).toFixed(2);
    }
}

let itemToSell = Expense.addUpChargeForProfit(1);
console.log(itemToSell);

let anotherItemToSell = Expense.addUpChargeForProfit(2);
console.log(anotherItemToSell);

/* 
* Class Inheritance
With each object we create, those methods are included to those specific objects - basically the "children" objects inherit from the "parent", class
*/  

// anotherItem has the "addTax" method due to class inheritance
anotherItemToSell.addTax(0.06);
console.log(anotherItemToSell);

// anotherItemToSell.addUpChargeForProfit(3);
// ! TypeError: anotherItemToSell.addUpChargeForProfit is not a function

// Note: that anything that is static will not be inherited into those new objects. For our itemToSell and anotherItem, we won't have access to the addUpchargeForProfit method.