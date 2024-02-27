const coding = ["py","js","ty","go"]

// const values = coding.forEach(items => {
//     console.log(items);
//     return items
// });

// console.log(values);
// you cannot take the items into variable and call it outside like a function in for each loop.


//filter -- true/false --it gives the value back alternate of for each(jo true hoga wohi pass hoga)

//let newNums = Nums.filter((num) => {
     //return num > 4
//});
//console.log(newNums);

//using the same with for each

// const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// const newNums = []
// Nums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } );

// console.log(newNums);

// filter method
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//show the book which has history in their genres
let userBooks = books.filter((book) => book.genre === 'History');

//console.log(userBooks);

// show the books which were published after 2000

userBooks = books.filter( (book) => {return book.publish >= 2000});

//console.log(userBooks);


// show the books which were published after 2000 and book is genre is science

userBooks = books.filter( (book) => {
    return book.publish >= 2000 && book.genre === "Science"
});

console.log(userBooks);