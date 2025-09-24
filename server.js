require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

const computers = require('./data/computers.json')

app.use(express.json())

app.get('/', (req, res) => {    
    return res.status(200).json({
        status: "Success",
        message: "Welcome to the komputer-store API!",
        endpoints: [
            "GET '/computers': Returns all computers in the database.",
            "GET '/computers/{:id}': Returns a single computer where the ID matches.",
        ]
    })
})

app.get('/computers', (req, res) => {
    try {
        return res.status(200).json(computers)
    } catch(ex) {
        console.error(ex.message)
    }
})

app.get('/computers/:id', (req, res) => {
    try {
        const computerId = req.params.id
    
        const result = computers.find((c) => c.id === Number(computerId))

        JSON.stringify()

        console.log(`computerId: ${computerId}`)
        console.log(`result: ${result}`)
    
        if (!result) return res.status(404).json({ status: "Error 404", message: `Computer with id: ${computerId} not found!` })
        else return res.status(200).json(result)
    } catch (ex) {
        console.error(ex.message)
    }
})

//Capture All 404 errors
app.use(function (req, res, next){
    try {
        res.status(404).json({ status: "Error 404", message: `${req.method.toUpperCase()} ${req.originalUrl} does not exist!`})
    } catch (ex) {
        console.error(ex.message)
    }
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})