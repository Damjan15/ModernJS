# Type Conversion

In programming, **type conversion** or **type casting** is the process of explicitly converting a value from one type to another. For instance, you may have a string value of **'5'** and you want to convert it to a number value of **5** so that you can do some arithmetic operations on it.

## Converting Types

There are few different ways that we can convert types.

#### parseInt()

We can convert it a string to a number type with the `parseInt()` function:

```JavaScript
let amount = '100';

amount = parseInt(amount);
```

#### toString()

If we want to convert it back to a string, we can use the `toString()` method:

```JavaScript
amount = amount.toString();
```

#### Number()

Another way to convert a string to a number is by wrapping it in the `Number()` method:

```JavaScript
amount = Number(amount);
```

#### String()

We can convert something to a string using the `String()` method:

```JavaScript
amount = String(amount);
```

#### Decimals

If you want to convert a string to a decimal, you don't want to use `parseInt()` because an "integer" is either a negative or positive whole number. User `parseFloat()` to convert to a decimal:

```JavaScript
let amount2 = 5.5;
amount2 = parseFloat(amount2);
```

#### Boolean values

Strings and numbers are not all that we can convert. We can use Number() with booleans.

The following would give us a number of 1. If false, it would give us 0.

```JavaScript
let x = true;
x = Number(x);
```

We also have a Boolean() method to turn a number into a boolean.

```JavaScript
let x = 1;

x = Boolean(x);
```

