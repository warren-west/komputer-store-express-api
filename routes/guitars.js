const router = require('express').Router()
const guitars = require('../data/guitars.json')

// Get all guitars
router.get('/', (req, res) => {
    try {
        return res.status(200).json(guitars)
    } catch (ex) {
        return res.status(500).json({ status: "Error 500", message: "Encountered unexpected server error." })
    }
})

// Get guitar by ID
router.get('/:id', (req, res) => {
    try {
        const id = req.params.id

        console.log(id)
        
        const result = guitars.find((g) => g.id === id) // guitar's id is a text field
        console.log(result)

        if (!result) return res.status(404).json({ status: "Error 404", message: `Guitar with id: ${id} not found!` })
        else return res.status(200).json(result)
    } catch (ex) {
        return res.status(500).json({ status: "Error 500", message: "Encountered unexpected server error." })
    }
})

module.exports = router