var videoContainer = document.getElementById('videoContainer');
var video = document.getElementById('myVideo');
var playButton = document.getElementById('playButton');
var isActive = false;

playButton.addEventListener('click', function() {
  if (isActive) {
    video.pause();
    videoContainer.classList.remove('minimized');
    playButton.classList.remove('hide');
    isActive = false;
  } else {
    video.play();
    videoContainer.classList.add('minimized');
    playButton.classList.add('hide');
    isActive = true;
  }
});
