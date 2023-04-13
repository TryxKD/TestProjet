require('dotenv').config()
// var html_to_pdf = require('html-pdf-node')
const ejs = require('ejs')
const express = require('express')
const cookieSession = require('express-session')
const router = require('../routers/lien.js')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const lien = require('../routers/lien')
const app = express()
const path = require('path')

const port2 = process.env.PORT || 3000
// const uri = 'mongodb://localhost:27017/Test'
// const MongoClient = require('mongodb').MongoClient
const finalHandler = require('finalhandler');
const http = require('http');

// --------- Router ---------

// app.set('views', '../views');
app.set('view engine', 'ejs');

// app.use('/', lien);
// app.use('', require('../routers/lien'))

// ---------------------------

// --------- Mongoose Connection ---------

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connecter'))

// ---------------------------

// --------- Milieu ---------

app.use('', router)
app.use(cookieSession({
    name: 'session',
    secret: 'Mon secret',
    saveUninitialized:true,
    resave: false,
    keys: ['key1', 'key2'],
    SameSite: 'None', // permet le partage de cookie entre des domaines différents
    secure: true // indique que les cookies doivent être envoyés uniquement via HTTPS
}))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static(path.join(__dirname, '../views/')))


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.render('index.ejs');
});

// ---------------------------

ejs.render('Bonjour <%= name %> !', {name: 'world'})

app.listen(5000, () => {
    console.log("http://localhost:3000")
})