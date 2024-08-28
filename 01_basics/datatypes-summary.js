// Primitive datatype
// 7 types : String , Number, Boolean, null, undefined, symbol, bigInt

const score = 100

const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail = undefined;

const id = Symbol('123')
const anotherId  = Symbol('123')

console.log(id === anotherId);

const bigNumber = 26578956546645678587n
// Reference (non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","doga", "nagraj"]
let myObj = {
    name: "farhan",
    age: 22,
}

const myFunction = function(){
   console.log("Hello World! Inside the function");
   
}


console.log(typeof outSideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction)
console.log(typeof myObj);

myFunction();


    
    
    
    
