const containerEl = document.querySelector('#container');
const generateNewGrid = document.querySelector('#generator');
const formGridColor = document.querySelector('#choiceColor');

let intervalo;
let defaultGridSize = 16;
let cell = [];

//functions

function createGrid(gridSize) {
  removeCells();
  

  containerEl.style.gridTemplateColumns = (`repeat(${gridSize}, 1fr`);
  containerEl.style.gridTemplateRows = (`repeat(${gridSize}, 1fr`);
  let gridArea = gridSize * gridSize;

  for (let  i = 1; i <= gridArea; i++) {
    cell[i] = document.createElement("div");
    cell[i].classList.add('cell');
    cell[i].style = 'background-color: white';
    containerEl.appendChild(cell[i]);
  }

  
}


function changeColor() {

    
    let getColor = formGridColor.color.value;

    if (getColor === 'user'){
      this.style.backgroundColor = userChoiceEl.value;
    }
    
    this.style.backgroundColor = getColor;
}

function removeColors() {
    let removeDivColor = document.querySelectorAll('.cell');
    removeDivColor.forEach(e => e.style.backgroundColor = 'white');
}

function removeCells() {
  while(containerEl.firstChild) {
    containerEl.removeChild(containerEl.firstChild);
  }
}

function borracha() {
  this.style.backgroundColor = 'white';
}


//label and input range

const labelGridSize = document.querySelector('#sizeLabel');
const inputGridSize = document.querySelector('#sizeRange');

inputGridSize.value = 16;

labelGridSize.textContent = inputGridSize.value;

inputGridSize.addEventListener('mousemove', function () {
  labelGridSize.textContent = inputGridSize.value;
});

generateNewGrid.addEventListener('click', function () {
  createGrid(inputGridSize.value);
  const divItensEl = document.querySelectorAll('.cell');
  divItensEl.forEach(e => e.addEventListener('mouseover', changeColor));
})


//Color Change 
const userChoiceEl = document.querySelector('#userChoice');



//default
createGrid(defaultGridSize);

//pintar
const divItensEl = document.querySelectorAll('.cell');
divItensEl.forEach(e => e.addEventListener('mouseover', changeColor));
//apagar

const buttonClear = document.querySelector('#clear');
buttonClear.addEventListener('click', removeColors);

