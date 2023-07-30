//                   Destructuring
// extracting data from array or object 

//      For Array[]
let array = [10, 20] ;
// old method
// let num1 = array[0];
// let num2 = array[1];
// console.log(num1, num2) 

// new method(destructuring)
let [num1, num2] = array ;
console.log(num1);
console.log(num2);

//     For Object{}
let product = {
    pName : "Optical Mouse",
    pBrand : "Dell" ,
    pVendor : "J.K Electronics",
    pMangDate : "1-Jan-2023" ,
    pLocation : "Pune"
};
// old method 
// let productName = product.pName;
// console.log(productName);

// new method (destructuring)
// Here sequence dosen't matter 
let {pLocation, pName: productName } = product;
console.log(productName, pLocation);
