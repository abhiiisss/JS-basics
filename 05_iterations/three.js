/// for of loop

let numbers = [1,2,3,4,5]

for (const num of numbers) {
   // console.log(num);
}

// use for loop and remove extra space using continue

let greetings = "Hello World!"

for (const greet of greetings) {
    if (greet === " ") {
        continue;
    }
    //console.log(`Each Char is ${greet}`);
}

//objects are not iterable for for of loop but maps are
//Maps

const map = new Map()
map.set('IN', "India")
map.set('AU', "Australia")
map.set('NZ', "NewZealand")

//console.log(map);

for (const [key, values] of map) {// here we have destructured the array using the box brackets.
    console.log(key);
}


