/**
 * Array Methods
 */

const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

// Add an element to the end of the array -> push()
arr1.push(6);
console.log(arr1);

// Remove last element of an array -> pop()
arr1.pop();
console.log(arr1);

// Add element to the beginning of the array -> unshift()
arr1.unshift(0);
console.log(arr1);

// Take an element off from the start of the array -> shift()
arr1.shift();
console.log(arr1);

// Reverse the array -> reverse()
arr1.reverse();
console.log(arr1);

/**
 * Returning values from an array
 */

const arr2 = [7, 8, 9, 10];

// Return true if the array contains the value you passed in
console.log(arr2.includes(7));

// Return the index of value you pass in -> indexOf()
console.log(arr2.indexOf(8));

// Return string from array
arr2.toString();
console.log(arr2.toString());

/**
 * slice() and splice()
 */

// slice()
const newArr = arr2.slice(1, 3);
console.log(newArr);

// splice()
const newArr2 = arr2.splice(1, 4);
console.log(newArr2);