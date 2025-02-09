document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const progressBar = document.querySelector('.progress-bar');
  
    startButton.addEventListener('click', () => {
      progressBar.style.animationPlayState = 'running';
      startButton.disabled = true;
    });
  
    progressBar.addEventListener('animationend', () => {
      startButton.disabled = false;
    });
  });