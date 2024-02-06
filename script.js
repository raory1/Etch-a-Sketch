// 54 = 9 x 9
// 
const parent = document.querySelector("#grid-box")
const btnRgb = document.querySelector("#btn-rgb")
const btnBlack = document.querySelector("#btn-black")
const btnProgressiveBlack = document.querySelector("#btn-progressive-black")
const btnEraser = document.querySelector("#btn-eraser")
const btnClear = document.querySelector("#btn-clear")
const rangeGridSizeElement = document.querySelector("#grid-size")
const rootElement = document.documentElement;
let gridSize = 32


randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

function paintRandomRGB() {
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    return `rgb(${r},${g},${b})`;
}

let opacity = 0.0
function paintProgressiveBlack(){
    opacity += 0.01
    return `rgb(0,0,0,${opacity})`
}

function paintBlack(){
    return `rgb(0,0,0)`
}

function eraser(){
    return `rgb(255,255,255)`
}

function clearScreen() {
    document.querySelectorAll(".grid-item").forEach((child) =>
    child.style.backgroundColor = "#FFFFFF"
)}

// ?
function updateItemSize() {
    document.querySelectorAll(".grid-item").forEach((child) => {
        parent.removeChild(child)
    })

    gridSize = (parseInt(rangeGridSizeElement.value))
    for (let i = 0; i<(gridSize*gridSize); i++){
        const grid = document.createElement("div");
        grid.className = "grid-item";
        parent.appendChild(grid);
    } 
    document.querySelectorAll(".grid-item").forEach((child) =>
    child.addEventListener("mouseover", () => changeColor(child)))
    rootElement.style.setProperty('--item-size', `calc(640px / ${gridSize})`);
    console.log(gridItemSize)
}



rangeGridSizeElement.addEventListener('mouseup', updateItemSize)
//change color
let colorType = 0
btnRgb.addEventListener('click', ()=>colorType = 0)
btnProgressiveBlack.addEventListener('click', ()=> {
    opacity = 0.0
    colorType = 1})
btnBlack.addEventListener('click', ()=>colorType = 2)
btnEraser.addEventListener('click', ()=>colorType = 3)
btnClear.addEventListener('click', ()=>this.clearScreen())

function changeColor(child) {
    if(colorType == 0)
        child.style.backgroundColor = paintRandomRGB();
    else if(colorType == 1)
        child.style.backgroundColor = paintProgressiveBlack();
    else if(colorType == 2)
        child.style.backgroundColor = paintBlack();
    else if(colorType == 3)
        child.style.backgroundColor = eraser();
}

