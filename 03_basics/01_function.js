
function sayMyName(){
    console.log("F");
    console.log("A");
    console.log("R");
    console.log("H");
    console.log("A");
    console.log("N");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
addTwoNumbers(3, "4")   //----------->  returns 34 not 7


const result = addTwoNumbers(3,5)     // ------------------> returns undefined not 8... 
function addTwoNumbers(number1, number2){
    
    let result = number1 + number2
    return result  // -------> if return is ude then only it will show correct answer and we can store it in a variable.
}
// console.log(`result: ${result}`);

function loginUserMessage(username =`farhan`){
    if(username === undefined){
        console.log(`Please enter a username`);
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("farhan"))
// console.log(loginUserMessage(""))  // -------------> returns just logged in
// console.log(loginUserMessage(`samy`))  


function calculateCartPrice(val1, val2, ...num1){
    // console.log(val1, val2);
    
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));  // 200 will pass in val1 400 will pass in val2, and rest values will be pass in num1

const user ={
    username: "Farhan",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({  // ----------------> directly passing object in function.
    username:"sam",
    price:399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000])); // ---------> passing directly array to function as argumnet

