// Function to pause the video
function pauseVideo() {
  const video = document.querySelector('video');
  if (video && !video.paused) {
      video.pause();
      console.log("Video paused due to window blur.");
  }
}

// Function to play the video
function playVideo() {
  const video = document.querySelector('video');
  if (video && video.paused) {
      video.play();
      console.log("Video resumed due to window focus.");
  }
}

// Listen for window focus and blur events
window.addEventListener('blur', pauseVideo);
window.addEventListener('focus', playVideo);
