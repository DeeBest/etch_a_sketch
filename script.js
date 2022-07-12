'use strict'
let body = document.querySelector('#body');
let container = document.createElement('div');
    container.classList.add('container');
    body.appendChild(container);
let numberOfBoxes = 16;
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


function eraseGrid () {
    container.innerHTML = '';
}

function reloadGrid() {
    eraseGrid()
    createGrid(numberOfBoxes)
}

function boxErasor (e) {
    e.target.style.backgroundColor = 'white';
} 

function createGrid(numberOfBoxes) {
         container.style.gridTemplateColumns = `repeat(${numberOfBoxes}, 1fr)`
         container.style.gridTemplateRows    = `repeat(${numberOfBoxes}, 1fr)`
         for (let i = 0; i < numberOfBoxes * numberOfBoxes; i++) {
            let box = document.createElement('div');
            box.classList.add('box');
            box.addEventListener('mouseover && mouseDown', () => {
                box.style.backgroundColor = 'black'
                }
            );
            container.appendChild(box);
};
};
createGrid(numberOfBoxes);

function userGrid (boxesAmount) {
         boxesAmount = prompt('how many boxes per side?');
         createGrid(boxesAmount);
};

let box = document.querySelector('.box');

let button = document.createElement('button');
    button.classList.add('userGridBtn');
    button.textContent = ('Create Grid!');
    button.addEventListener('click', () => {
        eraseGrid();
        userGrid();
    })
    body.appendChild(button);
