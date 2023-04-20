function ListPdf(json_todo, json_toDone) {
    // Telechargement de la page en version PDF
    $('#download-List').click(function() {
        // Efface  le bouton du telechargement
        $('#download-List').css('display', 'none')

        // Converti le contenu html en version PDF
        let json_todo_id = json_todo.map(x => x.id)
        let json_toDone_id = json_toDone.map(x => x.id)

        $.post('/List', {toDo_check:json_todo_id, toDone_check:json_toDone_id}, function(html) {
            var bodyList = $('body').html()

            // Efface les caches
            var cleanHtmlContent = DOMPurify.sanitize(bodyList)
            console.log(cleanHtmlContent)

            // initialisation jspdf
            var doc = new jspdf.jsPDF('p', 'pt', 'a4')

            // Sauvegarde le contenu HTML en pdf
            doc.html(bodyList, {
                callback: function(pdf) {
                    doc.save('List.pdf')
                },
                autoPaging: 'text',
                // margin: [top, right, bottom, left]
                margin: [6, 0, 0, 0],
                html2canvas: {
                    scale: .92,
                }
            })
        })
    })
    // ----------------------------------------------------------------------
}