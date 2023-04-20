function TachesPush(id) {
  // Prend la valeur de l'element cocher
  // console.log('dataToDo2: ', dataToDo)
  let indexToDo = dataToDo.findIndex(element => element.id == id)
  // let valeurToDo = dataToDo[indexToDo]
  let indexToDone = dataToDone.findIndex(element => element.id == id)
  // let valeurToDone = dataToDone[indexToDone]
  // ----------------------------------------------------------------------

  // Ajout et Stockage des données dans le stockage interne
  if (indexToDo !== -1) {
    toDo_tache.push(id)
    console.log('Do: ', toDo_tache)
  }

  if (indexToDone !== -1) {
    done_tache.push(id)
    console.log('Done: ', done_tache)
  }
  // ----------------------------------------------------------------------
}