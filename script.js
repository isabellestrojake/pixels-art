const backColor = document.getElementsByClassName('color');
backColor[0].style.backgroundColor = 'black';
backColor[1].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
backColor[2].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
backColor[3].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

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
