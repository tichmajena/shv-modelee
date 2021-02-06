/*

1.Declear variables called timer
2.Get the DOM
3.Create countDown function
4.Update the DOM
5.countDown upto 0
 

*/


/*

Button:
i. Button has clicked
ii.countDown starts

1.declare variable
2. get the DOM
3. create onclick function
4.countDown starts

*/

/*
When start button is clicked:
1. countDown starts
2.Change image when countDown stop
3.countDown begins again

Change image when countDown stop:
1.Declare image variables
2.Get the DOM
3.Create changeImage function

*/


let timer = 6;
const timerEl = document.querySelector('#time');
console.log(timerEl);
function countDown() {
    console.log(timer);
    timerEl.innerHTML = timer;

    if (timer > 0) {
        //countDown
        timer = timer -1;

    }else if ( timer === 0 ) {

        return;
    }

        
}


let button;
  
button = document.querySelector('.button');
console.log(button);

button.addEventListener("click", startGame);


 function onclick(){
     startGame();
     }

function startGame(){
   setInterval(countDown,1000);

}