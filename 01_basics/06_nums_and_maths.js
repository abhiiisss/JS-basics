const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); //converting num into string

// console.log(balance.toFixed(2)); //using fixed

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3)); //using Precision

const hundreds = 1000000
// console.log(hundreds.toLocaleString());// getting the numbers in us counting

// console.log(hundreds.toLocaleString('en-IN'));// getting the numbers in indian counting



//+++++++++++++++++++ Maths +++++++++++++//

// console.log(Math);

// console.log(Math.abs(-5)); //using absolute

// console.log(Math.round(5.34)); //using round=of

// console.log(Math.ceil(5.34)); //using ceil

// console.log(Math.floor(5.34));//using floor


console.log(Math.random());//using random

//using random for dedicated random values the *10 will give me the output under 10 and the +1 will give the output anywhere between 10 and 1 the output will not be zero.
console.log((Math.random()*10) + 1);
console.log((Math.random()*10 + 1));


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);