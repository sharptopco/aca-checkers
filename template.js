function cellTemplate(rowNum, cellNum) {
    var isCellEven = true
    var isRowEven = true
    if (cellNum % 2 == 1) isCellEven = false
    if (rowNum % 2 == 1) isRowEven = false

    if (isCellEven != isRowEven) {
        // Black Cell
        let cellString = `<div id="cell-${rowNum}-${cellNum}" class="cell black">`
        if (rowNum <= 3) {
            cellString = cellString + `<div class="checker red-checker"></div>`
        } else if (rowNum >= 6) {
            cellString = cellString + `<div class="checker black-checker"></div>`
        } else {
            cellString = cellString + `<div class="checker black-checker" hidden="true"></div>`
        }
        cellString = cellString + `</div>`
        return cellString
    } else
        // White Cell
        return `<div id="cell-${rowNum}-${cellNum}" class="cell red"></div>`
}

function rowTemplate(rowNum) {
    console.log(`drawing row number ${rowNum}`)
    var rowString = ''
    rowString = rowString + `<div id="row-${rowNum}" class="row">`
    for (var cellNum=1; cellNum<=8; cellNum++) {
        rowString = rowString + cellTemplate(rowNum, cellNum)
    }
    rowString = rowString + `</div>`
    return rowString
}

function boardTemplate() {
    var boardString = ''
    for (var rowNum=1; rowNum<=8; rowNum++) {
        boardString = boardString + rowTemplate(rowNum)
    }
    return boardString
}