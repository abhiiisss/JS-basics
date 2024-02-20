// const tinderUser = new Object() //singleton object

const tinderUser ={} // Non-singleton Object

tinderUser.id ="123abc"
tinderUser.name ="Abhis"
tinderUser.IsLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "random@gmail.com",
    fullname: {
        UserFullName: {
            firstName : "Abhishek",
            lastName : "Sharma"
        }
    }
}   // Nested Objects

// console.log(regularUser.fullname.UserFullName.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

//const obj = Object.assign({}, obj1, obj2, obj3) //object assign or object merge

const obj ={...obj1, ...obj2}; //spread method from array to merge array

//console.log(obj);

const newUser = [

    {
        id: 123,
        email: "random@gmail.com" 
    },

    {
        id: 456,
        email: "random@gmail.com" 
    },

    {
        id: 789,
        email: "random@gmail.com" 
    },

    {
        id: 101,
        email: "random@gmail.com" 
    }
    
] // database type objects

console.log(newUser[1].email); //accesing them in the terms of string
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //accessing the keys from object which comes as a string
console.log(Object.values(tinderUser)); 
//accessing the values from object which comes as a string

console.log(Object.entries(tinderUser)); //it gives the each key value pair in strings

console.log(tinderUser.hasOwnProperty("IsLogged")); // it checks whether the have this value or not and gives the output in boolean





