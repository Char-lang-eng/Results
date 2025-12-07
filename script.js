let audio = [];
let playing = false
let key = 0
let done;
done = new Audio("attached_assets/Result.mp3")
start = new Audio("attached_assets/Start.mp3")
danger = new Audio("attached_assets/Danger.mp3")
audio.push(new Audio("attached_assets/First_Key.mp3"));
audio.push(new Audio("attached_assets/Second_Key.mp3"));
audio.push(new Audio("attached_assets/Third_Key.mp3"));
audio.push(new Audio("attached_assets/Fourth_Key.mp3"));
audio.push(new Audio("attached_assets/Fifth_Key.mp3"));
audio.push(new Audio("attached_assets/Sixth_Key.mp3"));
audio.push(new Audio("attached_assets/Seventh_Key.mp3"));
audio.push(new Audio("attached_assets/Eighth_Key.mp3"));


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
