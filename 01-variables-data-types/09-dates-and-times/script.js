/**
 * Working with Dates
 */

// Instantiating a Date Object
let d = new Date();
console.log(d);

// Converting to a string
console.log(typeof d);
console.log(d.toString());

// Get current timestamp
console.log(Date.now());

// Get timestamp of a specific date
d = new Date("07/22/2022");
console.log(d.getTime());

// Convert timestamps from milliseconds to seconds
console.log(Math.floor(Date.now() / 1000));