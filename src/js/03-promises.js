import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmitCreate);

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

function onSubmitCreate(evt) {
  evt.preventDefault();
  const firstDelay = parseInt(
    document.querySelector('input[name="delay"]').value
  );
  const step = parseInt(document.querySelector('input[name="step"]').value);
  const amount = parseInt(document.querySelector('input[name="amount"]').value);
  let arrOfPromises = [];
  let delay = firstDelay;
  for (let i = 1; i <= amount; i += 1) {
    arrOfPromises.push(createPromise(i, delay));
    delay += step;
  }
  arrOfPromises.forEach(promise => {
    promise
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  });
}
