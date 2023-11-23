/**
 * More on Params & Arguments
 */

function registerUser(user) {
    return user + " is registered";
}

console.log(registerUser("John"));

// Default Parameters
function addUser(user = "Bot") {
    return user + " is added";
}

console.log(addUser());

// Passing Objects as Arguments
function registerAnotherUser(user) {
    console.log(`User ${user.id} (${user.name}) has been registered`);
}

const user = {
    id: 1,
    name: "John",
};

const newUser = registerAnotherUser(user);

// Passing arrays as arguments
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getRandom(numbers));