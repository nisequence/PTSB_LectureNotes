/* 
    ? Object Destructuring
    - Allows us to unpack values from an object into distinct variables.
    - Similar syntax as object literals, but the curly braces {} are on the left side of the assignment operator (=)
*/

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: "animated",
    seasons: {
        "season one": [
        {
            episode_title: "Simpson Roasting on an Open Fire",
            aired: "1989-12-17",
        },
        {
            episode_title: "Bart the Genius",
            aired: "1990-01-01",
        },
        ["1989-12-17", "1990-01-14"],
        ],
        "season two": [
        /* .... */
        ],
        "season three": [
        /* .... */
        ],
    },
    currently_running: true,
};
theSimpsons.characters = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];

// Examples of destructuring:
const { characters, seasons } = theSimpsons; // names within the brackets {} must be exact names of the keys to pull from
console.log("Destructuring Characters: ", characters);
console.log("Destructuring Seasons: ", seasons);
// const { kiwi } = theSimpsons; // would return undefined (so would a value that was undefined)

characters.push("Meo"); // Typo
characters[5] = "Moe";
console.log(characters[characters.length - 1]); // way to grab last in the characters object

// Can rename the key variables via a colon
const{ est: established, currently_running: on_air } = theSimpsons;
console.log(established);
console.log(on_air);

console.log("Doesn't change original keys:", Object.keys(theSimpsons));
console.log("Does change callable keys:", established);

/* 
    ? Spread Operator with Objects
    ... (literally, just the three dots!)

*/

const simpsonCharacters = {
    simpsonsHouse: ["Homer", "Marge", "Bart", "Lisa", "Maggie"],
    moesTavern: ["Moe", "Barney"]
};

// Using the spread operator (...) to combine multiple objects into one
const generalLocations = {
    park: "statue",
    beach: "dock",
    lake: "3-eyed fish"
};

const locations = {
    ...simpsonCharacters,
    dmv: ["Patty", "Selma"],
    ...generalLocations
}

locations.beach = ["dock", "fisherman"];
console.log(locations); // changed
console.log(generalLocations); // unchanged