const accountId = 144533
let accountEmail = "abhis@gmail.com"
var accountPassword = "937255"
accountCity = "Jaipur"
let accountState;


// accountId = 2312 // you cannot reassign values when the are created using const(it is sort of tuple from python)

accountEmail = "ab@gmail.com"
accountPassword = "1245780"
accountCity = "Mumbai"

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

