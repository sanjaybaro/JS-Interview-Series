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

for(let i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);
}


