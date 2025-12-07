let audio = [];
let playing = false
let key = 0
let done;
done = new Audio("Result.mp3")
start = new Audio("Start.mp3")
danger = new Audio("Danger.mp3")
audio.push(new Audio("First_Key.mp3"));
audio.push(new Audio("Second_Key.mp3"));
audio.push(new Audio("Third_Key.mp3"));
audio.push(new Audio("Fourth_Key.mp3"));
audio.push(new Audio("Fifth_Key.mp3"));
audio.push(new Audio("Sixth_Key.mp3"));
audio.push(new Audio("Seventh_Key.mp3"));
audio.push(new Audio("Eighth_Key.mp3"));


function setup() {
  createCanvas(400, 400);
  background(220);
  start.volume = 0.5;
}

function music() {
  if(key == 8){
    key = 0;
  }
  if(playing){
    audio[key].pause();
    audio[key].currentTime = 0;
    key++;
    done.play();
    playing = false;
  }
  else{
  audio[key].play();
  playing = true;
  }
}
function intro(){
  start.play();
  key = 0;
  
}
function tense(){
  if(playing == false){
    danger.play();
    playing = true;
    key = 0;
  }
  else{
    danger.pause();
    danger.currentTime = 0;
    done.play();
    playing = false;
  }
}
window.setup = setup;
window.music = music;
