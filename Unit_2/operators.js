/* 
    JavaScript Operators
        - Plus          +
        - Times         *
        - Power         **
        - Dot           .
        - Assignment    =
        - Comparison    ==
                        ===

    Used to:
        - Assign
        - Compare
        - Arithmetic (Math)
        - Logical
        - Conditionals
*/

console.log("Equal To");
// Equal To: ==, checks value 
"3" == 3;
console.log("3" == 3); // "true" because 3 as a string is the same as 3 as a #
console.log("4" == 3); // "false", two different numbers

console.log("Strict Equal To");
// Strict Equal To: ===, checks value and data type
console.log("3" === 3); // "false" because one is a string, the other is a #, even though they are both 3
console.log("true" === "TRUE"); // false, because it is case sensitive
console.log(4 === 4); // true - data types and numbers match
console.log(100 === 200); // false - data types match but not numbers

console.log("Not-Equal & Strict Not Equal");
// Not Equal & Strict Not Equal: "!=" means not equal, "!==" means strict not equal
console.log("2" != 2); // false (== would be true)
console.log("2" !== 2); // true (=== would be false)

console.log("Greater Than / Less Than");
// Greater Than / Less Than: ">" "<" returns true/false
let y = 5 > 3;
console.log("Greater Than: ", y); // analyzes whatever your statement is within variable y
console.log(9 > 6); // will analyze the variables against each other
console.log("Less Than: ", 4); // does not know what to compare 4 with!!!

console.log("Greater Than or Equal To");
// Greater Than or Equal To: ">="
console.log(3 >= 2, 5 >= 10, 5 >= 5); // analyzes each statement within one line of terminal response

console.log("Less Than or Equal To");
// Less Than or Equal To: "<="
console.log(2 <= 2, 1 <= 2, 5 <= 2); // analyzes each statement within one line of terminal response

console.log("'And' Operator")
// And: "&&" (you need both!), analyzes two statements at once as true/false
// ? Might be good for user/password?
console.log(2 < 10 && 2 > 1); // both are true, so the return is "true" (once)
console.log("And: ", 2 && 3); // doesn't read properly
console.log(3 < 1 && 5 > 3); // first is false, second is true, so the return is "false" overall
console.log(10 < 2 && 1 > 2); // both are false, so return will be "false" overall

console.log("'Or' Operator")
// Or: "||", at least one must be true
console.log(3 < 1 || 5 > 3); // first is false, second is true, so the return is "true" overall
console.log(10 < 2 && 1 > 2); // both are false, so return will be "false" overall
console.log(2 > 1 || 4 > 6); // both are true, so the return is "true" overall

console.log("~~~ LOGICAL OPERATORS ~~~");
//* Logical Operators: determine the logic between variables or values
// Ex w/ reassignment
let a = 1; // 1
a = a + 1; // redefined "a" as 2
console.log(a); // 2
a = a + 1; // redefined "a" as 3
console.log(a); // 3

// Ex w/o reassignment
let g = 100;
console.log(g + 50);
console.log(g); // g does not change

// Addition
let r = 1;
r += 1; // r = r + 1;
console.log(r);

let s = 50;
console.log(s += 5); // s = 50 + 5
console.log(s); // s was not only added to but redefined due to "+="

// Subtraction
let t = 25;
t -= 1; // t = t - 1;
console.log(t);

// Multiplication
let u = 20;
u *= 2; // u = u * 2;
console.log(u);

// Division: "/"
v = 99;
v /= 3; // v = v / 3;
console.log(v);

// Remainder (modulus operator) "%", divides 1st variable by 2nd variable and terminal returns whatever is leftover instead of the quotient
// (Dividend / divisor = quotient in normal division)
console.log(3 % 2);

// Exponential
w = 4;
w **= 1; // r = r * r;
console.log(w);

console.log(2 ** 3) // 8,