let progress = document.getElementById("progress");
let video = document.getElementById("video");
let play = document.getElementById("play");

video.onloadedmetadata = function () {
  progress.max = video.duration;
  progress.value = video.currentTime;
};

function playPause() {
  if (play.classList.contains("pauseIcon")) {
    video.pause();
    play.classList.remove("pauseIcon");
    play.classList.add("playIcon");
    play.innerHTML =
      '<path d="M11.4229 6.07395C12.7101 6.87843 13.3537 7.28066 13.5744 7.79571C13.7672 8.24542 13.7672 8.75457 13.5744 9.20436C13.3537 9.71933 12.7101 10.1216 11.4229 10.9261L5.37722 14.7047C3.94859 15.5976 3.23427 16.044 2.64479 15.9966C2.13097 15.9553 1.65996 15.6943 1.35261 15.2804C1 14.8057 1 13.9633 1 12.2786V4.72144C1 3.03672 1 2.19438 1.35261 1.71961C1.65996 1.30578 2.13097 1.04473 2.64479 1.00342C3.23427 0.956031 3.94859 1.40248 5.37722 2.29538L11.4229 6.07395Z" stroke="black" stroke-width="2" stroke-linejoin="round" />';
  } else {
    video.play();
    play.classList.remove("playIcon");
    play.classList.add("pauseIcon");
    play.innerHTML = '<path d="M1 1V16M9.57143 1V16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />';
  }
}

video.onplay = function () {
  setInterval(() => {
    progress.value = video.currentTime;
  }, 500);
};

progress.oninput = function () {
  video.currentTime = progress.value;
  if (video.paused) {
    video.play();
    play.classList.remove("playIcon");
    play.classList.add("pauseIcon");
    play.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M1 1V16M9.57143 1V16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>';
  }
};

let fullscreen = document.getElementById("fullscreen");

fullscreen.addEventListener("click", function () {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else {
    video.msRequestFullscreen();
  }
});

var repeat = document.getElementById("repeat");
repeat.addEventListener("click", () => {
  repeat.innerHTML =
    '<path d="M16.9 16L10.8189 9.91883L7.98119 7.08117L1.90002 1" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M15.0625 1L17.875 3.8125M17.875 3.8125L15.0625 6.625M17.875 3.8125H4.75C2.67893 3.8125 1 5.49143 1 7.5625M3.8125 16L1 13.1875M1 13.1875L3.8125 10.375M1 13.1875H14.125C16.196 13.1875 17.875 11.5085 17.875 9.4375" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
});
