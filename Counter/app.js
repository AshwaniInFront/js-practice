var val = document.getElementById('value');

const buttonDec = document.querySelector('.decrease');
const buttonInc = document.querySelector('.increase');
const buttonReset = document.querySelector('.reset');

buttonDec.addEventListener('click',function(){
   val.innerText--;
   if(val.innerText < 0){
    val.style.color = 'red';
    }
})

buttonInc.addEventListener('click',function(){
    val.innerText++;
    if(val.innerText > 0){
        val.style.color = 'green';
    }
})

buttonReset.addEventListener('click',function(){
    val.innerText = 0;   
})

if(val == 0){
    val.style.color = 'black';
}
