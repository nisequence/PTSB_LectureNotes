//? TODO Write our Global Variables
// variable to connect to the form & one to connect to the table body, something to hold all the animal data (array)
const form = document.querySelector("form");
const table = document.querySelector("tbody");

// will make array later
let animals = [];

//console.log(form); // We are able to access our various inputs based off the "name" we assigned them
// console.log(form.name);
// console.log(Object.values(form));
// console.log(form[0].placeholder); // hits the first input in the form with [] and used dot notation to look at the placeholder we set (hint: can find other values of the input)

//? TODO Create an Event Listener for Form
// Event Listener: something to listen for, when heard, do the thing (something for it to do/trigger)
form.addEventListener("submit", e => {
    // we need something to stop the browser from refreshing the page
    e.preventDefault(); // stops the default refresh
    //console.log("I submitted the form!");

    // Create an animal data collection from the input values
    const animal = {
        species: form.species.value,
        name: form.name.value,
        sex: form.sex.value
    }

    // Testing if it's working: it does!
    //console.log(animal);

    // Add animal to animals array with .push
    animals.push(animal);
    // console.log(animals); //testing

    // Two new window methods:
    form.reset(); // point to our form and clear it
    // form[0].focus(); // will target the first input within the form, "start" when the form is "new"
    form.species.focus();

    displayTable(); // Calling the function in the event so each animal gets displayed when it's added
});


// TODO: Display to the table body (the DOM) - function
function displayTable() {
    console.log('displayTable()', animals);

    // *Use a while loop (this will be helpful later, so remember this section!)
    while(table.firstChild) { // if it has anything in it
        // use method removeChild on tbody
        // removeChild() requires details on which element to remove
        table.removeChild(table.firstChild);
    }

    // Use a .forEach loop to create the needed table elements per animal, assign values, and then append to the page
    // Each row: an ID (#), the name, the sex, the species
    animals.forEach((a, i) => {
        console.log("in forEach Loop: ", i, a);

        // Create Elements:
        let tr = document.createElement('tr'); // this will be parent for our "td" (table data)
        let id = document.createElement('td'); // child
        let name = document.createElement('td'); // child
        let sex = document.createElement('td'); // child
        let species = document.createElement('td'); // child

        // Assign Elements Values:
        id.textContent = i + 1; // ++, Using the index position in array and adding one to become the ID
        name.textContent = a.name;
        sex.textContent = a.sex;
        species.textContent = a.species;

        // Append Elements to DOM/Parent:
        tr.appendChild(id);
        tr.appendChild(name);
        tr.appendChild(sex);
        tr.appendChild(species);
        table.appendChild(tr);
    })
}