var selectedCheckerIndex = undefined

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
    for (let i = 0; i<checkers.length; i++){
        let checker = checkers[i]
        if(checker.row === undefined) {
            $(`#out-of-play-${checker.color}`).append(`<div class="cell"><div id="checker-${i}" class="checker ${checker.color}-checker" onclick="selectChecker(${i})"></div></div>`)
        }
        $(`#cell-${checker.row}-${checker.cell}`).html(`<div id="checker-${i}" class="checker ${checker.color}-checker"></div>`)
    }
}

function clearCheckers() {
    $('.out-of-play').html('')
    $('.cell').html('')
}

function removeChecker() {
    if(selectedCheckerIndex) {
        let checker = checkers[selectedCheckerIndex]
        checker.row = undefined
        checker.cell = undefined
        selectedCheckerIndex = undefined
        renderCheckers()
    }
}

function selectChecker(i) {
    selectedCheckerIndex = i
    $('.selected').removeClass('selected')
    $(`#checker-${i}`).addClass('selected')
}

function moveChecker(row, cell) {
    let checker = checkers[selectedCheckerIndex]
    checker.row = row
    checker.cell = cell
    renderCheckers()
    selectedCheckerIndex = undefined
}

function findCheckerIndex(row, cell) {
    for(let i=0; i<checkers.length; i++) {
        let checker = checkers[i];
        if(checker.row == row && checker.cell == cell) {
            return i
        }
    }

    return undefined
}

function whiteChecker(row, cell) {
    return renderChecker(row, cell, 'white');
}

function blackChecker(row, cell) {
    return renderChecker(row, cell, 'black');
}

function renderChecker(row, cell, color) {
    return {row: row, cell: cell, color: color};
}