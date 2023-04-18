function TachesSplice(id) {
    // Initialisation des variables
    // Prend l'id de l'element a supprimer
    // let id = $(this).val()

    // Prend la valeur de l'element a supprimer
    let indexToDo = toDo_tache.findIndex(element => element.id == id)
    let indexToDoing = doing_tache.findIndex(element => element.id == id)
    let indexToDone = done_tache.findIndex(element => element.id == id)
    // ----------------------------------------------------------------------

    // Suppression de l'élément du tableau et reinitialisation du tableau
    if (indexToDo !== -1) {
    toDo_tache.splice(indexToDo, 1)
    console.log('Do: ', toDo_tache)
    localStorage.setItem("jsonToDo", JSON.stringify(toDo_tache))
    }

    if (indexToDoing !== -1) {
    doing_tache.splice(indexToDoing, 1)
    console.log('Doing: ', doing_tache)
    localStorage.setItem("jsonToDoing", JSON.stringify(doing_tache))
    }

    if (indexToDone !== -1) {
    done_tache.splice(indexToDone, 1)
    console.log('Done: ', done_tache)
    localStorage.setItem("jsonToDone", JSON.stringify(done_tache)) 
    }
    // ----------------------------------------------------------------------
}