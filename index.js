$(document).ready(function() {
    $(".hamburg").on("click", function() {
        $("nav ul").toggleClass("menu");
    });
});

$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('scroll');
    } else {
        $('nav').removeClass('scroll');
    }
})

const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    loader.classList.add('fondu-out');

})