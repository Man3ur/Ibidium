const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    loader.classList.add('fondu-out');

})

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

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

// Fonction executée lors de l'utilisation du clic droit.
$(document).bind("contextmenu", function() {
    // Si vous voulez ajouter un message d'alerte
    alert("You can't click here");
    // On indique au navigateur de ne pas réagir en cas de clic droit.
    return false;
});

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-link')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})