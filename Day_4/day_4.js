/*function randomNumber(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(randomNumber(6,1));

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function vowelCounter(sentence){
    let counter = 0;
    let sentenceArray = sentence.split("");
    sentenceArray.forEach(function(value){
        if(vowels.includes(value)){
            counter++;
        }
    })
    return counter;
}
console.log(vowelCounter("I lover Bangladesh"));
*/
/*
const number = [70, 20, 30, 80, 70, 50, 80, 70, 100, 40, 70, 60,30];
const uniqueNumber = [];
number.forEach(function(value){
    if(!(uniqueNumber.includes(value))){
        uniqueNumber[uniqueNumber.length] = value;
    }
})

uniqueNumber.sort(function uniqueNumberSort(a,b){return a - b})
console.log(uniqueNumber);

*/
function dayRate(ratePerHour) {
    return ratePerHour * 8;
  }

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    let numMonths = Math.floor(numDays / 22);
    let monthlyRate = dayRate(ratePerHour) * 22;
    let monthlyDiscountRate = (1 - discount) * monthlyRate;
  
    let numExtraDays = numDays % 22;
    let priceExtraDays = numExtraDays * dayRate(ratePerHour);
  
    return Math.ceil((numMonths * monthlyDiscountRate) + priceExtraDays);
}
console.log(priceWithMonthlyDiscount(89,230, 0.42));

//Ternary operators
let age = 20;
let yourAge = 15;
console.log(age >= 18? "You are an adult" : "You are an younger");
console.log(yourAge >= 18? yourAge <= 30? "You are an adult" : "Your are an old" : "You are an younger.")

//Difference between two values
let formValue = 5;
if(isNaN(formValue)){
    console.log("Please enter a number.")
}
else
{
    console.log(formValue > 0? "Positive" : "Negative");
}

let score = 10;
if(score <= 5){
    console.log("f");
}
else if(score <= 10){
    console.log("e");
}
else if(score <= 15){
    console.log("d");
}
else if(score <= 20){
    console.log("c");
}
else if(score <= 25){
    console.log("b");
}
else{
    console.log("a")
}

/*
let year = 20;

if (true){
    console.log(year);//error for let hoisting concept
    let year = 21;
}

*/

/*
var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
}

// Here i is 10
*///w3schools*******************

/*let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}
node Day_4/day_4
// Here i is 5
*///w3schools*******************

