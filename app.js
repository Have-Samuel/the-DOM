const ul = document.body.firstElementChild.nextElementSibling;

const fstLi = ul.firstElementChild;

console.log(fstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');
// section.style.backgroundColor = 'brown';

button.addEventListener('click', () => {
  // if (section.className === 'color visible') {
  //   section.className = 'color invisible';
  // } else {
  //   section.className = 'color visible';
  // }
  section.classList.toggle('invisible');
});
