# Variables

Variables are containers for pieces of data. That data can be of many different types. 

## Declaring a Variable

In JavaScript, we need to first declare a variable with one of three keywords:

- var
- let
- const

In modern JavaScript, you probably won't see `var` very much. `var` was the original declaration, but in `ES2015` also known as `ES6`, which was a huge update to the language, they introduced `let` and `const`. One of the reasons for this is because of `block scoping`.

```JavaScript
let firstName = "Damjan";
let lastName = "Stamenov";
let age = 23;
```

## Variable Naming Conventions

So different languages have different rules and conventions when it comes to naming things. There are some rules that you have to follow when it comes to the formatting of your variable names. 

- Only letters, numbers, underscors and dollar signs
- Can not start with number

### Multi-Word Variables
When it comes to variables as well as functions and classes with multiple words, it's really up to you on how you format the case. What you'll typically see in JavaScript is: `camelCase`, `underscore` or `pascal case`.


Camel Case:
```JavaScript
let firstName = "John";
```

Underscores:
```JavaScript
let first_name = "Sara";
```

PascalCase:
```JavaScript
let FirstName = "Tom";
```

## Reassigning Values
If you want to reassign a value you need to use `let`, you can't use `const`. Const stands for **constant**.

```JavaScript
let x = 100;

x = 200;
```

Or in some cases, you may want to simply declare a variable and not assign a value to it:

```JavaScript
let score;
```

In this case, score would be equal to **undefined**.


## Constants
`const` works a bit differently than `let`.

You can't directly re-assign a value to a constant.

```JavaScript
const x = 100;

x = 200; // Results in error
```

You also can't initialize a constant as undefined.
```JavaScript
const result; // Results in error
```

When we use `const` with values that are not primitive like objects or reference types such as `arrays` and `object literals`, we can't directly re-assign, but we can change the constants.

## Declaring multiple values at once

We don't have to declare variables line by line, we are able to declare multiple values at once. With let, we can initialize, with const, we have to assign a value.

```JavaScript
let a, b, c;
const d = 10, e = 20, f = 30;
```