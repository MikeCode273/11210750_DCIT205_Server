const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  patientID: { type: String, required: true },
  dateTime: { type: Date, default: Date.now },
  encounterType: { type: String, enum: ['Emergency', 'OPD', 'Specialist Care'], required: true }
});

const Encounter = mongoose.model('Encounter', encounterSchema);

module.exports = Encounter;
