/* 
    ? API
    - Application Programming Interface
    - Wonderful way to access data we are trying to obtain
        - Data that is not in our local project.
        - Ex: data stored in your database, cloud storage, or someone else's public database (via a public API)
    - Allows the Client(front end of the application, web page, program) to communicate with the/a server (database)
    - Allows HTTP requests and response lifecycle.
    
    *(CRUD)
        - POST (Create)
        - GET (Read)
        - PUT (Update)
        - DELETE
*/

/* 
    ? AJAX
    - Asynchronous JavaScript and XML
    - Might see if working with older code bases
    - Wrap XML with XMLHttpRequests -> not important to know right now
    - Governs different aspects of our page, such as static vs dynamic section of our page.

    Pros:
        - Page components loaded individually
        - New data updated regularly

    Cons:
        - JS must be enabled
        - Adds more complex aspects.
        - refreshes the page state and stores info can bloat.
        - Difficulty for screen readers.

    - Works through multiple technologies
        - HTML / CSS
        - DOM (Document Object Model)
        - JSON
        - Fetch
        - JS bringing it all together

    - Not Promised based.

    ? jQuery
    - AJAX often works with it
    - A library that helps us handle the front end.
    - Prior to DOM and Fetch
    - still used but dated
    - Example:
        - timed updates to comments (replies)
        - infinite scrolling
        - dynamic search results
*/

/* 
    ? Fetch
    - Before fetch(), we would have had to use an httpRequest through the above noted system ^^^
      * - (not fun)
    - Is an API
    - A global method that requires 1 argument:
        - The location of data (URL)
    - Handles both the request and response
        - Allow us to access our resolvers (chaining .then() & .catch() 's)
        - Resolvers = okay, got the thing (or didn't), hey code, now perform this next action
*/

const log = console.log; // Us creating a shortcut variable to hold the console.log functionality
log("Hi, I'm a console log!");

// Store API URL in a global variable
// Endpoint/Route are like the web address url, interchangeable words
const testEndpoint = "https://dog.ceo/api/breeds/image/random";

// log(testEndpoint); // *testing
// log(fetch(testEndpoint)); // *Shows that fetch returns a promise, promise showed we got a status of 200 (success!)

// Write a fetch: use the fetch global method & pass the url variable
fetch(testEndpoint)
    .then((response) => {
        log("1st fetch .then", response);
        return response; // returning the response for the next.then
        // *response is not a keyword, just a mini variable
    })
    .then((res) => {
        log("2nd fetch .then", res.json);
        return res.json(); // returning the modified response for the next.then (json makes it usable)
    })
    .then((data) => {
        log("3rd fetch .then", data); // logging the json object (now we can use it!)
        seeDogPic(data);
    });
    // .catch(log("Catch")); //* not needed in this case per Kate

/* 
    ? JSON (what we used above ^^^)
    - JavaScript Object Notation
        - very lightweight way to store and transfer data
        - "Easy to understand/read" (for us humans)
        - Structured like an object

    - Syntax & Structure:
        {
            "key": "values",
            "key": "values",
            "key": 0
        }
    
   *- Everything is wrapped in quotes with minor exceptions (integers / booleans)
    - Data is all separated with commas - it is an object - but no comma after last key/value pair
   *- CANNOT hold comments or functions
    - .json() method helps to convert our promise response into something usable (object)
*/

// How can we see the dog pic from the fetch though?? DOM!
// TODO: Build a function where we create DOM elements, assign them values, and append them to the parent element/html
let body = document.querySelector("body");

function seeDogPic(jsonDataFromFetch) {
    log("In seeDogPic func:", jsonDataFromFetch);

    // Create elements
    let img = document.createElement("img");
    let link = document.createElement("a");

    // Assign img attributes
    img.src = jsonDataFromFetch.message;
    link.href = jsonDataFromFetch.message;

    // Append element to body
    body.appendChild(link);
    link.appendChild(img);
}

// * JSON.parse(string)
let myText = '{ "name": "Gollum", "lost_ring": true }';
// log(myText);
let testObj = JSON.parse(myText);
log(testObj.name);
log(testObj);
testObj.name = "Bilbo";
log(testObj);

/* 
The Process:
        1. Fetch your resource which returns a promise
        2. Use a .then() resolver to catch fetches return and assign to a parameter.
        3. use .json() on response to finish reading entire ReadableStream and parse it.
        4. Chained another .then() to catch read response object and ..
        5. Build the rest as needed.
            - DOM manipulation
            - use data to process in other functions
            - whatever your project requires
    Fetch differs from jQuery:
        - The promise returned won't reject on HTTP error status even even if its a 404 or 500 (internal / external server error)
*/

const url = "https://meowfacts.herokuapp.com/";

// An example of a fetch in a function

function getCatFact() {
    fetch(url)
        .then((r) => r.json())
        .then((d) => log(d.data[0]))
}

getCatFact(); // When cats grimace, they are usually "taste-scenting." They have an extra organ that, with some breathing control, allows the cats to taste-sense the air.
//getCatFact(); // In ancient Egypt, when a family cat died, all family members would shave their eyebrows as a sign of mourning.

// *Async/Await Fetch (Arrow Function form)
const getCatFact2 = async () => {
    let res = await fetch(url); // waits for fetch
    let result = await res.json(); // waits for json conversion
    let data = result.data[0]; // grabs the first part of the array belonging to the key of "data"
    
    log("In Async/Await:", data);
}

getCatFact2(); // Prints fact to console

/* 
? Local fetch to (local) JSON file
    - When project has the data we want to fetch from
   *- Formatting new JSON File
        - Right Click
        - "Format Document"
        - "Configure"
        - Choose JSON, not Prettier
*/

function fetchFellowship() {
    fetch("./local.json") // passing our file location (not a url)
        .then(res => res.json())
        .then(data => {
            let members = data.fellowship;
            // log(members); // testing to make sure we've got our members

            // Use a for/of loop to cycle through each object in the array
            for(m of members) {
                log(m); // logs each member object
                log(m.name); // logs the name of each member
            }
        });
}

fetchFellowship();

// * Error Handling with try/catch
