/* 
? Promises
    Is an object that may produce a singular value in the future.
    a promise allows us to "wait" for our results (regardless if we get a positive response or negative rejection).

    3 States:
        - Pending ... in the process of getting the result
        - Fulfilled ... success! Results are obtained
        - Rejected ... no results

    - Always returns an object: { }

    - Promises take in two parameters:
        - Resolve
        - Reject

    https://www.w3schools.com/js/js_promise.asp
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
*/

// *Mock/Faux Internet send
function getData() {
    setTimeout(() => {
        return "Here's some faux data!"
    }, 3000); // 3k ms = 3 sec
}

let data = getData(); // The value comes "late" by 3 sec
console.log(data); // We get undefined immediately because the information is delayed when it/the code is compiled

// Use Callback = callback functions get executed after the end of a process
function getData2(cb) {
    setTimeout(() => {
        cb("some data will hopefully be delivered");
    }, 3000);
}

getData2((data2) => console.log(data2)); // returns late WITH the info

// New shortcut: clg
console.log("Wow, the compiler runs fast!");

/* 
    How we can make our program wait for data instead of giving us undefined results.

    * A promise is an object that may produce a singular value in the future.
        - Resolved: If we obtain our data, we can resolve and use it
        - Rejected: If we get nothing or an error, we handle it with reject
*/

function returnData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) {
                resolve("some data from resolved promise")
            } else {
                reject("This is a rejection, promise failed.")
            }
        })
    })
}

// console.log(returnData()); // Promise { <pending> } (neither resolved nor rejected)

/* 
? Resolvers
    - When returned, the returnData() function will return/give a promise instead of a given string
    - To get the string, we will need to "Chain on a Resolver"
        Keywords:
            ~ .then()
                If success "then" do this
                Can be chained together (do multiple things)
            ~ .catch()
                If error/rejection
        These take in a callback function (thick arrow)
        *(Only put the semicolon (;) AFTER the LAST resolver!!! It will break the chain.)
        
        Example: promiseResults.then().then().then().catch();
*/

returnData()
    .then(data => console.log("From resolved response:", data)) //! NO semicolon on purpose
    // chaining .thens()s for funsies
    .then(() => {
        let x = 10;
        let y = 10;
        console.log(x * y); // semicolon ok here, but not after last ) of .then
    })
    .then(() => {
        console.log("Heh, I could do this alllllll day.");
    })
    .catch(function(err) { // change the conditional to false to test this
        console.error(err); //* Semicolon CAN go here
    })
// returns "From resolved response: some data from resolved promise"

// Now going back to returnData() initialization to set the conditional to false instead of true
// return is "This is a rejection, promise failed."

/* 
? The Process:
    - Create a new Promise
        - resolve or reject parameters of callback function
    - setTimeout is acting as a "waiting" process for a resource/data
    - resolve() or reject() said Promise
    - ^After that, when returned, we got a promise, not a string
    - Needed to use resolvers (.then() / .catch()) with callbacks to extrapolate(get) the info from that promise.
*/