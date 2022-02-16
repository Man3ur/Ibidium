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