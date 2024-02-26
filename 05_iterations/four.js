//for in

//using for in loop for object
const myObject = {
    js : "javascript",
    py : "python",
    ty : "typescript",
    go : "golang"
}

for (const key in myObject) {
    
       //console.log(`${key} is the shortcut for ${myObject[key]}`); 
    }


//using for in loop in array
//here array have pre defined index as there keys, so if you only call key you will get index in the output
const programming = ["js", "py", "ty", "go"]

for (const key in programming) {
    console.log(programming[key]);
}

//we cannot do iteration on maps