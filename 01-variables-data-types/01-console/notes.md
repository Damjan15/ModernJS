# The JavaScript Console

When we create front-end websites and applications, we work in the browser environment. We can use JavaScript to manipulate the DOM (Document Object Model) and display different elements and values, but many times, we just need a quick way to show what a value is. We also need a place to see any errors or warnings in our script or any script that runs. This is where the JavaScript console comes in.

## Console methods
The `global object` in the browser environment gives us access to a `console` object that has sa bunch of useful methods that we can use from our JavaScript file to interact with the JavaScript console. 

### `console.log()`

This is the most common console method. We pass whatever we want to log to the console as an argument to the `log()` method. This can be a string, a number, a boolean, an object, an array, or even a function. It will output the value to the console.

#### Log a number

```JavaScript
console.log(123);
```

#### Log a string

```JavaScript
console.log("Hello World");
```

#### Log multiple values

```JavaScript
console.log(123, "Hello", true);
```

#### Log a variable

```JavaScript
let x = 100;
console.log(x);
```

## `console.error()`
Using console.error() will make the text red

```JavaScript
console.error("This is an error");
```

## `console.warn()`
Using console.warn() will make the text yellow.

```JavaScript
console.warn("This is a warning");
```

## `console.table()`
If you want to log an object, you can format it as a table

```JavaScript
console.table({ name: "Damjan", username: "Damjan15" });
```

#### Log with style

```JavaScript
const styles = "padding: 10px; background-color: black; color: green;";
console.log('%cHello', styles);
```

There are even more methods. See all of them [here](https://developer.mozilla.org/en-US/docs/Web/API/console)