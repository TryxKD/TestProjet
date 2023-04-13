function PDHeure() {
    // Affichage de la date et l'heure actuelles
    var currenTime = new Date()
    $('.project-time').html($.format.date(currenTime, "dd/MM/yyyy H:mm"))
    // ----------------------------------------------------------------------

    // Autre affichage de la date et l'heure actuelles
    var currentDate = new Date();
    var formattedDate = $.format.date(currentDate, "MMM dd yyyy h:mma");
    $('.project-date').html(formattedDate)
    // affiche par exemple "Mar 15 2023 9:46am"
    // ----------------------------------------------------------------------
}