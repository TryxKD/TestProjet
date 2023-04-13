function ListHeure() {
    // Prend le temps actuel
    var currentTime = new Date($.now())
    $('.current-time').html(currentTime.toLocaleTimeString())
    // ----------------------------------------------------------------------
}