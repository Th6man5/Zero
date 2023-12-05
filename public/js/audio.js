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

var shuffle = document.getElementById("shuffle");
shuffle.addEventListener("click", () => {
  shuffle.innerHTML =
    '<path d="M15.0625 1L17.875 3.8125M17.875 3.8125L15.0625 6.625M17.875 3.8125H14.125C13.2538 3.8125 12.8181 3.8125 12.4559 3.88456C10.9683 4.18046 9.80547 5.34332 9.50959 6.83087C9.4375 7.19312 9.4375 7.62878 9.4375 8.5C9.4375 9.37122 9.4375 9.80687 9.36541 10.1691C9.06953 11.6567 7.90666 12.8195 6.41909 13.1154C6.05685 13.1875 5.62123 13.1875 4.75 13.1875H1M16 15.0625L17.875 13.1875M17.875 13.1875L15.0625 10.375M17.875 13.1875H14.125C13.2538 13.1875 12.8181 13.1875 12.4559 13.1154M1 3.8125H4.75C5.62123 3.8125 6.05685 3.8125 6.41909 3.88456C6.48845 3.89836 6.55711 3.91403 6.625 3.93154" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16.8999 16L10.8187 9.91883L7.98107 7.08117L1.8999 1" stroke="black" stroke-width="2" stroke-linecap="round"/>';
});

var repeat = document.getElementById("repeat");
repeat.addEventListener("click", () => {
  repeat.innerHTML =
    '<path d="M16.9 16L10.8189 9.91883L7.98119 7.08117L1.90002 1" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M15.0625 1L17.875 3.8125M17.875 3.8125L15.0625 6.625M17.875 3.8125H4.75C2.67893 3.8125 1 5.49143 1 7.5625M3.8125 16L1 13.1875M1 13.1875L3.8125 10.375M1 13.1875H14.125C16.196 13.1875 17.875 11.5085 17.875 9.4375" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
});
