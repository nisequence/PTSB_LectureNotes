// ? Objects

let marvelHero = {
    // property: key value pair
    fullName: "Peter Parker",
    heroName: "Spider-Man",
    age: 25,
    active: true
};

/* 
? Object Literals
    When our values are written within our keys. "Hard Coded"

    * Structure:
        keyword objectName = {
            key: value
        } // (key/value pairs are separated by commas)
        let ourObj = {
            firstKey: "string"
        } // strings need either single or double quotes

    Objects are dictionaries... (not technically, but they are in JS)
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

// * Dot Notation vs. Square Brackets (pulling info from objects)
console.log(theSimpsons.genre); // animated
console.log(theSimpsons[`est`]); // 1989

// Multi word key: must use square brackets (JS can't read spaces)
console.log(theSimpsons.seasons["season one"]);

theSimpsons.characters = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];
console.log(theSimpsons);

theSimpsons.showRating = 5;
console.log(theSimpsons);

// How to add another character to the array
theSimpsons.characters.push("Ned");
console.log(theSimpsons.characters);

// change the aired date of episode 2 in season 1 to Jan 14th 1990
theSimpsons.seasons["season one"][1].aired = "1990-01-14";
console.log(theSimpsons.seasons["season one"][1]);

console.log(theSimpsons.seasons["season one"][2][0]);