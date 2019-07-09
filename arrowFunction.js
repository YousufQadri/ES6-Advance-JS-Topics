// * ARROW FUNCTION
/*
    ? Also know as fat arrow function and they are always anonymous.
    ? By using arrow function we can avoid typing keywords "function", "return" & curly braces `{}` (if function returns a single line) 
    ? Arrow functions doesn't have it's own `this`
*/

// Try one example at a time

/* ===========================*/
// ! Classical Function (ES5)
/* ===========================*/

/* --------------------------------------------*/

// Normal Function

function greetings(name) {
    return "Hello " + name;
}

console.log(greetings("Yousuf")); // Output: Hello Yousuf


/* --------------------------------------------*/

// Function Expression

// const greet = function (name) {
//     return "Hello " + name;
// }

// console.log(greet("Yousuf")); // Output: Hello Yousuf

// ? When an anonymous funcion is assigned to a variable it is called function expression.
// ? In function expression only annonymous functions can be assigned.
// ? Functions are instantiated by calling with var name like in the example above.

/* --------------------------------------------*/

/* ===========================*/
// ! Arrow Function (ES6)
/* ===========================*/

/* --------------------------------------------*/

// const myFunc = (name, city) => {
//     console.log(`My name is ${name} & I live in ${city}.`);
// }

// myFunc("Yousuf", "Karachi"); // Output: My name is Yousuf & I live in Karachi.

// ? By using arrow functions, we avoid having to type the keyword "function".

/* --------------------------------------------*/

// const myFunc = name => {
//     console.log(`Hello ${name}`);
// }
// myFunc("Yousuf");

// ?  When arrow function has a single parameter, you don't have to wrap it in round braces. 
// ? Note multiple parameters require to be wrapped up.

/* --------------------------------------------*/

// const myFunc = () => {
//     console.log("Hello World");
// }
// myFunc();

// ? When there are no parameters we have to either put empty round braces '()' or underscore '_' at parameter location.

/* --------------------------------------------*/

// const square = (num) => num * num;

// console.log(square(5));

// ? If the function returns a single value or a single line statement. Curly brackets {} and  keyword "return" can be removed.
// ? In this scenario the fat arrow (=>) replaces "{}" and "return" keyword
