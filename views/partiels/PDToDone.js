function PDToDone(jsonObjectToDone) {
    if($.isArray(jsonObjectToDone) && (jsonObjectToDone.length > 0)) {
        $.each(jsonObjectToDone, function(index, value) {
            if (value != null && value !== undefined) {
                $('body').append(
                    '<div class="project">'
                    + '<header>'
                    + '<p class="header1"> <span class="project-time"></span> <span class="alfred"> Alfred </span> </p>'
                    + '</header>'
                    + '<div class="head">'
                    + '<p class="header2"> <span class="dash"> Projects Dashboard </span> <div> <span class="create"> created <span class="project-date"></span> </span> </div> </p>'
                    + '<p class="header3">'
                    + '<span> ' + (jsonObjectToDone.length != null && jsonObjectToDone.length !== undefined ? jsonObjectToDone.length : '' ) + ' </span> selection(s) in <span> ' + (jsonObjectToDone.section != null && jsonObjectToDone.section !== undefined ? jsonObjectToDone[0].section : '' ) + ' </span>'
                    + 'in <span> Mes Taches </span> of <span> ' + ( jsonObjectToDone.assigned !=null && jsonObjectToDone.assigned !== undefined ? 'of <span> ' + jsonObjectToDone[0].assigned : 'Aucun') + ' </span>'
                    + '</p>'
                    + '</div>'
                    + '<div class="img">'
                    + '<table>'
                    + '<thead>'
                    + '<tr>'
                    + '<th> ' + (value.Task_text != null && value.Task_text !== undefined ? value.Task_text : '') + '</th>'
                    + '</tr>'
                    + '</thead>'
                    + '<tbody>'
                    + '<tr class="tr1">'
                    + '<td> <span class="complete"> Percent Complete </span> <div> <span class="percent">'+ (value.percentComplete !=null && value.percentComplete !== undefined ? value.percentComplete : 'Aucun') + '</span> </div> </td>'
                    + '<td> <span class="status"> STATUS </span> <span class="donne"> ' + (value.Status_id != null && value.Status_id !== undefined ? value.Status_id : '') + ' </span> </td>'
                    + '</tr>'
                    + '<tr class="tr2">'
                    + '<td> <span class="haut"> DUE </span> <span class="haut started"> STARTED </span> <br> <span class="bas"> ' + (value.Due_date != null && value.Due_date !== undefined ? value.Due_date : 'Aucune') + ' </span> <span class="bas start"> ' + (value.Start_date != null && value.Start_date !== undefined ? value.Start_date : 'Aucune') + ' </span> </td>'
                    + '<td> <span class="owner"> OWNER </span> <br> <span class="noOne"> ' + (value.followers != null && value.followers !== undefined ? value.followers : 'Aucun') + ' </span>  </td>'
                    + '<td> <span class="description"> Description: </span> <span class="donne"> ' + (value.description != null && value.description !== undefined ? + value.description : 'Aucune') + ' </span> </td>'
                    + '<td> <span class="program"> Program: </span> <span class="donne"> ' + (value.program != null && value.program !== undefined ? + value.program : 'Aucun') + ' </span> </td>'
                    + '</tr>'
                    + '</tbody>'
                    + '</table>'
                    + '</div>'
                    + '</div>'
                )
                // Affichage de la date et l'heure actuelles
                $.getScript(`partiels/PDHeure.js`, function() {
                    PDHeure()
                })
                // ----------------------------------------------------------------------
            }
        })
    }
}