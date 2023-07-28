// js object 
// js object is collection of key value pair.
// where keys are user defined.

let obj = {
    name: "prashant",
    rollno: 28,
    marks: 39,
    age: 20,
    printStudent: function () {},
    list: [1,3,4,5]
};


//to read js object 
console.log(obj.list);
console.log(obj.printStudent)

//add new property to js obbject 
obj['course'] = "mern stack";
console.log(obj.course);

// delete from object 
delete obj.name;
console.log(obj);

//collect all propery of object
let key = Object.keys(obj);
console.log(key);

let values = Object.values(obj);
console.log(values);

//Convert object to array
//It returns 2D array
let arraylist = Object.entries(obj);
console.log(arraylist);


// For const variable type object we can change data for objects but we can't assign new object.

const product = {
    pName: "dell"
};  
product.pName = "lenovo";
product["price"] = 30000; 
console.log(product);

//we can freeze a object, once freeze it will not change.

let a = {
    name : "you"
}
Object.freeze(a);
a.name = "lenovo"; //will not change
console.log(a); //unchanged
