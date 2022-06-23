const cars = ["Volvo", "BMW","Fiat","Honda"];

const bikes = ["Palsur", "Discover", "Honda", "Bajaj", "Yamaha"];

const carDetails = {
    Brand : "Volvo",
    Color : "Blue",
    Weight : "850kg",
    Model : 500
}

function myFunction(){
    console.log("Hello World!");
}

const containerArray = [500, 100, "Ridoy", carDetails, "Prottoy", myFunction, cars, bikes, "Abdul Aziz", "Kayes"]

console.log(containerArray);
// This array assures that, Array can hold different types of data.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length);

//array length property

const newFruits = ["Banana", "Orange", "Apple", "Mango"];
let newFruit = fruits[newFruits.length - 1];
console.log(newFruit)