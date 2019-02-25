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

Some functions make something change
```js
function changeBackground() {
  $('body').css('background', 'red');
}
```

Other functions return a value
```js
function getColor() {
  return 'red';
}
```

Functions can be used together!
```js
function changeBackground() {
  $('body').css('background', getColor());
}
```

Functions can take a parameter. A parameter is additional information given to the function that it can use to do something.
You pass a parameter in the parentheses when you call a function.
```js
function changeBackground(colorName) {
  $('body').css('background', colorName);
}
changeBackground('red')
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

Variables can store lots of different types of data. Strings and numberse are common ones we'll start with.
```js
var a = "I am a string!";
var b = 'I am also a string';
var c = 1;
var d = 1.3456;
```
What types of values have been assigned to these variables?

You can pass variables to functions as parameters
```js
function changeBackground(colorName) {
  $('body').css('background', colorName);
}
var color = 'red';
changeBackground(color);
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
