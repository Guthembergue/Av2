
const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    nome: String,
    biografia: String
});

module.exports = mongoose.model('Login', LoginSchema);
