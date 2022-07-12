'use strict'
let body = document.querySelector('#body');

let heading = document.createElement('h1');
    heading.classList.add('h1');
    heading.textContent = ('Etch A Sketch!');
    body.appendChild(heading);

let main = document.createElement('div');
    main.classList.add('main');
    body.appendChild(main);

let footer = document.createElement('div');
    footer.classList.add('footer');
    footer.textContent = ('Created by Simphiwe');
    body.appendChild(footer);

let btnDiv = document.createElement('div');
    btnDiv.classList.add('btnDiv');
    main.appendChild(btnDiv);

let container = document.createElement('div');
    container.classList.add('container');
    main.appendChild(container);

let mouseDown = false
    document.body.onmousedown = () => (mouseDown = true)
    document.body.onmouseup = () => (mouseDown = false)

function eraseGrid () {
    container.innerHTML = '';
}

let colorDivPara = document.createElement('p');
    colorDivPara.classList.add('para');
    colorDivPara.textContent = ('Choose Your Color!!');
    btnDiv.appendChild(colorDivPara);

let currentColor = document.createElement('input');
    currentColor.setAttribute('id', 'currentColor');
    currentColor.setAttribute('type', 'color')
    currentColor.classList.add('button');
    btnDiv.appendChild(currentColor);

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = currentColor.value;
}

let numberOfBoxes = 16;

function createGrid(numberOfBoxes) {
         container.style.gridTemplateColumns = `repeat(${numberOfBoxes}, 1fr)`
         container.style.gridTemplateRows    = `repeat(${numberOfBoxes}, 1fr)`
         for (let i = 0; i < numberOfBoxes * numberOfBoxes; i++) {
            let box = document.createElement('div');
            box.style.outline = ('1px solid black');
            box.classList.add('box');
            box.addEventListener('mousedown', changeColor);
            box.addEventListener('mouseover', changeColor);
            container.appendChild(box);
};
};
createGrid(numberOfBoxes);

function userGrid (boxesAmount) {
         boxesAmount = prompt('how many boxes per side Between 1 and 150?')
         if (boxesAmount >=1 && boxesAmount <= 150) {
            eraseGrid();
            createGrid(boxesAmount);
         } else {
            alert('Please put the correct number between 1 and 150!!')
            eraseGrid();
            createGrid(numberOfBoxes);
         }
};
  
function hideGridLines (numberOfBoxes) {
    numberOfBoxes = prompt('how many boxes per side Between 1 and 150?');
    if (numberOfBoxes >= 1 && numberOfBoxes <= 150) {
    eraseGrid();
    container.style.gridTemplateColumns = `repeat(${numberOfBoxes}, 1fr)`
    container.style.gridTemplateRows    = `repeat(${numberOfBoxes}, 1fr)`
        for (let i = 0; i < numberOfBoxes * numberOfBoxes; i++) {
            let box = document.createElement('div');
                box.classList.add('box');
                box.addEventListener('mousedown', changeColor);
                box.addEventListener('mouseover', changeColor);
                container.appendChild(box);
         }
    } else {
        alert('Please put the correct amount between 1 and 150!!');
        eraseGrid();
        createGrid(numberOfBoxes);
    }
};

let gridLinesBtn = document.createElement('button');
    gridLinesBtn.setAttribute('id', 'gridLinesBtn');
    gridLinesBtn.classList.add('button');
    gridLinesBtn.textContent = ('Hide Grid Lines!');
    gridLinesBtn.addEventListener('click', () => {
        hideGridLines(numberOfBoxes);
    });
    btnDiv.appendChild(gridLinesBtn);

let eraseGridBtn = document.createElement('button')
    eraseGridBtn.setAttribute('id', 'eraseGridBtn');
    eraseGridBtn.classList.add('button');
    eraseGridBtn.textContent = ('Erase Grid!');
    eraseGridBtn.addEventListener('click', () => {
        eraseGrid();
        createGrid(numberOfBoxes);
    });
    btnDiv.appendChild(eraseGridBtn);

let createGridBtn = document.createElement('button');
    createGridBtn.setAttribute('id', 'createGridBtn');
    createGridBtn.classList.add('button');
    createGridBtn.textContent = ('Create New Grid!');
    createGridBtn.addEventListener('click', () => {
        eraseGrid();
        userGrid();
    })
    btnDiv.appendChild(createGridBtn);
