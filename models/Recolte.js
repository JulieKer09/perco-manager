const mongoose = require('mongoose');

const recolteSchema = new mongoose.Schema({
  percoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Percepteur' },
  zone:    { type: String, default: '' },
  potionLevel: { type: Number, default: null },
  serveur: { type: String, enum: ['Mikhal', 'Dakal', 'Kourial'] },
  valeur:  { type: Number, default: 0 },
  eventType: { type: String, enum: ['pose', 'recolte', 'mort'], default: 'recolte' },
  repose:  { type: Boolean, default: false },
  pertes:  { type: [String], default: [] },
  ownerKey:   { type: String, default: 'moi' },
  ownerName:  { type: String, default: 'Moi' },
  ownerColor: { type: String, default: '#7a7a9a' },
  ownerTagId: { type: String, default: '' },
  ownerDiscordId: { type: String, default: '', index: true },
  ownerDiscordName: { type: String, default: '' },
  date:    { type: Date, default: Date.now },
});

module.exports = mongoose.model('Recolte', recolteSchema);
