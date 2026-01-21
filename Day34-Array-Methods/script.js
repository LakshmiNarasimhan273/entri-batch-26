// Array Methods
// push()
let watchlist = ["Javascript Tutorial", "React Introduction"];
watchlist.push("Backend Introduction", "Fullstack Project");
console.log(watchlist);

// pop()
watchlist.pop();
console.log(watchlist);


// shift() & unshift()
let ticketLine = ["person1", "person2", "person3"];
ticketLine.shift();
console.log(ticketLine);

// unshift() -> priority function
let medicalLine = ["general-person", "general-person"];
medicalLine.unshift("emergency-person");
console.log(medicalLine);

// slice(startValue, endValue)
let instagramTrends = ["AI", "Cricket", "Stocks", "Medical", "Politics"];
let filteredTrends = instagramTrends.slice(0, 3);
console.log(filteredTrends);

// splice(indexValue, deleteCount, ...replacementWords)
let cart = ["Laptop", "Mouse", "Keyboard", "Monitor"];
cart.splice(2, 1, "Mechanical Keyboard");
console.log(cart);

// String Methods
let emailInput = "NARASIMHAN@MAIL.COM";
let cleanedEmail = emailInput.toLowerCase();
console.log(cleanedEmail);

let pancard = "abefr7654f";
let correctedPan = pancard.toUpperCase();
console.log(correctedPan);

// includes()
let product = "Wireless headphones";
let search = product.toLowerCase().includes("wire");
console.log(search);

// split() - backend
// bridge function to convert the strings into an array
let mobileContacts = "person1, person2, person3";
let convertedValues = mobileContacts.split(",");
console.log(convertedValues);