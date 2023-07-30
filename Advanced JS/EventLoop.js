// Thread is a Light weight process to perform a operation.
// JS is a single Thread language.

// Js is synchronous in nature by default.
// synchronous => line by line Execution of code.

// Drawback of synchronous =>  Until 1st operation is not complete, 2nd operation won't complete.
// This Drawback is callled "Blocking".

// to remove this Drawback Js consist of an mechanism which converts Synchronous to Ansynchronous called as "Event Loop".
// Event Loop converts JS into Ansynchronous.

// Refer to image Event_Loop.gif
// By default when a variable is declared it gets a memory and this memory is stored in heap memory.
// All variable uses heap memory.
// Lets assume we are clicking on button, here JS 1st scans the whole code and where ever it finds WEB API all methods and callback functions of WEB API are stored in callback Queue.
// when we  click on button the callback function are pushed to stack from callback Queue.
// This Work is done by Event Loop Mechanism.
// when ever a function is pushed to stack it runs.   
// many Operations (WEB API ) are available in Event Loop.
// All WEB API are used to provide a Functionality.
// Event Loop is not inside JS it is a part of JS. JS consist of an attachment caled Event Loop.
// It is a Special Mechanism which makes JS Fastest Programming Language.
// All Asynchronous function always runs at the end even when they are in sequence.

// WEB API's 
// DOM is WEB API in Event Loop
// we can perform click operation as much time as we want that is something we call Ansynchronous.

//          setTimeout 
// want to run a code after 1 sec ==> Timeout 
// setTimeout( callback function() , Time );   Time is in milisec (ms)
setTimeout(function() {
    console.log("Timeout");
}, 2000);        // 2000 ms == 2 sec 
// This is Asynchronous => not running in sequence => dosn't block the code. 

//           setInterval
// want to run a code after EVERY 1 sec ==> Interval
// setInterval( callback function() , Time );   Time is in milisec (ms)
let count = 10;
let intervalid = setInterval(function() {
    if (count === 1) {
        clearInterval(intervalid);
    }
    console.log(count);
    count-- ;
    }, 1000); 
// setTimeout and setInterval doesn't block each other bacause both are Asynchronous.


// promises

// async await

// fetch api
