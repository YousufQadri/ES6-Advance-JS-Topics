// * DESTRUCTURING
/*
    ? Destruction is a special syntax which is used to unpack 'array' values and 'object' properties in to variables easily.
    ? Use [] for Array destructuring
    ? Use {} for Object destructuring
*/

/* ===================*/
// ! Array Destructuring
/* ===================*/

// Try one example at a time

/* OLD Way (ES5) */

var arr = ["Pak", "China", "Turkey"];

var a = arr[0];
var b = arr[1];
var c = arr[2];

console.log(a); // Output: Pak
console.log(b); // Output: China
console.log(c); // Output: Turkey

/* --------------------------------------------*/

/* NEW way (ES6) */

// let arr = ["Pak", "China", "Turkey"];

// let [a, b, c] = arr;

// console.log(a); // Output: Pak
// console.log(b); // Output: China
// console.log(c); // Output: Turkey

/* --------------------------------------------*/

/* ===================*/
// ! Object Destructuring
/* ===================*/

/* OLD Way (ES5) */

// var obj = {
//     name: "yousuf",
//     age: 22
// }

// var a = obj.name,
//     b = obj.age;

// console.log(a, b); // Output: yousuf 22

/* --------------------------------------------*/

/* NEW way (ES6) */

// let obj = {
//     name: "Yousuf",
//     age: 22
// }

// let { name, age } = obj;

// console.log(name, age);

// ? In object Destructing variable name has to be the same as of object key name.
