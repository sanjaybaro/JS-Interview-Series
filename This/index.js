//Explain this keyword.

/*
1. this is used to reference something.
2. In JS, this is used to reference object.
3. Which object depends on how this is being
 invoked (used or called).
4. it is depend on the context where this is currently in.

this.a=5;
console.log(this);
*/

/********************************************************* */
//1.in case of function inside.

// this.a = 5;
// function getParam() {
//   console.log(this.a);
// }
// getParam();

//here this target its parent obj which is global or window obj.
/*********************************************************** */

//2. inisde the OBJECT
/*
let user = {
  name: "Sanjay",
  age: 24,
  getDetails() {
    console.log(this.name);
  },
};
user.getDetails()
*/
/*********************************************************** */
//3. inside object Nested
/*
let user = {
  name: "Sanjay",
  age: 24,
  childObj: {
    newName: "Sanjay Baro",
    getDetails() {
      console.log(this.newName, "and", this.name);
    },
  },
};

user.childObj.getDetails();

//this only pointing here imediate parent.
*/
/*************************************************************** */
//4. with arrow function.
/*
let user = {
    name: "Sanjay",
    age: 24,
    getDetails:()=> {
      console.log(this.name);
    },
  };
  user.getDetails()
*/
//this here pointing to window object,not parent one

//nested arrow function.
/*
let user = {
  name: "Sanjay",
  age: 24,
  getDetails() {
    const nestedArrow = () => console.log(this.name);
    nestedArrow();
  },
};
user.getDetails();
*/
//here it pointing to parent function with value.
//in above their is no parent function so arrow pointing
//to the window object.

/************************************************************ */

//5. this keyword in javascript (Implicit Binding)
//explain this keyword.
//how this is working in class and constructor.
/*
class user {
  constructor(n) {
    this.name = n;
  }
  getName() {
    console.log(this.name);
  }
}

const User=new user("Sanjay"); //this will create a new obj from above class
console.log(User);
console.log(User.getName());
//this pointing inside class is the variable defined
*/

/************************************************************** */
//What is the output?.
/*
const user = {
  firstName: "sanjay",
  getName() {
    const firstName = "sanjay baro";
    return this.firstName;
  },
};

console.log(user.getName());
//here it target to user object not the variable that inside the 
// function
*/
/************************************************************** */
//what is the output the result of accessing its ref ? why?
/*
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}
let user = makeUser(); //pointing to window
console.log(user.ref.name); //pointing to window
*/

//how to fixed above.
/*
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}
let user = makeUser();
console.log(user.ref().name); //pointing to parent one.
*/
/************************************************************ */
/*
const user = {
  name: "Sanjay Baro",
  logMessage() {
    console.log(this.name);
  },
};
setTimeout(user.logMessage, 1000);
//here user.logMessage is using by callback rather than method.
//it doesnot have access to user object.
//it have acess to window object where their is no 
//property called name.

//how to avoid that.

const user = {
  name: "Sanjay Baro",
  logMessage() {
    console.log(this.name);
  },
};
setTimeout(function () {
  user.logMessage();
}, 1000);


*/
/************************************************************ */
// what is the output.
/*
const user = {
  name: "Sanjay",
  greet() {
    return `Hello, ${this.name}`;
  },
  farewell: () => {
    return `Goodbye,${this.name}!`;
  },
};

console.log(user.greet());
console.log(user.farewell());

*/
/*********************************************************** */

//Create an object calculator.
/*
let calculator = {
  read() {
    this.a = +prompt("a = ", 0);
    this.b = +prompt("b = ", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
*/
/************************************************************* */
//what is the output.
/*
var length = 4;
function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(fn) {
    fn();
  },
};
object.method(callback);

*/
/*************************************************************** */
