const router = require('express').Router()
const computers = require('../data/computers.json')

// Get all computers
router.get('/', (req, res) => {
    try {
        return res.status(200).json(computers)
    } catch (ex) {
        return res.status(500).json({ status: "Error 500", message: "Encountered unexpected server error." })
    }
})

// Get computer by ID
router.get('/:id', (req, res) => {
    try {
        const id = req.params.id

        const result = computers.find((c) => c.id === Number(id)) // guitar's id is a number field

        if (!result) return res.status(404).json({ status: "Error 404", message: `Computer with id: ${id} not found!` })
        else return res.status(200).json(result)
    } catch (ex) {
        return res.status(500).json({ status: "Error 500", message: "Encountered unexpected server error." })
    }
})

module.exports = router