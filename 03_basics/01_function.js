
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
console.log(loginUserMessage(`samy`))  
