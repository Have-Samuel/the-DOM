// const allItemElements = document.querySelectorAll('li');
const allItemElements = document.getElementsByTagName('li');

for (const alEl of allItemElements) {
  console.dir(alEl);
}

const h1 = document.getElementById('main-title');
h1.textContent = 'Some other text!';
h1.style.color = 'brown';
h1.style.backgroundColor = 'pink';

const li = document.querySelector('li:last-of-type');

li.textContent = li.textContent + ' (Change)';
