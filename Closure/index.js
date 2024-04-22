// Closures Definition:

/*
A closure is the combination of a function bundled together 
(enclosed) 
with references to its surrounding state 
(the lexical environment). In other words, 
a closure gives you access to an outer function's scope 
from an inner function. In JavaScript, closures are created
every time a function is created, at function creation time.

*/
/****************************************************************** */
//Lexical Scope-
/*
a scope refers to current context of your code. it can be either 
locally or globaly defined.

Lexical scope in JavaScript refers to the concept that the 
visibility and accessibility of variables and functions are
determined by their location within the code. In other words,
when you define a variable or a function within a block of code
(like a function or an if statement), its scope is limited to
that block and any nested blocks within it. This principle
is based on the physical structure of the code, hence the
term "lexical," which pertains to the arrangement of words
in a language.

Here's an example to illustrate lexical scope:

function outerFunction() {
  var outerVar = 'I am outside!';
  
  function innerFunction() {
    var innerVar = 'I am inside!';
    console.log(outerVar); // Accessing outerVar from the outer function
    console.log(innerVar); // Accessing innerVar from the inner function
  }
  
  innerFunction(); // Call the inner function
}

outerFunction(); // Call the outer function
In this example, outerVar is defined in the outerFunction, and innerVar
is defined in the innerFunction. innerFunction has access to both outerVar
and innerVar because of lexical scoping. However, outerFunction doesn't 
have access to innerVar because it's defined within innerFunction, and
JavaScript's lexical scoping rules don't allow variables defined in inner
functions to be accessed from outer functions.

in SIMPLE terms:-
a lexical scope in js means that a variable defined outside a function
can be accessible inside of another function defined after a variable
declaration but the opposite is not true.
  var username = "sanjay";
function local() {

  console.log(username);
}


local();

function subscribe() {
  var names = "Sanjay";
  function displayName() {
    console.log(names);
  }
  displayName();
}

subscribe();
*/
/**************************************************************** */

//closure scope chaining.
/*
var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4));
*/

//without scope chaning.

// global scope
/*
const e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // outer functions scope
      return function sum4(d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); // 20
*/
/*************************************************************** */
//OUTPUT BASED QUESTIONS.?
/*
let count = 0;
(function printCoeunt() {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }
  console.log(count);
})();
*/
/************************************************************* */
//write a function that would allow you to do this.
/*
function createBase(num) {
  return function (innernum) {
    console.log(innernum + num);
  };
}

var addsix = createBase(6);

addsix(10); //16
addsix(21);//27
*/
/***************************************************************** */
//Time Optimisation code question use of closure.

/*
function find(index){
    let a=[];
    for(let i=0;i<1000000;i++){
        a[i]=i*i;
    }
    console.log(a[index]);
}

console.time("6");
find(6);
console.timeEnd("6");
console.time("12");
find(12);
console.timeEnd("12")
*/

//optimised one with closure.
/*
function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}
const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("12");
closure(12);
console.timeEnd("12");
*/
/*************************************************************** */
//Q. Block Scope and SetTimeout.
/*
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i);
  }, 1000);
}

//print 0,1,2,3 by using var.(dry run this properly)
for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
  inner(i);
}

*/
/***************************************************************** */
//Q. how would you use a closure to create a private counter?

/*
function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }
  function retrive() {
    return "Counter = " + _counter;
  }
  return {
    add,
    retrive,
  };
}

const c = counter();
c.add(5);
c.add(10);
console.log(c.retrive());
*/
/********************************************************************* */

//Q. what is module pattern?

/*
var Module = (function () {
  function privateMethod() {
    //do something
    console.log("private");
  }
  return {
    publicMethod: function () {
      //can call privateMethod()
      console.log("public");
    },
  };
})();

Module.publicMethod();
Module.privateMethod();
//Module Pattern Adv JS
*/
/******************************************************************** */
//Q. Make this run only once.

/*
let view;
function likeTheVideo() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("Already Subscribe");
    } else {
      view = "Sanjay Coder";
      console.log("Subscribe to", view);
      called++;
    }
  };
}

let isSubscribed = likeTheVideo();
isSubscribed();
isSubscribed();
isSubscribed();
*/
/******************************************************************** */
//Q. once Polyfill implementation.
//do later.

/********************************************************************* */

//Q. Memoize Polyfill.
//do later.
//Q Implement Caching/Memoize Function.

/********************************************************************* */
//Q. Difference between Closure and Scope.
/*
whenever you create a function within another function then the inner
function is the closure.
this closure usually return so you can use the outer function variable
at the latter time.
whereas a scope in javaScript defines what variable you have acess to
-global scope
-local scope

*/




























