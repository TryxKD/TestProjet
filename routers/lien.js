const express = require('express');
const axios = require('axios')

var router = express.Router();

let nav = [
    {
        menu: 'Accueil',
        icon: 'fa-sharp fa-solid fa-house',
        url: './',
        class: 'li1'
    },
    {
        menu: 'Mes taches',
        icon: 'fa-sharp fa-regular fa-pen-to-square',
        url: './Taches',
        class: 'li2'
    },
    {
        menu: 'Boite de reception',
        url: '#',
        class: 'li3'
    },
    {
        menu: 'Exportation',
        url: '/FormatPDF',
        class: 'li4'
    },
    {
        menu: 'Objectifs',
        url: '#',
        class: 'li5'
    }
]
let toDo = []
let toDone = []
let toAll = []

router.get('/', function(req, res) {
    let titre = 'Accueil'
    res.render('component/Accueil', { titre: titre, nav})
    // res.render('component/Taches')
    console.log('Hello world!')
})

router.get('/Taches', function(req, res) {
    toDo = [];
    toDone = []
    toAll = []
    let titre = 'Mes Taches';
    axios.get('http://10.210.210.92:3000/tasklist/283/129')
    .then(taches_data => {
       // console.log('taches_data: ', taches_data.data.tasks);
        console.log('load tache');

        
        taches_data.data.tasks.forEach((value) => {
            if (value.hasOwnProperty('isDone') && value.isDone === 0) {
                toDo.push(value);
            } else if (value.hasOwnProperty('isDone') && value.isDone === 1) {
                toDone.push(value);
              }
        });

        taches_data.data.tasks.forEach((value) => {
            toAll.push(value)
        })

        res.render('component/Taches', {titre, toDo, toDone, nav })
        // res.render('component/Taches')
        console.log('Taches!')
    })
    
})

router.post('/FormatPDF', function(req, res) {
    let titre = 'FormatPDF'
    let toDo_check = req.body.toDo_check ?  req.body.toDo_check : [];
    let toDone_check = req.body.toDone_check ? req.body.toDone_check : []
    
    if(toDo_check.length == 0 && toDone_check.length == 0){
        res.render('component/FormatPDF', {titre, indexToDo: toDo, indexToDone: toDone})
    }
    else{
        let indexToDo = toDo.filter((element) => {
            if(toDo_check.includes(element.id.toString())){
                return true
            }  
        })

        let indexToDone = toDone.filter((element) => {
            if(toDone_check.includes(element.id.toString())){
                return true
            }  
        })
        res.render('component/FormatPDF', {titre, indexToDo, indexToDone})
    }
    
    console.log('FormatPDF')
})

router.post('/List', function(req, res) {
    let titre = 'List'
    let toDo_check = req.body.toDo_check ?  req.body.toDo_check : [];
    let toDone_check = req.body.toDone_check ? req.body.toDone_check : []

    if(toDo_check.length == 0 && toDone_check.length == 0){
        res.render('component/List', {titre, indexToDo: toDo, indexToDone: toDone})
    }
    else{
        let indexToDo = toDo.filter((element) => {
            if(toDo_check.includes(element.id.toString())){
                return true
            }  
        })

        let indexToDone = toDone.filter((element) => {
            if(toDone_check.includes(element.id.toString())){
                return true
            }  
        })
        res.render('component/List', {titre, indexToDo, indexToDone})
    }

    console.log('List')
})

router.post('/CardsIS', function(req, res) {
    let titre = 'CardsIS'
    let toDo_check = req.body.toDo_check ?  req.body.toDo_check : [];
    let toDone_check = req.body.toDone_check ? req.body.toDone_check : []

    if(toDo_check.length == 0 && toDone_check.length == 0){
        res.render('component/CardsIS', {titre, indexToDo: toDo, indexToDone: toDone})
    }
    else{
        let indexToDo = toDo.filter((element) => {
            if(toDo_check.includes(element.id.toString())){
                return true
            }  
        })

        let indexToDone = toDone.filter((element) => {
            if(toDone_check.includes(element.id.toString())){
                return true
            }  
        })
        res.render('component/CardsIS', {titre, indexToDo, indexToDone})
    }

    console.log('CardsIS')
})

router.post('/ProjectDashboard', function(req, res) {
    let titre = 'Project Dashboard'
    let toDo_check = req.body.toDo_check ?  req.body.toDo_check : [];
    let toDone_check = req.body.toDone_check ? req.body.toDone_check : []

    if(toDo_check.length == 0 && toDone_check.length == 0){
        res.render('component/ProjectDashboard', {titre, indexToDo: toDo, indexToDone: toDone})
    }
    else{
        let indexToDo = toDo.filter((element) => {
            if(toDo_check.includes(element.id.toString())){
                return true
            }  
        })

        let indexToDone = toDone.filter((element) => {
            if(toDone_check.includes(element.id.toString())){
                return true
            }  
        })
        res.render('component/ProjectDashboard', {titre, indexToDo, indexToDone})
    }

    console.log('ProjectDashboard')
})

module.exports = router;