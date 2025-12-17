const grid = document.querySelector(".grid");
const colorPicker = document.querySelector(".controls-color-picker");
const colorModeBtn = document.querySelector(".controls-color");
const rainbowModeBtn = document.querySelector(".controls-rainbow");
rainbowModeBtn.i = 0
const modeBtns = document.querySelectorAll(".control-modes");
const resetBtn= document.querySelector(".controls-reset");

colorPicker.value = "#50BCF0";
let color = colorPicker.value;

function fillGrid(quantity, grid) {
    const flexBasis = 100 / Math.sqrt(quantity);
    for (let index = 0; index < quantity; index++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.flexBasis = `${flexBasis}%`;
        grid.appendChild(square);
    }
}

function changeChosenColor(event) {
    startColorMode(event);
}

function startColorMode(event) {
    modeBtns.forEach(btn => {
        btn.classList.remove("is-active");
    });
    colorModeBtn.classList.add("is-active");
    color = colorPicker.value;
}

function startRainbowMode(event) {
    modeBtns.forEach(btn => {
        btn.classList.remove("is-active");
    });
    rainbowModeBtn.classList.add("is-active");
}

function paintSquare(event) {
    if ((event.type === "mouseover" && event.buttons === 1) || event.type ==="mousedown") {
        if (rainbowModeBtn.classList.contains("is-active")) {
            event.currentTarget.style.backgroundColor = "hsl(" + (rainbowModeBtn.i) + ",100%,50%)";
            rainbowModeBtn.i = rainbowModeBtn.i + 25;
        }
        else {
            event.currentTarget.style.backgroundColor = color;
            i = 0;
        }
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

colorPicker.addEventListener("change", changeChosenColor);

colorModeBtn.addEventListener("click", startColorMode);
rainbowModeBtn.addEventListener("click", startRainbowMode);

gridSquares.forEach(square => {
    square.addEventListener("mousedown", paintSquare);
    square.addEventListener("mouseover", paintSquare);
});

resetBtn.addEventListener("click", resetSquare);