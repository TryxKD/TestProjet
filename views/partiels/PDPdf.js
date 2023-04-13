function PDPdf() {
    // Telechargement de la page en version PDF
    $('#download-project').click(function() {
        // Efface  le bouton du telechargement
        $('#download-project').css('display', 'none')
        
        // Converti le contenu html en version PDF
        $.get('/ProjectDashboard', function(html) {
            var project = $('body').html()

            // Efface les caches
            var clearContentHtml = DOMPurify.sanitize(project)
            console.log(clearContentHtml)

            // initialisation jspdf
            var doc = new jspdf.jsPDF('p', 'pt', 'a4')
            // doc.addImage(backgroundImage, 'JPEG', 0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height);


            // Sauvegarde le contenu HTML en pdf
            doc.html(clearContentHtml, {
                callback: function(pdf) {
                    // doc.addImage("/Nuage.jpg", "JPEG", 10, 10, options.imageWidth, options.imageHeight)
                    // doc.text(html, 10, 10);
                    doc.save('ProjectDashboard.pdf')
                },
                // margin: [top, right, bottom, left]
                margin: [-3.6, 0, 0, 0],
                html2canvas: {
                    scale: 1.3,
                }
            })
        })
    })
}