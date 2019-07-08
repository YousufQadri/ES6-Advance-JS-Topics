// * TRENARY OPERATOR
/*
    ? It works same like if else but we can only return a single statement when the condition is true/false.
    ? It's a cleaner way to write if/else as for keyword `if` a question marks (?) and for `else` keyword color (:) is used.
*/

// Try one example at a time

/* ===========================*/
// ! Normal If/Else
/* ===========================*/

/* --------------------------------------------*/

var age = 19;

if (age < 18) {
    console.log("Sorry. You have to be 18+ to ride the bike");
} else {
    console.log("You're legal to ride a bike.");
}

/* --------------------------------------------*/

/* ===========================*/
// ! Ternary Operator
/* ===========================*/

/* --------------------------------------------*/

// let age = 19;

// age < 18 ? console.log("Sorry. Not eligible") : console.log("Eligible to ride a bike");

//OUTPUT
//Eligible to ride a bike

// ? Ternary operator is much clearn looking and efficient than If/else.
// ? We can only pass a single statement if a condition is true/false.

/* ==================================*/
// ! Multi-Condition Ternary Operator
/* ==================================*/

/* --------------------------------------------*/

// let country = "Pak";
// let age = 19;

// age > 60
//     ? console.log("To old to drive")
//     : age < 19
//         ? console.log("Not Eligible")
//         : console.log("Eligible");

