// 54 = 9 x 9
// 
const parent = document.querySelector("#grid-box")

for (let i = 0; i<90; i++){
    const grid = document.createElement("div");
    grid.className = "grid-item";
    parent.appendChild(grid);
}

document.querySelectorAll(".grid-item").forEach((child) =>
    child.addEventListener("mouseover", () => changeColor(child)))

function changeColor(child) {
    child.style.backgroundColor = "green";
}