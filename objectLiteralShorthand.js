// * OBJECT LITERAL SHORTHAND
/*
    ? ES6 provides a cleaner way of defining object literal methods and properties.
*/

/* ===========================*/
// ! Object Literal Properties
/* ===========================*/

/* OLD Way (ES5) */

// var name = "Yousuf",
//     prof = "Developer";

// var obj = {
//     name: name,
//     prof: prof
// }


/* --------------------------------------------*/

/* NEW way (ES6) */

// let name = "Yousuf",
//     prof = "Dev";

// let obj = {
//     name,
//     prof
// }

// ? To make it concise and cleaner we can write the property name once if the both key & value names are same.

/* --------------------------------------------*/

/* ===========================*/
// ! Object Literal Methods
/* ===========================*/

/* OLD Way (ES5) */

// var obj = {
//     a: function () {
//         return 1;
//     },
//     b: function () {
//         return 2;
//     }
// }

// console.log(obj.a()); // Output: 1
// console.log(obj.b()); // Output: 2

/* --------------------------------------------*/

/* NEW way (ES6) */

let obj = {
    a() {
        return 1;
    },
    b() {
        return 2;
    }
}

console.log(obj.a());
console.log(obj.b());
