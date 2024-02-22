// Controlflow
// the concept of giving permissions to certain code is known as controlflow.
// for ex: the set of login code is running while the user logs in and the set of another code running when the user logs out

// comparison operator 
// <, >, <=, >=, ==, !=, !==, ===(strict check checks type)


// If-else conditions 

//checking the temperature uisng if-else conditions

const temperature = 43

if(temperature === 30){
      //console.log("the temperature is on the level");

}  else{
    //console.log("the temperature is low from the actual level");
}

//console.log("the condition is executed");

// using if-else with scopes

const score = 200;

if (score > 100) {
    const power = "fly"
    //console.log(`you can ${power}`);
} else {
   // console.log(`You cannot ${power}`);
}

//console.log(`you can ${power}`); // we cannot this here cause power is local scope to if --but if we have used var to define the power it would have given us the output without any error cuz var creates any variable as a global variable




const balance = 1000;

//if (balance > 500) console.log("balance is enough"); //short-hand notation -- implicit scope

// nested if else conditions 
 
if (balance < 500) {
    
      //console.log("less than 500");

} else if (balance < 750) {
    
      //console.log("less than 750");

} else if (balance < 900) {
    
      //console.log("less than 900");

} else{
    //console.log("balance is less than 1200");
}




// logical operators with if conditions we use two logical operators while defining it ex: &&, ||.


const IsUserLoggedIn = true
const DebitCard = true
const IsUsedGoogle = false
const IsUsedEmail = true


if(IsUserLoggedIn && DebitCard){ //using AND operator
         console.log("user is welcome");
}


if(IsUsedGoogle || IsUsedEmail){ //using OR operator
         console.log("user is authentic");
}


