/*Javascript created by Shamanthi*/
var start = document.getElementById('start');
var reset = document.getElementById('reset');

var m = document.getElementById("minute");
var s = document.getElementById("sec");

//store a empty reference to the startTimer variable
var startTimer = null;

start.addEventListener('click', function(){
    //initialize the variable
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function(){
    m.value = 0;
    s.value = 0;
    //stop the timer after pressing "reset"
    stopInterval()
})

/*Timer function with conditions*/
function timer(){
    if(m.value == 0 && s.value == 0){
        m.value = 0;
        s.value = 0;
        playMusic.loop=false;
        playMusic(m);

    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    
    }
    return;
}

//stop the function after pressing the reset button, 
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
    clearInterval(startTimer);

}

/*Play Audio Function => Once Timer is Done*/
let play = document.getElementById("play");
function playMusic(m){
    let audio = new Audio("timer.mp3");
    audio.play();
    m.value =25;
    s.value = 0;
    stopInterval();
}
play.addEventListener(playMusic);
