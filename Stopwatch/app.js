var start = document.querySelector('.btn-start');
var stops = document.querySelector('.btn-stop');
var reset = document.querySelector('.btn-reset');
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')
var stoptime;
let minut = 0;
let sec = 0;

  start.onclick = function() {
    stoptime = setInterval(startTimer, 10);
  }
 
  stops.onclick = function(){
    clearInterval(stoptime)
  }

  reset.onclick = function(){
    clearInterval(stoptime)
    minut = 0;
    sec = 0;
    minutes.innerHTML = '0' + minut;
    seconds.innerHTML = '0'+ sec;
  }

  function startTimer () {
    minut++; 
    
    if(minut <= 9){
      minutes.innerHTML = "0" + minut;
    }
    
    if (minut > 9){
      minutes.innerHTML = minut;
      
    } 
    
    if (minut > 99) {
      sec++;
      seconds.innerHTML = "0" + sec;
      minut = 0;
      minutes.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
        seconds.innerHTML = sec;
    }
  
  }
  
    


