function TachesSplice(id) {
    // Initialisation des variables
    // Prend l'id de l'element a supprimer
    // let id = $(this).val()

    // Prend la valeur de l'element a supprimer
    let indexToDo = toDo_tache.findIndex(element => element == id)
    let indexToDone = done_tache.findIndex(element => element == id)
    // ----------------------------------------------------------------------

    // Suppression de l'élément du tableau et reinitialisation du tableau
    if (indexToDo !== -1) {
        toDo_tache.splice(indexToDo, 1)
        console.log('Do: ', toDo_tache)
    }

    if (indexToDone !== -1) {
        done_tache.splice(indexToDone, 1)
        console.log('Done: ', done_tache)
    }
    // ----------------------------------------------------------------------
}