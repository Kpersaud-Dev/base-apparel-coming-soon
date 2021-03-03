const form = document.querySelector('.email-submit');
const input = document.querySelector('.email-input');
const errorMsg = document.querySelector('.error-message');


form.addEventListener('submit', e => {

  // Email validation regular expression
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(input.value.match(regex)) {
    alert('Email Successfully sent!');

  } else {
    
    // Prevent form submit
    e.preventDefault();

    // Show error message
    errorMsg.classList.add('show');
    
    // Make input border red
    input.classList.add('error');
  }
})


