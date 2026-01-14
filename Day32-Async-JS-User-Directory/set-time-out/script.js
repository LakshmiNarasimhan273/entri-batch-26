// console.log("Requesting Rs. 500 from IRCTC");

// setTimeout(() => {
//     console.log("IRCTC Payment Completed Rs.500 ");
// }, 5000);

// console.log("Payment Processing");

// Tricky Interview Question
// Companies asked:- Google, Amazon, Zoho

console.log("1st console");

setTimeout(() => {
    console.log("2nd console");
}, 0);

setTimeout(() => {
    console.log("3rd console Counting");
}, 1000);

console.log("4th console");

function test(){
    console.log("5th console Javascript Running");
}

console.log("6th console Web development");
test();