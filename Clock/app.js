
function clockruns(){

    const time = new Date();

    let hours = document.querySelector('.hours h4');
    let minutes = document.querySelector('.minutes h4')
    let seconds = document.querySelector('.seconds h4')


    if(hours < 10){
        hours = '0' + hours;
    }

    if(minutes < 10){
        minutes = '0' + minutes;
    }

    if(seconds < 10){
        seconds = '0' + seconds;
    }


    hours.innerHTML = time.getHours();
    minutes.innerHTML = time.getMinutes();
    seconds.innerHTML = time.getSeconds();

}

 setInterval(clockruns, 10);

