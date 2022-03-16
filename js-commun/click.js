// Fonction executée lors de l'utilisation du clic droit.
$(document).bind("contextmenu", function() {
    // Si vous voulez ajouter un message d'alerte
    alert("You can't click here");
    // On indique au navigateur de ne pas réagir en cas de clic droit.
    return false;
});