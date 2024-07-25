const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('.input-email');
const message = document.querySelector('.message');

class User {
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

  const resultObjUser = new User(email.trim().toLowerCase(), message.trim());
  console.log(resultObjUser);
  localStorage.removeItem('feedback-form-state');
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
