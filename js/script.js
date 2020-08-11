const images = document.querySelectorAll('img');
const controls = document.querySelectorAll('button');

const buttonHandler = (e) => {
  e.target.classList.value === 'controls__left' ? console.log('links') : console.log('rechts');
}

controls.forEach(control => {
  control.addEventListener('click', buttonHandler);
})