class Circle {
    private _radius:number = 0
    private _dia:number = 0

    // If i want to access above property inside the class only then we use private
    // Now _radius and _dia are private we cant use them outside the class.
  
    constructor(_rad){
        this.radius = _rad ;
        this._dia = _rad * 2 ;
    }

    set radius(value) {
        this._radius = value ;
        this._dia = value * 2 ;
    }  

    get radius() {
        return this._radius ;
    }

    // Now if we want to read the property i.e. _dia outside class we use get()
    get dia() {
        return this._dia ;
    }
    // Now if we want to write the property i.e _dia outside class we use set()
    set dia(value) {
        this._dia = value ;  
    }
    
}

let circle = new Circle(10);
circle.dia = 50 ;
export default {};

// In other programming language's there are public, private and protected specifer.
// In Js we only have public specifiers => which is a drawback of JS
// But we can use public, private, protected specifer in Typescript.

// access specifier 
// Public ==> public property and method are accessable throughtout the journey, anyone can access.
// Private ==> private property and method are accessable only in class.
// Protected ==> protected proerty and methods are accessable in parent class and child class.
