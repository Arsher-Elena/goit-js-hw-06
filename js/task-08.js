document.body.style.backgroundColor = '#232931';
document.body.style.color = '#eeeeee';

const loginForm = document.querySelector('.login-form');


loginForm.addEventListener('submit', submitHandler)
let profile = {};

function submitHandler(event) {
    event.preventDefault();
    
    const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;
  
  
  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  } else {
    profile = profile.email = email.value;
    profile.password = password.value;

    event.currentTarget.reset();
    console.log(profile);
  }
  
}
