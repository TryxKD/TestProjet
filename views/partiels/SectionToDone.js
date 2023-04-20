function SectionToDone(jsonObjectToDone) {
    // Prend les donnees stockees dans le stockage interne et les convertis en JSON
    console.log('toDone: ', jsonObjectToDone);
    // ----------------------------------------------------------------------

    // Creation des listes et sections
    if ($.isArray(jsonObjectToDone) && jsonObjectToDone.length > 0) {
        $.each(jsonObjectToDone, function(index, value) {
            if (value != null && value !== undefined) {
                $('td.done').append('<p class="para">' + (value.Task_text != null && value.Task_text !== undefined ? value.Task_text : '') + '\n' + '</p>');
            }
        });
    }
    // ----------------------------------------------------------------------
    // Changement de couleur
    $("td p:nth-child(odd)").css("background-color", "#e9bf00")
    // ----------------------------------------------------------------------
}