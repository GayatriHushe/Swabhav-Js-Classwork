//Function statement or Function Declaration
a();

function a() {
    console.log("a called");
}
a();

//Function expression
//b(); //Error

var b = function() {
    console.log("b called");
}
b();

//Diff b/w function stmt and function expression is hoisting
//  => Function can be called in function statement before declaration
//  => Function cannot called in function statement before declaration

//Anonymous function => Functions used as value
/*
function() {

}
*/

//Named function expression
var c = function xyz() {
    console.log("xyz called");
}
c();
//xyz(); //Out of scope

//Diff b/w parameters and argument

function d(param1, param2) { //parameters
    return (param1 + param2);
}

arg1 = 2;
arg2 = 3;
var sum = d(arg1, arg2); //argument

//First class function(First class citizen)
//  The ability of functions to be used as value and can be passed as argument in another function.
//  and returning of function from function
//  => We can pass function as argument in another function

var e = function(param3) {
    console.log(param3);
}
f(function() {

}); //Case 1 : Anonymous function

var g = function f(param4) {
    console.log(param4);
}

function f() {
    console.log("Inside f");
}

g(f); //Case 2 :named function

var h = function(param5) {
    return function() {

    }
}
console.log(h()); //Case 3 : Function returning anonymous function

var i = function(param6) {
    return function xyz() {

    }
}
console.log(i()); //Case 4 : Function returning named function


//Arrow functions => Introduced in ES6


// IIFE => Immediateley invoked function expression
// Self executing anonymous function
// Runs as soon as it is defined
// Used when we need to keep data private
//2 parts :
//      => Grouping Operator (function)
//      => Paranthesis  ()
// Prevents accessing variables within IIFE as well as polluting the global scope.
/* Syntax : 
(function()){
    code..
})();
*/

//case 1: without parameters
(function() {
    var name = "Gayatri";
    console.log("Gayatri Hushe");
})();

//case 2: with parameters
(function(name) {
    console.log(name);
})("Gayatri Hushe");


//call back function

function x(y) {
    console.log("In x")
}
x(function y() {
    console.log("In y")
})