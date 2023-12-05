
const mongoose = require('mongoose');

const CompraSchema = new mongoose.Schema({
    ID: { type: mongoose.Schema.Types.ObjectId, ref: 'ID' },
    dataCompra: Date,
    dataDevolucao: Date
});

module.exports = mongoose.model('Compra', CompraSchema);
