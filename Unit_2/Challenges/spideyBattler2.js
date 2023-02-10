/* 
    ? spideyBattler2 Changes!
    - Spidey can now hit up to 5!
    - Villains now have a specific hit power.
    - Fixed bug in which Spidey would never die if skipping HP = 0.

*/
let spideyHP = 20;
let badGuys = [
    {
        baddie: "Green Goblin",
        hp: 15,
        hit: 1.5,
    },
    {
        baddie: "Venom",
        hp: 25,
        hit: 2.5
    },
    {
        baddie: "Stilt-Man",
        hp: 5,
        hit: 1
    },
    {
        baddie: "Thug",
        hp: 0,
        hit: 0
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
    spideyHP -= villain.hit; // villain attacking (personalized hit)

    // Log Spidey's current health
    console.log('Spider-Man HP: ', spideyHP);

    // If statement, should SpideyHP = 0
    if (spideyHP <= 0) {
        console.log("Oh no, looks like Spidey's been knocked out!");
        break;
    }

    // Make random spidey attack
    let spideyHit = Math.floor(Math.random() * 5);
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