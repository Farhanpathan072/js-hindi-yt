const myNums = [1, 2, 3, 4]

// const myTotal= muNums.reduce( function (acc, curval)  {  
//     console.log(`accumulator: ${acc} and current value:${curval} `);
    
//     return acc + curval
// }, 0)    // Note: everytime the the reduce() calls the function called reducer ,, initial value we are providing is 0 
               // to the  reduce method
 
const myTotal = myNums.reduce( (acc, curval) => acc + curval,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"app develoopment course",
        price:2999
    },
    {
        itemName:"mobile course",
        price:8999
    },
    {
        itemName:"Data Science course",
        price:9999
    }
]
const total_Price_toPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(total_Price_toPay);
