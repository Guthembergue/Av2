
const express = require('express');
const router = express.Router();
const IDController = require('../controllers/IDController');

router.post('/', IDController.criarID);
router.get('/', IDController.listarID);

router.put('/:id', IDController.atualizarID);

router.delete('/:id', IDController.deletarID);

module.exports = router;
