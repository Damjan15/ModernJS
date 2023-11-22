/**
 * Object Literals
 */

const person = {
    name: "John",
    age: 30,
    location: "Boston",
    hobbies: ["movies", "music"],
    isAdmin: false
}

// Accessing property values
console.log(person.name); // Dot notation
console.log(person["name"]); // Bracket notation
console.log(person.hobbies[0]); // Array access from object

// Adding & updating properties
person.email = "johndoe@gmail.com"; // Add a new property
person.isAdmin = true; // Update an existing property
console.log(person);

// Deleting properties
delete person.email;
console.log(person);

// Using multiple words in property names
const person2 = {
    "first name": "John",
    "last name": "Doe",
};

console.log(person2["first name"]);
console.log(person2["last name"]);