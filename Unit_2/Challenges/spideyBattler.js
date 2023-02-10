/* 
    Let's build something cool!
    We will make a Spider Man battle program that randomly pits Spidey vs a foe.

    - Set Spidey's HP
    - Create a villain array of villain objects for Spidey to battle
    - Make something to randomly pick a villain
    - Use a do while loop to monitor if the villain's HP is above 0
    - In the while loop make attacks the effect HP of both Spidey and the Villain
        - Add some console.logs to give us messages throughout the battle
    - Create an ending message with a conditional on who won the battle
*/

let spideyHP = 20;
let badGuys = [
    {
        baddie: "Green Goblin",
        hp: 15
    },
    {
        baddie: "Venom",
        hp: 25
    },
    {
        baddie: "Stilt-Man",
        hp: 5
    },
    {
        baddie: "Thug",
        hp: 0
    },
];

// console.log(badGuys.length); would grab the array length

let random = Math.floor(Math.random() * badGuys.length); // creates a random number not greater than array length
// console.log(random); just to test this works!

// Grab random villain from array
let villain = badGuys[random];
console.log(villain);

// Message on who appeared
console.log(`${villain.baddie} has appeared and is up to no good!`);

do {
    // Take out the thug asap
    if (villain.baddie == "Thug") {
        console.log('Spider-Man webs the thug...');
        break;
    }

    // Message & attack from villain
    console.log(`${villain.baddie} hits Spider-Man!`);
    spideyHP--; // villain attacking for 1 hp

    // Log Spidey's current health
    console.log('Spider-Man HP: ', spideyHP);

    // If statement, should SpideyHP = 0
    if (spideyHP === 0) {
        console.log("Oh no, looks like Spidey's been knocked out!");
        break;
    }

    // Make random spidey attack
    spideyHit = Math.floor(Math.random * 3);
    console.log(`Spider-Man hits ${villain.baddie} for ${spideyHit} damage!!!!`);

    // Villain HP math & message
    villain.hp -= spideyHit;
    console.log("Villain HP: ", villain.hp);

} while (villain.hp > 0);

// Conditionally print a win or loss
if (villain.hp <= 0) {
    console.log(`Spider-Man has saved the day and captured ${villain.baddie}!`)
} else {
    console.log(`${villain.baddie} has taken down Spider-Man... who will save us now?!`)
}