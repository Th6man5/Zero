let progress = document.getElementById("progress");
let song = document.getElementById("song");
let play = document.getElementById("play");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (play.classList.contains("pauseIcon")) {
    song.pause();
    play.classList.remove("pauseIcon");
    play.classList.add("playIcon");
    play.innerHTML =
      '<path d="M11.4229 6.07395C12.7101 6.87843 13.3537 7.28066 13.5744 7.79571C13.7672 8.24542 13.7672 8.75457 13.5744 9.20436C13.3537 9.71933 12.7101 10.1216 11.4229 10.9261L5.37722 14.7047C3.94859 15.5976 3.23427 16.044 2.64479 15.9966C2.13097 15.9553 1.65996 15.6943 1.35261 15.2804C1 14.8057 1 13.9633 1 12.2786V4.72144C1 3.03672 1 2.19438 1.35261 1.71961C1.65996 1.30578 2.13097 1.04473 2.64479 1.00342C3.23427 0.956031 3.94859 1.40248 5.37722 2.29538L11.4229 6.07395Z" stroke="black" stroke-width="2" stroke-linejoin="round" />';
  } else {
    song.play();
    play.classList.remove("playIcon");
    play.classList.add("pauseIcon");
    play.innerHTML = '<path d="M1 1V16M9.57143 1V16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />';
  }
}

song.onplay = function () {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
};

progress.oninput = function () {
  song.currentTime = progress.value;
  if (song.paused) {
    song.play();
    play.classList.remove("playIcon");
    play.classList.add("pauseIcon");
    play.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M1 1V16M9.57143 1V16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>';
  }
};
