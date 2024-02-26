// for each loop 

const coding = ["python", "numpy", "pandas", "scikit"]

// using for-each with normal function
coding.forEach(function(val){
     //console.log(val);
})


// using for-each with arrow function
coding.forEach( (val) => {
    //console.log(val);
})

//using function with for each loop

function printMe(val){
    //console.log(val);
}

coding.forEach(printMe);

// using for-each to get data from object which is array

const code = [
    {
        lan : "javascript",
        short : "js"
    },

    {
        lan : "typescript",
        short : "ts"
    },

    {
        lan : "python",
        short : "py"
    }
]

code.forEach((co) => {
   console.log(co.lan);
})