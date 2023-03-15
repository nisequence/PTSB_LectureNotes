/* 
TODO:
    //- Make needed global variables
    //- Build Fetch to test teh API endpoint
    - Make an array variable to hold recipes
    - Connect to the DOM of the HTML (button in nav, divs for the cards)
    - Build a function to display random recipe card
    - Build a function to display the deck of recipes
*/

// * Global Variables
const url = "https://api.spoonacular.com/recipes/random";
const apiKey = "b4a54b1b64ba445fb2a57693dab92de9";
let buildURL = `${url}/?apiKey=${apiKey}`;
// DOM Elements
const searchForm = document.querySelector("#search-form"); // could also get element by ID (do not pass the # though)

// Build function for displaying random recipe single card
const displayRandomCard = recipe => {
    // console.log(recipe); //!test
    // make variable for parent container
    const randomCard = document.querySelector(".random-card"); // must use . for query selector when seeking a class

    while(randomCard.firstChild) {
        randomCard.removeChild(randomCard.firstChild);
    }

    //* Create Elements
    let card = document.createElement('div');
    let img = document.createElement('img');
    let body = document.createElement('div');
    let title = document.createElement('h5');
    let btn = document.createElement('a');

    //* Set Attributes
    // Need to use Bootstrap class names to build elements
    card.className = 'card';
    card.style.width = '18rem';
    img.src = recipe.img; // using our obj to place the value.
    img.className = 'card-img-top';
    img.alt = recipe.title;
    body.className = 'card-body';
    title.className = 'card-title';
    title.textContent = recipe.title;
    btn.className = 'btn btn-success';
    btn.textContent = "Add Recipe";

    //* Attach Elements
    body.appendChild(title);
    body.appendChild(btn);

    card.appendChild(img);
    card.appendChild(body);

    randomCard.appendChild(card);
}

// Build function for our saved recipes

// EVENT LISTENER
searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); // stops our page from refreshing due to default properties of our form

    // Fetch()
    fetch(buildURL)
        .then(res => res.json())
        .then(data => {
            let recipe = data.recipes[0]; // pathway to target the individual recipe object

            let obj = {
                title: recipe.title,
                img: recipe.image,
                src: recipe.sourceURL
            }

            displayRandomCard(obj); // Pass our new object as an argument to the display function
        })
        .catch(err => console.error(err));
});

/* 
sourceURL
*/