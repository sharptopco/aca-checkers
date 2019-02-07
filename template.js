function whiteChecker(row, cell) {
    return checker(row, cell, 'white');
}

function blackChecker(row, cell) {
    return checker(row, cell, 'black');
}

function checker(row, cell, color) {
    return {row: row, cell: cell, color: color};
}

var checkers = [
    whiteChecker(1, 2),
    whiteChecker(1, 4),
    whiteChecker(1, 6),
    whiteChecker(1, 8),

    whiteChecker(2, 1),
    whiteChecker(2, 3),
    whiteChecker(2, 5),
    whiteChecker(2, 7),

    whiteChecker(3, 2),
    whiteChecker(3, 4),
    whiteChecker(3, 6),
    whiteChecker(3, 8),

    blackChecker(6, 1),
    blackChecker(6, 3),
    blackChecker(6, 5),
    blackChecker(6, 7),

    blackChecker(7, 2),
    blackChecker(7, 4),
    blackChecker(7, 6),
    blackChecker(7, 8),

    blackChecker(8, 1),
    blackChecker(8, 3),
    blackChecker(8, 5),
    blackChecker(8, 7),

    //TODO: For testing purposes - remove
    blackChecker(),
    blackChecker(),
    blackChecker(),
    blackChecker(),
    blackChecker(),
    blackChecker(),
    blackChecker(),
    blackChecker(),
    blackChecker(),
    blackChecker(),
    blackChecker(),
    blackChecker(),
    whiteChecker(),
    whiteChecker(),
    whiteChecker(),
    whiteChecker(),
    whiteChecker(),
    whiteChecker(),
    whiteChecker(),
    whiteChecker(),
    whiteChecker(),
    whiteChecker(),
    whiteChecker(),
    whiteChecker(),
]

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
    return `<div id="cell-${rowNum}-${cellNum}" class="cell ${cellColor(cellNum, rowNum)}"></div>`
}

function renderCheckers() {
    for (let i = 0; i<checkers.length; i++){
        let checker = checkers[i]
        if(checker.row === undefined) {
            $(`#out-of-play-${checker.color}`).append(`<div class="cell"><div class="checker ${checker.color}-checker"></div></div>`)
        }
        $(`#cell-${checker.row}-${checker.cell}`).append(`<div class="checker ${checker.color}-checker"></div>`)
    }
}

function renderChecker(rowNum) {
    if (rowNum <= 3) {
        return `<div class="checker white-checker"></div>`
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
    return parity(cellNum) == parity(rowNum) ? 'white' : 'black'
}

