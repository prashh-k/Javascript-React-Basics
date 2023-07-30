//                      Spread Operator
// Create a new copy of array[] or Object{ }
// Merge multiple array or object 

//          For array
let arrayOne = [10, 20, 30 ];

let arrayTwo = arrayOne ; //drawback is if we change arrayOne, arrayTwo will also be change.
arrayOne[1] = 1000 ;
console.log(arrayOne, arrayTwo); 

//To overcome we use => concat()  (old method)
let array1 = [10, 20, 30 ];
let array2 = array1.concat();
array1[1] = 1000 ;
console.log(array1, array2); 
//To merge 
array1 = [10, 20, 30 ];
array3 = [100, 200, 300 ];
array2 = array1.concat(array3);
console.log(array1, array2); 

// New Method 
// To copy an array
array1 = [10, 20, 30 ];
array2 = [...array1];
array1[1] = 1000 ;
console.log(array1, array2); 
// To merge an arrays
array1 = [10, 20, 30 ];
array3 = [100, 200, 300 ];
array2 = [...array1, ...array3];
console.log(array1, array2);



//          For Object
let product = {
    pName : "Optical Mouse",
    pBrand : "Dell" ,
    pMangDate : "1-Jan-2023" ,
    pLocation : "Pune"
};

let Vendor = {
    pVendor : "J.K Electronics",
}

// old method to merge 
let prodDetails = Object.assign({}, product,Vendor);
console.log(prodDetails);

// new method to copy a object
prodDetails = {...product};
console.log(prodDetails);

// new method to merge 
prodDetails = {...product, ...Vendor} ;
console.log(prodDetails);
