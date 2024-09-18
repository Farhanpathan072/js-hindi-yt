const coding = ["js", "ruby", "java", "python"]


// <-----------------variation 1 ---------------->
// coding.forEach( function (val) {
//     console.log(val);
    
// })




// <-------------------- variation 2 --------------->
// coding.forEach( (val) => {
//     console.log(val);
    
// } )

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)


// coding.forEach( (item, index, array) => {
//     console.log(item, index, array);
    
// } )

const myCoding = [
    {
        languangeName: "javascript",
        languageFileName:"js"
    },
    {
        languangeName: "java",
        languageFileName:"java"
    },
    {
        languangeName: "C++",
        languageFileName:"cpp"
    }
]
myCoding.forEach( (item) => {
   console.log(item.languangeName);
   
} )