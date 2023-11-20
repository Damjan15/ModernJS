# Operators & Arithmetic

We have a few different types of operators

## Arithmetic Operators

Addition, substraction, multiplication and division

```JavaScript
5 + 5; // 10
```

```JavaScript
10 - 5; // 5
```

```JavaScript
5 * 5; // 25
```

```JavaScript
10 / 2; // 5
```

Concatenation: The `+` operator can also be used to put 2 or more strings together. The use of `+` depends on the data type

```JavaScript
"Hello, " + "World!";
```

Modulus is used to get a divison reminder

```JavaScript
10 % 3; // 1
```

Exponentiation returns the result of the first operand to the power of the second.

```JavaScript
2**3; // 8
```

Increment is used to **increment** or add 1 to value

```JavaScript
x = 10;
x++; // 11
```

Decrement is used to **decrement** or remove 1 from a value

```JavaScript
x = 10;
x--; // 9
```

## Comparison Operators

Comparison operators are used to compare values

Equal to operator - The following will return true even if the types do not match

```JavaScript
2 == 2; // true
2 == '2'; // true
```

Equal value & equal type - The types have to match or it will return false

```JavaScript
2 === 2; // true
2 === '2'; // false
```

Not equal to operator - returns true if not equal

```JavaScript
2 != 2; // false
2 != '2'; // false
```

Not equal value & equal type

```JavaScript
2 !== 2; // false
2 !== '2'; // true
```

Grater than

```JavaScript
10 > 5; // true
```

Less than

```JavaScript
10 < 5; // false
```

Greater than or equal

```JavaScript
10 >= 5; // true
```

Less than or equal

```JavaScript
10 <= 5; // false
```

## == vs ===

- The `==` operator is used to compare values.
- The `===` operator is used to compare values and types.