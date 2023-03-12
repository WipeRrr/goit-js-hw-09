import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', e => {
  e.preventDefault();

  const delay = e.currentTarget.delay.value;
  console.log(delay);

  const step = e.currentTarget.step.value;
  console.log(step);

  const amount = e.currentTarget.amount.value;
  console.log(amount);
  for (let index = 0; index < amount; index += 1) {
    console.log(index);
    const ping = delay + step * index;
    console.log(ping)
    createPromise(index, ping);
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

createPromise(4, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
