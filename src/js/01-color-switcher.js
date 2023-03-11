const bodySelector = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

let timerId = null;

btnStart.addEventListener('click', startColor);

btnStop.addEventListener('click', stopColor);

function stopColor() {
  btnStop.disabled = true;
  btnStart.disabled = false;
  clearInterval(timerId);
}

function startColor() {
  timerId = setInterval(ChangeColor, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
}

function ChangeColor() {
  bodySelector.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
