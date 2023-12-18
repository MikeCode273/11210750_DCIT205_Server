const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// Route to register a new patient
router.post('/register', async (req, res) => {
  try {
    const newPatient = await Patient.create(req.body);
    res.status(201).json(newPatient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
