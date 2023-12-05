
const express = require('express');
const router = express.Router();
const CompraController = require('../controllers/CompraController');

router.post('/', CompraController.criarCompra);
router.get('/', CompraController.listarCompra);

router.put('/:id', CompraController.atualizarCompra);
router.delete('/:id', CompraController.deletarCompra);

module.exports = router;
