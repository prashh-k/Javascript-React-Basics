//String Method

let string = "This is my India .png"

//Uppercase()
string = string.toUpperCase();
console.log(string);

//Lowercase()
string = string.toLowerCase();
console.log(string);

//string to array()
let stringArray = string.split("i");
console.log(stringArray);

//File extension 
let position = string.lastIndexOf("m");
console.log(position);

//substring
let ext = string .substring(position);
console.log(ext);

//repalce 
let string1 = string.replace(/[i,m]*/g,"");
console.log(string1);