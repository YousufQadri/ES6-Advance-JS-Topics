// TEMPLATE LITERALS || STRING LITERALS
/*
    ? Template literals are enclosed with back-ticks (` `) instead of "" || '' quotes.
    ? We can add placeholders for var or even functions like ${variable}
*/
// Try one example at a time

/* ===================*/
// ! Multi Line String
/* ===================*/

// Try one example at a time

/* OLD Way (ES5) */

console.log("Welcome to my\n" +
    "world");

//OUTPUT
//Welcome to my
//world

/* --------------------------------------------*/

/* NEW way (ES6) */

// console.log(`Welcome to my
// world!`);

//OUTPUT
//Welcome to my 
//world!

/* --------------------------------------------*/

/* ==========================*/
// ! Interpolation in String
/* ==========================*/

/* OLD Way (ES5) */

// let name = "Yousuf",
//     age = 22,
//     exp = 2;
//     prof = "Developer";

// console.log("My name is " + name + " and my profession is " + prof + ". I've been working from the age of " + (age - exp));

//OUTPUT
//My name is Yousuf and my profession is Developer. I've been working from the age of 20


/* --------------------------------------------*/

/* NEW way (ES6) */

// let name = "Yousuf",
//     age = 22,
//     exp = 2;
// prof = "Developer";

// console.log(`My name is ${name} and my profession is ${prof}. I've been working from the age of ${age - exp}.`);

//OUTPUT
//My name is Yousuf and my profession is Developer. I've been working from the age of 20.

/* =======================================*/
// ! Using functions in template literals
/* =======================================*/

// ? It is possible to use a function in the template literals but the function should return a value in order to proceed.

// let num = 5;

// function double(num) {
//     return num * num;
// }

// console.log(`Square of ${num} is ${double(num)}`);
