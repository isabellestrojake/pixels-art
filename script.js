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
