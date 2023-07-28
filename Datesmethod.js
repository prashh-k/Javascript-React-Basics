//Dates method 

let date = new Date();
let string = data.toLocaleDateString();
let array = string.split("/");
let newDate = array[1] + "/" + array[0] + "/" + array[2];
console.log(newDate);

let day = date.getDay();
console.log(day);

let _date = date.getDate();
console.log(_date);

let month = date.getMonth() + 1;
console.log(month);

let year = date.getYear();
console.log(year);

let hr = date.getHours();
console.log(hr);

let min = date.getMinutes();
console.log(min);

let sec = date.getSeconds();
console.log(sec);