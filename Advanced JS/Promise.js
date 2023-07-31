//      Promise
//  ---> Sucess ===> Resolve = output => .then() / try{ }
//  ---> Fail ===> Reject = error  output => .catch() / catch{ }

// when promise run the sucess/resolve output will called in .then()
// when promise run the failure/rejected errorOutput will called in .catch()

// promise defination ==> promise function
// async ==> convert a  function promise function

async function div(){
    let a = 10;
    let b = 0;
    if (b === 0){
        //created exception 
        return Promise.reject("cant divide by zero "); // returns error
    }else {
    let result = a/b;
    return Promise.resolve(result);
    }

    // resolve()
    // reject()
}

// run ==> promise function call
// syntax to  run single promise 
div().then(function(output){
    console.log(output)
}).catch(function(errorOutput){
    console.error(errorOutput)
});

// Adventages 
// Promises are asyncronous in nature, Hence they are non blocking.
// They are used to create exception.


// Handle multi Promises 

// call server api with help of fetch method
// fetch is promise based api/method 
// await will run the promise and returns the  result on sucess or throw exception on failure
// await will not allow to run next promise untill current promise is executed

// async function getData() {
//     try {
//     let url = "https://fakestoreapi.com/products"
//     let responce = await fetch(url, {method: "GET"})  ;
//     // to collect data from responce we have a .json() method
//     let result = await responce.json() ;
//     console.log(result);
//     }
//     catch (error) {
//         console.error(error.message);
//     }
// }
// getData();

async function get() {
    let a = 10 ;
    let b = 0 ;
    let responce = await fatch ( )
}

console.log("hello");
