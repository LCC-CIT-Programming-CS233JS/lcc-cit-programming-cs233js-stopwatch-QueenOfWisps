/*
    Create 3 global variables, isRunning, timer and timerTime.
    Initialize them to false, null and 0 respectively.
*/
var isRunning = false; 
var timer = null; 
var timerTime = 0;

function init()
{
    // Put the element on the page with an id of start in a variable
    // Do the same for the stop button and the reset button
    var startBtn = document.getElementById("start");
    var stopBtn =  document.getElementById("stop"); 
    var resetBtn = document.getElementById("reset");
   



    // Add an onclick handler to each of the buttons
    // Use the functions startTimer, stopTimer and resetTimer 
    // fires when event fires so no parenthesis.
    startBtn.onclick = startTimer;
    stopBtn.onclick= stopTimer;
    resetBtn.onclick = resetTimer;  





}


function startTimer() {
    // if the timer is NOT running, start it
    // call the function incrementTimer every second
    // save the timer in a the timer variable
    //console.log("Start");
    if(!isRunning){
        isRunning=true;
        timer= setInterval(incrementTimer,1000);
        document.getElementById("prog").style="width:33%"
        
    }
    

    


}

function incrementTimer() {

    // increment the timerTime
    // calculate the number of minutes and seconds
    timerTime++
    var minutes = Math.floor(timerTime/60);
    var seconds = Math.floor(timerTime% 60);

    // write the minutes and seconds to the elements on the page
    // use the function pad to make sure there's a leading 0 if necessary
    document.getElementById("minutes").innerHTML=pad(minutes);
    document.getElementById("seconds").innerHTML=pad(seconds);
}

function pad(number) {
    // add a leading 0 if the number is < 10
    if(number<10)
     return "0" + number;
    else
     return number; 
      
}

function stopTimer() {
    // if the timer is running, stop it
    if(isRunning){
        isRunning=false; 
        clearInterval(timer);
    }
    document.getElementById("prog").style="width:66%"
    

}

function resetTimer() {
    
    // stop the timer
    
    // set the timerTime back to 0
    
    // write 00 to the elements on the page for minutes and seconds
 stopTimer();
 timerTime=0;
 document.getElementById("minutes").innerHTML=pad(0);
 document.getElementById("seconds").innerHTML=pad(0);
 document.getElementById("prog").style="width:100%"
 
}



// When the page has finished loading, call the function init
window.onload = init; //when webpage loads fire init. 