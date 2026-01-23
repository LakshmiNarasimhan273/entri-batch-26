// REST Operator

// basic example
function candidate(name, email, ...skills){
    console.log(name, email, skills);
}

// candidate("Narasimhan", "narasimhan@mail.com", "javascript", "react", "node", "mongodb")

// Real-time Example
function generateBill(customerName, customerMobile, ...products){
    console.log("--- Receipt ---");
    console.log("Customer Name", customerName);
    console.log("Customer Mobile Number", customerMobile);
    console.log("Purchased Items", products);
    console.log("--- Thank you ---");
}

generateBill("Narasimhan", "7010036699", "Milk", "Bread", "Fruits", "Vegetables");


// SPREAD Operator

// basic example
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let output = [...arr1, ...arr3, ...arr2];
console.log(output);

// Real-time Example
const userProfile = {
    name: "Narasimhan",
    userType: "Premium",
    notifications: false,
    theme: "Light"
};

const userChanges = {
    theme: "Dark"
};

const secondChange = {
    theme: "Light",
    notifications: true
}

const makeChanges = {...userProfile, ...userChanges, ...secondChange};
console.log(makeChanges);

// MAP Function

// Currency conversion usd -> inr
const usd = [10, 25, 50]; // 83
const inr = usd.map(usdAmount => usdAmount * 83);
console.log(inr);

// FILTER Function
const foods = [
    {id: 1, name: "Paneer Tikka", price: 250, veg: true},
    {id: 2, name: "Chicken Tikka", price: 350, veg: false},
    {id: 3, name: "French Fries", price: 180, veg: true}
];

// price based filter
const price = foods.filter(p => p.price > 300 && p.price <= 350);
console.log(price);

// veg foods
const vegFoods = foods.filter(food => food.veg === true);
console.log(vegFoods);

// name based filter
const searchFood = foods.filter(f => f.name === "Chicken Tikka");
console.log(searchFood);

// REDUCE Function

// Cart Logic
const cart = [250, 350, 30, 50];

const totalPrice = cart.reduce((currentValue, nextValue) => currentValue + nextValue);
console.log(totalPrice);

// Interview Problem *
// [10, 20, 30]
// [5, 15, 25]
// 105
const num1 = [10, 20, 30];
const num2 = [5, 15, 25];

// Algorithm
// 1 - use spread operator to combine our arrays
// 2 - use reduce to sum the values
const totalValues = [...num1, ...num2].reduce((a, b) => {
    return a + b;
});

console.log(totalValues);