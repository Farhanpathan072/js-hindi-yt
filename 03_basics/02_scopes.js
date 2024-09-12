let a = 300

if(true){
    let a = 10
    const b = 20
     
    // console.log(`INNER:  ${a}`);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
  const username = `farhan`

  function two(){
       const website = `youtube`
       console.log(username);
  }
    //  console.log(website);
     two()
}

one()

if(true){
     const username = `farhan`
     if(username === `farhan`){
        const website = `google`
        console.log(`${username}  ${website}`);
        
     }
     // console.log(website);
     
}
// console.log(username);
// <------------------------ interesting ----------------------->

console.log(addone(5))           // execute no matter if the call is comes first here..
function addone(num){            // Simple function defintion...
     return num + 1
}

addTwo(5)                  // throws error because accessing addtTwo variable before its declaration... 
const addTwo = function(num){   // when variable store the function it is called an expression.
     return num + 2
}


