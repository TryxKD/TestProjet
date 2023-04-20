function SectionPdf(json_todo, json_toDone) {
    // Telechargement de la page en version PDF
    $('#download-pdf').click(function() {
        // Efface  le bouton du telechargement
        $('#download-pdf').css('display', 'none')
        
        // Converti le contenu html en version PDF
        let json_todo_id = json_todo.map(x => x.id)
        let json_toDone_id = json_toDone.map(x => x.id)

        $.post('/FormatPDF', {toDo_check:json_todo_id, toDone_check:json_toDone_id}, function(html) {
            var format = $('body').html()
            console.log(format);

            // Efface les caches
            var cleanedHtmlContent = DOMPurify.sanitize(format)
            console.log(cleanedHtmlContent)

            // initialisation jspdf
            var doc = new jspdf.jsPDF('p', 'pt', 'a4');

            // Sauvegarde le contenu HTML en pdf
            doc.html(format, {
                callback: function(pdf) {
                    // Code pour télécharger le fichier PDF
                    // doc.html(format, 5, 5)
                    doc.save('ListeSection.pdf')
                },
                // x: 1,
                // y: 1
                autoPaging: 'text',
                // margin: [top, right, bottom, left]
                // margin: [0, 0, -8, 0],
                // margin: [-3.6, 0, 42, 0],
                // margin: [-3.7, 0, 24, 0],
                margin: [-2, 0, 80, 0],
                html2canvas: {
                    scale: 1.3
                }
            });
      
        });

    })
    // ----------------------------------------------------------------------
}