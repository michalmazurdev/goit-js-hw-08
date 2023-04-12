import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emlInputEl = document.querySelector('input');
const msgInputEl = document.querySelector('textarea');
const submitBtnEl = document.querySelector('button');
formEl.addEventListener('input', event => {
  const {
    elements: { email, message },
  } = event.currentTarget;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: email.value, message: message.value })
  );
});

window.addEventListener('load', () => {
  emlInputEl.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
  msgInputEl.value = JSON.parse(
    localStorage.getItem('feedback-form-state').message
  );
});

// window.addEventListener('load', () => {
//   if (localStorage.getItem('feedback-form-state') == null) {
//     return;
//   } else {
//     emlInputEl.value = JSON.parse(
//       localStorage.getItem('feedback-form-state')
//     ).email;
//     msgInputEl.value = JSON.parse(
//       localStorage.getItem('feedback-form-state').message
//     );
//   }
// });

// Wykonuj to zadanie w plikach 03-feedback.html i 03-feedback.js. Rozbij je na kilka pod-zadań:

// Śledź w formularzu zdarzenie input, i za każdym razem zapisuj
// w local storage obiekt z polami email i message, w których
// przechowywane są aktualne wartości pól formularza.
// Niech kluczem do tych danych w storage będzie "feedback-form-state".
// Podczas przeładowywania strony sprawdzaj stan storage i jeśli są tam
// zapisane dane, wypełniaj nimi pola formularza.W przeciwnym wypadku
// pola powinny być puste.
// Po wysłaniu formularza wyczyść storage i pola formularza,
// a także wyloguj obiekt z polami email, message i ich aktualnymi wartościami do konsoli.
// Zrób tak, aby storage aktualizował się nie częściej
// niż raz na 500 milisekund.Aby to zrobić, użyj metody
//  biblioteki lodash.throttle(dodaj ją do projektu).
