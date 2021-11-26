/* Get elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player_slider');

/* Build functions */
function togglePlay() {
  //video.paused ? video.play() : video.pause();

  // Alternatively you can define a constant and pass as method name.
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

/* Create event listeners */
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);