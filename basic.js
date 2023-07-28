//js code here 
alert();

//console ==> test your code in console 
console.log();  //method


//Variables 
// are containers to store data temp
//keyword => set predefined
// to use keyword their is condition that we can use it with assigned purpose only.

//To declare  a variable
//keyword varname = value ;

// 3 types of keyword we use to ddefine a variable,
//var, let, const

//var
// we can change var variable data
//we can defined  a varible again & again
var text = "deepak";
var text = "suraj";
console.log(text);

//let
// we can change let variable data
//we can't defined a varible again & again
let text1 = "hello";
text1 = "hello world";
console.log(text1);

//var
// we can;t change const variable data
const text2 = "Prash";
console.log(text2);



//data types 
let pName = "oppo 8"; //string
let pPrices = 12000; //number
let pRating = 4.5;  //number
let isInStock = true; //boolean (true/false)
let pDesc; //undefined
let paymentMode = null; //objecct(null, array, JSobject)

//check data type ==> typeof
let type = typeof paymentMode;
console.log(type);




//Operators

//Arithmetic Operators
let a = 10;
let b = 20;
// +, -, *, / (Q), %(reminder) 
var result = a + b;
var result = a - b;
var result = a / b;
var result = a * b;
var result = a % b;

console.log(result);

//Assignment Operators
let a1 = 50;
a1 += 30; //a1 = a1 + 30;
a1 -= 30; //a1 = a1 - 30;
a1 *= 30; //a1 = a1 * 30;
a1 /= 30; //a1 = a1 / 30;
a1 %= 30; //a1 = a1 % 30;

console.log(a1);

//Increment and Decrement Operators
a1++; // inc by 1 
++a1; // inc by 1

a1--; //dec by 1
--a1; //dec by 1 

//power Operators 
console.log(2 ** 3); // 2*2*2

//Comparison Operators
// if ... else ==> conditional statements

// is Prash present for training 
// true ==> Yes
// false ==> NO
// == :: Equal 
// != :: Not Equal 
// === :: Strictly Equal  
// !== :: Strictly not Equal
// > :: greater
// < :: less
// >= :: greater or equal to
// <= :: less or equal to
let a3 = 20;
let b3 = 20;
if (a3 == b3 ){
    console.log("yes");
}
else {
    console.log("no");
}

//Logical Operators

let a4 = 10;
let b4 = 10;
let c4 = 10;

// and ==> &&
// or ==> ||
// not ==> !
// NOR ==> !(l || r)
// NAND ==> !(l && r)

// not of false is true
// !false = true
// !true = false
if (a4 === b4 && b4 === c4){
    console.log("andd is true")
}
else {
    console.log("andd is false")
}

if (a4 === b4 || b4 === c4){
    console.log("or is true")
}
else {
    console.log("or is false")
}




//Check whether the number is even or odd.

// let a5 = 3;

// if(a5 % 2 == 0 ){
//     alert(true);
// }
// else
// {
//     alert(false);
// }



//Conditional Else if 

if (a === 10 ) {
    console.log("yes eq to 10");
}
else if (a === 11 ) {
    console.log("yes eq to 11");
}
else if (a === 12 ) {
    console.log("yes eq to 12");
}
else {
    console.log("not equal.");
}



//Conditional switch 

switch (a) {
    case 10 || 11 || 12 :
        console.log("yes eq to 10");
        break;
    case 11:
        console.log("yes eq to 11");
        break;
    case 12:
        console.log("yes eq to 12");
        break;            
    default:
        console.log("not eq");        
}

