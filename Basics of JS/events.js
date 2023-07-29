//event 
//event ==> user action 
//keyboard ==> keypress, keyups
//mouse ==> click, change, grag, drop, hover

function getElement(element){
    let _element = document.querySelector(element);
    if(_element) return _element ;
    else throw new Error(element = "Element not Found");
}

//create click event for button 
let incButton = getElement("#inc-btn");
let h1ID = getElement("#mytext");
let counter = 0 ;

//if we want to add a data in element ==> .innerHTML

incButton.addEventListener("click", function(){
    h1ID.innerHTML = counter ;
    counter ++;
});

