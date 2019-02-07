
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

function renderChecker(rowNum) {
    if (rowNum <= 3) {
        return `<div class="checker red-checker"></div>`
    } else if (rowNum >= 6) {
        return `<div class="checker black-checker"></div>`
    } else {
        return `<div class="checker black-checker" hidden="true"></div>`
    }
}

/*** Helper Methods ***/
function parity(num) {
    return (num % 2 == 0) ? 'even' : 'odd'
}

function cellColor(cellNum, rowNum) {
    return parity(cellNum) == parity(rowNum) ? 'red' : 'black'
}

/*** Another Way To Do It ***/

function renderBoard2(rowNum) {
    let rows = []
    for (var rowNum=1; rowNum<=8; rowNum++) {
        rows.push(renderRow2(rowNum))
    }

    return `${rows.join('')}`
}

function renderRow2(rowNum) {
    let cells = []
    for (var cellNum=1; cellNum<=8; cellNum++) {
        cells.push(renderCell(rowNum, cellNum))
    }

    return `
        <div id="row-${rowNum}" class="row">
            ${cells.join('')}
        </div>
    `
}
