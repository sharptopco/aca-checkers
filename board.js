$(document).ready(function () {
    $('#board-container').html(renderBoard())
    $('.black.cell').click(cellController)
    renderCheckers()
})

function renderBoard() {
    return `
        ${renderRow(1)}
        ${renderRow(2)}
        ${renderRow(3)}
        ${renderRow(4)}
        ${renderRow(5)}
        ${renderRow(6)}
        ${renderRow(7)}
        ${renderRow(8)}
    `
}

function renderRow(rowNum) {
    return `
        <div id="row-${rowNum}" class="row">
            ${renderCell(rowNum, 1)}
            ${renderCell(rowNum, 2)}
            ${renderCell(rowNum, 3)}
            ${renderCell(rowNum, 4)}
            ${renderCell(rowNum, 5)}
            ${renderCell(rowNum, 6)}
            ${renderCell(rowNum, 7)}
            ${renderCell(rowNum, 8)}
        </div>
    `
}

function renderCell(rowNum, cellNum) {
    return `<div id="cell-${rowNum}-${cellNum}" class="cell ${cellColor(cellNum, rowNum)}" row=${rowNum} cell=${cellNum}></div>`
}

/*** Helper Methods ***/
function parity(num) {
    return (num % 2 == 0) ? 'even' : 'odd'
}

function cellColor(cellNum, rowNum) {
    return parity(cellNum) == parity(rowNum) ? 'white' : 'black'
}

function cellController() {
    let row = $(this).attr('row');
    let cell = $(this).attr('cell');

    if(isThisCheckerAlreadySelected(row, cell)) {
        removeChecker()
        return
    }

    let i = findCheckerIndex(row, cell)
    if (i !== undefined) {
        selectChecker(i)
        return
    }

    if(selectedChecker) { moveChecker(row, cell) }
}

function isThisCheckerAlreadySelected(row, cell) {
    return selectedChecker && selectedChecker.row == row && selectedChecker.cell == cell;
}

