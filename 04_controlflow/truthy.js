//// Truthy Values
// true, "0"(zero inside string is a truthy value), 'false', " ", [], {}, function(){}


//// Falsy Values
// false, 0, , -0, BigInt 0n, "", null, undefined, NaN


const email = " "

if (email) {
    //console.log("we got the email");
} else {
    //console.log("empty");
} /// the output shows the got the email cuz the input is truthy value.


if (email.length === 0) {
    //console.log("email success");
} else {
    //console.log("empty");
}

const obj = {};

if (Object.keys(obj).length === 0) {
    //console.log("empty object");
} else {
   // console.log("not empty");
}

//nullish coalescing operator(??): null undefined


let val;

//val = 5 ?? 10
//val = null ?? 10
//val = undefined ?? 10
val = null ?? 15 ?? 20

console.log(val);

//Terniary operator

// condition ? true:false

const price = 100
price <= 100 ? console.log("greater than 80"):console.log("less than 80");