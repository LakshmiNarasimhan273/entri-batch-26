// Arithmetic operators

let a = 5;
let b = 10;
console.log("Addition", a + b);
console.log(b - a);
console.log(a * b);
console.log(b / a);

// Assignment operator

const name = "Narasimhan"; // = - assignment operator
// pre-increment
let num = 10;
num += 1;
console.log(num);

// post-increment
let age = 17;
age =+ 13;
console.log(age);

// Comparison Operator
let userAge = 18;
let actualAge = "18";

console.log(userAge > actualAge); // > Greater than
console.log(userAge < actualAge); // < lesser than
console.log(userAge >= actualAge);

console.log(userAge == actualAge);
console.log(userAge === actualAge);

// Ternary operator -> ? :
let votingAge = 15;
votingAge >= 18 ? 
console.log("Eligible for vote") : 
console.log("Not eligible for vote");

// Real-time scenario
let isSeller = false;
isSeller ? console.log("Navigating to dashboard") : console.log("Navigating to Home page");

// Expression
let username = "Narasimhan";
console.log("Welcome you're logged in " + username);

// Interview problem
console.log(5 + 5); // 10
console.log(5 + "5"); // 55
console.log(5 - "5"); // 0
console.log(5 - "Entri"); // NaN - not as number