/**
 * Nesting, concat, spread & Array Object Methods
 */

const fruits = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "rasberry"];

// Nesting using .push()
fruits.push(berries);
console.log(fruits);

// Nesting second method
const allFruits = [fruits, berries];
console.log(allFruits);

// Concatinating arrays using concat() method
const newArr = fruits.concat(berries);
console.log(newArr);

// Spread operator (...)
const newArr2 = [...fruits, ...berries];
console.log(newArr2);

/**
 * Static properties on the Array object
 */


// Check if something is an array -> Array.isArray()
console.log(Array.isArray(fruits));
console.log(Array.isArray("Hello"));

// Convert an array-like object into an array -> Array.from()
console.log(Array.from("123456"));

// Create an array from a variable number of arguments -> Array.of()
const a = 1;
const b = 2;
const c = 3;
let y = Array.of(a, b, c);

console.log(y);