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

router.get('/', function(req, res) {
    let titre = 'Accueil'
    res.render('component/Accueil', { titre: titre, nav})
    // res.render('component/Taches')
    console.log('Hello world!')
})

router.get('/Taches', function(req, res) {
    let titre = 'Mes Taches'
    axios.get('http://10.210.210.92:3000/tasklist/283/129')
    .then(taches_data => {
        console.log('taches_data: ', taches_data.data.tasks);
        
        taches_data.data.tasks.forEach((value) => {
            if (value.hasOwnProperty('isDone') && value.isDone === 0) {
                toDo.push(value);
            } else if (value.hasOwnProperty('isDone') && value.isDone === 1) {
                toDone.push(value);
              }
        });
        res.render('component/Taches', {titre, toDo, toDone, nav })
        // res.render('component/Taches')
        console.log('Taches!')
    })
    
})

router.get('/FormatPDF', function(req, res) {
    let titre = 'FormatPDF'
    res.render('component/FormatPDF', {titre})
    console.log('FormatPDF')
})

router.get('/List', function(req, res) {
    let titre = 'List'
    res.render('component/List.ejs', {titre})
})

router.get('/CardsIS', function(req, res) {
    let titre = 'CardsIS'
    res.render('component/CardsIS.ejs', {titre})
})

router.get('/ProjectDashboard', function(req, res) {
    let titre = 'Project Dashboard'
    res.render('component/ProjectDashboard.ejs', {titre})
})

module.exports = router;