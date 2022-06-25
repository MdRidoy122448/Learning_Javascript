function greeting(name){
    console.log(("Hello " + name));
}

function userNameInput(callback){
    let name = "ridoy";
    callback(name);
}
let notun =  userNameInput(greeting)
console.log(notun);