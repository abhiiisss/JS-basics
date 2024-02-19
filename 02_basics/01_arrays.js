//Arrays

const myArr = [0,2,3,5,7,"abhis"]

const myArr2 = new Array(9,8,7,6)

// console.log(myArr2);
// console.log(myArr[1]);


/// Array Methods

// myArr.push(1) //adds a data
// myArr.pop()   //deletes the last data

// myArr.unshift(1) //adds data at the start 
// myArr.shift() //removes data from the start

// console.log(myArr.includes(9)); //returns the boolean value about the existence of the data.
// console.log(myArr.indexOf(3)); //returns the index of the data

// const newArr = myArr.join() // joins it and returns the value in string format
// console.log(myArr);
// console.log(typeof newArr);

//-- slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3) 
console.log("C ", myArr);
console.log(myn2);