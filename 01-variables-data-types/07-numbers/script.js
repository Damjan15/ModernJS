/**
 * Working with Numbers
 */

// Use the Number() method to create a new number
const num = new Number(5);

// Return a string representing a number
console.log(typeof num.toString());

// Return a string representing the given number using fixed-point notation.
console.log(num.toFixed(2));
console.log(num.toFixed(1));

// Return a number with the specified length
const num2 = 94.4058;
console.log(num2.toPrecision(3));

// Returns a string representation of the number in exponential notation
console.log(num.toExponential(2));

// Returns a string representation of the number in the current locale
let num3 = 5000000;
console.log(num3.toLocaleString());