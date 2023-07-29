let quotes = {
    "Oscar Wilde" : "“Be yourself ; everyone else is already taken.”" ,
    "Frank Zappa" : "“So many books, so little time.”" ,
    "Toni Morrison" : "“You are your best thing.”" ,
    "Marcus Tullius Cicero" :   "“A room without books is like a body without a soul.”",
    "Mae West" : "“You only live once, but if you do it right, once is enough.”" ,
    "Mahatma Gandhi"  : "“Be the change that you wish to see in the world.”" ,
    "Robert Frost"  :  "“In three words I can sum up everything I've learned about life: it goes on.”" ,
    "Mark Twain" : "“If you tell the truth, you don't have to remember anything.”" ,
    "Elbert Hubbard" : "“A friend is someone who knows all about you and still loves you.” ",
    "Oscar Wilde" : "“Always forgive your enemies; nothing annoys them so much.”" 

}

let key = Object.keys(quotes);
let value = Object.values(quotes);


let button = document.querySelector("#btn");
let h1ID = document.querySelector("#quote");
let h4ID = document.querySelector("#auth");

button.addEventListener("click", function() {
    let  random = Math.floor(Math.random() * key.length );
    h4ID.innerHTML ="~" + key[random] ;
    h1ID.innerHTML = value[random] ;
}  );



