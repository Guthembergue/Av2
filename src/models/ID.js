
const mongoose = require('mongoose');

const IDSchema = new mongoose.Schema({
    titulo: String,
    Login: { type: mongoose.Schema.Types.ObjectId, ref: 'Login' }, 
    anoPublicacao: Number
});

module.exports = mongoose.model('ID', IDSchema);
