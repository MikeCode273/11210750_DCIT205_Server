const express = require('express');
const router = express.Router();
const Vital = require('../models/Vital');

// Route to submit patient vitals
router.post('/', async (req, res) => {
  try {
    const newVital = await Vital.create(req.body);
    res.status(201).json(newVital);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
