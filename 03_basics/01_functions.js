// Functions

function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("S");
} // a set o f codes which we had to execute repedeatedly

// sayMyName()


//Add two numbers using a function
// function addTwoNumbers(a, b){

//        console.log(a + b);
// }

function addTwoNumbers(a, b){

    // let result = a + b
    // return result

    return a + b
}

const result = addTwoNumbers(5, 1)

// console.log("Result:", result);


function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage('Shubham'));

function loginUserMessage(username){
    if(username === undefined){
        //  console.log("Please enter a UserName");
         return
    }
    return `${username} just logged in`
}


function loginUserMessage(username){
    if(!username){ // same as username === uundefined
        //  console.log("Please enter a UserName");
         return
    }
    return `${username} just logged in`
}

function loginUserMessage(username = "ajay"){ //It will never let the output be empty
    if(!username){
        //  console.log("Please enter a UserName");
         return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Anil")); // overwrites the current code

// Rest Operator ...

function calculateMyCart (...num1){ // here the three dots represent the rest operator which returns all arguments in the output as a string
    return num1
}

console.log(calculateMyCart(200,300,400));


function calculateCart (val1, val2, ...num2){ // here the three dots represent the rest operator which returns all arguments in the output as a string
    return num2
}

 console.log(calculateCart(200,300,400,2000));
 // here the val1 and val2 does not comes in output as the comes before the num2 in rest operator 

 const user = {
    username : "abhis",
    age : 22

 }

 function handleObject(anyObject){
        console.log(`Username is ${anyObject.username} and his age is ${anyObject.age}`);
 }


// handleObject(user) //passing objects by creating variables

//handleObject({ //passing objects directly
   // username: "random",
    //age: 27
// })

//creating an array and a function to pass an array
const myArray = [20,30,40,50]

function handleArray (arrayHandling){
    return arrayHandling[1]
}

//console.log(handleArray(myArray)); //passing arrays using variables

console.log(handleArray([200,400,500,100]));


