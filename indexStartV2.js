// Create a class called StopWatch.
{
        /*
        Add a constructor.  In the body of the constructor
        -   Create instance variables for these 3 variables as well
            as all of the elements on the page that you're going to
            refer to in code
        -   All of the functionality of init will happen in the constructor.
        -   Add the event handlers for the start, stop and reset buttons.
            You'll have to bind(this) to each function because the keyword
            this will refer to the button (not the class) when the 
            event fires
            -- this.startButton.onclick = this.startTimer.bind(this);
    */
        class StopWatch
    {
            constructor()
            {
                this.isRunning=false; 
                this.timer= null; 
                this.timerTime= 0;
                this.startBtn = document.getElementById("start");
                this.stopBtn =  document.getElementById("stop"); 
                this.resetBtn = document.getElementById("reset");

                this.startBtn.onclick = this.startTimer.bind(this);
                this.stopBtn.onclick= this.stopTimer.bind(this);
                this.resetBtn.onclick = this.resetTimer.bind(this); 

            

            }
            /*
            Convert each function to a method.  
            -   Move it inside the class.
            -   Remove the keyword function
            -   Add this. in front of every variable and method
        */
            
        startTimer() {
        
        if(this.isRunning==false){
            this.isRunning=true;
            this.timer=setInterval(this.incrementTimer.bind(this),1000);
            document.getElementById("prog").style="width:33%"
            
            }

        }
        incrementTimer() {

            
            this.timerTime++
            let minutes = Math.floor(this.timerTime/60);
            let seconds = Math.floor(this.timerTime%60);
        
        
            document.getElementById("minutes").innerHTML=this.pad(minutes);
            document.getElementById("seconds").innerHTML=this.pad(seconds);
        }

        pad(number) {
            
            if(number<10)
            return "0" + number;
            else
            return number; 
            
        }

        stopTimer() {
            // if the timer is running, stop it
            if(this.isRunning==true){
                this.isRunning=false; 
                clearInterval(this.timer);
            }
            document.getElementById("prog").style="width:66%"
            
        
        }

        resetTimer() {
        
        this.stopTimer();
        this.timerTime=0;
        document.getElementById("minutes").innerHTML=this.pad(0);
        document.getElementById("seconds").innerHTML=this.pad(0);
        document.getElementById("prog").style="width:100%"
        
        }






    
    }

    // create a variable called stopWatch
    let stopWatch;


    // Add an event handler to the load event of the window. 
    window.onload=() => { stopWatch = new StopWatch();}
    // Use an anonymous function or an arrow function;
}