const user = { 
     username : "Abhishek",
     age : 22,

     WelcomeMessage: function () {
        console.log(`${this.username}, Welcome to website`);
        //console.log(this);
     }
}

// user.WelcomeMessage()
// user.username = "sam"
// user.WelcomeMessage()

// console.log(this);

// function random(){
//    let username = "abhis"
//    console.log(this.username);
// }

// random() // here the function gives an output as undefined 


// Arrow function () => {}

const addTwo = (num1, num2) => {
   return num1 + num2
}

console.log(addTwo(2,5));

//implcit returned
//const addThree = (num1, num2) =>  num1 + num2

//const addThree = (num1, num2) =>  (num1 + num2) // another way to write implicit return

const addThree = (num1, num2) =>  ({newUser:"abhis"})

console.log(addThree(7,5));

// if the have wrapped the variable in curly braces{}, then we have to use return, if it is not wrapped in the curly braces then we do not have to use return
