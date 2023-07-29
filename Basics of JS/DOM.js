//DOM 
//Document object model 
// major work => To communicate /interact with html and JavaScript
//with use od DOM we can perform various operation
//we can collect html element in JS & then we can change there Functionality / behaviour i JS
// To collect hyml element in JS we use special object called as  document 
//Their are various methods for this object document
//document.getElementById()            //returns single element
//document.querySelector()             //returns single element

//document.getElementsByClassName()    //returns element[]
//document.getElementsByTagName()      //returns element[]
//document.querySelectorAll()          //returns element[]


let element = document.getElementById("mytext");
console.log(element);
element.innerHTML = "HI" ;

//if don't get element we get null


//queryselector is like CSS
//class ==> .
//id ==> #
//element ==> name

let element1 = document.querySelector("#mytext");  // returns single element 
console.log(element1);  

element1 = document.querySelectorAll("#mytext");  // returns ARRAY
console.log(element1);  

element2 = document.getElementsByClassName("h1-class");
console.log(element2);  

