const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const volume = player.querySelector('[name="volume"]');
const playbackRate = player.querySelector('[name="playbackRate"]');
const skipButtons = player.querySelectorAll('[data-skip]');
let isPlaying = false;

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function skip() 
{
	if(parseFloat(this.dataset.skip)==-10)
		rewind();
	else
  video.currentTime += parseFloat(this.dataset.skip);
}
function rewind()
{
	video.currentTime +=parseFloat(this.dataset.skip);
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', () => isPlaying = true);
video.addEventListener('pause', () => isPlaying = false);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
volume.addEventListener('change', handleRangeUpdate);
volume.addEventListener('mousemove', handleRangeUpdate);
playbackRate.addEventListener('change', handleRangeUpdate);
playbackRate.addEventListener('mousemove', handleRangeUpdate);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

skipButtons.forEach(button => button.addEventListener('click', skip));