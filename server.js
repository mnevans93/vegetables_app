require('dotenv').config()
const express = require('express')
const vegetables = require('./models/vegetables')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

const port = 3000

//INDEX
app.get('/vegetables', (req, res) => {
    res.render('vegetables/Index', { vegetables: vegetables })
})

//NEW

//DELETE

//UPDATES

//CREATE

//EDIT

//SHOW
app.get('/vegetables/:indexOfVegetablesArray', (req, res) => {
    res.render('vegetables/Show', {
        vegetable: vegetables[req.params.indexOfVegetablesArray]
    })
})

//LISTEN AND OTHER MISC FUNCTIONS
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})