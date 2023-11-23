/**
 * Function Basics
 */

// Creating a function
function sayHello() {
    console.log("Hello World");
}

sayHello();

// Function Parameters
function add(x, y) {
    console.log(x + y);
};

add(5, 9);

// Return a value
function subtract(x, y) {
    return x - y;
}

const result = subtract(10, 5);
console.log(result);