const marvel_heros = ["thor","Ironman","Spiderman" ]
const dc = ["superman", "flash", "batman"]

// marvel_heros.push(dc) 
console.log(marvel_heros);
console.log(marvel_heros[0]);
console.log(marvel_heros[1]);
console.log(marvel_heros[3]);
console.log(marvel_heros[4]);
// console.log(marvel_heros[3][1]);

// const allheros = marvel_heros.concat(dc)
// console.log(allheros);

const all_new_heros = [...marvel_heros, ...dc]
console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6,7, [4, 5]]]

const real_another_array = anotherArray.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Farhan"))
console.log(Array.from("Farhan"))
console.log(Array.from({name: "farhan"}))  // Interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
