const grid = document.querySelector(".grid");
const colorPicker = document.querySelector(".controls-color-picker");
const colorModeBtn = document.querySelector(".controls-color");
const rainbowModeBtn = document.querySelector(".controls-rainbow");
rainbowModeBtn.i = 0;
const greyscaleModeBtn = document.querySelector(".controls-greyscale");
const eraserBtn = document.querySelector(".controls-eraser");
const modeBtns = document.querySelectorAll(".control-modes");
const resetBtn= document.querySelector(".controls-reset");
const gridSectionSizeNum = document.querySelector(".grid-section-size");
const slider = document.querySelector(".slider");

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
    const gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach(square => {
    square.i = 100;
    square.addEventListener("mousedown", paintSquare);
    square.addEventListener("mouseover", paintSquare);
});
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

function startGreyscaleMode(event) {
    modeBtns.forEach(btn => {
        btn.classList.remove("is-active");
    });
    greyscaleModeBtn.classList.add("is-active");
}

function startEraserMode(event) {
    modeBtns.forEach(btn => {
        btn.classList.remove("is-active");
    });
    eraserBtn.classList.add("is-active");
}

function paintSquare(event) {
    if ((event.type === "mouseover" && event.buttons === 1) || event.type ==="mousedown") {
        if (rainbowModeBtn.classList.contains("is-active")) {
            event.currentTarget.style.backgroundColor = "hsl(" + (rainbowModeBtn.i) + ", 100%, 50%)";
            rainbowModeBtn.i = rainbowModeBtn.i + 25;
        }
        else if (greyscaleModeBtn.classList.contains("is-active")) {
            if (event.currentTarget.i > 0) {
                event.currentTarget.i = event.currentTarget.i - 10;
            }
            event.currentTarget.style.backgroundColor = "hsl(0, 0%," + (event.currentTarget.i) + "%)";
        }
        else if (eraserBtn.classList.contains("is-active")) {
            event.currentTarget.style.backgroundColor = "initial";
        }
        else {
            event.currentTarget.style.backgroundColor = color;
            i = 0;
        }
    }
}

function resetSquare(event) {
    const gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach(square => {
        square.style.backgroundColor = "initial";
    });
}

function changeGrid(event) {
    const gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach(square => {
        square.remove();
        console.log(square);
    })
    squareNum = Math.pow(event.currentTarget.value, 2);
    fillGrid(squareNum, grid);

    gridSectionSizeNum.textContent = `${event.currentTarget.value} x ${event.currentTarget.value}`;
}

const quantity = 16;

fillGrid(quantity, grid);

colorPicker.addEventListener("change", changeChosenColor);

colorModeBtn.addEventListener("click", startColorMode);
rainbowModeBtn.addEventListener("click", startRainbowMode);
greyscaleModeBtn.addEventListener("click", startGreyscaleMode);
eraserBtn.addEventListener("click", startEraserMode);

slider.addEventListener("change", changeGrid);

resetBtn.addEventListener("click", resetSquare);