const user ={
    username:"farhan",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
        
        
    }

}
// user.welcomeMessage()
// user.username = `Sam`
// user.welcomeMessage()

// console.log(this);

// function chai (){
//     let username ="farhan"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username ="farhan"
//     console.log(this.username);

// }

const chai = () => {
    let username ="farhan"
    console.log(this);

}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // implicit return
// const addTwo = (num1, num2) =>  (num1 + num2) 
const addTwo = (num1, num2) =>  ({username:"farhan"}) // you have to use () for wrapping object and then you can return object in arrow function.

console.log(addTwo(3,4))

// const myArray =  [2, 5, 6, 8, 7]

// myArray.forEach(()=> ())