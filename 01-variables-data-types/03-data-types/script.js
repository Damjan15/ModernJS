/**
 * Primitive Data Types
 */

const firstName = "Sara"; // String
const age = 30; // Number -> Integer
const temp = 98.9; // Number -> Float
const hasKids = true; // Boolean
const aptNumber = null; // Null
const score = undefined; // Undefined
const id = Symbol("id"); // Symbol
const n = 9007199254740991n; // BigInt

// typeof Operator
console.log(typeof n);

/**
 * Reference Types (Objects)
 */

const numbers = [1, 2, 3, 4]; // Array
const person = {
  name: "John",
  age: 30,
}; // Object
const sayHello = function () {
  return "Hello";
}; // Function
