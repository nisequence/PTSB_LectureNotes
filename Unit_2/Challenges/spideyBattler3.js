/* 
    ? spideyBattler3 Changes!
    - commented out line of code in which baddies were logged with all info before fight
    - created random hit points for villains
    - increased overall HP except for Thug

*/
let spideyHP = 100;
let badGuys = [
    {
        baddie: "Green Goblin",
        hp: 75,
    },
    {
        baddie: "Venom",
        hp: 125,
    },
    {
        baddie: "Stilt-Man",
        hp: 25,
    },
    {
        baddie: "Thug",
        hp: 0,
    },
];
// console.log(badGuys.length); would grab the array length

let random = Math.floor(Math.random() * badGuys.length); // creates a random number not greater than array length
// console.log(random); just to test this works!

// Grab random villain from array
let villain = badGuys[random];
// console.log(villain); just to test this works!

// Message on who appeared
console.log(`${villain.baddie} has appeared and is up to no good!`);
let villainHitLimit = villain.hp * 0.25;

do {
    // Take out the thug asap
    if (villain.baddie == "Thug") {
        console.log('Spider-Man webs the thug...');
        break;
    }

    // Calculate attack from villain
    let villainHit = Math.floor(Math.random() * villainHitLimit);
    // console.log(villainHit); testing to make sure it works
    
    // Message & attack from villain
    console.log(`${villain.baddie} hits Spider-Man for ${villainHit} damage!`);
    spideyHP -= villainHit; // villain attacking (personalized hit)

    // Log Spidey's current health
    console.log('Spider-Man HP: ', spideyHP);

    // If statement, should SpideyHP = 0
    if (spideyHP <= 0) {
        console.log("Oh no, looks like Spidey's been knocked out!");
        break;
    }

    // break line
    console.log("--------");

    // Make random spidey attack
    let spideyHit = Math.floor(Math.random() * 25);
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