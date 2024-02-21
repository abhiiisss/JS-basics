// scope
// Curly braces with any function or with any if-else condition is known as scope 

let a =300 //global scope

if(true){
     a = 10 // local scope
     //const b = 20,
   //  var c = 30,
}

//console.log(a);


// function one(){
//     const username =  "abhishek"


//     function two(){
//         const website = "portfolio"
//          console.log(username); // we can access this anywhere in the function as it is a global scope for this function
         
//     }
 
//     // console.log(website); //we cannot access this here cuz it is a local scope of function two, we can execute it in in function two

//     two()
// }

// one()


if(true){
    const username = "abhis"

     if(username === "abhis"){
        const website = " yt"
        // console.log(username + website);
     }

}

console.log(addOne(5)); // hoisting

function addOne(num){
    return num + 1
}

console.log(addTWo(5));

const addTWo = function(num){
      return num + 2
}

