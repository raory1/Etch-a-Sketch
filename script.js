const grid = document.querySelector("#grid")

for (let i = 0; i < 16 * 16; i++) {
    const pixel = document.createElement("div");
    grid.append(pixel);
}

pixels = grid.querySelectorAll("div")

pixels.forEach(pixel => {
    pixel.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = "#FFFFFF"
    })
})