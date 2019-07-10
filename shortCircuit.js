// * SHORT CIRCUIT EVALUATION
/*
    ? Short circuit evaluation is the use of logical operators in a way to break (short circuit) between a statement.
    ? Two important aspects of logical operators in JS is that they evaluate from left to right, and they short-circuit.
*/

// Try one example at a time

/* ===================*/
// ! Logical OR (||)
/* ===================*/

// ? In Logical OR operator if the first operand is true, JS will short-circuit and not even look at the second operand.

/* --------------------------------------------*/

var user = {
    name: 'Yousuf',
    age: 22
}
console.log(user.job || 'unemployed'); // Output: 'unemployed'

// ? In this example we want to check the user job. But we don't know it's object has job property or not.
// ? Here there isn't any job property JS will consider checking the other condition which is the last hence 'unemployed' return true and it gets printed.

/* --------------------------------------------*/

// var user = {
//     name: 'Yousuf',
//     age: 22,
//     job: "developer"
// }
// console.log(user.job || 'unemployed'); // Output: 'developer'

// ? So || did the work. As the user have job property JS didn't go any further as first condition is true.

/* --------------------------------------------*/

// var a; //Undefined means it would return false
// var b = null; // Null (false value)
// var c = undefined; // undefined (false value)
// var d = 4; // Number (true value)
// var e = 'five'; // String (true value)

// var f = a || b || c || d || e;

// console.log(f); // Output: 4

// ? As the second last condition returns true the statement breaks at var `d` and doesn't goes to check e.

/* --------------------------------------------*/

/* ===================*/
// ! Logical AND (&&)
/* ===================*/

/* --------------------------------------------*/

// let online = true;
// if (online) {
//     alert("Works");
// }

// ? Above code can be use as a short circuit written below

// online && alert("Works here too!!");

// ? Both works the same

/* --------------------------------------------*/

// var user = {

// }
// console.log(user.name && 'Welcome User'); // Output: undefined

/* --------------------------------------------*/

// var user = {
//     name: "Yousuf"
// }
// console.log(user.name && 'Welcome User'); // Output: Welcome User

// ? Here we want to greet if the user if he exist in obj.