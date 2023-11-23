/**
 * Nested Scope
 */

// Nested Functions
function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y); // x is available from the first() function
  }

  // console.log(y) -> ReferenceError: y is not defined.

  second();
}

first();

// Nested If-statements
if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y); // x is available here
  }

  console.log(y); // ReferenceError: y is not defined
}
