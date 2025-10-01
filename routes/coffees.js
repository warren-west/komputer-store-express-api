const router = require('express').Router()
const coffees = require('../data/coffees.json')

// Get all coffees
router.get('/', (req, res) => {
    try {
        const { name } = req.query
        let result = coffees
        
        // check for name param
        if (name) {
            // case-insensitive filter
            result = coffees.filter(c =>
                c.description.toLowerCase().includes(name.toLowerCase())
            )
        }
        
        return res.status(200).json(result)
    } catch (ex) {
        return res.status(500).json({ status: "Error 500", message: "Encountered unexpected server error." })
    }
})

// Get coffee by ID
router.get('/:id', (req, res) => {
    try {
        const id = req.params.id

        const result = coffees.find((c) => c.id === Number(id)) // coffee's id is a number field

        if (!result) return res.status(404).json({ status: "Error 404", message: `Coffee with id: ${id} not found!` })
        else return res.status(200).json(result)
    } catch (ex) {
        return res.status(500).json({ status: "Error 500", message: "Encountered unexpected server error." })
    }
})

module.exports = router