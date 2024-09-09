const tinderUser = new Object()

 tinderUser = {}
 tinderUser.id = "123xyz"
 tinderUser.name = "Sam"
 tinderUser.isLoggedIn = "false" 

// console.log(tinderUser);

const regularUser = {
    email:"Some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"farhan",
            lastname:"pathan"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4)
const obj3 = {...obj1,...obj2}
console.log(obj3);

const users =[
    {
        id: 1,
        email:"f@gmail.com"
    },
    {

    },
    {

    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));  //  very important returns array of keys..
console.log(Object.values(tinderUser));  //  very important returns array of values..
console.log(Object.entries(tinderUser));  //  very important returns array of values..

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

