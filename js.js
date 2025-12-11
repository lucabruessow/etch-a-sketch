const grid = document.querySelector(".grid");

function fillGrid(quantity, grid) {
    const flexBasis = 100 / Math.sqrt(quantity);
    for (let index = 0; index < quantity; index++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.flexBasis = `${flexBasis}%`;
        grid.appendChild(square);
    }
}

const quantity = 36;

fillGrid(quantity, grid);