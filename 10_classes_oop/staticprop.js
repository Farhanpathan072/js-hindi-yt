class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username:${this.username}`);
        
    }
     static createId(){
        return `_123`
    }
}

const farhan = new User("farhan")
console.log(farhan.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.createId()
