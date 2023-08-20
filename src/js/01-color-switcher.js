body = document.querySelector('body');
startBtn = document.querySelector('button[data-start]');
stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

let timerId = null;

function onStart() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  if (onStart) {
  }
}

function onStop() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
