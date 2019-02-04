function renderChecker(rowNum) {
    if (rowNum <= 3) {
        return `<div class="checker red-checker"></div>`
    } else if (rowNum >= 6) {
        return `<div class="checker black-checker"></div>`
    } else {
        return `<div class="checker black-checker" hidden="true"></div>`
    }
}

function parity(num) {
    return (num % 2 == 0) ? 'even' : 'odd'
}

function cellColor(cellNum, rowNum) {
    return parity(cellNum) == parity(rowNum) ? 'red' : 'black'
}

function renderCell(rowNum, cellNum) {
    if (cellColor(cellNum, rowNum) === 'black') {
        // Black Cell
        return `
            <div id="cell-${rowNum}-${cellNum}" class="cell black">
                ${renderChecker(rowNum)}
            </div>
        `
    } else
        // White Cell
        return `<div id="cell-${rowNum}-${cellNum}" class="cell red"></div>`
}

function renderRow(rowNum) {
    var rowString = `<div id="row-${rowNum}" class="row">`
    for (var cellNum=1; cellNum<=8; cellNum++) {
        rowString = rowString + renderCell(rowNum, cellNum)
    }
    return rowString + `</div>`
}

function renderBoard() {
    var boardString = ''
    for (var rowNum=1; rowNum<=8; rowNum++) {
        boardString = boardString + renderRow(rowNum)
    }
    return boardString
}