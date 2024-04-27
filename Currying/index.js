//Currying

/*
Def:
Currying is a functional programming technique in JavaScript 
where a function with multiple arguments is transformed into
a sequence of functions, each taking a single argument. 

// Original function with multiple arguments
function multiply(a, b) {
  return a * b;
}

// Curried version of the function
function curryMultiply(a) {
  return function(b) {
    return a * b;
  };
}

// Usage of curried function
const multiplyBy2 = curryMultiply(2); // Partially applying
 the 'a' argument
console.log(multiplyBy2(3)); // Outputs: 6

function mul(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

let ans = mul(2)(2)(2);
console.log(ans);


*/
/******************************************************* */
// Q.1 sum(2)(6)(1)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(6)(1)); //expecting each parameter line by line to go depth

/********************************************************** */
