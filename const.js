// * CONST
/*
    ? Const is used to declare those variables when you know it's value is not going to be changed and remains constant.
    ? It is also block scoped just like 'let'
    ? Variable declared with const is not accessible through window object [ window.a  NOT-ACCESSIBLE]
*/

/* ===================*/
// ! Normal Scenario
/* ===================*/

// Try one example at a time

/* --------------------------------------------*/

const a = "Constant"; //Declare + assign
console.log(a); // Output: Contant

/* --------------------------------------------*/

// const a; //Declare
// a = "Constant"; //Assign
// console.log(a); // Output: SyntaxError: Missing initializer in const declaration

// ? Const variable should be assigned at the time of declaration or it throws error. Either assign a value or make it undefined.

/* --------------------------------------------*/

/* ===================*/
// ! Scope Scenario
/* ===================*/

/* --------------------------------------------*/

// {
//   const a = "Visible in block scope";
//   console.log(a); // Output: Visible in block scope
// }
// console.log(a); // Output: ReferenceError: a is not defined

/* --------------------------------------------*/

// function test() {
//   const num = 92; // Output: 92
//   console.log(num);
// }
// test();
// console.log(num); // Output: ReferenceError: num is not defined

/* --------------------------------------------*/

/* =================================*/
// ! Mutable or Immutable Scenario
/* =================================*/

/* --------------------------------------------*/

// const obj = {
//     name: "yousuf"
// };
// console.log(obj); // {name: "yousuf"}
// obj.age = 22;
// console.log(obj); //{name: "yousuf", age: 22}

// ? Using const means that the variable will always have a reference to the same object or value at the time of declaration.
// ? It cannot be reassigned as it's reference is immutable.
// ? But the const value can change hence it is mutable.

/* --------------------------------------------*/

// const arr = ["Pak", "China", "Turkey"];
// console.log(arr); // Output: ["Pak", "China", "Turkey"]
// arr.push("Iran");
// arr.unshift("UAE");
// console.log(arr); // Output: ["UAE", "Pak", "China", "Turkey", "Iran"]s

// ? Same goes for arrays
/* --------------------------------------------*/

// const arr = ["yousuf"];
// console.log(arr); // Output: ["yousuf"]
// arr = [10, 20]; // Output: TypeError: Assignment to constant variable.
