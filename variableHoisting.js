// * VARIABLE HOISTING
/*
    ? HOISTING is a default behavior of JS which moves all variable and function declaration to the top of their scope.
    ? Variable declaration goes to the top below the function declaration.
*/

/* ===================*/
// ! `Var` Scenario
/* ===================*/

// Try one example at a time

/* --------------------------------------------*/

var a; // Declare
a = "Yousuf"; // Initialize
console.log(a); // Output: Yousuf

/* --------------------------------------------*/

// var a; // Declare
// console.log(a); // Output: Undefined
// a = "Yousuf"; // Initialize

/* --------------------------------------------*/

// console.log(a); // Undefined
// var a = 2; // Declare
// console.log(a); // Output: 2

/* --------------------------------------------*/
/* --------------------------------------------*/

/* ===================*/
// ! `Let` Scenario
/* ===================*/

/* --------------------------------------------*/

// let a; // Declare
// a = "Yousuf"; // Initialize
// console.log(a); // Output: Yousuf

/* --------------------------------------------*/

// let a; // Declare
// console.log(a); // Output: Undefined
// a = "Yousuf"; // Initialize

/* --------------------------------------------*/

// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 2; // Declare
