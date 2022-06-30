// JS scope
{
    let number1 =  5;
}
// console.log(number1)

for(let i = 0; i <= 10; i++){
    console.log(i)
    let a = 80;
}
// console.log(i)//ReferenceError
// console.log(a)//ReferenceError

if(true){
    let b = 100;
    console.log("b is block scope, it can not be access from outside the block");
}
//console.log(b)//ReferenceError

function functionalScope(){
    var x = 10;
    let y = 50;
    const z = 75;
    /*
    No matter variables with var, let, or const, everyone has functional scope. That's why it will can't be access from outside the function. It is possible to get access inside this function.
    */
}
//console.log(x);//
//console.log(y);//
//console.log(z);//
