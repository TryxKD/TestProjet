function SectionToDo() {
    // Prend les donnees stockees dans le stockage interne et les convertis en JSON
    var jsonObjectToDO = JSON.parse(localStorage.getItem('jsonToDo'))
    console.log("toDo: ", jsonObjectToDO)
    // ----------------------------------------------------------------------

    // Creation des listes et sections
    if ($.isArray(jsonObjectToDO) && jsonObjectToDO.length > 0) {
        $.each(jsonObjectToDO, function(index, value) {
            if (value != null && value !== undefined) {
                $('td.nouveau').append('<p class="para">' + (value.Task_text != null && value.Task_text !== undefined ? value.Task_text : '') + '\n' + '</p>');
            }
        });
    }
    // ----------------------------------------------------------------------

    // Changement de couleur
    $("td p:nth-child(odd)").css("background-color", "#e9bf00")
    // ----------------------------------------------------------------------
}