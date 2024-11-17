const accountId = 144553 
let accountEmail = "vivekk956@gmail.com"
var accountPassword ="12345"
accountCity ="Jaipur";  // this is not good way to declare

let accountState; // undefined

//accountId =2
accountEmail ="qwer";
accountPassword ="123123";

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
/**
 * Prefer not to use var
 * because of issue in block scope and functional scope
 */