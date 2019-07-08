// * FOR IN & FOR OF LOOP
/*
    ? Default values are parameters which are passed as arguments when you don't provide them yourself.
    ? Used to increase good UX
*/

// Try one example at a time

/* ===========================*/
// ! FOR IN Loop
/* ===========================*/

// ? The for...in statement iterates a specified variable over all the properties of an object.
// ? For each distinct property, JavaScript executes the specified statements.

/* --------------------------------------------*/
let obj = {
    type: "4x4",
    name: ["Tundra", "Ranger rover"]
}
function check(obj) {
    var output = '';
    for (let i in obj) {
        output += `Iterating var output: ${i}
        Variable value: ${obj[i]}

        `;
    }
    console.log(output);
}
check(obj);

//OUTPUT

// Iterating var output: type
// Variable value: 4x4

// Iterating var output: name
// Variable value: Tundra,Ranger rover

/* --------------------------------------------*/

/* ===========================*/
// ! FOR OF Loop
/* ===========================*/

// ? The for...of statement iterates over iterable objects (array, set, arguments, etc) displaying their disticnt properties.

/* --------------------------------------------*/

// var arr = [3, 5, 7]; // Index 0, 1, 2
// arr.foo = 'hello'; // Index foo


// for (var i in arr) {
//     console.log(arr[i]); // Output: 1, 2, 3, foo
// }

// ? In `For In` loop it iterates over all to properties of the obj. Hence it's showing the index as output.
// ? To acces value we have to use arr[i]

// for (var i of arr) {
//     console.log(i); // Output: 3, 5, 7
}

// ? `For Of` loop iterates over iterable objects.
// ? Because foo is not a valid it's not iterating over it.