// Functions 
//A JS function is a block of code designed to perform a particular task.
//A JS function is executed when "somethings" invokees it or call it. 

// 5 Types of Functions :
// function defination function or (common or general function )
// function expression 
// inline / callback function 
// IIFE (Immediate invoke function expprssion )
// arrow function 


// General functions ::

function functionName() { 
  console.log("This is function");
    //code block 
}       //function defination

// To call ::
    functionName();

// () => Parameter body

// Example:
let a = 10;
let b = 20; // global variable
 
function add(varOne, varTwo) { 
    let result = varOne + varTwo ;
    console.log(result);
    console.log("This is function.");
  }

add(a,b);
add(10, 40);

// Scopes of variable:
// The variable which are declared outside the function we call them global variable. here it is "a", "b" .
// The variable which are declared inside the function we call them local variable. here they are "varOne", "varTwo", "result" .
// we don't call global variable in a  function we pass them through parameter.

// When a function has 100% local variable => pure function

// var is a function scope variable.
// let, const block scope variable.




// inline / callback function ::
// callback function is a  function  written inside a other function.
// example comparison function in sort() array method.

let number = new Array(10, 50, 30, 70, 20);

number.forEach( function (value, index){
    console.log("hello world");
})

number.sort( function (a, b){
    return a-b;  //for inc order
    // return b-a;  for dec order
})

