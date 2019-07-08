// * REST PARAMETERS
/*
    ? REST & SPREAD operators both are defined by `...` but there usage makes them different.
    ? If we don't know the number of values a user is going to pass in parameters, we use Rest Parameters.
    ? The word `rest` defines itself that it gathers all the rest of value passed to a function.
*/

// Try one example at a time

/* ===========================*/
// ! Without REST parameters
/* ===========================*/

/* --------------------------------------------*/

function sum(a, b) {
    return a + b;
}

console.log(sum()); // Output: NaN
console.log(sum(5, 4)); // Output: 9
console.log(sum(5, 4, 10)); // Output: 9

// ? If the number of arguments are greater than the parameters it neglects that extra argument and store it in an argument list.
// ? Here all the values are stored in an argument array which is not a real array.
// ? In this situation Rest Parameters come in handy.

/* --------------------------------------------*/

/* ===========================*/
// ! With REST parameters
/* ===========================*/

/* --------------------------------------------*/

// function sum(...rest) {
//     let total = 0;
//     for (let i = 0; i < rest.length; i++) {
//         total += rest[i];
//     }
//     return total;
// }

// console.log(sum()); // Output: 0
// console.log(sum(5)); // Output: 5
// console.log(sum(5, 9)); // Output: 14
// console.log(sum(10, 5, 4, 1, 2)); // Output: 22

// ? No matter the amount of arguments user passes it handles by making an ARRAY of user values.
// ? REST parameters are real-array means array methods like map, forEach push or pop can be applied on it directly;
// ? NOTE: Rest parameter have to be the last argument, as its job is to collect all the remaining arguments into an array.
// ? In short: Only the last parameter can be a "rest parameter".