// map

const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//add 10 in each values using map function alternate of for each
let myNum = Nums.map( (num) => {
    return num+10
});

// console.log(myNum);

//Chaining -- using 2-3 methods at asingle time in the code ex:- map with map with filter

//add 10 in each values using map add 1 using map again, show values which are above or equal to 40

const newNums = Nums
                .map( (num) => num*10 )
                .map( (num) => num+1 )
                .filter( (num) => num >= 40 );

console.log(newNums);
