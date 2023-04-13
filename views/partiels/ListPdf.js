function ListPdf() {
    // Telechargement de la page en version PDF
    $('#download-List').click(function() {
        // Efface  le bouton du telechargement
        $('#download-List').css('display', 'none')

        // Converti le contenu html en version PDF
        $.get('/List', function(html) {
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
                margin: [0, 0, 0, 0],
                html2canvas: {
                    scale: .92,
                }
            })
        })
    })
    // ----------------------------------------------------------------------
}