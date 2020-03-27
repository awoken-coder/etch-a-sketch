allTogether(2, 3);

btnClear.addEventListener('click', () => {
    allTogether()
});

function allTogether() {
    l = prompt('How many lines should the board have?');
    c = prompt('How many rows should the board have?');
    
    createContainer(l, c);
    
    createGrid(l, c);
    
    let cellCanvas = document.querySelectorAll('.cellCanvas');
    
    cellCanvas.forEach(item => changeColor(item, 'white'));

    cellCanvas.forEach(item => {
        item.addEventListener('mouseover', e => {
            changeColor(e.target, 'black')
        })
    });

    function changeColor(item, color) { //changes the color of a cell
        item.style.backgroundColor = color
    };
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
};