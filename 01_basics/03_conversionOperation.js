let score = "farhan"


// console.log(typeof score);
// console.log(typeof (score));

//let valueInNumber = Number(score) // conversion to number
// console.log(typeof valueInNumber); // print type of valueInNumber 
// console.log(valueInNumber);  // print value of valueInNumber variable
// console.log(typeof score); // print type of score 


// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0


// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// 1 => true
// 0 => false
// "" => false 
// "farhan" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber)

let value = 3
let negValue= -value
// console.log(negValue);

// console.log(2 + 2)
// console.log(2 * 2)
// console.log(2 - 2)
// console.log(2 / 2)
// console.log(2 ** 2)
// console.log(2 % 2)

let str1 = "hello"
let str2 =" farhan"
// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2)
// console.log(1 + "2")
// console.log(1 + 2 + "2") // left to right operation convert hota hai.. if the first word is string then it will convert to string.
// console.log("1" + 2 + 2) // treat as string because first left part is string..that is "1"

// console.log(+true)
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

// let gameCounter = 100
// gameCounter++
// console.log(gameCounter);
// ++gameCounter
// console.log(gameCounter);


let a = 4;
let b = a++  // postfix operation first store the value of a in b which is 4 and increment it..
console.log(`a:${a} b:${b}`);

let x = 5
let y = ++x // prefix operation: first increment the value by 1 and then store it.. 
console.log(`x:${x} y:${y}`);
