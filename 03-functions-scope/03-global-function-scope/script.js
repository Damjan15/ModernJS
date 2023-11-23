/**
 * Global & Function Scope
 */


// Global Scope -> window
console.log(window);
console.log(window.innerHeight);

function run() {
    console.log(window.innerWidth);
}

run();

// Globally scoped variables
const x = 100;

function load() {
    console.log(x);
}

load();

// Function Scope
function add() {
    const y = 50;
}

console.log(y); // ReferenceError: y is not defined