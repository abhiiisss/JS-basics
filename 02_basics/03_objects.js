// singelton
// object.create


//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Abhis", //string
    Age: 22,       // numbers
    email: "abhissharma2281@gmail.com",
    [mySym]: "mykey1", //symbol
    Location: "Mumbai",
    Degree: "CS",
    IsLoggedIn: false,  //boolean
    

}

//console.log(JsUser.email); // oneway to access the object
//console.log(JsUser["email"]); //main way to access the objects

//console.log(JsUser[mySym]); //accessing symbol, we don't use double quotes here
//console.log(typeof JsUser[mySym]);


JsUser.email = "abhisheksharma@gmail.com" // it uses to change the values inside object
//console.log(JsUser);

//Object.freeze(JsUser) .// it is used to freeze the object so no on could change the values inside of it
//JsUser.Age = 23
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
}


JsUser.greetingtwo = function(){
    console.log(`Hello JS User, ${this.name}`); // using backticks(`) for string interpolation
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());