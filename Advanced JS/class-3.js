class Circle {

    constructor(_rad){
        this.radius = _rad ;
        this.dia = _rad * 2 ;
    }


// If we change radius manually then diameter will not change.
// When we are crating object we pass the value in constructor and internal constructor get called then calculation happen in it.
// There is no dependency i.e there is no function given so that when radius get updated diameter will also get updated. 

// Here we use concept of getter and setter 
// we can get data using getter  => keyword used => get()
// work of getter is to read data

// we can set new data using setter  => keyword used => set()   
//work of setter is to set data


    set radius(value) {
        this._rad = value ;
        this.dia = value * 2 ;
    }

    get radius() {
        return this._rad ;
    }

}


let circle = new Circle(10) ;
console.log(circle.radius);  
console.log(circle.dia);



circle.radius = 50 ;
console.log(circle.radius);      
console.log(circle.dia);  



// In other programming language's there are public, private and protected specifer.
// In Js we only have public specifiers => which is a drawback of JS
// But we can use public, private, protected specifer in Typescript.

// Drawback of Js 
// 1. Does't support private, public, protected specifier.
// 2. we can't use interface in JS.
// 3. Don't support abstract class.


