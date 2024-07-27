const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('.input-email');
const message = document.querySelector('.message');
const done = document.querySelector('.text');
const emailError = document.querySelector('.error');
const emptyError = document.querySelector('.empty-error');
class ClassData {
  constructor(email, message) {
    this.email = email;
    this.message = message;
  }
}

form.addEventListener('submit', oneClickSend);

function oneClickSend(event) {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const message = event.target.elements.message.value;
  const array = [
    '!',
    '£',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '-',
    '+',
    '=',
    '#',
    '~',
    '/',
    '?',
    '{',
    '}',
    '[',
    ']',
    '`',
    '¬',
    '|',
    '"',
    ',',
    '<',
    '>',
    ':',
    ';',
  ];
  for (let i = 0; i < array.length; i += 1) {
    if (email.includes(array[i])) {
      emailError.textContent = `Invalid character in name: ${array[i]}`;
      return emailError.textContent;
    }
  }
  emailError.textContent = '';

  if (email.length === 0 && message.length === 0) {
    return (emptyError.textContent = 'Fill please all fields');
  }
  emptyError.textContent = '';

  if (message.length === 0) {
    return (emptyError.textContent = 'Fill please all fields');
  }
  emptyError.textContent = '';

  const formData = new ClassData(email.trim().toLowerCase(), message.trim());
  console.log(formData);
  done.textContent = 'Success!';
}

const feedbackFormState = {
  email: '',
  message: '',
};

inputEmail.addEventListener('input', event => {
  feedbackFormState.email = event.target.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
});

message.addEventListener('input', event => {
  feedbackFormState.message = event.target.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
});
