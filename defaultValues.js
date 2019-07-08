// * DEFAULT VALUES
/*
    ? ES6 provides a cleaner way of defining object literal methods and properties.
*/

// Try one example at a time

/* ===========================*/
// ! (ES6)
/* ===========================*/

/* --------------------------------------------*/

function greet(name) {
    console.log("Welcome " + name);
}

greet("Yousuf"); // Output: Welcome Yousuf
greet(); // Output: undefined

// ? When default parameters are not defind and when we don't provide appropriate amount of parameters it gives 'undefined'

/************************************************** */

// function companyGreet(name = "dear") {
//     console.log("Welcome to my company " + name);
// }

// companyGreet("Yousuf"); // Output: Welcome to my company Yousuf 
// companyGreet(); // Output:  Welcome to my company dear

// With the default parameters defined, when arguments are not passed it takes default values.
// Making a better user experience.

/************************************************** */

// function burgerMaker({ type = "zinger", extras = ["sauses", "olives"] }) {
//     console.log(`You have selected ${type} including ${extras.join(" and ")} as extras.`
//     );
// }

// burgerMaker({}); // Output: You have selected zinger including sauses and olives as extras.
// burgerMaker({ type: "beef burger", extras: ["mayo"] }); // Output: You have selected beef burger including mayo as extras.
// burgerMaker(); // Output: Cannot destructure property `type` of 'undefined' or 'null'.
