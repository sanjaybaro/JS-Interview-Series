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
/*
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(6)(1)); //expecting each parameter line by line to go depth
*/
/********************************************************** */

/*Q. 2 evaluate the below:
evaluate("sum")(4)(2)=>6
evaluate("multiply")(4)(2)=>8
evaluate("divide")(4)(2)=>2
evaluate("substract")(4)(2)=>2
*/
/*
function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "substract") return a - b;
      else return "Invalid Operation.";
    };
  };
}

let ans = evaluate("multiply")(4)(2);
console.log(ans);

let mul=evaluate("multiply")

console.log(mul(3)(5))
console.log(mul(2)(6))
*/
/*********************************************************** */

//Q. add(5)(2)(4)(5)(); //infinte currying
/*
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;  //if nothing return a.
  };
}
console.log(add(5)(2)(4)(8)());
*/

/************************************************************ */
//CURRYING VS PARTIAL APPLICATION.
//-- transform function into another function with small arity.

/*
function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

const x = sum(10);
console.log(x(5, 6));
console.log(x(3, 2));
//or
console.log(sum(20)(1, 4));

*/
/************************************************************* */

//MAIPULATING DOM.
/*
function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}
const updateHeader=updateElementText("heading")
updateHeader("Hello Sanjay Baro")
*/
/************************************************************ */

//**IMPORTANT**
//curry () implementation
//converts f(a,b,c) into f(a)(b)(c)
//understand it by proper dry run imp

/*
function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;
const totalSum = curry(sum);
console.log(totalSum(1)(2)(3));
*/

/*********************************************************** */

