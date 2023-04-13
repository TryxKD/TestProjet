// Prend les donnees stocker dans le stockage interne et les convertis en JSON
var jsonObjectToDo = JSON.parse(localStorage.getItem('jsonToDo'))
var jsonObjectToDoing = JSON.parse(localStorage.getItem('jsonToDoing'))
var jsonObjectToDone = JSON.parse(localStorage.getItem('jsonToDone'))
// ----------------------------------------------------------------------