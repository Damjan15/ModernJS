# Data Types

When we create a variable, the data that we define has a type. There are `primitive types` and `reference types`. The big difference under the hood is the way that they're stored and accessed from memory.

1. **Primitive Types** - Stored directly in the location that the variables is accessed.
2. **Reference Types (Objects)** - Accessed by reference

## Primitive Data Types

The 7 primitive data types are the following

- `String` - a sequence of characters. In JavaScript, strings can be enclosed within a single or double quotes
- `Number` - Represent both integer and floating-point numbers
- `Boolean` - Represents a logical entity and can have two values: true or false
- `Null` - Represents the intentional absence of any object value
- `Undefined` - A variable that has not been assigned a value is undefined. 
- `Symbol` - It is a built-in object whose constructor returns a symbol-that is unique
- `BigInt` - New data type used for numbers that are greater than the Number type can handle.

## Dynamic vs Static Types

JavaScript is "dynamically-typed" language. This means that when we create a variable or a function, we don't explicitly assign the type. JavaScript assigns the type of that value dynamically. In other words, the type is associated with the **value**, not the **variable**. So you can have a variable value be a string and then later in the script, change it to number.

There are other languages that are "statically-typed". This is where you would explicitily define the type of data, for example: Java. 

## Assigning Variables

### String

A string is a "string" of characters wrapped in either single or double quotes. Strings can include any number, letter or symbol.

```JavaScript
const firstName = "Sara";
```

### Number

Any number in JavaScript is the `Number` type, including floats and decimals. Numbers are not wrapped in quotes.

```JavaScript
const age = 30;
const temp = 98.9;
```

### Boolean

A boolean is a true or false value

```JavaScript
const hasKids = true;
```

### Null

Intentional absence

```JavaScript
const aptNumber = null;
```

### Undefined

Undefined represents a variable that has not been defined a value.

```JavaScript
let score;
const score = undefined;
```

### Symbol

A "symbol" represents, a unique identifier.

```JavaScript
const id = Symbol("id");
```

### BigInt

BigInt is a new primitive type and represents integers that are out of the range of the Number type

```JavaScript
const n = 9007199254740991n;
```

### typeof Operator

To check the type of a variable in JavaScript, you can use the typeof operator.

```JavaScript
console.log(typeof name);
```

# Reference Data Types (Objects)

Reference types work a little differently under the hood. There are basically 3 types that are passed by reference:

- `Arrays`
- `Functions`
- `Objects`

### Arrays

Arrays are essentially a data structure that can hold multiple values.

```JavaScript
const numbers = [1,2,3,4];
```

### Object Literals

Objects are comma separated lists of `name-value pairs`.

```JavaScript
{
    name: "John",
    age: 30
}
```

### Functions

Functions are also objects in JavaScript. They can have `properties` and `methods`. What distinguishes them from other objects is that they can ve called.

```JavaScript
const sayHello = function() {
    return "Hello";
}

sayHello();
```