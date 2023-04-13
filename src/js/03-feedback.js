import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const emlInputEl = document.querySelector('input');
const msgInputEl = document.querySelector('textarea');
const dataFromStorage = JSON.parse(localStorage.getItem('feedback-form-state'));

formEl.addEventListener(
  'input',
  throttle(event => {
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({ email: emlInputEl.value, message: msgInputEl.value })
    );
  }, 500)
);

// formEl.addEventListener('input', event => {
//   localStorage.setItem(
//     'feedback-form-state',
//     JSON.stringify({ email: emlInputEl.value, message: msgInputEl.value })
//   );
// });

window.addEventListener('load', () => {
  if (localStorage.getItem('feedback-form-state') !== null) {
    emlInputEl.value = dataFromStorage.email;
    msgInputEl.value = dataFromStorage.message;
  } else {
    emlInputEl.value = '';
    msgInputEl.value = '';
  }
});

// formEl.addEventListener('keyup', event => {
//   console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
// });

formEl.addEventListener('submit', event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  console.log(dataFromStorage);
  // dlaczego drugi console.log nie dziala??
  emlInputEl.value = '';
  msgInputEl.value = '';
  localStorage.clear();
});
