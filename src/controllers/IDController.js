
const ID = require('../models/ID');

exports.criarID = async (req, res) => {
    router.post('/', IDController.criarID);
};

exports.listarID = async (req, res) => {
    try {
        const ID = await ID.find().populate('Login'); 
        res.json(ID);
    } catch (err) {
        res.status(500).send('Erro ao recuperar ID');
    }
};

router.put('/:id', IDController.atualizarID);

router.delete('/:id', IDController.deletarID);
