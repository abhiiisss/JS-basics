// Immediately Invoked Function Expressions(IIFE)

(function db (){ //named IIFE
    console.log('Database Connected');
}) ();


// () () -- the first bracket represents here paranthesis for function and the second bracket represents the execution of that function, we can see that in the above code --iife

// we use iife to remove the pollution of global scope

// we end the invoked iife using semicolon

( () => { 
console.log('connection successfull');
})(); //iife with arrow function


( (name) => { //Unnamed IIFE
console.log(`connection successfull, ${name}`);
})("abhis"); 
//iife with arrow function here we have given arguments and parameters