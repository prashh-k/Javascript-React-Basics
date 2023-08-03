let [min, sec, milisec] =[0,0,0];

let displaytime = document.getElementById("timer")

let timer = null ;


function stopwatch(){
    milisec++ ;
    if(milisec == 100){
        milisec = 0 ;
        sec++;
        if(sec == 60){
            sec = 0 ;
            min++;
            
            
        } 
    }

    if (min < 10 ){
        m = "0" + min;
    }
    else {
        m = min;
    }
    if (sec < 10 ){
        s = "0" + sec;
    }
    else {
        s = sec;
    }
    if (milisec < 10 ){
        ms = "0" + milisec;
    }
    else {
        ms = milisec;
    }

    milisec
    displaytime.innerHTML = m + ":" + s + ":" + ms ;


}

let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")


function startwatch(){
    if(timer !== null){
        clearInterval(timer);
    }

    timer = setInterval(stopwatch, 10)

}

function watchstop (){
    clearInterval(timer);
}

function resetwatch () {
    clearInterval(timer); 
    [min, sec, milisec] =[0,0,0];
    displaytime.innerHTML = "00:00:00"


}




start.addEventListener("click", startwatch)
stop.addEventListener("click", watchstop)
reset.addEventListener("click", resetwatch)

