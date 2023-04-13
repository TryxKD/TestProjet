function drawToDo() {
    if(($.isArray(jsonObjectToDo)) && (jsonObjectToDo.length > 0)) {
        $.each(jsonObjectToDo, function(index, value) {
            if (value != null && value !== undefined) {
                $('body').append(
                    '<div class="Cards">'
                    + '<header>'
                    + '<p class="CardsTime"></p>'
                    + '<p class="Alfred"> Alfred </p>'
                    + '</header>'
                    + '<table class="tab"> <thead class="head"> <tr> <th>'
                    + (value.Task_text != null && value.Task_text !== undefined ? value.Task_text : '') + 
                    '</th> </tr> </thead> <tbody class="centre"> <tr> <td> <span class="assigned"> ASSIGNED TO </span> <div> <span class="pad flou"> ' + (value.assigned != null && value.assigned !== undefined ? value.assigned : '') + ' </span> <span class="flou">' + (value.attribut != null && value.attribut !== undefined ? value.attribut : '') + ' </span> </div> '
                    + '</td> <td> <span class="due"> DUE </span> <div> <span class="rouge"> ' + (value.created != null && value.created !== undefined ? value.created : '') + ' </span> </div> '
                    + '</td> <td> <span class="projectSection"> IN 1 PROJECT(s)/SECTION(S) </span> <div> <span class="bleu"> ' + (value.section != null && value.section !== undefined ? value.section : '') + ' </span> </div>  '
                    + '</td> <td> <span class="custom"> Custom Fields </span> <div> <span class="priority"> PRIORITE </span> <span class="bleu"> ' + (value.priority != null && value.priority !== undefined ? value.priority : '') + ' </span> </div> <div> <span class="statut"> STATUT </span> <span class="bleu">' + (value.status != null && value.status !== undefined ? value.status : '') + ' </span> </div> '
                    + '</td> <td> <p class="flou"> ' + (value.description != null && value.description !== undefined ? 'Description: ' + value.description : '') + ' </p> </td> '
                    + '<td> <p class="flou"> Tag(s): ' + (value.Tagged_By != null && value.Tagged_By !== undefined ? value.Tagged_By : '0') + ' </p> </td> '
                    + '<td> <p class="flou"> Like(s): ' + (value.likes != null && value.likes !== undefined ? value.likes : '0') + ' </p> </td> '
                    + '<td> <p class="flou"> Subtask(s): ' + (value.SubTask != null && value.SubTask !== undefined ? value.SubTask : '0') + ' </p> </td> </tr> </tbody> '
                    + '<tfoot class="foot"> <tr> <td> ' + (value.Created_By != null && value.Created_By !== undefined ? value.Created_By : '') + ' </td> </tr> </tfoot> </table> '
                    + '</div>'
                )
                // Prend l'heure actuelle
                $.getScript(`partiels/CISHeure.js`, function() {
                    CISHeure()
                })
                // ----------------------------------------------------------------------
            }
        })
    }
}