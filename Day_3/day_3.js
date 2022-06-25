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

const containerArray = [500, "Ridoy", carDetails, myFunction, cars, bikes]

console.log(containerArray);
// This array assures that, Array can hold different types of data.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length);

//array length property

const newFruits = ["Banana", "Orange", "Apple", "Mango"];
let newFruit = fruits[newFruits.length - 1];
console.log(newFruit)
//last array element access

const place = ["Japan", "USA", "Bangladesh", "India", "England"];
let placeLength = place.length;
for(i=0; i<placeLength; i++){
    console.log(place[i]);
}
console.log("For loop iteration end");
//for loop iteration end

place.forEach(arrayLoop);

function arrayLoop(value){
    console.log(value)
}
/*console.log("test")
console.log(place[place.indexOf("Bangladesh")]);
console.log("test"); */

//unique tecnic for access array element just wow
//array loop done

const fruity = ["Banana", "Orange", "Apple"];
fruity.push("Lemon");  // Adds a new element (Lemon) to fruity

const fruitness = ["Banana", "Orange", "Apple"];
fruitness[fruitness.length] = "Lemon";  // Adds "Lemon" to fruitness

console.log(fruitness.splice(0,1));
console.log(fruitness);
console.log(Array.isArray(fruitness));
console.log(fruitness instanceof Array)
//array or not

const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
console.log(person.length);     // Will return 0
console.log(person[0]); //this will show error
console.log(person); 
//Don't define an array like this 

//converting array to string
const testArray = ["Banana", "Orange", "Apple", "Mango"];
console.log(testArray.toString());

console.log(testArray.join(" * "));

let arrayPush = testArray.push("Pineapple");
console.log(testArray);

let arrayUnshift = testArray.unshift("Melon");
console.log(testArray);

let slicedArray = testArray.slice(1,3);// slice method don't remove element.
console.log(slicedArray);//slice() works here that way it works in string
console.log(testArray)// slice creates new array

let splicedArray = testArray.splice(1,2, "Lichi");//splice can remove element
console.log(splicedArray);//splice returns which it remove
console.log(testArray);//splice makes an impact

//Array sort with compare function
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);//accending

points.sort(function(a,b){
    return b - a;
})
console.log(points)//decending

// Sorting an Array in Random Order
points.sort(function(a,b){
    return 0.5 - Math.random();
})
console.log(points);

console.log(Math.min.apply(null, points));

console.log(Math.max(1,56,8,28,1,7,5,7,71,45,21,5));

//Array iteration
const myArray = [45, 4, 9, 16, 25]
myArray.forEach(amarFunction);

function amarFunction(value,index,array){
    console.log(index);
}
//Program of above and bottom can provide same output
/*
myArray.forEach(function(value,index,array){
    console.log(value)
})
*/

console.log("map ok, forEach undefined");
function oneValue(value){
    return value;
}
console.log(myArray.map(oneValue));

console.log(myArray.forEach(oneValue));
console.log("one value end")

function twoValue(value){
    console.log(value);
}
myArray.forEach(twoValue);
console.log("two")
myArray.map(twoValue);
console.log("map ok, forEach ok");

//reduce
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(over18)
