// Practice topics

// control statements
// conditional statement
// if - else

let userAge = 17;

if (userAge >= 18) { // runs only the condition is true
    console.log("Eligible for vote");
} else {
    console.log("Not eligible for vote");
}

// student mark // 100
// >= 90 - A
// >= 75 - B
// >= 45 - C
// Fail

let mark = 30;


if (mark <= 100) {
    if (mark >= 90) {
        console.log("Grade A");
    } else if (mark >= 75) {
        console.log("Grade B");
    } else if (mark >= 45) {
        console.log("Grade C");
    } else {
        console.log("Fail");
    }
}else{
    console.log("Invalid marks")
}

// looping statements
// for(let initialVariable = 1; initialVariable < 10; initialVariable++){
//     console.log(initialVariable);
// }

// functions
let num1 = 5;
let num2 = 7;
let num3 = 8;

function calculate(a, b, c){
    console.log(a + b + c);
}

calculate(num1, num2, num3);

let mark1 = 80;
let mark2 = 50;
let mark3 = 54;

calculate(mark1, mark2, mark3);

function checkAge(age){
    if(age >= 18){
        console.log("Eligible for license");
    }else{
        console.log("Not eligible");
    }
};

checkAge(20);

function count(value){
    for(let i = 1; i <= value; i++){
        console.log(i);
    }
}

// count(10);

// return statement

function welcome(){
    return "Welcome to entri";
}

console.log(welcome());