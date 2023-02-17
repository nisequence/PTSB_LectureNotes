/* 
    ? Unit 3: Data Structures
    - How we organize our data
    - Utilize arrays and objects and use functions to interact with them

    ? Array
    - Denoted with square brackets [ ]
    - Indices start at zero
        * indices do not reflect the length
    - Using a property "length", we can find the sum total (how many) of data stored
*/

// Indices    0        1        2           3
let list = ["milk", "bread", "chicken", "butter"];

console.log(list[2]); // returns "chicken"

console.log(list.length); // 4, number of items in array (1 higher than highest index)

console.log(list[list.length]); // list[4] is undefined

// If needing to find highest index, subtract 1 from the length
console.log(list[list.length - 1]); // returns "butter"

list[0] = "chocolate milk"; // reassign first index value

console.log(list); // [ 'chocolate milk', 'bread', 'chicken', 'butter' ]

// Example 2:

// Indices        0     1   2       3       4         ------ 5 -----        6
let avengers = ["Nick", 5, true, "Steve", "Bruce", ["Tony", true, 100], "Natasha"];
// would typically be laid out vertically

console.log(typeof avengers); // object

// We can use "instanceof" to check if an array returns a true or false value
console.log(avengers instanceof Array); // true

console.log(avengers[5]); // [ 'Tony', true, 100]
console.log(avengers[5][0]); // longs first index of 5, which is "Tony" in this case

/* 
    Try building out and console.logging its values later!
*/