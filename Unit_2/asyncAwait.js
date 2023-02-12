/* 
? Async/Await
    - Introduced in 2017
    - Can make any function an async function simply by denoting as such
    - Keywords:
        - async: denotes an async function
        - await: calls a process to "wait" for our results.
    - Can help us reduce the need for callback functions
    ! - Cannot be used in loops!
    - ALWAYS returns a promise
*/

/* 
* Async Function Declaration
    Structure:
    async function asyncFunctionName() {
        ...code to run
    };

* Async Function Expression
    Structure:
    let funcExpressionName = async function () {
        ...code block to run
    };

* Async Arrow Function
    Structure:
    let arrowFunctionName = async () => {
        ...code to execute
    };

* Of the above, choose what works best for you unless your team has a preferred structure!
*/

async function getName() {
    return "Gandalf";
}

console.log(getName()); // returns "Promise { 'Gandalf' }"
getName().then((name) => console.log(name)); // returns "Gandalf"

/* 
* Await
    - Tell JS that a promise is being returned and to wait on that result.
*/

