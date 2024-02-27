// reduce

const Nums = [1, 2, 3]

// const myTotal = Nums.reduce( function(acc, curval){
//     console.log(`acc: ${acc} and curval: ${curval}`);
//       return acc + curval
// }, 0);

//using with arrow function

const myTotal = Nums.reduce( (arr, curr) => (arr+curr), 2)

//console.log(myTotal)


//create a add to cart object using reduce
const addToCart = [
    {
    itemname: "Js Course",
    price: 999
    },

    {
    itemname: "Py Course",
    price: 1999
    },

    {
    itemname: "Ts Course",
    price: 2999
    },

    {
    itemname: "Go Course",
    price: 3999
    }
]

const totalPayable = addToCart.reduce( (arr, item) => (arr+item.price), 0);
console.log(totalPayable);