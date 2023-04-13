import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emlInputEl = document.querySelector('input');
const msgInputEl = document.querySelector('textarea');
const dataFromStorage = JSON.parse(localStorage.getItem('feedback-form-state'));

formEl.addEventListener('input', event => {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: emlInputEl.value, message: msgInputEl.value })
  );
});

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

// Wykonuj to zadanie w plikach 03-feedback.html i 03-feedback.js. Rozbij je na kilka pod-zadań:

// Śledź w formularzu zdarzenie input, i za każdym razem zapisuj
// w local storage obiekt z polami email i message, w których
// przechowywane są aktualne wartości pól formularza.
// Niech kluczem do tych danych w storage będzie "feedback-form-state".
// Podczas przeładowywania strony sprawdzaj stan storage i jeśli są tam
// zapisane dane, wypełniaj nimi pola formularza.W przeciwnym wypadku
// pola powinny być puste.

// Po wysłaniu formularza
// wyczyść storage i pola formularza,
// a także
// wyloguj obiekt z polami email, message i ich aktualnymi wartościami do konsoli.

// Zrób tak, aby storage aktualizował się nie częściej
// niż raz na 500 milisekund.Aby to zrobić, użyj metody
//  biblioteki lodash.throttle(dodaj ją do projektu).
