require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Vegetable = require('./models/vegetable.js')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())
mongoose.connect(process.env.MONGO_URI, { useNewURLParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB Atlas')
})

const port = 3000

//INDEX
app.get('/vegetables', (req, res) => {
    Vegetable.find({}, (error, allVegetables) => {
        res.render('vegetables/Index', { vegetables: allVegetables })
    })
})

//NEW
app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New')
})

//DELETE

//UPDATES

//CREATE
app.post('/vegetables', (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    Vegetable.create(req.body, (error, createdVegetable) => {
        res.redirect('/vegetables')
    })
})

//EDIT

//SHOW
app.get('/vegetables/:id', (req, res) => {
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
        res.render('vegetables/Show', {
            vegetable: foundVegetable
        })
    })
})

//LISTEN AND OTHER FUNCTIONS
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})