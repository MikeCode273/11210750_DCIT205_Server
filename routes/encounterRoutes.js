const express = require('express');
const router = express.Router();
const Encounter = require('../models/Encounter');

// Route to start an encounter for a patient
router.post('/start', async (req, res) => {
  try {
    const newEncounter = await Encounter.create(req.body);
    res.status(201).json(newEncounter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
