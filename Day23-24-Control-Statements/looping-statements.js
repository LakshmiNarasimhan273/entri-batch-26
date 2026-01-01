// Looping Statements
/*
 for(startingPoint , condition , increment){
     
 }
*/
// let total = 0
// for(let i=0; i<10; i++){
//     for(let j=i+1; j<=10;j++){
//       total = total + (i*j)
//     }
// }
// console.log(total);

// String
// let name = "Gayathri"

// const greetings = `Hi ${name}`;
// console.log(typeof greetings);

// While loop

/*
 while(condition){
   // statements
 }
*/
// let start = 0;
// while (start < 10) {
//   start++
//   console.log(`Loop ran ${start}`);
// }

// do..while loop

/*
 do{
  // statements
 }while(condition)
*/
// let i=1;
// do{
//   console.log(i*5)
// }while(i<0);

// for..in
const person = {
  name: "Entri App",
  // year: 2025
};

// Object
// let Evans;
// for (let Evans in person) {
//   console.log(person[Evans]);
// }
// console.log(Evans);

// Array
// for (const index in num) {
//   console.log(num[index]);
// }

// for..of

// const num = [1,2,3];

// for(let i of num){
//     console.log(i)
// }

// forEach
/*
    forEach(()=>{})
*/

const nums = [
  { name: "Entri App" },
  { name: "Good morning" },
  { name: "Good Afternoon" },
];

nums.forEach((value, index) => {
  console.log(value.name);
});

// Map
nums.map((value, index) => {
  console.log(value.name);
  return "Entri App";
});
