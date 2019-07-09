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
// ? Here all the values are stored in an argument array-like object which is not a real array.
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

/* --------------------------------------------*/

/* =====================================*/
// ! REST Parameters with Destructuring
/* =====================================*/

/* --------------------------------------------*/

// let obj = {
//     name: "Yousuf",
//     age: 22,
//     clas: "Advance JS",
//     num: 123456,
//     address: "abc street",
//     code: 1111
// }

// let { name, age, clas, ...contact } = obj;

// console.log(name);
// console.log(age);
// console.log(clas);
// console.log(contact);

// ? Here we are also using REST parameters. Don't think REST is only limited to function parameters. NO!
// ? As in this scenario, we are using REST in an object. But as I told you already in the beginning the usage ... define it is REST or SPREAD.
// ? In this example, first three variables are bieng plucked from the object.
// ? When taking a single values from the object we have to use same name as of the key.
// ? The last parameter `contact` grabs all the rest of the object values.