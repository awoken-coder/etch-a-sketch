allTogether(4, 4);
btnClear.addEventListener('click', () => {
    allTogether()
});


function generateArrayColorCode() {
    arrayColorCode = [];
    for (i = 0; i < 9; i++) {
        red = Math.round(Math.random() * 255);
        blue = Math.round(Math.random() * 255);
        green = Math.round(Math.random() * 255);
        arrayColorCode[i] = `rgb(${red}, ${blue}, ${green})`;
    }
    arrayColorCode[9] = 'rgb(0,0,0)';
    return arrayColorCode;
};

function changeColor(item, color) { //changes the color of a cell
    if (color[0] == 'white') {
        item.style.backgroundColor = 'white';
    }
    else if (item.style.backgroundColor == 'white') {
        item.style.backgroundColor = color[0];
    }
    else {
        for (i = 0; i < 10; i++) {
            if (item.style.backgroundColor == color[i]) {
                item.style.backgroundColor = color[i + 1];
                break
            }
        }

    };
    a = typeof item.style.backgroundColor;
    b = typeof color[0];
}
function createGrid(numLin, numCol) { //creates the cell and puts it in the grid
    let numTotal = numCol * numLin;
    for (i = 0; i < numTotal; i++) {
        var square = document.createElement('div');
        square.classList.toggle('cellCanvas');
        document.getElementById('containerGrid').appendChild(square);
    };
};
function createContainer(numLin, numCol) { //creates a new container with a grid with x lines and y rows
    container = document.getElementById('containerGrid');
    var sizeLin = 1 / numLin * 100;
    var sizeCol = 1 / numCol * 100;
    var strLines = `${sizeLin}% `;
    var strCol = `${sizeCol}% `;
    strTemplateRows = '';
    strTemplateCol = '';
    for (line = 0; line < numLin; line++) {
        strTemplateRows += strLines;
    };
    for (column = 0; column < numCol; column++) {
        strTemplateCol += strCol;
    };
    container.style.gridTemplateColumns = strTemplateCol;
    container.style.gridTemplateRows = strTemplateRows;
};

function askSizeGrid() {
    l = document.getElementById('lineBox').value;
    c = document.getElementById('colBox').value;
    return [l, c]
}
function allTogether(l, c) {
    generateArrayColorCode();
    if (l == null) {
      [l,c] = askSizeGrid();
    }
    createContainer(l, c);

    createGrid(l, c);

    let cellCanvas = document.querySelectorAll('.cellCanvas');
    let colorWhite = ['white'];
    cellCanvas.forEach(item => { changeColor(item, colorWhite) })
    cellCanvas.forEach(item => {
        item.addEventListener('mouseover', e => {
            changeColor(e.target, arrayColorCode)
        })
    });
    return arrayColorCode;
};