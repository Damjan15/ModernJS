/**
 * Destructuring & Naming
 */

// Variables with the same name
const firstName = "John";
const lastName = "Doe";
const age = 30;

const person = {
    firstName: firstName,
    lastName: lastName,
    age: age
};

// Destructuring an object
const todo = {
    id: 1,
    title: "Take out trash",
};

const { id, title } = todo;
console.log(id, title);

// Destructuring an array 
const numbers = [10, 20, 30, 40];
const [firstNumber, secondNumber] = numbers;

console.log(firstNumber, secondNumber);