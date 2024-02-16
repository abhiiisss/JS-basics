// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const Value = "Abhis"; //string

const score = 100;  //Number

const scoreValue  = 100.3; //Number(float)

const  isLoggedIn = false; //Boolean

const outsideTemp = null; //Null

let userEmail; //Undefined

const bigInt = 39894749839n; //BigInt

const id = Symbol('2')
const anotherId = Symbol('2')

// console.log(id === anotherId); // Symbol(it defines anything as Unique)


 
// Refrence(Non Primitive)

// Array, Objects, Functions

const newArray = ["Notion","Annoted", "Rhyme"]; // Array

let newObj = {
    name: "Abhis",
    age: 22
} //object


const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);