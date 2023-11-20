/**
 * Date Methods
 */

let d = new Date();

// Get the year
console.log(d.getFullYear());

// Get the month number (0-11)
console.log(d.getMonth());
console.log(d.getMonth() + 1);

// Get the day of the month (1-31)
console.log(d.getDate());

// Get the day of the week (0-6)
console.log(d.getDay());

// Get the hour (0-23)
console.log(d.getHours());

// Get the minute (0-59)
console.log(d.getMinutes());

// Get the second (0-59)
console.log(d.getSeconds());

// Get the millisecond (0-999)
console.log(d.getMilliseconds());

// Creating a custom date using methods
console.log(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`);

/**
 * DateTimeFormat API
 */

console.log(new Intl.DateTimeFormat("en-US").format(d));
console.log(new Intl.DateTimeFormat("en-US", { month: "long"}).format(d));

// toLocaleString()
console.log(d.toLocaleString("default", { mont: "long" }));