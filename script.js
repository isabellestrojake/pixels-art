function generateColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgba(${r}, ${g}, ${b})`;
}

const rgb = document.getElementsByClassName('color');
rgb[0].style.backgroundColor = 'black';
rgb[1].style.backgroundColor = generateColor();
rgb[2].style.backgroundColor = generateColor();
rgb[3].style.backgroundColor = generateColor();

const preto = document.querySelector('.black');
const color2 = document.querySelector('.color2');
const color3 = document.querySelector('.color3');
const color4 = document.querySelector('.color4');

function selectedColor(event) {
  const selec = document.querySelector('.selected');
  const actual = event.target;
  selec.classList.remove('selected');
  actual.classList.add('selected');
}

preto.addEventListener('click', selectedColor);
color2.addEventListener('click', selectedColor);
color3.addEventListener('click', selectedColor);
color4.addEventListener('click', selectedColor);

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('pixel')) {
    const color = document.querySelector('.selected');
    const cssObj = window.getComputedStyle(color, null);

    e.target.style.backgroundColor = cssObj.getPropertyValue('background-color');
  }
});

document.getElementById('clear-board').addEventListener('click', () => {
  const pix = document.querySelectorAll('.pixel');

  for (let index = 0; index < pix.length; index += 1) {
    pix[index].style.backgroundColor = 'white';
  }
});

const fieldRef = document.getElementById('board-size');
const pixelBoardRef = document.getElementById('pixel-board');

const DEFAULT_VALUE = 5;

function createBoard(value) {
  pixelBoardRef.innerHTML = '';

  for (let index = 0; index < value; index += 1) {
    const section = document.createElement('section');
    pixelBoardRef.appendChild(section);

    for (let index2 = 0; index2 < value; index2 += 1) {
      const div = document.createElement('div');
      div.classList.add('pixel');
      section.appendChild(div);
    }
  }
}
createBoard(DEFAULT_VALUE);

function validInput() {
  const inputValue = Number(fieldRef.value);

  if (!fieldRef.value) {
    window.alert('Board inválido!');
  }
  if (inputValue < 5) {
    fieldRef.value = 5;
    return createBoard(5);
  }
  if (inputValue > 50) {
    fieldRef.value = 50;
    return createBoard(50);
  }
  createBoard(inputValue);
}
document.getElementById('generate-board').addEventListener('click', validInput);

/* Para a realização deste projeto consultei o course da Trybe e documentação das linguagens, troquei informações entre colegas e profissinais da área e participei das mentorias. */
