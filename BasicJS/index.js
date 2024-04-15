// 1. var,let,const , SCOPE.

// we are here without anything spedific - so its Global Scope

/*function name(){
    //function Scope
}*/

/*{
    //Block Scope
}
*/

/*
var a=5; //global scope
console.log(a);
//var is function scope && let, const is block scope.
*/

/*
{
    var a=5;
}
console.log(a); //still accessible outside of block scope.
*/

/*
{
  let a = 5; //same with const
  console.log(a);
}
*/

/* variable shadowing
function test(){
    let a="Hello";

    if(true){
        let a="Hi";
        console.log(a);
    }
    console.log(a);
}
test();

---------
function test(){
    var a="Hello";
    let b="Bye";

    if(true){
        let a="Hi";
        var b="Goodbye";
        console.log(a);
        console.log(b);
    }
}
test()

var to let allows shadowing
but/ let to var its dont allow
*/
/*---------------------------------------------------------*/
// 2. var vs let vs const  DECLARATION.

// var can be redeclared  as mant times we want
// var a;
// var a;
// let a
// let a
//we cannot redeclare variable using let/const but var can be.

// let and const cannot be redecalare in the same scope but var can be.
/*----------------------------------------------------------*/
//3. var ,let , const (Decalaration without initialisation)
//here var and let is fine but with const we have to init anthing.
/*-------------------------------------------------------------*/

// 4. var , let, const (Re-Initialisation)
// var and let can be re-initialized/updated but const dosnt.
/*---------------------------------------------------------*/
// 5. var, let, const (Hoisting)
/* 
Hoisting- During the creation phase js moves the variable and
 function declaration to top of the code, this is known
 as Hoisting
eg: console.log(count); //undefined
    var count =1;

    *How above Code is JS look like is below *
    var count;
    console.log(count);
    count=1;
 let and const is also hoisted but in TDZ.

 TDZ-is the time between the declaration and initialization 
 of let and const variable.
 eg:ReferenceError: Cannot access 'myVar' before initialization
 */
/*--------------------------------------------------------------*/


