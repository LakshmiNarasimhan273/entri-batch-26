// Traditional function

// function test(){
// return statement;
// }
// test();

// Arrow Function

// const test = () => {
//      return
// }

const greet = () => {
    return "Welcome to Entri";
};

console.log(greet());

// Simpler code
const welcome = () => "Welcome to FSD Program";

console.log(welcome());

const calculate = (a, b) => a + b;

console.log(calculate(5, 4));

// Function currying

function multiply(a) {
    return function (b) {
        return function (c) {
            return a - b - c;
        }
    }

};

console.log(multiply(5)("Hi")(5));

// Logging in username and password checking