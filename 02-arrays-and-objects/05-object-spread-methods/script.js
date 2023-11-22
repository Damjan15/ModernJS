/**
 * Object Nesting, spreading, methods and more
 */

// Creating a new object using the Object constructor
const todo = new Object();

todo.id = 1;
todo.title = "Buy Notebook";
todo.completed = false;

console.log(todo);

// Nesting objects
const person = {
    address: {
        coords: {
            lat: 42.3601,
            lng: -71.0589
        }
    }
}

console.log(person.address.coords.lat);

// Spread Operator
const obj1 = { a: 1, b: 2};
const obj2 = { c: 1, b: 4};

const obj3 = { ...obj1, ...obj2};
console.log(obj3);

// Object.assign() method
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

// Arrays of objects
const people = [
    { id: 1, name: "John" },
    { id: 2, name: "Sara" },
    { id: 3, name: "Mike" },
];

console.log(people[1].name);


/**
 * Object Methods
 */

const person2 = {
    name: "John",
    lastName: "Doe",
    age: 30,
    gender: "Male"
};

// Get an array of all the keys in an object -> Object.keys()
console.log(Object.keys(person2));

// Getting the length of an object
console.log(Object.keys(person2).length);

// Get an array of all the values in an object -> Object.values()
console.log(Object.values(person2));

// Get an array of key/value pairs -> entries()
console.log(Object.entries(person2));

// Get a boolean indicating if the object has the property
console.log(person2.hasOwnProperty("name"));