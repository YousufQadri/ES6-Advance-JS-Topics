// * TRY CATCH THROW
/*
    ? An exception is an “unwanted or unexpected event”, which occurs during the execution of the program i.e, at run-time
    ? It interrupts the normal flow of the program’s instructions. When an exception occurs, execution of the program gets terminated.
    ? To handle this, we use try catch throw, where all the code is wrapped inside try to execute it.
    ? And when errors occurs you can set your own set of instructions how to handle it.
*/

// Try one example at a time

/* ===========================*/
// ! Try
/* ===========================*/

/* --------------------------------------------*/

try {
    alert("Hey it's working");
}
catch (e) {
    console.log(e); // No error logs
}

// ? Normal functionality inside try wrapper

/* --------------------------------------------*/

/* ===========================*/
// ! Try with Catch
/* ===========================*/

/* --------------------------------------------*/

// try {
//     alerts("Is it working?");
// }
// catch (e) {
//     console.log(e); // Output: ReferenceError: alerts is not defined
// }
// console.log("working even after error"); // Output: working even after error

// ? As normal errors disrupts the flow of program, with Try catch it becomes easy to handle error.
// ? We can add our custom instructions if any error occurs.
// ? Here even after error came, the program didn't stops suddenly. And the program is executed till the last line. 

/* --------------------------------------------*/

// try {
//     alerts("Is it working?");
// }
// catch (e) {
//     console.log(e.message); // Output: alerts is not defined
// }

// ? e.messages just display the specific error neglecting the type of error (i.e. SyntaxError, ReferenceError)

/* --------------------------------------------*/

/* ===========================*/
// ! Try Catch with Throw
/* ===========================*/

/* --------------------------------------------*/

// try {
//     let gender = "female";
//     if (gender != "male") {
//         throw Error("Oops! Ladies not allowed");
//     }
// }
// catch (e) {
//     console.log(e); // Output: Error: Oops! Ladies not allowed
//     console.log(e.message); // Output: Oops! Ladies not allowed
// }

// ? With throw we can use a custom error message at different points