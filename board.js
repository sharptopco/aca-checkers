$(document).ready(function () {
    console.log('document ready')
    $('.black.cell').click(toggle)
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
        checker.addClass('red-checker')
    } else {
        checker.addClass('black-checker')
        checker.removeClass('red-checker')
    }
}
