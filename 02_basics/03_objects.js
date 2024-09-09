// singleton object made with constructor only.
Object.create // object created using constructor.
// objects are created using two types --> 1. Literals (not a singleton object)
                                    // --> 2. Constructor (Singleton object
// object literals
const mySym = Symbol("key1")

const JsUser = {
    name:"farhan",
    "full Name": "Pathan Farhan",
    [mySym]:"mykey1",
    age: 22,
    location: "surat",
    email:"Farhan@meta.com",
    isLoggedIn : false,  
    lastLoginDays:["Monday", "Saturday"] // array in object
}
console.log(JsUser.email)    // accessing using dot opeartor(.) first approach 
console.log(JsUser["email"])  // accessing object values second approach
// console.log(Jsuser.full Name)  // Throws error cant access this case with dot operaator. so use brackets instead..
console.log(JsUser["full Name"])  // Throws error cant access this case with dot operaator. so use brackets instead..
console.log( JsUser[mySym]);

JsUser.email = "farhan@chatgpt.com"
// Object.freeze(Jsuser)
JsUser.email = "farhan@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JSuser");
    
}
JsUser.greetingTwo = function(){
    console.log(`hello Jsuser, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
