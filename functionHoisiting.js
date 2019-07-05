// * FUNCTION HOISTING
/*
    ? HOISTING is a default behavior of JS which moves all variable and function declaration to the top of their scope.
    ? Function declaration goes to the very top above the variable declaration.
*/

/* ===================*/
// ! Scenario
/* ===================*/

// Try one example at a time

/* --------------------------------------------*/

function normal() {
  console.log("Normal working function");
}
normal(); // Output: Normal working function

/* --------------------------------------------*/

// hoist();

// function hoist() {
//   console.log("Hoisted"); // Output: Hoisted
// }
// ? Function called before declaration but still gives output because function's body also lies in it's declaration so gets hoisted.

/* --------------------------------------------*/

// var a = square(5);
// console.log(a); // Output: 25

// function square(num) {
//   return num * num;
// }
