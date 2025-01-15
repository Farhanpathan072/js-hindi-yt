class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
         this._email = value
    }
    
    get password(){
        return `${this._password}farhan`
    }

    set password(value){
        this._password = value
    }
}

const farhan = new User("Farhan@meta.com", "xyz123")
console.log(farhan.password);
console.log(farhan.email);
