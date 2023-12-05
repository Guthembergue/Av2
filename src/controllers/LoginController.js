const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController');


router.post('/', LoginController.criarLogin);

router.get('/', LoginController.listarLogin);

router.put('/:id', LoginController.atualizarLogin);

router.delete('/:id', LoginController.deletarLogin);

module.exports = router;

