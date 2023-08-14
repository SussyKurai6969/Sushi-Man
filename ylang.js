document.addEventListener('DOMContentLoaded', function () {
    const ambientSound = document.getElementById('ambientSound');
    const toggleButton = document.getElementById('toggleSound');
  
    toggleButton.addEventListener('click', function () {
      if (ambientSound.paused) {
        ambientSound.play();
        toggleButton.textContent = 'Pause Ambient Sound';
      } else {
        ambientSound.pause();
        toggleButton.textContent = 'Play Ambient Sound';
      }
    });
  });
  