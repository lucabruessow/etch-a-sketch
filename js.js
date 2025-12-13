const grid = document.querySelector(".grid");
const resetBtn= document.querySelector(".controls-reset");

function fillGrid(quantity, grid) {
    const flexBasis = 100 / Math.sqrt(quantity);
    for (let index = 0; index < quantity; index++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.flexBasis = `${flexBasis}%`;
        grid.appendChild(square);
    }
}

function paintSquare(event) {
    if ((event.type === "mouseover" && event.buttons === 1) || event.type ==="mousedown") {
        event.currentTarget.style.backgroundColor = color;
    }
}

function resetSquare(event) {
    gridSquares.forEach(square => {
        square.style.backgroundColor = "initial";
    });
}

const quantity = 36;
fillGrid(quantity, grid);

const gridSquares = document.querySelectorAll(".grid-square");
let color = "#FFFFFF"

gridSquares.forEach(square => {
    square.addEventListener("mousedown", paintSquare);
    square.addEventListener("mouseover", paintSquare);
});

resetBtn.addEventListener("click", resetSquare);