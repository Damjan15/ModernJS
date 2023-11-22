/**
 * JSON Intro
 */

const obj = {
    name: "John",
    age: 30,
    city: "New York",
};

// Turn object into JSON string -> JSON.stringify()
const str = JSON.stringify(obj);
console.log(str);

// Turn JSON string into object -> JSON.parse()
const obj2 = JSON.parse(str);
console.log(obj2);