//class => OOP

//  advantages of oop
//  distribution of code into module
//  resuable in nature
//  works with real time entity
//  code reduction 
//  code abstraction will be there

// In ES5 we use oop concept called constructor function which is function
// In ES6 we use class based apprach in OOP

// we have class keyword which we use for operational funcationlity.


// class is a blueprint of object. 
// object is instance of a class.

//class is a collection property and methods that can be used by object.
//property are like variable
// method are like function 
class car {
    
    //internal constructor runs  as a 1st methods on class
    // if not gines JS crates it 
    constructor(_details){
        this.wheels = _details.wheels ;
        this.engine = _details.engine ;
        this.isCNG = _details. isCNG ;
    }

    printCarDetails() {
        console.log(this.wheels)  //this is special keyword which gives current  class reference.
    }
}

let details =  {
    wheels : 4,
    engine : 1 ,
    isCNG : true ,

}

//object 
// car() ==> constructor : have the name like class, it is used to assign properrty and method to object.

let swift = new car();
swift.printCarDetails();




