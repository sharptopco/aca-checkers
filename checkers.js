var selectedChecker = undefined
var nextId = 0

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
]

function renderCheckers() {
    clearCheckers()
    $('.black.cell').click(moveCheckerHere)

    for (let i = 0; i<checkers.length; i++){
        let checker = checkers[i]
        renderChecker(checker)
        preventMovementToCell(checker.row, checker.cell)
    }

    $(`.checker`).click(selectChecker)
    if(selectedChecker) {
        $(`#checker-${selectedChecker.id}`).click(removeChecker)
        $(`#checker-${selectedChecker.id}`).addClass('selected')
    }
}

function renderChecker(checker) {
    let checkerHtml = `<div id="checker-${checker.id}" class="checker ${checker.color}-checker" checker-id="${checker.id}"></div>`;
    if(checker.row === undefined) {
        $(`#out-of-play-${checker.color}`).append(`<div class="cell">${checkerHtml}</div>`)
    }
    $(`#cell-${checker.row}-${checker.cell}`).html(checkerHtml)
}

function clearCheckers() {
    $('.out-of-play').html('')
    $('.cell').html('')
}

function removeChecker() {
    if(selectedChecker) {
        selectedChecker.row = undefined
        selectedChecker.cell = undefined
        selectedChecker = undefined
        renderCheckers()
    }
}

function selectChecker() {
    let id = $(this).attr('checker-id');
    selectedChecker = checkers[id]
    renderCheckers()
}

function moveChecker(row, cell) {
    selectedChecker.row = row
    selectedChecker.cell = cell
    selectedChecker = undefined
    renderCheckers()
}

function whiteChecker(row, cell) {
    return createChecker(row, cell, 'white');
}

function blackChecker(row, cell) {
    return createChecker(row, cell, 'black');
}

function createChecker(row, cell, color) {
    let checker = {id: nextId, row: row, cell: cell, color: color}
    nextId++
    return checker
}