const refs = {
  bodySelector: document.querySelector('body'),
  btnStart: document.querySelector('data-start'),
  btnStop: document.querySelector('data-stop'),
};

console.log('gde console???');
console.log('asdqwe');

let timerId = null;
console.log(btnStart);
refs.btnStart.addEventListener('click', () => {
  console.log('asdasd')
  timerId = setTimeout(ChangeColor, 1000);
  setTimeout();
});

function ChangeColor() {
  bodySelector.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
