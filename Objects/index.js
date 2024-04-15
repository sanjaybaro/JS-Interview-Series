//objects in javascript

const user = {
  name: "sanjay",
  age: 25,
  "i am key": true,
};

// user["name"]="gyaka" //modified the name
// user.name="jakck"  //modified the name
//delete user.age;      //deleteing or modified key value pair

// console.log(user.name);
/*-----------------------------------------------------*/
// 1.
const func = (function (a) {
  delete a; //only used to delete property in object
  return a;
})(5);

// console.log(func);
/*---------------------------------------------------*/
//2. dynamic key value pair/dynamic property in object.
const property = "firstname";
const name = "Sanjay Baro";

const obj = {
  [property]: name,
};
// console.log(obj);
// console.log(obj.firstname);
/*------------------------------------------------------*/
//3. printing keys in object with loop/looping through obj.
const user1 = {
  name: "sanjay",
  age: 25,
  isStudent: true,
};

for (key in user1) {
  // console.log(key);
  // console.log(user1[key]);
}
/*----------------------------------------------------------*/
//4. what is the output? // first position with last specified value

const obj1 = {
  a: "one",
  b: "two",
  a: "three",
};
// console.log(obj1);
/*----------------------------------------------------------*/
//5. create a function multiplyByTwo(obj) that
// multiplies all numeric property values of nums by 2.

let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

multiplyBytwo(nums);

function multiplyBytwo(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
// console.log(nums);
/*------------------------------------------------------------*/

//6. what is the output of following code.(imp)
const a = {};
const b = { key: "b" };
const f = { key: "c" };

a[b] = 123;
// a["[object object]"]=123
a[f] = 456;
// a["[object object]"]=456 //same key so overlap with lastest i.e. last one
// console.log(a[b]);
// console.log(a); //{[object Object]: 456}
/*-------------------------------------------------------------*/

// 7. what is JSON.stringify and JSON.parse?

const obj2 = {
  name: "sanjay",
  age: 24,
};
const strConvert = JSON.stringify(obj2);

// console.log(strConvert); //converting object into string
//converting string into object

// console.log(JSON.parse(strConvert));

// Convert the object to a string using
// JSON.stringify() before storing in localStorage

// localStorage.setItem("myObj", JSON.stringify(obj2));
// console.log(storeSetItem);

// Retrieve the object from localStorage and parse
// it back to its original form using JSON.parse()

// let retrivedObj=JSON.parse(localStorage.getItem("myObj"));
// console.log(retrivedObj);
/*----------------------------------------------------------------*/

// 8. what the output?
// console.log([..."Lydia"]);

//here ... known as spread operator.
//use to spread the property of an Obj and Array.
/*-----------------------------------------------------------------*/

// 9. what is the output
const user2 = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user2 };
// console.log(admin);
/*-----------------------------------------------------------------*/
// 10. what is the output
const settings = {
  username: "Sanjay",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data); //only stringify thoose property
/*------------------------------------------------------------------*/
// 11. whats the output
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius, //refn to window obj, when call with arrow function.
};

// console.log(shape.diameter());
// console.log(shape.perimeter());
/*-------------------------------------------------------------------*/
// 12. what is destructuring in objects?

let user3 = {
  name: "sanjay",
  age: 26,
  fullName: {
    first: "sanjay",
    last: "baro",
  },
};

//taking out an specific property of an object

const { name: xyz } = user3;
// console.log(xyz);
const {
  fullName: { first },
} = user3;
// console.log(first);
/*-----------------------------------------------------------------*/
// 13. what is the output
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}
let ans = getItems(["banana", "apple"], "pear", "orange");
// console.log(ans);
/*----------------------------------------------------------------*/
// 14.
let c = { greeting: "Hey!" };
let d;
d = c;
c.greeting = "Hello";
// console.log(d.greeting);
/*----------------------------------------------------------------*/
// 15.
// console.log({ j: 1 } == { j: 1 });
// console.log({ j: 1 } === { j: 1 });
//objects are only equal when they reference same location in the memory.
//here it is two different objects that comparing two different memeory location, dont see the value inside if its object.
/*----------------------------------------------------------------*/
// 16.
let person = { name: "Lydia" };
const members = [person];
person = null;
// console.log(person);
// console.log(members); //modofied variable name not.inside it
/*-----------------------------------------------------------------*/
// 17.
const value = { number: 10 };
const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

// multiply();
// multiply();
// multiply(value);
// multiply(value);
/*-----------------------------------------------------------------*/
// 18.Important
function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };
  return person;
}
const personObj1 = {
  name: "Alex",
  age: 30,
};
const personObj2 = changeAgeAndReference(personObj1);
// console.log(personObj1);
// console.log(personObj2);
/*-------------------------------------------------------------------*/
// 19. what is shallow copy and deep copy?
/*
shallow copy- copy an object to another object.and still
has acess/reference to some of the property of original object.
one obj whores the refernce to another obj is known as shallow copy.

Deep copy-

when we completely clone an object into an another variable is
known as deep copy.
here we dont have reference to original object.
doesnot effect the original one
*/
// eg.
let temp = {
  name: "sanjay",
  age: 24,
};

// const objClone = Object.assign({}, temp);
// const objClone=JSON.parse(JSON.stringify(temp));
 const objClone={...temp}
// objClone.age=40

console.log(temp, objClone);
