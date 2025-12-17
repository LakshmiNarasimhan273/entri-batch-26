// variable creation using - var
var employeename = "Narasimhan";
console.log(employeename);

// variable creation using - let
let companyname = "Entri";
console.log(companyname);

// variable creation using - const
const role = "Mentor";
console.log(role);

// Natures of Variable Keywords

// var - global scope
var day = 1;
var day = 2;
console.log(day);

// let - blocked scope
let age = 1;
age = 19;
// let age = 19 -- it causes the error
console.log(age);
day = age;
console.log(day);

// const - constant 
const nationality = "Indian";
// nationality = "American";
console.log(nationality);

// * Hoisting
// Flag Hoisting
console.log(tax);
var tax = 3; // undefined

console.log(mobile);
let mobile = "Samsung"; // ReferenceError

console.log(laptop);
const laptop = "mac"; // ReferenceError