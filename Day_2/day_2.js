function myFunction(a,b){
    let c = a + b;
    return c+=5;
}
console.log(myFunction(5,4));
// program 1 end
function toCelcius(farenheit){
    return (5/9) * (farenheit - 32);
}
console.log("Celcius temparature is " + toCelcius(98.4));
// program 2 end
function carName(){
    var brand = "Ferari";
    console.log(brand);
}
carName();//This refers to function result.
console.log(carName);//This will refers to function object or function body.
//console.log(brand); Not possible, because of functional scope

// program 3 end

const cars = {
    brand :"Fiat",
    model: 500,
    weight: "850kg",
    Color:"blue",
    start: function(){
        //It is possible to invoke a method inside a method.
        this.drive();//"this" refers to person object. Because person object owns drive method
        console.log("Car has started");
    },
    drive: function(){
        console.log("Car is running");
    }
};
cars.start();
cars.drive();
//Program 4 end

//When a JavaScript variable is declared with the keyword "new", the variable is created as an object:
x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
//program 5

//Use the built-in property to know the length of a string
let text = "I am Ridoy";
console.log(text)
let length = text.length;
console.log(length);
//program 6

let str = "Apple, Banana, Kiwi";
console.log(str.slice(7,13));//slice() method creates new string
console.log(str.slice(-12,-6));//slice() method creates new string
console.log(str);

let nextStr = "Apple, Banana, Kiwi";
let part = nextStr.substring(7, 9);// can not access negative number
console.log(part);

//program 7 end

let replaceText = "Please visit Microsoft and Microsoft!";
let replaced = replaceText.replace("visit", "come to see");
console.log(replaced);
//program 8 end

let upperText = replaceText.toUpperCase();
console.log(upperText);
let lowerText = replaceText.toLowerCase();
console.log(lowerText);
//program 9 end

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);
//program 10 end

//Convert string into an array
let myText = "Hello world";
console.log(myText.split(""))
//program 11  end

const newText = "The quick brown fox jumps over the lazy Dog. If the dog reacted, was it really lazy?";
console.log(newText.replace("dog", "cat"));
// program 12 end

// String template
let firstName = "Md. Ridoy";
let lastName = "Mollik";

let fullName = `Welcome to ${firstName} ${lastName}`;
console.log(fullName);
//////////////////////////////////////////
let price = 10;
let VAT = 0.25;

let total = `Total : ${(price * (1+VAT)).toFixed(2)} `
console.log(total);

let header = "Templates Literals";
let tags = ["template literals","python", "javascript", "es6"];


// program 13 end

