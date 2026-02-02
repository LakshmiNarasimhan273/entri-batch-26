// Type Casting
// Changing data type
let num = "100.3";
let casting = Number(num);
// let casting = parseInt(num);
// let cast1 = parseFloat(num);

// console.log(typeof cast1);
console.log(typeof casting);


document.addEventListener("DOMContentLoaded", () => {
    // DOM
    const countDiv = document.getElementById("count");

    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");
    const resetBtn = document.getElementById("reset");

    let countValue = 0;

    increaseBtn.addEventListener("click", function(){
        // countValue = countValue + 1;
        countValue++;
        countDiv.textContent = countValue;
    })

    decreaseBtn.addEventListener("click", () => {
        countValue--;
        countDiv.textContent = countValue;
    })

    resetBtn.addEventListener("click", function(){
        countValue = 0;
        countDiv.textContent = countValue;
    })

});

// SPLICE METHOD
const arr = [1, 2, 3, 10, 4];
arr.splice(3, 2);
console.log(arr);

const names = "name1, name2, name3";
let output = names.split(",");
console.log(output);

// Add Mr/MS to names
const learners = ["Arun", "Narasimhan", "Divya"];
const titledNames = learners.map(singleLearner => {
    return "Mr/MS " + singleLearner;
});
console.log(titledNames);