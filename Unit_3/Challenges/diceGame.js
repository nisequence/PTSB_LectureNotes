/* 
    ? Let's build a dice game!
    - User plays the dice game, roll dice up to 3 times, and I want to focus on scoring per dice roll and totaling the score at the end of the game.

    * To Do List:
    //- To tell JS what things are with variables
        //- score
        //- diceRollValue
        //- the state of the dice (rolled or not rolled)
        //- numberOfRolls (eventually try to set a max of 3)
    //- Use dictionary/object/lookup-table to store our scoring values
    //- Use state (a state machine) to check which action options the player has:
        //- not rolled, rolled, score(ending the game and printing final total)
    //- Build a function to update the player score
    //- Build a function to randomize die value & update roll count
    //- Build a function to monitor/check our turn/action state and advance play state (can we roll? are we done? is the game not started yet?)
        //1. Check if the action/next action is valid (can we do this?) - IF ELSE
        //2. If the die is rolled:
            //- first check if not at max rolling count of 3 - CONDITIONAL
            //- but if still under 3, then can roll the die
            //- total and set score - REASSIGN SCORE
            //- make a console message to see changes
        //3. If die is to be scored: - CONDITIONAL
            //- print a message with the player's final score
            //- reset our starting values (start over option) - REASSIGN VARIABLES
*/

//* Creating global variables
let score = 0; // default starting score for the game
let dieRollValue; // the variable to hold our roll value
let stateOfDie = "not rolled"; // current state of our die
let numberOfRolls = 0; // starting count for our allowed rolls (3 max)

//* Use a dictionary to store score values
// 1 = 100, 2 = 20, 3 = 30, etc.
const scoring = {
    1: 100,
    2: 20,
    3: 30,
    4: 40,
    5: 50,
    6: 60
}

//* Creating a state machine for dice status
// 3 states: "roll", "not rolled", "score"
let dieState = {
    "not rolled": ["roll"],
    "roll": ["roll", "score"],
    "score": ["not rolled"]
}

//* Make a function to update our score as well as print a message (console log) to give us feedback
function scoreDice(dict, dieSide) {
    // Create some math to add new roll score value to our base score value
    let points = dict[dieSide];
    score += points; // same as "score = score + points"
    // alternative for all of the above would be "score += dict[dieSide];"
    // console log a message of where score is
    console.log(`You just scored ${points} points making your total score ${score}!`);
}

// test if scoreDice works... it works!
////scoreDice(scoring, 5);
////scoreDice(scoring, 1);

//* Build a function that will generate a random number limited by 6 (using a d6) and increase our roll count variable numberOfRolls (reassignment)
function rollDie() {
    // Create a random number from 1-6 and assign to dRV
    dieRollValue = Math.floor(Math.random()*6 + 1);
    numberOfRolls++;
    return dieRollValue;
}

// test if roleDie() works... it works!
////console.log(rollDie()); returns values 1-6
////console.log(numberOfRolls);

//* Build a function to pull in our state/action change, check it, and run the rest of our conditionals
function playState(newDieState) {
    // Reference/find my starting state
    // Game default start is "not rolled", but need variable that will be updated as player "rolls" and want to check if action is available
    let validDieState = dieState[stateOfDie];

    // Using a conditional to check if die action of validDieState is doable
    if (validDieState.includes(newDieState)) {
        // set our newDieState to the variable stateOfDie (reassign)
        stateOfDie = newDieState;
        // new conditional for next step
        if (stateOfDie === "roll") {
            // If the state of die is "roll", do the following:
            // first check to make sure we aren't at max number of rolls
            if (numberOfRolls === 3) {
                console.log(`Hey! You've rolled ${numberOfRolls} times and need to score! This roll won't count.`);
            } else {
                // If we haven't hit max rolls
                rollDie(); // gives us a # 1-6 and increments numberOfRolls
                // Write message
                console.log(`You rolled a ${dieRollValue}!`);
                // Score the rolled dice and print a message of rolls made
                scoreDice(scoring, dieRollValue);
                console.log(`You have rolled ${numberOfRolls} time(s). Would you like to roll again or finalize the score?`);
            };
        } else if (stateOfDie === "score") {
            // If the state of die is "score" do the following:
            // Reset all values, print final score message
            console.log(`Your final score is: ${score}. Thanks for playing!`);
            dieRollValue = "not rolled";
            numberOfRolls = 0;
            score = 0;
        } else {
            // if neither roll nor score, but still a valid transition
            console.log("Idk");
        };
    } else {
        // not a valid move
        console.error(`Invalid move! Cannot ${newDieState} after ${validDieState}!`);
    };
};

playState("roll");
playState("roll");
playState("roll");
playState("roll"); // 4th roll shouldn't count
playState("score");

function roundTwo() {
    console.log("\n\n------ Welcome to Dice Game, Round Two! ------\n");
    playState("roll");
    playState("roll");
    playState("roll");
    playState("score");
    console.log("\n------ End of Round two, thanks for playing! ------\n");
};

roundTwo();