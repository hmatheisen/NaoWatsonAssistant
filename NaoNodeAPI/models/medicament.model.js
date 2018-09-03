const mongoose = require('mongoose');
const { Schema } = mongoose;

const medicamentSchema = new Schema({
    nom: String,
    createdAt: { type: Date, expires: '5m'}
});

const Medicament = mongoose.model('medicament', medicamentSchema);

module.exports = Medicament;