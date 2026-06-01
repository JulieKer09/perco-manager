const mongoose = require('mongoose');

const saisonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  serveur: {
    type: String,
    enum: ['Mikhal', 'Dakal', 'Kourial'],
    required: true,
  },
  dateDebut: {
    type: Date,
    required: true,
  },
  dateFin: {
    type: Date,
    required: true,
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

saisonSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

saisonSchema.pre('validate', function (next) {
  if (
    this.dateDebut instanceof Date &&
    this.dateFin instanceof Date &&
    this.dateFin < this.dateDebut
  ) {
    this.invalidate('dateFin', 'La date de fin doit etre superieure ou egale a la date de debut.');
  }
  next();
});

saisonSchema.index({ ownerDiscordId: 1, serveur: 1, dateDebut: -1 });

module.exports = mongoose.model('Saison', saisonSchema);
