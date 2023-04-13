function SectionToDoing() {
    // Prend les donnees stockees dans le stockage interne et les convertis en JSON
    var jsonObjectToDoing = JSON.parse(localStorage.getItem('jsonToDoing'));
    console.log("toDoing: ", jsonObjectToDoing)
    // ----------------------------------------------------------------------

    // Creation des listes et sections
    if ($.isArray(jsonObjectToDoing) && jsonObjectToDoing.length > 0) {
        $.each(jsonObjectToDoing, function(index, value) {
            if (value != null && value !== undefined) {
                $('td.doing').append('<p class="para">' + (value.Task_text != null && value.Task_text !== undefined ? value.Task_text : '') + '\n' + '</p>');
            }
        });
    }
    // ----------------------------------------------------------------------
    // Changement de couleur
    $("td p:nth-child(odd)").css("background-color", "#e9bf00")
    // ----------------------------------------------------------------------
}