const express = require('express');

const db = require('../data/model');

const router = express.Router();


// GET guest and party
router.get('/', async (req, res) => {
    const { first, last } = req.query;
    try {
        const info = await db.findBy({ first, last });
        if (!info) {
            res.status(404).json({ message: "Guest not found.", info });
        }
        res.status(200).json({ guests: info });
    } catch (error) {
        console.log(`\nError fetching guest info:\n${error}\n`);
        res.status(500).json({ message: "Internal server error", error });
    }
})


// Update guest and party info
router.put('/', async (req, res) => {
    const changes = req.body;
    try {
        const updated = await db.update(changes);
        if (!updated) {
            res.status(500).json({ message: "Error updating guest information.", error });
        }
        res.status(201).json({ updated });
    } catch (error) {
        res.status(500).json({ message: "Error updating guest information." });
    }
})

module.exports = router;