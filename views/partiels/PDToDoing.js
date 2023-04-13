function PDToDoing() {
    if($.isArray(jsonObjectToDoing) && (jsonObjectToDoing.length > 0)) {
        $.each(jsonObjectToDoing, function(index, value) {
            if (value != null && value !== undefined) {
                $('body').append(
                    '<div class="project">'
                    + '<header>'
                    + '<p class="header1"> <span class="project-time"></span> <span class="alfred"> Alfred </span> </p>'
                    + '</header>'
                    + '<div class="head">'
                    + '<p class="header2"> <span class="dash"> Projects Dashboard </span> <div> <span class="create"> created <span class="project-date"></span> </span> </div> </p>'
                    + '<p class="header3">'
                    + '<span> ' + (jsonObjectToDoing.length != null && jsonObjectToDoing.length !== undefined ? jsonObjectToDoing.length : '' )  + ' </span> selection(s) in <span> ' + (jsonObjectToDoing.section != null && jsonObjectToDoing.section !== undefined ? jsonObjectToDoing[0].section : '' ) + ' </span>'
                    + 'in <span> Mes Taches </span> ' + ( jsonObjectToDoing.assigned !=null && jsonObjectToDoing.assigned !== undefined ? 'of <span> ' + jsonObjectToDoing[0].assigned : '') + ' </span>'
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
                    + '<td> <i class="fa-sharp fa-solid fa-list-check"></i> <span class="complete"> Percent Complete </span> <div> <span class="percent">'+ (value.percentComplete !=null && value.percentComplete !== undefined ? value.percentComplete : '') + '</span> </div>  </td>'
                    + '<td> <i class="fa-solid fa-bell"></i> <span class="status">' + (value.Status_id != null && value.Status_id !== undefined ? value.Status_id : '') + ' </span> </td>'
                    + '</tr>'
                    + '<tr class="tr2">'
                    + '<td> <i class="fa-sharp fa-solid fa-calendar-days"></i> <span class="haut"> DUE </span> <span class="haut started"> STARTED </span> <br> <span class="bas"> ' + (value.Due_date != null && value.Due_date !== undefined ? value.Due_date : '') + ' </span> <span class="bas start"> ' + (value.Start_date != null && value.Start_date !== undefined ? value.Start_date : '') + ' </span> </td>'
                    + '<td> <i class="fa-solid fa-user"></i> <span class="owner"> OWNER </span> <br> <span class="noOne"> ' + (value.followers != null && value.followers !== undefined ? value.followers : '') + ' </span>  </td>'
                    + '<td> <span class="description"> ' + (value.description != null && value.description !== undefined ? '<i class="fa-solid fa-pen"></i>' + value.description : '') + ' </span> </td>'
                    + '<td> <span class="program"> ' + (value.program != null && value.program !== undefined ? '<i class="fa-solid fa-folder"></i>' + value.program : '') + ' </span> </td>'
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