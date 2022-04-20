const backColor = document.getElementsByClassName('color');
backColor[0].style.backgroundColor = 'black';
backColor[1].style.backgroundColor = '#452966';
backColor[2].style.backgroundColor = '#518568';
backColor[3].style.backgroundColor = '#D95B5B';

const preto = document.querySelector('.black');
const roxo = document.querySelector('.purple');
const verde = document.querySelector('.green');
const rosa = document.querySelector('.pink');

function selectedColor(event) {
  const selec = document.querySelector('.selected');
  const actual = event.target;
  selec.classList.remove('selected');
  actual.classList.add('selected');
}

preto.addEventListener('click', selectedColor);
roxo.addEventListener('click', selectedColor);
verde.addEventListener('click', selectedColor);
rosa.addEventListener('click', selectedColor);

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('pixel')) {
    const color = document.querySelector('.selected');
    const cssObj = window.getComputedStyle(color, null);

    event.target.style.backgroundColor = cssObj.getPropertyValue('background-color');
  }
});

document.getElementById('clear-board').addEventListener('click', (event) => {
  const pix = document.querySelectorAll('.pixel');

  for (let index = 0; index < pix.length; index += 1) {
    pix[index].style.backgroundColor = 'white';
  }
});
