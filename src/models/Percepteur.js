const mongoose = require('mongoose');

const percepteurSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true,
  },
  map: {
    type: String,
    required: true,
    trim: true,
  },
  position: {
    type: String,
    trim: true,
    default: null,
  },
  statut: {
    type: String,
    enum: ['vivant', 'attaqué', 'mort'],
    default: 'vivant',
  },
  posePar: {
    type: String, // username Discord
    required: true,
  },
  poseParId: {
    type: String, // ID Discord
    required: true,
  },
  dateAjout: {
    type: Date,
    default: Date.now,
  },
  dateMaj: {
    type: Date,
    default: Date.now,
  },
  notes: {
    type: String,
    default: '',
  },
});

percepteurSchema.pre('save', function (next) {
  this.dateMaj = new Date();
  next();
});

module.exports = mongoose.model('Percepteur', percepteurSchema);
