// Declaration et initialisation variable 
jsonObjectToDo = jsonObjectToDo ? jsonObjectToDo : []
jsonObjectToDoing = jsonObjectToDoing ? jsonObjectToDoing : []
jsonObjectToDone = jsonObjectToDone ? jsonObjectToDone : []
var tabList = [...jsonObjectToDo, ...jsonObjectToDoing, ...jsonObjectToDone]
console.log('tabList: ', tabList);

var deb = 0;
console.log('deb: ', deb);
var fin = 16
console.log('fin: ', fin);
var dim = tabList.length - 1;
console.log('dim: ', dim);

// ----------------------------------------------------------------------