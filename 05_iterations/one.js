// for loop

//   for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
//   }



  for(let i = 0; i<=10; i++){
    const element = i;
    if (element == 5) {
        //console.log("5 is best");
    }
    //console.log(element)
  }


  /// printing table uptill 10 using javascript
  for (let i = 1; i <= 10; i++) {
    //console.log(`outer loop is ${i}`);

    for (let j = 1; j <= 10; j++) {
        //console.log(`outer loop is ${i} and inner loop is ${j} `);
        //console.log(i + ' *', j + ' = ' + i*j );

    };


  };


  let myArr = ["ironman", "cap america", "thor"]
 //console.log(myArr.length);
  for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element);
  }


// break and continue

//break
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        //console.log("achieved 5");
        break;
    }
    //console.log(`value of index is ${index}`);
}

//continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("achieved 5");
        continue;
    }
    console.log(`value of index is ${index}`);
}