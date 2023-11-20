/**
 * Concatenation
 */

const firstName = "John";
const age = 30;

console.log("Hello, my name is " + firstName + " and I am" + age + " years old");

// Template Literals
console.log(`Hello, my name is ${firstName}`);


/**
 * String Properties & Methods
 */

// Creating a new string object using the String() constructor
const s = new String("Hello World");
console.log(s);

// Length
const greetings = "Hello World";
console.log(greetings.length);

// Changing case to Uppercase
console.log(greetings.toUpperCase());

// Changing case to Lowercase
console.log(greetings.toLowerCase());

// Returning a character at the specified index using charAt()
console.log(greetings.charAt(0));

// Returning the index of character using indexOf()
console.log(greetings.indexOf("o"));

// Search a substring for a specified value with substring()
console.log(greetings.substring(0, 4));

// Extract a part of a string, and return a new string
console.log(greetings.slice(0, 4));

// Trim whitespace of a string
let wX = "              Hello World!          ";
wX = wX.trim();
console.log(wX);

// Replace all instances of a string
const url = "https://traversymedia.com";
console.log(url.replace("traversymedia", "google"));

// Return true if searched string is found
console.log(url.includes("media"));

// Return the primitive value of a variable
console.log(url.valueOf());

// Split a string into an array with separator
console.log(greetings.split(" "));