//This is what is meant by hoisting in var
//var carName;
//carName = undefined;
carName = "Volvo";
var carName;
console.log(carName)
//possible

//This is what is meant by hoisting in let
//let bikeName;
/*Variable defined with let are also be hoisted on the top of the block, but not 
initialized, that's why people think let not be hoisted  */

/*
bikeName = "Honda";
let bikeName;
console.log(bikeName);
*/
//impossible

//This is what is meant by hoisting in const
//const bycycleName;
/*Variable defined with const are also be hoisted on the top of the block, but not initialized, that's why people think const not be hoisted  */

/*
bikeName = "Honda";
const bycycleName;
console.log(bikeName);
*/
//impossible

