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
  zone: {
    type: String,
    trim: true,
    default: '',
  },
  position: {
    type: String,
    trim: true,
    default: '',
  },
  serveur: {
    type: String,
    enum: ['Mikhal', 'Dakal', 'Kourial'],
    default: 'Mikhal',
  },
  seasonId: {
    type: String,
    default: '',
    index: true,
  },
  statut: {
    type: String,
    enum: ['vivant', 'attaqué', 'mort'],
    default: 'vivant',
  },
  sacoche: {
    type: Boolean,
    default: false,
  },
  coffre: {
    type: Boolean,
    default: false,
  },
  cle: {
    type: Boolean,
    default: false,
  },
  posePar: {
    type: String,
    default: '',
  },
  ownerDiscordId: {
    type: String,
    default: '',
    index: true,
  },
  ownerDiscordName: {
    type: String,
    default: '',
  },
  notes: {
    type: String,
    default: '',
  },
  dateAjout: {
    type: Date,
    default: Date.now,
  },
  dateMaj: {
    type: Date,
    default: Date.now,
  },
});

percepteurSchema.pre('save', function (next) {
  this.dateMaj = new Date();
  next();
});

module.exports = mongoose.model('Percepteur', percepteurSchema);
