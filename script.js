document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const playPauseButton = document.getElementById('playPause');
    const rewindButton = document.getElementById('rewind');
    const forwardButton = document.getElementById('forward');
    const volumeControl = document.getElementById('volume');
    const playbackSpeedControl = document.getElementById('playbackSpeed');
    const progressFilled = document.getElementById('progress__filled');
    const progressBar = document.querySelector('.progress-bar');

    // Update progress bar
    video.addEventListener('timeupdate', () => {
        const percent = (video.currentTime / video.duration) * 100;
        progressFilled.style.width = `${percent}%`;
    });

    // Toggle play/pause
    playPauseButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = '❚ ❚';
        } else {
            video.pause();
            playPauseButton.textContent = '►';
        }
    });

    // Rewind 10 seconds
    rewindButton.addEventListener('click', () => {
        video.currentTime -= 10;
    });

    // Forward 25 seconds
    forwardButton.addEventListener('click', () => {
        video.currentTime += 25;
    });

    // Adjust volume
    volumeControl.addEventListener('input', () => {
        video.volume = volumeControl.value;
    });

    // Adjust playback speed
    playbackSpeedControl.addEventListener('input', () => {
        video.playbackRate = playbackSpeedControl.value;
    });

    // Update volume and playback speed values on load
    volumeControl.value = video.volume;
    playbackSpeedControl.value = video.playbackRate;
});