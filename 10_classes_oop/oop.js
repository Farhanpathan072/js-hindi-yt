const user = {
    username:"farhan",
    loginCount: 9,
    signedIn: true,

    // getUserDetails: function(){
    //     //console.log("Got User details from database");
    //     // console.log(`Username:${this.username}`);
    //     console.log(this);
        
    // }

}



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
        this.username = username 
        this.loginCount = loginCount
        this.isLoggedIn = isLoggedIn
        return this
}

const userOne = new User("Farhan", 12, true)
const userTwo = new User("ChaiAurcode", 11, false)
console.log(userOne);
console.log(userTwo);
