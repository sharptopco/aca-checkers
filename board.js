function toggle() {
    let checkers = $(this).children()
    if (checkers[0].hidden && checkers[1].hidden) {
        checkers[0].hidden = false
        checkers[1].hidden = true
    } else if (!checkers[0].hidden && checkers[1].hidden) {
        checkers[0].hidden = true
        checkers[1].hidden = false
    } else {
        checkers[0].hidden = true
        checkers[1].hidden = true
    }
}

$(document).ready(function () {
    console.log('document ready')
    $('.black.cell').click(toggle)
})