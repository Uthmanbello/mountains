const mountainButton1 = document.getElementById('mountain1');
const mountainButton2 = document.getElementById('mountain2');
const mountain1 = document.querySelector('.mountain1');
const mountain2 = document.querySelector('.mountain2');

mountainButton1.addEventListener('click', () => {
  mountain1.classList.remove('d-none');
  mountain2.classList.add('d-none');
  mountainButton1.classList.add('clicked');
  mountainButton2.classList.remove('clicked');
});

mountainButton2.addEventListener('click', () => {
  mountain2.classList.remove('d-none');
  mountain1.classList.add('d-none');
  mountainButton1.classList.remove('clicked');
  mountainButton2.classList.add('clicked');
});
