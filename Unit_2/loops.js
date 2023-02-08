// ? Loops
/* 
    Loops loop through a block of code a number of times.

    If stuck in an accidental infinitely running loop:
        ctrl+c within the terminal or red stop button from extension in upper right-hand corner

    * "For Loops":
        Takes in 3 parameters (within smooth parenthesis, "(" and ")")
            - initial expression
            - condition
            - increment expression
    Structure of a Loop:
    for (initial expression ; condition ; increment expression) {
        ...code block of logic to run
    }
*/

for (i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("Finished with loop");

for (i = 0; i <= 20; i += 2) {
    console.log(i);
}

//Challenge: using a for loop, count from 10 to 0, going down by 1
for (n = 10; n > -1; n--) {
    console.log(n);
}

for (i = 10; i > 0; i--) console.log(i); // if using a straight return, don't have to use {}

let firstName = "Nicole";

for (let i = 0; i < firstName.length; i++) {
    console.log(i, firstName[i]); // grabs each letter of "firstName" string and sides it by each count of "i"
}

let sum = 0;

for (let i = 1; i <= 50; i++) {
    console.log(sum);
    sum += i;
    console.log(sum);
}

console.log("Sum: " + sum);

// * "For In Loops": loops through the properties of an object
/* 
    Structure:
    for (key in object) {
        ...code to run
    }

    ("key" is a random variable name of our choice, "object" is the name of the object we are targeting)
*/

let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
};

console.log(student["name"]); // pulls out the value of "name" from the object "student" (Peter)

for (item in student) {
    console.log(item); // printed each key in the object
    console.log(student[item]); // prints each value of each key
}

// Variable name for key can be whatever we want, still runs
// for (pizza in student) {
//      console.log(pizza);
//      console.log(student[pizza]);
//  }

let catArray = [
    "tabby",
    "british shorthair",
    "burmese",
    "maine coon",
    "rag doll",
];

/* 
    ! For in can be used on objects and arrays, but if array index order is important it's better to use a for loop, for of loop, or Array.forEach() method.
*/

for (cat in catArray) {
    console.log(cat); // arrays don't have keys, so values are given numerical values starting at 0
    console.log(catArray[cat]); // lists each value within "catArray"
}

// * "For Of Loops" loop through the values of an iterable object
/* 
    iterable, an object that has iterable properties (think "reiterate")

    Structure:
    for (variable of iterable) {
        ...code to execute/run
    }

    ^variable is any word we choose to use, iterable is the name of any iterable "thing"

    Can loop over Arrays, Strings, etc.
*/

/* for (item of student) {
    console.log(item);
}                          ***Will not work! "student" is an object and therefore not iterable
*/

for (cat of catArray) {
    console.log("FOR OF LOOP: ", cat);
}

for (bubbles of catArray) {
    if (bubbles === "maine coon") {
        console.log(`My favorite cat is the ${bubbles}!!!`)
    } else {
        console.log("Not a maine coon... :( ");
    }
}