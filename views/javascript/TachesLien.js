function TachesLien() {
    // Vérification si l'option avec la valeur "ListeSection" est sélectionnée
    if ($('option[value="ListSection"]').is(':selected')) {
        if($('.check:checked').length > 0) {
        // Ouvrir dans une nouvelle onglet
        window.open("/FormatPDF")
        } 
        else {
            if($('.check:checked').length == 0) {
            toDo_tache.push(...dataToDo)
            console.log('toDo_tache: ', toDo_tache);
            done_tache.push(...dataToDone)
            console.log('done_tache: ', done_tache);
            localStorage.setItem('jsonToDo', JSON.stringify(toDo_tache))
            localStorage.setItem("jsonToDoing", JSON.stringify(doing_tache))
            localStorage.setItem("jsonToDone", JSON.stringify(done_tache)) 
            window.open("/FormatPDF")
            }
        }
    // ----------------------------------------------------------------------

    // Vérification si l'option avec la valeur "Liste" est sélectionnée
    } else if( $('option[value="List"]').is(':selected')) {
        if($('.check:checked').length > 0) {
        // Ouvrir dans une nouvelle onglet
        window.open('/List')
        } 
        else {
            if($('.check:checked').length == 0) {
            toDo_tache.push(...dataToDo)
            console.log('toDo_tache: ', toDo_tache);
            done_tache.push(...dataToDone)
            console.log('done_tache: ', done_tache);
            localStorage.setItem('jsonToDo', JSON.stringify(toDo_tache))
            localStorage.setItem("jsonToDoing", JSON.stringify(doing_tache))
            localStorage.setItem("jsonToDone", JSON.stringify(done_tache)) 
            window.open("/List")
            }
        }
    // ----------------------------------------------------------------------

        
    // Vérifiez si l'option avec la valeur "CardsIS" est sélectionnée
    } else if($('option[value="CardsIS"]').is(':selected')) {
        if($('.check:checked').length > 0) {
        // Ouvrir dans une nouvelle onglet
            window.open('/CardsIS')
        } 
        else {
            if($('.check:checked').length == 0) {
            toDo_tache.push(...dataToDo)
            console.log('toDo_tache: ', toDo_tache);
            done_tache.push(...dataToDone)
            console.log('done_tache: ', done_tache);
            localStorage.setItem('jsonToDo', JSON.stringify(toDo_tache))
            localStorage.setItem("jsonToDoing", JSON.stringify(doing_tache))
            localStorage.setItem("jsonToDone", JSON.stringify(done_tache)) 
            window.open("/CardsIS")
            }
        }
    // ----------------------------------------------------------------------

    // Vérifiez si l'option avec la valeur "ProjectDashboard" est sélectionnée
    } else if($('option[value="ProjectDashboard"]').is(':selected')) {
        if($('.check:checked').length > 0) {
        // Ouvrir dans une nouvelle onglet
        window.open('/ProjectDashboard')
        
        } 
        else {
            if($('.check:checked').length == 0) {
            toDo_tache.push(...dataToDo)
            console.log('toDo_tache: ', toDo_tache);
            done_tache.push(...dataToDone)
            console.log('done_tache: ', done_tache);
            localStorage.setItem('jsonToDo', JSON.stringify(toDo_tache))
            localStorage.setItem("jsonToDoing", JSON.stringify(doing_tache))
            localStorage.setItem("jsonToDone", JSON.stringify(done_tache)) 
            window.open("/ProjectDashboard")
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