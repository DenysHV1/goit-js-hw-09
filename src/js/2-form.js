const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('.input-email');
const message = document.querySelector('.message');
const done = document.querySelector('.text');
const emailError = document.querySelector('.error');
const emptyError = document.querySelector('.empty-error');

const formData = {
  userEmail: '',
  userMessage: '',
};

if (localStorage.getItem('feedback-form-state')) {
  const storedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  inputEmail.value = storedData.email;
  message.value = storedData.message;
}

form.addEventListener('submit', oneClickSend);

function oneClickSend(event) {
  event.preventDefault();

  const email = event.target.elements.email.value.trim().toLowerCase();
  const message = event.target.elements.message.value.trim();

    //перевірка 1
	const array = ['!','£','$','%','^','&','*','(',')','_','-','+','=','#','~','/','?','{','}','[',']','`','¬','|','"',',','<','>',':',';',];

  for (let i = 0; i < array.length; i += 1) {
    if (email.includes(array[i])) {
      emailError.textContent = `Invalid character in name: ${array[i]}`;
      return emailError.textContent;
    }
  }

  emailError.textContent = '';

  //перевірка 2

  if (!email || !message) {
    done.textContent = '';
    emptyError.textContent = 'Please fill in all fields';
    return;
  }

  emptyError.textContent = '';

  //result
  const formData = {
    userEmail: email,
    userMessage: message,
  };

  done.textContent = 'Success!';
  console.log(formData);
  form.reset();
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
