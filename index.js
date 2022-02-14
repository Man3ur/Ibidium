const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    loader.classList.add('fondu-out');

})

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

const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal() {
    modalContainer.classList.toggle("active")
}