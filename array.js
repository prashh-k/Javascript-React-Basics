
//ARRAY
//Array is a collection of same or different datatypes.
//Arrays are used when we have a list of items, also it allows you to store several values with the same name and access them by using indexx number. 
let arr1 = [10, 1, 2, 23, 5, 30, 20, 50];
let arr = new Array(10, 30, 59);
console.log(arr1)
console.log(arr)
console.log(arr1.length)


//Array Method

//Add data at last => push()
arr1.push(10,20);
console.log(arr1)

//add data at first => unshift()
arr1.unshift(-10,0)
console.log(arr1)

//delete first element and shift to lower index => shift()
arr1.shift();
console.log(arr1)

//delete last element => pop()
arr1.pop()
console.log(arr1)

//sort the data => sort()
//sort() is basically for strings only when numbers get involve it can produce incorrect result as comparing 25 and 100 it will show 25 as  bigger because it will assume as 2 is bigger than 1.
//to covercame this we use a compare function as written below for more visit www.w3school.com .
arr1.sort(function(a,b){
    return a-b;
})
console.log(arr1)

//remove and add (replace) element in array => splice(index, count, elements)
//can be used as to remove only element => splice(index, count) 
//can be used as add only element => splice(index, 0, elements to add) 
//we can add and remove element from any index 
arr1.splice(2, 2, 70,30,60)
console.log(arr1)

arr1.splice(2, 2)
console.log(arr1)

arr1.splice(2, 0, 70, 60)
console.log(arr1)

//slice() is a JS array method with slices out a  part of an array into a new array.
//slice() method create a new array.
//slice() method does not remove any element from source array.
//slice(start argument, and up to(not including it))
let arr2 = arr1.slice(1,3)
console.log(arr2) 
console.log(arr1)

//for Reading each and every data from array we use => forEach()
//for reading a single record we use  ==> array[indexNumber]
arr1.forEach(function(value, index){
    console.log(index, value)
})

//To convert Array to String ==> join()
//We can add any value in between 2 elements of array using (" ") in join( )
let arrtostr = arr1.join("/  ")
console.log(arrtostr)

//Find data in array ==> find(), filter()
search = 60;
//Single searching ==> find() ==> even if their are multiple same element present in array it will only return single record else "undefined".
let searchnumber = arr1.find(function(value,index){
    return value === search ;
});
console.log(searchnumber);
//multiple searching ==> filter() ==> if their are multiple element it will return a array list (list[ ]) of all same elements else it will return empty array ([ ]).
let searchlist = arr1.filter(function(value,index){
    return value === search ;
});
console.log(searchlist);

//To create a new array from a  pre array ==> map()
arr1.map((value, index) => {
    console.log("map",value);
})
//we can recreate the arary as we want.
let squareArray  = arr1.map((value, index) => {
    let square =value * value;
    console.log(index, value, square);
    return square;
})
console.log(squareArray);

//There are many more array methods we use we can refer from w3school.com or mdn
