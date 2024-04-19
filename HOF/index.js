//map,filter,reduce
/*
1. what is map() ?
the map method is used for createing a new array from existing one
by applying a functions to each one of the element of the first array.


// eg.
const nums = [1, 2, 3, 4];

const multiplyFive=nums.map((el,idx,arr)=>{
    return el * 5;
})

console.log(multiplyFive); 
//return new Array always.
*/
/************************************************************************/
/*
// 2. what is filter() ?
// filter method takes each element in an array and it applies a
// conditional statement against it.
// if the conditional return true the element get pushed to output array.
// if false it will not pushed to output array.

// Q. return the element which are more than 2.
const nums = [1, 2, 3, 4];
const moreTwo = nums.filter((el, idx, arr) => {
  //   if (el > 2) return el;
  return el > 2;  // true(return the op arr) & false(dont return) 
});

console.log(moreTwo);

*/
/************************************************************88 */
/*
// 3. reduce() ?
// reduce to single value and returned, also it takes the arr Element.
// it also executes callback for each elelement.

// Q. sum of Array.
const nums = [1, 2, 3, 4];

const ans = nums.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(ans);

// accumulator- is the result of previous computation
// for first acc=initial value.
// curr value is the curr element of the array.
*/
/*************************************************************** */

// --CREATING POLYFILL FOR Map()--

// Array.map((num,i,arr)=>{ })
/*
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};
*/
/**************************************************************** */

//Creating polyfill for filter()
/*
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

let x=[1,2,3,4];

let ans=x.myFilter((el)=>{
  return el%2==0;
})
console.log(ans);
*/
/********************************************************** */
//Creating Polyfill for Reduce()

//arr.reduce((acc,curr,i,arr)=>{ },initial value)
/*
Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

let y = [1, 2, 3];

let ans = y.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(ans);
*/
/************************************************************************** */
//Question--what is the difference between map vs forEach.
//both are array functions which loop through the each array items.
//foreach doesnto returned anything / but it can be modified the original array.
//map returns new array it doesnot effect the original one.
// we can chain other method in map but in forEach it doesnot

/*
const arr=[2,5,3,4,7]

let ans=arr.forEach((el,i)=>{
   console.log(el);
})
console.log(ans);
*/
//explicit return means 'use return keyword' for emplicit not.
/************************************************************************* */
//Question -o/p use map, reduce,filter
//1. return onnly name of students in capital;
//2. return only details of those who scored more than 60.
//3. more than 60 marks and rollNumber greater than 15;
//4. sum of marks of all students
//5. return only names of students who scored more than 60.
//6. return total marks for students with marks greater than 60
//after 20 marks have been added to those who scored less than 60;

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];
/*
let nameS = students.map((el) => {
  return el.name;
});S
console.log(nameS.toString().toUpperCase());
*/

/*
let ans = students.filter((el) => {
  return el.marks > 60;
});
console.log(ans);
*/

/*
let ans = students.filter((el) => el.rollNumber > 15 && el.marks > 60);
console.log(ans);
*/

/*1St Method:
let onlyMarks = students.map((el) => el.marks);
console.log(onlyMarks);

let ans = onlyMarks.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(ans);
*/
/* 2nd METHOD:
let onlymarks = students
  .map((el) => el.marks)
  .reduce((acc, curr) => {
    return acc + curr;
  }, 0);
console.log(onlymarks);
*/
/* 3rd Method:
let sumM=students.reduce((acc,curr)=>acc+curr.marks,0)
console.log(sumM);
*/

/*
const ans = students.filter((el) => el.marks > 60).map((el) => el.name);
console.log(ans);
*/

//impottant last question.

let gadd = students.map((el) => {
  if (el.marks < 60) {
    el.marks += 20;
  }
  return el;
});

let tMarks = gadd
  .filter((el) => el.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);
console.log(tMarks);
