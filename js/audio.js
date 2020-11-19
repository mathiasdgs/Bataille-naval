var audio = document.getElementById("audioDiv");

function playAudio() {
    audio.play();
};


// window.addEventListener('mousemove', playAudio);

function audioToggle (e) {
  e = e || window.event;
  audio.muted = !audio.muted;
  e.preventDefault();

  console.log(e.target.id);
  localStorage.setItem('mute', audio.muted ? "true" : "false");
  console.log(localStorage);
}

document.getElementById("speakerOn").onclick = function(e) {
    document.getElementById("speakerOff").classList.remove("none");
    document.getElementById("speakerOn").classList.add("none");
    audioToggle(e);

}
document.getElementById("speakerOff").onclick = function(e) {

    document.getElementById("speakerOff").classList.add("none");
    document.getElementById("speakerOn").classList.remove("none");
    audioToggle(e);

}

// audio.muted = localStorage.getItem('mute') === "true" ? true : false;

// if (localStorage.mute === "true") {

if (localStorage.getItem('mute') === "true") {
  audio.muted = true;
  document.getElementById("speakerOff").classList.remove("none");

}else{
  audio.muted = false;
  document.getElementById("speakerOn").classList.remove("none");
}