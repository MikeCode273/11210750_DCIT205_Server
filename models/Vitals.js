const mongoose = require('mongoose');

const vitalSchema = new mongoose.Schema({
  patientID: { type: String, required: true },
  bloodPressure: { type: String, required: true },
  temperature: { type: Number, required: true },
  pulse: { type: Number, required: true },
  spO2: { type: Number, required: true }
});

const Vital = mongoose.model('Vital', vitalSchema);

module.exports = Vital;
