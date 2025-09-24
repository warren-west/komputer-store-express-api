require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

const computersRouter = require('./routes/computers.js')
const guitarsRouter = require('./routes/guitars.js')

app.use(express.json())

// Map routes
app.use('/computers', computersRouter)
app.use('/guitars', guitarsRouter)

app.get('/', (req, res) => {    
    return res.status(200).json({
        status: "Success",
        message: "Welcome to the Noroff assignment API!",
        endpoints: [
            "GET '/computers': Returns all computers in the database.",
            "GET '/computers/{:id}': Returns a single computer where the ID matches.",
            "GET '/guitars': Returns all guitars in the database.",
            "GET '/guitars/{:id}': Returns a single guitar where the ID matches.",
        ]
    })
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