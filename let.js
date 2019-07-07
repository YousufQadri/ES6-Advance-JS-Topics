// * LET
/*
    ? Let is used to declare variables just like var BUT it is block scoped. Means it is not accessible outside it's block.
    ? Variable declared with var is accessible through window object [ window.a  ACCESSIBLE]
    ? Variable declared with let is not accessible through window object [ window.a  NOT-ACCESSIBLE]
*/

/* ===================*/
// ! Normal Scenario
/* ===================*/

// Try one example at a time

/* --------------------------------------------*/

console.log(a);
let a = "oops"; //Output: ReferenceError: Cannot access 'a' before initialization

/* --------------------------------------------*/

// let a;
// console.log(a); //Output: undefined
// a = "yousuf";

/* --------------------------------------------*/

/* ===================*/
// ! Scope Scenarios
/* ===================*/

/* --------------------------------------------*/

// let a = "outside";
// console.log(a); // Output: outside
// {
//   let a = "inside";
//   console.log(a); // Output: inside
// }
// console.log(a); //Output: outside

// ? Same named variable can be declared with var and let in different scopes. (Not recommended)

/* --------------------------------------------*/

// let x = "out";
// console.log(x); // Output: out

// function check() {
//   let x = "in";
//   console.log(x); // Output: in
// }
// check();
// console.log(x); // Output: out

/* --------------------------------------------*/

// var a = "Yousuf";
// let b = "Qadri";

// console.log(window.a); // Output: Yousuf
// console.log(window.b); // Output: undefined

// ? let variables cannot be accessed in the window object because they cannot be globally accessed.

/* --------------------------------------------*/

// for (let i = 0; i < 10; i++) {
//   console.log(i); // Display 0 - 9 because i is accessible in the current scope.
// }
// console.log(i); // Output: ReferenceError: i is not defined
