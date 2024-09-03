const name = "farhan"
const repoCount = 50

console.log(name + repoCount + "Value");
// this is string interpolation use this format `  `
console.log(` My Name is ${name} my repoCount is ${repoCount}`);

// other way of declaring string
const gameName = new String('farhan-p-com');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); // give 'h' as h is on index 3.
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4) // returns string from start index and given last index which is exclusive.
// console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "    farhan    "
console.log(newStringOne);
console.log(newStringOne.trim());  // removes unnecessary spaces..

const url = "https://farhan.com/farhan%20pathan"

console.log(url.replace('%20', '-'))

console.log(url.includes('farhan')) // return true 
console.log(url.includes('jay')) // return false

console.log(gameName.split('-'));  // returns array of string based on given arguments..

