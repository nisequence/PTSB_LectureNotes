/* 
    ? "While Loops:" loop through a block of code WHILE a specific condition is true

    While Loop Structure:
    while (condition) {
        ...code to run/execute
    }

    - The main purpose for while loops are when the iteration is uncertain.
*/

let n = 1;

while (n < 10) {
    console.log(`n before addition: ${n}`);
    n++;
    console.log(`n after addition: ${n}`);
    console.log("-----");
}

let y = 1;

while(y < 5) {
    y++;
    console.log(y);
}

let message = "";
let z = 0;

while (z < 5) {
    message = "The number is " + z;
    z++;
    console.log(message);
}
console.log("A final count could go here!") // if you did not want a running total, log after "{}"

let city = [
    "building",
    "building",
    "light pole",
    "bridge",
    "building",
    "light pole",
    "tree",
    "light pole",
    "empty street",
];

let structure = city[0]; // starts as a 0 to guarantee where Spider-Man starts initially
console.log(structure);

let pos = 0; // "position;" this variable will change which # value is considered "structure"

while (structure != "empty street") {
    console.log(`Spider-Man swings from the ${structure}!`);
    pos++;
    structure = city[pos];
}
console.log(`Spider-Man lands in the ${structure}.`);

/* 
    ? "Do While Loop:" also loops through a block of code while a specified condition is true, BUT...
        ! loop will run the code block once BEFORE checking if the condition is true and will keep running as long as the condition stays true
    
    Do While Loop Structure:
    do {
        code to run/execute
    } while (expression or condition);

    - Works just like while loops, with the exception that it will run out code block at least once.
*/

let num = 5;

do {
    console.log(`The number is ${num}`);
    num++;
} while (num < 10);
console.log(num); // returns "10"

let result = '';
let i = 1;

do {
    i  += 2;
    result += `${i}`;
    console.log(`i is ${i} and being added to the string ${result}.`);
} while (i > 0 && i <= 5);

console.log(`Ending result: ${result}.`);

let value = 20

do {
    value *= 2;
    console.log(value);
} while (value > 100); // this is false, however the code above still operates once
console.log("Ends at " + value + "."); // returns "40"

do {
    value *= 2;
    console.log(value);
} while (value < 1000); // this is true, so the code will repeat until it no longer is true
console.log("Ends at " + value + ".");

// Mock switching accounts from deactivated to activated, use a boolean

let accounts = {
    acct1: false,
    acct2: false,
    acct3: false,
    acct4: false,
    acct5: false,
};

let acctNum = 1;

do {
    // Write a message to show inactive:
    console.log(`Sorry, acct${acctNum} is currently inactive: set to ${accounts[`acct${acctNum}`]}`
    );

    // Activating message and set account to true:
    console.log("Activating...");
    accounts[`acct${acctNum}`] = true;

    // Confirmation message:
    console.log(`acct${acctNum} is now active: account is set to ${accounts[`acct${acctNum}`]}`
    );

    // After account has been activated, add 1 to acct# to move on to the next account:
    acctNum++;
} while (accounts[`acct${acctNum}`] == false);

// Finish message
console.log('All accounts are now active.');