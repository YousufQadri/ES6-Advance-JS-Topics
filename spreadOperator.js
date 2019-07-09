// * SPREAD OPERATOR
/*
    ? REST & SPREAD operators both are defined by `...` but there usage makes them different.
    ? It provides the ability to expand iterable objects into multiple elements.
    ? Iterables objects are anything that can be looped over such as strings, arrays, and sets
    ? The most common use is probably combining arrays.
*/

// Try one example at a time

/* ===========================*/
// ! Without SPREAD Operator
/* ===========================*/

/* --------------------------------------------*/

const shapes = ["circle", "square", "rectangle"];
const objects = ["pen", "pencil", "book"];

const shapesWithObjects = shapes.concat(objects); // Using concat we combine 2 arrays in a new one.

console.log(shapesWithObjects); // Output: [“circle”, “square”, "rectangle" , “pen”, “pencil”, “book]

// ? To merge 2 array values we used concat.

/* --------------------------------------------*/

/* ===========================*/
// ! With SPREAD Operator
/* ===========================*/

/* --------------------------------------------*/

// const shapes = ["circle", "square", "rectangle"];
// const objects = ["pen", "pencil", "book"];

// const combination = [...shapes, ...objects];
// console.log(combination); // Output: ["circle", "square", "rectangle", "pen", "pencil", "book"]

// ? Here with spread operator as the name defines first spread shapes array values and then object array values in a new one
// ? We can add other values or array in between these spread operators.

/* --------------------------------------------*/

// const items = ["This", "is", "a", "sentence"];
// console.log(items); // Output: ["This", "is", "a", "sentence"]
// console.log(...items); // Output: This is a sentence

// ? WHY The output came as a string.??
// ? When we used the spread operator it expanded or plucked out all the array values.
// ? Then the values are passed over to console.log() function parameter. That's why it's acting like a string
