# CoderBabez

##  Week Seven - Variables & Functions

### Objectives
Use variables and functions to add and remove puppy pictures on an html page.

### Vocab
* Variable
* Functions
* Parameters

### Review

A function is a reusable set of instructions

Functions are defined. The function definition writes out all the things the function will do.
```js
function functionName() {
  // do stuff
}
```

Functions do stuff only when they are called. Call a function by its name with parentheses after.
```js
functionName();
```

Check for understanding: When we run this code, will the page turn red?
```js
function changeBackground() {
  $('body').css('background', 'red');
}
```

Functions can have inputs, and outputs, but they don't have to. 

When a function has an output (gives us back some information), that's called "returning a value". It looks like this: 
```js
function getColor() {
  return 'red';
}
```

When a function needs an input (takes information from us when we call it), that's called a "parameter". It looks like this: 

```js
function changeBackground(colorName) {
  $('body').css('background', colorName);
}
changeBackground('red');
```

Check for understanding: When we run this code, what will display on the page? Why?

```js
function mystery(valOne, valTwo) {
  return valOne + valTwo;
}

$("body").append(mystery(3,4));
```
Check for understanding: When we run this code, what will display on the page? Why?
```js
function mystery(valOne) {
  return "red";
}

$("body").append(mystery("blue"));
```

And finally functions can be used together! How many functions get called when we run this code?
```js
function changeBackground() {
  $('body').css('background', getColor());
}

changeBackground();
```

### Variables

Variables store data. They have a name you use to refer to the data.

We use the word `var` to declare the variable. We use the `=` to define the value of the variable. Defining a value with the `=` is also called assigning a value.
```js
var x = 1;
var y = 2;
var z = 1 + 2;
```
What are the variables above? What are their values?


You can change the data that's in a variable
```js
var x = 1;
x = 2;
```
What is the value of `x` in each line? How many times did we declare `x`? How many times did we assign a value to `x`?

Variables can store lots of different types of data. Strings and numbers are common ones we'll start with.
```js
var a = "I am a string!";
var b = 'I am also a string';
var c = 1;
var d = 1.3456;
var e = "5";
```
What types of values have been assigned to these variables?

Variables are really helpful to use with functions! 
You can pass variables to functions as parameters. You can also store the return value in a variable. 

Check for understanding: What is the value of "age" on each line of this code?
```js
function getOlder(currentAge) {
  return currentAge + 1;
}
var age = 21;
age = getOlder(age);
```

### Project

Last week we used functions to update multiple things on a page at once. This week we're going to add a variable that keeps track of the state of the page.

Take a look at the live site:

* What are the html elements?
* What changes when the button is clicked?
* What stays the same between clicks?
* How would you go about implementing this page?

# Reference:

* https://www.w3schools.com/js/js_variables.asp
* https://www.w3schools.com/js/js_functions.asp
* https://api.jquery.com/click/
* https://api.jquery.com/append/
* https://api.jquery.com/empty/
* https://www.w3schools.com/jquery/jquery_ref_selectors.asp
