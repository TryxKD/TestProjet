function drawToDone(jsonObjectToDone) {
    if(($.isArray(jsonObjectToDone)) && (jsonObjectToDone.length > 0)) {
        $.each(jsonObjectToDone, function(index, value) {
            if (value != null && value !== undefined) {
                $('body').append(
                    '<div class="Cards">'
                    + '<header>'
                    + '<p class="CardsTime"></p>'
                    + '<p class="Alfred"> Alfred </p>'
                    + '</header>'
                    + '<table class="tab"> <thead class="head"> <tr> <th>'
                    + (value.Task_text != null && value.Task_text !== undefined ? value.Task_text : 'Aucun') + 
                    '</th> </tr> </thead> <tbody class="centre"> <tr> <td> <span class="assigned"> ASSIGNED TO </span> <div> <span class="pad flo"> ' + (value.assigned != null && value.assigned !== undefined ? value.assigned : 'Aucun') + ' </span> <span class="flo">' + (value.attribut != null && value.attribut !== undefined ? value.attribut : 'Aucun') + ' </span> </div> '
                    + '</td> <td> <span class="due"> DUE </span> <div> <span class="rouge"> ' + (value.created != null && value.created !== undefined ? value.created : 'Aucun') + ' </span> </div> '
                    + '</td> <td> <span class="projectSection"> IN 1 PROJECT(s)/SECTION(S) </span> <div> <span class="bleu"> ' + (value.section != null && value.section !== undefined ? value.section : 'Aucune') + ' </span> </div>  '
                    + '</td> <td> <span class="custom"> Custom Fields </span> <div> <span class="priority"> PRIORITE </span> <span class="bleu"> ' + (value.priority != null && value.priority !== undefined ? value.priority : 'Aucun') + ' </span> </div> <div> <span class="statut"> STATUT </span> <span class="bleu">' + (value.status != null && value.status !== undefined ? value.status : 'Aucune') + ' </span> </div> '
                    + '</td> <td> <span class="flou"> Description: ' + (value.description != null && value.description !== undefined ? value.description : '<span class="col"> Aucune </span>') + ' </span> </td> '
                    + '<td> <span class="flou"> Tag(s): ' + (value.Tagged_By != null && value.Tagged_By !== undefined ? '<span class="col"> ' + value.Tagged_By + ' </span>' : '<span class="col"> 0 </span>') + ' </span> </td> '
                    + '<td> <span class="flou"> Like(s): ' + (value.likes != null && value.likes !== undefined ? '<span class="col"> ' + value.likes + ' </span>' : '<span class="col"> 0 </span>') + ' </span> </td> '
                    + '<td> <span class="flou"> Subtask(s): ' + (value.SubTask != null && value.SubTask !== undefined ? '<span class="col"> ' + value.SubTask + ' </span>' : '<span class="col"> 0 </span>') + ' </span> </td> </tr> </tbody> '
                    + '<tfoot class="foot"> <tr> <td> ' + (value.Created_By != null && value.Created_By !== undefined ? value.Created_By : 'Aucun') + ' </td> </tr> </tfoot> </table> '
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