function TachesLien() {
    // Vérification si l'option avec la valeur "ListeSection" est sélectionnée
    if ($('option[value="ListSection"]').is(':selected')) {
        if($('.check:checked').length > 0) {
        // Ouvrir dans une nouvelle onglet
        // window.open("/FormatPDF")
            $.ajax({
                url: '/FormatPDF',
                type: 'POST',
                data: {
                    toDo_check: toDo_tache,
                    toDone_check: done_tache
                },
                success: function(html) {
                    var newWindow = window.open("", "_blank")
                    newWindow.document.write(html)
                }
            })
            
        } 
        else {
            if($('.check:checked').length == 0) {
                $.ajax({
                    url: '/FormatPDF',
                    type: 'POST',
                    data: {
                        toDo_check: toDo_tache,
                        toDone_check: done_tache
                    },
                    success: function(html) {
                        var newWindow = window.open("", "_blank")
                        newWindow.document.write(html)
                    }
                })
            }
        }
    // ----------------------------------------------------------------------

    // Vérification si l'option avec la valeur "Liste" est sélectionnée
    } else if( $('option[value="List"]').is(':selected')) {
        if($('.check:checked').length > 0) {
        // Ouvrir dans une nouvelle onglet
        // window.open('/List')

            $.ajax({
                url: '/List',
                type: 'POST',
                data: {
                    toDo_check: toDo_tache,
                    toDone_check: done_tache
                },
                success: function(html) {
                    // $('body').html(html)
                    var newWindow = window.open("", "_blank")
                    newWindow.document.write(html)
                }
            })
        } 
        else {
            if($('.check:checked').length == 0) {
                $.ajax({
                    url: '/List',
                    type: 'POST',
                    data: {
                        toDo_check: toDo_tache,
                        toDone_check: done_tache
                    },
                    success: function(html) {
                        var newWindow = window.open("", "_blank")
                        newWindow.document.write(html)
                    }
                })
            }
        }
    // ----------------------------------------------------------------------

        
    // Vérifiez si l'option avec la valeur "CardsIS" est sélectionnée
    } else if($('option[value="CardsIS"]').is(':selected')) {
        if($('.check:checked').length > 0) {
        // Ouvrir dans une nouvelle onglet
            // window.open('/CardsIS')

            $.ajax({
                url: '/CardsIS',
                type: 'POST',
                data: {
                    toDo_check: toDo_tache,
                    toDone_check: done_tache
                },
                success: function(html) {
                    // $('body').html(html)
                    var newWindow = window.open("", "_blank")
                    newWindow.document.write(html)
                }
            })
        } 
        else {
            if($('.check:checked').length == 0) {
                $.ajax({
                    url: '/CardsIS',
                    type: 'POST',
                    data: {
                        toDo_check: toDo_tache,
                        toDone_check: done_tache
                    },
                    success: function(html) {
                        var newWindow = window.open("", "_blank")
                        newWindow.document.write(html)
                    }
                })
            }
        }
    // ----------------------------------------------------------------------

    // Vérifiez si l'option avec la valeur "ProjectDashboard" est sélectionnée
    } else if($('option[value="ProjectDashboard"]').is(':selected')) {
        if($('.check:checked').length > 0) {
        // Ouvrir dans une nouvelle onglet
        // window.open('/ProjectDashboard')

        $.ajax({
            url: '/ProjectDashboard',
            type: 'POST',
            data: {
                toDo_check: toDo_tache,
                toDone_check: done_tache
            },
            success: function(html) {
                // $('body').html(html)
                var newWindow = window.open("", "_blank")
                newWindow.document.write(html)
            }
        })
        
        } 
        else {
            if($('.check:checked').length == 0) {
                $.ajax({
                    url: '/ProjectDashboard',
                    type: 'POST',
                    data: {
                        toDo_check: toDo_tache,
                        toDone_check: done_tache
                    },
                    success: function(html) {
                        var newWindow = window.open("", "_blank")
                        newWindow.document.write(html)
                    }
                })
            }
        }
    // ----------------------------------------------------------------------

    // Message d'alert si vous nous n'avez pas selectionne le bon format
    } 
        else {
        alert("Vous n'avez pas choisi le bon format")
        }
    // ----------------------------------------------------------------------
}