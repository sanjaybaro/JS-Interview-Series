// 1. Function declaration - declarating a function without variable
// 2.Function Expression- declaraing a function with variable
//3. function without name - anonymus function.
/********************************************************* */
/*
4.First Class Function-

In JavaScript, first-class functions refer to the ability 
of functions to be treated like any other data type. 
This means functions can be:

a. Assigned to variables:
eg:
const greet = function(name) {
  console.log(`Hello, ${name}!`);
};

greet('Alice'); // Outputs: Hello, Alice!

b. Passed as arguments to other functions:
eg:
function square(num){
    return num*num;
}

function displaySquare(fn){
    console.log("Square is "+ fn(5));
}
displaySquare(square)

c. Returned as values from other functions:
function createGreeter() {
  return function(name) {
    console.log(`Hi, ${name}!`);
  };
}

const hiGreeter = createGreeter();
hiGreeter('Charlie'); // Outputs: Hi, Charlie!
*/
/******************************************************** */
// 5. what is IIFE

// IIFE- immediately invoked function expressions
//suntax- (function body)(call with argument eg:5)

/*
(function sum(num) {
  console.log(num + num);
})(50);
*/
//o/p based questions.
/*
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1); //here x searching first to inner scope than if not find seraching to its outer scope.

*/
/***************************************************** */
//6. cloruse
//7. function Scope.

/****************************************************** */
//o/p based questions reslted to function.

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// for (let i = 0; i < 4; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

/******************************************************* */
// function hoisting.
/*
//1.function are hoisted completely.
functionName()

function functionName(){
  console.log("Hello");
}
*/
/******************************************************** */
//o/p based question on function hoisting.
//imp question.
/*
var x = 21; // globle

var fun = function () {
  console.log(x);
  // var x = 20;
};
fun();
*?
//each scope create a separate execution context for that function/local scope.
//when we have a variable present in the scope we dont go and check to global scope we always reffer to the current scope.

/******************************************************* */

//8. params vs arguments.
/*
function square(num) { //params
  console.log(num * num);
}
square(5); //arguments.
*/
/*
function multiply(num1, num2) {
  console.log(num1 * num2);
}
var arr = [5, 6];

multiply(...arr); //spread operator

*/

/*
function TotalSum(...num) {
  //rest operator(The rest parameter syntax allows a function to accept an indefinite number of arguments as an array)
  let total=0;
  for(let n of num){
    total+=n;
  }
  console.log(total);
}
var arr = [5, 6];

TotalSum(...arr); //spread operator
*/
/*
//o/p based
const fn = (a, x, y, ...numbers) => { //rest param should be at last
  console.log(x, y);
  // console.log(numbers);
};

fn(1,2,3,4,5,6);
*/
/******************************************************* */

//q.12 Callback functions.
/*
a callback function is a function passed into another function as an
arguemnt , which is then invoked inside the outer function to complete
some kind of task.
eg.
// function
function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

// callback function
function callMe() {
  console.log("I am callback function");
}

// passing function as an argument
greet("Peter", callMe);
*/

/******************************************************************** */
//q.13 arrow function vs regular function.
/*
// 1. SYNTAX
function square(num) {
  return num * num;
}

const squareArrow = (num) => {
  return num * num;
};

// 2.IMPLICIT RETURN KEYWORD
const squareArr = (num) => num * num;

//3.ARGUEMENTS:

function fn() {
  console.log(arguments);
}
fn(1, 2, 3);

//4. THIS KEYWORD.
let user = {
  username: "Sanjay Baro",
  rc1: () => {
    console.log("Subscribe to " + this.username);
  },
  rc2:function() {
    console.log("Subscribe to " + this.username);
  },
  // rc2() {
  //   console.log("Subscribe to " + this.username);
  // },  //same as above
};
user.rc1();
user.rc2();

*/