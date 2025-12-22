// Primitive Types

let name = "Narasimhan"; // string
console.log(typeof name);

let age = 26; // number
console.log(typeof age);

let isMentor = true; // boolean
console.log(typeof isMentor);

let salary = undefined; // undefined
console.log(typeof salary);

let percentage = null; // object
console.log(typeof percentage);

let bigCount = 16915761974513081420851647n; // bigint
console.log(typeof bigCount);
 
let numbers = 3.4; // number
console.log(typeof numbers);

// Refernce Type
// object, array, functions

let user = {
    username: "Lakshmi narasimhan",
    role: "Mentor"
}; // user -> 1 object -> 2 key

console.log(typeof user);

let skills = ["MERN Stack", "Web Development", "Mentoring"];
console.log(Array.isArray(skills));

function welcome(){
    console.log("Welcome user");
    console.log("You're logged in");
}
welcome();


let account = {
    username: "Narasiman",
    accountNumber: 7131834123,
    branch: "Tamil nadu",
    country: "India",
    accountActive: true
};

let updateAccount = account;

updateAccount.username = "Narasimhan";
updateAccount.branch = "Kumbakonam";
console.log(account);

// Advanced Examples

// Amazon example
// Array of objects
let products = [
    {title: "Watch", price: 500},
    {title: "laptop", price: 25000},
    {title: "mobile", price: 30000}
];
console.log(products);

// Real-time object data
let student = {
    name: "Narasimhan", // string
    age: 26, // number
    course: "FSD Course",
    number: 7010036699, //number
    isActive: true, // boolean
    isCompleted: undefined, // undefined
    skillsLearned: ["html", "css", "javascript"], // array
    moreinfo: {
        joiningDate: "10th Nov",
        paymentDate: "15th Nov"
    }, // object
    application: function(){
        console.log("Application Done Successfully");
    },
};
console.log(student);
console.log(student.age);
student.application();