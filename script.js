// 54 = 9 x 9
// 
const rootElement = document.documentElement;
const parent = document.querySelector("#grid-box")
const btnRgb = document.querySelector("#btn-rgb")
const btnBlack = document.querySelector("#btn-black")
const btnProgressiveBlack = document.querySelector("#btn-progressive-black")
const btnEraser = document.querySelector("#btn-eraser")
const btnClear = document.querySelector("#btn-clear")
const rangeGridSizeElement = document.querySelector("#range-input-grid-size")
const gridSizeValueElement = document.querySelector("#grid-size-value")
let gridSize = rangeGridSizeElement.value


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
function deleteGrids() {
    document.querySelectorAll(".grid-item").forEach((child) => {
        parent.removeChild(child)
    })
}

function createGrids() {
    console.log(gridSize)
    gridSize = (parseInt(rangeGridSizeElement.value))
    for (let i = 0; i<(gridSize*gridSize); i++){
        const grid = document.createElement("div");
        grid.className = "grid-item";
        parent.appendChild(grid);
    } 
    document.querySelectorAll(".grid-item").forEach((child) =>
    child.addEventListener("mouseover", () => changeColor(child)))
}

function updateItemSize() {
    deleteGrids()
    createGrids()
    rootElement.style.setProperty('--item-size', `calc(600px / ${gridSize})`);
}

createGrids()

rangeGridSizeElement.addEventListener('mouseup', updateItemSize)

rangeGridSizeElement.addEventListener('input', (event)=>{
    gridSizeValueElement.innerHTML = `${event.target.value} x ${event.target.value}`
})

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

