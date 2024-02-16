const name = "abhis"
const repoCount = 50

// console.log(name + repoCount + " Values"); usual way of concatinating the values in strings

// ${} - String Interpolation
//(new way of concatinating the strings )
// console.log(`Hello My name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('DS$Abhis')  

//indexing
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

//slicing
const newString  = gameName.substring(0,5);
console.log(newString);

const anotherString = gameName.slice(-7,5)
console.log(anotherString);

//trim
const newstring = "   Abhis   "
console.log(newstring);
console.log(newstring.trim());

//replace
const url = "https://abhis.com/abhishek%20sharma"

console.log(url.replace('%20', '-'));

//includes
console.log(url.includes('abhishek'));

console.log(gameName.split('$'));