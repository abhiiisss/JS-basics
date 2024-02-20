// Functions

function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("S");
} // a set if codes which we had to execute repedeatedly

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
         console.log("Please enter a UserName");
         return
    }
    return `${username} just logged in`
}


function loginUserMessage(username){
    if(!username){ // same as username === uundefined
         console.log("Please enter a UserName");
         return
    }
    return `${username} just logged in`
}

function loginUserMessage(username = "ajay") //It will never let the output be empty
    if(!username){
         console.log("Please enter a UserName");
         return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Anil")); // overwrites the current code

