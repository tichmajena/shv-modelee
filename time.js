window.addEventListener('load', init);

let timer = 0.00;
let timeNumber = 1;
let timeText = 'minutepose';
let time = 0.59;

const timerEl= document.querySelector('#time');
const timeNumberEl = document.querySelector('#number');
const timeTextEl = document.querySelector('#text');
const timeEl = document.querySelector('#input');

const image = [
  "firstImage",
  "secondImage"
];


  document.querySelector('.first-image').innerHTML = randomfirstImage;

  document.querySelector('.second-image').innerHTML = randomSecondImage;

  function init() {
  time.innerHTML = currentLevel;
  // Load word from array
  showTime(words);
  timeInput.addEventListener('input', startMatch);
  setInterval(countdown, 0.59);
  setInterval(checkStatus, 'Put your time ')
  }



   // Start match
function startMatch() {
  if (matcImage()) {
    isPlaying = true;
    time = firstImage + 1;
    showImage(Image);
    imageInput.value = '';
    score++;
  }
  // If score is -1, display 0
  if (time === 0.59) {
    timeDisplay.innerHTML = 0.00;

  }else {
    timeDisplay.innerHTML = time;

  }
}


// Pick & show random image
function showImage() {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * image.length);
  //Output random words
  currentImage.innerHTML = image[randIndex];


}

// countdown timer
function countdown() {
  // Make sure time is not run out
  if(time > 0) {
    // Decrement
    time--;
  }else if (time === 0) {
    // Game is over
    isPlaying = false;
    return;
  }
  // Show time
  timeDisplay.innerHTML = time;
  console.log(time);
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
    return;
  }
}

setInterval(countdown, 1000);
// Check game status
setInterval(checkStatus, 50);

  