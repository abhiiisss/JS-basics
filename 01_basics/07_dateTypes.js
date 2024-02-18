// Date

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2024, 2, 15, 5, 40)
console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toLocaleString());

let MyCreatedNewDate = new Date("01-26-2024")

console.log(MyCreatedNewDate.toLocaleDateString());


//Timestamp
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

MyCreatedNewDate.toLocaleString('default',{
    weekday:"long",
})