function drawPdf(json_todo, json_toDone) {
    // Telechargement du contenu HTML en PDF
    $('#download-Cards').click(function() {
        // Effacer le bouton apres le click
        $('#download-Cards').css('display', 'none')

        let json_todo_id = json_todo.map(x => x.id)
        let json_toDone_id = json_toDone.map(x => x.id)

        $.post('/CardsIS', {toDo_check:json_todo_id, toDone_check:json_toDone_id}, function(html) {
            // Declaration variable
            // Prend le body de la page 
            var bodyCards = $('body').html()
            // Effache les caches
            var cleanHtmlContent = DOMPurify.sanitize(bodyCards)
            // Initialisation jsPDF
            var doc = new jspdf.jsPDF('p', 'pt', 'a4')

            // Sauvegarde le contenu html en PDF
            doc.html(bodyCards, {
                callback: function(doc) {
                    doc.save('Cards.pdf')
                },
                // autoPaging: 'text',
                // margin: [top, right, bottom, left]
                // margin: [-5, 0, 0, 65],
                margin: [-3.6, 0, 0, 0],
                html2canvas: {
                    scale: 1.3,
                }
            })
        })
    })
}