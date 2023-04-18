function TachesPush(id) {
  // Prend la valeur de l'element cocher
  // console.log('dataToDo2: ', dataToDo)
  let indexToDo = dataToDo.findIndex(element => element.id == id)
  let valeurToDo = dataToDo[indexToDo]
  let indexToDone = dataToDone.findIndex(element => element.id == id)
  let valeurToDone = dataToDone[indexToDone]
  // ----------------------------------------------------------------------

  // Ajout et Stockage des données dans le stockage interne
  if (indexToDo !== -1) {
    toDo_tache.push(valeurToDo)
    console.log('Do: ', toDo_tache)
    localStorage.setItem("jsonToDo", JSON.stringify(toDo_tache))
  }

  if (indexToDoing !== -1) {
    doing_tache.push(valeurToDoing)
    console.log('Doing: ', doing_tache)
    localStorage.setItem("jsonToDoing", JSON.stringify(doing_tache))
  }

  if (indexToDone !== -1) {
    done_tache.push(valeurToDone)
    console.log('Done: ', done_tache)
    localStorage.setItem("jsonToDone", JSON.stringify(done_tache)) 
  }
  // ----------------------------------------------------------------------
}