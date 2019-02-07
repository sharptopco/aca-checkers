$(document).ready(function () {
    console.log('document ready')
    $('#board-container').html(renderBoard())
    $('.black.cell').click(toggle)
    renderCheckers()
})

function toggle() {
    let checker = $(this).children().first()
    checker.toggle()
    if(!checker.is(":visible")){
        switchColor(checker);
    }
}

function switchColor(checker) {
    if (checker.hasClass('black-checker')) {
        checker.removeClass('black-checker')
        checker.addClass('white-checker')
    } else {
        checker.addClass('black-checker')
        checker.removeClass('white-checker')
    }
}
