let x = 5;
while (x <= 10) { // need red dot to left to observe step-by-step
    debugger; // alternative to red dot
    // in the browser, the debugger is prompted with a blue arrow (not a red dot)
    console.log(`The # ${x} is less than or equal to 10!`);
    x++;
}

console.log(x);
